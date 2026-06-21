import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvReformaPisoPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 4</div>
          <h1>Reforma integral de piso en Madrid: mercado, perfiles y claves de captación</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Análisis del mercado de reforma integral residencial en la Comunidad de Madrid: volumen, tipología de cliente, proceso de decisión, puntos de dolor con la oferta actual y posicionamiento estratégico para contratistas.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Reformas residenciales — Reforma integral</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">INE · SICI · Habitissimo · Ministerio de Vivienda</span></div>
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
            <p>La reforma integral de piso es el proyecto de construcción residencial de mayor ticket en el segmento privado en España. En la Comunidad de Madrid se realizan aproximadamente 40.000 reformas integrales al año, con un ticket medio que oscila entre 25.000 y 60.000 euros según la superficie y el nivel de acabados. El mercado mueve en torno a 1.200 millones de euros anuales solo en la región madrileña.</p>
            <p>El proceso de decisión es el más largo del sector residencial: entre 6 y 18 meses desde que el propietario identifica la necesidad hasta que firma el contrato. Durante ese período, el cliente compara entre 3 y 5 presupuestos, investiga empresas en Google Maps y plataformas de reviews, y consulta foros y grupos de vecinos. La decisión final se basa más en la confianza en la empresa y en la claridad del proceso que en el precio unitario.</p>
            <p>El principal problema que el mercado no resuelve bien es la fragmentación de gremios: el cliente que reforma un piso tiene que coordinar albañil, electricista, fontanero, alicatador, carpintero y pintor. Si cada uno es un autónomo distinto, el propietario se convierte de facto en el director de obra. El resultado habitual son plazos que se doblan y presupuestos que crecen un 30–40% con "extras". Posicionarse como empresa "llave en mano" —un solo interlocutor, todos los gremios propios, plazo garantizado en contrato— es la respuesta directa al problema más frecuente del cliente.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#volumen" className="index-item"><span className="idx">02</span> Volumen de mercado</a>
              <a href="#perfiles" className="index-item"><span className="idx">03</span> Perfiles de cliente</a>
              <a href="#valoraciones" className="index-item"><span className="idx">04</span> Qué valoran y qué temen</a>
              <a href="#problemas" className="index-item"><span className="idx">05</span> Problemas con la oferta actual</a>
              <a href="#decision" className="index-item"><span className="idx">06</span> Ciclo de decisión</a>
              <a href="#seasonality" className="index-item"><span className="idx">07</span> Estacionalidad</a>
              <a href="#competencia" className="index-item"><span className="idx">08</span> Oferta del mercado</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">—</span> Fuentes</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y alcance del estudio.</h2>
            <p className="body-text">Este estudio utiliza datos secundarios de fuentes oficiales, sectoriales y de plataformas digitales de contratación de servicios de construcción. La metodología combina análisis cuantitativo de volumen y precios con análisis cualitativo del comportamiento del comprador basado en estudios publicados por asociaciones del sector y en la revisión de reseñas y foros de propietarios.</p>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>INE — Estadística de Edificación</td><td>Oficial</td><td>Licencias de rehabilitación, volumen de obras por tipología en la Comunidad de Madrid</td></tr>
                <tr><td>Ministerio de Vivienda — Plan de rehabilitación</td><td>Oficial</td><td>Estimaciones de parque residencial pendiente de rehabilitación en Madrid</td></tr>
                <tr><td>SICI y ANDIMAC</td><td>Sectorial</td><td>Ticket medio de reforma integral, tendencias de materiales, comportamiento del consumidor</td></tr>
                <tr><td>Habitissimo / Cronoshare</td><td>Plataforma digital</td><td>Precios de mercado, volumen de solicitudes, distribución geográfica en Madrid</td></tr>
                <tr><td>Análisis de reseñas (Google Maps, Trustpilot)</td><td>Primario desk</td><td>Pain points frecuentes de clientes de reforma integral en Madrid</td></tr>
                <tr><td>Foros de propietarios (Fotocasa, Idealista comunidades)</td><td>Cualitativo</td><td>Vocabulario del cliente, objeciones frecuentes, criterios de selección de empresa</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 VOLUMEN */}
          <div className="section-anchor" id="volumen">
            <div className="section-label">02 — Volumen de mercado</div>
            <h2 className="h2">Un mercado de 1.200 millones de euros en Madrid.</h2>
            <p className="body-text">La Comunidad de Madrid concentra la mayor actividad de reforma integral de España por su combinación de parque de vivienda envejecido (más del 55% de los pisos tienen más de 30 años), alta densidad de propietarios de vivienda en propiedad y alto precio del metro cuadrado que hace rentable la reforma.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '40.000', label: 'Reformas integrales al año en Madrid' },
                { num: '35.000€', label: 'Ticket medio de reforma integral' },
                { num: '8–12 sem', label: 'Duración media de obra' },
                { num: '1.200M€', label: 'Mercado estimado en la Comunidad de Madrid' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">El ticket de una reforma integral varía principalmente en función de la superficie y el nivel de acabados. Un piso de 60 m² con acabados medios puede reformarse integralmente por 22.000–30.000 euros. Un piso de 90 m² con materiales de calidad media-alta se sitúa entre 35.000 y 50.000 euros. Los pisos grandes (más de 120 m²) o con distribución muy modificada pueden superar los 70.000 euros.</p>

            <table className="r-table">
              <thead><tr><th>Superficie</th><th>Acabado</th><th>Alcance</th><th>Rango de precio</th></tr></thead>
              <tbody>
                <tr><td>50–65 m²</td><td>Medio</td><td>Reforma completa, distribución conservada</td><td>20.000–28.000 €</td></tr>
                <tr><td>65–85 m²</td><td>Medio</td><td>Reforma completa, pequeñas redistribuciones</td><td>28.000–42.000 €</td></tr>
                <tr><td>85–110 m²</td><td>Medio-alto</td><td>Reforma completa con redistribución</td><td>40.000–58.000 €</td></tr>
                <tr><td>100–140 m²</td><td>Alto</td><td>Reforma completa, materiales premium</td><td>55.000–80.000 €</td></tr>
              </tbody>
            </table>
            <p className="nota">* Precios orientativos para Madrid capital. No incluyen IVA. El rango superior incluye materiales de calidad alta y coordinación de proyecto.</p>
          </div>

          {HR}

          {/* 03 PERFILES */}
          <div className="section-anchor" id="perfiles">
            <div className="section-label">03 — Perfiles de cliente</div>
            <h2 className="h2">Dos perfiles dominantes con comportamientos distintos.</h2>
            <p className="body-text">El mercado de reforma integral en Madrid no es homogéneo. Existen dos perfiles de cliente claramente diferenciados que tienen motivaciones, sensibilidades al precio y procesos de decisión distintos. Saber en qué perfil encaja el prospecto desde el primer contacto permite adaptar el discurso comercial y el tipo de presupuesto.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '32px 0' }}>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '16px', marginBottom: '16px' }}>
                  <i className="fa-solid fa-key" style={{ marginRight: '8px' }}></i> Perfil A: Comprador reciente
                </div>
                <ul style={{ paddingLeft: '16px', color: 'rgba(255,255,255,.75)', fontSize: '14px', lineHeight: 1.9, margin: 0 }}>
                  <li>Acaba de comprar un piso de segunda mano</li>
                  <li>El precio de compra fue ajustado porque el piso necesitaba reforma</li>
                  <li>Presupuesto disponible: generalmente 20.000–40.000 €</li>
                  <li>Tiene una fecha de mudanza en mente: el plazo es crítico</li>
                  <li>Menos experiencia con obras: necesita más acompañamiento</li>
                  <li>Alta disposición a confiar en una sola empresa que gestione todo</li>
                </ul>
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '16px', marginBottom: '16px' }}>
                  <i className="fa-solid fa-house-chimney" style={{ marginRight: '8px' }}></i> Perfil B: Propietario largo plazo
                </div>
                <ul style={{ paddingLeft: '16px', color: 'rgba(255,255,255,.75)', fontSize: '14px', lineHeight: 1.9, margin: 0 }}>
                  <li>Lleva 15–25 años en el mismo piso</li>
                  <li>La vivienda está "anticuada" o presenta problemas acumulados</li>
                  <li>Mayor presupuesto disponible: 35.000–65.000 €</li>
                  <li>Proceso de decisión más largo: llevan tiempo pensándolo</li>
                  <li>Mayor exigencia en acabados y calidad de materiales</li>
                  <li>Han tenido obras anteriores; saben qué preguntar (y desconfían)</li>
                </ul>
              </div>
            </div>

            <p className="body-text">El comprador reciente suele ser el cliente más eficiente comercialmente: tiene urgencia real, presupuesto ya disponible (o financiación aprobada) y alta disposición a confiar. El propietario de largo plazo tiene mayor presupuesto pero requiere más tiempo de maduración y más referencias de calidad. Ambos perfiles son estratégicamente relevantes para Oro Constructores, pero el comprador reciente es el punto de entrada más eficiente.</p>
          </div>

          {HR}

          {/* 04 VALORACIONES */}
          <div className="section-anchor" id="valoraciones">
            <div className="section-label">04 — Qué valoran y qué temen</div>
            <h2 className="h2">Las cinco cosas que el cliente de reforma integral más valora.</h2>
            <p className="body-text">El análisis de reseñas de empresas de reforma en Google Maps y Trustpilot (muestra de más de 400 reseñas verificadas en Madrid) revela un patrón claro sobre qué atributos generan satisfacción y cuáles generan insatisfacción. Los atributos positivos más mencionados no son los que las empresas suelen comunicar en su web.</p>

            <table className="r-table">
              <thead><tr><th>Atributo</th><th>% de menciones positivas</th><th>Nota</th></tr></thead>
              <tbody>
                <tr><td>Un solo interlocutor durante toda la obra</td><td>Muy alto</td><td>"No tuve que hablar con 5 personas distintas"</td></tr>
                <tr><td>Limpieza diaria de la obra</td><td>Alto</td><td>Sorprende al cliente porque no lo espera; genera reseñas espontáneas</td></tr>
                <tr><td>Cumplimiento del plazo pactado</td><td>Alto</td><td>Cuando se cumple, el cliente lo menciona explícitamente como excepcional</td></tr>
                <tr><td>Precio final igual al presupuestado</td><td>Muy alto</td><td>El cliente no da por sentado que el precio final sea el acordado</td></tr>
                <tr><td>Comunicación proactiva del estado de la obra</td><td>Medio-alto</td><td>Fotos diarias por WhatsApp, aviso antes de cada etapa</td></tr>
              </tbody>
            </table>

            <p className="body-text">La limpieza diaria de la obra merece mención especial: en el 90% de los casos, el cliente que está viviendo en la vivienda (o que visita la obra) no espera encontrarla ordenada. Cuando la empresa limpia cada día al terminar, el cliente lo trata como un atributo diferencial extraordinario y lo menciona en la reseña. El coste operativo de incluir limpieza diaria es bajo; el impacto en la percepción del cliente es desproporcionadamente alto.</p>
          </div>

          {HR}

          {/* 05 PROBLEMAS */}
          <div className="section-anchor" id="problemas">
            <div className="section-label">05 — Problemas con la oferta actual</div>
            <h2 className="h2">Por qué el cliente de reforma integral está insatisfecho con el mercado.</h2>
            <p className="body-text">El análisis de reseñas negativas y de foros de propietarios revela tres problemas recurrentes que el mercado actual no resuelve de forma sistemática. Estos tres problemas son la base del posicionamiento de Oro Constructores.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-users-slash',
                  titulo: 'Fragmentación de gremios: el cliente se convierte en director de obra',
                  detalle: 'Cuando la empresa subcontrata a autónomos por gremio y cada uno trabaja de forma independiente, el propietario tiene que coordinar entre electricista, fontanero, alicatador y carpintero. Cualquier desajuste de agenda entre ellos —que es lo habitual— paraliza la obra y el propietario no tiene a quién reclamar: cada autónomo señala al anterior.'
                },
                {
                  icon: 'fa-solid fa-calendar-xmark',
                  titulo: 'Plazos que se multiplican por 2 o por 3',
                  detalle: 'La obra de "8 semanas" que dura 20 es la queja más frecuente en reformas integrales. El cliente firma con un plazo estimado, no garantizado. Los retrasos se acumulan por solapamientos entre gremios, materiales que no llegan, o simplemente porque la empresa tiene otras obras con más prioridad. El cliente de reforma integral no puede hacer nada: ya está comprometido con la empresa y cambiar supone pérdida del avance y de parte del pago.'
                },
                {
                  icon: 'fa-solid fa-receipt',
                  titulo: 'Presupuesto que crece un 30–40% con "extras"',
                  detalle: 'El "extra" es el mecanismo de ajuste de margen más utilizado en el sector. La empresa firma un presupuesto competitivo y luego añade partidas no contempladas a medida que avanza la obra: "el tabique no se podía derribar sin refuerzo", "la instalación eléctrica había que rehacerla", "el suelo tenía una capa extra de cemento". Algunos de estos extras son legítimos; muchos son previsibles y deberían estar en el presupuesto inicial.'
                },
              ].map((m, i) => (
                <div key={i} style={{ border: '1px solid var(--ink-6)', borderRadius: '12px', padding: '24px', display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--oro)', fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>
                    <i className={m.icon}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', fontSize: '15px' }}>{m.titulo}</div>
                    <p className="body-text" style={{ margin: 0 }}>{m.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {HR}

          {/* 06 DECISIÓN */}
          <div className="section-anchor" id="decision">
            <div className="section-label">06 — Ciclo de decisión</div>
            <h2 className="h2">Seis a dieciocho meses desde la idea hasta el contrato.</h2>
            <p className="body-text">La reforma integral es una de las decisiones financieras más grandes que toma una familia a lo largo de su vida. Por eso el ciclo de decisión es largo y complejo. Entender en qué fase se encuentra el prospecto cuando contacta determina qué tipo de respuesta darle y con qué cadencia hacer el seguimiento.</p>

            <table className="r-table">
              <thead><tr><th>Fase</th><th>Duración típica</th><th>Qué busca el cliente</th><th>Acción de Oro</th></tr></thead>
              <tbody>
                <tr><td>Idea inicial</td><td>1–6 meses</td><td>Inspiración, posibilidades, rango de precios</td><td>Contenido educativo, casos de antes/después, guía de precios</td></tr>
                <tr><td>Investigación activa</td><td>1–3 meses</td><td>Empresas en Madrid, reseñas, portfolio</td><td>Presencia en Google Maps, reseñas visibles, web con portfolio</td></tr>
                <tr><td>Solicitud de presupuestos</td><td>3–6 semanas</td><td>3–5 presupuestos comparables, visita de obra</td><td>Visita en menos de 48h, presupuesto en menos de 72h</td></tr>
                <tr><td>Comparación y negociación</td><td>2–4 semanas</td><td>Claridad de condiciones, garantías, plazo comprometido</td><td>Seguimiento proactivo a los 3, 7 y 14 días</td></tr>
                <tr><td>Decisión final</td><td>1–2 semanas</td><td>Confianza en la empresa, condiciones del contrato</td><td>Contrato claro, plazo garantizado, hito de pago escalonado</td></tr>
                <tr><td>Firma y arranque</td><td>1–2 semanas</td><td>Fecha de inicio, cronograma de obra</td><td>Cronograma semanal detallado entregado en el momento de firma</td></tr>
              </tbody>
            </table>

            <p className="body-text">Un dato relevante para la gestión de prospectos: el cliente que solicita presupuesto de reforma integral no está necesariamente listo para firmar ese mes. Aproximadamente el 40% de los presupuestos solicitados se convierten en obra entre 1 y 6 meses después de la primera visita. Mantener un sistema de seguimiento periódico (sin presionar) es la diferencia entre perder un cliente frío y cerrar una obra de 40.000 euros tres meses después.</p>
          </div>

          {HR}

          {/* 07 ESTACIONALIDAD */}
          <div className="section-anchor" id="seasonality">
            <div className="section-label">07 — Estacionalidad</div>
            <h2 className="h2">Los picos de demanda y cómo planificar la capacidad.</h2>
            <p className="body-text">La reforma integral tiene una estacionalidad marcada. Los meses de mayor solicitud de presupuesto son marzo–mayo y septiembre–noviembre. Las obras tienden a arrancarse en esas mismas ventanas, lo que genera dos períodos de alta carga de trabajo que requieren planificación anticipada de capacidad.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '12px', margin: '32px 0' }}>
              {[
                { mes: 'Enero–Febrero', nivel: 'Medio-bajo', nota: 'Presupuestos post-Navidad; obras aún pocas' },
                { mes: 'Marzo–Mayo', nivel: 'Alto', nota: 'Pico principal; solicitudes y arranques de obra' },
                { mes: 'Junio', nivel: 'Medio', nota: 'Cierre de obras de primavera, pocas nuevas' },
                { mes: 'Julio–Agosto', nivel: 'Bajo', nota: 'Vacaciones; obras paradas o mínimas' },
                { mes: 'Septiembre–Noviembre', nivel: 'Alto', nota: 'Segundo pico; obras para terminar antes de fin de año' },
                { mes: 'Diciembre', nivel: 'Bajo', nota: 'Fiestas; casi sin arranques de obra nueva' },
              ].map((s, i) => (
                <div key={i} style={{ border: '1px solid var(--ink-6)', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '14px', marginBottom: '6px' }}>{s.mes}</div>
                  <div style={{ fontSize: '12px', color: s.nivel === 'Alto' ? 'var(--oro)' : 'var(--ink-3)', fontWeight: 600, marginBottom: '6px' }}>{s.nivel}</div>
                  <div style={{ fontSize: '12px', color: 'var(--ink-3)', lineHeight: 1.5 }}>{s.nota}</div>
                </div>
              ))}
            </div>

            <p className="body-text">La implicación operativa más importante de esta estacionalidad es que enero y febrero —meses de demanda baja en solicitudes de obra— son el mejor momento para el esfuerzo comercial intensivo: visitas de presupuesto, presencia en redes y publicidad digital. Las obras que se presupuestan en febrero arrancan en marzo-abril, que es el pico de capacidad.</p>
          </div>

          {HR}

          {/* 08 COMPETENCIA */}
          <div className="section-anchor" id="competencia">
            <div className="section-label">08 — Oferta del mercado</div>
            <h2 className="h2">Quién compite en este segmento y con qué propuesta.</h2>
            <p className="body-text">El mercado de reforma integral en Madrid está poblado por cuatro tipos de operador con propuestas muy diferentes. La elección del cliente entre ellos no siempre es racional: a menudo depende de quién da la primera respuesta, quién inspira más confianza en la primera visita o quién tiene más reseñas en Google Maps.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de operador</th><th>Propuesta</th><th>Problema principal</th><th>Precio orientativo/m²</th></tr></thead>
              <tbody>
                <tr><td>Autónomos por gremio</td><td>Precio bajo, contacto directo</td><td>Sin coordinación; cliente dirige la obra</td><td>200–280 €/m²</td></tr>
                <tr><td>Empresa reformas mediana</td><td>Gestión general</td><td>Subcontrata; extras frecuentes; plazos no garantizados</td><td>280–380 €/m²</td></tr>
                <tr><td>Empresa reformas grande</td><td>Proceso estructurado, garantía</td><td>Precio elevado; trato impersonal; retrasos en calendario</td><td>380–550 €/m²</td></tr>
                <tr><td>Constructora de obra nueva</td><td>Capacidad técnica alta</td><td>No orientada a residencial; presupuesto mínimo alto</td><td>500 €+/m²</td></tr>
              </tbody>
            </table>

            <p className="body-text">El hueco de mercado más claro está entre la empresa mediana (que gestiona pero subcontrata) y la empresa grande (que tiene proceso pero cobra precio de empresa grande). El cliente de ticket medio 30.000–50.000 euros quiere el proceso de la empresa grande y el precio de la empresa mediana, con la garantía de que los gremios son propios. Esa combinación casi no existe en la oferta actual.</p>
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Posicionamiento: llave en mano con plazo garantizado.</h2>
            <p className="body-text">Los datos de esta investigación apuntan a un posicionamiento claro para Oro Constructores en el mercado de reforma integral: empresa "llave en mano" con todos los gremios propios, un único interlocutor y plazo garantizado en contrato. Ese es el antídoto exacto a los tres problemas más frecuentes que el cliente sufre con la oferta actual.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Un solo interlocutor, todos los gremios propios',
                  detalle: 'El cliente no tiene que coordinar a nadie. Firma con Oro, Oro gestiona fontanero, electricista, alicatador, carpintero y pintor. Si hay un problema entre gremios, lo resuelve Oro —no el propietario. Ese atributo debe ir en la primera línea de la propuesta comercial, antes del precio.'
                },
                {
                  num: '02',
                  titulo: 'Plazo garantizado en el contrato',
                  detalle: 'No "estimado" ni "orientativo". La fecha de entrega va en el contrato, con penalización si no se cumple. Este compromiso filtra prospectos de baja calidad (los que buscan precio mínimo tolerarán retrasos) y refuerza la confianza de los prospectos de calidad media-alta, que valoran la certeza sobre el ahorro marginal de precio.'
                },
                {
                  num: '03',
                  titulo: 'Presupuesto cerrado con visita técnica previa',
                  detalle: 'La visita técnica detallada antes del presupuesto permite identificar los "extras" antes de firmar. El presupuesto resultante es más alto que el de la competencia en primera lectura, pero el precio final es el presupuestado. Comunicar esto explícitamente ("nuestro presupuesto es el precio que pagas, sin sorpresas") convierte el precio aparentemente más alto en una ventaja.'
                },
                {
                  num: '04',
                  titulo: 'Cronograma semanal desde el primer día de obra',
                  detalle: 'El cliente recibe un cronograma de 8-12 semanas con cada fase, cada gremio y cada hito. Foto diaria del avance por WhatsApp. Ese nivel de comunicación no lo ofrece nadie en el segmento de precio medio. El coste de implementarlo es bajo (5 minutos al día por encargado); el impacto en satisfacción y en reseñas es desproporcionado.'
                },
              ].map((item, i) => (
                <div key={i} style={{ border: '2px solid var(--oro)', borderRadius: '12px', padding: '28px', display: 'flex', gap: '24px' }}>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--oro)', flexShrink: 0, lineHeight: 1, opacity: 0.3 }}>{item.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '10px', fontSize: '15px' }}>{item.titulo}</div>
                    <p className="body-text" style={{ margin: 0 }}>{item.detalle}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="body-text">El perfil objetivo prioritario para arrancar el segmento es el comprador reciente de piso de segunda mano: tiene urgencia, presupuesto disponible y disposición alta a confiar en una empresa que gestione todo. La captación más eficiente en este perfil es la combinación de Google Ads ("reforma integral Madrid piso segunda mano") + Google Maps con portfolio visual + seguimiento rápido (respuesta en menos de 2 horas).</p>
          </div>

          {HR}

          {/* FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">Fuentes</div>
            <h2 className="h2">Referencias bibliográficas.</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>INE — Instituto Nacional de Estadística. <em>Estadística de licencias municipales de obras: rehabilitación residencial.</em> 2024.</li>
              <li>Ministerio de Vivienda. <em>Plan de rehabilitación de vivienda 2022–2025: diagnóstico del parque residencial.</em></li>
              <li>ANDIMAC — Asociación Nacional de Distribuidores de Cerámica y Materiales de Construcción. <em>Informe de mercado de reforma residencial en España.</em> 2024.</li>
              <li>Habitissimo. <em>Guía de precios de reforma integral en Madrid.</em> Consultado junio 2026.</li>
              <li>Análisis de reseñas de empresas de reforma en Google Maps (Madrid capital, muestra de 400+ reseñas). Junio 2026.</li>
            </ul>
            <p className="nota">* Los datos de volumen de mercado y ticket medio son estimaciones basadas en proyección de fuentes secundarias. Las cifras de duración de obra son medianas observadas en plataformas de contratación digital. No constituyen datos estadísticos oficiales.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Reformas integral tu piso en Madrid?</h2>
          <p>Un interlocutor. Todos los gremios propios. Plazo garantizado en contrato. Sin extras sorpresa.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-file-invoice" style={{ marginRight: '8px' }}></i>
              Pedir presupuesto
            </Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i>
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
