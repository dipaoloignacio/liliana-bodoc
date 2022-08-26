import React from 'react'
import Libro from '../libro/Libro'

function ListaDeLibros({ libros }) {
  return (
    <div>
      {
        libros.map((libro, indice) => {
          return (
            <Libro
              key={indice}
              id={libro.id}
              titulo={libro.titulo}
              year={libro.year}
              resenia={libro.resenia}
              editorial={libro.editorial}
              img={libro.img}
            />
          )
        })
      }

    </div>
  )
}

export default ListaDeLibros