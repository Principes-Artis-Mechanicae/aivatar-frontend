import { useState } from "react";
import ImageButton from "./ImageButton";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  let [Logedin, setLogedin] = useState(false);
  const Navigate = useNavigate();

  return (
    <header className="header">
      <div className="image-links" style={{ marginLeft: "10px" }}></div>
      <div className="center-image">
        <ImageButton to="/" src={"/images/IMG_0058.PNG"} alt="Logo" />
      </div>
      <div className="image-links">
        <ImageButton
          to="/personal"
          src={"/images/IMG_0055.PNG"}
          alt="마이페이지"
        />
        <ImageButton to="/gallery" src={"/images/IMG_0056.PNG"} alt="갤러리" />
      </div>
    </header>
  );
}

export default Header;
