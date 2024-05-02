// AuthRoutes.jsx

import withLazy from "../components/common/Loadable";

//Project Imports
import AuthLayout from "../components/layouts/AuthLayout";
const AuthLogin = withLazy(() => import("../pages/auth/AuthLogin"));
const AuthRegister = withLazy(() => import("../pages/auth/AuthRegister"));
import Hero from "../components/ui/hero/Hero";
const AuthRoutes = {
  path: "/auth/",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <Hero />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default AuthRoutes;
