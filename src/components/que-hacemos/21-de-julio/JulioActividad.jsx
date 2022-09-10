import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import imgJulio21 from '../../../Data/imgSrcData/imgJulio21';
import imgJulio22 from '../../../Data/imgSrcData/imgJulio22';
import GalleryPhotos from '../../gallery-photos/GalleryPhotos';

import foto from "../../../images/biografia/celebramos.jpg";
import foto2 from "../../../images/img-body/21-de-julio/foto2.jpg";

import foto13 from "../../../images/img-body/21-de-julio/image6.jpg";

import { useState } from 'react';
import { useEffect } from 'react';

function JulioActividad({ activado }) {
    const [viewGallery, setViewGallery] = useState(false);
    const [idGallery, setIdGallery] = useState(0);


    function closeGallery() {
        setViewGallery(false);
    }

    function openGallery(id) {
        setViewGallery(true);
        setIdGallery(id)
    }

    useEffect(() => {
      window.scrollTo(0,0);
    }, [])
    
    return (
        <div className='content-julio-act'>

            <section className={activado === 'true' ? 'fondo-curvo-activado' : ''}>
                <div className="curve"></div>
            </section>

            <div className="content-title">
                <h3 className='tittle-section'>Celebramos a Liliana Bodoc</h3>
            </div>

            <div className="celebrando">
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

                <div className="celebramos-2021">
                    <h1 className='fw-bolder text-center p-5'>Dia provincial del libro infantil y juvenil 2021</h1>
                    <div className='fotos-2021'>
                        <img src={foto2} alt="" className='foto2-2021 img-fluid' />
                        <motion.button
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => openGallery(2021)}
                            className='link-gallery'
                        >
                            <FontAwesomeIcon icon={faAngleDoubleRight} /> Click galeria de fotos <FontAwesomeIcon icon={faAngleDoubleLeft} /></motion.button>
                        {idGallery === 2021 ?
                            <GalleryPhotos dataImg={imgJulio21} closeGallery={closeGallery} viewGallery={viewGallery} />
                            : ''
                        }
                    </div>
                </div>

                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/NeUNa6EfYaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="celebramos-2022">
                    <h1 className='fw-bolder text-center p-5'>Dia provincial del libro infantil y juvenil 2022</h1>
                    <div className='fotos-2022'>
                        <img src={foto13} alt="" className='foto1-2022 img-fluid' />
                        <motion.button
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            onClick={() => openGallery(2022)}
                            className='link-gallery'
                        >
                            <FontAwesomeIcon icon={faAngleDoubleRight} /> Ver galeria de fotos <FontAwesomeIcon icon={faAngleDoubleLeft} /></motion.button>
                        {idGallery === 2022 ?
                            <GalleryPhotos dataImg={imgJulio22} closeGallery={closeGallery} viewGallery={viewGallery} />
                            : ''
                        }
                    </div>
                </div>

                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/dzjqtUtLAjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>


        </div>
    )
}

export default JulioActividad