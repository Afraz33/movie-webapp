// AuthRoutes.jsx

import withLazy from "../components/common/Loadable";

//Project Imports
import AuthLayout from "../components/layouts/AuthLayout";
const AuthLogin = withLazy(() => import("../pages/auth/AuthLogin"));
const MovieInfo = withLazy(() => import("../pages/movie/MovieInfo"));

const MovieRoutes = [
  {
    path: "/movie",
    element: <MovieInfo />,
  },
];

export default MovieRoutes;
