
import Personajes from "./pages/Personajes"
import Lugares from "./pages/Lugares"
import Episodios from "./pages/Episodios"
import Error from "./pages/Error"
import {Routes, Route} from 'react-router'
import {Link, NavLink} from 'react-router'

import { NavPathName, } from './components/Nav'


import "./css/App.css"

function App() {
  // const [pagina,setPagina]= useState("home")
  // EL valor de la pagina lo obtienes con: ?...
  // const params= new URLSearchParams(window.location.search)
  // const pagina = params.get("page")||"home";


  // ejemplo utilizando PathName
  // const pagina = window.location.pathname.slice(1) // default home


  // //para darle varlores
  // let page;

  // // 
  // switch (pagina) {
  //   case "personajes": page = <Personajes />; break
  //   case "lugares": page = <Lugares />; break
  //   case "episodios": page = <Episodios />; break


  // }
  return (
    <>

  
      {/* MENU con Path */}
       <NavPathName />
       {/* <h2>Multi-Page: {pagina}</h2>  */}
       <main>
       <Routes>
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/lugares" element={<Lugares />} />
          <Route path="/episodios" element={<Episodios />} />
          {/* Puedes poner una ruta por defecto */}
          <Route path="*" element={<Error/>} />
        </Routes>
       </main> 

      {/* Navegacion */}

      {/* <button onClick={()=>handlePagina("home")}>Home</button>
    <button onClick={()=>handlePagina("contact")}>Contact</button>
    <button onClick={()=>handlePagina("about")}>About Us</button>
    <button onClick={()=>handlePagina("products")}>Products</button> */}

      {/* MENU con Params */}
      {/* <NavSearchParams /> */}
      {/* <nav>
    {secciones.map((pagina) =>(
     <button> <a 
     key={pagina}
     href="#"
     onClick={e.preventDefault()}
     >{pagina}</a></button>
    ) )}
  </nav> */}
  
    </>
  )
}

export default App


