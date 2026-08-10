function CarePage() {
  return (
    <main className="page-section">
      <div className="page-container">
        <span className="page-label">Cuidado de gorras</span>

        <h1>Recomendaciones de cuidado</h1>

        <p>
          Para conservar mejor las gorras, se recomienda seguir cuidados básicos
          de limpieza, almacenamiento y uso.
        </p>

        <div className="page-grid">
          <article className="page-card">
            <h3>Limpieza</h3>
            <p>
              Evita lavar la gorra en lavadora. Lo ideal es limpiar manchas con
              un paño húmedo, jabón suave y poca agua.
            </p>
          </article>

          <article className="page-card">
            <h3>Almacenamiento</h3>
            <p>
              Guarda la gorra en un lugar seco, sin aplastarla y lejos del sol
              directo para evitar deformaciones o pérdida de color.
            </p>
          </article>

          <article className="page-card">
            <h3>Uso diario</h3>
            <p>
              Evita exponerla constantemente a lluvia, sudor excesivo o
              superficies sucias para mantener mejor su forma y apariencia.
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default CarePage