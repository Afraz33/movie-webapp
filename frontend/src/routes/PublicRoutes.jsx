import { Routes, Route } from "react-router-dom";

// project imports
import withLazy from "../components/common/Loadable";

// Home
const Home = withLazy(() => import("../pages/home/Home"));

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default PublicRoutes;
