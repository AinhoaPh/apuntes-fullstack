import saludar from '../saludar.js'
import{Header, Footer} from '../Layout.jsx'
const Saludar = ({nombre}) => {
    const isCargando = false;
    return (
      <>
      <div className="rojo">Soy un mensaje </div>
      {isCargando && <h3>Cargando Datos...</h3>}
      {nombre && <h1>Hola {nombre}!</h1>}
      </>
    )
  }

  export default Saludar;