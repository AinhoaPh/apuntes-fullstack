import { useState, useEffect } from "react";


export const EjemploCicloVida = () => {
    // utilizamos nuestros hooks 
    const [count,setCount]= useState(0)

    useEffect(()=>{
        // Este codigo se ejecutara despues de cada renderizado( componentDidUpdate)(cuando inicia x 1a vez)
        console.log("Componente cargado...")
        // componente se descargo
        return()=>{
            console.log("Componente se va a desmontar")// aparece cuando desaperece el ejemplo de vida
        }
    },[]);

    useEffect(()=>{
        // codigo que se ejecuta cuando se actualiza cualquier variable de nuestro array de dependencias (count)
        console.log(`El contador se ha actualizado a ${count}`)// aparece x 1a vez despues de todo y con el strict mode solo se ejecuta una vez 

    },[count]);

    // creamos nuestras funciones


    //  Renederizamos el componente 
    return ( 
        <>
        <h3>Ejemplo Ciclo de Vida</h3>
        <p>Has hecho click {count} veces</p>
        <button onClick={()=>setCount(count+1)}>Haz click</button></>
     );
}


export const EjTemporizador = () => {
    const[segundos,setSegundos]=useState(0)
    useEffect(()=>{

        const idIntervalo = setInterval(()=>{
            setSegundos(s => s + 1
            )
        },1000);

        // funcion de limpieza(que se ejevuta cuando quitamos el componente ejTemporizador )
        return()=>clearInterval(idIntervalo)

    },[]);// se ejecuta este codigo solo cuando se monta/ desmonta el componente solo cuando se actualiza las variabls depende d los states si esta vacio solo se ejecuta por primera vez

    return ( 
    <div>
        <h3>Temporizador</h3>
        <p>Han pasado {segundos} segundos.</p>
    </div>
        );
}

export const ObtenerDatosFetch = () => {
    const [listaPosts, setListaPosts]= useState([])
useEffect(()=>{

    // al cargar el componente pr primera vez hago un fetch(promesa)
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then (resp=> resp.json())
    // .then(json =>setListaPosts(json))
    traerDatos();

},[]);

const traerDatos = async () =>{
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await resp.json();
    setListaPosts(json);


}
   

    return ( 
        <div>
            <h3>Obtener datos</h3>
            {/* {JSON.stringify(listaPosts, null,2)} */}
            {!listaPosts.length && <p>Cargando..</p>}


            {listaPosts.map(post=>
            (<div key={post.id}>{post.title}</div>)


            ) }

        </div>


     );
}



// COntador 
/* Crear un contador con botones para incrementar y decremenetar e valor usar useEffect para registar cada vez el valor del contador cambie
contador 1
cantCLicks use

*/ 

export const ContadorClicks = () => {
    const [cont,setCont]= useState(0)
    const [num,setNum]=useState(0)

    useEffect(()=>{

      setNum(num+1)
    
        

    },[cont]);// se ejecuta este codigo solo cuando se monta/ desmonta el componente solo cuando se actualiza las variabls depende d los states si esta vacio solo se ejecuta por primera vez

    return ( 
        <>

        <p>{cont}</p>
        <p>{num}</p>
        
        <button onClick={()=>setCont(cont+1)}>Incrementar</button>
        <button onClick={()=>setCont(cont-1)}>Decrementar</button>
        </>
     );
}
// crear un componente que registre el tamaño de la ventana en consola 


export const TamañoPantalla = () => {
    const [count,setCount]= useState(0);

    useEffect(()=>{
        window.addEventListener("resize", logDeSize)
        return()=>{
            // ( borrar listener al quitar componenet )
            window.removeEventListener("resize", logDeSize)
        }
  
    },[])
    const logDeSize = () => {
        console.log(`Tamaño de ventana${window.innerHeight} x ${window.innerWidth}`)
        
    }
     
   


    return ( 
        <div>
        <h2> Windows  Resize</h2>
        <p>abrir consola y cambiar tamaño pantlla.....</p>
        </div>

     );
}


// eje: 6Crear u componente que sinronice un estado ene l localSttorage del Nav
// crear un input y a medida que lo modifico se guarada en LS

export const LocalStorageSync = ( )=>{

    const getNombre = ()=>{
        return localStorage.getItem("nombre") || "Blue"
    }


    const[nombre,setNombre]=useState(getNombre);//("Nombre por defecto");

    useEffect(()=>{
        localStorage.setItem("nombre", nombre)
    },[nombre])

    return(
        <div>
            <h2>LocalStorage Sync</h2>
            Nombre: <input 
            type="text"
            value={nombre} 
            onChange={e=>setNombre(e.target.value)}/>
        </div>
    )


}

// leer variabke de localStorage
localStorage.getItem("nombre")

// escribir variable
localStorage.setItem("nombre", "Lucas")


// Crear dos componentes uno padre y otro hijo y que en consola se muestre un mensaje cada vez que monto o desmonto el componete hijo , al componente padre agregarle un boton para que cada vez que hago click el hijo aperce o desaperce 



// Componente Padre
export const Padre = () => {
  const [mostrar, setMostrar] = useState(true);

  const toggleHijo = () => {
    setMostrar((prev) => !prev);
  };

  return (
    <div>
      <h2>Montar / Desmontar</h2>
      <button onClick={toggleHijo}>
        {mostrar ? "Desmontar Hijo" : "Montar Hijo"}
      </button>
      {mostrar && <Hijo />}
    </div>
  );
};

// Componente Hijo
const Hijo = () => {
    useEffect(() => {
      console.log("Hijo montado");
  
      return () => {
        console.log("Hijo desmontado");
      };
    }, []);
  
    return <p>Soy el componente Hijo</p>;
  };


// ejemplo tomas 
export const EjPadre = () => {
    const [mostrarHijo, setMostrarHijo] = useState(true)

    useEffect(()=>{
        console.log("Hijo Cargado..")
        return(
            console.log("Hijo Desmontado..")
        )
        
    }, [mostrarHijo])
    return 
    (
        <div>
        <h2>Montar / Desmontar</h2>
        <button onClick={()=>setMostrarHijo(!mostrarHijo)}>

        </button>
        {mostrarHijo && <EjHijo />}
      </div>
      );
}
const EjHijo = ( )=>{

    return(
        <div>Soy el hijo </div>
    )
}