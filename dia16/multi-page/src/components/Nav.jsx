export const NavSearchParams = () => {
    return ( 
        <>
        <ul className="flex gap-5 ">
            <li><a href="?page=personajes">Personajes</a></li>
            <li><a href="?page=lugares">Lugares</a></li>
            <li><a href="?page=episodios">Episodios</a></li>
            
        </ul>
        </>
     );
}

export const NavPathName = ()=>{
    return (
        <>
        
        <ul className="flex gap-5 bg-white">
        <li><a href="?page=personajes">Personajes</a></li>
            <li><a href="?page=lugares">Lugares</a></li>
            <li><a href="?page=episodios">Episodios</a></li>
            
        </ul>
        
        </>
    )
}