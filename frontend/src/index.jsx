import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withLazy from "@components/common/Loadable";

// Project Imports
import AuthRoutes from "@routes/AuthRoutes";
import MoviesRoutes from "@routes/MoviesRoutes";
import PublicRoutes from "@routes/PublicRoutes";
import PageNotFound from "@pages/PageNotFound";

function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/movie/*" element={<MoviesRoutes />} />
      <Route path="/" element={<PublicRoutes />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default ThemeRoutes;
