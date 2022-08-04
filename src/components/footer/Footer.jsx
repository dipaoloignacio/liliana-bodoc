import React from 'react'
import logo from '../../images/img-header/logo-bg-gris.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faYoutube,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt="" className='img-fluid' />
        <p>-Fundacion Liliana Bodoc.</p>

        <ul class="redes">
      <li class="icon facebook">
        <span class="nombre-red">Facebook</span>
        <a href="https://www.facebook.com/El-alma-en-un-hilo-Marionetas-y-Miniaturas--804228576283329" target="_blank">
          <span>
          <FontAwesomeIcon icon={faFacebookF} />
          </span>
        </a>
      </li>
      <li class="icon instagram">
        <span class="nombre-red">Instagram</span>
        <a href="https://www.instagram.com/elalmaenunhilo.marionetas/?hl=es" target="_blank"><span><FontAwesomeIcon icon={faInstagram} /></span></a>

      </li>
      <li class="icon youtube">
        <span class="nombre-red">Youtube</span>
        <a href="https://www.youtube.com/channel/UC1BkfXOrAE1IfSgi7FUKC3A" target="_blank"><span><FontAwesomeIcon icon={faYoutube} /></span></a>

      </li>
      <li class="icon envelope">
        <span class="nombre-red">Mensaje</span>
        <a href="pages/contact.html" target="_blank"><span><FontAwesomeIcon icon={faWhatsapp} /></span></a>
      </li>
    </ul>
    </div>
  )
}

export default Footer