// Importamos React y el hook useState (aunque aquí no se usa para rutas)
import { useState } from 'react'

// Importamos estilos
import './App.css'

// Importamos los componentes necesarios para el enrutado
import { Routes, Route } from 'react-router'

// Importamos herramientas de navegación (Link para enlaces normales, NavLink para estilos activos)
import { Link, NavLink } from 'react-router'

// Importamos los componentes de las páginas
import Home from './pages/Home'
import Contact from './pages/Contact'

// Importamos las páginas privadas
import Dashboard from './pages/privado/Dashboard'
import Config from './pages/privado/Config'
import PrivateLayout from './pages/privado/PrivateLayout'
import Logout from './pages/privado/Logout'
import Error from './pages/Error'

function App() {
  const [count, setCount] = useState(0) // Estado de ejemplo, no se usa

  return (
    <>
      {/* Menú de navegación */}
      <nav>
        <ul>
          {/* NavLink aplica automáticamente la clase "active" si la ruta coincide */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

          {/* Aquí usamos una función para personalizar la clase cuando la ruta está activa */}
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Contenedor de rutas */}
      <Routes>

        {/* Ruta principal (Home) */}
        <Route index element={<Home />} />

        {/* Rutas anidadas para /contact */}
        <Route path="/contact">
          <Route index element={<Contact />} />
        
          <Route path=":contactId" element={<Contact />} />
        </Route>

        {/* Rutas privadas agrupadas bajo el layout privado */}
        <Route path="dashboard" element={<PrivateLayout />}>
          {/* Ruta: /dashboard */}
          <Route index element={<Dashboard />} />
          {/* Ruta: /dashboard/config */}
          <Route path="config" element={<Config />} />
          {/* Ruta: /dashboard/logout */}
          <Route path="logout" element={<Logout />} />
          {/* Esta línea no tiene efecto y puede eliminarse: <Route/> */}
        </Route>


        {/* Pagina de Error */}
        <Route path="#" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App