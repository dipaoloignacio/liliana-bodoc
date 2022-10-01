import React from 'react'
import Banner from '../banner/Banner'
import Scroll from '../animations/scroll/Scroll';
import Videos from '../liliana-bodoc/videos/Videos';
import cards from '../../Data/Cards/dataCards';
import { motion } from 'framer-motion';
import CardContainer from '../card-container/CardContainer';
import { Link } from 'react-router-dom'

import fotoIcon from '../../images/img-body/libro-icon.png'
import { useEffect } from 'react';

function Content() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='content-body'>
            <div className='fixed-top'><Scroll /></div>
            <Banner></Banner>
            <div className="quienes-somos">
                <iframe src="https://www.youtube.com/embed/hGsOhzs4Dvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <div className='manifiesto-index container'>
                    <div className="content-title">
                        <h3 className='tittle-section'>
                            ¿QUIE
                            <span className='span-title'>NES <span className='color-letter'>SO</span></span><span className='color-letter'>MOS</span>?
                        </h3>
                    </div>
                    ¿Qué imaginamos, qué proyectamos cuando pensamos en ponerle a la Fundación el nombre de Liliana Bodoc.?<br />

                    Seguramente lo mismo que soñaron, imaginaron todos los que eligieron su nombre para una biblioteca escolar, una biblioteca pública, una escuela, una librería, una plaza. <br />

                    Como haría Liliana,abrimos nuestra Fundación como una casa, o como se puede abrir un corazón. <br />

                    <Link className="custom-btn btn-3" to='/quienes-somos'><span>Conocenos</span></Link>
                </div>
            </div>

            <div className='division-banner'>
                <h2 class="background double">
                    <span ><img src={fotoIcon} alt="" /></span>
                </h2>
            </div>

            <div className='actividades'>
                <div className="content-title">
                    <h4 className='tittle-section'>
                        <span className='color-letter'>Nuestr</span><span className='span-title'><span className='color-letter'>as</span> Acti</span>vidades
                    </h4>
                </div>
                <CardContainer cardsData={cards} from={'index'} />
            </div>
            <Videos />
        </div>
    )
}

export default Content