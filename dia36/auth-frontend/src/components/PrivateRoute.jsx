import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "@/context/AuthContext";

export const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)

    return isLoggedIn ? children : <Navigate to="/login"/>
}
 
export const GuestRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)

    return isLoggedIn ?  <Navigate to="/perfil" /> : children
}
 