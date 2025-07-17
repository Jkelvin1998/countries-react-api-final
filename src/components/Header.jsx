import React, { useState } from 'react'

import '../components/style/Header.css'
import Hamburger from '../assets/images/hamburger-menu.svg';

const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState('false')

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className="container header">
        <a href="/">Countries<span className="api">API</span> Project</a>

        <div className="desktop-menu">
            <a href="">Regions</a>
            <a href="">Flags</a>
            <a href="">About</a>
        </div>

        <nav className="nav-mobile-menu">
            <span className="menu-toggle" onClick={toggleMenu}>
              <img src={Hamburger} alt="Hamburger Menu" />
            </span>
            <div className={`mobile-menu ${!isMenuOpen ? 'show' : ''}`}>
                <a href="">Regions</a>
                <a href="">Flags</a>
                <a href="">About</a>
            </div>
        </nav>
    </header>
  )
}

export default Header