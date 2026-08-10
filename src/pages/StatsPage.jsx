import { useEffect, useState } from 'react'
import { FaChartBar, FaTags, FaStar, FaDollarSign } from 'react-icons/fa'
import WearableStatsDashboard from '../components/WearableStatsDashboard'
import { API_URL } from '../config/api'

function StatsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/productos`)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error al cargar estadísticas:', error)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  const totalProducts = products.length

  const promotionProducts = products.filter(
    (product) => product.promocion && product.promocion.trim() !== ''
  ).length

  const featuredProducts = products.filter(
    (product) => product.destacado
  ).length

  const categories = [...new Set(products.map((product) => product.categoria))]

  const prices = products.map((product) => product.precio)

  const averagePrice =
    prices.length > 0
      ? Math.round(prices.reduce((total, price) => total + price, 0) / prices.length)
      : 0

  const maxPrice = prices.length > 0 ? Math.max(...prices) : 0
  const minPrice = prices.length > 0 ? Math.min(...prices) : 0

  return (
    <>
      <main className="stats-section">
        <div className="stats-container">
          <span className="page-label">Herramientas para estadísticas</span>

          <h1>Estadísticas del catálogo</h1>

          <p>
            Esta sección permite visualizar datos generales del catálogo web,
            tomando la información desde el backend conectado con Elasticsearch.
          </p>

          {loading ? (
            <div className="stats-loading">
              <h3>Cargando estadísticas...</h3>
              <p>Consultando información del catálogo.</p>
            </div>
          ) : (
            <>
              <div className="stats-grid">
                <article className="stats-card">
                  <FaChartBar />
                  <span>Total de productos</span>
                  <strong>{totalProducts}</strong>
                </article>

                <article className="stats-card">
                  <FaTags />
                  <span>Productos en promoción</span>
                  <strong>{promotionProducts}</strong>
                </article>

                <article className="stats-card">
                  <FaStar />
                  <span>Productos destacados</span>
                  <strong>{featuredProducts}</strong>
                </article>

                <article className="stats-card">
                  <FaDollarSign />
                  <span>Precio promedio</span>
                  <strong>${averagePrice}</strong>
                </article>
              </div>

              <div className="stats-details">
                <article className="stats-panel">
                  <h3>Categorías disponibles</h3>

                  <div className="category-list">
                    {categories.map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                </article>

                <article className="stats-panel">
                  <h3>Rango de precios</h3>

                  <div className="price-stats">
                    <div>
                      <span>Precio más bajo</span>
                      <strong>${minPrice}</strong>
                    </div>

                    <div>
                      <span>Precio más alto</span>
                      <strong>${maxPrice}</strong>
                    </div>
                  </div>
                </article>
              </div>
            </>
          )}
        </div>
      </main>

      <WearableStatsDashboard />
    </>
  )
}

export default StatsPage