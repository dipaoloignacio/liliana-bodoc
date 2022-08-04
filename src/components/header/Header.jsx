import React from 'react'
import logo from '../../images/img-header/logo-fondo-blanco.jpg'
import fondoBanner from '../../images/img-header/lili-opt.jpg'

function Header() {
    return (
        <header className="header ">
            <img className='logo' src={logo} alt="" />
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Manifiesto</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Comunidad</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Actividades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
            <img src={fondoBanner} className='banner img-fluid' alt="" />
        </header>
    )
}

export default Header