import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="logo-icon">🧢</span>
        <span>Cap Catalog</span>
      </div>

      <p>
        Catálogo web inteligente de gorras con buscador, filtros, promociones y
        vista tipo smartwatch.
      </p>

      <div className="footer-links">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/wearable">Wearable</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
        <Link to="/politicas">Políticas</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/guia-compra">Guía de compra</Link>
<Link to="/envios">Envíos</Link>
<Link to="/cuidado-gorras">Cuidado de gorras</Link>
<Link to="/estadisticas">Estadísticas</Link>
      </div>

      <div className="footer-socials">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
          <FaTiktok />
        </a>

        <a href="https://wa.me/524421234567" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      <small>© 2026 Cap Catalog. Todos los derechos reservados.</small>
    </footer>
  )
}

export default Footer