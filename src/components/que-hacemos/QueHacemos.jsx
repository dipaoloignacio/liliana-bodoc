import React from 'react'
import JulioActividad from "./21-de-julio/JulioActividad";
import MujeresConfines from './mujeres-de-los-confines/MujeresConfines'
import ContarParaQueOcurra from './contar-para-que-ocurra/ContarParaQueOcurra';

function QueHacemos() {
  let divisionCurva = 'true';

  return (
    <div>
      <MujeresConfines />
      <JulioActividad activado={divisionCurva} />
      <ContarParaQueOcurra activado={divisionCurva} />
    </div>
  )
}

export default QueHacemos