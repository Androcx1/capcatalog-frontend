function PurchaseGuidePage() {
  return (
    <main className="page-section">
      <div className="page-container">
        <span className="page-label">Guía de compra</span>

        <h1>¿Cómo comprar una gorra?</h1>

        <p>
          Esta página explica el proceso básico para consultar productos,
          revisar disponibilidad y contactar al negocio para finalizar una
          compra.
        </p>

        <div className="page-grid">
          <article className="page-card">
            <h3>1. Explora el catálogo</h3>
            <p>
              Revisa los modelos disponibles dentro del catálogo, utilizando el
              buscador, filtros por color, categoría, precio y promociones.
            </p>
          </article>

          <article className="page-card">
            <h3>2. Selecciona un producto</h3>
            <p>
              Cada gorra cuenta con nombre, imagen, descripción, precio,
              categoría y botón de contacto por WhatsApp.
            </p>
          </article>

          <article className="page-card">
            <h3>3. Confirma por WhatsApp</h3>
            <p>
              Al presionar el botón de WhatsApp se genera un mensaje automático
              para consultar disponibilidad y acordar la compra.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default PurchaseGuidePage