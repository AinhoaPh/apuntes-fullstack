## Hook UseEffect

Efectos secundarios que va atener nuestro componenete para interactuar con el mundo. Te permite realizar efectos secundarios para los compomnentes funcionales. En terminos simples te permite ejecutar codiggo despues de que el componenete se ha renderizado.

## Que es un efecto secundario / side Effect

Operaciones que interactuan con el mundo exterior al componente no esta relacionado con la renderizacion del componente.

## Para que se usa 

1. Realizar peticiones a API ( Fetch de Datos)
2. Manejar suscripciones: eventos del navegador (resize,scroll), suscripciones a servicios como WebSockets.(comunicaciones en tiempo real,  como chat(escribiendo...), documentos multiples usurios, videojuegos en linea)
3. Manipular en el DOM luego de renderizar( despues de haber impreso el componenete en el HTML)
4. Configurar intervalos o temporizadores
5. Almacenamiento local (localStorage, sessionStorage) todo lo que sea asincrono( que se demora hasta que carga  )


```jsx
import {useEffect} from 'react'

const App = ( )=>{
    // funcion de CallBack + array
    useEffect(()=>{
        // Codigo que se ejecuta despues de renderizar el objeto

        // Opcional: Funcion de cleanUp / limpieza
        return()=>{
            // Codigo que se ejecutara al desmontar el componente de App desaparezca
        }
    }, [/*Array de dependencias*/] );
}

```


```jsx
// Importamos los hooks necesarios desde React
import { useState, useEffect } from "react";

// Creamos el componente Temporizador
export const Temporizador = () => {
  // Estado para contar los segundos que han pasado
  const [segundos, setSegundos] = useState(0);

  // Estado para controlar si el temporizador está activo o detenido
  const [activo, setActivo] = useState(true);

  // useEffect que se ejecuta cuando se monta el componente o cambia "activo"
  useEffect(() => {
    let intervalo; // aquí guardamos el ID del intervalo

    // Si el temporizador está activo, iniciamos el intervalo
    if (activo) {
      intervalo = setInterval(() => {
        // Usamos una función para asegurarnos de tener el valor más actualizado
        setSegundos((s) => s + 1);
      }, 1000); // cada 1000 ms = 1 segundo
    }

    // Esta función se ejecuta cuando el componente se desmonta o cambia "activo"
    return () => {
      clearInterval(intervalo); // limpiamos el intervalo para que no se dispare varias veces
    };
  }, [activo]); // Solo se vuelve a ejecutar si cambia "activo"

  // Función para detener el temporizador (cambia "activo" a false)
  const detener = () => {
    setActivo(false);
  };

  // Función para reiniciar el temporizador (vuelve a 0 y lo activa)
  const reiniciar = () => {
    setSegundos(0);
    setActivo(true);
  };

  // Lo que se muestra en pantalla (render)
  return (
    <>
      <h3>Temporizador</h3>

      {/* Mostramos el número de segundos que han pasado */}
      <p>Han pasado {segundos} segundos</p>

      {/* Botón para detener el temporizador */}
      <button onClick={detener}>Detener</button>

      {/* Botón para reiniciar el temporizador */}
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  );
};

```

