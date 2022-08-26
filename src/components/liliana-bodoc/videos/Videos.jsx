import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Videos() {

    return (
        <div>
            <div className="content-video">
                <div className='content-title'>
                    <h3 className='tittle-section'>Vide<span className='span-title'>os recomen</span>dados</h3>
                </div>

                <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel"  >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active" data-bs-interval="100000">
                            <iframe className='video' src="https://www.youtube.com/embed/qOFyNOYp3MU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="carousel-item" data-bs-interval="100000">
                            <iframe className='video' src="https://www.youtube.com/embed/EdbPTLOh2SM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="carousel-item" data-bs-interval="100000">
                            <iframe className='video' src="https://www.youtube.com/embed/qsZ1S1iSBSA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export default Videos