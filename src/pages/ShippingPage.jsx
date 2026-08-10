function ShippingPage() {
  return (
    <main className="page-section">
      <div className="page-container">
        <span className="page-label">Envíos y entregas</span>

        <h1>Opciones de entrega</h1>

        <p>
          El sitio permite al usuario consultar productos y contactar al negocio
          para coordinar entregas personales o envíos según disponibilidad.
        </p>

        <div className="page-grid">
          <article className="page-card">
            <h3>Entregas personales</h3>
            <p>
              Las entregas personales pueden coordinarse en Querétaro, México,
              después de confirmar la disponibilidad de la gorra.
            </p>
          </article>

          <article className="page-card">
            <h3>Envíos</h3>
            <p>
              Los envíos se pueden acordar por WhatsApp, indicando el modelo
              elegido, datos de contacto y ubicación del cliente.
            </p>
          </article>

          <article className="page-card">
            <h3>Confirmación</h3>
            <p>
              Antes de realizar cualquier entrega o envío, se confirma el modelo,
              precio, promoción disponible y método de entrega.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default ShippingPage