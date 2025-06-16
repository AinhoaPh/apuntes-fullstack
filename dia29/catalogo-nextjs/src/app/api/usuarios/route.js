import { headers } from "next/headers";

export async function GET(request ){
 // obtener todos los user d la BD:
 const ResponseAPI = {
    msg: "Lista de usuarios",
    data: [],
    status: "ok"
 }
 const users = [
    {id:1, name:"Juan Perez", email:"juan@perez.com"},
    {id:2, name:"Maria Lopez", email:"maria@lopez.com"},
 ];

 ResponseAPI.data = users;
// mandamos los datos y las opciones
 return new Response(JSON.stringify(ResponseAPI), {
    status: 200,// OK
    headers: {
        "Content-Type": "application/json"// respuesta en JSON 
    }
 });
}

// localhost:3000/api/usuarios
//body: {"name":"Ceci",.... }
export async  function POST(request){

    const body = await request.json();
    const {name, email} = body
// guardar los datos en la BD
    const newUser = {
        id: Date.now(),
        name,
        email
    }
    const ResponseAPI = {
        msg: "Usuario creado con exito",
        data: newUser,
        status: "ok"
     }
     return new Respose (JSON.stringify(ResponseAPI),{
     status:201,
     headers: {
        "Content-Type": "application/json"// respuesta en JSON 
     }
})}
     


