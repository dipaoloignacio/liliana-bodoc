import React from 'react'
import Donaciones from '../donaciones/Donaciones'
import logo from '../../images/img-header/logo-letras-bgf3f3f3.jpg'
import { NavLink } from 'react-router-dom'
import Scroll from '../animations/scroll/Scroll'
import { useState } from 'react'
import { useEffect } from 'react'

function MenuCabecera() {
    const [viewModal, setViewModal] = useState(false)

    function closeModal() {
        setViewModal(false);
    }

    // comento este codigo para darle efecto al navbar en un futuro al hacer scroll.
    // const [navbar, setNavbar] = useState(false)
    // const changeBackground = () => {
    //     if (window.scrollY > 200) {
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false)
    //     }
    // }
    // window.addEventListener('scroll', changeBackground);
    // setNombre1('collapse navbar-collapse')

    return (
        <nav className="navbar navbar-expand-lg bg-propio sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img className='logo' src={logo} alt="" /></NavLink>
                <button className='navbar-toggler collapsed' type="button" data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded='false' aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                activeClassName="active"
                                to="/">INICIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                activeClassName="active"
                                to="/quienes-somos">QUIENES SOMOS</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" >
                                LILIANA BODOC
                            </button>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/liliana-bodoc/biografia">BIOGRAFIA</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/liliana-bodoc/obras">BIBLIOGRAFIA</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/liliana-bodoc/21-de-julio">21 DE JULIO</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/liliana-bodoc/videos">VIDEOS RECOMENDADOS</NavLink></li>
                                <li><hr className="dropdown-divider"></hr></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/que-hacemos" >
                                QUE HACEMOS
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/que-hacemos/mujeres-de-los-confines">MUJERES DE LOS CONFINES</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/que-hacemos/julio-actividad">21 DE JULIO</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/que-hacemos/contar-para-que-ocurra">CONTAR PARA QUE OCURRA</NavLink></li>
                                <li><hr className="dropdown-divider"></hr></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">NOVEDADES</a>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => { window.scrollTo(0, 50000) }} href="#" className="nav-link active" aria-current="page">CONTACTO</button>
                        </li>
                    </ul>
                    <a onClick={() => setViewModal(true)} className={"custom-btn btn-12"}>
                        <span>Click</span>
                        <span>Donaciones</span>
                    </a>
                </div>
            </div>
            <Donaciones closeModal={closeModal} viewModal={viewModal} />
        </nav>
    )
}

export default MenuCabecera