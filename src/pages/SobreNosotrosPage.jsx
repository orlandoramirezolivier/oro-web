import { Link } from 'react-router-dom'

export default function SobreNosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-mini">
        <div className="container">
          <div className="hero-label"><i className="fa-solid fa-users"></i> Quiénes somos</div>
          <h1>Constructores que<br /><span style={{ color: 'var(--oro)' }}>Valen Oro.</span></h1>
          <p>Detrás de cada pared, de cada instalación y de cada acabado, hay unas manos expertas que saben exactamente lo que hacen.</p>
        </div>
      </section>

      {/* INTRO TEXTO */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <div className="section-label">Nuestra esencia</div>
              <h2 className="h2">La experiencia no se improvisa. Se construye obra a obra.</h2>
              <p className="lead">Nuestro equipo reúne a maestros albañiles, carpinteros, fontaneros y electricistas con toda una vida dedicada a su profesión. No somos mano de obra — somos maestros.</p>
              <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '28px' }}>Creemos en dignificar el oficio y en la sinceridad radical con el cliente. Sin tecnicismos que oculten la realidad. Sin letras pequeñas que cambien el precio. Lo que acordamos es lo que entregamos.</p>
              <div className="callout-oro">
                <strong>"Tu tranquilidad es el plan."</strong> — Esa es la promesa que hacemos a cada cliente antes de empezar cualquier obra.
              </div>
            </div>
            <div className="split-img">
              <img src="/img/Constructores-que-valen-oro.png" alt="Profesional Oro Constructores en obra" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE FUNDADOR */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-label">El equipo fundador</div>
          <div className="founder-block" style={{ marginTop: '32px' }}>
            <div className="founder-img">
              <img src="/img/5-1.png" alt="Orlando Ramírez Sánchez — Maestro de Obra" />
            </div>
            <div className="founder-text">
              <div className="label">Maestro de Obra · +30 años de oficio</div>
              <h2>Orlando Ramírez Sánchez</h2>
              <p>Más de 30 años como maestro albañil en Venezuela, Ecuador y España. Construyó con sus manos lo que otros diseñaban en papel. Su experiencia es el corazón de Oro Constructores.</p>
              <p>Cada obra que sale de nuestras manos lleva implícita su estándar: si no está impecable, no está terminado.</p>
              <div style={{ marginTop: '24px' }}>
                <div className="promise-item">
                  <div className="promise-icon"><i className="fa-solid fa-globe"></i></div>
                  <div className="promise-text">
                    <h4>30+ años de experiencia internacional</h4>
                    <p>Venezuela · Ecuador · España</p>
                  </div>
                </div>
                <div className="promise-item">
                  <div className="promise-icon"><i className="fa-solid fa-medal"></i></div>
                  <div className="promise-text">
                    <h4>Maestro Albañil certificado</h4>
                    <p>Especialidad en obra estructural, albañilería y acabados</p>
                  </div>
                </div>
                <div className="promise-item">
                  <div className="promise-icon"><i className="fa-solid fa-star"></i></div>
                  <div className="promise-text">
                    <h4>Estándar de excelencia</h4>
                    <p>Si no está impecable, no está terminado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL EQUIPO */}
      <section className="section">
        <div className="container">
          <div className="section-label">El equipo</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="h2" style={{ marginBottom: 0 }}>Profesionales reales.<br />Cada uno en su especialidad.</h2>
            <p style={{ fontSize: '14px', color: 'var(--ink-3)', maxWidth: '300px' }}>Coordinamos el equipo completo para tu proyecto. No subcontratamos sin control.</p>
          </div>
          <div className="team-grid">
            <div className="pro-card">
              <div className="pro-card-icon"><i className="fa-solid fa-hard-hat"></i></div>
              <div>
                <h4>Maestro Albañil</h4>
                <div className="years">30+ años</div>
                <p>Estructuras, tabiquería, solados y revestimientos. La base de toda reforma bien hecha.</p>
              </div>
            </div>
            <div className="pro-card">
              <div className="pro-card-icon"><i className="fa-solid fa-paint-roller"></i></div>
              <div>
                <h4>Pintor Especialista</h4>
                <div className="years">15+ años</div>
                <p>Alisados, pinturas lavables, barnices y acabados decorativos. Preparación impecable de superficies.</p>
              </div>
            </div>
            <div className="pro-card">
              <div className="pro-card-icon"><i className="fa-solid fa-bolt"></i></div>
              <div>
                <h4>Electricista Certificado</h4>
                <div className="years">20+ años</div>
                <p>Instalaciones eléctricas residenciales y comerciales. Cumplimiento estricto de normativa REBT.</p>
              </div>
            </div>
            <div className="pro-card">
              <div className="pro-card-icon"><i className="fa-solid fa-droplet"></i></div>
              <div>
                <h4>Fontanero</h4>
                <div className="years">15+ años</div>
                <p>Instalaciones de fontanería, calefacción y saneamiento. Diagnóstico preciso de fugas y averías.</p>
              </div>
            </div>
            <div className="pro-card">
              <div className="pro-card-icon"><i className="fa-solid fa-table-cells-large"></i></div>
              <div>
                <h4>Alicatador</h4>
                <div className="years">20+ años</div>
                <p>Cerámica y porcelánico en baños, cocinas y suelos. Precisión milimétrica en cortes y juntas.</p>
              </div>
            </div>
            <div className="pro-card">
              <div className="pro-card-icon"><i className="fa-solid fa-person-digging"></i></div>
              <div>
                <h4>Ayudantes de Obra</h4>
                <div className="years">Equipo propio</div>
                <p>Apoyo logístico y operativo en cada fase de la obra. Coordinados bajo supervisión constante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-label">Valores de la empresa</div>
          <h2 className="h2" style={{ marginBottom: '40px' }}>Lo que nos define<br />como empresa.</h2>
          <div className="grid-2">
            <div className="value-card">
              <div className="num">01 — Confianza</div>
              <h3>Lo que prometemos, lo cumplimos.</h3>
              <p>Relaciones transparentes, presupuestos cerrados y seguridad garantizada. Sin cambios de última hora.</p>
            </div>
            <div className="value-card">
              <div className="num">02 — Accesibilidad</div>
              <h3>La reforma que creías imposible, ahora es viable.</h3>
              <p>Reformas de calidad para presupuestos medios. Sin renunciar al estándar. Sin sorpresas que desequilibren tu economía.</p>
            </div>
            <div className="value-card">
              <div className="num">03 — Responsabilidad</div>
              <h3>Sin excusas.</h3>
              <p>Asumimos el resultado sin excusas. Si algo no está bien, lo corregimos. Punto.</p>
            </div>
            <div className="value-card">
              <div className="num">04 — Excelencia</div>
              <h3>Si no está impecable, no está terminado.</h3>
              <p>No entregamos una obra que no cumpla nuestro propio estándar. El cliente no debería tener que pedirlo.</p>
            </div>
            <div className="value-card">
              <div className="num">05 — Dignidad</div>
              <h3>Respeto al constructor y al cliente por igual.</h3>
              <p>Reconocemos el valor del oficio. Tratamos a nuestro equipo con el mismo respeto que al cliente.</p>
            </div>
            <div className="callout-oro" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <strong style={{ fontSize: '16px', display: 'block', marginBottom: '8px' }}>"El cemento seca. La experiencia perdura."</strong>
              Estos valores no están en un cartel de la oficina — están en cada obra que entregamos.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ponemos nuestra experiencia<br />en tu proyecto.</h2>
          <p>Hablemos. Sin compromiso, sin presiones.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto</Link>
            <Link to="/nuestra-historia" className="btn btn-ghost btn-lg">Conocer nuestra historia</Link>
          </div>
        </div>
      </section>
    </>
  )
}
