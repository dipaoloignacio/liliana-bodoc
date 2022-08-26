import React from 'react'

import foto1 from '../../../images/biografia/noticia-1.jpg'
import foto2 from '../../../images/biografia/noticia-2.jpg'
import foto3 from '../../../images/biografia/noticia-3.jpg'
import foto4 from '../../../images/biografia/noticia-4.jpg'
import foto5 from '../../../images/biografia/noticia-5.jpg'
function DiaDeJulio() {
  return (
    <div className='dia-de-julio'>
      <div className="division"></div>
      <div className="content-tittle pt-0 pb-5">
        <h2 className="tittle-section pt-0">Todos <span className='span-title'>los 21</span> de julio</h2>
      </div>
      <div className="content-text-21-julio">
        <h3 className='title-21-julio'>Día Provincial del Libro Infantil y Juvenil</h3>
        <p className='text-21-julio'>
          En homenaje a la entrañable escritora Liliana Bodoc, el Poder Legislativo provincial establece, a través de la ley 9079 del año 2018, el día 21 de julio de cada año como el Día Provincial del Libro Infantil y Juvenil. <br />
          Las acciones que se presentan en el marco de esta fecha, no solo pretenden recordar a una escritora maravillosa, que ha acercado la palabra poética a grandes y chicos de todo el mundo, sino también, intenta revalorizar la presencia del libro como puente fundamental e irremplazable entre la lectura y los niños, niñas y jóvenes de nuestra provincia.
        </p>
      </div>
      {/* <div className="celebrando">
        <h5>Celebramos a Liliana Bodoc</h5>
        <p>
          
          El grupo “LAS MUJERES DE LOS CONFINES” , la Asociación EDELIJ y la compañía “EL ALMA EN UN HILO” crearon una propuesta para celebrar los 20 años del libro “Los días del Venado”. Durante todo el mes de Julio diversos artistas, escritores, músicos, educadores por el arte, ilustradores y familiares se suman a celebrar a LILIANA BODOC. <br /> <br />
          Click en la imagen o <a href="https://homenaje-lilianabodoc.blogspot.com/" target={"_blank"}>aqui</a>
        </p>
        <a href="https://homenaje-lilianabodoc.blogspot.com/" target={"_blank"}>
          <img src={foto6} className="img-celebramos" alt="" />
        </a>
      </div> */}
      <h4 className='title-noticias'>Publicaciones similares</h4>
      <div className="container-noticias">
        <a href="https://www.mendoza.edu.ar/dia-provincial-del-libro-infantil-y-juvenil/" target={"_blank"} className="noticias">
          <img src={foto1} alt="" />
        </a>
        <a href="http://www.bnm.me.gov.ar/novedades/?p=28417" target={"_blank"} className="noticias">
          <img src={foto2} alt="" />
        </a>
        <a href="https://www.mendoza.gov.ar/prensa/en-homenaje-a-liliana-bodoc-el-21-de-julio-los-mendocinos-celebraremos-el-dia-del-libro-infantil-y-juvenil/" target={"_blank"} className="noticias">
          <img src={foto3} alt="" />
        </a>
        <a href="https://www.losandes.com.ar/sociedad/hoy-es-el-dia-del-libro-infantil-y-juvenil-en-mendoza-y-habra-chocolate-gratis/" className="noticias" target={"_blank"}>
          <img src={foto4} alt="" />
        </a>
        <a href="https://ffyl.uncuyo.edu.ar/en-honor-a-liliana-bodoc-el-21-de-julio-sera-el-dia-del-libro-infantil-y-juventil" className="noticias" target={"_blank"}>
          <img src={foto5} alt="" />
        </a>
      </div>


    </div>
  )
}

export default DiaDeJulio