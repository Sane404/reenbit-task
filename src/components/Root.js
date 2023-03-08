import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
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
        <h2>Logo</h2>
        {user && (
          <>
            <div>
              {`${user.given_name} ${user.family_name}`}
              <button onClick={logout}>Logout</button>
            </div>
          </>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
