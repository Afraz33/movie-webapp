import { useRoutes } from "react-router-dom";

// project import
import PublicRoutes from "@routes/PublicRoutes";
import AuthRoutes from "@routes/AuthRoutes";

import MoviesRoutes from "@routes/MoviesRoutes";

function ThemeRoutes() {
  return useRoutes([...AuthRoutes, ...PublicRoutes, ...MoviesRoutes]);
}

export default ThemeRoutes;
