import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'

function Footer () {
    return (
        <div className="footer-content">
            <ul className="info-list">
                <li><FontAwesomeIcon icon={faPhoneAlt} size="lg" style={{marginRight: '10px'}}/> +46 70 2969650</li>
                <li><FontAwesomeIcon icon={faEnvelope} size="lg" style={{marginRight: '10px'}}/> <a href="mailto:info@dotnetmentor.se">info@dotnetmentor.se</a></li>
                <li><FontAwesomeIcon icon={faHome}     size="lg" style={{marginRight: '10px'}}/> Första långgatan 22, 413 28 Göteborg</li>
            </ul>
        </div>
    )
}

export default Footer;