import React from 'react'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"
import Nav from "./components/nav/Nav"
import Portfolio  from "./components/portfolio/Portfolio"
import Contact  from "./components/contact/Contact"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"


export default function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    
    </>
  )
}
