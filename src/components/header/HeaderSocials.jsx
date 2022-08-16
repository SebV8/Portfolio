import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-antonio-rivera/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/SebV8" target="_blank" rel="noopener noreferrer">
            <BsGithub />
        </a>
    </div>
  )
}

export default HeaderSocials