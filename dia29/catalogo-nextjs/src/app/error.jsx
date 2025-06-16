"use client"
import {useEffect} from 'react';

const Error = ({error}) => {
    useEffect(() => {
        // Guardar el error en la base de datos
        console.error(error)
    },[error])
    return (
        <>
        <div>
            <h2>Algo ha fallado</h2>
            Error: 
            {error.message}
        </div>
        </>
      );
}
 
export default Error;