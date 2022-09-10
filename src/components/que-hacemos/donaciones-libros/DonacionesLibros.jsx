import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import foto from '../../../images/img-body/donaciones/foto.jpg'
import GalleryPhotos from '../../../components/gallery-photos/GalleryPhotos';
import donaciones from '../../../Data/imgSrcData/imgSrcDonaciones'
import { motion } from 'framer-motion';

function DonacionesLibros() {
    const [viewGallery, setViewGallery] = useState(false);

    function closeGallery() {
        setViewGallery(false);
    }

    function openGallery() {
        setViewGallery(true);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='container-donaciones'>
            <div className="content-title">
                <h3 className='tittle-section'>
                    <span className='color-letter'>Nuestras</span> donaciones
                </h3>
            </div>

            <p><strong>La Fundación Liliana Bodoc</strong> tiene como uno de sus propósitos realizar donaciones periódicas de libros de literatura infantil y juvenil a bibliotecas populares de la Provincia, y de otros sitios del país que lo requieran. También se realizan donaciones a bibliotecas escolares en las que desplegamos actividades con Las Mujeres de Los Cofines de narraciones de cuentos, tanto a nivel primario como secundario.</p>

            <img className='img-donacion' src={foto} alt="" />

            <motion.button
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => openGallery()}
                className='link-gallery'
            >
                <FontAwesomeIcon icon={faAngleDoubleRight} /> Click galeria de fotos <FontAwesomeIcon icon={faAngleDoubleLeft} /></motion.button>

            <GalleryPhotos dataImg={donaciones} closeGallery={closeGallery} viewGallery={viewGallery} />

        </div>
    )
}

export default DonacionesLibros