import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { API_URL } from '../config/api'
import '../styles/mobile-promotion-qr.css'

function MobilePromotionQR() {
  const [promotion, setPromotion] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPromotion = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(
          `${API_URL}/api/mobile/promociones/PROMO-001`
        )

        if (!response.ok) {
          throw new Error('No se pudo consultar la promoción')
        }

        const data = await response.json()

        setPromotion(data)
      } catch (error) {
        console.error(error)
        setError('No se pudo cargar la promoción.')
      } finally {
        setLoading(false)
      }
    }

    getPromotion()
  }, [])

  if (loading) {
    return (
      <section className="mobile-promotion-section">
        <p>Cargando promoción...</p>
      </section>
    )
  }

  if (error || !promotion) {
    return (
      <section className="mobile-promotion-section">
        <p>{error}</p>
      </section>
    )
  }

  return (
    <section className="mobile-promotion-section">
      <div className="mobile-promotion-container">

        <div className="mobile-promotion-info">

          <span className="mobile-promotion-label">
            Promoción móvil
          </span>

          <h2>{promotion.producto}</h2>

          <p className="mobile-promotion-description">
            {promotion.descripcion}
          </p>

          <div className="mobile-promotion-discount">
            {promotion.descuento}
          </div>

          <div className="mobile-promotion-prices">
            <span>
              Antes:
              <del>${promotion.precioAnterior}</del>
            </span>

            <strong>
              Ahora: ${promotion.precioOferta} MXN
            </strong>
          </div>

          <p>
            <strong>Caduca:</strong>{' '}
            {promotion.fechaCaducidad}
          </p>

          <p>
            <strong>Estado:</strong>{' '}
            {promotion.estado}
          </p>

        </div>

        <div className="mobile-promotion-qr">

          <h3>Escanea esta promoción</h3>

          <p>
            Abre Cap Catalog Mobile y escanea el código
            con la cámara de tu celular.
          </p>

          <div className="qr-container">
            <QRCode
              value={promotion.idPromocion}
              size={190}
            />
          </div>

          <span className="qr-code-id">
            {promotion.idPromocion}
          </span>

        </div>

      </div>
    </section>
  )
}

export default MobilePromotionQR