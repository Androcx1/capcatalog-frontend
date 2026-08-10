function AboutPage() {
  return (
    <main className="page-section">
      <div className="page-container">
        <span className="page-label">Nosotros</span>

        <h1>Cap Catalog</h1>

        <p>
          Cap Catalog es un catálogo web inteligente enfocado en la venta y
          promoción de gorras urbanas, deportivas y premium. El sitio permite
          consultar productos, buscar modelos, revisar promociones y contactar
          directamente por WhatsApp.
        </p>

        <div className="page-grid">
          <article className="page-card">
            <h3>Misión</h3>
            <p>
              Ofrecer una experiencia digital sencilla, rápida y visual para que
              los usuarios encuentren gorras de acuerdo con su estilo.
            </p>
          </article>

          <article className="page-card">
            <h3>Visión</h3>
            <p>
              Convertirse en una plataforma moderna para mostrar productos,
              promociones y futuras integraciones con dispositivos inteligentes.
            </p>
          </article>

          <article className="page-card">
            <h3>Valor agregado</h3>
            <p>
              El sitio integra búsqueda con Elasticsearch, filtros dinámicos,
              promociones, notificaciones simuladas y vista tipo smartwatch.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default AboutPage