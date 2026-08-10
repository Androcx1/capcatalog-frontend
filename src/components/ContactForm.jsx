import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      formData.nombre.trim() === '' ||
      formData.correo.trim() === '' ||
      formData.telefono.trim() === '' ||
      formData.mensaje.trim() === ''
    ) {
      setSuccessMessage('Por favor completa todos los campos.')
      return
    }

    setSuccessMessage('Mensaje enviado correctamente. Pronto nos pondremos en contacto contigo.')

    setFormData({
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: ''
    })
  }

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <div className="section-header">
          <span>Formulario de contacto</span>
          <h2>Envíanos un mensaje</h2>
          <p>
            Completa el formulario para solicitar información sobre productos,
            disponibilidad, promociones o formas de compra.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                placeholder="Escribe tu nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Correo electrónico</label>
              <input
                type="email"
                name="correo"
                placeholder="correo@ejemplo.com"
                value={formData.correo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              placeholder="Ejemplo: 442 123 4567"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje..."
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="form-button">
            <FaPaperPlane />
            Enviar mensaje
          </button>

          {successMessage && (
            <p className="form-message">{successMessage}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm