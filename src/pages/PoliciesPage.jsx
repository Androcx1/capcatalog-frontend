function PoliciesPage() {
  return (
    <main className="page-section">
      <div className="page-container">
        <span className="page-label">Políticas</span>

        <h1>Políticas de compra</h1>

        <div className="page-grid">
          <article className="page-card">
            <h3>Disponibilidad</h3>
            <p>
              Los productos mostrados en el catálogo representan modelos
              disponibles o promocionales. La disponibilidad final se confirma
              por WhatsApp.
            </p>
          </article>

          <article className="page-card">
            <h3>Contacto</h3>
            <p>
              El contacto principal se realiza mediante WhatsApp, correo
              electrónico o redes sociales oficiales.
            </p>
          </article>

          <article className="page-card">
            <h3>Promociones</h3>
            <p>
              Las promociones pueden variar dependiendo del modelo, fecha y
              disponibilidad del producto.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default PoliciesPage