import React from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import withLazy from "../components/common/Loadable";

// Project Imports
import ProtectedRoute from "./ProtectedRoutes";
const MovieInfo = withLazy(() => import("../pages/movie/MovieInfo"));
const AddMovie = withLazy(() => import("../pages/movie/AddMovie"));
const PageNotFound = withLazy(() => import("../pages/PageNotFound"));

const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<SearchMovies />} />
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddMovie />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

const SearchMovies = () => {
  return (
    <Routes>
      <Route path="/" element={<PageNotFound />} />
      <Route path=":title" element={<MovieInfo />} />
    </Routes>
  );
};

export default MoviesRoutes;
