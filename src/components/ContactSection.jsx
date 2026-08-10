import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

function ContactSection() {
  const phoneNumber = '524421234567'

  const message = encodeURIComponent(
    'Hola, vi el catálogo de gorras y me gustaría pedir información.'
  )

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-content">
        <div className="contact-info">
          <span>Contacto</span>

          <h2>¿Te interesa alguna gorra?</h2>

          <p>
            Escríbenos directamente por WhatsApp o visita nuestras redes sociales
            para conocer nuevas colecciones, promociones y productos destacados.
          </p>

          <div className="contact-actions">
            <a
              className="contact-whatsapp"
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Contactar por WhatsApp
            </a>

            <a href="mailto:contacto@capcatalog.com" className="contact-email">
              <FaEnvelope />
              contacto@capcatalog.com
            </a>
          </div>
        </div>

        <div className="contact-card">
          <h3>Información del negocio</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <strong>Ubicación</strong>
              <p>Querétaro, México</p>
            </div>
          </div>

          <div className="contact-item">
            <FaWhatsapp />
            <div>
              <strong>WhatsApp</strong>
              <p>+52 442 123 4567</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
              Instagram
            </a>

            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <FaTiktok />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection