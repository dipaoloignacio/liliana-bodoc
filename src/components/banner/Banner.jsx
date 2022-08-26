import React from 'react'
// import lili from '../../images/img-header/Liliana-Bodoc-555.jpg'
// import lili from '../../images/img-header/Liliana-Bodoc-nyb.jpg'
import lili from '../../images/img-header/lili-bg-null.png'
import libros from '../../images/img-header/LIBROS.png'
import logo from '../../images/img-header/logo-sinFondo1.png'
// import logo from '../../images/img-header/logo-bg-464646.jpg'

function Header() {
    return (
        <header className="contenedor-banner">
            <img src={logo} className='logo-banner img-fluid' alt="" />
            <div className="content-header">
                <div className='title-header'>
                    <h1>Leer nos hace libres</h1>
                    <img src={libros} className='libros' alt="" />
                </div>
            </div>
            <div className='content-img-banner'>
                <img src={lili} className='banner img-fluid' alt="" />
            </div>
        </header>
    )
}

export default Header