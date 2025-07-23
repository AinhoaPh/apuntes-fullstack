import Protectoras from "./pages/Protectoras"
import Recetas from "./pages/Recetas"
import Consejos from "./pages/Consejos"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Perfil from "./pages/Perfil"

import { Routes, Route, NavLink } from "react-router"
import { PrivateRoute, GuestRoute } from "./components/PrivateRoute"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import "./css/App.css"
import { NavPathName } from "./components/Nav"

function App() {
  const { isLoggedIn, logout } = useContext(AuthContext)

  return (
    <div>
      <nav className="nav">
     <NavPathName/>
      </nav>

      <main className="main-content">
        <Routes>
          {/* Página principal redirige a Protectoras */}
          <Route path="/" element={<Protectoras />} />
          <Route path="/protectoras" element={<Protectoras />} />
          <Route path="/recetas" element={<Recetas />} />
          <Route path="/consejos" element={<Consejos />} />

          <Route path="/login" element={
            <GuestRoute><Login /></GuestRoute>
          } />
          <Route path="/register" element={
            <GuestRoute><Register /></GuestRoute>
          } />
          <Route path="/perfil" element={
            <PrivateRoute><Perfil /></PrivateRoute>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App