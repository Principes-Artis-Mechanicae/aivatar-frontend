import React, { useState } from "react";
import "./MainPage.css";
import Button from "./Button";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "react-kakao-login";

function App() {
  let [Logedin, setLogedin] = useState(false);
  const Navigate = useNavigate();
  console.log("checked");

  function LoginCheck() {
    if (Logedin === true) {
      Navigate("/personal");
    } else {
      Navigate("/login");
    }
  }

  return (
    <div
      className="container"
      style={{ backgroundImage: "url(/images/1.png)" }}
    >
      <Header />
      <main className="main">
        <h2 style={{ marginTop: "100%" }}>
          새로운 나를 찾아서,
          <span className="gradient-text"> Aivatar</span>
        </h2>
        <h4 style={{ color: "#999999" }}>설명 어쩌구</h4>
        <button
          onClick={LoginCheck}
          className="rainbow-button"
          style={{ marginTop: "15%" }}
          onSubmit={KakaoLogin.onSuccess}
        >
          시작하기
        </button>
      </main>
      <footer className="footer">
        <p>&copy; 2023 aivatar project</p>
      </footer>
    </div>
  );
}

export default App;
