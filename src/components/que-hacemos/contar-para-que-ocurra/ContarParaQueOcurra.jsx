import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
// componentes...
import PrimeraEd from './primera-ed/PrimeraEd'
// fotos....
import foto from '../../../images/img-body/contar-para-que-ocurra/contar.jpg'
import foto1 from '../../../images/img-body/contar-para-que-ocurra/foto1.jpg'
import foto2 from '../../../images/img-body/contar-para-que-ocurra/foto2.jpg'
import foto3 from '../../../images/img-body/contar-para-que-ocurra/foto3.jpg'
import { act } from 'react-dom/test-utils';


function ContarParaQueOcurra({ activado }) {

    return (

        <div className={activado === 'true' ? 'contar-content pt-5' : 'contar-content'}>
            <section className={`${(activado === 'true' ? 'fondo-curvo-activado' : 'd-none')}`}>
                <div className="curve"></div>
            </section>

            <div className="content-title">
                <h3 className='tittle-section'><span className='color-letter'>Contar</span> <span className='span-title'>para que </span>ocurra</h3>
            </div>
            <h5 className='title-contar'>"Contar para que ocurra" organizado por el grupo Mujeres de los Confines.</h5>
            <div className='mt-5'>
                <h5 className='title-edition'>Primera edicion</h5>
                <img class="img-primera-ed" src={foto} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>
            <div className='mt-5'>
                <h5 className='title-edition'>Segunda edicion</h5>
                <img class="img-primera-ed" src={foto1} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>
            <div className='mt-5'>
                <h5 className='title-edition'>Tercera edicion</h5>
                <img class="img-primera-ed" src={foto2} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>
            <div className='mt-5'>
                <h5 className='title-edition'>Cuarta edicion</h5>
                <img class="img-primera-ed" src={foto3} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>
        </div>
    )
}

export default ContarParaQueOcurra