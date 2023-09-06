import React, { useState } from "react";
import "./LoginPage.css";
import ImageButton from "./ImageButton";
import { useNavigate } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";

const Login = () => {
  const onChange = () => {
    const kakaoClientId = "61342a480837d4d443ab92b57c8068dc";
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    /* something to do !!! */
    navigate("/personal");
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className="login-container">
        <div className="login-box">
          <h2>로그인</h2>
          <div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div>
                <p>이메일</p>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <p>비밀번호</p>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div
                style={{
                  border: "2%",
                  paddingBottom: "5%",
                  marginRight: "5%",
                  textAlign: "right",
                  color: "#999999",
                }}
              >
                <a href="/">아이디/비밀번호를 잊어버리셨나요?</a>
              </div>
              <button
                type="submit"
                style={{ height: "15%" }}
                className="submit-button"
              >
                로그인하기
              </button>
            </form>
          </div>
          <div
            style={{
              marginLeft: "44%",
              marginRight: "44%",
              marginTop: "10%",
              padding: "2%",
              paddingTop: "2.5%",
              border: "1px solid #797979",
              borderRadius: "15px",
              border: "none",
              width: "10%",
            }}
          >
            {/* <ImageButton
              to="/"
              src="/images/kakao_icon.png"
              alt="카카오톡으로 로그인하기"
              classNameLink="rounded-Link"
              classNameImg="social-login-image"
            /> */}
            <KakaoLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
