import React from "react";
import "./MainPage.css";
import Button from "./Button";
import Header from "./Header";

function App() {
  const time = 30;
  return (
    <div className="container">
      <Header />
      <main className="main">
        <img
          src="./images/done_icon.png"
          style={{ marginTop: "40%", width: "20%" }}
        />
        <h2 style={{ marginTop: "20%" }}>
          <span className="gradient-text">업로드 완료!</span>
        </h2>
        <h4 style={{ color: "#999999" }}>
          이미지 완성까지 {time}분 남았습니다.
        </h4>
        <Button to="/" classNameButton="white-button" text="홈으로" />
        <Button
          to="/gallery"
          classNameButton="rainbow-button"
          style={{ marginTop: "5%" }}
          text="내 갤러리로"
        />
      </main>
      <footer className="footer">
        <p>&copy; 2023 aivatar project</p>
      </footer>
    </div>
  );
}

export default App;
