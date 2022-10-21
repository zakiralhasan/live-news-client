import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivetRute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

    if(!user){
      return <Navigate to="/login" state={{ from: location }} replace>{children}</Navigate>
    }else{
      return children;
    }
    

};

export default PrivetRute;
