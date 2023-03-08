import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
const LoginPage = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/homepage");
    }
  }, []);
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    let userObject = jwt_decode(response.credential);
    const { given_name, family_name, picture } = userObject;
    localStorage.setItem(
      "user",
      JSON.stringify({ given_name, family_name, picture })
    );
    navigate("/homepage");
  };
  return (
    <GoogleLogin
      onSuccess={responseGoogle}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default LoginPage;
