import { useEffect, useState } from 'react'
import { FaBell, FaTimes, FaTag } from 'react-icons/fa'
import { promotions } from '../data/promotions'

function NotificationToast() {
  const [isVisible, setIsVisible] = useState(false)

  const notification = promotions[1] || promotions[0]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <button
        className="notification-trigger"
        onClick={() => setIsVisible(true)}
      >
        <FaBell />
        Simular alerta
      </button>

      {isVisible && (
        <div className="notification-toast">
          <button
            className="notification-close"
            onClick={() => setIsVisible(false)}
          >
            <FaTimes />
          </button>

          <div className="notification-icon">
            <FaTag />
          </div>

          <div className="notification-content">
            <span>Notificación inteligente</span>
            <h3>{notification.titulo}</h3>
            <p>{notification.mensaje}</p>

            <div className="notification-product">
              <strong>{notification.producto}</strong>
              <small>{notification.descuento}</small>
            </div>

            <a href="#catalogo" onClick={() => setIsVisible(false)}>
              Ver catálogo
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default NotificationToast