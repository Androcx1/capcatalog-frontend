import { FaBolt, FaTags, FaStar } from 'react-icons/fa'
import { promotions } from '../data/promotions'

function PromotionsSection() {
  const activePromotions = promotions.filter((promotion) => promotion.activa)

  return (
    <section className="promotions-section" id="ofertas">
      <div className="section-header">
        <span>Ofertas especiales</span>
        <h2>Promociones destacadas</h2>
        <p>
          Consulta las promociones activas del catálogo y descubre productos
          seleccionados con descuentos especiales.
        </p>
      </div>

      <div className="promo-main-banner">
        <div>
          <span className="promo-label">Promoción principal</span>
          <h3>Renueva tu estilo con gorras urbanas</h3>
          <p>
            Encuentra modelos snapback, trucker, curvas y premium con ofertas
            disponibles por tiempo limitado.
          </p>

          <a href="#catalogo" className="promo-button">
            Ver productos
          </a>
        </div>

        <div className="promo-discount-box">
          <FaBolt />
          <strong>Hasta 15% OFF</strong>
          <span>En modelos seleccionados</span>
        </div>
      </div>

      <div className="promo-cards-grid">
        {activePromotions.map((promotion, index) => (
          <article className="promo-card" key={promotion.id}>
            <div className="promo-icon">
              {index === 0 && <FaTags />}
              {index === 1 && <FaBolt />}
              {index === 2 && <FaStar />}
            </div>

            <div>
              <span>{promotion.descuento}</span>
              <h3>{promotion.titulo}</h3>
              <p>{promotion.mensaje}</p>
              <strong>{promotion.producto}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PromotionsSection