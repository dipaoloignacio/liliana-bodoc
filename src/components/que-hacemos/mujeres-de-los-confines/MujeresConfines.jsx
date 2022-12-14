import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import foto from '../../../images/img-body/mujeres-confines/mujeres-confines.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import GalleryPhotos from '../../gallery-photos/GalleryPhotos';
import mujeresDeLosConfines from '../../../Data/imgSrcData/mujeresConfinesImgSrc'

function MujeresConfines() {
    const [viewGallery, setViewGallery] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function closeGallery() {
        setViewGallery(false);
    }

    function openGallery() {
        setViewGallery(true);
    }

    return (
        <div className='mujeres-content'>
            <div className="content-title">
                <h3 className='tittle-section'><span className='color-letter'>Mujeres</span><span className='span-title'> de los C</span>onfines</h3>
            </div>

            <p className='content-text'>
                El día 7 de marzo de 2018, previo al Día de la Mujer, Silvia Chiavetta  (hermana de Liliana Bodoc) y Adriana Correa convocan a un encuentro de amigas y simpatizantes de la obra literaria de Liliana Bodoc, en la Fundación Ecuménica de Cuyo de la ciudad de Mendoza. Este Círculo de Mujeres quería transformar la intensa tristeza por la partida física de Liliana, en un abrazo cálido producido por la poética que expresan sus palabras, en la relectura de fragmentos de algunos de sus textos.
            </p>

            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className='img-mujeres-confines'
                src={foto}
                alt="mujeres de los confines" />

            <p className='content-text'>
                A partir de esa fecha, una vez a la semana, primero bajo los frondosos árboles del Parque San Martín, luego en casas de familia y posteriormente en una sala Auxiliar de la Biblioteca Pública General San Martín, se renovó y aún se renueva la magia que produce el internarse en su poética con el inicio de la Lectura de su Saga, para proseguir con toda su obra. <br />
                El Grupo Cultural Mujeres de Los Confines, integrante de la Fundación Liliana Bodoc, tiene como objetivo ser custodio de la Obra Literaria de Liliana Bodoc, difundir la misma en eventos culturales y en instituciones educativas con el fin de promover la lectura reflexiva y estética y la creación de bibliotecas.
            </p>

            <motion.button
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => openGallery()}
                className='link-gallery'
            >
                <FontAwesomeIcon icon={faAngleDoubleRight} /> Ver galeria de fotos <FontAwesomeIcon icon={faAngleDoubleLeft} />

            </motion.button>

            <GalleryPhotos dataImg={mujeresDeLosConfines} closeGallery={closeGallery} viewGallery={viewGallery} />
        </div>
    )
}

export default MujeresConfines