import { useEffect, useState, useContext } from "react";
import {  useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Perfil = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null)
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => { 
        fetchUser();
      }, []);

    const BACKEND_API = import.meta.env.VITE_BACKEND_API;


    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                logout();
                navigate("/login");
                return;  
              }
            const response = await fetch(`${BACKEND_API}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                if(response.status === 401){
                    logout();
                    return;
                }
                throw new Error("Error al obtener datos del usuario")
            }
            const responseData = await response.json();
         
            setUser(responseData.data);
            console.log(responseData)
        } catch (e) {
            setError(e.message);
        }
    }

    const handleLogout = () => {
        logout();
        navigate("/login"); 
      };

    return (
        <>
            <h2>Bienvenido {user.name} !</h2>
            {user ?
                <div>
                   
                    <p>Email: {user.email} !</p>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div> 
                :
                <p>Cargando usuario...</p>
            }
      
      
 

            {error && <p className="text-red-400">{error}</p>}

        </>
    )
}
export default Perfil;