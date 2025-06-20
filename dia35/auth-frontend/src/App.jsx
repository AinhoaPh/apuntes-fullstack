import Landing from "@/pages/Landing"
import Login from "@/pages/Login"
import Perfil from "@/pages/Perfil"
import Register from "@/pages/Register"

import { Routes, Route, NavLink, Link } from "react-router"


import "@/App.css"

function App() {


  return (
   
    <div>
    <nav >
      <ul className="flex gap-4">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Acceder</NavLink></li>
        <li><NavLink to="/register">Registrarme</NavLink></li>
        <li><NavLink to="/perfil">Perfil (privado)</NavLink></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>

  
  )
}

export default App
