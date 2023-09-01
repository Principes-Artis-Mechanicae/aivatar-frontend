import React from "react";
import "./MainPage.css";
import CenterMode from "./SimpleSlider.js";
import ModalButton from "./UploadImageModal";
import Header from "./Header";
import Button from "./Button";

function PersonalMain() {
  return (
    <div
      className="container"
      style={{ backgroundImage: "url(/images/background.png)" }}
    >
      <Header />
      <main className="main">
        <CenterMode
          style={{ marginBottom: "100%", paddingBottom: "100%" }}
        ></CenterMode>
        <ModalButton></ModalButton>
        <Button
          to="/gallery"
          text="내 갤러리"
          classNameButton="rainbow-border-button"
        />
      </main>
      <footer className="footer">
        <p>&copy; 2023 aivatar project</p>
      </footer>
    </div>
  );
}

export default PersonalMain;
