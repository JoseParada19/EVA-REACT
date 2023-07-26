'use client'
import { AppRouter } from "./Router/AppRouter";
import { Componente1 } from "./componentes/Componente1";
import { Footer } from "./componentes/Footer";
import { Formulario } from "./componentes/Formulario";
import { Header } from "./componentes/Header";
import { BrowserRouter } from 'react-router-dom'
import React from "react";
export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <AppRouter/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
