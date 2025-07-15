// se esta renderizando en el servidor y se convierte en async 

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonPosts } from "@/server/posts";
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
            {/* {JSON.stringify(posts)} */}

        </div>
    );
}

export default Blog;