import React from 'react'
import './footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>SaRv</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-antonio-rivera/"><AiFillLinkedin /></a>
        <a href="https://github.com/SebV8"><BsGithub /></a>
        <a href="mailto:sebastian.rivera.v13@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; SebastianR. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer