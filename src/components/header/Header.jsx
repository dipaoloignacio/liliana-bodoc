import React from 'react'
// import lili from '../../images/img-header/Liliana-Bodoc-555.jpg'
// import lili from '../../images/img-header/Liliana-Bodoc-nyb.jpg'
import lili from '../../images/img-header/liliana-bg-555.jpg'
import logo from '../../images/img-header/logo-bg-555.jpg'
// import logo from '../../images/img-header/logo-bg-464646.jpg'

function Header() {
    return (
        <header className="header">
            <img src={logo} className='logo-banner img-fluid' alt="" />
            <h1>LEER NOS HACE LIBRES</h1>
            <div className='content-img-banner'>
                <img src={lili} className='banner img-fluid' alt="" />
            </div>
        </header>
    )
}

export default Header