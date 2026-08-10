import { useEffect, useState } from 'react'
import { FaCheckCircle, FaTimesCircle, FaSyncAlt, FaUndo } from 'react-icons/fa'
import { API_URL } from '../config/api'

function WearableStatsDashboard() {
  const [stats, setStats] = useState({
    ofertasAceptadas: 0,
    ofertasNegadas: 0
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getStats = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(`${API_URL}/api/wearable/estadisticas`)

      if (!response.ok) {
        throw new Error('Error al consultar estadísticas')
      }

      const data = await response.json()
      setStats(data)
    } catch (error) {
      setError('No se pudieron cargar las estadísticas del smartwatch.')
    } finally {
      setLoading(false)
    }
  }

  const resetStats = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(
  `${API_URL}/api/wearable/estadisticas/reiniciar`,
  {
    method: 'POST'
  }
)

      if (!response.ok) {
        throw new Error('Error al reiniciar estadísticas')
      }

      const data = await response.json()
      setStats(data)
    } catch (error) {
      setError('No se pudieron reiniciar las estadísticas.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStats()

    const interval = setInterval(() => {
      getStats()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="wearable-stats-section">
      <div className="wearable-stats-container">
        <div className="section-header">
          <span>Dashboard Wear OS</span>
          <h2>Respuesta de ofertas desde smartwatch</h2>
          <p>
            Esta sección muestra la conexión entre la app del smartwatch, el
            backend de Spring Boot y la página web de Cap Catalog.
          </p>
        </div>

        <div className="wearable-stats-grid">
          <article className="wearable-stat-card accepted">
            <FaCheckCircle />
            <span>Ofertas aceptadas</span>
            <strong>{stats.ofertasAceptadas}</strong>
          </article>

          <article className="wearable-stat-card rejected">
            <FaTimesCircle />
            <span>Ofertas negadas</span>
            <strong>{stats.ofertasNegadas}</strong>
          </article>
        </div>

        {error && (
          <p className="wearable-stats-error">{error}</p>
        )}

        <div className="wearable-stats-actions">
          <button onClick={getStats} disabled={loading}>
            <FaSyncAlt />
            Actualizar
          </button>

          <button onClick={resetStats} disabled={loading}>
            <FaUndo />
            Reiniciar demo
          </button>
        </div>

        <p className="wearable-stats-note">
          El dashboard se actualiza automáticamente cada 3 segundos. Si aceptas
          una oferta desde el reloj, el contador cambiará aquí.
        </p>
      </div>
    </section>
  )
}

export default WearableStatsDashboard