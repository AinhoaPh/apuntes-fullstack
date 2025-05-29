import Productos from './pages/Productos'
import Usuarios from './pages/Usuarios'
import Pokemon from './pages/Pokemon'
import './App.css'
// import Error from './pages/Error'

function App() {

  const pathname = window.location.pathname
  

  let page
  switch (pathname) {
    case '/productos':
      page = <Productos />
      break
    case '/usuarios':
      page = <Usuarios />
      break
    case '/pokemon':
      page = <Pokemon />
      break
    default:
      page = <Pokemon />
  }

  return (
    <>
      <nav className="nav__list">
        <a href="/productos">Productos</a> | 
        <a href="/usuarios">Usuarios</a> | 
        <a href="/pokemon">Pokemon</a>
      </nav>
      <main>{page}</main>
    </>
  )
}

export default App