import TarjetaUsuario from './components/TarjetaUsuario'
import ListaTareas from './components/ListaTareas'
import PerfilUsuario from './components/PerfilUsuario';
import './App.css'

function App() {
  const tareas = [
    { id: 1, nombre: 'Estudiar React', completada: true },
    { id: 2, nombre: 'Leer un libro', completada: false },
    { id: 3, nombre: 'Mejorar mi nivel de Escalada', completada: false },
    { id: 4, nombre: 'Aprender a cocinar', completada: true },
    { id: 5, nombre: 'Ver series', completada: false },
    { id: 6, nombre: 'ir un día a la nieve', completada: false }
    ];

    const userData = {
      nombre: 'El Barto',
      email: 'elbarto@fox.com',
      img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.webp",
      direccion: {
      calle: 'Calle Falsa 123',
      ciudad: 'Springfield',
      codigoPostal: '12345'
      }
      };

  return (
    <>
    <main className="main">
    <section className="cardList">
    <h1 className="card__h1">Listado Tarjetas:</h1>
    <div className="card__container">
    <TarjetaUsuario nombre="Blue" edad={4} ocupacion="Perrito" />
    <TarjetaUsuario nombre="Peluso" edad={20} ocupacion="Gatito" />
    </div>
    </section>
    <section className="tareaList">
    <h2>Listado Tareas</h2>
    <ListaTareas tareas={tareas}/>
    </section>
    <section>
      <h2>Perfil de Usuario</h2>
      <PerfilUsuario usuario={userData}
      />
    </section>
    </main>
    </>
  )
}

export default App


