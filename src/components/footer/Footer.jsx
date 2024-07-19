import React from 'react'
import logo from '../../images/img-header/logo-sinFondo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import FormContact from '../form/FormContact'

function Footer() {
  return (
    <div>

      <div className='footer'>
        <div>
          <img src={logo} alt="" className='img-fluid d-block m-auto mb-5' />
          <p>-Fundacion Liliana Bodoc.</p>
          <div className='redes-section'>
            <ul className="redes">
              <li className="icon facebook">
                <span className="nombre-red">Facebook</span>
                <a href="https://www.facebook.com/groups/losconfinesdebodoc" target="_blank">
                  <span>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </a>
              </li>
              <li className="icon instagram">
                <span className="nombre-red">Instagram</span>
                <a href="https://www.instagram.com/liliana_bodoc.fans" target="_blank"><span><FontAwesomeIcon icon={faInstagram} /></span></a>

              </li>
              {/* <li className="icon youtube">
                <span className="nombre-red">Youtube</span>
                <a href="https://www.youtube.com/channel/UC1BkfXOrAE1IfSgi7FUKC3A" target="_blank"><span><FontAwesomeIcon icon={faYoutube} /></span></a>

              </li> */}
              {/* <li className="icon envelope">
                <span className="nombre-red">Mensaje</span>
                <a href="pages/contact.html" target="_blank"><span><FontAwesomeIcon icon={faWhatsapp} /></span></a>
              </li> */}
            </ul>
            <div>
              <ul className='contac-list'>
                <li> <FontAwesomeIcon icon={faEnvelope} /> mail: fundacionlilianabodoc@gmail.com</li>
                <li> <FontAwesomeIcon icon={faPhone} /> Tel: +5492615100720</li>
                <li> <FontAwesomeIcon icon={faLocationDot} /> Ubicacion: Mendoza-Argentina</li>
              </ul>
            </div>
          </div>
        </div>
        <FormContact />
      </div>
      <div className='createBy'>Producido por ID Studio</div>
    </div>
  )
}

export default Footer