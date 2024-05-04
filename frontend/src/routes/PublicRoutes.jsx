// project imports
import withLazy from "../components/common/Loadable";

// Home
const Home = withLazy(() => import("../pages/home/Home"));

const PublicRoutes = [{ path: "/", element: <Home /> }];

export default PublicRoutes;
