import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/night.png'
import IMG2 from '../../assets/night1.jpg'
import IMG3 from '../../assets/back.jpg'

const data = [
  {
    id: 1,
    imagen: IMG1,
    titulo: 'This is a portfolio item title',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    imagen: IMG2,
    titulo: 'This is a portfolio item title',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    imagen: IMG3,
    titulo: 'This is a portfolio item title',
    descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Algunos de mis proyectos</h5>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">

        {
          data.map(({ id, imagen, titulo, descripcion, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={imagen} alt={titulo} />
                </div>
                <h3>{titulo}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>

            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio