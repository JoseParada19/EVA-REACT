import React from 'react'
import "../assets/css/Componente1.css";
interface Props{
    nombre?:string
    apellido?:string
}

export const Componente1 = (props:Props) => {
  return (
    <div className="componente1-fondo">
        <p>malo {props.nombre} {props.apellido}</p>
        <p>chao {props.nombre}</p>
    </div>
  )
}
