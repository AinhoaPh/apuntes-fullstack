 import {useNavigate} from "react-router"
 
 
 const Logout = () => {
    let navigate = useNavigate()

    const handleLogOut = ()=>{
        // codigo de cerrar sesion 


        // y al final nos vamos a otro lado 
        navigate("/home");
    }
    return (  <>
    <h2>Has cerrado sesión</h2>
    <p>Estas seguro que quieres salir?</p>
    <button onClick={handleLogOut}> Si</button>
    </>);
}
export default Logout;