import { useState, useEffect } from "react";


export const EjemploCicloVida = () => {
    // utilizamos nuestros hooks 
    const [count,setCount]= useState(0)

    useEffect(()=>{
        // Este codigo se ejecutara despues de cada renderizado( componentDidUpdate)
        console.log("Componente cargado...")
        // componente se descargo
        return()=>{
            console.log("Componente se va a desmontar")
        }
    },[]);

    useEffect(()=>{
        // codigo que se ejecuta cuando se actualiza cualquier variable de nuestro array de dependencias (count)
        console.log(`El contador se ha actualizado a ${count}`)

    },[count]);

    // creamos nuestras funciones


    //  Renederizamos el componente 
    return ( 
        <>
        <h3>Ejemplo Ciclo de Vida</h3>
        <p>Has hecho click {count}veces</p>
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
