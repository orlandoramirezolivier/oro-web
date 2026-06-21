import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src="/logo_completo_color.png" alt="Oro Constructores" />
        </Link>
        <div className="nav-links">
          <Link to="/tienda">Tienda</Link>
          <Link to="/soluciones">Soluciones</Link>
        </div>
        <Link to="/presupuesto" className="nav-cta">
          <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto
        </Link>
        <button className="nav-toggle" onClick={() => setOpen(true)} aria-label="Menú">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* MOBILE NAV */}
      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setOpen(false)} aria-label="Cerrar">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <Link to="/tienda" onClick={() => setOpen(false)}>Tienda</Link>
        <Link to="/soluciones" onClick={() => setOpen(false)}>Soluciones</Link>
        <Link to="/presupuesto" className="btn btn-primary" onClick={() => setOpen(false)}>
          Pedir presupuesto
        </Link>
      </div>
    </>
  )
}
