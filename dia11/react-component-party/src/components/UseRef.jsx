import {useRef, useState, useEffect} from 'react'

export const Ejemplo0Ref = () => {
    const[nombre,setNombre]=useState("")
    const[contador,setContador]= useState(0)

    // useEffect(()=>{
    //     setContador(cont=> cont + 1)
    // },[nombre])

    // useRef devuelve un unico valor y este es un objeto 
    const contador2 = useRef(0)//{current:0}

    // useEffect(()=>{
    //     // es util para debuggear compoenns y cambiar states por ref
    //     contador2.current= contador2.current +1
    // })

    // lo mismo que hacer un querySelector si la pagina no requiere de renderizado
    const inputRef =useRef();

    const handleAccion = ()=>{
        // seleccionar elinput deseado y se pinta el input
        inputRef.current.focus();
        contador2.current= contador2.current +1
        inputRef.current.value="Hola BLue"+ contador2.current;
    }

    return (<>
  <div>
    <input  value={nombre} onChange={e=>setNombre(e.target.value)} />
    <h3>Nombre: {nombre}</h3>

    <p>Me renderice {contador} veces</p>
    <p>Me renderice  con useRef {contador2.current} veces</p>

    <input  onChange={e=>setNombre(e.target.value)} type="text" value={nombre} ref={inputRef} />
    <button onClick={handleAccion}>Accion</button>
  </div>
    </>  );
}

export const AutoFocusInput = () => {
    const miInput=useRef();
    useEffect(()=>{
        const {current}= miInput;
        miInput.current.focus();
    },[])
    return ( <>
    <input ref={miInput} placeholder="Escribe aqui" />
    </>
        
     );
}

export function ValorPrevio() {
  const [count, setCount] = useState(0)

  const anterior = useRef();

  // se ejecuta despues de renderizar el compoennete 
  useEffect(() => {
    anterior.current = count
  }, [count])

  return (
    <>
    <h3>Valor Previo </h3>
      <p>Actual: {count}</p>
      <p>Anterior: {anterior.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
    </>
  )
}



export function AntiSpamButton() {
    const isCLicked = useRef(false)

    const handleClick= () => {
      if(isCLicked.current) return;
      isCLicked.current = true;
      console.log("Enviando datos")
      setTimeout(()=>{
        isCLicked.current= false
      },1000)// envia una vez datos 
    }
  
    return (
      <>
      <h3>AntiSpamButton</h3>
        <button onClick={handleClick}>Incrementar</button>
      </>
    )
}

export function VideoPlayer() {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };// onClick={()=>{videoRef.current.play()} es lo msm

    const handlePause = () => {
        videoRef.current.pause();
    };

    return (
      <>
      <h3>VideoPlayer</h3>
      <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" controls />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pausa</button>
      </>
    )
}

export function ClickOutside() {
  // miObjeto.contains(e.target);
  const boxRef= useRef();

  useEffect(()=>{
    // const handleCLickOutside = (e)=>{
    //   if(!boxRef.current.contains(e.target)){
    //     alert("Has hecho Click fuera!")
    //   }
    // }
    const handleCLickInside = (e)=>{
      if(boxRef.current.contains(e.target)){
        alert("Has hecho Click fuera!")
      }
    }

        window.addEventListener("click", handleCLickInside)

        // FUncion de limpieza
        return()=> window.removeEventListener("click", handleCLickInside)
  },[])
      return (
        <>
        <div>
        <h3>CLick Outside</h3>
        <div ref={boxRef} style={{border:"1px solid", padding:20}}>
        Haz click fuera del elemento 
        </div>
     
         
          </div>
        </>
      )
  }
  
  export function ScrollToBottom() {
    const elementoRef = useRef(null);
    
    const scrollAbajo = () => {
        elementoRef.current.scrollIntoView({ 
            behavior: "smooth",  // hace el scroll suave
            block: "center"      // centra el elemento en la ventana
        });
    }

    return (
        <>
        <div>
            <h3>Scroll</h3>
            <button onClick={scrollAbajo}>Ir al elemento</button>
            {[...Array(30)].map((_, i) => (
                <div key={i}>item {i}</div>
            ))}
            <div ref={elementoRef}>Mi elemento</div>
            {[...Array(60)].map((_, i) => (
                <div key={i}>item {i}</div>
            ))}

        </div>
        </>
    );
}
