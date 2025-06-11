import { Card } from "@/components/ui/Card";
import { getUsers } from "@/services/users";


const Usuarios = async () => {
    const listaUsuarios = getUsers()
    return ( 
        <div>
        <h1>Soy Usuarios</h1>
        <ul>
        {listaUsuarios.map(user => (
            <li key={index}>
                <Card title={user.name}  >
                    {user.email}
                   </Card> 
            </li>
        ))}
        </ul>
        </div>
     );
}
 
export default Usuarios;