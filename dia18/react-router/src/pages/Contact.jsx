import { useParams } from "react-router";
import { useSearchParams } from "react-router";
import { Link } from "react-router";


const Contact = () => {
    // hook useParams de react-router para leer el pathName

        // Viene de <Route path="/contact/:contactId"/>
    const {contactId} = useParams();

    // Uso de SearchParams: array de elementos

    const [searchParams]= useSearchParams();
    const precio = searchParams.get("precio");// precio = lo que valga
    const dist = searchParams.get("dist");// ? dist= a o que sea





    return ( <>
    <h1>Soy Contact</h1>
    <h3>Uso de Route Params (useParams)</h3>
    <p> 
        probar usar url"/contact/:contactId" <br/>
        ej:
        <Link to="/contact/jhon-123">/contact/jhon-123</Link>
    </p>

    {contactId && <p>El id de contacto es : {contactId}</p>}

    <h3>Uso de searchParams</h3>
    <p>Probar a agregar los siguientes searchParams:</p>
    <ul>
        <li>?dist={dist}</li>
        <li>?precio={precio}</li>
    </ul>
    </> );
}
 
export default Contact;