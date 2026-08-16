import './footer.css'

function Footer({ setActivePage }) {
  const handleNav = (page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="sc-footer">
      <div className="sc-footer-inner">
        <div className="sc-footer-col">
          <h3 className="sc-footer-heading">Selva Construction</h3>
          <p className="sc-footer-desc">
            Over 40 years of excellence in construction. We build with integrity, quality, and a commitment to lasting value.
          </p>
        </div>
        <div className="sc-footer-col">
          <h4 className="sc-footer-col-title">Quick Links</h4>
          <ul className="sc-footer-links">
            {['home', 'about', 'services', 'contact'].map(p => (
              <li key={p}><button onClick={() => handleNav(p)}>{p.charAt(0).toUpperCase() + p.slice(1)}</button></li>
            ))}
          </ul>
        </div>
        <div className="sc-footer-col">
          <h4 className="sc-footer-col-title">Contact</h4>
          <p><a href="mailto:dhevethas@gmail.com">dhevethas@gmail.com</a></p>
          <p><a href="https://wa.me/918825444648" target="_blank" rel="noreferrer">+91 88254 44648</a></p>
        </div>
      </div>
      <div className="sc-footer-bottom">
        <p>© 2024 Selva Construction. All rights reserved. | 40+ Years | 300+ Projects</p>
      </div>
    </footer>
  )
}

export default Footer