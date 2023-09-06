import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Header from "./Header";
import ShareImageModal from "./ShareImageModal";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import ImageButton from "./ImageButton";

function GalleryImages() {
  const location = useLocation();

  // 페이지나 컴포넌트에서 초기 로드 시에 상태를 가져오는 시점
  const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("myAppState");
      if (serializedState === null) {
        return undefined; // 저장된 상태가 없으면 undefined 반환
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error("Error loading state from localStorage:", error);
      return undefined;
    }
  };

  const initialState = location.state || loadStateFromLocalStorage();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    saveStateToLocalStorage(state);
  }, [state]);

  // 페이지나 컴포넌트에서 상태를 저장하는 시점
  const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("myAppState", serializedState);
    } catch (error) {
      console.error("Error saving state to localStorage:", error);
    }
  };

  const downloadFile = (url) => {
    url = src;

    fetch(url, { method: "GET" })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = src;
        document.body.appendChild(a);
        a.click();
        setTimeout((_) => {
          window.URL.revokeObjectURL(url);
        }, 60000);
        a.remove();
        //setOpen(false);
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  const id = state ? state.id : null; // null 체크
  const title = state ? state.title : null; // null 체크
  const src = state ? state.src : "url(/images/1.png)";

  return (
    <div
      className="container"
      id="bg"
      style={{ backgroundImage: `url(${src})`, backgroundPositionY: "30%" }}
    >
      <Header />
      <main className="main">
        <h1
          style={{
            backgroundColor: "transparent",
            color: "#f5f5f5",
            textAlign: "left",
            marginTop: "5vh",
            marginLeft: "5%",
          }}
        >
          {title}
        </h1>
        <div style={{ marginTop: "65vh" }}>
          <ShareImageModal curState={state} />
          <Button
            classNameButton="rainbow-button"
            style={{
              borderRadius: "50px",
              marginTop: "1em",
              marginLeft: "7em",
              width: "70%",
              height: "5em",
            }}
            onClick={downloadFile}
            text="이미지 저장하기"
          />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 aivatar project</p>
      </footer>
    </div>
  );
}

export default GalleryImages;
