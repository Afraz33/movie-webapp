// AuthRoutes.jsx

import withLazy from "../components/common/Loadable";

//Project Imports
import AuthLayout from "../components/layouts/AuthLayout";
const AuthLogin = withLazy(() => import("../pages/auth/AuthLogin"));
const AuthRegister = withLazy(() => import("../pages/auth/AuthRegister"));

const AuthRoutes = [
  {
    path: "/auth/login",
    element: <AuthLogin />,
  },
  {
    path: "/auth/register",
    element: <AuthRegister />,
  },
];

export default AuthRoutes;
