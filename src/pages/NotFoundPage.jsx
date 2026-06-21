import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main style={{ background: 'var(--ink)', minHeight: 'calc(100vh - var(--nav-h))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '560px' }}>
        <div style={{ fontSize: '7rem', fontWeight: 800, color: 'var(--oro)', lineHeight: 1, marginBottom: '8px' }}>
          404
        </div>
        <div style={{ width: '48px', height: '3px', background: 'var(--oro)', margin: '0 auto 32px' }} />
        <h1 style={{ color: 'var(--paper)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
          Esta página no existe
        </h1>
        <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '40px' }}>
          Igual que en una obra: si llegas al sitio equivocado,
          lo mejor es volver al plano y empezar desde el principio.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-primary">
            <i className="fa-solid fa-house"></i> Volver al inicio
          </Link>
          <Link to="/presupuesto" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'transparent', border: '2px solid rgba(255,255,255,.2)', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
            <i className="fa-solid fa-file-invoice" style={{ color: 'var(--oro)' }}></i> Pedir presupuesto
          </Link>
        </div>
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,.1)' }}>
          <p style={{ color: 'rgba(255,255,255,.3)', fontSize: '0.85rem', marginBottom: '12px' }}>
            O busca lo que necesitas:
          </p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { to: '/soluciones', label: 'Servicios' },
              { to: '/catalogo-servicios', label: 'Catálogo completo' },
              { to: '/contacto', label: 'Contacto' },
              { to: '/nuestra-historia', label: 'Quiénes somos' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ padding: '6px 14px', background: 'rgba(253,191,0,.08)', border: '1px solid rgba(253,191,0,.2)', borderRadius: '20px', color: 'var(--oro)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
