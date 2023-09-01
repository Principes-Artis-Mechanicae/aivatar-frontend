import React, { useState } from "react";
import "./UploadImageModal.css";
import "../App.css";
import ImageButton from "./ImageButton";
import UploadImage from "./UploadImage";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Modal = ({ isOpen, onClose, state }) => (
  <div className={`modal ${isOpen ? "open" : ""}`}>
    <div className="modal-content">
      <h2 style={{ margin: "3vh" }}>공유하기</h2>
      <img
        src="/images/picture-dynamic-color.png"
        style={{ height: "15vh", margin: "3vh" }}
      />
      <p>전달된 state id: {state ? state.id : "none"}</p>
      <Button onClick={onClose} classNameButton="grey-button" text="닫기" />
    </div>
  </div>
);

function ModalButton({ curState }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

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
  const initialState =
    curState || location.state || loadStateFromLocalStorage();
  const [state, setState] = useState(initialState);
  const src = state.src;

  const openModal = () => {
    console.log("modal opened");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("modal closed");
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        margin: "1em",
      }}
    >
      <ImageButton
        style={{
          width: "2em",
          padding: "1.5em",
          borderRadius: "50%",
          backgroundColor: "white",
          paddingRight: "1.7em",
          marginTop: "5%",
        }}
        src="/images/share_icon.png"
        onClick={openModal}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} state={state} />
    </div>
  );
}

export default ModalButton;
