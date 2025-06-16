import Link from "next/link";

const NotFound = () => {
    return ( <>
    
    <h3 className="text-3xl"> Pagina no encontrada...404</h3>
    <Link href="/">Volver al inicio</Link>
    </> );
}
 
export default NotFound;