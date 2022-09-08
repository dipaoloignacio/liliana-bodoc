import React from 'react'
import { Link } from 'react-router-dom';
import foto from "../../../images/biografia/celebramos.jpg";
import foto1 from "../../../images/img-body/21-de-julio/foto1.jpg";
import foto2 from "../../../images/img-body/21-de-julio/foto2.jpg";
import foto3 from "../../../images/img-body/21-de-julio/foto3.jpg";
import foto4 from "../../../images/img-body/21-de-julio/foto4.jpg";
import foto5 from "../../../images/img-body/21-de-julio/foto5.jpg";
import foto6 from "../../../images/img-body/21-de-julio/foto6.jpg";
import foto7 from "../../../images/img-body/21-de-julio/foto7.jpg";
import foto8 from "../../../images/img-body/21-de-julio/image1.jpg";
import foto9 from "../../../images/img-body/21-de-julio/image2.jpg";
import foto10 from "../../../images/img-body/21-de-julio/image3.jpg";
import foto11 from "../../../images/img-body/21-de-julio/image4.jpg";
import foto12 from "../../../images/img-body/21-de-julio/image5.jpg";
import foto13 from "../../../images/img-body/21-de-julio/image6.jpg";
import foto14 from "../../../images/img-body/21-de-julio/image7.jpg";
import foto15 from "../../../images/img-body/21-de-julio/image8.jpg";
import foto16 from "../../../images/img-body/21-de-julio/image9.jpg";


function JulioActividad({ activado }) {

    return (
        <div className='content-julio-act'>

            <section className={`${(activado === 'true' ? 'fondo-curvo-activado' : 'fondo-curvo-desactivado')}`}>
                <div className="curve"></div>
            </section>

            <div className="content-title">
                <h3 className='tittle-section'>Celebramos a Liliana Bodoc</h3>
            </div>

            <div className="celebrando">
                <div className="celebramos-2020">
                    <h4 className='text-center'>Dia provincial del libro infantil y juvenil 2020</h4>
                    <p>
                        El grupo<a href="https://www.facebook.com/groups/232232720667261" className='link-redirect' target={"_blank"}>“LAS MUJERES DE LOS CONFINES”</a>  , la Asociación EDELIJ y la compañía <a href="https://elalmaenunhilo.com/" className='link-redirect' target={"_blank"}>“EL ALMA EN UN HILO”</a> crearon una propuesta para celebrar los 20 años del libro “Los días del Venado”. Durante todo el mes de Julio diversos artistas, escritores, músicos, educadores por el arte, ilustradores y familiares se suman a celebrar a LILIANA BODOC. <br />
                    </p>
                    <a href="https://homenaje-lilianabodoc.blogspot.com/" target={"_blank"}>
                        <img src={foto} className="img-celebramos" alt="" />
                    </a>
                    <p>Click en la imagen o <a href="https://homenaje-lilianabodoc.blogspot.com/" target={"_blank"}>aqui</a></p>
                </div>

                <div className="celebramos-2021">
                    <h5 className='fw-bolder'>Dia provincial del libro infantil y juvenil 2021</h5>
                    <div className='fotos-2021'>
                        <img src={foto2} alt="" className='foto2-2021' />
                        <img src={foto1} alt="" className='foto1-2021' />
                    </div>
                </div>
                <div class="gallery">
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto3} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto4} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto5} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto6} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto7} alt=""></img>
                    </div>
                </div>
                <div className='video'>
                    <iframe src="https://www.youtube.com/embed/NeUNa6EfYaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="celebramos-2022">
                    <h5 className='fw-bolder'>Dia provincial del libro infantil y juvenil 2022</h5>
                    <div className='fotos-2022'>
                        <img src={foto13} alt="" className='foto1-2022' />
                        <img src={foto14} alt="" className='foto2-2022' />
                    </div>
                </div>
                <div class="gallery">
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto8} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto9} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto10} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto11} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto12} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto15} alt=""></img>
                    </div>
                    <div class="gallery-item">
                        <img class="gallery-image" src={foto16} alt=""></img>
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