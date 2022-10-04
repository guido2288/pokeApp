import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {

  const user = JSON.parse(sessionStorage.getItem('user'));

  return (!user)
    ? children
    : <Navigate to="/pokemon" />
}
