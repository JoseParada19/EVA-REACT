'use client'
import {Link} from 'react-router-dom'
import React from 'react'



export const Header = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/formulario"}>Formulario</Link>
        <Link to={"/registros"}>registros</Link>
    </nav>
  )
}
