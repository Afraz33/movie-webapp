//lazy loading
import withLazy from "../components/common/Loadable";

//Project Imports
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
