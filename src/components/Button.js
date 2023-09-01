import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const StartButton = ({
  to,
  classNameLink,
  classNameButton,
  text,
  onClick,
  style,
}) => (
  <Link to={to} className={classNameLink}>
    <button className={classNameButton} onClick={onClick} style={style}>
      {text}
    </button>
  </Link>
);

export default StartButton;
