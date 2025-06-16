// se esta renderizando en el servidor y se convierte en async 

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonPosts, crearPost } from "@/server/posts";
import Link from "next/link";


const Blog = async () => {
    // Obtener los posts del servidor
    const posts = await getJsonPosts(); // Asumiendo que tienes una función getJsonPosts que obtiene los posts del blog
    return (
        <div >
            <h1>Soy Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mb-2">
                        <Card title={post.title}>{post.body}</Card>

                        <Link href={`./blog/${post.id}`}>
                            <Button size="sm" >ver mas...</Button>
                        </Link>

                    </li>

                ))}
            </ul>

            <h3>Crear Post</h3>
            <form action= {crearPost} className="max-w-[400px] mx-auto mt-24" >
                <input type="text" name="title"  className="border p-2 m-2 w-full rounded"/>
                <textarea name="content" placeholder="Contenido" className="border p-2 m-2 w-full rounded"></textarea>
                <Button type="submit" size="sm">Crear Post</Button>
            </form>

        </div>
    );
}

export default Blog;