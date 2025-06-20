import { Link } from "react-router";

const Landing = ( ) => {
    const BACKEND_API = import.meta.env.VITE_BACKEND_API;
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    return(
        <>
        <h3>Estoy en landing </h3>
        <p>
        Mi Backend API Url es: 
        <b>{BACKEND_API}</b>
        </p>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Registro</button></Link>
        </>
    )
}
export default Landing;