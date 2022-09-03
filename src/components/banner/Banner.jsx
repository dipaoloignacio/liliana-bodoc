import React from 'react'
import { motion } from 'framer-motion';
import lili from '../../images/img-header/lili-bg-null.png'
import libros from '../../images/img-header/LIBROS.png'
import logo from '../../images/img-header/logo-sinFondo1.png'

function Header() {
    return (
        <header className="contenedor-banner">
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                src={logo}
                className='logo-banner img-fluid'
                alt="" />

            <div className="content-header">
                <div className='title-header'>
                    <h1>Leer nos hace libres</h1>
                    {/* <img src={libros} className='libros' alt="" /> */}
                </div>
            </div>
            <div className='content-img-banner'>
                <img
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    src={lili} className='banner img-fluid' alt="" />
            </div>
        </header>
    )
}

export default Header