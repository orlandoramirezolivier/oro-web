import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PresupuestoPage() {
  const [step, setStep] = useState(1)
  const [m2, setM2] = useState(80)
  const [submitted, setSubmitted] = useState(false)

  const goToStep = (s) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const submitForm = () => {
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const dotClass = (n) => `step-dot${step === n ? ' active' : ''}${n < step ? ' done' : ''}`

  return (
    <>
      {/* HERO */}
      <section className="hero-mini" style={{ padding: '56px 0' }}>
        <div className="container">
          <div className="hero-label"><i className="fa-solid fa-file-invoice"></i> Presupuesto gratuito</div>
          <h1>Tu presupuesto,<br /><span style={{ color: 'var(--oro)' }}>sin sorpresas.</span></h1>
          <p>Cerrado desde el primer día. Te respondemos en menos de 48 horas. Sin coste, sin compromiso.</p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="section">
        <div className="container">
          <div className="presup-layout">

            {/* FORM */}
            <div>
              {!submitted ? (
                <div className="presup-form">
                  {/* PASO INDICADOR */}
                  <div className="step-indicator">
                    <div className={dotClass(1)}>
                      <div className="step-circle">1</div>
                      <span className="step-label-text">Proyecto</span>
                    </div>
                    <div className="step-line"></div>
                    <div className={dotClass(2)}>
                      <div className="step-circle">2</div>
                      <span className="step-label-text">Detalles</span>
                    </div>
                    <div className="step-line"></div>
                    <div className={dotClass(3)}>
                      <div className="step-circle">3</div>
                      <span className="step-label-text">Contacto</span>
                    </div>
                  </div>

                  {/* PASO 1 */}
                  <div style={{ display: step === 1 ? 'block' : 'none' }}>
                    <div className="form-section-title">¿Qué tipo de trabajo necesitas?</div>
                    <div className="checkbox-grid">
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="reforma-integral" /> Reforma Integral</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="bano" /> Reforma de Baño</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="cocina" /> Reforma de Cocina</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="pintura" /> Pintura y Acabados</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="fontaneria" /> Fontanería / Fuga</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="electricidad" /> Electricidad</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="alicatado" /> Cerámica / Alicatado</label>
                      <label className="checkbox-item"><input type="checkbox" name="servicio" value="local" /> Local Comercial</label>
                    </div>

                    <div className="form-group" style={{ marginTop: '24px' }}>
                      <label htmlFor="tipo-inmueble">Tipo de inmueble</label>
                      <select id="tipo-inmueble" name="tipo-inmueble" defaultValue="">
                        <option value="" disabled>Selecciona...</option>
                        <option>Piso / Apartamento</option>
                        <option>Casa / Chalet</option>
                        <option>Local comercial</option>
                        <option>Oficina</option>
                        <option>Otro</option>
                      </select>
                    </div>

                    <div className="range-group">
                      <label>Superficie aproximada</label>
                      <div className="range-display">
                        <span className="val">{m2}</span>
                        <span className="unit">m²</span>
                      </div>
                      <input type="range" id="superficie" min="10" max="400" value={m2} step="5"
                        onChange={(e) => setM2(e.target.value)} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--ink-4)', marginTop: '4px' }}>
                        <span>10 m²</span><span>400 m²</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                      <button className="btn btn-secondary" onClick={() => goToStep(2)}>
                        Siguiente <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>

                  {/* PASO 2 */}
                  <div style={{ display: step === 2 ? 'block' : 'none' }}>
                    <div className="form-section-title">Cuéntanos más sobre tu proyecto</div>

                    <div className="form-group">
                      <label htmlFor="descripcion">Descripción del trabajo</label>
                      <textarea id="descripcion" name="descripcion" style={{ minHeight: '140px' }}
                        placeholder="Describe qué quieres hacer. No hace falta ser técnico — cuéntanoslo como se lo contarías a un amigo..."></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="zona">Zona / Barrio en Madrid</label>
                      <input type="text" id="zona" name="zona" placeholder="Ej: Carabanchel, Vallecas, Chamberí..." />
                    </div>

                    <div className="form-group">
                      <label>¿Cuándo te gustaría empezar?</label>
                      <div className="urgency-grid">
                        <label className="urgency-option"><input type="radio" name="inicio" value="urgente" /><i className="fa-solid fa-bolt"></i> Lo antes posible</label>
                        <label className="urgency-option"><input type="radio" name="inicio" value="1mes" /><i className="fa-solid fa-calendar"></i> En 1 mes</label>
                        <label className="urgency-option"><input type="radio" name="inicio" value="3meses" /><i className="fa-solid fa-calendar-days"></i> En 2–3 meses</label>
                        <label className="urgency-option"><input type="radio" name="inicio" value="noDecidido" /><i className="fa-solid fa-circle-question"></i> Aún no lo sé</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="presupuesto-rango">Presupuesto orientativo (opcional)</label>
                      <select id="presupuesto-rango" name="presupuesto-rango" defaultValue="">
                        <option value="">Prefiero no decirlo por ahora</option>
                        <option>Menos de 1.000€</option>
                        <option>1.000€ – 3.000€</option>
                        <option>3.000€ – 8.000€</option>
                        <option>8.000€ – 20.000€</option>
                        <option>Más de 20.000€</option>
                      </select>
                      <p className="form-note">Esta información nos ayuda a ajustar la propuesta a tu situación real.</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', gap: '12px' }}>
                      <button className="btn btn-ghost" onClick={() => goToStep(1)}>
                        <i className="fa-solid fa-arrow-left"></i> Atrás
                      </button>
                      <button className="btn btn-secondary" onClick={() => goToStep(3)}>
                        Siguiente <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>

                  {/* PASO 3 */}
                  <div style={{ display: step === 3 ? 'block' : 'none' }}>
                    <div className="form-section-title">¿Cómo te contactamos?</div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" name="apellidos" placeholder="Tus apellidos" />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="tel">Teléfono <span style={{ color: 'var(--danger)' }}>*</span></label>
                        <input type="tel" id="tel" name="tel" placeholder="+34 600 000 000" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="tu@email.com" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Prefiero que me contacten por</label>
                      <div className="urgency-grid">
                        <label className="urgency-option"><input type="radio" name="canal" value="telefono" /><i className="fa-solid fa-phone"></i> Teléfono</label>
                        <label className="urgency-option"><input type="radio" name="canal" value="whatsapp" /><i className="fa-brands fa-whatsapp"></i> WhatsApp</label>
                        <label className="urgency-option"><input type="radio" name="canal" value="email" /><i className="fa-solid fa-envelope"></i> Email</label>
                        <label className="urgency-option"><input type="radio" name="canal" value="indiferente" /><i className="fa-solid fa-check"></i> Me da igual</label>
                      </div>
                    </div>

                    <div className="privacy-note">
                      <i className="fa-solid fa-lock"></i>
                      Tus datos solo se usarán para contactarte y preparar el presupuesto. No compartimos tu información con terceros ni enviamos publicidad.
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                      <button className="btn btn-ghost" onClick={() => goToStep(2)}>
                        <i className="fa-solid fa-arrow-left"></i> Atrás
                      </button>
                      <button className="btn btn-primary btn-lg" onClick={submitForm} style={{ flex: 1, justifyContent: 'center' }}>
                        <i className="fa-solid fa-paper-plane"></i> Solicitar presupuesto gratis
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* ÉXITO */
                <div className="presup-form" style={{ textAlign: 'center' }}>
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{ width: '72px', height: '72px', background: 'var(--ink)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--oro)', fontSize: '30px' }}>
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>Solicitud recibida.</h2>
                    <p style={{ fontSize: '16px', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 32px' }}>
                      Te contactaremos en menos de 48 horas para organizar la visita y preparar tu presupuesto. Gracias por confiar en Oro Constructores.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <a href="tel:+34643795099" className="btn btn-secondary"><i className="fa-solid fa-phone"></i> Llamar ahora</a>
                      <Link to="/" className="btn btn-ghost">Volver al inicio</Link>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--ink-4)', marginTop: '24px' }}>¿Tienes urgencia? Llámanos directamente al <strong>+34 643 79 50 99</strong></p>
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="presup-sidebar">
              <div className="sidebar-card" style={{ background: 'var(--ink)', color: 'var(--white)', border: 'none' }}>
                <div style={{ color: 'var(--oro)', fontSize: '11px', fontWeight: 700, letterSpacing: '.8px', textTransform: 'uppercase', marginBottom: '12px' }}>Nuestra promesa</div>
                <h4 style={{ color: 'var(--white)', fontSize: '18px' }}>Tu presupuesto, cerrado desde el primer día.</h4>
                <div style={{ marginTop: '16px' }}>
                  <div className="sidebar-feature" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
                    <i className="fa-solid fa-ban" style={{ color: 'var(--oro)' }}></i>
                    <span style={{ color: 'rgba(255,255,255,.7)', fontSize: '13px' }}>Sin sorpresas ni cargos adicionales</span>
                  </div>
                  <div className="sidebar-feature" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
                    <i className="fa-solid fa-clock" style={{ color: 'var(--oro)' }}></i>
                    <span style={{ color: 'rgba(255,255,255,.7)', fontSize: '13px' }}>Respuesta en menos de 48 horas</span>
                  </div>
                  <div className="sidebar-feature" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
                    <i className="fa-solid fa-gift" style={{ color: 'var(--oro)' }}></i>
                    <span style={{ color: 'rgba(255,255,255,.7)', fontSize: '13px' }}>Visita y presupuesto completamente gratis</span>
                  </div>
                  <div className="sidebar-feature" style={{ borderColor: 'rgba(255,255,255,.08)' }}>
                    <i className="fa-solid fa-rotate-left" style={{ color: 'var(--oro)' }}></i>
                    <span style={{ color: 'rgba(255,255,255,.7)', fontSize: '13px' }}>Si no está bien, lo rehacemos</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h4>¿Prefieres llamar?</h4>
                <a href="tel:+34643795099" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0', textDecoration: 'none' }}>
                  <div style={{ width: '36px', height: '36px', background: 'var(--ink)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oro)', flexShrink: 0 }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--ink-4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px' }}>Presupuestos y consultas</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)' }}>+34 643 79 50 99</div>
                  </div>
                </a>
              </div>

              <div className="sidebar-card">
                <h4>¿Cómo funciona?</h4>
                <div className="sidebar-feature">
                  <i className="fa-solid fa-1"></i>
                  <div><strong style={{ color: 'var(--ink)', fontSize: '13px' }}>Rellenas el formulario</strong><br /><span style={{ fontSize: '12px', color: 'var(--ink-4)' }}>3 minutos, sin registros</span></div>
                </div>
                <div className="sidebar-feature">
                  <i className="fa-solid fa-2"></i>
                  <div><strong style={{ color: 'var(--ink)', fontSize: '13px' }}>Te contactamos</strong><br /><span style={{ fontSize: '12px', color: 'var(--ink-4)' }}>En menos de 48 horas</span></div>
                </div>
                <div className="sidebar-feature">
                  <i className="fa-solid fa-3"></i>
                  <div><strong style={{ color: 'var(--ink)', fontSize: '13px' }}>Visita gratuita</strong><br /><span style={{ fontSize: '12px', color: 'var(--ink-4)' }}>Evaluamos tu espacio in situ</span></div>
                </div>
                <div className="sidebar-feature" style={{ borderBottom: 'none' }}>
                  <i className="fa-solid fa-4"></i>
                  <div><strong style={{ color: 'var(--ink)', fontSize: '13px' }}>Presupuesto cerrado</strong><br /><span style={{ fontSize: '12px', color: 'var(--ink-4)' }}>Detallado y sin letra pequeña</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
