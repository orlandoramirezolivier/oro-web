import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CATS = [
  { id: 'reformas', icon: 'fa-building', label: 'Reformas' },
  { id: 'banos-cocinas', icon: 'fa-shower', label: 'Baños y Cocinas' },
  { id: 'acabados', icon: 'fa-paint-roller', label: 'Acabados' },
  { id: 'recursos', icon: 'fa-download', label: 'Recursos Gratis' },
  { id: 'urgencias', icon: 'fa-bolt', label: 'Urgencias' },
  { id: 'especialista', icon: 'fa-headset', label: 'Especialistas' },
  { id: 'articulos', icon: 'fa-newspaper', label: 'Artículos' },
]

export default function TiendaPage() {
  const [active, setActive] = useState('reformas')

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      CATS.forEach(({ id }) => {
        const s = document.getElementById(id)
        if (s && window.scrollY >= s.offsetTop - 120) current = id
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* TIENDA HERO */}
      <div className="tienda-hero">
        <div className="container">
          <div className="tienda-hero-inner">
            <div>
              <h1>Tienda<br />Oro</h1>
            </div>
            <div className="tienda-hero-links">
              <Link to="/presupuesto" className="tienda-hero-link"><i className="fa-solid fa-file-invoice"></i> Solicitar presupuesto</Link>
              <Link to="/contacto" className="tienda-hero-link"><i className="fa-solid fa-comments"></i> Habla con un especialista</Link>
              <a href="https://wa.me/34643795099" className="tienda-hero-link"><i className="fa-brands fa-whatsapp"></i> Escríbenos por WhatsApp</a>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY NAV */}
      <div className="cat-nav">
        <div className="cat-nav-inner">
          {CATS.map(({ id, icon, label }) => (
            <a key={id} href={`#${id}`} className={`cat-link${active === id ? ' active' : ''}`}>
              <i className={`fa-solid ${icon}`}></i>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* SECCIÓN 1: REFORMAS */}
      <section className="tienda-section" id="reformas">
        <div className="container">
          <div className="tienda-sh">
            <h2>Lo más solicitado.</h2>
            <span className="sub">Nuestros servicios principales.</span>
          </div>
          <div className="cards-1-2">
            <Link to="/presupuesto" className="store-hero-card">
              <img className="store-hero-card-img" src="/img/Constructores-que-valen-oro.-3.png" alt="Reforma Integral" />
              <div className="store-hero-card-content">
                <span className="tag">Servicio estrella</span>
                <h3>Reforma Integral</h3>
                <p>Transformación completa de tu vivienda o local. Planificación, materiales y supervisión. Sin sorpresas.</p>
                <div className="store-cta"><i className="fa-solid fa-file-invoice"></i> Solicitar presupuesto</div>
              </div>
            </Link>
            <div className="cards-1-2-right">
              <Link to="/presupuesto" className="service-tile" style={{ flex: 1 }}>
                <span className="tag">Popular</span>
                <h3>Reforma de Baño</h3>
                <p>Alicatado, fontanería, sanitarios y acabados. El baño que siempre quisiste.</p>
                <div className="price">Desde 1.500€</div>
                <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
              </Link>
              <Link to="/presupuesto" className="service-tile" style={{ flex: 1 }}>
                <span className="tag">Popular</span>
                <h3>Reforma de Local</h3>
                <p>Reforma tu negocio con los plazos que necesitas para abrir.</p>
                <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: BAÑOS Y COCINAS */}
      <section className="tienda-section" id="banos-cocinas">
        <div className="container">
          <div className="tienda-sh">
            <h2>Baños y Cocinas.</h2>
            <span className="sub">Las estancias más exigentes.</span>
          </div>
          <div className="scroll-row">
            <Link to="/presupuesto" className="service-tile">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}><i className="fa-solid fa-shower" style={{ color: 'var(--ink)' }}></i></div>
              <span className="tag">Baño</span>
              <h3>Reforma de Baño Completa</h3>
              <p>Demolición, impermeabilización, alicatado e instalación de sanitarios.</p>
              <div className="price">Desde 1.500€</div>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/presupuesto" className="service-tile">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}><i className="fa-solid fa-utensils" style={{ color: 'var(--ink)' }}></i></div>
              <span className="tag">Cocina</span>
              <h3>Reforma de Cocina</h3>
              <p>Muebles, encimeras, electrodomésticos, fontanería y acabados.</p>
              <div className="price">Desde 2.000€</div>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/presupuesto" className="service-tile">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}><i className="fa-solid fa-droplet" style={{ color: 'var(--ink)' }}></i></div>
              <span className="tag">Fontanería</span>
              <h3>Fontanería e Instalaciones</h3>
              <p>Tuberías, calentadores, duchas y reparaciones del sistema hidráulico.</p>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/presupuesto" className="service-tile">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}><i className="fa-solid fa-table-cells-large" style={{ color: 'var(--ink)' }}></i></div>
              <span className="tag">Alicatado</span>
              <h3>Cerámica y Alicatado</h3>
              <p>Colocación de cerámica y porcelánico en baños, cocinas y suelos.</p>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: ACABADOS */}
      <section className="tienda-section" id="acabados">
        <div className="container">
          <div className="tienda-sh">
            <h2>Acabados.</h2>
            <span className="sub">Donde está la diferencia.</span>
          </div>
          <div className="cards-3">
            <Link to="/presupuesto" className="service-tile dark">
              <div style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--oro)' }}><i className="fa-solid fa-paint-roller"></i></div>
              <span className="tag">Pintura</span>
              <h3>Pintura Lavable</h3>
              <p>Preparación, imprimación y aplicación en paredes y techos. Cualquier color.</p>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/presupuesto" className="service-tile">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}><i className="fa-solid fa-rug" style={{ color: 'var(--ink)' }}></i></div>
              <span className="tag">Suelos</span>
              <h3>Tarima y Suelos</h3>
              <p>Laminados, vinílicos o madera natural. Preparación y colocación con garantía.</p>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/presupuesto" className="service-tile">
              <div style={{ fontSize: '32px', marginBottom: '16px' }}><i className="fa-solid fa-grid-2" style={{ color: 'var(--ink)' }}></i></div>
              <span className="tag">Techos</span>
              <h3>Falsos Techos y Pladur</h3>
              <p>Techos continuos, registrables y de escayola. Iluminación integrada.</p>
              <div className="tile-cta">Solicitar <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: RECURSOS GRATUITOS */}
      <section className="tienda-section" id="recursos" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="tienda-sh">
            <h2>Recursos gratuitos.</h2>
            <span className="sub">Herramientas para tu reforma.</span>
          </div>
          <div className="cards-3-lead">
            <div className="recurso-card">
              <div className="recurso-icon" style={{ background: 'var(--ink)', color: 'var(--oro)' }}><i className="fa-solid fa-list-check"></i></div>
              <span className="badge badge-gratis"><i className="fa-solid fa-download"></i> Gratis</span>
              <h3>Checklist de Reforma</h3>
              <p>Lista completa de todo lo que debes verificar antes, durante y después de una reforma. Evita los errores más comunes.</p>
              <Link to="/contacto" className="dl-btn dl-btn-primary"><i className="fa-solid fa-download"></i> Descargar gratis</Link>
            </div>
            <div className="recurso-card">
              <div className="recurso-icon" style={{ background: 'var(--oro-soft)', color: 'var(--ink)' }}><i className="fa-solid fa-chart-bar"></i></div>
              <span className="badge badge-gratis"><i className="fa-solid fa-download"></i> Gratis</span>
              <h3>Guía de Precios de Reforma</h3>
              <p>Precios de referencia actualizados para los trabajos más comunes en Madrid. Saber cuánto cuesta antes de pedir presupuesto.</p>
              <Link to="/contacto" className="dl-btn dl-btn-primary"><i className="fa-solid fa-download"></i> Descargar gratis</Link>
            </div>
            <div className="recurso-card">
              <div className="recurso-icon" style={{ background: 'var(--ink-7)', color: 'var(--ink)' }}><i className="fa-solid fa-file-invoice"></i></div>
              <span className="badge badge-gratis"><i className="fa-solid fa-download"></i> Gratis</span>
              <h3>Plantilla para Comparar Presupuestos</h3>
              <p>Compara presupuestos de diferentes empresas con criterios objetivos. Toma la decisión correcta sin dejarte llevar solo por el precio.</p>
              <Link to="/contacto" className="dl-btn dl-btn-primary"><i className="fa-solid fa-download"></i> Descargar gratis</Link>
            </div>
            <div className="recurso-card">
              <div className="recurso-icon" style={{ background: 'var(--ink-7)', color: 'var(--ink)' }}><i className="fa-solid fa-triangle-exclamation"></i></div>
              <span className="badge badge-nuevo"><i className="fa-solid fa-star"></i> Nuevo</span>
              <h3>Guía: Las 10 Estafas Más Comunes en Reformas</h3>
              <p>Todo lo que deberías saber antes de contratar a cualquier empresa de reformas. Señales de alerta, garantías mínimas y cómo protegerte.</p>
              <Link to="/contacto" className="dl-btn dl-btn-primary"><i className="fa-solid fa-download"></i> Descargar gratis</Link>
            </div>
            <div className="recurso-card">
              <div className="recurso-icon" style={{ background: 'var(--ink-7)', color: 'var(--ink)' }}><i className="fa-solid fa-calendar-check"></i></div>
              <span className="badge badge-pronto">Próximamente</span>
              <h3>Planificador de Obra</h3>
              <p>Herramienta para planificar y hacer seguimiento de todas las fases de tu reforma. Semana a semana, hito por hito.</p>
              <button className="dl-btn dl-btn-disabled" disabled><i className="fa-solid fa-lock"></i> Próximamente</button>
            </div>
            <div className="recurso-card">
              <div className="recurso-icon" style={{ background: 'var(--ink-7)', color: 'var(--ink)' }}><i className="fa-solid fa-book-open"></i></div>
              <span className="badge badge-pronto">Próximamente</span>
              <h3>Manual del Propietario</h3>
              <p>Guía completa de mantenimiento preventivo para tu hogar. Lo que hacer cada 6 meses para evitar grandes reformas.</p>
              <button className="dl-btn dl-btn-disabled" disabled><i className="fa-solid fa-lock"></i> Próximamente</button>
            </div>
          </div>

          {/* LEAD MAGNET CTA */}
          <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-lg)', padding: '32px 40px', marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.8px', textTransform: 'uppercase', color: 'var(--oro)', marginBottom: '8px' }}>Newsletter</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--white)', marginBottom: '6px' }}>¿Quieres recibir recursos antes que nadie?</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.55)' }}>Guías, herramientas y consejos para tu reforma. Sin spam, sin publicidad. Solo valor.</p>
            </div>
            <Link to="/contacto" className="btn btn-primary" style={{ flexShrink: 0 }}><i className="fa-solid fa-envelope"></i> Apuntarme</Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: URGENCIAS */}
      <section className="tienda-section" id="urgencias">
        <div className="container">
          <div className="tienda-sh">
            <h2>Urgencias.</h2>
            <span className="sub">Respuesta en el día.</span>
          </div>
          <div className="cards-1-2">
            <a href="tel:+34643795099" className="store-hero-card" style={{ background: 'var(--ink)', minHeight: '280px' }}>
              <div className="store-hero-card-content">
                <span className="tag">Urgente</span>
                <h3>¿Tienes una fuga o avería ahora mismo?</h3>
                <p>Llamadas urgentes atendidas en el día. Fontanería y reparaciones de emergencia en Madrid.</p>
                <div className="store-cta" style={{ fontSize: '18px', padding: '12px 24px' }}><i className="fa-solid fa-phone"></i> +34 643 79 50 99</div>
              </div>
            </a>
            <div className="cards-1-2-right">
              <Link to="/presupuesto" className="service-tile dark" style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-droplet-slash" style={{ fontSize: '24px', color: 'var(--oro)' }}></i>
                </div>
                <span className="tag">Urgente</span>
                <h3>Reparación de Fuga</h3>
                <p>Detección y reparación de fugas en el día.</p>
                <div className="price">Desde 600€</div>
                <div className="tile-cta">Llamar ahora <i className="fa-solid fa-arrow-right"></i></div>
              </Link>
              <Link to="/presupuesto" className="service-tile" style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-bolt" style={{ fontSize: '24px', color: 'var(--ink)' }}></i>
                </div>
                <span className="tag">Urgente</span>
                <h3>Avería Eléctrica</h3>
                <p>Cortocircuitos, averías en el cuadro y emergencias eléctricas.</p>
                <div className="tile-cta">Llamar ahora <i className="fa-solid fa-arrow-right"></i></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: DIFERENCIA */}
      <section className="tienda-section" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="tienda-sh">
            <h2>Oro Constructores marca la diferencia.</h2>
            <span className="sub">Más razones para confiar.</span>
          </div>
          <div className="cards-4">
            <div className="benefit-tile">
              <div className="bi"><i className="fa-solid fa-file-contract"></i></div>
              <h4>Presupuesto cerrado</h4>
              <p>El precio que acordamos es el precio final. Ningún cargo adicional no previsto.</p>
            </div>
            <div className="benefit-tile">
              <div className="bi"><i className="fa-solid fa-calendar-check"></i></div>
              <h4>Pago por fases</h4>
              <p>No pedimos el total por adelantado. El pago va alineado con el avance real de la obra.</p>
            </div>
            <div className="benefit-tile">
              <div className="bi"><i className="fa-solid fa-clock"></i></div>
              <h4>Respuesta en 48h</h4>
              <p>Presupuesto detallado en menos de 48 horas desde que nos contactas. Sin esperas.</p>
            </div>
            <div className="benefit-tile">
              <div className="bi"><i className="fa-solid fa-rotate-left"></i></div>
              <h4>Garantía de trabajo</h4>
              <p>Si algo no cumple el estándar, lo corregimos. Sin costes adicionales ni discusiones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: ESPECIALISTA */}
      <section className="tienda-section" id="especialista">
        <div className="container">
          <div className="tienda-sh">
            <h2>Habla con nosotros.</h2>
            <span className="sub">Cuando, cómo y donde quieras.</span>
          </div>
          <div className="grid-2">
            <a href="tel:+34643795099" className="specialist-card">
              <div className="specialist-icon"><i className="fa-solid fa-hard-hat"></i></div>
              <div>
                <div className="cat">Obra y Presupuestos</div>
                <h3>Habla directamente con el equipo de obra.</h3>
                <p>Para presupuestos, urgencias y consultas sobre proyectos en curso.</p>
                <div className="phone"><i className="fa-solid fa-phone"></i> +34 643 79 50 99</div>
              </div>
            </a>
            <a href="tel:+34643795099" className="specialist-card">
              <div className="specialist-icon"><i className="fa-solid fa-comments"></i></div>
              <div>
                <div className="cat">Consultas Generales</div>
                <h3>¿Dudas sobre qué servicio necesitas?</h3>
                <p>Te orientamos antes de solicitar presupuesto. Sin compromiso.</p>
                <div className="phone"><i className="fa-solid fa-phone"></i> +34 643 79 50 99</div>
              </div>
            </a>
          </div>
          <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <a href="https://wa.me/34643795099" className="benefit-tile" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
              <div style={{ width: '52px', height: '52px', background: '#25D366', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'white', flexShrink: 0 }}>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', color: 'var(--ink)', marginBottom: '4px' }}>WhatsApp</h4>
                <p style={{ fontSize: '13px', color: 'var(--ink-3)' }}>Envíanos fotos de tu espacio. Respondemos en el día.</p>
              </div>
            </a>
            <a href="mailto:info.oroconstructores@gmail.com" className="benefit-tile" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
              <div style={{ width: '52px', height: '52px', background: 'var(--oro)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: 'var(--ink)', flexShrink: 0 }}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', color: 'var(--ink)', marginBottom: '4px' }}>Email</h4>
                <p style={{ fontSize: '13px', color: 'var(--ink-3)' }}>info.oroconstructores@gmail.com — Respuesta en 24h</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: ARTÍCULOS */}
      <section className="tienda-section" id="articulos" style={{ background: 'var(--paper)' }}>
        <div className="container">
          <div className="tienda-sh">
            <h2>Artículos.</h2>
            <span className="sub">Todo lo que deberías saber antes de reformar.</span>
          </div>
          <div className="cards-3">
            <Link to="/soluciones" className="articulo-card">
              <img className="articulo-img" src="/img/Constructores-que-valen-oro.png" alt="Guía de reformas" />
              <div className="articulo-body">
                <div className="cat">Reformas</div>
                <h4>Cuánto cuesta una reforma integral en Madrid en 2026</h4>
                <p>Precios reales, factores que los condicionan y cómo evitar que se disparen.</p>
                <div className="read-link">Ver servicios <i className="fa-solid fa-arrow-right"></i></div>
              </div>
            </Link>
            <Link to="/soluciones" className="articulo-card">
              <img className="articulo-img" src="/img/Whisk_d81672aa580bdb28dd14897f62ce5860eg.png" alt="Reforma de cocina" />
              <div className="articulo-body">
                <div className="cat">Cocinas</div>
                <h4>Reforma de cocina: por dónde empezar y qué no olvidar</h4>
                <p>Pasos, materiales y decisiones clave antes de empezar a picar.</p>
                <div className="read-link">Ver servicios <i className="fa-solid fa-arrow-right"></i></div>
              </div>
            </Link>
            <Link to="/soluciones" className="articulo-card">
              <img className="articulo-img" src="/img/Constructores-que-valen-oro.-3.png" alt="Fontanería" />
              <div className="articulo-body">
                <div className="cat">Fontanería</div>
                <h4>Fuga de agua: cómo detectarla y qué hacer antes de llamar</h4>
                <p>Señales de alerta, pasos de emergencia y cuándo es necesario un profesional.</p>
                <div className="read-link">Ver servicio urgente <i className="fa-solid fa-arrow-right"></i></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="section-sm" style={{ borderTop: '1px solid var(--ink-6)' }}>
        <div className="container">
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px' }}>Accesos rápidos</div>
          <div className="quick-links">
            <Link to="/presupuesto" className="quick-link">Solicitar presupuesto</Link>
            <Link to="/contacto" className="quick-link">Hablar con nosotros</Link>
            <Link to="/soluciones" className="quick-link">Ver todos los servicios</Link>
            <Link to="/sobre-nosotros" className="quick-link">Nuestro equipo</Link>
            <Link to="/nuestra-historia" className="quick-link">Nuestra historia</Link>
            <Link to="/nuestra-cultura" className="quick-link">Nuestra cultura</Link>
            <a href="tel:+34643795099" className="quick-link">Llamar — Obra</a>
            <a href="tel:+34643795099" className="quick-link">Llamar — Consultas</a>
            <a href="https://wa.me/34643795099" className="quick-link">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
