import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({nombre}) {
  const nombre = "Alejandro";

  return (
    <>
      < Header color="verde" />
      <Card />
      < Footer color="verde" />

    </>

  )
}


const Header = ({ nombre }) => {
  return (
    <header className="Header">
      <h1 class>{nombre}</h1>
      <img src="./public/img/zoro.png" alt="avatar alejandro"></img>

      <ul>
        <li>Contacto</li>
        <li>Acerca</li>
        <li>Productos</li>
      </ul>

    </header>
  )
}


const Card = () => {
  return (
    <card>
      <h2>Descripcion</h2>
      <p>Alejandro tiene 21 años, de Valencia. Su color favorito es el verde. Su último curso fue un Grado Sup. de Desarrollo App Web y tambien ha hecho un curso de Desarrollo de App Multiplataforma. </p>
      <h2>Objetivos con este curso:</h2>
      <p>Poder mejorar su diseño y conseguir un trabajo gracias a las prácticas.</p>
      <h2>Aficiones:</h2>
      <ul>

        <li>Gimansio</li>
        <li>Anime</li>
        <li>Deporte</li>
        <li>Salir de fiesta</li>
      </ul>


    </card>
  )
}


const Footer = () => {
  return (
    <footer >

      <h2>Contacto:</h2>
      <ul>
        <li>Correo:</li>
        <li>Telefono:</li>
        <li>Dirección:</li>
      </ul>

    </footer>
  )
}

export default App
