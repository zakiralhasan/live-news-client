import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivetRute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log("before problem", user);
  console.log("before problem", loading);

  if (loading) {
    console.log("problemmm", loading);
    return (
      <p className="w-full text-blue-500 normal-case btn btn-ghost border-none loading">
        Loading...
      </p>
    );
  }
  console.log("after problem", user);
  console.log("after problem", loading);

  if (!user) {
    return (
      <Navigate to="/login" state={{ from: location }} replace>
        {children}
      </Navigate>
    );
  } else {
    return children;
  }
};

export default PrivetRute;
