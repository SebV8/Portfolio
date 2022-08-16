import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="header__content">
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <div className="container header__container">
          <h5>Hola, soy</h5>
          <h1>Sebastián Rivera</h1>
          <h5 className="text-light">Desarrollador Fullstack</h5>
          <HeaderSocials />
          <CTA />
          <a href="#contact" className='scroll__down'>Bajar</a>
        </div>
      </div>
    </header>
  )
}

export default Header