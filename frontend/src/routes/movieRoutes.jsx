// AuthRoutes.jsx

import withLazy from "../components/common/Loadable";

//Project Imports
import AuthLayout from "../components/layouts/AuthLayout";
const AuthLogin = withLazy(() => import("../pages/auth/AuthLogin"));
const MovieInfo = withLazy(() => import("../pages/movie/MovieInfo"));
const AddMovie = withLazy(() => import("../pages/movie/AddMovie"));
const MovieRoutes = [
  {
    path: "/movie/:title",
    element: <MovieInfo />,
  },
  {
    path: "/movie/add",
    element: <AddMovie />,
  },
];

export default MovieRoutes;
