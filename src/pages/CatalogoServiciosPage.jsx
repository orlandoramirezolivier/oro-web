import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VERTICALES, ESTADO_META, TOTALES } from '../data/catalogoServicios'

export default function CatalogoServiciosPage() {
  const [filtroVertical, setFiltroVertical] = useState('TODOS')
  const [filtroEstado, setFiltroEstado] = useState('TODOS')

  const verticalesFiltradas = filtroVertical === 'TODOS'
    ? VERTICALES
    : VERTICALES.filter(v => v.codigo === filtroVertical)

  const contarEstado = (estado) =>
    VERTICALES.flatMap(v => v.servicios).filter(s => s.estado === estado).length

  return (
    <main>
      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-label">
            <i className="fa-solid fa-list-check"></i> CATÁLOGO DE SERVICIOS
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '720px', margin: '0 0 24px' }}>
            Todo lo que hacemos,<br />
            <span style={{ color: 'var(--oro)' }}>sin letra pequeña.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--ink-3)', maxWidth: '560px', marginBottom: '40px' }}>
            {TOTALES.servicios} servicios · {TOTALES.verticales} áreas de trabajo · Madrid y comunidad.
            Presupuesto cerrado, sin sorpresas.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn-primary">
              <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto
            </Link>
            <a href="https://wa.me/34643795099" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <i className="fa-brands fa-whatsapp"></i> WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Resumen de totales */}
      <section style={{ background: 'var(--ink)', padding: '40px 0' }}>
        <div className="container">
          <div className="cat-totales">
            <div className="cat-total-item">
              <span className="cat-total-num" style={{ color: 'var(--oro)' }}>{TOTALES.servicios}</span>
              <span className="cat-total-label">Servicios en catálogo</span>
            </div>
            <div className="cat-total-item">
              <span className="cat-total-num" style={{ color: 'var(--oro)' }}>{TOTALES.ACT}</span>
              <span className="cat-total-label">En oferta activa</span>
            </div>
            <div className="cat-total-item">
              <span className="cat-total-num" style={{ color: '#fff' }}>{TOTALES.CAP}</span>
              <span className="cat-total-label">Capacidad disponible</span>
            </div>
            <div className="cat-total-item">
              <span className="cat-total-num" style={{ color: '#fff' }}>{TOTALES.verticales}</span>
              <span className="cat-total-label">Verticales de trabajo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leyenda de estados */}
      <section style={{ background: 'var(--ink-8)', borderBottom: '1px solid var(--ink-7)', padding: '24px 0' }}>
        <div className="container">
          <div className="cat-leyenda">
            {Object.entries(ESTADO_META).map(([key, meta]) => (
              <div key={key} className="cat-leyenda-item">
                <span className="cat-badge" data-estado={key}>{meta.label}</span>
                <span className="cat-leyenda-desc">{meta.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section style={{ background: 'var(--paper)', borderBottom: '1px solid var(--ink-7)', padding: '20px 0', position: 'sticky', top: '68px', zIndex: 40 }}>
        <div className="container">
          <div className="cat-filtros">
            <div className="cat-filtros-group">
              <span className="cat-filtros-label">Vertical:</span>
              <div className="cat-pills">
                <button
                  className={`cat-pill${filtroVertical === 'TODOS' ? ' active' : ''}`}
                  onClick={() => setFiltroVertical('TODOS')}
                >
                  Todos
                </button>
                {VERTICALES.map(v => (
                  <button
                    key={v.codigo}
                    className={`cat-pill${filtroVertical === v.codigo ? ' active' : ''}`}
                    onClick={() => setFiltroVertical(v.codigo)}
                  >
                    {v.codigo}. {v.nombre}
                  </button>
                ))}
              </div>
            </div>
            <div className="cat-filtros-group">
              <span className="cat-filtros-label">Estado:</span>
              <div className="cat-pills">
                <button
                  className={`cat-pill${filtroEstado === 'TODOS' ? ' active' : ''}`}
                  onClick={() => setFiltroEstado('TODOS')}
                >
                  Todos
                </button>
                {Object.entries(ESTADO_META).map(([key, meta]) => (
                  <button
                    key={key}
                    className={`cat-pill${filtroEstado === key ? ' active' : ''}`}
                    onClick={() => setFiltroEstado(key)}
                  >
                    {meta.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo por verticales */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          {verticalesFiltradas.map(vertical => {
            const serviciosFiltrados = filtroEstado === 'TODOS'
              ? vertical.servicios
              : vertical.servicios.filter(s => s.estado === filtroEstado)

            if (serviciosFiltrados.length === 0) return null

            return (
              <div key={vertical.codigo} className="cat-vertical" id={`vertical-${vertical.codigo}`}>
                <div className="cat-vertical-header">
                  <div className="cat-vertical-icon">
                    <i className={`fa-solid ${vertical.icon}`}></i>
                  </div>
                  <div className="cat-vertical-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span className="cat-vertical-codigo">{vertical.codigo}</span>
                      <h2 className="cat-vertical-nombre">{vertical.nombre}</h2>
                      <span className="cat-count-badge">{vertical.servicios.length} servicios</span>
                    </div>
                    <p className="cat-vertical-desc">{vertical.descripcion}</p>
                    {vertical.investigacion && (
                      <div style={{ marginTop: '8px' }}>
                        <Link
                          to={vertical.investigacion === 'inv-1' ? '/investigaciones/hosteleria-madrid' : '/investigaciones'}
                          className="cat-inv-link"
                        >
                          <i className="fa-solid fa-magnifying-glass-chart"></i>
                          Ver investigación de mercado asociada ({vertical.investigacion})
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="cat-table-wrap">
                  <table className="cat-table">
                    <thead>
                      <tr>
                        <th style={{ width: '80px' }}>Código</th>
                        <th>Servicio</th>
                        <th style={{ width: '120px' }}>Estado</th>
                        <th style={{ width: '220px' }}>Precio de referencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviciosFiltrados.map(srv => (
                        <tr key={srv.codigo} className={`cat-row cat-row-${srv.estado.toLowerCase()}`}>
                          <td className="cat-codigo">{srv.codigo}</td>
                          <td className="cat-nombre">{srv.nombre}</td>
                          <td>
                            <span className="cat-badge" data-estado={srv.estado}>
                              {ESTADO_META[srv.estado].label}
                            </span>
                          </td>
                          <td className="cat-precio">{srv.precio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: 'var(--ink)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'var(--paper)', marginBottom: '16px' }}>
            ¿No encuentras lo que buscas?
          </h2>
          <p style={{ color: 'rgba(255,255,255,.65)', maxWidth: '520px', margin: '0 auto 32px', fontSize: '1.05rem' }}>
            Cuéntanos el trabajo. Si podemos hacerlo, te lo presupuestamos.
            Si no es para nosotros, te decimos quién puede ayudarte.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn-primary">
              <i className="fa-solid fa-paper-plane"></i> Solicitar presupuesto
            </Link>
            <a href="https://wa.me/34643795099" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'transparent', border: '2px solid rgba(255,255,255,.25)', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
              <i className="fa-brands fa-whatsapp" style={{ color: 'var(--oro)' }}></i> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
