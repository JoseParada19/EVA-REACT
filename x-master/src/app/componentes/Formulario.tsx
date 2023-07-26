'use client'
import React, { useState } from 'react'
import { persona } from '../Interfaces';
import { registrarPersona } from'../Firebase/Promesas';



export const Formulario = () => {
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const[errorEdad,setErrorEdad] = useState("")
    const registrar = ()=>{
        if(edad>0){
            console.log('Nombre:',nombre);
        console.log('Apellido:',apellido);
        console.log('Edad:',edad);
        alert("Bienvenido "+nombre+""+apellido+"Edad:"+edad)
        const p:persona={
            nombre, apellido,edad
        }
        registrarPersona(p)


        }else{
            setErrorEdad("la edad debe ser positiva")
        }
    }



  return (
    <form>
        <label>Nombre</label>
        <input type='text' onChange={(e)=>setNombre(e.target.value)}/>

        <label>Apellido</label>
        <input type='text'onChange={(e)=>setApellido(e.target.value)}/>

        <label>Edad</label>
        <input type='number'onChange={(e)=>setEdad(parseInt(e.target.value))}/>
        <span>{errorEdad}</span>

        <button onClick={registrar}type='button'>Registrar</button>
    </form>
  )
}
