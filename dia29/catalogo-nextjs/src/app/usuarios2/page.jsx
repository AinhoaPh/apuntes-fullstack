import { Card } from "@/components/ui/Card";
import { getUsuarios2 } from "@/server/usuarios2";
import { crearUsuario } from "@/server/usuarios2";



const Usuarios = async () => {
    const respuesta = await getUsuarios2()
    const listaUsuarios = respuesta.data;//
    return (
        <div className="items-center justify-center h-full flex flex-col">
            <h1>Lista de usuarios (MONGO DB - NEXTJS)</h1>
            {/* <pre>
            {JSON.stringify(respuesta, null, 2)}
        </pre> */}
            <h3> Formulario Crear Usuario</h3>
            <form action={crearUsuario}>
                <div>
                    <input
                        type="text" name="name" placeholder="Ingrese su Nombre" className="border border-gray-300  p-2 m-2"></input>
                </div>
                <div>
                    <input
                        type="text" name="email" placeholder="Ingrese su Nombre" className="border border-gray-300  p-2 m-2"></input>
                </div>
                <div>
                    <input
                        type="text" name="edad" placeholder="Ingrese su Nombre" className="border border-gray-300  p-2 m-2"></input>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2  m-2"
                >Crear Usuario</button>
            </form>
            <ul className="grid grid-cols-3 p-2 gap-2">
                {listaUsuarios.map((user, index) => (
                    <li key={index}>
                        <Card title={user.name || "sin nombre"} >
                            {user.email || "sin email"}
                            {user.edad && `-(${user.edad})`}
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;