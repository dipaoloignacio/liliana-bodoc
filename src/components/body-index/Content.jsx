import React from 'react'
import Banner from '../banner/Banner'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import FotoCard1 from '../../images/img-body/21-de-julio/actividad-21julio.jpg'
import FotoCard2 from '../../images/img-body/mujeres-confines/mujeres-confines.jpg'
import FotoCard3 from '../../images/img-body/contar-para-que-ocurra/contar.jpg'
import FotoCard4 from '../../images/img-body/fundacion.jpg'
import FotoCard5 from '../../images/img-body/fundacion2.jpg'
import FotoCard6 from '../../images/img-body/fundacion3.jpg'
import FotoCard7 from '../../images/img-body/fundacion4.jpg'
import FotoCard8 from '../../images/img-body/donaciones-libros.jpg'

function Content() {
    return (
        <div className='content-body'>
            <Banner></Banner>
            <div className="quienes-somos" id="accordionExample">
                <div className="content-title">
                    <h3 className='tittle-section'>Quie<span className='span-title'>nes so</span>mos</h3>
                </div>
                <div className='manifiesto-index'>
                    ¿Qué imaginamos, qué proyectamos cuando pensamos en ponerle a la Fundación el nombre de Liliana Bodoc.?<br />

                    Seguramente lo mismo que soñaron, imaginaron todos los que eligieron su nombre para una biblioteca escolar, una biblioteca pública, una escuela, una librería, una plaza. <br />

                    Como haría Liliana, abrimos nuestra fundación como una casa, o como se puede abrir un corazón. Para que sea un sitio de límites imprecisos donde la Madre de Los Confines no sea un fin sino un comienzo, no un límite sino un horizonte. Para que, como lo hacen los hijos, hagamos de la continuidad un acto creativo. Porque más allá aún de una práctica, Liliana nos propone un modo de habitar y caminar el mundo. <br />

                    <Link class="custom-btn btn-3" to='/quienes-somos'><span>Conocenos</span></Link>
                </div>

            </div>

            <div className='actividades'>
                <div className="content-title">
                    <h4 className='tittle-section'>Nuestr<span className='span-title'>as Acti</span>vidades</h4>
                </div>
                <div className='content-cards'>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={FotoCard2} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">Mujeres de los confines</h5>
                                    <p className="card-text">El Grupo Cultural Mujeres de Los Confines, integrante de la Fundación Liliana Bodoc, tiene como objetivo ser custodio de la Obra Literaria de Liliana Bodoc, difundir la misma en eventos culturales y en instituciones educativas con el fin de promover la lectura reflexiva y estética y la creación de bibliotecas. </p>
                                    <button href="#" className="custom-btn btn-3"><span>ver mas</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={FotoCard1} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">Todos los 21 de julio</h5>
                                    <p className="card-text">En homenaje a la entrañable escritora Liliana Bodoc. Día Provincial del Libro Infantil y Juvenil.</p>
                                    <button href="#" className="custom-btn btn-3"><span>ver mas</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={FotoCard3} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">Contar para que ocurra</h5>
                                    <p className="card-text">“Contar para que ocurra” se trata de un evento artístico.La magia y la poesía de Liliana estarán presentes ese día entre nosotros, teatro, música y arte para celebrar su vida y su obra.</p>
                                    <button href="#" className="custom-btn btn-3"><span>ver mas</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img src={FotoCard8} className="img-fluid rounded-start" alt="..."></img>
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">Donaciones de libros</h5>
                                    <p className="card-text">La Fundación Liliana Bodoc tiene como uno de sus propósitos realizar donaciones periódicas de libros de literatura infantil y juvenil a bibliotecas populares de la Provincia, y de otros sitios del país que lo requieran.</p>
                                    <button href="#" className="custom-btn btn-3"><span>ver mas</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="novedades">
                <div className="content-title">
                    <h4 className='tittle-section'>No<span className='span-title'>veda</span>des</h4>
                </div>
                <div class="gallery">
                    <div class="gallery-item">
                        <img src={FotoCard4} class="gallery-image"></img>
                    </div>

                    <div class="gallery-item">
                        <img src={FotoCard5} class="gallery-image"></img>
                    </div>

                    <div class="gallery-item">
                        <img src={FotoCard6} class="gallery-image"></img>
                    </div>

                    <div class="gallery-item">
                        <img src={FotoCard7} class="gallery-image"></img>
                    </div>
                </div>

                <div class="img-book d-flex w-100 justify-content-center">
                    <div class="imgLoader"></div>
                    <div class="libro">
                        <div class="book">
                            <div class="gap"></div>
                            <div class="pages">
                                <div class="page"></div>
                                <div class="page"></div>
                                <div class="page"></div>
                                <div class="page"></div>
                                <div class="page"></div>
                                <div class="page"></div>
                            </div>
                            <div class="flips">
                                <div class="flip flip1">
                                    <div class="flip flip2">
                                        <div class="flip flip3">
                                            <div class="flip flip4">
                                                <div class="flip flip5">
                                                    <div class="flip flip6">
                                                        <div class="flip flip7"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="content-video">
                <div className='content-title'>
                    <h3 className='tittle-section'>Vide<span className='span-title'>os recomen</span>dados</h3>
                </div>

                <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <iframe className='video' src="https://www.youtube.com/embed/qOFyNOYp3MU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <iframe className='video' src="https://www.youtube.com/embed/EdbPTLOh2SM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="carousel-item">
                            <iframe className='video' src="https://www.youtube.com/embed/qsZ1S1iSBSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="icon-carrusel-videos" aria-hidden="true"> <FontAwesomeIcon icon={faAngleLeft} /></span>
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="icon-carrusel-videos" aria-hidden="true"><FontAwesomeIcon icon={faAngleRight} /></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Content