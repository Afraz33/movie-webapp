import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withLazy from "@components/common/Loadable";

const AuthLogin = withLazy(() => import("@pages/auth/AuthLogin"));
const AuthRegister = withLazy(() => import("@pages/auth/AuthRegister"));
const PageNotFound = withLazy(() => import("@pages/PageNotFound"));
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/register" element={<AuthRegister />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AuthRoutes;
