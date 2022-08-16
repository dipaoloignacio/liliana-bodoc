import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FotoCard from '../../images/img-body/logo-bg-negro.jpg'
import FotoCard1 from '../../images/img-body/foto2.jpg'
import FotoCard2 from '../../images/img-body/foto3.jpg'
import FotoCard3 from '../../images/img-body/foto4.jpg'
import FotoCard4 from '../../images/img-body/foto5.jpg'
import FotoCard5 from '../../images/img-body/foto6.jpg'
import FotoCard6 from '../../images/img-body/foto7.jpg'

function Content() {
    return (
        <div className='content-body'>
            <div className='actividades'>
                <h4 className='tittle-act'>Actividades</h4>
                <div className='content-cards'>
                    <div className="card" >
                        <img src={FotoCard3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 lassNamess="card-title">El Arte de Dividir</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 lassNamess="card-title">Contar para que ocurra</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 lassNamess="card-title">Día de las infancias</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn">ver mas...</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="novedades">
                <h4 className='tittle-act'>Novedades</h4>
                <div className='content-cards'>
                    <div className="card" >
                        <img src={FotoCard4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 lassNamess="card-title">El Arte de Dividir</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 lassNamess="card-title">Contar para que ocurra</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 lassNamess="card-title">Día de las infancias</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="accordion mb-5" id="accordionExample">
                <h3 className='mt-5 mb-5'>Manifiesto</h3>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Romina Bodoc.</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            La magia me autoriza a desobedecer y a morirme en la paz de los que saben que la piel es un límite impreciso. Y que tras la apariencia del final hay un ciclo de ave, tierra, niño, tortuga, dátil, mujer de nuevo. Otra mujer ¿y qué? La magia me autoriza a no tomarme en serio que soy un individuo único, irrepetible, piel adentro. Prefiero parecerme a cada ser. La magia me autoriza. Y ya muerta llegar a la tortuga, al alacrán, al risco, como quien vuelve a casa... <br />

                            <button className='btn btn-outline-info text-dark mt-3'> Leer completo...</button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Silvia Chiavetta</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            ¿Qué imaginamos, qué proyectamos cuando pensamos en ponerle a la Fundación el nombre de Liliana Bodoc.?<br />

                            Seguramente lo mismo que soñaron, imaginaron todos los que eligieron su nombre para una biblioteca escolar, una biblioteca pública, una escuela, una librería, una plaza...<br />

                            <button className='btn btn-outline-info text-dark mt-3'> Leer completo...</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-video">
                <iframe className='video' src="https://www.youtube.com/embed/qOFyNOYp3MU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    )
}

export default Content