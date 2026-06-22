import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { serviceInvestigations } from '../data/serviceInvestigations'

const ESTUDIOS_MERCADO = [
  {
    id: 'inv-1',
    slug: '/investigaciones/hosteleria-madrid',
    etiqueta: 'Hostelería',
    titulo: 'El sector hostelero en Madrid',
    subtitulo: '¿Qué necesitan los restaurantes de Madrid de sus proveedores de reforma y mantenimiento?',
    fecha: 'Junio 2026',
    fuentes: '12 fuentes',
    icon: 'fa-utensils',
  },
  {
    id: 'inv-3',
    slug: '/investigaciones/reforma-bano-madrid',
    etiqueta: 'Baños',
    titulo: 'El cliente que reformó el baño en Madrid',
    subtitulo: 'Miedos, proceso de decisión y lo que el propietario madrileño realmente espera de su reforma de baño.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    icon: 'fa-shower',
  },
  {
    id: 'inv-4',
    slug: '/investigaciones/reforma-piso-madrid',
    etiqueta: 'Reformas Integrales',
    titulo: 'La reforma integral del piso en Madrid',
    subtitulo: 'Proceso, decisores, timings y presupuesto real del propietario madrileño que afronta una reforma integral.',
    fecha: 'Junio 2026',
    fuentes: '9 fuentes',
    icon: 'fa-building',
  },
  {
    id: 'inv-5',
    slug: '/investigaciones/humedades-madrid',
    etiqueta: 'Humedades',
    titulo: 'Humedades en viviendas de Madrid',
    subtitulo: 'Causas, incidencia por zona geográfica y expectativas del propietario y administrador de fincas.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-droplet',
  },
  {
    id: 'inv-6',
    slug: '/investigaciones/reforma-cocina-madrid',
    etiqueta: 'Cocinas',
    titulo: 'El cliente que reformó la cocina en Madrid',
    subtitulo: 'Motivadores, frustraciones frecuentes y cómo el propietario elige a su contratista de cocinas.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    icon: 'fa-fire-burner',
  },
  {
    id: 'inv-7',
    slug: '/investigaciones/urgencias-hosteleria-madrid',
    etiqueta: 'Urgencias',
    titulo: 'Urgencias en hostelería — impacto y respuesta del mercado',
    subtitulo: 'Cómo afectan las averías al negocio hostelero en Madrid y qué respuesta ofrece el mercado actual de mantenimiento.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    icon: 'fa-triangle-exclamation',
  },
  {
    id: 'inv-8',
    slug: '/investigaciones/pintura-madrid',
    etiqueta: 'Pintura',
    titulo: 'El mercado de pintura en Madrid',
    subtitulo: 'Estacionalidad, perfil del cliente y ticket medio del servicio de pintura más contratado en Madrid.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-paint-roller',
  },
  {
    id: 'inv-9',
    slug: '/investigaciones/albanileria-madrid',
    etiqueta: 'Albañilería',
    titulo: 'El mercado de la albañilería en Madrid',
    subtitulo: 'Demanda, tipología de cliente y posición del oficio base en el ecosistema de reformas madrileño.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    icon: 'fa-trowel-bricks',
  },
  {
    id: 'inv-10',
    slug: '/investigaciones/fontaneria-madrid',
    etiqueta: 'Fontanería',
    titulo: 'Fontanería en Madrid — urgencias y reforma',
    subtitulo: 'El mercado de fontanería residencial y hostelería: por qué el 70% de la demanda es urgente y cómo ganar al cliente que llama primero.',
    fecha: 'Junio 2026',
    fuentes: '8 fuentes',
    icon: 'fa-faucet',
  },
  {
    id: 'inv-11',
    slug: '/investigaciones/electricidad-madrid',
    etiqueta: 'Electricidad',
    titulo: 'El mercado eléctrico residencial en Madrid',
    subtitulo: 'Normativa REBT, urgencias eléctricas y reforma: cómo la certificación diferencia al instalador que cierra más presupuestos.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-bolt',
  },
  {
    id: 'inv-12',
    slug: '/investigaciones/alicatado-ceramica-madrid',
    etiqueta: 'Alicatado',
    titulo: 'Alicatado y cerámica en Madrid',
    subtitulo: 'El oficio invisible que define el resultado de una reforma de baño o cocina — demanda, tendencias y posición de mercado.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-border-all',
  },
  {
    id: 'inv-13',
    slug: '/investigaciones/suelos-tarimas-madrid',
    etiqueta: 'Suelos',
    titulo: 'Suelos y tarimas en Madrid',
    subtitulo: 'El servicio de ciclo más corto en reformas: tendencias de material, perfil de cliente y oportunidades de upsell.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-layer-group',
  },
  {
    id: 'inv-14',
    slug: '/investigaciones/techos-pladur-madrid',
    etiqueta: 'Pladur',
    titulo: 'Techos y pladur en Madrid',
    subtitulo: 'El material transversal de la reforma residencial: demanda de tabiques, falsos techos, insonorización y pladur ignífugo.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-rectangle-list',
  },
  {
    id: 'inv-15',
    slug: '/investigaciones/residuos-obra-madrid',
    etiqueta: 'Residuos',
    titulo: 'Gestión de residuos de obra en Madrid',
    subtitulo: 'El servicio más ignorado del sector y el que más referencias genera: normativa RCDs, limpieza de obra y diferenciación.',
    fecha: 'Junio 2026',
    fuentes: '6 fuentes',
    icon: 'fa-recycle',
  },
  {
    id: 'inv-16',
    slug: '/investigaciones/carpinteria-madrid',
    etiqueta: 'Carpintería',
    titulo: 'Carpintería en Madrid',
    subtitulo: 'Puertas, armarios, montaje flat-pack y carpintería a medida: el mercado del acabado final que define la percepción de calidad.',
    fecha: 'Junio 2026',
    fuentes: '7 fuentes',
    icon: 'fa-hammer',
  },
]

const VERTICAL_ORDER = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O']

export default function InvestigacionesPage() {
  const [filtro, setFiltro] = useState('Todos')

  const verticales = useMemo(() => {
    const map = new Map()
    serviceInvestigations.forEach(s => {
      if (!map.has(s.vertical.codigo)) {
        map.set(s.vertical.codigo, s.vertical)
      }
    })
    return VERTICAL_ORDER.filter(c => map.has(c)).map(c => map.get(c))
  }, [])

  const serviciosFiltrados = useMemo(() => {
    if (filtro === 'Todos') return serviceInvestigations
    return serviceInvestigations.filter(s => s.vertical.nombre === filtro)
  }, [filtro])

  const countByVertical = useMemo(() => {
    const counts = {}
    serviceInvestigations.forEach(s => {
      counts[s.vertical.nombre] = (counts[s.vertical.nombre] || 0) + 1
    })
    return counts
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="research-header" style={{ padding: '80px 0 64px' }}>
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-magnifying-glass"></i> Centro de investigaciones</div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.15, marginBottom: '20px', maxWidth: '720px' }}>
            Cada servicio,<br />investigado a fondo.
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.6)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '48px' }}>
            Estudiamos el mercado madrileño de la reforma para entender a cada cliente, cada servicio y cada contexto antes de poner la primera piedra.
          </p>
          <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
            {[
              { valor: ESTUDIOS_MERCADO.length, label: 'estudios de mercado' },
              { valor: serviceInvestigations.length, label: 'guías de servicio' },
              { valor: 15, label: 'verticales cubiertos' },
            ].map((stat, i) => (
              <div key={i} style={{
                paddingRight: '40px',
                marginRight: '40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,.12)' : 'none',
              }}>
                <div style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{stat.valor}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)', marginTop: '4px', letterSpacing: '.3px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTUDIOS DE MERCADO */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-label">Estudios de mercado</div>
          <h2 className="h2" style={{ marginBottom: '12px' }}>Informes por vertical</h2>
          <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px' }}>
            Investigación profunda de cada segmento: tamaño de mercado, perfil de cliente, proceso de decisión y oportunidades para Oro Constructores.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))', gap: '12px' }}>
            {ESTUDIOS_MERCADO.map(inv => (
              <Link to={inv.slug} key={inv.id} style={{ textDecoration: 'none' }}>
                <div style={{
                  border: '1px solid var(--ink-6)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  transition: 'border-color .15s, box-shadow .15s',
                  background: 'var(--white)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--ink-3)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--ink-6)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'var(--ink)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={`fa-solid ${inv.icon}`} style={{ color: 'var(--oro)', fontSize: '16px' }}></i>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.6px', color: 'var(--ink-4)', background: 'var(--ink-7)', padding: '3px 8px', borderRadius: '4px' }}>
                        {inv.etiqueta}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--ink-4)' }}>{inv.fuentes}</span>
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--ink)', marginBottom: '4px', lineHeight: 1.3 }}>{inv.titulo}</h3>
                    <p style={{ fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.5, margin: 0 }}>{inv.subtitulo}</p>
                  </div>
                  <i className="fa-solid fa-arrow-right" style={{ color: 'var(--ink-4)', fontSize: '13px', flexShrink: 0, marginTop: '4px' }}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GUÍAS DE SERVICIO */}
      <section style={{ padding: '80px 0', background: 'var(--paper)' }}>
        <div className="container">
          <div className="section-label">Guías de servicio</div>
          <h2 className="h2" style={{ marginBottom: '12px' }}>Investigación servicio a servicio</h2>
          <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '36px', maxWidth: '640px' }}>
            Cada uno de los {serviceInvestigations.length} servicios de Oro Constructores investigado en profundidad: contexto del cliente, materiales, precios reales, errores frecuentes y proceso de ejecución.
          </p>

          {/* Filter pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <button
              onClick={() => setFiltro('Todos')}
              style={{
                padding: '8px 16px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all .15s',
                background: filtro === 'Todos' ? 'var(--ink)' : 'var(--white)',
                color: filtro === 'Todos' ? 'var(--oro)' : 'var(--ink-2)',
                borderColor: filtro === 'Todos' ? 'var(--ink)' : 'var(--ink-5)',
              }}
            >
              Todos ({serviceInvestigations.length})
            </button>
            {verticales.map(v => (
              <button
                key={v.codigo}
                onClick={() => setFiltro(v.nombre)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: '1px solid',
                  cursor: 'pointer',
                  transition: 'all .15s',
                  background: filtro === v.nombre ? 'var(--ink)' : 'var(--white)',
                  color: filtro === v.nombre ? 'var(--oro)' : 'var(--ink-2)',
                  borderColor: filtro === v.nombre ? 'var(--ink)' : 'var(--ink-5)',
                }}
              >
                {v.nombre} ({countByVertical[v.nombre] || 0})
              </button>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: 'var(--ink-4)', marginBottom: '20px' }}>
            {serviciosFiltrados.length} {serviciosFiltrados.length === 1 ? 'guía' : 'guías'}
            {filtro !== 'Todos' ? ` · ${filtro}` : ''}
          </p>

          {/* Card grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '10px' }}>
            {serviciosFiltrados.map(s => (
              <Link
                to={`/investigaciones/servicio/${s.slug}`}
                key={s.codigo}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  background: 'var(--white)',
                  border: '1px solid var(--ink-6)',
                  borderRadius: 'var(--radius)',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  transition: 'border-color .12s, box-shadow .12s',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--oro)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--ink-6)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', color: 'var(--ink-4)', marginBottom: '6px' }}>
                      {s.vertical.nombre}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.35 }}>
                      {s.titulo.replace(' — Madrid', '').replace(' en Madrid', '')}
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right" style={{ color: 'var(--ink-5)', fontSize: '11px', flexShrink: 0, marginTop: '2px' }}></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section style={{ padding: '80px 0' }}>
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
