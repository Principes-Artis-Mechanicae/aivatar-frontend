import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCheck = () => {
  let [Logedin, setLogedin] = useState(false);
  const Navigate = useNavigate();

  function navigate(trueOpt, falseOpt) {
    if (Logedin === true) {
      Navigate(trueOpt);
    } else {
      Navigate(falseOpt);
      return;
    }
  }
  
};

export default LoginCheck;
