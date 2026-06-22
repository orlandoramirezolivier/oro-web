import { useState } from 'react'
import { Link } from 'react-router-dom'
import { VERTICALES, ESTADO_META, TOTALES, INV_SLUGS } from '../data/catalogoServicios'

export default function CatalogoServiciosPage() {
  const [filtroVertical, setFiltroVertical] = useState('TODOS')
  const [filtroEstado, setFiltroEstado] = useState('TODOS')

  const verticalesFiltradas = filtroVertical === 'TODOS'
    ? VERTICALES
    : VERTICALES.filter(v => v.codigo === filtroVertical)

  return (
    <main>
      {/* Hero */}
      <section className="hero-mini">
        <div className="container">
          <div className="hero-label">
            <i className="fa-solid fa-list-check"></i> Todos los servicios
          </div>
          <h1>
            Todo lo que hacemos,<br />
            <span style={{ color: 'var(--oro)' }}>sin letra pequeña.</span>
          </h1>
          <p>
            {TOTALES.servicios} servicios · {TOTALES.verticales} verticales · Madrid y comunidad.
            Presupuesto cerrado, sin sorpresas.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-primary">
              <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis
            </Link>
            <a href="https://wa.me/34643795099" className="btn btn-ghost-inv">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Resumen de totales */}
      <section style={{ background: 'var(--ink)', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,.08)' }}>
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
              <span className="cat-total-num" style={{ color: 'rgba(255,255,255,.6)' }}>{TOTALES.CAP}</span>
              <span className="cat-total-label">Capacidad disponible</span>
            </div>
            <div className="cat-total-item">
              <span className="cat-total-num" style={{ color: 'rgba(255,255,255,.6)' }}>{TOTALES.verticales}</span>
              <span className="cat-total-label">Verticales de trabajo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leyenda de estados */}
      <section style={{ background: 'var(--paper)', borderBottom: '1px solid var(--ink-7)', padding: '24px 0' }}>
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
      <section style={{ background: 'var(--paper)', borderBottom: '1px solid var(--ink-7)', padding: '20px 0', position: 'sticky', top: 'var(--nav-h)', zIndex: 40 }}>
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
                    {vertical.investigacion && INV_SLUGS[vertical.investigacion] && (
                      <div style={{ marginTop: '8px' }}>
                        <Link to={INV_SLUGS[vertical.investigacion]} className="cat-inv-link">
                          <i className="fa-solid fa-microscope"></i>
                          Investigación de mercado disponible — {vertical.investigacion}
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
                        <th style={{ width: '140px' }}>Estado</th>
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
      <section className="cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>¿No encuentras lo que buscas?</h2>
          <p>Cuéntanos el trabajo. Si podemos hacerlo, te lo presupuestamos. Si no es para nosotros, te decimos quién puede ayudarte.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-paper-plane"></i> Solicitar presupuesto
            </Link>
            <a href="https://wa.me/34643795099" className="btn btn-ghost btn-lg">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
