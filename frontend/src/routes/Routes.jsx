import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
// import MovieRoutes from "./MovieRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* <Route path="/movies/*" element={<MovieRoutes />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
