import React from "react";
import { UseGetRole, useAuth } from "../services/hooks";
import { Navigate } from "react-router-dom";

const UserRoute = ({ Component }) => {
  const isAuthenticated = useAuth();
  const role = UseGetRole();
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    if (role === "user") {
      return <Component />;
    } else {
      return <Navigate to="/not-found" />;
    }
  }
};

export default UserRoute;
