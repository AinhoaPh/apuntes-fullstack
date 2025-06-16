const productos = [
    {id:1, name:"Ninja 250", price: 2300},
    {id:1, name:"Audi TT", price:5000},
 ];

 // localhost:3000/api/productos?qname=Moto
export async function GET(request ){
    const searchParams = request.nextUrl.searchParams; // ?name=Moto
    const name = searchParams.get("name"); // Moto
    const price = searchParams.get("price"); // 2300

    const productosEncontrados = productos.filter(p =>  p.name.toLowerCase().includes(name.toLowerCase()))
    // obtener todos los user d la BD:
    const ResponseAPI = {
       msg: "Lista de usuarios",
       data: productosEncontrados,
       status: "ok"
    }
 
   
    ResponseAPI.data = productos;
   // mandamos los datos y las opciones
    return new Response(JSON.stringify(ResponseAPI), {
       status: 200,// OK
       headers: {
           "Content-Type": "application/json"// respuesta en JSON 
       }
    });
   }