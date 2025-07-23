import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const NavPathName = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <ul className="flex gap-5 bg-white p-4">
      <li><NavLink to="/protectoras">Protectoras</NavLink></li>
      <li><NavLink to="/recetas">Recetas</NavLink></li>
      <li><NavLink to="/consejos">Consejos</NavLink></li>

      {!isLoggedIn && (
  <>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
  </>
)}

{isLoggedIn && (
  <>
    <li><NavLink to="/perfil">Perfil</NavLink></li>

  </>
)}

  
    </ul>
  );
};