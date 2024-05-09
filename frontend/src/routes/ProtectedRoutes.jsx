import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ children, ...rest }) {
  const token = localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to="/auth/login" replace state={{ from: rest.location }} />
  );
}

export default ProtectedRoute;
