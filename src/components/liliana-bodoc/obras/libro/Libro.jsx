import React, { useEffect } from 'react'
import { useState } from 'react';

function Obras({ id, titulo, year, editorial, img, resenia }) {
  return (
    <div className='contet-libro'>
      <div className='img-libro'>
        <img src={img} alt="" />
      </div>
      <div className="info-libro">
        <h4 className='titulo-libro'>"{titulo}"</h4>
        <h6 className='year-libro'>{year}</h6>
        <p className='resenia-libro'>{resenia}</p>
        <p className='editorial-libro'>Ed.{editorial}</p>
      </div>
    </div>
  )
}

export default Obras