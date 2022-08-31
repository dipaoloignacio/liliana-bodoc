import React from 'react'
import Banner from '../banner/Banner'
import Videos from '../liliana-bodoc/videos/Videos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandsHelping} from '@fortawesome/free-solid-svg-icons';
import CardContainer from './card-actividades/card-container/CardContainer';
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

    let url = "https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    return (
        <div className='content-body'>
            <Banner></Banner>
            <div className='division-banner'><h2 class="background double"><span><FontAwesomeIcon icon={faHandsHelping}/></span></h2></div>
            <div className="quienes-somos">

            <iframe src="https://www.youtube.com/embed/r-uTa-FlWNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className='manifiesto-index container'>
                    <div className="tittle-quienes-somos-index">
                        <h3 className='tittle-section'>¿QUIE<span className='span-title'>NES <span className='color-letter'>SO</span></span><span className='color-letter'>MOS</span>?</h3>
                    </div>
                    ¿Qué imaginamos, qué proyectamos cuando pensamos en ponerle a la Fundación el nombre de Liliana Bodoc.?<br />

                    Seguramente lo mismo que soñaron, imaginaron todos los que eligieron su nombre para una biblioteca escolar, una biblioteca pública, una escuela, una librería, una plaza. <br />

                    Como haría Liliana, <span className='color-letter'>abrimos nuestra fundación</span> como una casa, o como se puede abrir un corazón. <br />

                    <Link className="custom-btn btn-3" to='/quienes-somos'><span>Conocenos</span></Link>
                </div>

            </div>

            <div className='actividades'>
                <div className="content-title">
                    <h4 className='tittle-section'>Nuestr<span className='span-title'>as Acti</span>vidades</h4>
                </div>
                {/* <CardContainer /> */}
            </div>


            {/* <div className="novedades">
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
            </div> */}

            <Videos></Videos>

        </div>
    )
}

export default Content