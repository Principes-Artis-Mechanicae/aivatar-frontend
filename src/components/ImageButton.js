import React from "react";
import { Link } from "react-router-dom";

const ImageButton = ({
  to,
  src,
  alt,
  style,
  classNameLink,
  classNameImg,
  onClick,
  state,
}) => (
  <Link to={to} state={state} className={classNameLink}>
    <img
      style={style}
      src={src}
      alt={alt}
      className={classNameImg}
      onClick={onClick}
    />
  </Link>
);

export default ImageButton;
