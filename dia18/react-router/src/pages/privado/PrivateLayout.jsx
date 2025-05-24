// Importamos NavLink para crear enlaces de navegación con estilos activos
import { NavLink } from "react-router";
// Importamos Outlet para renderizar las subrutas (hijos) dentro del layout
import { Outlet } from "react-router";

// Componente de diseño para una zona privada con navegación interna
const PrivateLayout = () => {
    return (
        <>
            {/* Título de la zona privada */}
            <h3>Layout Zona Privada</h3>

            {/* Navegación específica para las rutas privadas */}
            <p>Navegación Privada</p>
            <nav>
                <ul>
                    {/* Enlace a la ruta principal del Dashboard */}
                    {/* `end` asegura que se aplique la clase activa solo si la ruta es exactamente esa */}
                    <li><NavLink to="/dashboard/" end>Home</NavLink></li>

                    {/* Enlace a la subruta de configuración */}
                    <li><NavLink to="/dashboard/config" end>Configuración</NavLink></li>

                    {/* Enlace a la ruta de logout */}
                    <li><NavLink to="/dashboard/logout">Salir</NavLink></li>
                </ul>
            </nav>

            {/* Outlet sirve para renderizar el componente hijo correspondiente a la subruta activa */}
            <Outlet />

            {/* Footer fijo en esta zona privada */}
            <footer>footer zona privada</footer>
        </>
    );
}

export default PrivateLayout;