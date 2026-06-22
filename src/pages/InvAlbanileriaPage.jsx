import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvAlbanileriaPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 9</div>
          <h1>Albañilería y estructura en Madrid: el oficio base de toda reforma</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>La albañilería es el punto de partida de cualquier obra. Esta investigación analiza la demanda estructural de albañilería en Madrid, los tres perfiles de cliente, los precios de referencia y por qué la escasez de albañiles para obra pequeña es la principal brecha del mercado de reformas residenciales.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Construcción y Reforma Residencial</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">INE · Ministerio de Fomento · Observatorio Rehabilitación · Habitissimo · Seopan</span></div>
            <div className="meta-item"><span className="meta-label">Versión</span><span className="meta-value">1.0</span></div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* ABSTRACT */}
          <div className="abstract-block">
            <div className="ab-label"><i className="fa-solid fa-align-left"></i> Resumen ejecutivo</div>
            <p>Madrid cuenta con aproximadamente 3,2 millones de viviendas, de las cuales el 62% fueron construidas antes de 1980. Este parque residencial envejece sin haber sido reformado de forma estructural en la mayoría de los casos, lo que genera una demanda continua y estructural de trabajos de albañilería básica: reparación de grietas, tratamiento de desprendimientos, nivelación de soleras, derribos y redistribución de espacios. No se trata de demanda puntual — es la consecuencia directa del estado del parque inmobiliario madrileño.</p>
            <p>La albañilería es el oficio transversal de toda reforma. Ningún trabajo de reforma de baño, cocina, vivienda o local puede comenzar sin albañilería: hay que derribar tabiques, levantar soleras, preparar soportes, tratar humedades de origen estructural. El mercado total de reformas residenciales en Madrid se estima en torno a 600 millones de euros anuales, y la albañilería está presente en prácticamente la totalidad de esos proyectos, ya sea como servicio principal o como trabajo previo habilitante.</p>
            <p>La brecha central del mercado es clara: el cliente con necesidades de albañilería de obra pequeña — reparar una grieta, derribar un tabique, sustituir una solera dañada — no encuentra proveedor. Los albañiles autónomos con experiencia prefieren obra nueva o reforma integral de larga duración. Las empresas de construcción no bajan a trabajos unitarios. El cliente queda en un limbo que nadie atiende bien, y ese limbo es exactamente donde Oro Constructores tiene la ventaja más directa: 30 años de experiencia propia en el oficio base, sin depender de subcontratas.</p>
          </div>

          {/* INDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de cliente</a>
              <a href="#problemas" className="index-item"><span className="idx">04</span> Problemas y frustraciones principales</a>
              <a href="#precios" className="index-item"><span className="idx">05</span> Precios de referencia</a>
              <a href="#estacionalidad" className="index-item"><span className="idx">06</span> Estacionalidad y ciclo de demanda</a>
              <a href="#mercado" className="index-item"><span className="idx">07</span> Estructura del mercado actual</a>
              <a href="#hallazgos" className="index-item"><span className="idx">08</span> Hallazgos clave</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">10</span> Fuentes y metodología</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y método de trabajo.</h2>
            <p className="body-text">Esta investigación combina datos estadísticos publicados por organismos oficiales con análisis de comportamiento de búsqueda online y observación directa del mercado de reformas en Madrid. Las fuentes estadísticas principales son el Censo de Edificios del INE (actualización 2021), los datos de licencias de obras del Ayuntamiento de Madrid, los informes anuales de Seopan sobre construcción residencial y los datos de la Asociación de Promotores Inmobiliarios de Madrid (Asprima).</p>
            <p className="body-text">El análisis de comportamiento del cliente se basa en datos de plataformas de comparación de presupuestos (Habitissimo, Certicalia) y en la experiencia directa de Oro Constructores en el mercado de reformas de la Comunidad de Madrid durante más de 30 años. Los precios de referencia recogen tarifas actuales de mercado en Madrid a junio de 2026, sin IVA.</p>

            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Dato principal utilizado</th></tr></thead>
              <tbody>
                <tr><td>INE — Censo de Edificios 2021</td><td>Estadística oficial</td><td>Antigüedad del parque de viviendas en Madrid</td></tr>
                <tr><td>Ministerio de Fomento</td><td>Estadística oficial</td><td>Licencias de reforma y rehabilitación en Comunidad de Madrid</td></tr>
                <tr><td>Observatorio de la Rehabilitación</td><td>Informe sectorial</td><td>Volumen estimado del mercado de reformas por tipo de trabajo</td></tr>
                <tr><td>Habitissimo / Certicalia</td><td>Plataformas de mercado</td><td>Volumen de solicitudes de presupuesto por categoría</td></tr>
                <tr><td>Seopan</td><td>Patronal de construcción</td><td>Actividad en obra residencial de reforma en Madrid</td></tr>
                <tr><td>Experiencia directa Oro Constructores</td><td>Observación de mercado</td><td>Perfiles de cliente, precios reales, patrones de demanda</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 CONTEXTO */}
          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">3,2 millones de viviendas, el 62% anteriores a 1980.</h2>
            <p className="body-text">La Comunidad de Madrid tiene aproximadamente 3,2 millones de viviendas en su parque residencial, según los datos del Censo de Edificios del INE. De ellas, el 62% fueron construidas antes de 1980, lo que significa que llevan más de 40 años expuestas a ciclos de temperatura, humedad, movimientos del terreno y uso intensivo sin haber pasado por una reforma estructural completa en la mayoría de los casos.</p>
            <p className="body-text">Esta antigüedad del parque no es un dato abstracto: se traduce directamente en incidencia de patología constructiva. Las grietas por asentamiento diferencial son habituales en edificios de los años 50 y 60 construidos con técnicas que no contemplaban el comportamiento sísmico ni la dilación térmica moderna. Los desprendimientos de revestimientos y enlucidos son frecuentes en fachadas y zonas húmedas de más de 30 años. Las soleras de mortero sin capa de rodadura adecuada presentan fisuras y hundimientos puntuales que requieren intervención.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '3,2M', label: 'viviendas en la Comunidad de Madrid' },
                { num: '62%', label: 'construidas antes de 1980 — mayor incidencia de patología estructural menor' },
                { num: '600M€', label: 'mercado estimado de reformas residenciales en Madrid al año' },
                { num: '100%', label: 'de las reformas requieren albañilería en alguna fase del proyecto' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">El mercado de reformas residenciales en Madrid se estima en torno a 600 millones de euros anuales, incluyendo tanto obra de mejora estética (pintura, alicatado, carpintería) como obra con componente estructural (albañilería, fontanería, electricidad). La albañilería, como oficio habilitante de todo lo demás, está presente en prácticamente la totalidad de los proyectos de reforma, lo que la convierte en la disciplina de mayor volumen transversal del sector.</p>

            <p className="body-text">Las licencias de obra menor en Madrid capital superan las 80.000 anuales en los últimos años, con un crecimiento sostenido desde 2021 impulsado por la reactivación del mercado inmobiliario y el envejecimiento del parque existente. No toda obra menor es albañilería, pero la mayoría la requiere.</p>
          </div>

          {HR}

          {/* 03 TIPOLOGÍA */}
          <div className="section-anchor" id="tipologia">
            <div className="section-label">03 — Tipología de cliente</div>
            <h2 className="h2">Tres perfiles con necesidades y urgencias distintas.</h2>
            <p className="body-text">El cliente de albañilería en Madrid no es un perfil homogéneo. Hay al menos tres perfiles diferenciados con motivaciones, plazos y criterios de selección distintos. Conocer estas diferencias es esencial para adaptar la propuesta de valor y el argumento de venta en cada caso.</p>

            <h3 style={h3style}>Perfil A — Propietario con incidencia puntual</h3>
            <p className="body-text">Es el perfil más frecuente y el más urgente. Tiene una grieta en la pared del salón que lleva ignorando dos años y que de repente se ha hecho mayor. O un desprendimiento de revestimiento en el techo del baño. O un hundimiento en la solera de la cocina. No está planificando — está reaccionando a un problema que ya no puede ignorar. Su motivación es eliminar la incidencia, no emprender un proyecto. Busca a alguien que "venga, lo mire y lo arregle", sin necesidad de una obra mayor. El mayor obstáculo que encuentra es que nadie quiere ir a por un trabajo pequeño.</p>

            <h3 style={h3style}>Perfil B — Propietario iniciando una reforma</h3>
            <p className="body-text">Está planificando una reforma de baño, cocina o vivienda completa. Sabe que necesita albañilería — derribo del tabique del baño, nueva distribución, preparación de paredes para alicatado — pero lo gestiona como parte de un proyecto integral. No busca un albañil; busca una empresa que gestione todo el proyecto y que tenga el albañil incluido. La albañilería es para este cliente un oficio invisible: no le preocupa el oficio sino el resultado final de la reforma. El proveedor que ofrece el proyecto completo sin necesidad de coordinar oficios por separado tiene una ventaja decisiva.</p>

            <h3 style={h3style}>Perfil C — Comunidad de propietarios</h3>
            <p className="body-text">La comunidad de propietarios tiene problemas de albañilería en zonas comunes: grietas en la fachada, desprendimientos en el portal, deterioro de la solera del garaje, fisuras en el patio interior. El proceso de decisión es más largo — requiere junta de propietarios y aprobación por mayoría — pero el ticket es significativamente mayor y la decisión es menos sensible al precio si el proveedor tiene referencias sólidas. El administrador de fincas es el prescriptor clave: es quien propone empresas, solicita presupuestos y cuya recomendación tiene más peso en la decisión de la junta.</p>

            <table className="r-table">
              <thead><tr><th>Perfil</th><th>Motivación principal</th><th>Proceso de decisión</th><th>Ticket orientativo</th></tr></thead>
              <tbody>
                <tr><td>Propietario con incidencia puntual</td><td>Resolver un problema existente — grieta, desprendimiento, hundimiento</td><td>Busca en Google o por recomendación. Llama al primero que responde. Decisión en 1–3 días.</td><td>200–1.200€</td></tr>
                <tr><td>Propietario iniciando reforma</td><td>Iniciar un proyecto de mejora — baño, cocina, redistribución</td><td>Pide 2–3 presupuestos. Valora empresa que gestione todo. Decisión en 1–3 semanas.</td><td>3.000–20.000€</td></tr>
                <tr><td>Comunidad de propietarios</td><td>Reparar patología en zonas comunes — fachada, portal, garaje</td><td>El administrador solicita presupuestos. La junta vota. Plazo: 4–8 semanas desde el primer contacto.</td><td>2.000–30.000€</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 04 PROBLEMAS */}
          <div className="section-anchor" id="problemas">
            <div className="section-label">04 — Problemas y frustraciones principales</div>
            <h2 className="h2">La brecha: nadie atiende bien la obra pequeña.</h2>
            <p className="body-text">La principal frustración del cliente de albañilería en Madrid no es el precio ni la calidad técnica — es la disponibilidad. El mercado tiene una brecha estructural: los profesionales cualificados de albañilería no quieren trabajos pequeños. Los albañiles autónomos con experiencia prefieren obras de nueva construcción o reformas integrales de larga duración, donde el rendimiento diario es mayor y la logística más sencilla. Para obra menor — reparación de una grieta, derribo de un tabique, reparación de una solera parcial — el mercado no tiene respuesta eficiente.</p>

            {[
              ['Nadie quiere ir a por trabajo pequeño', 'El cliente con una grieta que reparar llama a varios albañiles, no consigue cita o recibe presupuestos desproporcionados porque el profesional no quiere ir. El resultado: el cliente espera meses, la patología empeora, y cuando finalmente alguien va el trabajo es mayor. La falta de atención a la obra pequeña es la brecha de servicio más clara del mercado de albañilería en Madrid.'],
              ['El cliente no sabe si la grieta es grave o leve', 'El propietario no distingue entre una fisura superficial de dilatación — sin riesgo estructural — y una grieta por asentamiento diferencial que puede indicar un problema real. Esa incertidumbre genera angustia y urgencia subjetiva. El proveedor que llega, diagnostica con claridad y explica qué es cada cosa resuelve un problema emocional además del técnico. El cliente que recibe una explicación honesta ("esto es superficial, lo arreglamos en dos horas") queda más satisfecho que el que recibe una reparación sin explicación.'],
              ['Los plazos se alargan con otros oficios', 'En reformas integrales, la albañilería es el primer oficio en entrar. Si el derribo se retrasa, todo el proyecto se retrasa: el fontanero, el electricista, el alicatador y el pintor dependen de que la albañilería haya terminado. El proveedor que no cumple el plazo de la fase de albañilería es el que retrasa toda la obra. Este es el riesgo que más preocupa al cliente que gestiona una reforma por fases.'],
              ['Presupuestos poco detallados generan desconfianza', 'El cliente de albañilería recibe con frecuencia presupuestos con desglose mínimo: "derribo de tabique + gestión de escombros, 500€". No sabe qué incluye, qué queda fuera, si el presupuesto puede crecer si aparece algo imprevisto. Un presupuesto bien detallado — incluyendo gestión de escombros, horas estimadas, materiales incluidos y exclusiones explícitas — genera más confianza que un precio bajo sin desglose.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 05 PRECIOS */}
          <div className="section-anchor" id="precios">
            <div className="section-label">05 — Precios de referencia</div>
            <h2 className="h2">Tarifas actuales de mercado en Madrid — junio 2026.</h2>
            <p className="body-text">Los precios de albañilería en Madrid son relativamente homogéneos para trabajos estándar. La variación entre presupuestos para el mismo trabajo suele ser del 20–30%, principalmente por diferencias en el coste de gestión de escombros, en si los materiales están incluidos y en el margen del proveedor según su nivel de demanda en ese momento. Los precios siguientes son orientativos, sin IVA, para trabajos en Madrid capital.</p>

            <table className="r-table">
              <thead><tr><th>Trabajo</th><th>Precio orientativo (sin IVA)</th><th>Observaciones</th></tr></thead>
              <tbody>
                <tr><td>Reparación de grieta superficial</td><td>200–400€</td><td>Incluye saneado, malla de refuerzo, masilla y pintura de acabado. Trabajo de 1 día.</td></tr>
                <tr><td>Reparación de grieta estructural menor</td><td>400–800€</td><td>Requiere análisis previo, cosido con grapas metálicas o resinas, sellado y acabado. 1–2 días.</td></tr>
                <tr><td>Derribo de tabique de ladrillo (por m²)</td><td>25–45€/m²</td><td>Incluye gestión de escombros. Tabique de 10m² = 250–450€. Añadir coste de enlucido posterior.</td></tr>
                <tr><td>Tabique nuevo de ladrillo hueco (por m²)</td><td>35–60€/m²</td><td>Incluye material y mano de obra. Sin acabado. Con pladur: 20–35€/m².</td></tr>
                <tr><td>Reforma o reparación de solera (por m²)</td><td>25–45€/m²</td><td>Demolición, nueva capa de mortero, nivelación. Sin acabado cerámico.</td></tr>
                <tr><td>Reparación de desprendimiento en techo</td><td>150–500€</td><td>Variable según superficie afectada y causa (humedad, vibración). Incluye nuevo enlucido.</td></tr>
                <tr><td>Trasdosado de fachada interior</td><td>30–55€/m²</td><td>Aislamiento + pladur o ladrillo. Mejora térmica y acústica.</td></tr>
                <tr><td>Enfoscado de pared exterior (por m²)</td><td>20–40€/m²</td><td>Mortero de cemento. Sin pintura. Trabajos de altura requieren andamio: consultar aparte.</td></tr>
              </tbody>
            </table>

            <p className="nota">Los precios no incluyen IVA (21%). La gestión de escombros puede suponer 80–200€ adicionales según volumen y distancia al punto de vertido. Los trabajos que requieren andamio exterior tienen un coste de alquiler de andamio de 200–600€/semana adicional.</p>
          </div>

          {HR}

          {/* 06 ESTACIONALIDAD */}
          <div className="section-anchor" id="estacionalidad">
            <div className="section-label">06 — Estacionalidad y ciclo de demanda</div>
            <h2 className="h2">Demanda estable todo el año con un pico de planificación pre-verano.</h2>
            <p className="body-text">A diferencia de la pintura o los trabajos de exterior, la albañilería no tiene una estacionalidad pronunciada. Es un oficio de interior en la mayoría de sus aplicaciones — los derribos, los tabiques nuevos y las reparaciones de grietas interiores se pueden realizar en cualquier época del año. La demanda es relativamente estable y continua.</p>
            <p className="body-text">El único patrón estacional que se observa de forma consistente es una concentración de planificación de reformas integrales en los meses de marzo, abril y mayo. El cliente que quiere reformar su vivienda antes del verano inicia el proceso de presupuestación en primavera para que los derribos comiencen en mayo-junio. Esto crea una concentración de demanda de albañilería en los meses de mayo a julio, cuando las reformas integrales están en su fase inicial.</p>
            <p className="body-text">Los trabajos en exterior — enfoscados de fachada, reparación de terrazas, impermeabilización de cubiertas — sí tienen estacionalidad clara: se concentran en primavera y otoño, evitando las lluvias de noviembre-febrero y el calor extremo de julio-agosto que puede comprometer el fraguado del mortero.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de trabajo</th><th>Mejor época</th><th>Peor época</th></tr></thead>
              <tbody>
                <tr><td>Derribos y distribución interior</td><td>Todo el año — sin restricción</td><td>No aplica (interior)</td></tr>
                <tr><td>Grietas y reparaciones interiores</td><td>Todo el año — sin restricción</td><td>No aplica (interior)</td></tr>
                <tr><td>Enfoscados de fachada</td><td>Primavera y otoño (10–20°C, sin lluvia)</td><td>Julio-agosto (calor) y noviembre-febrero (lluvia)</td></tr>
                <tr><td>Soleras exteriores o garajes</td><td>Primavera — fraguado óptimo</td><td>Invierno con heladas</td></tr>
                <tr><td>Trabajos en terrazas y cubiertas</td><td>Primavera y septiembre-octubre</td><td>Invierno (lluvia) y agosto (calor extremo)</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 07 MERCADO ACTUAL */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">07 — Estructura del mercado actual</div>
            <h2 className="h2">Mercado muy fragmentado, con brecha clara en obra pequeña.</h2>
            <p className="body-text">El mercado de albañilería en Madrid está dominado por tres tipos de proveedores: autónomos individuales, pequeñas cuadrillas (2–4 personas) y empresas de construcción o reforma que tienen albañilería como uno de sus oficios. No existe ningún actor que domine el mercado — es altamente atomizado y sin marcas con reconocimiento transversal.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de proveedor</th><th>Fortalezas</th><th>Déficits</th></tr></thead>
              <tbody>
                <tr><td>Albañil autónomo individual</td><td>Precio ajustado. Trato directo. Disponible para cualquier tipo de trabajo.</td><td>Prefiere obra grande. Difícil de contratar para reparaciones puntuales. Sin garantía formal. Unipersonal — si está ocupado, no puede atender.</td></tr>
                <tr><td>Cuadrilla pequeña (2–4 albañiles)</td><td>Mayor capacidad. Puede hacer obra mediana en poco tiempo.</td><td>Sin marca. Sin proceso estandarizado. Calidad variable. No dan facturas en todos los casos.</td></tr>
                <tr><td>Empresa de reformas con albañilería propia</td><td>Gestión integral. La albañilería está integrada en el proyecto completo. Factura y garantías formales.</td><td>Precio más alto. Mínimo de obra — no bajan a trabajos muy pequeños.</td></tr>
                <tr><td>Empresa de construcción grande</td><td>Capacidad para obra de gran volumen. Solvencia y garantías.</td><td>No trabaja para particulares en obra pequeña. Presupuesto mínimo elevado.</td></tr>
              </tbody>
            </table>

            <p className="body-text">La brecha de mercado más clara está en el cliente que necesita un trabajo de albañilería de entre 200 y 1.500€: suficientemente grande como para que no quiera hacerlo él mismo, suficientemente pequeño como para que ningún proveedor profesional quiera hacerlo con margen. Esta franja es la que genera más frustración en el mercado y donde hay menos competencia real.</p>
          </div>

          {HR}

          {/* 08 HALLAZGOS */}
          <div className="section-anchor" id="hallazgos">
            <div className="section-label">08 — Hallazgos clave</div>
            <h2 className="h2">Lo que revela el análisis del mercado.</h2>
            <div className="conclusion-grid">
              <div className="conclusion-cell"><div className="c-num">01</div><h4>El 62% del parque residencial tiene más de 40 años</h4><p>Las viviendas construidas antes de 1980 en Madrid tienen mayor incidencia de grietas, desprendimientos y problemas de solera. La demanda de albañilería de mantenimiento es estructural y crecerá con el envejecimiento del parque.</p></div>
              <div className="conclusion-cell"><div className="c-num">02</div><h4>La albañilería está en el 100% de las reformas</h4><p>No existe reforma de baño, cocina, vivienda o local que no requiera albañilería en alguna fase. Es el oficio habilitante de toda la cadena. Dominar este oficio es dominar el acceso a todos los proyectos de reforma.</p></div>
              <div className="conclusion-cell"><div className="c-num">03</div><h4>La brecha de obra pequeña es la oportunidad principal</h4><p>El cliente con necesidad de reparación puntual — 200 a 1.500€ — no encuentra proveedor profesional que quiera atenderle. Cubrir este segmento genera captación de clientes que, en muchos casos, derivan en reformas de mayor envergadura.</p></div>
              <div className="conclusion-cell"><div className="c-num">04</div><h4>La albañilería es invisible para el cliente final</h4><p>El cliente no busca "albañil" — busca "empresa de reformas". La albañilería propia es una ventaja competitiva para Oro Constructores solo si se comunica en términos de resultado: menor precio, mayor velocidad, sin coordinación de terceros.</p></div>
            </div>
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">La albañilería propia es la ventaja competitiva más directa.</h2>
            <p className="body-text">Oro Constructores tiene más de 30 años de experiencia en albañilería. No es un suboficio que coordinamos — es el oficio raíz del negocio. Eso significa tres ventajas concretas sobre la competencia que subcontrata:</p>

            {[
              ['Velocidad de respuesta sin coordinar terceros', 'Cuando un cliente necesita derribar un tabique o reparar una grieta, podemos ir nosotros. No hay que esperar a que el albañil subcontratado tenga disponibilidad. Eso reduce el tiempo de inicio de cualquier proyecto en 1–3 semanas respecto a un competidor que externaliza el oficio.'],
              ['Precio más ajustado sin intermediario', 'El competidor que subcontrata la albañilería paga al albañil y le añade su margen. Nosotros ejecutamos el trabajo directamente. En trabajos donde la albañilería representa el 30–50% del coste total de la reforma, ese diferencial de precio es significativo y permite ganar presupuestos que otros no pueden igualar sin sacrificar margen.'],
              ['Calidad y coordinación garantizadas', 'Cuando la albañilería y el resto de la obra la hace el mismo equipo, la coordinación es perfecta. No hay fricciones de "el albañil no dejó la pared lista para alicatar" o "el derribo generó polvo que dañó el trabajo eléctrico previo". La responsabilidad es única y la calidad de la base determina la calidad de todo lo que viene después.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <p className="body-text">La estrategia de captación recomendada para este oficio es el servicio de reparaciones puntuales: atender al cliente con la grieta o el desprendimiento que nadie quiere reparar. El coste de ir es bajo, la satisfacción del cliente es alta y la probabilidad de que ese cliente derive en una reforma mayor — o refiera a Oro Constructores a conocidos — es del 40–60% según nuestra experiencia directa.</p>
          </div>

          {HR}

          {/* 10 FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes y metodología</div>
            <h2 className="h2">Referencias y base documental.</h2>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>INE — Censo de Edificios y Viviendas 2021</td><td>Antigüedad del parque residencial en Comunidad de Madrid. 3,2M de viviendas, 62% anteriores a 1980.</td></tr>
                <tr><td>Ministerio de Transportes, Movilidad y Agenda Urbana</td><td>Licencias de obra menor en Madrid. Estadísticas anuales de actividad rehabilitadora.</td></tr>
                <tr><td>Observatorio de la Rehabilitación de la Edificación (ORCA)</td><td>Volumen estimado del mercado de reformas por tipo de intervención y comunidad autónoma.</td></tr>
                <tr><td>Seopan — Asociación de Empresas Constructoras y Concesionarias</td><td>Actividad en obra residencial y de reforma. Informe anual del sector de la construcción 2025.</td></tr>
                <tr><td>Habitissimo — Datos de mercado 2024–2025</td><td>Volumen de solicitudes de presupuesto por categoría de servicio. Precios medios de mercado.</td></tr>
                <tr><td>Experiencia directa Oro Constructores</td><td>Precios de referencia en Madrid a junio 2026. Perfiles de cliente observados. Patrones de demanda.</td></tr>
              </tbody>
            </table>
            <p className="nota">Esta investigación es un documento interno de análisis de mercado elaborado por Oro Constructores. Los datos de fuentes oficiales corresponden a las publicaciones más recientes disponibles a junio de 2026. Los precios de referencia son orientativos y pueden variar según las características específicas de cada trabajo.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Albañilería propia.<br />Sin intermediarios, sin esperas.</h2>
          <p>30 años de oficio. Reparaciones puntuales o reforma completa — el mismo equipo desde el derribo hasta el acabado.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg"><i className="fa-solid fa-phone"></i> Contactar</Link>
          </div>
        </div>
      </section>
    </>
  )
}
