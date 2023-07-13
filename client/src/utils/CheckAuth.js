import { useSelector } from "react-redux";
import { Navigate, redirect } from "react-router-dom";

function CheckAuth({ children }) {
  const auth = useSelector((state) => state.auth);
  return auth.isAuthenticated ? children : <Navigate to="/login" />;
}

export default CheckAuth;
