
import Protectoras from "./pages/Protectoras";
import Lugares from "./pages/Lugares"
import Episodios from "./pages/Episodios"


import { NavPathName, } from './components/Nav'


import "./css/App.css"

function App() {
  // const [pagina,setPagina]= useState("home")
  // EL valor de la pagina lo obtienes con: ?...
  // const params= new URLSearchParams(window.location.search)
  // const pagina = params.get("page")||"home";


  // ejemplo utilizando PathName
  const pagina = window.location.pathname.slice(1) // default home


  //para darle varlores
  let page;

  // 
  switch (pagina) {
    case "protectoras": page = <Protectoras />; break
    case "lugares": page = <Lugares />; break
    case "episodios": page = <Episodios />; break


  }





  return (
    <>

      {/* MENU con Path */}
      <NavPathName />
      {/* <h2>Multi-Page: {pagina}</h2> */}
      <main>
        {page}
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
