import { FaWhatsapp } from 'react-icons/fa'

function ProductCard({ product }) {
  const phoneNumber = '524421234567'

  const message = encodeURIComponent(
    `Hola, me interesa la ${product.nombre} de $${product.precio}. ¿Sigue disponible?`
  )

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <article className="product-card">
      {product.promocion && (
        <span className="product-badge">{product.promocion}</span>
      )}

      <div className="product-image">
        <img src={product.imagen} alt={product.nombre} />
      </div>

      <div className="product-info">
        <span className="product-category">{product.categoria}</span>

        <h3>{product.nombre}</h3>

        <p>{product.descripcion}</p>

        <div className="product-meta">
          <span>{product.color}</span>
          <span>{product.tipo}</span>
        </div>

        <div className="product-footer">
          <strong>${product.precio}</strong>

          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProductCard