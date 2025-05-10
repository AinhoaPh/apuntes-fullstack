const BlogPost = ({ titulo, children }) => {
    return (
  
     
        <div>
            <h3>{titulo}</h3>
            <div>{children}</div>
        </div>
       
    )
};

export default BlogPost;