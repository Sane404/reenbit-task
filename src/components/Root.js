import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./Root.css";
const Root = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  let userinstorage = localStorage.getItem("user");
  useEffect(() => {
    if (userinstorage) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [userinstorage]);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    googleLogout();
    navigate("/");
  };
  return (
    <>
      <header>
        <p className="app-header-title">Rick&#38;Morty API</p>
        {user && (
          <div className="user-info">
            <img
              src={user.picture}
              alt="User"
              className="header-image user_picture"
            />
            <p>{`${user.given_name} ${user.family_name}`}</p>
            <img
              src="/logout.svg"
              alt="logout button"
              className="header-image logout"
              onClick={logout}
            />
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
