export const NavSearchParams = () => {
    return ( 
        <>
        <ul className="flex gap-5 ">
            <li><a href="?page=home">Home</a></li>
            <li><a href="?page=contact">Contacto</a></li>
            <li><a href="?page=about">Nosotros</a></li>
            <li><a href="?page=products">Productos</a></li>
        </ul>
        </>
     );
}

export const NavPathName = ()=>{
    return (
        <>
        
        <ul className="flex gap-5 bg-white">
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/about">Nosotros</a></li>
            <li><a href="/products">Productos</a></li>
        </ul>
        
        </>
    )
}