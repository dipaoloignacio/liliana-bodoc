import React from 'react'
import lili from '../../images/img-header/Liliana-Bodoc-banner2.jpg'
import logo from '../../images/img-header/logo-bg-e1e1e1.jpg'

function Header() {
    return (
        <header className="header">
            <img src={logo} className='logo-banner img-fluid' alt="" />
            <h1>Leer nos hace libres</h1>
            <img src={lili} className='banner img-fluid' alt="" />
        </header>
    )
}

export default Header