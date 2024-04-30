import "./App.css";
import { useRoutes } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
function ThemeRoutes() {
  return useRoutes([AuthRoutes]);
}

export default ThemeRoutes;
