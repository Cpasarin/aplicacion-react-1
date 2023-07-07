import { useState } from 'react'
import Saludos from './components/saludo'
import Contador from './components/contador'
import SaludoClassComponent from './components/SaludoClassComponent'
import ContadorClassComponent from './components/ContadorClassComponent'




function App() {
  

  return (
    <>
      <Saludos username="Cesarito, " />

      <SaludoClassComponent username="Cesar"/>

<h3>Componente Funcional</h3>
    <Contador />
    <h3>componente de Clase</h3>

    <ContadorClassComponent />

       </>
  )
}

export default App
