import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-home">
        <div className="hero-home-text">
          <div className="hero-label">Madrid · Reformas y Construcción</div>
          <h1 style={{ fontSize: 'clamp(32px,4.5vw,60px)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.05, marginBottom: '20px', maxWidth: '540px' }}>
            Construcción y reformas <span style={{ color: 'var(--oro)' }}>accesibles,<br />eficientes</span> y confiables.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,.65)', maxWidth: '460px', lineHeight: 1.7, marginBottom: '32px' }}>
            Maestros con +30 años de oficio. Sin sorpresas. Sin letra pequeña.<br />Tu tranquilidad es el plan.
          </p>
          <div className="hero-actions">
            <Link to="/presupuesto" className="btn btn-primary btn-lg">
              <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis
            </Link>
            <Link to="/soluciones" className="btn btn-ghost-inv btn-lg">
              Ver servicios
            </Link>
          </div>
          <div className="trust-row" style={{ marginTop: '32px' }}>
            <span className="trust-badge"><i className="fa-solid fa-shield-check"></i> Sin sorpresas</span>
            <span className="trust-badge"><i className="fa-solid fa-medal"></i> 30+ años de oficio</span>
            <span className="trust-badge"><i className="fa-solid fa-location-dot"></i> Madrid</span>
          </div>
        </div>
        <div className="hero-home-img">
          <img src="/img/Constructores-que-valen-oro.png" alt="Profesional de Oro Constructores pintando" loading="eager" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-num">30+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-label">Sin sorpresas ni letra pequeña</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5</span>
              <span className="stat-label">Especialidades del equipo</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">Madrid</span>
              <span className="stat-label">Zona de servicio principal</span>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICIOS DESTACADOS */}
      <section className="section zone-bg">
        <div className="container">
          <div className="section-label">Lo que hacemos</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="h2" style={{ marginBottom: 0, maxWidth: '440px' }}>Hacemos realidad lo que tienes en mente.</h2>
            <Link to="/soluciones" className="btn btn-ghost btn-sm">Ver todos los servicios <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="grid-3">
            <div className="service-card">
              <img className="service-card-img" src="/img/Constructores-que-valen-oro.-3.png" alt="Reformas Integrales" />
              <div className="service-card-body">
                <h3>Reformas Integrales</h3>
                <p>Gestión completa de la transformación de tu vivienda o local comercial. Planificación estratégica, materiales, mano de obra y supervisión constante.</p>
                <span className="service-tag">Viviendas</span>
                <span className="service-tag">Locales</span>
                <span className="service-tag">Oficinas</span>
              </div>
            </div>
            <div className="service-card">
              <img className="service-card-img" src="/img/Whisk_d81672aa580bdb28dd14897f62ce5860eg.png" alt="Cocinas y Baños" />
              <div className="service-card-body">
                <h3>Cocinas y Baños</h3>
                <p>Trabajos de precisión en las estancias más exigentes. Fontanería, alicatado, instalación de muebles y acabados impecables.</p>
                <span className="service-tag">Fontanería</span>
                <span className="service-tag">Alicatado</span>
                <span className="service-tag">Instalaciones</span>
              </div>
            </div>
            <div className="service-card">
              <img className="service-card-img" src="/img/Constructores-que-valen-oro.png" alt="Acabados y Detalles" />
              <div className="service-card-body">
                <h3>Acabados y Detalles</h3>
                <p>Alisados, pintura lavable, pladur, revestimientos y tarima. La diferencia está en los detalles — y nosotros no los descuidamos.</p>
                <span className="service-tag">Pintura</span>
                <span className="service-tag">Pladur</span>
                <span className="service-tag">Tarima</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <div className="section-label">Por qué elegirnos</div>
              <h2 className="h2">Maestros reales.<br />Promesas que se cumplen.</h2>
              <p className="lead">No somos una constructora genérica. Somos un equipo de profesionales con décadas de oficio, liderado por un maestro albañil que ha construido en Venezuela, Ecuador y España.</p>
              <div style={{ marginTop: '32px' }}>
                <div className="pillar">
                  <div className="pillar-icon"><i className="fa-solid fa-ban"></i></div>
                  <div className="pillar-text">
                    <h4>Sin sorpresas económicas</h4>
                    <p>Presupuesto cerrado desde el primer día. Lo que acordamos, es lo que pagas. Punto.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon"><i className="fa-solid fa-eye"></i></div>
                  <div className="pillar-text">
                    <h4>Supervisión constante</h4>
                    <p>Seguimiento diario de cada fase de la obra. Siempre disponibles para resolver tus dudas.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon"><i className="fa-solid fa-hard-hat"></i></div>
                  <div className="pillar-text">
                    <h4>Maestros, no mano de obra</h4>
                    <p>Cada miembro del equipo es un profesional cualificado con años de experiencia real en obra.</p>
                  </div>
                </div>
                <div className="pillar">
                  <div className="pillar-icon"><i className="fa-solid fa-rotate-left"></i></div>
                  <div className="pillar-text">
                    <h4>Si no está bien, lo rehacemos</h4>
                    <p>Responsabilidad total. Si algo no cumple el estándar, lo corregimos sin coste adicional.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="split-img">
              <img src="/img/5-1.png" alt="Maestro albañil Oro Constructores" />
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-label">El proceso</div>
          <h2 className="h2 text-center" style={{ marginBottom: '48px' }}>Tres pasos. Cero estrés.</h2>
          <div className="grid-3">
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h4>Visita y presupuesto</h4>
                <p>Visitamos tu espacio, entendemos qué necesitas y te entregamos un presupuesto detallado y cerrado. Sin costes ocultos.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h4>Ejecución con control</h4>
                <p>El equipo trabaja con supervisión diaria. Te informamos de cada avance. Tú puedes verlo en tiempo real.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h4>Entrega impecable</h4>
                <p>Revisamos cada detalle antes de entregarte las llaves. Si algo no está al nivel, lo corregimos antes de cerrar la obra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section">
        <div className="container">
          <div className="section-label">Clientes</div>
          <h2 className="h2" style={{ marginBottom: '40px' }}>Lo que dicen quienes<br />ya confiaron en nosotros.</h2>
          <div className="grid-3">
            <div className="testimonio-card">
              <div className="testimonio-stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonio-quote">"Reforma integral del piso completo. Muy profesionales, cumplieron el plazo y el presupuesto al céntimo. El resultado superó nuestras expectativas."</p>
              <div className="testimonio-author">
                <div className="testimonio-avatar">H</div>
                <div>
                  <div className="testimonio-name">Hilaria C. &amp; Antonio L.</div>
                  <div className="testimonio-ref">Reforma Integral · Madrid</div>
                </div>
              </div>
            </div>
            <div className="testimonio-card">
              <div className="testimonio-stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonio-quote">"Contratamos a Oro Constructores para la reforma de nuestro local. Muy buena comunicación y trabajo impecable. Los recomendaría sin dudarlo."</p>
              <div className="testimonio-author">
                <div className="testimonio-avatar">M</div>
                <div>
                  <div className="testimonio-name">MAXICYBERNOVA, SL</div>
                  <div className="testimonio-ref">Reforma Local Comercial · Madrid</div>
                </div>
              </div>
            </div>
            <div className="testimonio-card">
              <div className="testimonio-stars">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonio-quote">"Reparación de filtración de ducha resuelta en tiempo récord. Vinieron el mismo día, diagnosticaron el problema y lo solucionaron correctamente."</p>
              <div className="testimonio-author">
                <div className="testimonio-avatar">I</div>
                <div>
                  <div className="testimonio-name">Isidoro R. C.</div>
                  <div className="testimonio-ref">Reparación Urgente · Madrid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="section-sm">
        <div className="container">
          <div className="quote-banner">
            <div className="quote-banner-text">
              <h3>¿Tienes un proyecto en mente?</h3>
              <p>Te hacemos un presupuesto gratuito, detallado y sin compromiso en menos de 48 horas.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link to="/presupuesto" className="btn btn-secondary">
                <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto
              </Link>
              <a href="tel:+34643795099" className="btn btn-ghost">
                <i className="fa-solid fa-phone"></i> +34 643 79 50 99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE ORLANDO */}
      <section className="section section-paper">
        <div className="container">
          <div className="split" style={{ gridTemplateColumns: '1fr 1.2fr' }}>
            <div style={{ order: 2 }} className="split-img">
              <img src="/img/Constructores-que-valen-oro.-3.png" alt="Equipo Oro Constructores en obra" />
            </div>
            <div style={{ order: 1 }}>
              <div className="section-label">Nuestra historia</div>
              <h2 className="h2">"Construí esta empresa para que el oficio de mi padre tuviera el reconocimiento que merece."</h2>
              <p className="lead">Orlando Ramírez Sánchez lleva más de 30 años como maestro albañil. Trabajó en Venezuela, Ecuador y España construyendo con sus manos lo que otros diseñan en papel.</p>
              <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '28px' }}>Su hijo Orlando creó Oro Constructores para darle a ese oficio la estructura, la tecnología y el reconocimiento que siempre mereció. El resultado: una empresa donde la experiencia real manda.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/nuestra-historia" className="btn btn-secondary">Conocer nuestra historia</Link>
                <Link to="/sobre-nosotros" className="btn btn-ghost">El equipo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="container">
          <h2>Tu reforma empieza con una llamada.</h2>
          <p>Sin tecnicismos, sin rodeos. Te explicamos todo y te damos un presupuesto real.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis
            </Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-envelope"></i> Escribirnos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
