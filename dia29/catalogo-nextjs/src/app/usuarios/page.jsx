import { Card } from "@/components/ui/Card";
import { getUsuarios } from "@/lib/db/usuarios";



const Usuarios = async () => {
    const listaUsuarios = await getUsuarios()
    return ( 
        <div>
        <h1>Lista de usuarios (MONGO DB - EXPRESS)</h1>
        <ul className="grid grid-cols-3 p-2 gap-2">
        {listaUsuarios.map((user,index) => (
            <li key={index}>
                <Card title={user.name || "sin nombre"} >
                    {user.email || "sin email"} 
                   </Card> 
            </li>
        ))}
        </ul>
        </div>
     );
}
 
export default Usuarios;