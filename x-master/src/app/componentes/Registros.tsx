import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { persona } from '../Interfaces'



export const Registros = () => {
    const [personas, setPersonas] =useState<persona[]>([])
    
    const renderizarDatos =()=>{
        var elementos = personas.map((p)=>{
            return<tr>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
            </tr>
        })
        return elementos
    }
    useEffect(()=>{
        //cargar datos firebase
        obtenerPersonas().then((listado)=>{
        console.log("cargando listado")
        console.log(listado)
        setPersonas(listado)
        })
    },[])

  return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
