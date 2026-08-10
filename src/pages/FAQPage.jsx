function FAQPage() {
  return (
    <main className="page-section">
      <div className="page-container">
        <span className="page-label">Preguntas frecuentes</span>

        <h1>Dudas comunes</h1>

        <div className="faq-list">
          <article className="faq-item">
            <h3>¿Cómo puedo comprar una gorra?</h3>
            <p>
              Puedes elegir una gorra del catálogo y presionar el botón de
              WhatsApp para pedir información directamente.
            </p>
          </article>

          <article className="faq-item">
            <h3>¿El sitio tiene buscador?</h3>
            <p>
              Sí. El catálogo cuenta con búsqueda conectada a un backend en
              Spring Boot y Elasticsearch.
            </p>
          </article>

          <article className="faq-item">
            <h3>¿El smartwatch muestra el catálogo completo?</h3>
            <p>
              No. El smartwatch funciona como apoyo para recibir alertas
              promocionales resumidas.
            </p>
          </article>

          <article className="faq-item">
            <h3>¿Se pueden consultar promociones?</h3>
            <p>
              Sí. El sitio tiene una página de ofertas y una notificación visual
              simulada para promociones.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default FAQPage