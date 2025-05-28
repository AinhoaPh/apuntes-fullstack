import { useContext } from "react";


//Contextos
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
    const {login,logout,user} = useContext(UserContext)// mandamos dentro el contexto que queremos usar

    const {theme, setTheme}= useContext(ThemeContext)

    return ( <>
    <div className={theme}> <h1>Soy contenido</h1>
    Nombre:<strong>{user} </strong> 
    <button onClick={()=>login("Juan")}>Iniciar Sesion</button>
    <button onClick={()=>logout()}>Salir</button>
    <button style={{}} onClick={()=>setTheme("claro")}>Claro</button>
    <button style={{}} onClick={()=>setTheme("oscuro")}>Oscuro</button>
    <p >Oscuro: {theme}</p>
    </div>
   
    </> );
}
 
export default Content;