import { useRoutes } from "react-router-dom";

// project import
import PublicRoutes from "./routes/PublicRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function ThemeRoutes() {
  return useRoutes([AuthRoutes, ...PublicRoutes]);
}

export default ThemeRoutes;
