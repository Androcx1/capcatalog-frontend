import { NavLink } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header-logo">
        <span className="logo-icon">🧢</span>
        <span>Cap Catalog</span>
      </NavLink>

      <nav className="header-nav">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/ofertas">Ofertas</NavLink>
        <NavLink to="/wearable">Wearable</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>

      <div className="header-actions">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>

        <a
          className="whatsapp-link"
          href="https://wa.me/524421234567"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header