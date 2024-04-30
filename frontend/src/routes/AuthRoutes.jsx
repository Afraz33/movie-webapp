// AuthRoutes.jsx

import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLogin from "../pages/auth/AuthLogin";
// import AuthRegister from "../pages/auth/AuthRegister";

const AuthRoutes = {
  path: "/auth/",
  // element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    // {
    //   path: "register",
    //   element: <AuthRegister />,
    // },
  ],
};

export default AuthRoutes;
