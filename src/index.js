import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Root from "./components/Root";
import Character from "./pages/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "homepage",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "character/:id",
    element: <Character />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="98939461964-qs0svbh40vupuc2q4cqm252dsets8bn2.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
