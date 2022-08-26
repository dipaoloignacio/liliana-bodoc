import React from 'react'
import JulioActividad from "./21-de-julio/JulioActividad";
import MujeresConfines from './mujeres-de-los-confines/MujeresConfines'

function QueHacemos() {
  return (
    <div>
      <MujeresConfines />
      <JulioActividad  activado={'true'}/>
    </div>
  )
}

export default QueHacemos