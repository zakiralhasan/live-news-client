import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivetRute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    console.log("problemmm", loading);
    return (
      <p className="w-full text-blue-500 normal-case btn btn-ghost border-none loading">
        Loading...
      </p>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivetRute;
