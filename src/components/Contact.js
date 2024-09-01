import React from 'react'
import './Contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faWhatsapp, faDiscord, faMicrosoft } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-info'><h4>Microsoft Ambassadors</h4>
                <p>Krisha Aggarwal</p>
                <p>Sanika Kotgire</p></div>
            <div className='contact-info'><h4>Phone</h4>
                <a href='tel:+918007768137'>+918007768137</a>
                <a href='tel:+917378515898'>+917378515898</a></div>
            <div className='contact-info'><h4>Emails</h4>
                <a href='mailto:Krisha.Aggarwal@studentambassadors.com'>Krisha.Aggarwal@studentambassadors.com</a>
                <a href='mailto:Sanika.Kotgire@studentambassadors.com'>Sanika.Kotgire@studentambassadors.com</a></div>
            <div className='contact-info'><h4>LinkedIn</h4>
                <a target='_blank' href="https://www.linkedin.com/in/krisha-aggarwal-b54b83253/" >Krisha Aggarwal</a>
                <a target='_blank' href="https://www.linkedin.com/in/sanika-kotgire-69b361234/" >Sanika Kotgire</a></div>
            <div className='contact-info icon-content-2'>
                <a className='brand-icon-2' href="https://discord.gg/b5zgc9XRaA" target='_blank'><FontAwesomeIcon icon={faDiscord} /></a>
                <a className='brand-icon-2' href="https://chat.whatsapp.com/CVdLrkQgRqe2grRIQdMF07" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a className='brand-icon-2' href="https://github.com/MLSC-MIT-ADT" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a className='brand-icon-2' href="https://www.linkedin.com/company/mlscmitadtu/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className='brand-icon-2' href="https://www.instagram.com/mlscmitadt/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default Contact
