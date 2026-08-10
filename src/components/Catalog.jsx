import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import SearchBar from './SearchBar'
import Filters from './Filters'
import { API_URL } from '../config/api'

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedColor, setSelectedColor] = useState('Todos')
  const [maxPrice, setMaxPrice] = useState(800)
  const [onlyFeatured, setOnlyFeatured] = useState(false)
  const [onlyPromotions, setOnlyPromotions] = useState(false)

  useEffect(() => {
    const searchProducts = async () => {
      try {
        setLoading(true)
        setError('')

        const url = searchTerm.trim()
  ? `${API_URL}/api/productos/buscar?texto=${encodeURIComponent(searchTerm)}`
  : `${API_URL}/api/productos`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error('Error al cargar productos')
        }

        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError('No se pudo conectar con el backend de búsqueda.')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    searchProducts()
  }, [searchTerm])

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'Todas' || product.categoria === selectedCategory

    const matchesColor =
      selectedColor === 'Todos' || product.color === selectedColor

    const matchesPrice = product.precio <= maxPrice

    const matchesFeatured = !onlyFeatured || product.destacado

    const matchesPromotions = !onlyPromotions || product.promocion !== ''

    return (
      matchesCategory &&
      matchesColor &&
      matchesPrice &&
      matchesFeatured &&
      matchesPromotions
    )
  })

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('Todas')
    setSelectedColor('Todos')
    setMaxPrice(800)
    setOnlyFeatured(false)
    setOnlyPromotions(false)
  }

  return (
    <section className="catalog-section" id="catalogo">
      <div className="section-header">
        <span>Catálogo dinámico</span>
        <h2>Gorras disponibles</h2>
        <p>
          Explora la colección de gorras urbanas, deportivas, casuales y premium
          usando búsqueda con Elasticsearch.
        </p>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onlyFeatured={onlyFeatured}
        setOnlyFeatured={setOnlyFeatured}
        onlyPromotions={onlyPromotions}
        setOnlyPromotions={setOnlyPromotions}
        clearFilters={clearFilters}
      />

      <div className="catalog-results">
        <p>
          Resultados encontrados: <strong>{filteredProducts.length}</strong>
        </p>
      </div>

      {loading && (
        <div className="empty-results">
          <h3>Buscando productos...</h3>
          <p>Consultando resultados desde Elasticsearch.</p>
        </div>
      )}

      {error && !loading && (
        <div className="empty-results">
          <h3>Error de conexión</h3>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && filteredProducts.length > 0 && (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && !error && filteredProducts.length === 0 && (
        <div className="empty-results">
          <h3>No se encontraron productos</h3>
          <p>
            Intenta cambiar la búsqueda o limpiar los filtros para ver más
            resultados.
          </p>
        </div>
      )}
    </section>
  )
}

export default Catalog