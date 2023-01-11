import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header__container" >
      <h5>Bonjour je suis </h5>
      <h1>Fatimazahrae Jalal</h1>
      <h5 className="text-light">Ingénieur d'état en informatique</h5>
      <CTA/>
      </div>
    </header>
  )
}

export default Header


