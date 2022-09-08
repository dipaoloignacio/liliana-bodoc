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

function ContarParaQueOcurra({ activado }) {

    return (

        <div className={activado === 'true' ? 'contar-content pt-5' : 'contar-content'}>
            <section className={`${(activado === 'true' ? 'fondo-curvo-activado' : 'd-none')}`}>
                <div className="curve"></div>
            </section>

            <div className="content-title">
                <h3 className='tittle-section'><span className='color-letter'>Contar</span> <span className='span-title'>para que </span>ocurra</h3>
            </div>

            <div className='mt-5 '>
                <h3 className='title-edition mb-4'>Cuarta edicion</h3>
                <img class="img-primera-ed" src={foto3} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>

            <div className='mt-5'>
                <h3 className='title-edition mb-4'>Tercera edicion</h3>
                <img class="img-primera-ed" src={foto2} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>

            <div className='mt-5'>
                <h3 className='title-edition mb-4'>Segunda edicion</h3>
                <img class="img-primera-ed" src={foto1} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>

            <div className='mt-5'>
                <h3 className='title-edition mb-4'>Primera edicion</h3>
                <img class="img-primera-ed" src={foto} alt=""></img>
                <Link className='link-gallery' to=''>Galeria de fotos <FontAwesomeIcon icon={faArrowAltCircleRight} /> </Link>
            </div>

        </div>
    )
}

export default ContarParaQueOcurra