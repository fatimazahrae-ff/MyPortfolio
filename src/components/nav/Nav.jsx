import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'




/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a  href='#' className={activeNav === '#' ? 'active' : ''} onClick={()=> setActiveNav('#')}><AiOutlineHome/></a>
      <a  href='#about' className={activeNav === '#about' ? 'active' : ''}   onClick={()=> setActiveNav('#about')} ><AiOutlineUser/></a>
      <a  href='#experience' className={activeNav === '#experience' ? 'active' : ''}  onClick={()=> setActiveNav('#experience')}><BiBookAlt/></a>
      <a  href='#services' className={activeNav === '#services' ? 'active' : ''}  onClick={()=> setActiveNav('#services')}><RiServiceLine/></a>
      <a  href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={()=> setActiveNav('#contact')}><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Nav
