import React from 'react'
import './header.css'
import CTA from './CTA'
import  ME from '../../assets/mon.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container" >
      <h5>Bonjour je suis </h5>
      <h1>Fatimazahrae Jalal</h1>
      <h5 className="text-light">Ingénieur d'état en informatique</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
          <img  src={ME}  alt="me" />
      </div>
      <a href="#contact" className="scroll__down" >Défiler vers le bas</a>
      
      </div>
    </header>
  )
}

export default Header


