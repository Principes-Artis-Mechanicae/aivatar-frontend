import KakaoLogin from "react-kakao-login";
import { useNavigate } from "react-router-dom";

const SocialKakao = () => {
  const kakaoClientId = "61342a480837d4d443ab92b57c8068dc";
  const navigate = useNavigate();

  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const idToken = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    navigate("/personal");
  };

  const kakaoOnFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <KakaoLogin
        className=""
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
      />
    </>
  );
};

export default SocialKakao;
