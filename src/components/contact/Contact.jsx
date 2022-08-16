import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'


import { BsGithub } from 'react-icons/bs'


const Contact = () => {

  return (
    <section id='contact'>
      <h5>Comunicate!</h5>
      <h2>Contacto</h2>
      <div className="container contact__container">

          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Mail</h4>
            <h5>sebastian.rivera.v13@gmail.com</h5>
            <a href="mailto:sebastian.rivera.v13@gmail.com" target="_blank" rel="noopener noreferrer">Enviar un mensaje</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Perfil</h5>
            <a href="https://www.linkedin.com/in/sebasti%C3%A1n-antonio-rivera/" target="_blank" rel="noopener noreferrer">Conectar</a>
          </article>

          <article className="contact__option">
            <BsGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>Perfil</h5>
            <a href="https://github.com/SebV8" target="_blank" rel="noopener noreferrer">Visitar perfil </a>
          </article>

        </div>
    </section>
  )
}

export default Contact