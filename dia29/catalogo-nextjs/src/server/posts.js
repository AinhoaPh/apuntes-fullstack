"use server"


// traer los posts
export const getJsonPosts = async ()=>{
    const response = await fetch('');
    console.log("obteniendo posts");
    return response.json();
}

// error al traer los posts
export const getJsonPostsConError = async ()=>{
    const response = await fetch('https://jsonplacERRORholder.typicode.com/posts');
    console.log("obteniendo posts con error");
    return response.json();
}

// traer un post especifico
export const getJsonSinglePost = async (id)=>{
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}

export const crearPost = async (formData) => {
    const title = formData.get("title");
    const content = formData.get("content");

     // guardar en la base de datos 
    //  const nesPost = await Posts.create({
    //     ............ contenido de title y content
    //  })

}
// como traer usuarios de mi base de datos https://localhost:3001/api/posts
