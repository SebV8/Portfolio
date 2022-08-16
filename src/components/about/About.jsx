import React from 'react'
import './about.css'
import About from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderOpenFill} from 'react-icons/ri'

const about = () => {
  return (
    <section id='about'>
      <h2>Sobre mi</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
          <img src={About} alt='about-img'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>2+ años</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>20+</small>
            </article>

            <article className='about__card'>
              <RiFolderOpenFill className='about__icon'/>
              <h5>Proyectos</h5>
              <small>10+ Completados</small>
            </article>
          </div>
          <p>
          Profesional con certificación Fullstack en Python y conocimiento en C++, JavaScript, ReactJS entre otros. <br/>Con 2 años de experiencia en programación electronica, junto con el desarrollo de software y aplicaciones de mantenimiento. Dedicado, proactivo, con alta orientación al cliente y a resultados siempre con el enfoque de mejora continua
          </p>
        </div>
      </div>
    </section>
  )
}

export default about