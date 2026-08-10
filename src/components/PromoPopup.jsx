import { useEffect, useState } from 'react'
import { FaTimes, FaTags } from 'react-icons/fa'
import { promotions } from '../data/promotions'

function PromoPopup() {
  const [showPopup, setShowPopup] = useState(false)

  const promotion = promotions[0]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!showPopup) {
    return null
  }

  return (
    <div className="popup-overlay">
      <div className="promo-popup">
        <button className="popup-close" onClick={() => setShowPopup(false)}>
          <FaTimes />
        </button>

        <div className="popup-icon">
          <FaTags />
        </div>

        <span className="popup-label">Oferta limitada</span>

        <h2>{promotion.titulo}</h2>

        <p>{promotion.mensaje}</p>

        <div className="popup-product">
          <strong>{promotion.producto}</strong>
          <span>{promotion.descuento}</span>
        </div>

        <a href="#catalogo" className="popup-button" onClick={() => setShowPopup(false)}>
          Ver catálogo
        </a>
      </div>
    </div>
  )
}

export default PromoPopup