import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return ( 

        <header className=" bg-gray-500 text-white"> 
            <nav className="flex justify-between p-2">
                <Image
                    src="/next.svg"
                    alt="logo"
                    width={90}
                    height={19}
                />
                <ul className="flex gap-2">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/productos">Productos</Link></li>
                    <li><Link href="/usuarios">Usuarios</Link></li>
                    <li><Link href="/perfil">Perfil</Link></li>
                </ul>
            </nav>
        </header>
     );
}