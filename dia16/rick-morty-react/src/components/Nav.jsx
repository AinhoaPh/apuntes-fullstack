export const NavSearchParams = () => {
    return (
      <nav>
        <ul className="flex gap-5">
          <li><a href="?page=personajes">Personajes</a></li>
          <li><a href="?page=lugares">Lugares</a></li>
          <li><a href="?page=episodios">Episodios</a></li>
        </ul>
      </nav>
    );
  };