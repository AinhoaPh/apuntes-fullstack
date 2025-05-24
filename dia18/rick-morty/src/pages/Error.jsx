import { Link } from "react-router";

const Error = () => {
    return (<>
    
    <h1 style={{"color":"red"}}>Error:404</h1>
    <p>Pagina no encontrada...</p>
    <Link to="/personajes">Volver a Home</Link>
    </>  );
}
 
export default Error;