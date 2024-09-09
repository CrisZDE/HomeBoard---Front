import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

export const PrivateRoutes = ({children}) => {
    const {authToken} = useContext(AuthContext);
    return authToken ? children : <Navigate to ='/'/>
}