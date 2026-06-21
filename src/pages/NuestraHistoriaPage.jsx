import { Link } from 'react-router-dom'

export default function NuestraHistoriaPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-mini">
        <div className="container">
          <div className="hero-label"><i className="fa-solid fa-book-open"></i> Nuestra historia</div>
          <h1>Una historia escrita<br /><span style={{ color: 'var(--oro)' }}>a muchas manos.</span></h1>
          <p>Un padre y un hijo. Décadas de oficio. Una empresa construida para que la experiencia real tenga el lugar que merece.</p>
        </div>
      </section>

      {/* IMAGEN PRINCIPAL */}
      <div className="container" style={{ paddingTop: '48px' }}>
        <img className="history-hero-img" src="/img/5-1.png" alt="Orlando Ramírez Sánchez, maestro albañil fundador de Oro Constructores" />
      </div>

      {/* CAPÍTULOS */}
      <section className="section">
        <div className="container">

          <div className="chapter">
            <div className="chapter-num">
              <span className="num">01</span>
              <span className="label">El origen</span>
            </div>
            <div className="chapter-body">
              <span className="chapter-tag">El Peso Real</span>
              <h2>La experiencia que no se improvisa.</h2>
              <p>Hay cosas que solo se aprenden haciéndolas. La construcción es una de ellas. No existe un libro que enseñe a mezclar el mortero en la proporción exacta para cada clima, o a leer los cimientos de una casa antes de tocar una sola pared.</p>
              <p>Orlando Ramírez Sánchez lo aprendió así: con las manos, con el tiempo, con la repetición. Obra tras obra, país tras país. Venezuela primero. Ecuador después. España al final. Cada lugar le enseñó algo diferente. Todos le confirmaron lo mismo: el trabajo bien hecho no tiene atajos.</p>
              <div className="chapter-quote">
                "Aprendí que la calidad no es un estándar que decides tener — es una forma de hacer las cosas que no puedes dejar de aplicar."
              </div>
            </div>
          </div>

          <div className="chapter">
            <div className="chapter-num">
              <span className="num">02</span>
              <span className="label">La visión</span>
            </div>
            <div className="chapter-body">
              <span className="chapter-tag">El Aprendiz y el Arquitecto</span>
              <h2>Un hijo que aprendió mirando, no solo estudiando.</h2>
              <p>Orlando Ramírez Olivier creció viendo a su padre construir. No estudió arquitectura ni ingeniería — estudió cómo funciona un negocio, cómo se comunica una marca, cómo se organiza un equipo para que el resultado sea superior a la suma de sus partes.</p>
              <p>Lo que su padre construía con las manos, él quería construirlo con estructura. No para cambiar lo que su padre hacía, sino para darlo a conocer de una manera que la gente pudiera entender y confiar.</p>
              <p>La idea era sencilla: si el oficio es excelente, la empresa que lo rodea también tiene que serlo.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="chapter-num">
              <span className="num">03</span>
              <span className="label">El nombre</span>
            </div>
            <div className="chapter-body">
              <span className="chapter-tag">De O.R.S. a ORO</span>
              <h2>El nombre no fue un accidente.</h2>
              <p>Las iniciales del padre, Orlando Ramírez Sánchez, forman las letras O.R.S. Un hijo que creó una empresa para honrar ese legado no podía elegir un nombre sin sentido. Así nació ORO.</p>
              <p>No como referencia al metal precioso — aunque la metáfora aplica. Sino como síntesis de una identidad: el apellido hecho empresa, el oficio hecho marca, la experiencia hecha promesa.</p>
              <div className="chapter-quote">
                "Oro Constructores no es solo un nombre de empresa. Es la firma de mi padre en cada obra que entregamos."
                <div style={{ fontSize: '13px', color: 'var(--ink-4)', marginTop: '10px', fontStyle: 'normal', fontWeight: 700 }}>— Orlando Ramírez Olivier</div>
              </div>
            </div>
          </div>

          <div className="chapter">
            <div className="chapter-num">
              <span className="num">04</span>
              <span className="label">La marca</span>
            </div>
            <div className="chapter-body">
              <span className="chapter-tag">Constructores que Valen Oro</span>
              <h2>El valor está en las personas, no en el material.</h2>
              <p>La construcción tiene un problema de percepción. Se valora el resultado — el piso terminado, la cocina nueva, el baño renovado — pero raramente se reconoce a quien lo hizo posible. El maestro albañil, el fontanero, el electricista, el pintor.</p>
              <p>Oro Constructores existe para cambiar eso. Para que el profesional que trabaja en tu casa sea reconocido por lo que es: alguien que sabe exactamente lo que hace y merece ser tratado como tal. El tagline "Constructores que Valen Oro" no es marketing — es una postura.</p>
              <p>Cuando ves el resultado final de una buena reforma, estás viendo décadas de oficio acumulado. Eso vale oro.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="chapter-num">
              <span className="num">05</span>
              <span className="label">El ecosistema</span>
            </div>
            <div className="chapter-body">
              <span className="chapter-tag">Una Visión de Ecosistema</span>
              <h2>Una empresa operativa. Una visión más amplia.</h2>
              <p>Oro Constructores es la empresa que existe hoy, la que ejecuta obras y entrega proyectos terminados. Pero la visión que la rodea es mayor: un ecosistema de servicios que hacen la construcción más accesible, más justa y más eficiente.</p>
              <p>Transporte de materiales, diseño de interiores, seguros de obra, reciclaje de escombros, formación de nuevos profesionales. Cada pieza del sector tiene una brecha de eficiencia — y cada brecha es una oportunidad de crear valor.</p>
              <p>Hoy, la prioridad es Oro Constructores. Las demás piezas irán llegando cuando el momento sea el correcto.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="chapter-num">
              <span className="num">06</span>
              <span className="label">El legado</span>
            </div>
            <div className="chapter-body">
              <span className="chapter-tag">El Legado Inverso</span>
              <h2>Un hijo que construye la marca para el legado de su padre.</h2>
              <p>En la mayoría de las familias, el legado va de padres a hijos. En este caso, el hijo está construyendo la estructura que amplifica y perpetúa el legado del padre. No como gesto simbólico — como proyecto de vida.</p>
              <p>El maestro de obra tiene más de 30 años de experiencia. Esa experiencia no debería perderse cuando deje de trabajar activamente. Debería quedar documentada, transmitida, integrada en un sistema que la multiplique.</p>
              <p>Eso es Oro Constructores. La historia se sigue construyendo cada día, en cada obra.</p>
              <div className="chapter-quote">
                "La historia se sigue construyendo cada día en cada obra."
              </div>
              <div style={{ marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/sobre-nosotros" className="btn btn-secondary">Conocer el equipo</Link>
                <Link to="/nuestra-cultura" className="btn btn-ghost">Nuestra cultura</Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Quieres ser parte de la historia?</h2>
          <p>Cada proyecto que entregamos añade un capítulo más. El tuyo puede ser el próximo.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">Hablar con nosotros</Link>
          </div>
        </div>
      </section>
    </>
  )
}
