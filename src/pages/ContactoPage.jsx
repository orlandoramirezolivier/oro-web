import { useState } from 'react'
import { Link } from 'react-router-dom'
import FaqItem from '../components/FaqItem'

export default function ContactoPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      {/* HERO */}
      <section className="hero-mini">
        <div className="container">
          <div className="hero-label"><i className="fa-solid fa-comments"></i> Hablemos</div>
          <h1>Hablemos de<br /><span style={{ color: 'var(--oro)' }}>tu proyecto.</span></h1>
          <p>Sin tecnicismos, sin rodeos. Cuéntanos qué necesitas y te damos un presupuesto real en menos de 48 horas.</p>
        </div>
      </section>

      {/* CONTACTO PRINCIPAL */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* CANALES */}
            <div>
              <div className="section-label">Cómo contactarnos</div>
              <div className="contact-channels">
                <a href="tel:+34643795099" className="channel-card">
                  <div className="channel-icon phone"><i className="fa-solid fa-phone"></i></div>
                  <div>
                    <div className="channel-label">Teléfono — Presupuestos y consultas</div>
                    <div className="channel-value">+34 643 79 50 99</div>
                    <div className="channel-desc">Llama para presupuestos, consultas sobre servicios o cualquier duda antes de iniciar tu proyecto. Atención directa.</div>
                  </div>
                </a>

                <a href="https://wa.me/34643795099" className="channel-card">
                  <div className="channel-icon whatsapp"><i className="fa-brands fa-whatsapp"></i></div>
                  <div>
                    <div className="channel-label">WhatsApp</div>
                    <div className="channel-value">Escríbenos por WhatsApp</div>
                    <div className="channel-desc">La forma más rápida de resolver una duda o enviar fotos del espacio a reformar. Respondemos en el día.</div>
                  </div>
                </a>

                <a href="mailto:info.oroconstructores@gmail.com" className="channel-card">
                  <div className="channel-icon email"><i className="fa-solid fa-envelope"></i></div>
                  <div>
                    <div className="channel-label">Email</div>
                    <div className="channel-value">info.oroconstructores@gmail.com</div>
                    <div className="channel-desc">Para presupuestos detallados, planos o documentación de proyecto. Respondemos en menos de 24 horas.</div>
                  </div>
                </a>

                <div className="channel-card" style={{ cursor: 'default' }}>
                  <div className="channel-icon location"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <div className="channel-label">Zona de servicio</div>
                    <div className="channel-value">Madrid y área metropolitana</div>
                    <div className="channel-desc">Trabajamos en toda la Comunidad de Madrid. Para proyectos fuera de Madrid, consúltanos disponibilidad.</div>
                  </div>
                </div>
              </div>

              <div className="hours-badge">
                <i className="fa-solid fa-clock"></i> Respuesta garantizada en menos de 48 horas
              </div>
            </div>

            {/* FORMULARIO */}
            <div className="form-card">
              <h3>Escríbenos directamente</h3>
              <p className="sub">Cuéntanos sobre tu proyecto. Sin compromisos ni rellenos innecesarios.</p>

              {!sent ? (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre completo</label>
                      <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input type="tel" id="telefono" name="telefono" placeholder="+34 600 000 000" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="servicio">¿Qué tipo de trabajo necesitas?</label>
                    <select id="servicio" name="servicio" required defaultValue="">
                      <option value="" disabled>Selecciona un servicio</option>
                      <option value="reforma-integral">Reforma Integral</option>
                      <option value="cocina">Reforma de Cocina</option>
                      <option value="bano">Reforma de Baño</option>
                      <option value="pintura">Pintura y Acabados</option>
                      <option value="fontaneria">Fontanería / Fuga</option>
                      <option value="electricidad">Electricidad</option>
                      <option value="alicatado">Cerámica y Alicatado</option>
                      <option value="local">Reforma de Local Comercial</option>
                      <option value="otro">Otro / No sé aún</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Cuéntanos más sobre tu proyecto</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Describe brevemente qué necesitas, en qué zona de Madrid y cuándo te gustaría empezar..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <i className="fa-solid fa-paper-plane"></i> Enviar mensaje
                  </button>

                  <div className="guarantee-row">
                    <span className="guarantee-item"><i className="fa-solid fa-shield-check"></i> Tus datos son privados</span>
                    <span className="guarantee-item"><i className="fa-solid fa-clock"></i> Respondemos en &lt;48h</span>
                    <span className="guarantee-item"><i className="fa-solid fa-ban"></i> Sin spam</span>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--ink)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--oro)', fontSize: '24px' }}>
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>Mensaje recibido.</h3>
                  <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>Te contactaremos en menos de 48 horas. Si tienes urgencia, llámanos directamente al <strong>+34 643 79 50 99</strong>.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-paper">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-label">Preguntas frecuentes</div>
          <h2 className="h2" style={{ marginBottom: '40px' }}>Lo que nos preguntan antes de empezar.</h2>
          <div className="faq-block">
            <FaqItem question="¿La visita para el presupuesto tiene algún coste?">
              No. La visita y el presupuesto son completamente gratuitos y sin ningún compromiso. Visitamos tu espacio, evaluamos el trabajo y te entregamos un presupuesto detallado y cerrado. Si decides no seguir adelante, no hay ningún cargo.
            </FaqItem>
            <FaqItem question="¿En cuánto tiempo pueden empezar la obra?">
              Dependiendo de nuestra agenda actual y del tipo de trabajo, podemos comenzar en 1 a 3 semanas desde la firma del presupuesto. Para urgencias (fugas, roturas), gestionamos respuesta en el día o en 24 horas.
            </FaqItem>
            <FaqItem question="¿El precio puede cambiar una vez comenzada la obra?">
              No, siempre que el proyecto no cambie. Trabajamos con presupuestos cerrados: el precio acordado es el precio final. Si durante la obra descubres que quieres añadir algo o modificar el proyecto, te presentamos un presupuesto adicional antes de ejecutar cualquier cambio.
            </FaqItem>
            <FaqItem question="¿Cómo son las condiciones de pago?">
              Para la mayoría de proyectos, trabajamos con un 50% al inicio y el resto al finalizar. En proyectos grandes (reforma integral), dividimos el pago en cuotas por fase de obra para que el pago vaya alineado con el avance real. Nunca pedimos el total por adelantado.
            </FaqItem>
            <FaqItem question="¿Trabajáis fuera de Madrid capital?">
              Sí. Trabajamos en toda la Comunidad de Madrid. Para proyectos fuera de la comunidad, consúltanos — dependiendo del volumen de trabajo podemos gestionarlo. Escríbenos y lo valoramos sin compromiso.
            </FaqItem>
            <FaqItem question="¿Tenéis seguro de responsabilidad civil?">
              Sí. Trabajamos con seguro de responsabilidad civil en vigor. Si durante la obra ocurre algún daño no previsto, está cubierto. Tu tranquilidad es el plan — también en este aspecto.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section className="section-sm">
        <div className="container">
          <div className="section-label">También te puede interesar</div>
          <div className="grid-3">
            <Link to="/presupuesto" className="card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card-icon"><i className="fa-solid fa-file-invoice"></i></div>
              <h3 style={{ marginBottom: '8px' }}>Solicitar presupuesto</h3>
              <p>Formulario detallado para que podamos prepararte una oferta precisa.</p>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>Ir al formulario <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/soluciones" className="card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
              <h3 style={{ marginBottom: '8px' }}>Ver servicios</h3>
              <p>Todos los servicios con precios de referencia y plazos estimados.</p>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>Ver servicios <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/tienda" className="card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card-icon" style={{ background: 'var(--ink)', color: 'var(--oro)' }}><i className="fa-solid fa-store"></i></div>
              <h3 style={{ marginBottom: '8px' }}>Oro Tienda</h3>
              <p>Recursos gratuitos, guías y herramientas para tu reforma.</p>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>Explorar tienda <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Tienes prisa? Llámanos directamente.</h2>
          <p>Para urgencias o proyectos con fecha límite, el teléfono es la forma más rápida.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+34643795099" className="btn btn-secondary btn-lg"><i className="fa-solid fa-phone"></i> +34 643 79 50 99</a>
            <a href="https://wa.me/34643795099" className="btn btn-ghost btn-lg"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
