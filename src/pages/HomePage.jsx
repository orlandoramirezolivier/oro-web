import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const STATS = [
  { value: '+30', label: 'Años de oficio' },
  { value: '100%', label: 'Sin letra pequeña' },
  { value: 'Madrid', label: 'Zona de servicio' },
]

const SERVICIOS = [
  {
    icon: 'fa-trowel-bricks',
    title: 'Reformas integrales',
    desc: 'Gestión completa de la transformación de tu vivienda o local. Planificación, materiales, mano de obra y supervisión constante.',
  },
  {
    icon: 'fa-sink',
    title: 'Cocinas y baños',
    desc: 'Las reformas que más valor aportan, ejecutadas por maestros. Fontanería, alicatado y acabados que duran.',
  },
  {
    icon: 'fa-paint-roller',
    title: 'Acabados y detalles',
    desc: 'Pintura, pladur, carpintería y los remates que marcan la diferencia. Si no está impecable, no está terminado.',
  },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function HomePage() {
  const navigate = useNavigate()
  useReveal()

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#FDBF00 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[.12em] text-oro mb-6">
            <i className="fa-solid fa-location-dot"></i> Madrid · Reformas y construcción
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Construcción y reformas<br />
            <span className="text-oro">accesibles, eficientes y confiables.</span>
          </h1>
          <p className="text-lg md:text-xl text-ink-300 max-w-2xl mb-2">
            Maestros con +30 años de oficio. Sin sorpresas. Sin letra pequeña.
          </p>
          <p className="text-xl md:text-2xl font-bold mb-10">Tu tranquilidad es el plan.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/presupuesto')}
              className="bg-oro text-black text-base font-bold px-7 py-4 rounded-oro-sm hover:bg-oro-deep transition-colors"
            >
              Pedir presupuesto gratis
            </button>
            <button
              onClick={() => navigate('/soluciones')}
              className="border border-ink-700 text-white text-base font-semibold px-7 py-4 rounded-oro-sm hover:border-oro hover:text-oro transition-colors"
            >
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-ink-200">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 divide-x divide-ink-200">
          {STATS.map((s) => (
            <div key={s.label} className="py-10 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-black">{s.value}</div>
              <div className="text-[12px] md:text-sm font-semibold text-ink-400 uppercase tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="reveal max-w-2xl mb-14">
          <span className="text-[12px] font-semibold uppercase tracking-[.12em] text-ink-400">Lo que hacemos</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
            Hacemos realidad lo que tienes en mente.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICIOS.map((s) => (
            <div key={s.title} className="reveal group bg-ink-50 border border-ink-200 rounded-oro-lg p-8 hover:border-oro transition-colors">
              <div className="w-12 h-12 rounded-oro bg-black flex items-center justify-center mb-5 group-hover:bg-oro transition-colors">
                <i className={`fa-solid ${s.icon} text-oro group-hover:text-black text-xl transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-ink-700 leading-relaxed text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOSTELERÍA */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="text-[12px] font-semibold uppercase tracking-[.12em] text-oro">Segmento hostelería</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-5">
              Tu restaurante no puede cerrar por una obra.
            </h2>
            <p className="text-ink-300 text-lg leading-relaxed mb-8">
              Reformas y mantenimiento para bares y restaurantes de Madrid, planificadas para minimizar
              el tiempo sin servicio. Trabajamos en horario que no te cuesta clientes.
            </p>
            <button
              onClick={() => navigate('/restaurantes')}
              className="bg-oro text-black text-base font-bold px-7 py-4 rounded-oro-sm hover:bg-oro-deep transition-colors"
            >
              Soluciones para hostelería
            </button>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {[
              { icon: 'fa-clock', t: 'Obra sin parar tu negocio' },
              { icon: 'fa-shield-halved', t: 'Cumplimiento normativo' },
              { icon: 'fa-screwdriver-wrench', t: 'Mantenimiento urgente' },
              { icon: 'fa-file-invoice', t: 'Presupuesto cerrado' },
            ].map((c) => (
              <div key={c.t} className="bg-ink-900 rounded-oro-lg p-6 border border-ink-900">
                <i className={`fa-solid ${c.icon} text-oro text-2xl mb-3`}></i>
                <p className="text-sm font-semibold text-white leading-snug">{c.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-ink-700 text-lg max-w-xl mx-auto mb-10">
            Te damos un presupuesto claro y sin compromiso. Nos encargamos de todo, te explicamos cada paso.
          </p>
          <button
            onClick={() => navigate('/presupuesto')}
            className="bg-oro text-black text-lg font-bold px-9 py-4 rounded-oro-sm hover:bg-oro-deep transition-colors"
          >
            Pedir presupuesto gratis
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-ink-400 border-t border-ink-900">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo_completo_invertido.png" alt="Oro Constructores" className="h-8" />
          </div>
          <div className="text-sm space-y-1">
            <p><i className="fa-solid fa-phone text-oro mr-2"></i>+34 643 79 50 99</p>
            <p><i className="fa-solid fa-envelope text-oro mr-2"></i>info.oroconstructores@gmail.com</p>
            <p className="text-ink-600 mt-3">Constructores que Valen Oro · Madrid</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
