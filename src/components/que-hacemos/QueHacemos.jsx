import React, { useEffect } from 'react'
import JulioActividad from "./21-de-julio/JulioActividad";
import MujeresConfines from './mujeres-de-los-confines/MujeresConfines'
import ContarParaQueOcurra from './contar-para-que-ocurra/ContarParaQueOcurra';
import DonacionesLibros from './donaciones-libros/DonacionesLibros';

function QueHacemos() {
  let divisionCurva = 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <MujeresConfines />
      <JulioActividad activado={divisionCurva} />
      <ContarParaQueOcurra activado={divisionCurva} />
      <DonacionesLibros />
    </div>
  )
}

export default QueHacemos