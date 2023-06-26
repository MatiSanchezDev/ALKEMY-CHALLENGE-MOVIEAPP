import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

export const ProtectedRoutes = () => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    Swal.fire("Login Required", "Necesitas loguearte primero", "warning");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
