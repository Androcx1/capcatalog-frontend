import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'

function LocationMap() {
  return (
    <section className="map-section">
      <div className="map-container">
        <div className="section-header">
          <span>Mapa de ubicación</span>
          <h2>Encuéntranos en Querétaro</h2>
          <p>
            El catálogo cuenta con referencia de ubicación para facilitar el
            contacto, entregas personales y consulta de disponibilidad.
          </p>
        </div>

        <div className="map-content">
          <div className="map-info-card">
            <div className="map-icon">
              <FaMapMarkerAlt />
            </div>

            <h3>Ubicación principal</h3>

            <p>
              Querétaro, México. Las entregas personales pueden coordinarse por
              WhatsApp después de confirmar la disponibilidad del producto.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Quer%C3%A9taro%2C%20M%C3%A9xico"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              Abrir en Google Maps
            </a>
          </div>

          <div className="map-frame">
            <iframe
              title="Mapa de ubicación Cap Catalog"
              src="https://maps.google.com/maps?q=Quer%C3%A9taro%2C%20M%C3%A9xico&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMap