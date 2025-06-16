export  async function GET(request , {params}){
 // obtener todos los user con id

 const{id}= await params;
  // obtener todos los user d la BD:
  const users = [
    {id:1, name:"Juan Perez", email:"juan@perez.com"},
    {id:2, name:"Maria Lopez", email:"maria@lopez.com"},
 ];

  const ResponseAPI = {
    msg: `Usuario con id ${id} obtenido`,
    data: [],
    status: "ok"
 }
 const user =  users.find(user => user.id === Number(id));
 if(!users){
    ResponseAPI.msg = `Usuario con id ${id} no encontrado`;
    ResponseAPI.status = "error";
    ResponseAPI.data = [];

    return new Response(JSON.stringify(ResponseAPI), {
        status: 404, // Not Found
        headers: {
            "Content-Type": "application/json" // respuesta en JSON 
        }
    });
    
 }
  // Solo si se encuentra el usuario:
  ResponseAPI.msg = `Usuario con id ${id} obtenido`;
  ResponseAPI.status = "ok";
  ResponseAPI.data = [user]; // solo ahora agregamos el usuario encontrado

 //ResponseAPI.data = users;
// mandamos los datos y las opciones
 return new Response(JSON.stringify(ResponseAPI), {
    status: 200,// OK
    headers: {
        "Content-Type": "application/json" // respuesta en JSON 
    }// dar formato de texto JSON

 });
}
export async  function POST(){
// crear un user con id
}

// Delete=> localhost:3000/api/usuarios/1234
export async  function DELETE(request, {params}){
// borrar un user  con id

    const {id} = await params;
    const ResponseAPI = {
        msg: `Usuario con id ${id} eliminado`,
        data: null,
        status: "ok"
    }

    return new Response(JSON.stringify(ResponseAPI), {
        status: 200,// OK lo borro correctamente
        // headers: {
        //     "Content-Type": "application/json"// respuesta en JSON 
        // }
    });
}