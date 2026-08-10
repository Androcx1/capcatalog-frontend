function HeroBanner() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-tag">Nueva colección 2026</span>

        <h1>Discover New Cap Styles</h1>

        <p>
          Explora gorras urbanas, deportivas y premium con promociones especiales
          para renovar tu estilo.
        </p>

        <div className="hero-buttons">
          <a href="#catalogo" className="primary-button">
            Ver catálogo
          </a>

          <a href="#ofertas" className="secondary-button">
            Ver ofertas
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="cap-preview cap-black"></div>
        <div className="cap-preview cap-blue"></div>
        <div className="cap-preview cap-red"></div>

        <div className="hero-offer">
          <span>Oferta especial</span>
          <strong>15% OFF</strong>
          <p>En modelos seleccionados</p>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner