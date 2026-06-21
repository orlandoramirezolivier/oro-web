import { Link } from 'react-router-dom'

const investigaciones = [
  {
    id: 'inv-1',
    slug: '/investigaciones/hosteleria-madrid',
    etiqueta: 'Hostelería',
    titulo: 'El sector hostelero en Madrid',
    subtitulo: '¿Qué necesitan los restaurantes de Madrid de sus proveedores de reforma y mantenimiento?',
    fecha: 'Junio 2026',
    fuentes: '12 fuentes',
    secciones: '10 secciones',
    tags: ['Restaurantes', 'Mantenimiento', 'Reformas'],
  },
  {
    id: 'inv-3',
    slug: '/investigaciones/reforma-bano-madrid',
    etiqueta: 'Baños',
    titulo: 'El cliente que reformó el baño en Madrid',
    subtitulo: 'Miedos, proceso de decisión y lo que el propietario madrileño realmente espera de su reforma de baño.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    secciones: '10 secciones',
    tags: ['Baños', 'Reformas', 'Decisión de compra'],
  },
  {
    id: 'inv-4',
    slug: '/investigaciones/reforma-piso-madrid',
    etiqueta: 'Reformas Integrales',
    titulo: 'La reforma integral del piso en Madrid',
    subtitulo: 'Proceso, decisores, timings y presupuesto real del propietario madrileño que afronta una reforma integral.',
    fecha: 'Junio 2026',
    fuentes: '9 fuentes',
    secciones: '10 secciones',
    tags: ['Reformas Integrales', 'Propietarios', 'Madrid'],
  },
  {
    id: 'inv-5',
    slug: '/investigaciones/humedades-madrid',
    etiqueta: 'Humedades',
    titulo: 'Humedades en viviendas de Madrid',
    subtitulo: 'Causas, incidencia por zona geográfica y expectativas del propietario y administrador de fincas.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    secciones: '10 secciones',
    tags: ['Humedades', 'Patología', 'Comunidades'],
  },
  {
    id: 'inv-6',
    slug: '/investigaciones/reforma-cocina-madrid',
    etiqueta: 'Cocinas',
    titulo: 'El cliente que reformó la cocina en Madrid',
    subtitulo: 'Motivadores, frustraciones frecuentes y cómo el propietario elige a su contratista de cocinas.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    secciones: '10 secciones',
    tags: ['Cocinas', 'Reformas', 'Decisión de compra'],
  },
  {
    id: 'inv-7',
    slug: '/investigaciones/urgencias-hosteleria-madrid',
    etiqueta: 'Hostelería',
    titulo: 'Urgencias en hostelería — impacto y respuesta del mercado',
    subtitulo: 'Cómo afectan las averías al negocio hostelero en Madrid y qué respuesta ofrece el mercado actual de mantenimiento.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    secciones: '10 secciones',
    tags: ['Urgencias', 'Hostelería', 'Mantenimiento'],
  },
  {
    id: 'inv-8',
    slug: '/investigaciones/pintura-madrid',
    etiqueta: 'Pintura',
    titulo: 'El mercado de pintura en Madrid',
    subtitulo: 'Estacionalidad, perfil del cliente y ticket medio del servicio de pintura más contratado en Madrid.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    secciones: '10 secciones',
    tags: ['Pintura', 'Acabados', 'Mercado'],
  },
]

const proximamente = []

export default function InvestigacionesPage() {
  return (
    <>
      {/* HERO */}
      <section className="research-header" style={{ padding: '80px 0 64px' }}>
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-magnifying-glass"></i> Investigaciones de la industria</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.15, marginBottom: '20px', maxWidth: '700px' }}>
            Investigamos el sector<br />para servir mejor.
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.6)', maxWidth: '600px', lineHeight: 1.7 }}>
            Datos reales sobre lo que necesitan los clientes de reforma en Madrid. No suposiciones — investigación de mercado para entender mejor a quien servimos.
          </p>
        </div>
      </section>

      {/* INVESTIGACIONES PUBLICADAS */}
      <section className="section">
        <div className="container">
          <div className="section-label">Publicadas</div>
          <h2 className="h2" style={{ marginBottom: '32px' }}>Investigaciones disponibles</h2>

          {investigaciones.map((inv) => (
            <Link to={inv.slug} key={inv.id} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                border: '1px solid var(--ink-6)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                marginBottom: '16px',
                transition: 'border-color .15s, box-shadow .15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--ink-3)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--ink-6)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                      <span style={{ background: 'var(--ink)', color: 'var(--oro)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px', padding: '4px 10px', borderRadius: '4px' }}>
                        {inv.id}
                      </span>
                      <span style={{ background: 'var(--ink-7)', color: 'var(--ink-3)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px', padding: '4px 10px', borderRadius: '4px' }}>
                        {inv.etiqueta}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--ink)', marginBottom: '8px' }}>{inv.titulo}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '16px', maxWidth: '600px' }}>{inv.subtitulo}</p>
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12px', color: 'var(--ink-4)' }}><i className="fa-solid fa-calendar" style={{ marginRight: '6px' }}></i>{inv.fecha}</span>
                      <span style={{ fontSize: '12px', color: 'var(--ink-4)' }}><i className="fa-solid fa-database" style={{ marginRight: '6px' }}></i>{inv.fuentes}</span>
                      <span style={{ fontSize: '12px', color: 'var(--ink-4)' }}><i className="fa-solid fa-list" style={{ marginRight: '6px' }}></i>{inv.secciones}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ink)', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>
                    Leer investigación <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRÓXIMAMENTE */}
      {proximamente.length > 0 && (
        <section className="section section-paper">
          <div className="container">
            <div className="section-label">En preparación</div>
            <h2 className="h2" style={{ marginBottom: '8px' }}>Próximas investigaciones</h2>
            <p className="lead" style={{ marginBottom: '32px', maxWidth: '600px' }}>Estos son los proyectos de investigación en curso. Se publican cuando los datos son suficientes para ofrecer conclusiones útiles.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {proximamente.map((inv, i) => (
                <div key={i} style={{
                  border: '1px dashed var(--ink-5)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  background: 'var(--paper)',
                }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px', color: 'var(--ink-4)', background: 'var(--ink-7)', padding: '3px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '12px' }}>
                    {inv.vertical}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--ink)', marginBottom: '6px' }}>{inv.titulo}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{inv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* METODOLOGÍA */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <div className="section-label">Metodología</div>
              <h2 className="h2">Datos reales,<br />no suposiciones.</h2>
              <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '16px' }}>
                Cada investigación combina datos estadísticos de fuentes oficiales (INE, Hostelería de España, Cámara de Comercio de Madrid) con observaciones directas del sector.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7 }}>
                Cuando hay entrevistas con clientes o visitas a obra, se indica explícitamente. Lo que no es verificable, no se publica como dato.
              </p>
            </div>
            <div>
              <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--oro)', marginBottom: '20px' }}>Fuentes habituales</h3>
                {[
                  { icon: 'fa-building-columns', label: 'Datos oficiales', desc: 'INE, Ayuntamiento de Madrid, Hostelería de España' },
                  { icon: 'fa-chart-bar', label: 'Datos de sector', desc: 'Cámara de Comercio, gremios de la construcción' },
                  { icon: 'fa-comments', label: 'Campo directo', desc: 'Visitas, entrevistas informales con dueños de locales' },
                  { icon: 'fa-magnifying-glass-chart', label: 'Búsquedas orgánicas', desc: 'Volúmenes de búsqueda reales (Google Trends, SEMrush)' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: i < 3 ? '20px' : 0 }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`fa-solid ${f.icon}`} style={{ color: 'var(--oro)', fontSize: '14px' }}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--white)', marginBottom: '2px' }}>{f.label}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', lineHeight: 1.5 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Necesitas que reformemos tu espacio?</h2>
          <p>La investigación es el punto de partida. El trabajo real está en la obra.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis
            </Link>
            <Link to="/soluciones" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-screwdriver-wrench"></i> Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
