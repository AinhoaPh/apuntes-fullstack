import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState(null);

    const navigate = useNavigate()
    const BACKEND_API = import.meta.env.VITE_BACKEND_API;

    const handleSubmit = async (e) => {
        e.preventDefault();


        // leer form del navegador el form submit
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        console.log("data", data);

        try {
            const response = await fetch(`${BACKEND_API}/auth/login`, { // opciones de nuestro fetch
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            // si todo sale bien, leer la respuesta del servidor
            const responseData = await response.json();
            console.log("Respuesta login completa:", responseData);
         

            if (!response.ok) {
                throw new Error(responseData.msg);
            };

            //console.log(responseData);
            localStorage.setItem('token', responseData.data.token)
            const userData = { ...responseData.data };
            delete responseData.data.token
            localStorage.setItem('user', JSON.stringify(userData))


            navigate("/perfil");
        

        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h3>Inicie Sesión</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user">Email</label>
                    <input type="email" id="user" name="email" required />
                </div>
                <div>
                    <label htmlFor="pass">Contraseña</label>
                    <input type="password" id="pass" name="password" required />
                </div>

                <button type="submit">Acceder </button>
            </form>

            {error && <p className="text-red-400">{error}</p>}
        </>)
}
export default Login;