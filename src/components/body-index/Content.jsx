import React from 'react'
import Banner from '../banner/Banner'
import Videos from '../liliana-bodoc/videos/Videos';
import { Link } from 'react-router-dom'

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

                    <Link className="custom-btn btn-3" to='/quienes-somos'><span>Conocenos</span></Link>
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
                                    <p className="card-text">El Grupo Cultural Mujeres de Los Confines, integrante de la Fundación Liliana Bodoc, tiene como objetivo ser custodio de la Obra Literaria de Liliana Bodoc, difundir la misma en eventos culturales y en instituciones educativas con el fin de promover la lectura reflexiva y estética y la creación de bibliotecas. <span>...</span> </p>
                                    <Link to="/que-hacemos/mujeres-de-los-confines" className="custom-btn btn-3"><span>ver mas</span></Link>
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
                                    <p className="card-text">En homenaje a la entrañable escritora Liliana Bodoc. Día Provincial del Libro Infantil y Juvenil. <span>...</span></p>
                                    <Link to="/que-hacemos/julio-actividad" className="custom-btn btn-3"><span>ver mas</span></Link>
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
                                    <p className="card-text">“Contar para que ocurra” se trata de un evento artístico.La magia y la poesía de Liliana estarán presentes ese día entre nosotros, teatro, música y arte para celebrar su vida y su obra. <span>...</span></p>
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
                                    <p className="card-text">La Fundación Liliana Bodoc tiene como uno de sus propósitos realizar donaciones periódicas de libros de literatura infantil y juvenil a bibliotecas populares de la Provincia, y de otros sitios del país que lo requieran. <span>...</span></p>
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
                <div className="gallery">
                    <div className="gallery-item">
                        <img src={FotoCard4} className="gallery-image" alt=''></img>
                    </div>

                    <div className="gallery-item">
                        <img src={FotoCard5} className="gallery-image" alt=''></img>
                    </div>

                    <div className="gallery-item">
                        <img src={FotoCard6} className="gallery-image" alt=''></img>
                    </div>

                    <div className="gallery-item">
                        <img src={FotoCard7} className="gallery-image" alt=''></img>
                    </div>
                </div>

                <div className="img-book d-flex w-100 justify-content-center">
                    <div className="imgLoader"></div>
                    <div className="libro">
                        <div className="book">
                            <div className="gap"></div>
                            <div className="pages">
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                                <div className="page"></div>
                            </div>
                            <div className="flips">
                                <div className="flip flip1">
                                    <div className="flip flip2">
                                        <div className="flip flip3">
                                            <div className="flip flip4">
                                                <div className="flip flip5">
                                                    <div className="flip flip6">
                                                        <div className="flip flip7"></div>
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

            <Videos></Videos>

        </div>
    )
}

export default Content