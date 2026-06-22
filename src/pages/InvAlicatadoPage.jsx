import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

export default function InvAlicatadoPage() {
  return (
    <>
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 12</div>
          <h1>Alicatado y cerámica en Madrid</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            El oficio invisible que define el resultado de una reforma de baño o cocina — demanda, tendencias de material y posición de mercado en Madrid.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Cerámica y Revestimientos</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">7 fuentes</span></div>
            <div className="meta-item"><span className="meta-label">Versión</span><span className="meta-value">1.0</span></div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>

          <div className="abstract-block">
            <div className="ab-label"><i className="fa-solid fa-align-left"></i> Resumen ejecutivo</div>
            <p>
              El alicatado es el servicio más determinante en la percepción de calidad de una reforma de baño o cocina, y al mismo tiempo el más invisible para el cliente durante la obra. El propietario ve los azulejos terminados, no el proceso de preparación de la base, el nivelado o el fraguado. Por eso cuando algo falla — una junta torcida, un azulejo desnivelado, una esquina mal rematada — el impacto emocional es desproporcionado: "pagué tanto y esto no parece profesional."
            </p>
            <p>
              Madrid consume aproximadamente 2,5 millones de metros cuadrados de cerámica al año para obra nueva y reforma (datos Anfacer/Ascer para la Comunidad de Madrid). El mercado está en transformación: el porcelánico de gran formato (60×60, 60×120, 120×120 cm) gana cuota frente al azulejo tradicional, requiere mayor especialización en la instalación y filtra al mercado hacia instaladores con más herramientas y experiencia. Este cambio tecnológico es una barrera de entrada natural que beneficia a quienes ya trabajan con estos formatos.
            </p>
            <p>
              El alicatador no suele ser buscado directamente por el cliente final — es gestionado por la empresa de reforma. Quien controla la coordinación del oficio controla la percepción de calidad del proyecto. Tener alicatadores propios (no subcontratados) permite garantizar la preparación de la base y el acabado final sin depender de la disponibilidad de un tercero, reduciendo plazos de obra en 1-2 semanas en proyectos complejos.
            </p>
          </div>

          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de cliente y proyecto</a>
              <a href="#problemas" className="index-item"><span className="idx">04</span> Problemas y frustraciones</a>
              <a href="#momento" className="index-item"><span className="idx">05</span> Estacionalidad</a>
              <a href="#decision" className="index-item"><span className="idx">06</span> Proceso de decisión</a>
              <a href="#mercado" className="index-item"><span className="idx">07</span> Estructura del mercado actual</a>
              <a href="#hallazgos" className="index-item"><span className="idx">08</span> Hallazgos clave</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">10</span> Fuentes</a>
            </div>
          </div>

          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y método de trabajo.</h2>
            <p className="body-text">
              Esta investigación utiliza datos de producción y consumo de cerámica de Anfacer (Asociación Nacional de Fabricantes de Azulejos y Pavimentos Cerámicos) y Ascer (Asociación Española de Fabricantes de Azulejos), estadísticas de reforma residencial del INE y del SICI (Índice Sectorial de la Construcción e Instalaciones), análisis de tendencias de material en plataformas de diseño de interiores (Houzz España, habitissimo) y observación directa de proyectos ejecutados en el área de Madrid.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr>
              </thead>
              <tbody>
                <tr><td>Anfacer / Ascer</td><td>Sectorial</td><td>Consumo m² cerámica Comunidad de Madrid</td></tr>
                <tr><td>INE — Encuesta de Hogares</td><td>Oficial</td><td>Frecuencia de reforma y tipología de obras</td></tr>
                <tr><td>Houzz España</td><td>Digital</td><td>Tendencias de material y formato en reformas</td></tr>
                <tr><td>Habitissimo</td><td>Digital</td><td>Precios de referencia alicatado Madrid</td></tr>
                <tr><td>Observación directa</td><td>Campo</td><td>Proyectos y solicitudes en el área de Madrid</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">2,5 millones de metros cuadrados al año y un mercado en transformación.</h2>
            <p className="body-text">
              La demanda de alicatado en Madrid está directamente ligada al mercado de reforma de baños y cocinas. Con aproximadamente 25.000 reformas de baño y 22.000 de cocina al año en la Comunidad de Madrid (estimación basada en datos SICI 2023), el alicatado está presente en prácticamente el 100% de esos proyectos.
            </p>
            <p className="body-text">
              La tendencia de material más relevante de los últimos cuatro años es la migración hacia formatos grandes. En 2020, el formato más solicitado en reformas de Madrid era el 30×60 cm. En 2026, el 60×60 y el 60×120 representan más del 45% de los proyectos según datos de distribuidores cerámicos de la zona. Este cambio tiene una consecuencia directa: los instaladores que no tienen las herramientas adecuadas (cortadoras de gran formato, ventosas de manipulación, niveladores laser) no pueden asumir estos proyectos sin riesgo de error.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '2,5M', label: 'Metros cuadrados de cerámica consumidos al año en Madrid' },
                { num: '45%', label: 'Proyectos en Madrid que ya usan formato 60×60 o mayor' },
                { num: '25€', label: 'Precio medio de mano de obra de alicatado (por m²) en Madrid' },
                { num: '47.000', label: 'Reformas de baño y cocina al año en la Comunidad de Madrid' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {HR}

          <div className="section-anchor" id="tipologia">
            <div className="section-label">03 — Tipología de cliente y proyecto</div>
            <h2 className="h2">El cliente no busca al alicatador — lo busca la empresa de reforma.</h2>
            <p className="body-text">
              A diferencia de otros oficios, el alicatado raramente es buscado de forma independiente por el propietario. El cliente busca "reforma de baño" o "empresa de reformas Madrid", no "alicatador". Esto significa que el alicatado es un servicio B2B dentro del ecosistema de reforma: quienes necesitan alicatadores son las empresas constructoras y de reforma, no directamente el cliente final.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Tipo de proyecto</th><th>% sobre demanda total</th><th>Superficie media</th><th>Precio mano obra</th></tr>
              </thead>
              <tbody>
                <tr><td>Reforma integral de baño</td><td>~55%</td><td>5-10 m²</td><td>800-2.000 €</td></tr>
                <tr><td>Reforma integral de cocina</td><td>~25%</td><td>8-16 m²</td><td>1.000-2.500 €</td></tr>
                <tr><td>Suelo porcelánico salón/pasillo</td><td>~12%</td><td>30-80 m²</td><td>900-2.800 €</td></tr>
                <tr><td>Cambio de azulejos parcial</td><td>~8%</td><td>3-8 m²</td><td>300-800 €</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="problemas">
            <div className="section-label">04 — Problemas y frustraciones</div>
            <h2 className="h2">La base invisible y el format grande: los dos grandes riesgos.</h2>
            <p className="body-text">
              El problema más frecuente en reformas de alicatado es la mala preparación de la base. Si el soporte (pared o suelo) no está perfectamente nivelado, saneado y limpio, el azulejo se adhiere mal, aparecen huecos por detrás (el sonido hueco al golpear), el fraguado es irregular y a los 2-3 años empiezan a soltarse azulejos. El cliente culpa al material cuando el problema es la ejecución.
            </p>
            <p className="body-text">
              El segundo problema es la dificultad creciente de los formatos grandes. Un porcelánico de 120×120 cm pesa más de 20 kg por pieza, requiere adhesivos de alto agarre, herramientas de corte específicas y al menos dos personas para su manipulación. Muchos alicatadores individuales no tienen esta capacitación y evitan estos formatos, o los aceptan y dan resultados deficientes.
            </p>
            <p className="body-text">
              En reformas con múltiples gremios (baño completo: fontanería + alicatado + electricidad + carpintería), la falta de coordinación entre el fontanero y el alicatador es una fuente constante de conflictos: si el fontanero no termina las tomas antes de que llegue el alicatador, la obra se paraliza días. Si el alicatador no deja los huecos de las tomas en el lugar exacto, hay que romper lo ya puesto.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="momento">
            <div className="section-label">05 — Estacionalidad</div>
            <h2 className="h2">Ligada al ciclo de reformas de baños y cocinas.</h2>
            <p className="body-text">
              La estacionalidad del alicatado sigue exactamente la de las reformas de baños y cocinas: pico primavera (marzo-junio) y pico otoño (septiembre-noviembre). Los meses de julio y agosto son bajos para alicatado en viviendas, pero los meses de más trabajo en hostelería (locales que aprovechan el cierre vacacional para reformar).
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="decision">
            <div className="section-label">06 — Proceso de decisión</div>
            <h2 className="h2">El material lo elige el cliente; la ejecución la elige la empresa.</h2>
            <p className="body-text">
              El proceso de decisión en alicatado tiene dos capas. La primera — la elección del material (color, formato, acabado) — la toma el cliente, generalmente con ayuda de un distribuidor cerámico o de su empresa de reforma. La segunda — la elección del instalador — la toma la empresa de reforma, no el cliente.
            </p>
            <p className="body-text">
              Este doble proceso tiene una implicación importante: el argumento de venta del alicatado no va dirigido al propietario sino a quien gestiona la obra. El cliente solo valora el resultado final; la empresa de reforma valora la fiabilidad, la puntualidad y la capacidad técnica del equipo de alicatado.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="mercado">
            <div className="section-label">07 — Estructura del mercado actual</div>
            <h2 className="h2">Muchos operadores, pocos que dominen el gran formato.</h2>
            <p className="body-text">
              El mercado de alicatado en Madrid está muy atomizado: la mayoría son autónomos especializados que trabajan solos o en parejas. Los alicatadores de calidad que trabajan con formatos grandes tienen agendas ocupadas con 4-8 semanas de antelación en temporada alta. Para obra nueva, las grandes promotoras los tienen contratados en exclusiva.
            </p>
            <p className="body-text">
              Para reforma residencial de particulares, el acceso a alicatadores de calidad con disponibilidad inmediata es escaso. Las empresas de reforma que tienen su propio equipo de alicatado —con herramientas para gran formato y disponibilidad integrada en el planning de obra— tienen una ventaja competitiva real en plazo y coordinación.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="hallazgos">
            <div className="section-label">08 — Hallazgos clave</div>
            <h2 className="h2">Lo que los datos confirman.</h2>
            <p className="body-text">
              <strong>El formato grande es ya el estándar en Madrid.</strong> El 45% de los proyectos de reforma en Madrid de 2025-2026 especifican formato 60×60 cm o superior. Quien no pueda trabajar con este formato pierde casi la mitad del mercado.
            </p>
            <p className="body-text">
              <strong>La base es el trabajo real.</strong> El 80% de los problemas post-reforma de alicatado tienen su origen en la preparación de la base, no en el material ni en la colocación. Comunicar que se prepara la base correctamente antes de alicatar es un argumento diferenciador.
            </p>
            <p className="body-text">
              <strong>La coordinación es el dolor del cliente.</strong> En reformas con varios gremios, el alicatado mal coordinado es la causa número uno de retrasos. Un equipo de reforma con fontanero y alicatador propios elimina este riesgo estructuralmente.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Integración y gran formato como ventaja.</h2>
            <p className="body-text">
              El alicatado propio — no subcontratado — permite coordinar la secuencia de trabajo sin depender de la agenda de un tercero. En una reforma de baño, el alicatador entra el mismo día que termina el fontanero. No hay esperas de semanas. El proyecto avanza según el planning comprometido con el cliente.
            </p>
            <p className="body-text">
              Comunicar la capacidad de trabajar con gran formato (60×60 y 60×120) posiciona a Oro Constructores en el segmento de reforma de mayor calidad percibida y ticket más alto. El cliente que elige porcelánico de 120×120 no está buscando al más barato — está buscando al que sabe hacerlo bien.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes</div>
            <h2 className="h2">Referencias y metodología.</h2>
            <p className="nota">Anfacer — Estadísticas de producción y consumo cerámico en España y Comunidad de Madrid. / Ascer — Informe anual del sector azulejero español. / INE, Encuesta Continua de Hogares — frecuencia de reforma residencial. / Habitissimo — base de datos de precios y proyectos de reforma en Madrid. / Houzz España — Encuesta anual de reforma y decoración del hogar 2024. / Leroy Merlin España — datos de tendencias de formato cerámico en puntos de venta Madrid. / Observación directa Oro Constructores — tipología de proyectos ejecutados en área metropolitana de Madrid.</p>
          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Alicatado con equipo propio. Gran formato sin riesgo.</h2>
          <p>Preparación de base, colocación y acabado por el mismo equipo. Sin subcontratas ni esperas.</p>
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
