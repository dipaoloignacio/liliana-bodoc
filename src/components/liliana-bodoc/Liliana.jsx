import React from 'react'
import Biografia from './biografia/Biografia'
import Obras from './obras/contenedor-lista-de-libros/ContenedorListaDeLibros'
import DiaDeJulio from './21-de-julio/DiaDeJulio'
import Videos from './videos/Videos'

function Liliana() {
  return (
    <div>
      <Biografia />
      <Obras />
      <DiaDeJulio />
      <Videos />
    </div>
  )
}

export default Liliana