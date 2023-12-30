import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../config/context/AuthContext";
import { LoginController } from "../utils/controllers";
import GoogleButton from "react-google-button";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();
  // const callback = (data) => {
  //   setLoginInfo({
  //     ...loginInfo,
  //     ...data,
  //   });
  // };

  const auth = UserAuth();

  const controller = new LoginController(auth, loginInfo);

  const handleLogin = async () => {
    await controller.handleGoogleSignIn();
  };

  useEffect(() => {
    if (auth.currentUser) {
      if (auth.isNew) {
        navigate("/register");
      } else {
        navigate("/home");
      }
    }
  }, [auth.currentUser, navigate, auth.isNew]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Tekniko</h1>
          <GoogleButton onClick={handleLogin} className="mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Login;
