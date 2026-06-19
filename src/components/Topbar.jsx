import { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const NAV = [
  { to: '/soluciones', label: 'Soluciones' },
  { to: '/restaurantes', label: 'Hostelería' },
  { to: '/nosotros', label: 'Nosotros' },
]

export default function Topbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <nav className="sticky top-0 z-50 h-[56px] bg-black/90 backdrop-blur-xl border-b border-ink-900 flex items-center justify-between px-6 md:px-8">
      <button
        className="flex items-center gap-2.5 flex-shrink-0"
        onClick={() => navigate('/')}
      >
        <img src="/logo_isotipo_circulo_oro.png" alt="Oro Constructores" className="w-7 h-7 rounded-full" />
        <span className="text-[14px] font-extrabold tracking-tight text-white">
          ORO <span className="text-oro">Constructores</span>
        </span>
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        {NAV.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `text-[13px] transition-colors whitespace-nowrap ${
                isActive ? 'font-semibold text-oro' : 'font-normal text-ink-400 hover:text-white'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
        <button
          onClick={() => navigate('/presupuesto')}
          className="bg-oro text-black text-[13px] font-bold px-4 py-2 rounded-oro-sm hover:bg-oro-deep transition-colors"
        >
          Pedir presupuesto
        </button>
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden relative" ref={ref}>
        <button
          onClick={() => setOpen(o => !o)}
          className="w-9 h-9 flex items-center justify-center rounded-full text-ink-400 hover:text-white"
          aria-label="Menú"
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
        </button>
        {open && (
          <div className="absolute right-0 top-[calc(100%+8px)] w-[220px] bg-black rounded-oro-lg shadow-[0_8px_32px_rgba(0,0,0,.4)] border border-ink-900 overflow-hidden">
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-[14px] text-ink-300 hover:bg-ink-900 hover:text-white border-b border-ink-900"
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => { setOpen(false); navigate('/presupuesto') }}
              className="block w-full text-left px-4 py-3 text-[14px] font-bold text-oro hover:bg-ink-900"
            >
              Pedir presupuesto
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
