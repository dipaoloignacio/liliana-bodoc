import React from 'react'

import CardContainer from '../../card-container/CardContainer';

import imgJulio21 from '../../../Data/imgSrcData/imgJulio21';
import imgJulio22 from '../../../Data/imgSrcData/imgJulio22';

import foto from "../../../images/biografia/celebramos.jpg";
import foto2 from "../../../images/img-body/21-de-julio/foto1.jpg";
import foto13 from "../../../images/img-body/21-de-julio/image6.jpg";

import { useEffect } from 'react';

let cardData = [
    {
        id: 1,
        img: foto13,
        alt: 'Dia provincial del libro infantil y juvenil 2022',
        video: 'https://www.youtube.com/embed/dzjqtUtLAjc',
        year: 2022,
        imgData: imgJulio22,
        title: 'Dia provincial del libro infantil y juvenil 2022',
    },
    {
        id: 2,
        img: foto2,
        alt: 'Dia provincial del libro infantil y juvenil 2021',
        video: 'https://www.youtube.com/embed/NeUNa6EfYaM',
        year: 2021,
        imgData: imgJulio21,
        title: 'Dia provincial del libro infantil y juvenil 2021',
    },
]

function JulioActividad({ activado }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='content-julio-act'>

            <section className={activado === 'true' ? 'fondo-curvo-activado' : ''}>
                <div className="curve"></div>
            </section>

            <div className="content-title">
                <h3 className='tittle-section'>Celebramos a Liliana Bodoc!</h3>
            </div>

            <div className="celebrando">

                {
                    cardData.map(card => {
                        return (
                            <CardContainer from={'julioActividad'} key={card.id} cardsData={card} />
                        )
                    })
                }

                <div className="celebramos-2020">
                    <h4 className='text-center'>Dia provincial del libro infantil y juvenil 2020</h4>
                    <p className='container'>
                        El grupo<a href="https://www.facebook.com/groups/232232720667261" className='link-redirect' target={"_blank"}>“LAS MUJERES DE LOS CONFINES”</a>  , la Asociación EDELIJ y la compañía <a href="https://elalmaenunhilo.com/" className='link-redirect' target={"_blank"}>“EL ALMA EN UN HILO”</a> crearon una propuesta para celebrar los 20 años del libro “Los días del Venado”. Durante todo el mes de Julio diversos artistas, escritores, músicos, educadores por el arte, ilustradores y familiares se suman a celebrar a LILIANA BODOC. <br />
                    </p>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <a href="https://homenaje-lilianabodoc.blogspot.com/" target={"_blank"}>
                            <img src={foto} className="img-celebramos img-fluid" alt="" />
                        </a>
                        <p>Click en la imagen o <a href="https://homenaje-lilianabodoc.blogspot.com/" target={"_blank"}>aqui</a></p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default JulioActividad