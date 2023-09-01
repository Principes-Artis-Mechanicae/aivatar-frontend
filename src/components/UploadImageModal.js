import React, { useState } from "react";
import "./UploadImageModal.css";
import "../App.css";
import Button from "./Button";
import UploadImage from "./UploadImage";

const Modal = ({ isOpen, onClose }) => (
  <div className={`modal ${isOpen ? "open" : ""}`}>
    <div className="modal-content">
      <h2 style={{ margin: "3vh" }}>사진 업로드</h2>
      <img
        src="/images/picture-dynamic-color.png"
        style={{ height: "15vh", margin: "3vh" }}
      />
      <p>변경하고 싶은 사진을 선택해주세요!</p>
      <UploadImage />
      <Button onClick={onClose} classNameButton="grey-button" text="닫기" />
    </div>
  </div>
);

const ModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="rainbow-button"
        style={{ marginTop: "15%" }}
        onClick={openModal}
      >
        이미지 업로드하기
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalButton;
