import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import GalleryPhotos from '../../gallery-photos/GalleryPhotos';

// data...
import contar1raEd from '../../../Data/imgSrcData/contar1raEd'
import contar2daEd from '../../../Data/imgSrcData/contar2daEd'
import contar3raEd from '../../../Data/imgSrcData/contar3raEd'
import contar4taEd from '../../../Data/imgSrcData/contar4taEd'

// fotos....
import foto from '../../../images/img-body/contar-para-que-ocurra/contar.jpg'
import foto1 from '../../../images/img-body/contar-para-que-ocurra/foto1.jpg'
import foto2 from '../../../images/img-body/contar-para-que-ocurra/foto2.jpg'
import foto3 from '../../../images/img-body/contar-para-que-ocurra/foto3.jpg'

let ediciones = [
    {
        id: 1,
        edicion: 'primera',
        img: foto,
        dataBase: contar1raEd
    },
    {
        id: 2,
        edicion: 'segunda',
        img: foto1,
        dataBase: contar2daEd
    },
    {
        id: 3,
        edicion: 'tercera',
        img: foto2,
        dataBase: contar3raEd
    },
    {
        id: 4,
        edicion: 'cuarta',
        img: foto3,
        dataBase: contar4taEd
    },
]
function ContarParaQueOcurra({ activado }) {
    const [viewGallery, setViewGallery] = useState(false);
    const [idGallery, setIdGallery] = useState(0);


    function closeGallery() {
        setViewGallery(false);
    }

    function openGallery(edicion) {
        setViewGallery(true);
        setIdGallery(edicion)
    }

    useEffect(() => {
        window.scrollTo(0,0);
      }, [])

    return (

        <div className={activado === 'true' ? 'contar-content pt-5' : 'contar-content'}>
            <section className={`${(activado === 'true' ? 'fondo-curvo-activado' : 'd-none')}`}>
                <div className="curve"></div>
            </section>

            <div className="content-title">
                <h3 className='tittle-section'><span className='color-letter'>Contar</span> <span className='span-title'>para que </span>ocurra</h3>
            </div>

            {
                ediciones.slice(0).reverse().map(edicion => {
                    return (
                        <div className='mt-5 '>
                            <h3 className='title-edition mb-4'>{edicion.edicion} edición</h3>
                            <img class="img-ed" src={edicion.img} alt=""></img>
                            <motion.button
                                whileHover={{ scale: 1.3 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                onClick={() => openGallery(edicion.edicion)}
                                className='link-gallery'
                            >
                                <FontAwesomeIcon icon={faAngleDoubleRight} /> Galeria de fotos <FontAwesomeIcon icon={faAngleDoubleLeft} /> </motion.button>
                            {
                                idGallery === edicion.edicion ?
                                    <GalleryPhotos dataImg={edicion.dataBase} closeGallery={closeGallery} viewGallery={viewGallery} />
                                    : ''
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ContarParaQueOcurra