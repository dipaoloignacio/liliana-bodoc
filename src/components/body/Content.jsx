import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FotoCard1 from '../../images/img-body/21-de-julio/actividad-21julio.jpg'
import FotoCard2 from '../../images/img-body/mujeres-confines/mujeres-confines.jpg'
import FotoCard3 from '../../images/img-body/contar-para-que-ocurra/contar.jpg'
import FotoCard4 from '../../images/img-body/foto5.jpg'
import FotoCard5 from '../../images/img-body/foto6.jpg'
import FotoCard6 from '../../images/img-body/foto7.jpg'

function Content() {
    return (
        <div className='content-body'>
            <div className='actividades'>
                <h4 className='tittle-act'>Actividades</h4>
                <div className='content-cards'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={FotoCard2} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Mujeres de los confines</h5>
                                    <p className="card-text">Somos un grupo de mujeres amantes de la buena lectura y, sobre todo, de los textos de Liliana Bodoc.</p>
                                    <a href="#" className="btn">ver mas...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={FotoCard1} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">21 de julio</h5>
                                    <p className="card-text">En homenaje a la entrañable escritora Liliana Bodoc, el Poder Legislativo provincial establece, a través de la ley 9079 del año 2018, el día 21 de julio de cada año como el Día Provincial del Libro Infantil y Juvenil.</p>
                                    <a href="#" className="btn">ver mas...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={FotoCard3} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Contar para que ocurra</h5>
                                    <p className="card-text">En homenaje a la entrañable escritora Liliana Bodoc, el Poder Legislativo provincial establece, a través de la ley 9079 del año 2018, el día 21 de julio de cada año como el Día Provincial del Libro Infantil y Juvenil.</p>
                                    <a href="#" className="btn">ver mas...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={FotoCard3} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Contar para que ocurra</h5>
                                    <p className="card-text">En homenaje a la entrañable escritora Liliana Bodoc, el Poder Legislativo provincial establece, a través de la ley 9079 del año 2018, el día 21 de julio de cada año como el Día Provincial del Libro Infantil y Juvenil.</p>
                                    <a href="#" className="btn">ver mas...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card" >
                        <img src={FotoCard1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">21 de julio</h5>
                            <p className="card-text">En homenaje a la entrañable escritora Liliana Bodoc, el Poder Legislativo provincial establece, a través de la ley 9079 del año 2018, el día 21 de julio de cada año como el Día Provincial del Libro Infantil y Juvenil.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Contar para que ocurra</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn">ver mas...</a>
                        </div>
                    </div>

                    <div className="card" >
                        <img src={FotoCard2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mujeres de los confines</h5>
                            <p className="card-text">Somos un grupo de mujeres amantes de la buena lectura y, sobre todo, de los textos de Liliana Bodoc.</p>
                            <a href="#" className="btn">ver mas...</a>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="novedades">
                <h4 className='tittle-act'>Novedades</h4>
                <div className='content-cards'>
                    <div className="card" >
                        <img src={FotoCard4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">El Arte de Dividir</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Contar para que ocurra</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={FotoCard6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Día de las infancias</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn ">ver mas...</a>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="accordion mb-5" id="accordionExample">
                <h3 className='tittle-manifiesto mt-5 mb-5'>Manifiesto</h3>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Romina Bodoc.</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            La magia me autoriza a desobedecer y a morirme en la paz de los que saben que la piel es un límite impreciso. Y que tras la apariencia del final hay un ciclo de ave, tierra, niño, tortuga, dátil, mujer de nuevo. Otra mujer ¿y qué? La magia me autoriza a no tomarme en serio que soy un individuo único, irrepetible, piel adentro. Prefiero parecerme a cada ser. La magia me autoriza. Y ya muerta llegar a la tortuga, al alacrán, al risco, como quien vuelve a casa... <br />

                            <button className='btn mt-3'> Leer completo...</button>
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

                            <button className='btn mt-3'> Leer completo...</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-video">
                <iframe className='video' src="https://www.youtube.com/embed/qOFyNOYp3MU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

        </div>
    )
}

export default Content