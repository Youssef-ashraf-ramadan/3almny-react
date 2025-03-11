import React from 'react'
import {Navigate} from "react-router-dom"
import cookies from "js-cookie";

const ProtectedRoute = ({children}) => {
    const token = cookies.get("token");
    if(!token) {
        return <Navigate to="/login"  />
    }
    return children;
};

export default ProtectedRoute;
