import { FaBell, FaLock, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'

function SmartwatchWidget() {
  return (
    <section className="wearable-section" id="wearable">
      <div className="wearable-container">
        <div className="section-header">
          <span>Integración Wear OS</span>
          <h2>Ofertas completas desde el smartwatch</h2>
          <p>
            Cap Catalog contará con una app para smartwatch desarrollada en
            Android Studio, protegida mediante PIN y conectada al backend para
            consultar ofertas completas sin abrir la página web.
          </p>
        </div>

        <div className="wearable-content">
          <div className="wearable-info">
            <h3>¿Qué hará la app del reloj?</h3>

            <p>
              La app de Wear OS permitirá que el usuario vea una oferta completa
              directamente desde el smartwatch. La información vendrá desde el
              backend de Spring Boot conectado al catálogo.
            </p>

            <div className="wearable-features">
              <article>
                <FaLock />
                <div>
                  <h4>Acceso protegido</h4>
                  <p>
                    Antes de ver la oferta, el usuario deberá ingresar un PIN de
                    4 o 6 dígitos.
                  </p>
                </div>
              </article>

              <article>
                <FaBell />
                <div>
                  <h4>Oferta completa</h4>
                  <p>
                    El reloj mostrará título, producto, descuento, descripción,
                    precio y vigencia.
                  </p>
                </div>
              </article>

              <article>
                <FaShieldAlt />
                <div>
                  <h4>Pruebas de seguridad</h4>
                  <p>
                    Se verificará que no haya acceso sin autenticación, que el
                    PIN no esté en texto plano y que la sesión pueda cerrarse.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="wearable-preview">
            <div className="watch-device">
              <div className="watch-screen">
                <span className="watch-status">CAP ALERT</span>

                <h4>Oferta especial</h4>

                <p className="watch-product">Sox Negra New Era</p>

                <p className="watch-description">
                  15% OFF en gorra New Era negra. Oferta válida por tiempo
                  limitado.
                </p>

                <strong>$476 MXN</strong>

                <span className="watch-note">
                  Disponible desde app Wear OS
                </span>
              </div>
            </div>

            <div className="wearable-tech">
              <FaMobileAlt />
              <p>
                React mostrará el catálogo web, Spring Boot entregará la oferta
                y Android Studio mostrará la app protegida del smartwatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmartwatchWidget