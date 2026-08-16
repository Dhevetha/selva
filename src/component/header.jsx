import { useState } from 'react'
import logo from '../assets/logo.jpg'
import './header.css'

function Header({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ]

  const handleNav = (id) => {
    setActivePage(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sc-header">
      <div className="sc-header-inner">
        {/* Logo & Brand */}
        <div className="sc-header-brand" onClick={() => handleNav('home')}>
          <img src={logo} alt="Selva Construction Logo" className="sc-header-logo" />
          <div className="sc-header-brand-text">
            <span className="sc-brand-name">Selva Construction</span>
            <span className="sc-brand-tagline">Building Dreams Since 1984</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="sc-header-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`sc-nav-btn ${activePage === item.id ? 'sc-nav-active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button className={`sc-hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className={`sc-mobile-nav ${menuOpen ? 'sc-mobile-nav-open' : ''}`}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sc-mobile-nav-btn ${activePage === item.id ? 'sc-nav-active' : ''}`}
            onClick={() => handleNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header