import React from 'react'
import logo from '../../../images/img-header/logo-letras-bgf3f3f3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

function MenuCabecera() {
    return (
        <nav className="navbar navbar-expand-lg bg-propio sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Manifiesto</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" >
                                Liliana Bodoc
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">21 de Julio</a></li>
                                <li><a className="dropdown-item" href="#">Obras</a></li>
                                <li><a className="dropdown-item" href="#">Videos</a></li>
                                <li><a className="dropdown-item" href="#">Biografia</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" >
                                Actividades
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mujeres de los confines</a></li>
                                <li><a className="dropdown-item" href="#">21 de Julio</a></li>
                                <li><a className="dropdown-item" href="#">Contar para que ocurra</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Agenda</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                        </li>

                        <li className="nav-item donar">
                            {/* <a href="https://homenaje-lilianabodoc.blogspot.com/" target="_blank" className="custom-btn btn-12">Donaciones</a> */}
                            <button class="custom-btn btn-12"><span>Gracias!</span><span>Donaciones</span></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default MenuCabecera