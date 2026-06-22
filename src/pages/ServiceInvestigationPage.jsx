import { useParams, Link, Navigate } from 'react-router-dom'
import { serviceInvestigations } from '../data/serviceInvestigations'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '48px 0' }} />

const INDEX_ITEMS = [
  { id: '01', label: 'El problema' },
  { id: '02', label: 'El cliente' },
  { id: '03', label: 'El trabajo' },
  { id: '04', label: 'Materiales' },
  { id: '05', label: 'Alcance' },
  { id: '06', label: 'Precios' },
  { id: '07', label: 'Errores' },
  { id: '08', label: 'Por qué Oro' },
  { id: '09', label: 'Proceso' },
  { id: '10', label: 'FAQ' },
]

export default function ServiceInvestigationPage() {
  const { slug } = useParams()
  const inv = serviceInvestigations.find(s => s.slug === slug)

  if (!inv) return <Navigate to="/investigaciones" replace />

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────── */}
      <div className="research-header">
        <div className="container">
          <div style={{ marginBottom: '12px' }}>
            <Link to="/investigaciones" style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', textDecoration: 'none' }}>
              <i className="fa-solid fa-arrow-left" style={{ marginRight: '6px' }}></i>Investigaciones
            </Link>
            <span style={{ color: 'rgba(255,255,255,.2)', margin: '0 8px' }}>›</span>
            <Link to={`/investigaciones/${inv.vertical.invSlug}`} style={{ color: 'rgba(255,255,255,.4)', fontSize: '13px', textDecoration: 'none' }}>
              {inv.vertical.nombre}
            </Link>
          </div>
          <div className="research-tag">
            <i className="fa-solid fa-magnifying-glass"></i> Investigación de servicio · {inv.codigo}
          </div>
          <h1>{inv.titulo}</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.55)', maxWidth: '660px', lineHeight: 1.75 }}>{inv.subtitulo}</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Vertical</span><span className="meta-value">{inv.vertical.nombre}</span></div>
            <div className="meta-item"><span className="meta-label">Código</span><span className="meta-value">{inv.codigo}</span></div>
          </div>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Índice */}
          <div className="research-index">
            <div className="ri-label">Índice de la investigación</div>
            <div className="ri-items">
              {INDEX_ITEMS.map(item => (
                <a key={item.id} href={`#s${item.id}`} className="ri-item">
                  <span className="ri-num">{item.id}</span>
                  <span className="ri-text">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Abstract */}
          <div className="abstract-block">
            <div className="ab-label"><i className="fa-solid fa-align-left"></i> Resumen ejecutivo</div>
            <p>{inv.abstract}</p>
          </div>

          {/* Stat boxes */}
          {inv.stats && inv.stats.length > 0 && (
            <div className="stat-grid" style={{ gridTemplateColumns: `repeat(${inv.stats.length}, 1fr)`, margin: '40px 0' }}>
              {inv.stats.map((s, i) => (
                <div key={i} className="stat-box">
                  <div className="stat-valor">{s.valor}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* 01 — El problema / contexto */}
          <div id="s01" className="section-anchor">
            <div className="section-label">01 — El problema</div>
            <h2 className="h2">Contexto: por qué se solicita este servicio.</h2>
            {(inv.contexto || inv.queEs || '').split('\n\n').map((p, i) => (
              <p key={i} className="body-text">{p}</p>
            ))}
          </div>
          {HR}

          {/* 02 — Perfiles de cliente */}
          <div id="s02" className="section-anchor">
            <div className="section-label">02 — El cliente</div>
            <h2 className="h2">Perfiles: quién lo contrata y cuándo.</h2>
            {inv.perfiles ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '28px' }}>
                {inv.perfiles.map((p, i) => (
                  <div key={i} style={{ padding: '20px 24px', background: 'var(--paper)', borderRadius: '12px', borderLeft: '3px solid var(--oro)' }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '8px' }}>{p.tipo}</div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{p.descripcion}</p>
                  </div>
                ))}
              </div>
            ) : (
              (inv.quienLoNecesita || '').split('\n\n').map((p, i) => (
                <p key={i} className="body-text">{p}</p>
              ))
            )}
          </div>
          {HR}

          {/* 03 — El trabajo en detalle */}
          <div id="s03" className="section-anchor">
            <div className="section-label">03 — El trabajo</div>
            <h2 className="h2">Qué implica ejecutarlo bien.</h2>
            {(inv.trabajoDetalle || inv.queEs || '').split('\n\n').map((p, i) => (
              <p key={i} className="body-text">{p}</p>
            ))}
            {inv.pasosEjecucion && inv.pasosEjecucion.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginTop: '32px' }}>
                {inv.pasosEjecucion.map((paso, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', padding: '20px 0', borderBottom: i < inv.pasosEjecucion.length - 1 ? '1px solid var(--ink-6)' : 'none' }}>
                    <div style={{ fontWeight: 800, fontSize: '22px', color: 'var(--oro)', flexShrink: 0, minWidth: '32px', fontFamily: 'var(--font-mono, monospace)' }}>{paso.numero}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '6px' }}>{paso.titulo}</div>
                      <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{paso.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {HR}

          {/* 04 — Materiales y técnicas */}
          <div id="s04" className="section-anchor">
            <div className="section-label">04 — Materiales y técnicas</div>
            <h2 className="h2">Opciones, calidades y cuándo usar cada una.</h2>
            {inv.materiales && inv.materiales.length > 0 ? (
              <table className="r-table" style={{ marginTop: '28px' }}>
                <thead>
                  <tr>
                    <th>Situación / tipo de trabajo</th>
                    <th>Técnica o material</th>
                    <th>Cuándo aplicarlo</th>
                  </tr>
                </thead>
                <tbody>
                  {inv.materiales.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.tipo}</strong></td>
                      <td>{row.tecnica}</td>
                      <td style={{ fontSize: '13px', color: 'var(--ink-3)' }}>{row.cuandoUsarla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="body-text" style={{ color: 'var(--ink-3)' }}>Ver sección de alcance para detalles de materiales incluidos.</p>
            )}
          </div>
          {HR}

          {/* 05 — Alcance */}
          <div id="s05" className="section-anchor">
            <div className="section-label">05 — Alcance</div>
            <h2 className="h2">Qué incluye y qué no incluye este servicio.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '28px 0' }}>
              <div style={{ background: 'var(--paper)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--oro)' }}></i> Incluye
                </div>
                <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(inv.queIncluye || []).map((item, i) => (
                    <li key={i} style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'var(--paper)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '16px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-circle-xmark" style={{ color: 'var(--ink-4)' }}></i> No incluye
                </div>
                <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(inv.queNoIncluye || []).map((item, i) => (
                    <li key={i} style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {HR}

          {/* 06 — Precios */}
          <div id="s06" className="section-anchor">
            <div className="section-label">06 — Precios</div>
            <h2 className="h2">Precios de referencia en Madrid.</h2>
            <table className="r-table" style={{ marginTop: '28px' }}>
              <thead><tr><th>Trabajo</th><th>Precio orientativo</th><th>Notas</th></tr></thead>
              <tbody>
                {(inv.precios || []).map((row, i) => (
                  <tr key={i}>
                    <td>{row.trabajo}</td>
                    <td><strong>{row.precio}</strong></td>
                    <td style={{ fontSize: '13px', color: 'var(--ink-3)' }}>{row.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="nota">Precios sin IVA. Orientativos para Madrid capital 2026. El presupuesto definitivo depende de la visita técnica.</p>
            {inv.preciosContexto && (
              <p className="body-text" style={{ marginTop: '20px' }}>{inv.preciosContexto}</p>
            )}
          </div>
          {HR}

          {/* 07 — Errores frecuentes */}
          <div id="s07" className="section-anchor">
            <div className="section-label">07 — Errores frecuentes</div>
            <h2 className="h2">Lo que sale mal con otros operadores.</h2>
            {inv.errores && inv.errores.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px' }}>
                {inv.errores.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', padding: '20px 24px', background: 'var(--paper)', borderRadius: '12px', borderLeft: '3px solid var(--ink-4)' }}>
                    <i className="fa-solid fa-triangle-exclamation" style={{ color: 'var(--ink-3)', fontSize: '18px', flexShrink: 0, marginTop: '2px' }}></i>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)', marginBottom: '6px' }}>{item.error}</div>
                      <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.6 }}>{item.consecuencia}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="body-text" style={{ color: 'var(--ink-3)' }}>Ver sección de FAQ para preguntas sobre problemas frecuentes.</p>
            )}
          </div>
          {HR}

          {/* 08 — Por qué Oro Constructores */}
          <div id="s08" className="section-anchor">
            <div className="section-label">08 — Por qué Oro Constructores</div>
            <h2 className="h2">Los diferenciadores concretos en este servicio.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px' }}>
              {(inv.porQueOro || []).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', padding: '20px 24px', border: '1px solid var(--ink-6)', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--oro)', fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '6px' }}>{item.titulo}</div>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {HR}

          {/* 09 — El proceso */}
          <div id="s09" className="section-anchor">
            <div className="section-label">09 — El proceso</div>
            <h2 className="h2">Cómo trabaja Oro Constructores en este servicio.</h2>
            {inv.proceso && inv.proceso.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '28px' }}>
                {inv.proceso.map((paso, i) => (
                  <div key={i} style={{ padding: '24px', background: 'var(--paper)', borderRadius: '12px' }}>
                    <div style={{ fontWeight: 800, fontSize: '28px', color: 'var(--oro)', marginBottom: '12px', lineHeight: 1 }}>{paso.numero}</div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '8px' }}>{paso.titulo}</div>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.6 }}>{paso.descripcion}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="body-text" style={{ color: 'var(--ink-3)' }}>Visita técnica gratuita · Presupuesto en 48h · Ejecución con equipo propio · Entrega y garantía.</p>
            )}
          </div>
          {HR}

          {/* 10 — FAQ */}
          <div id="s10" className="section-anchor">
            <div className="section-label">10 — Preguntas frecuentes</div>
            <h2 className="h2">Lo que los clientes preguntan antes de contratar.</h2>
            <div style={{ marginTop: '28px' }}>
              {(inv.faq || []).map((item, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--ink-6)', padding: '20px 0' }}>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '8px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <i className="fa-solid fa-circle-question" style={{ color: 'var(--oro)', fontSize: '14px', marginTop: '3px', flexShrink: 0 }}></i>
                    {item.pregunta}
                  </div>
                  <p style={{ margin: '0 0 0 24px', fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.65 }}>{item.respuesta}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enlace investigación vertical */}
          <div style={{ background: 'var(--paper)', borderRadius: '12px', padding: '28px', marginTop: '56px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <i className="fa-solid fa-microscope" style={{ fontSize: '24px', color: 'var(--oro)', flexShrink: 0, marginTop: '2px' }}></i>
            <div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '6px' }}>
                Investigación de mercado completa — {inv.vertical.nombre}
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6 }}>
                Análisis exhaustivo del mercado, perfiles de cliente, precios y estrategia comercial para todo el segmento de {inv.vertical.nombre} en Madrid.
              </p>
              <Link to={`/investigaciones/${inv.vertical.invSlug}`} style={{ fontSize: '14px', color: 'var(--oro)', fontWeight: 600, textDecoration: 'none' }}>
                Ver investigación de {inv.vertical.nombre} <i className="fa-solid fa-arrow-right" style={{ marginLeft: '4px' }}></i>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <h2>{inv.ctaTitulo || 'Pide presupuesto sin compromiso.'}</h2>
          <p>{inv.ctaDescripcion || 'Visita técnica gratuita. Presupuesto cerrado en 48 horas. Sin subcontratas.'}</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis
            </Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-phone"></i> Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
