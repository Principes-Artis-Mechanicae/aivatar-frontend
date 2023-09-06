import React, { useState } from "react";
import "./MainPage.css";
import Header from "./Header";
import ImageButton from "./ImageButton";
import { useNavigate, useEffect } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  let [GalleryObjs, setGalleryObjs] = useState([
    {
      key: "1",
      id: "1",
      title: "이미지 생성 완료!",
      src: "/images/picture-dynamic-color.png",
    },
    {
      key: "2",
      id: "2",
      title: "이미지 생성 완료!",
      src: "/images/gallery_1.png",
    },
    {
      key: "333",
      id: "333",
      title: "이미지 생성 중...",
      src: "/images/img.png",
    },
  ]);
  /* GalleryObj source 받기 */

  function renderLinks(GalleryObjs) {
    let result = [];
    for (let i = 0; i < GalleryObjs.length; i++) {
      let obj = GalleryObjs[i];
      console.log("obj: " + obj.id);

      const handleClick = () => {
        // `navigate`가 네비게이션을 처리하는 함수라고 가정합니다
        navigate(`/gallery/${obj.id}`, { state: obj });
      };

      result.push(
        <div
          style={{
            width: "40%",
            height: "20vh",
            display: "inline-block",
            margin: "5%",
          }}
        >
          <button
            onClick={handleClick}
            alt="img"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "23px",
              backgroundColor: "white",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={obj.src}
              style={{
                width: "120%",
                minWidth: "120%",
                height: "100%",
                minHeight: "100%",
                border: "none",
                objectFit: "cover",
                flex: "1",
              }}
            />
          </button>
          <p style={{ marginTop: "2%" }}>{obj.title}</p>
        </div>
      );
    }

    if (GalleryObjs.length / 2) {
      result.push(
        <div
          style={{
            width: "40%",
            height: "20vh",
            display: "inline-block",
            margin: "5%",
          }}
        >
          <button
            alt="img"
            style={{
              margin: "1%",
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <img
              style={{ width: "40%", border: "none", borderRadius: "20px" }}
            />
          </button>
          <p>&nbsp;</p>
        </div>
      );
    }
    console.log("result:", result);
    return result;
  }

  return (
    <div className="container">
      <Header />
      <main className="main">
        <h2 style={{ marginTop: "10%" }}>
          <span className="gradient-text">내 갤러리</span>
        </h2>
        <div style={{ display: "inline-block", margin: "5%" }}>
          {renderLinks(GalleryObjs)}
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 aivatar project</p>
      </footer>
    </div>
  );
}

export default Gallery;
