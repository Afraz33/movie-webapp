import { useRoutes } from "react-router-dom";

// project import
import PublicRoutes from "@routes/PublicRoutes";
import AuthRoutes from "@routes/AuthRoutes";

import MovieRoutes from "@routes/MovieRoutes";

function ThemeRoutes() {
  return useRoutes([...AuthRoutes, ...PublicRoutes, ...MovieRoutes]);
}

export default ThemeRoutes;
