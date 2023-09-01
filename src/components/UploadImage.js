import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function UploadImage() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const selectFileButton = useRef("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    console.log("file:", file);
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      console.log(file);
      // axios({
      //   baseURL: API_HOST,
      //   url: "/images/:username/thumbnail",
      //   method: "POST",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      navigate("/complete");
    } else {
      console.log("timing error");
    }
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <input
        type="file"
        style={{ display: "none" }}
        ref={selectFileButton} //input에 접근 하기위해 useRef사용
        onChange={handleImageChange}
      />
      <button
        type="submit"
        className="submit-button"
        onClick={() => {
          selectFileButton.current.click();
        }}
      >
        업로드
      </button>
    </div>
  );
}

export default UploadImage;
