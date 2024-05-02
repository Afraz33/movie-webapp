// project imports
import withLazy from "../components/common/Loadable";

// render - home
const Home = withLazy(() => import("../pages/home/Home"));

const PublicRoutes = [
  { path: "/", element: <Home /> },
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />,
  //     },
  //   ],
];

export default PublicRoutes;
