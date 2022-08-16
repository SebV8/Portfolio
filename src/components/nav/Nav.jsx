import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {RiUserVoiceFill} from 'react-icons/ri'
import {GiBookmarklet} from 'react-icons/gi'
import {GiBriefcase} from 'react-icons/gi'  
import {TiMessages} from 'react-icons/ti'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><RiUserVoiceFill/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><GiBookmarklet/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><GiBriefcase/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav