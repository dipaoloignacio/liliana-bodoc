import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function GalleryPhotos({ dataImg, closeGallery, viewGallery }) {
    return (
        <>
            {viewGallery &&
                <div className='container-gallery sticky-top'>
                    <motion.button
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className='btn-close-gallery text-dark'
                        onClick={closeGallery}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </motion.button>
                    <div className='gallery'>
                        {
                            dataImg.map(item => {
                                return (
                                    <div className='gallery-item'>
                                        <div className='gallery-image'>
                                            <img src={item.imgSrc} alt={item.alt} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className='btn-close-gallery text-light m-3'
                        onClick={closeGallery}
                    >
                        Cerrar
                    </motion.button>
                </div>

            }
        </>

    )
}

export default GalleryPhotos