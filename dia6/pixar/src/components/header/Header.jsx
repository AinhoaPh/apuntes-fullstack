const Header = () => {
    return (
        <>
            <header className="header">
                <img className="header__logo" src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1613495438818-408JDVSTB7NWSHVC20M7/logo.png?format=1500w" alt="Logo-Pixar" />
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li><a href="#">FILMS</a></li>
                        <li><a href="#">TECHNOLOGY</a></li>
                        <li><a href="#">CAREERS</a></li>
                        <li><a href="#">MORE</a></li>
                    </ul>
                </nav>
            </header>


        </>
    )
};

export default Header;