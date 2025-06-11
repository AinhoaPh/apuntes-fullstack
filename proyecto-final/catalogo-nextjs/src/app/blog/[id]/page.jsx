import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getJsonSinglePost } from "@/server/posts";
import Link from "next/link";

const BlogSimple = async ({ params }) => {
    const { id } = await params;
    const post = await getJsonSinglePost(id);
    
    return (
        <>
            <h1>Soy Blog Simple</h1>

                
            <Card title={post.title}>{post.body}</Card>

            <Link href={`./`}>
                <Button size="sm" >Volver</Button>
            </Link>


        </>
    );
}

export default BlogSimple;