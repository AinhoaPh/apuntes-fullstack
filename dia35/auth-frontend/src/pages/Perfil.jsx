import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Perfil = () => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    const BACKEND_API = import.meta.env.VITE_BACKEND_API;


    const fetchUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${BACKEND_API}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (!response.status) {
                throw new Error("Error al obtener datos del usuario")
            }
            const responseData = await response.json();
            console.log(responseData);
            setUser(responseData.data);

        } catch (e) {
            setError(e.message)
        }
    }

    const handleLogout = ( )=>{
        alert("Cerrar Sesion")
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <>
            <h3>Estoy en Perfil </h3>
            {user ?
                <div>
                    <p>Bienvenido: {user.name} !</p>
                    <p>Email: {user.email} !</p>
                    <button onClick={handleLogout}>Salir</button>
                </div> 
                :
                <p>Cargando usuario...</p>
            }

            {error && <p className="text-red-400">{error}</p>}

        </>
    )
}
export default Perfil;