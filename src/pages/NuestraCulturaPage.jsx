import { Link } from 'react-router-dom'

export default function NuestraCulturaPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-mini">
        <div className="container">
          <div className="hero-label"><i className="fa-solid fa-compass"></i> Nuestra cultura</div>
          <h1>"El cemento seca.<br /><span style={{ color: 'var(--oro)' }}>La experiencia perdura."</span></h1>
          <p>No nos define solo la calidad de nuestros acabados, sino la calidad de nuestro trato. La construcción es un servicio humano donde la dignidad es fundamental.</p>
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="section">
        <div className="container">
          <p className="big-statement">
            Creemos en dignificar el oficio<br />
            <span className="muted">y en la sinceridad radical<br />con el cliente.</span>
          </p>
        </div>
      </section>

      {/* PROPÓSITO VISIÓN MISIÓN */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-label">La base</div>
          <h2 className="h2">Por qué existimos. Para qué trabajamos.<br />Cómo lo hacemos.</h2>
          <div className="pvmv-grid">
            <div className="pvmv-card">
              <div className="tag"><i className="fa-solid fa-heart"></i> Propósito</div>
              <h3>Empoderar a quienes construyen con sus manos.</h3>
              <p>Queremos que los profesionales técnicos con experiencia tengan mejores herramientas, mejor organización y el reconocimiento que merecen. Crear un ecosistema donde los constructores trabajen con dignidad.</p>
            </div>
            <div className="pvmv-card">
              <div className="tag"><i className="fa-solid fa-eye"></i> Visión</div>
              <h3>Transformar la construcción en un servicio accesible, eficiente y confiable.</h3>
              <p>Optimizando recursos, integrando tecnología y elevando el estándar del sector. La reforma que hoy parece imposible, mañana tiene que ser viable para cualquier persona.</p>
            </div>
            <div className="pvmv-card">
              <div className="tag"><i className="fa-solid fa-bullseye"></i> Misión</div>
              <h3>Ofrecer soluciones constructivas con tecnología, estrategia y profesionales capacitados.</h3>
              <p>Hacer accesible la construcción para propietarios y empresas en Madrid. Sin sorpresas, sin letra pequeña, con supervisión constante y honestidad radical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section">
        <div className="container">
          <div className="section-label">Los 5 valores</div>
          <h2 className="h2" style={{ marginBottom: '48px' }}>Valores innegociables.<br />No están en ningún cartel.</h2>
          <div className="values-list">
            <div className="value-item">
              <div className="num-col">
                <span>01</span>
                <div className="oro-dot"></div>
              </div>
              <div>
                <h3>Confianza</h3>
                <p>Relaciones transparentes, presupuestos cerrados y seguridad garantizada. Lo que prometemos, lo cumplimos. Sin excepciones, sin excusas, sin letra pequeña que cambie las reglas a mitad de camino.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="num-col">
                <span>02</span>
                <div className="oro-dot"></div>
              </div>
              <div>
                <h3>Accesibilidad</h3>
                <p>La reforma que creías imposible, ahora es viable. Reformas de calidad para presupuestos medios. Sin renunciar al estándar de trabajo, encontramos la forma de que el precio sea real y el resultado sea excelente.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="num-col">
                <span>03</span>
                <div className="oro-dot"></div>
              </div>
              <div>
                <h3>Responsabilidad</h3>
                <p>Sin excusas. Asumimos el resultado sin rodeos. Si algo no cumple nuestro estándar, lo corregimos. No buscamos al culpable — buscamos la solución. El cliente no tiene que perseguirnos para que hagamos lo correcto.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="num-col">
                <span>04</span>
                <div className="oro-dot"></div>
              </div>
              <div>
                <h3>Excelencia</h3>
                <p>Si no está impecable, no está terminado. El estándar no es un lujo — es el mínimo exigible. No entregamos una obra que nosotros mismos no habitaríamos. Ese es el único criterio que cuenta.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="num-col">
                <span>05</span>
                <div className="oro-dot"></div>
              </div>
              <div>
                <h3>Dignidad</h3>
                <p>Respeto al constructor y al cliente por igual. Reconocemos el valor del oficio. Tratamos a cada miembro del equipo con el mismo respeto que esperamos que el cliente nos trate. Sin jerarquías falsas — todos construimos juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE DECIMOS / NO DECIMOS */}
      <section className="section section-paper">
        <div className="container">
          <div className="culture-dark-block">
            <div className="section-label" style={{ color: 'rgba(255,255,255,.35)' }}>Identidad verbal</div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'var(--white)', marginBottom: '8px' }}>Así hablamos. Así nos reconocen.</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.5)', maxWidth: '480px' }}>Directo, honesto, humano. Sin jerga corporativa.</p>
            <div className="do-list">
              <div className="do-item yes">
                <div className="label">Sí decimos</div>
                <ul>
                  <li>Nos encargamos de todo.</li>
                  <li>Sin sorpresas, sin letra pequeña.</li>
                  <li>Te explicamos cada paso.</li>
                  <li>Si no está bien, lo rehacemos.</li>
                  <li>Tu espacio, tu tranquilidad.</li>
                  <li>Presupuesto cerrado desde el primer día.</li>
                </ul>
              </div>
              <div className="do-item no">
                <div className="label">No decimos</div>
                <ul>
                  <li>Soluciones integrales de vanguardia.</li>
                  <li>Nuestro compromiso con la excelencia.</li>
                  <li>Líderes del sector.</li>
                  <li>Empresa consolidada con amplia trayectoria.</li>
                  <li>Trabajamos para superar sus expectativas.</li>
                  <li>Calidad-precio inmejorable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      <section className="section-sm">
        <div className="container">
          <div className="section-label">Seguir explorando</div>
          <div className="grid-3">
            <Link to="/nuestra-historia" className="card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card-icon"><i className="fa-solid fa-book-open"></i></div>
              <h3 style={{ marginBottom: '8px' }}>Nuestra historia</h3>
              <p>Entiende de dónde viene la empresa y por qué existe cada decision que tomamos.</p>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>Leer la historia <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/sobre-nosotros" className="card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card-icon"><i className="fa-solid fa-users"></i></div>
              <h3 style={{ marginBottom: '8px' }}>El equipo</h3>
              <p>Conoce a los maestros detrás de cada obra. Cada especialidad, cada trayectoria.</p>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>Ver el equipo <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
            <Link to="/tienda" className="card" style={{ display: 'block', textDecoration: 'none' }}>
              <div className="card-icon" style={{ background: 'var(--ink)', color: 'var(--oro)' }}><i className="fa-solid fa-store"></i></div>
              <h3 style={{ marginBottom: '8px' }}>Oro Tienda</h3>
              <p>Explora nuestros servicios, recursos gratuitos y herramientas para tu reforma.</p>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>Ir a la tienda <i className="fa-solid fa-arrow-right"></i></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Cultura en acción, no en papel.</h2>
          <p>Cada obra que entregamos es una demostración de estos valores. Compruébalo tú mismo.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto</Link>
            <Link to="/soluciones" className="btn btn-ghost btn-lg">Ver servicios</Link>
          </div>
        </div>
      </section>
    </>
  )
}
