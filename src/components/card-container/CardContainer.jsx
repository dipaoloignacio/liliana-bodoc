import React from 'react'
import CardsAnimation from '../animations/cards-animations/CardsAnimation';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import GalleryPhotos from '../gallery-photos/GalleryPhotos';
import { useState } from 'react';

function CardContainer({ cardsData, from }) {
    const [viewGallery, setViewGallery] = useState(false)
    // const [idGallery, setIdGallery] = useState(0);

    function closeGallery() {
        setViewGallery(false);
    }
    return (
        <div className='content-cards'>
            <div>
                {
                    <CardsAnimation>
                        {/* si cards son del home se procesan aca */}
                        {
                            from === 'index' ?
                                cardsData.map(cardData => {
                                    return (
                                        <div key={cardData.id} className="blog-card" >
                                            <div className="meta">
                                                <div className="photo" style={{ backgroundImage: `url(${cardData.img})` }}></div>
                                            </div>
                                            <div className="description">
                                                <h1>{cardData.title}</h1>
                                                <p> {cardData.description}</p>
                                                <p className="read-more">
                                                    <Link className="custom-btn btn-3" to={cardData.link}><span>Ver mas</span></Link>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                        }

                        {/* si cards son de que-hacemos/21-de-julio se procesan aca */}
                        {
                            from === 'julioActividad' ?
                                <div>
                                    <h3 className='title-card'>{cardsData.title}</h3>
                                    <div className="blog-card">
                                        <div className="meta">
                                            <div className="photo" style={{ backgroundImage: `url(${cardsData.img})` }}></div>
                                        </div>
                                        <div className="description">
                                            <div className='video'>
                                                <iframe src={cardsData.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                            {
                                                cardsData.imgData !== 0 ?
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                        onClick={() => setViewGallery(true)}
                                                        className='link-gallery'
                                                    >
                                                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                                                        Fotos del evento
                                                        <FontAwesomeIcon icon={faAngleDoubleLeft} />

                                                    </motion.button> : ''
                                            }


                                        </div>
                                    </div>
                                    {
                                        viewGallery === true ?
                                            <GalleryPhotos dataImg={cardsData.imgData} closeGallery={closeGallery} viewGallery={viewGallery} />
                                            : ''
                                    }
                                </div> : ''
                        }
                    </CardsAnimation>
                }
            </div>
        </div>
    )
}

export default CardContainer