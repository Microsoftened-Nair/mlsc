import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import './Nav-media.css'
import logo from '../assets/logo.svg'
import mit from '../assets/mit.jpg'
import mit1 from '../assets/mit1.png'
import { Link } from 'react-scroll';
import logo2 from '../assets/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin,faGithub, faWhatsapp, faDiscord, faMicrosoft} from '@fortawesome/free-brands-svg-icons'
import { ThemeContext } from '../App';
import { motion } from 'framer-motion';


const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 820);

    useEffect(()=>{
        const onResize = () => setIsMobile(window.innerWidth<=820);
        window.addEventListener('resize', onResize);
        return ()=> window.removeEventListener('resize', onResize);
    },[]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const toggleDropdown = () => {
        if (!isMobile) {
            setIsOpen(!isOpen);
        }
        else{

        }
    };


    return (
        <div>
            {isMobile ? (
                <button aria-label="Menu" className="menu-button" onClick={toggleMenu} ><FontAwesomeIcon icon={faMicrosoft} /></button>
            ) : null}
            <div className={`navbar glass ${menuOpen? 'open' : ''}`}>
                <div className='icon'><img src={isMobile ? logo2 : logo} alt='Microsoft logo' /></div>
                <div className='nav-content'>
                    <NavLink to='home' label='Home' />
                    <NavLink to='events' label='Events' />
                    <NavLink to='about' label='About' />
                    <NavLink to='vision' label='Vision' />
                    <div className='dropdown' onMouseLeave={()=>setIsOpen(false)}>
                        <button onMouseEnter={toggleDropdown} className='nav-button nav-btn-plain' aria-haspopup='true' aria-expanded={isOpen}>Benefits ▾</button>
                        <motion.div 
                          initial={{height:0, opacity:0}}
                          animate={isOpen?{height:'auto', opacity:1}:{height:0, opacity:0}}
                          transition={{duration:0.3}}
                          className={`dropdown-content ${isOpen ? 'open' : ''}`}
                        >
                            <DropdownLink to='benefits' className='developers' label='Developers'/>
                            <DropdownLink to='benefits' className='creators' label='Creators'/>
                            <DropdownLink to='benefits' className='innovators' label='Innovators'/>
                            <DropdownLink to='benefits' className='enthusiasts' label='Microsoft Enthusiasts'/>
                        </motion.div>
                    </div>
                    <NavLink to='apply' label='Apply' />
                    <NavLink to='contact' label='Contact' />
                </div>
                <div className='icon-content'>
                    <a className='brand-icon' href="https://www.instagram.com/mlscmitadt/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className='brand-icon' href="https://www.linkedin.com/company/mlscmitadtu/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className='brand-icon' href="https://discord.gg/b5zgc9XRaA" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faDiscord} /></a>
                    <a className='brand-icon' href="https://chat.whatsapp.com/CVdLrkQgRqe2grRIQdMF07" target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a className='brand-icon' href="https://github.com/MLSC-MIT-ADT" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <div className='mit-icon'><img src={isMobile?mit1:mit} alt='College logo' /></div>
                <button className='theme-toggle-btn' onClick={toggleTheme} aria-label='Toggle color mode'>
                    {theme==='light' ? '🌙' : '☀️'}
                </button>
            </div>
        </div>
    )
}

// Sub components for readability
const NavLink = ({to, label}) => (
    <Link to={to} smooth={true} duration={500} className='nav-button'>{label}</Link>
);

const DropdownLink = ({to, className, label}) => (
    <Link to={to} smooth={true} duration={500} className={`benefit-button ${className}`}>{label}</Link>
)

export default Navbar
