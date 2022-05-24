import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../components/Loading";
import useAdmin from "../../Hooks/useAdmin";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, loadAdmin] = useAdmin(user);

  const location = useLocation();
  if (loading || loadAdmin) {
    return <Loading />;
  }
  if (!user || !admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
