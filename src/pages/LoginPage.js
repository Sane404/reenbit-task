import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import "./LoginPage.css";
const LoginPage = () => {
  //if user exists redirect right away
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/homepage");
    }
  }, []);

  const navigate = useNavigate();
  const responseGoogle = (response) => {
    let userObject = jwt_decode(response.credential);
    const { given_name, family_name, picture } = userObject;
    localStorage.setItem("user", JSON.stringify({ given_name, family_name, picture }));
    navigate("/homepage");
  };
  return (
    <div className="login_page">
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default LoginPage;
