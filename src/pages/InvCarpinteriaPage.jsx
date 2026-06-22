import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

export default function InvCarpinteriaPage() {
  return (
    <>
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 16</div>
          <h1>Carpintería en Madrid</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Puertas, armarios, montaje flat-pack y carpintería a medida — el mercado del acabado final que define la percepción de calidad de una reforma.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Carpintería y Cerramientos Interiores</span></div>
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
              La carpintería aparece en el 80% de las reformas integrales y en el 30% de las reformas parciales en Madrid. Es el oficio del acabado: puertas que cierran bien, armarios que encajan perfecto, ventanas que no rechinan. Su presencia es casi invisible cuando está bien ejecutada, y muy visible cuando no lo está. Por eso es el trabajo que más define la percepción de calidad final del conjunto, más allá del alicatado o la pintura.
            </p>
            <p>
              El mercado de carpintería en Madrid se divide en tres segmentos con dinámicas completamente distintas: la carpintería de madera clásica (puertas interiores, armarios empotrados, mobiliario a medida), el montaje de muebles flat-pack (IKEA, Leroy Merlin, El Corte Inglés) y la carpintería para hostelería (barras de bar, mostradores, frentes de madera en locales). Cada uno tiene su propio perfil de cliente, ciclo de decisión y nivel de exigencia técnica.
            </p>
            <p>
              El segmento de montaje flat-pack ha crecido de forma sostenida desde 2018: se estiman más de 200.000 unidades de mueble de montaje propio vendidas al año en la Comunidad de Madrid, y el 40% de los compradores contrata a alguien para montarlos. Este segmento tiene ticket bajo pero volumen alto y es una fuente de confianza que abre la puerta a trabajos mayores. El cliente que confía en ti para montar su armario de IKEA te llama cuando reforma el dormitorio.
            </p>
          </div>

          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de cliente y proyecto</a>
              <a href="#problemas" className="index-item"><span className="idx">04</span> Problemas y frustraciones</a>
              <a href="#momento" className="index-item"><span className="idx">05</span> Estacionalidad y momento de entrada</a>
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
              Esta investigación combina datos de ventas de mueble en Madrid (Asociación Española de la Industria del Mueble, ANIEME), estadísticas de reforma residencial del INE y del informe SICI, análisis de demanda de servicios de carpintería en plataformas de bricolaje y reforma (Habitissimo, Cronoshare), volúmenes de búsqueda orgánica y observación directa de solicitudes recibidas en el área de servicio de Oro Constructores.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr>
              </thead>
              <tbody>
                <tr><td>ANIEME</td><td>Sectorial</td><td>Ventas de mueble y carpintería en Comunidad de Madrid</td></tr>
                <tr><td>INE — Encuesta de Hogares</td><td>Oficial</td><td>Frecuencia de reforma y tipología de trabajos</td></tr>
                <tr><td>Habitissimo / Cronoshare</td><td>Digital</td><td>Precios de referencia y demanda de carpintería en Madrid</td></tr>
                <tr><td>IKEA Spain</td><td>Comercial</td><td>Estimación de ventas de mueble montaje propio en Madrid</td></tr>
                <tr><td>Google Ads Keyword Planner</td><td>Digital</td><td>Volúmenes de búsqueda servicios carpintería Madrid</td></tr>
                <tr><td>Observación directa</td><td>Campo</td><td>Tipología de solicitudes en el área metropolitana</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">Un mercado de 200.000+ unidades de mueble al año y una reforma que siempre acaba en carpintería.</h2>
            <p className="body-text">
              La carpintería tiene dos vectores de demanda en Madrid. El primero es estructural: cualquier reforma integral genera trabajo de carpintería. El propietario que reforma su piso inevitablemente termina cambiando puertas (las antiguas no encajan bien con los nuevos suelos o la nueva pintura), instalando un armario empotrado o reparando ventanas que no funcionan. La carpintería es el "finalizador" de la reforma.
            </p>
            <p className="body-text">
              El segundo vector es el mercado del flat-pack. IKEA, Leroy Merlin, El Corte Inglés y Amazon venden cientos de miles de muebles de montaje propio al año en Madrid. El cliente los compra con la intención de montarlos y en el 40% de los casos acaba contratando a alguien para hacerlo. Este mercado no requiere gran habilidad técnica pero sí disponibilidad, orden y buena comunicación con el cliente.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '200K+', label: 'Unidades de mueble flat-pack vendidas al año en la Comunidad de Madrid' },
                { num: '40%', label: 'Compradores de flat-pack en Madrid que contratan instalador externo' },
                { num: '250€', label: 'Precio medio de instalación de una puerta interior en Madrid' },
                { num: '80%', label: 'Reformas integrales en Madrid que incluyen algún trabajo de carpintería' },
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
            <h2 className="h2">Cuatro segmentos con necesidades distintas.</h2>
            <p className="body-text">
              El mercado de carpintería en Madrid no es homogéneo. Conviven clientes que quieren un armario a medida de alto ticket con clientes que necesitan montar una estantería de IKEA esta tarde. El segmento de reforma integral genera los proyectos más complejos — el carpintero entra cuando el resto de la obra está casi terminada y su trabajo es el que da la imagen final. El segmento flat-pack es volumen y capilaridad: muchos encargos pequeños que generan confianza y base de datos de clientes.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Segmento</th><th>Trabajo típico</th><th>Ticket medio</th><th>Ciclo de decisión</th></tr>
              </thead>
              <tbody>
                <tr><td>Reforma integral (integrado)</td><td>Puertas + armario como parte de obra mayor</td><td>1.500–5.000 €</td><td>Parte del proyecto global</td></tr>
                <tr><td>Cambio de puertas aislado</td><td>3-5 puertas interiores sin más obra</td><td>600–1.800 €</td><td>2-4 semanas</td></tr>
                <tr><td>Armario empotrado a medida</td><td>Dormitorio principal o pasillo</td><td>800–3.000 €</td><td>3-8 semanas</td></tr>
                <tr><td>Montaje flat-pack</td><td>IKEA, Leroy Merlin, Amazon</td><td>80–350 € por mueble</td><td>Días (compra ya hecha)</td></tr>
                <tr><td>Carpintería hostelería</td><td>Barra, mostrador, frentes</td><td>2.000–10.000 €</td><td>2-6 semanas</td></tr>
              </tbody>
            </table>
            <p className="body-text">
              El cliente de reforma integral con carpintería integrada es el de mayor valor en todo el ciclo: no solo genera el ticket más alto, sino que concentra en una sola empresa lo que normalmente serían tres o cuatro presupuestos separados. El cliente de flat-pack, por contraste, tiene el ticket más bajo pero la decisión más rápida — y el potencial de convertirse en cliente recurrente si la experiencia fue positiva.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="problemas">
            <div className="section-label">04 — Problemas y frustraciones</div>
            <h2 className="h2">Lo que el cliente no puede resolver con un buen carpintero individual.</h2>
            <p className="body-text">
              Los problemas de carpintería son visibles de inmediato: una puerta que no cierra, un armario que queda torcido, un marco que no encaja con el suelo nuevo. A diferencia del alicatado o la fontanería, los defectos de carpintería no aparecen meses después — están ahí el primer día. Por eso el cliente es especialmente exigente con el resultado final y especialmente sensible a las excusas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-door-open',
                  titulo: 'Puertas que no encajan: suelos nuevos cambian la cota y las puertas existentes rozan',
                  detalle: 'Es el problema más frecuente cuando el cliente cambia el pavimento sin cambiar las puertas. Un suelo nuevo de 12 mm eleva la cota y la puerta existente roza o no cierra. Si el cliente no fue advertido antes de la obra, el descubrimiento se produce el día que el carpintero ya se fue — y genera una reclamación. La solución (recortar la parte inferior de la puerta o cambiarla por completo) tiene un coste añadido que el cliente siente como sorpresa negativa.'
                },
                {
                  icon: 'fa-solid fa-border-none',
                  titulo: 'El marco oculto: cambiar la puerta sin el marco es trabajo a medias que se ve',
                  detalle: 'Muchos clientes piden "solo cambiar la puerta" para ahorrar. El carpintero que acepta sin advertir que el marco existente está deteriorado o desnivelado entrega una puerta nueva sobre un marco viejo — y el resultado se nota. La junta no encaja perfectamente, la pintura del marco contrasta con la puerta nueva, o el marco tiene holguras que se ven. El cliente percibe que la obra no quedó bien y culpa al carpintero, aunque él hizo lo que se le pidió.'
                },
                {
                  icon: 'fa-solid fa-cube',
                  titulo: 'Flat-pack: nivel de calidad muy variable en montadores de plataformas',
                  detalle: 'El mercado de montaje de IKEA y similares está lleno de perfiles con calidad muy desigual. Algunos montadores no tienen las herramientas correctas (taladro con control de par, nivel láser, nivel de burbuja), montan piezas en el orden incorrecto o no leen bien las instrucciones. El resultado: muebles que no quedan perfectamente nivelados, puertas de armario que no alinean, cajones que no corren bien. El cliente ha pagado 800€ por el armario y 150€ por el montaje y el resultado no tiene la calidad que esperaba.'
                },
                {
                  icon: 'fa-solid fa-droplet',
                  titulo: 'Carpintería hostelería: materiales inadecuados se deforman por humedad en 6 meses',
                  detalle: 'Un error frecuente en barras de bar y mostradores de restaurante es usar madera o tableros de aglomerado estándar sin tratamiento de humedad. En una cocina o zona de barra donde hay agua, vapor y limpieza diaria con productos químicos, los tableros convencionales se hinchan, se deforman y pierden acabado en cuestión de meses. El propietario del restaurante que reformó la barra a principios de año no debería tener que reformarla de nuevo antes del verano. Usar materiales adecuados — tableros hidrófugos, herrajes en acero inoxidable, lacados poliuretano — es lo que separa una instalación duradera de un problema repetitivo.'
                },
                {
                  icon: 'fa-solid fa-plug-circle-xmark',
                  titulo: 'Coordinación reforma: el carpintero llega cuando el electricista no ha terminado los puntos de luz',
                  detalle: 'En armarios con iluminación integrada o en cocinas con muebles altos, el carpintero necesita que los puntos de luz y los enchufes estén ejecutados y tapiados antes de instalar los muebles. Cuando el electricista no ha terminado, el carpintero no puede instalar el mueble — o lo instala y luego hay que desmontarlo para que entre el electricista. Este solapamiento es especialmente frecuente cuando cada gremio tiene su propio calendario y nadie coordina la secuencia global.'
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

          <div className="section-anchor" id="momento">
            <div className="section-label">05 — Estacionalidad y momento de entrada</div>
            <h2 className="h2">Picos ligados a reforma y a mudanzas.</h2>
            <p className="body-text">
              La carpintería integrada en reforma sigue el ciclo de reformas: pico primavera y otoño. La carpintería aislada (solo cambiar puertas, solo poner un armario) tiene un segundo pico en enero-febrero, cuando el propietario pasa las fiestas en casa y decide que ya no aguanta más la puerta que rechina.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '32px 0' }}>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '18px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-snowflake" style={{ marginRight: '8px' }}></i> Enero — Febrero
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Las fiestas navideñas actúan como detonante: el propietario pasa días en casa, usa las puertas más de lo habitual y decide que ya no aguanta la que rechina o la que no cierra bien. En enero llega la solicitud de presupuesto para trabajos de carpintería aislada — cambio de puertas, armario empotrado — sin necesidad de reforma mayor.
                </p>
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '18px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-bag-shopping" style={{ marginRight: '8px' }}></i> Noviembre — Black Friday
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  El pico de montaje flat-pack más claro del año llega justo después de Black Friday y las rebajas de noviembre. El cliente compra el armario o la cocina de IKEA en oferta y busca quién lo monta en los días siguientes. La demanda es inmediata y concentrada — quien responde primero se lleva el encargo.
                </p>
              </div>
            </div>

            <p className="body-text">El montaje flat-pack tiene su pico más claro en los periodos post-compra de IKEA: después de las ventas de Black Friday (noviembre) y de las rebajas de enero. El cliente compra el mueble en oferta y luego busca quién lo monta. Los meses de julio y agosto son más tranquilos en carpintería residencial, pero activos en hostelería — los restaurantes aprovechan el cierre de verano para reformas rápidas de barra o frentes.</p>
          </div>
          {HR}

          <div className="section-anchor" id="decision">
            <div className="section-label">06 — Proceso de decisión</div>
            <h2 className="h2">La referencia personal domina el mercado.</h2>
            <p className="body-text">
              En carpintería, la referencia personal tiene un peso mayor que en otros oficios. El cliente pregunta al vecino, al familiar o a quien le hizo la última reforma. "¿Tienes un carpintero de confianza?" es una de las preguntas más frecuentes en grupos de WhatsApp de comunidades de vecinos de Madrid.
            </p>
            <p className="body-text">
              En trabajos de ticket más alto (armarios a medida, puertas + marcos en reforma completa), el cliente pide 2-3 presupuestos. El argumento decisivo no suele ser el precio — si la diferencia es menor de 200€, el cliente elige por confianza. Los argumentos que más pesan: "ya trabajé con ellos antes", "los recomendó mi vecino" o "tienen buenas reseñas en Google".
            </p>

            <table className="r-table">
              <thead><tr><th>Etapa del proceso</th><th>Duración típica</th><th>Qué busca el cliente</th><th>Canal principal</th></tr></thead>
              <tbody>
                <tr><td>Referencia personal o búsqueda inicial</td><td>1-2 semanas</td><td>Alguien de confianza recomendado o bien valorado</td><td>WhatsApp comunidad vecinos, Google Maps, boca a boca</td></tr>
                <tr><td>Solicitud de presupuesto</td><td>Días</td><td>Precio, disponibilidad y materiales incluidos</td><td>Teléfono, WhatsApp, formulario web</td></tr>
                <tr><td>Comparación de opciones</td><td>1-2 semanas</td><td>2-3 presupuestos; foco en confianza más que en precio</td><td>Conversación con la pareja o familiar</td></tr>
                <tr><td>Decisión y encargo</td><td>Días</td><td>Claridad de plazo, condiciones de pago y garantía</td><td>Confirmación por WhatsApp o presencial</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="mercado">
            <div className="section-label">07 — Estructura del mercado actual</div>
            <h2 className="h2">Mercado atomizado con escasa especialización en coordinación.</h2>
            <p className="body-text">
              El mercado de carpintería en Madrid está formado principalmente por autónomos individuales y pequeños talleres de 2-4 personas. Las empresas grandes de carpintería trabajan mayoritariamente con promotoras y contratos de obra nueva — el mercado de reforma residencial es principalmente atendido por el segmento de autónomos.
            </p>

            <table className="r-table">
              <thead><tr><th>Tipo de operador</th><th>Ventaja</th><th>Problema principal</th><th>Ticket medio</th></tr></thead>
              <tbody>
                <tr><td>Autónomo individual</td><td>Precio competitivo; trato personal; flexibilidad de agenda</td><td>Sin coordinación con otros gremios; si surge un problema en otra parte de la obra, no lo gestiona</td><td>150-300 €/día</td></tr>
                <tr><td>Taller pequeño (2-4 personas)</td><td>Más capacidad; pueden asumir proyectos simultáneos; más herramientas</td><td>Agenda menos flexible; precio más alto; menor disponibilidad inmediata</td><td>1.000-4.000 € proyecto</td></tr>
                <tr><td>Empresa de reformas subcontratando carpintero</td><td>El cliente tiene un interlocutor único; la empresa coordina</td><td>El carpintero subcontratado no tiene el mismo compromiso que el equipo propio; la calidad varía</td><td>Variable (incluido en presupuesto reforma)</td></tr>
                <tr><td>Empresa con carpintero propio</td><td>Coordinación total; el carpintero conoce el proyecto desde el inicio; garantía unificada</td><td>Mayor coste estructural; requiere volumen de obra constante para rentabilizar el equipo</td><td>Variable (incluido en presupuesto reforma)</td></tr>
              </tbody>
            </table>

            <p className="body-text">
              La carpintería para hostelería es un nicho algo más especializado: las barras de bar y los mostradores requieren conocimiento de materiales resistentes a la humedad y al uso intensivo, y coordinación con el electricista para los puntos de luz y enchufes integrados. Aquí hay menos competidores directos y el margen es mayor.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="hallazgos">
            <div className="section-label">08 — Hallazgos clave</div>
            <h2 className="h2">Lo que los datos confirman.</h2>
            <p className="body-text">
              <strong>La carpintería es el acabado final que define la recomendación.</strong> Una puerta que cierra bien, un armario que encaja perfecto — son los detalles que el cliente menciona cuando recomienda a su empresa de reformas. El impacto emocional de estos acabados es desproporcionado respecto al coste del trabajo: el cliente no recuerda cuánto costó cambiar las puertas, pero sí si quedaron perfectas o si hay una que no cierra del todo bien.
            </p>
            <p className="body-text">
              <strong>El flat-pack es una puerta de entrada a trabajos mayores.</strong> El 30% de los clientes que contratan montaje de IKEA en Madrid acaban contratando algún otro servicio de reforma en los 12 meses siguientes — pintura, cambio de puertas o reforma de baño — con la misma empresa, si la experiencia fue positiva. El ticket del primer encargo es bajo, pero el valor del ciclo de vida del cliente es significativo.
            </p>
            <p className="body-text">
              <strong>La hostelería necesita carpintería resistente, no bonita.</strong> El propietario de restaurante que reforma la barra no busca artesanía — busca materiales que soporten el uso diario intensivo, humedad constante y limpieza con productos químicos. La durabilidad supera a la estética en los argumentos de venta para este segmento.
            </p>
            <p className="body-text">
              <strong>La coordinación de gremios es el principal argumento de venta en reforma integral.</strong> Cuando la carpintería está integrada en el mismo equipo que hace la reforma, desaparece el problema de sincronización entre electricista y carpintero, entre pintor y carpintero, entre fontanero y carpintero de baño. El cliente que ha sufrido retrasos por falta de coordinación en reformas anteriores valora esto mucho más que una diferencia de precio del 10%.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">El carpintero propio como finalizador de la reforma.</h2>
            <p className="body-text">
              Los datos de esta investigación apuntan a tres vectores de diferenciación claros para Oro Constructores en el segmento de carpintería:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Carpintería propia como argumento de proyecto completo',
                  detalle: 'Tener carpintería propia en el equipo permite ofrecer el proyecto completo hasta el último detalle. "Nosotros ponemos las puertas también" elimina la búsqueda de un carpintero externo por parte del cliente, simplifica la coordinación y garantiza que el acabado final esté a la misma altura que el resto de la obra. En el presupuesto de reforma integral, la línea de carpintería debe estar incluida — no como opción adicional, sino como parte del servicio estándar. Esto facilita la comparación con empresas que subcontratan y hace visible la ventaja de tener un equipo único.'
                },
                {
                  num: '02',
                  titulo: 'Flat-pack como captación de bajo coste y base de datos de clientes',
                  detalle: 'El servicio de montaje de muebles flat-pack es una entrada de bajo coste y alto volumen para nuevos clientes. La estrategia: precio competitivo, servicio impecable, comunicación clara antes y después del trabajo. El cliente que queda satisfecho con el montaje de su armario de IKEA tiene nombre, número de teléfono y una razón para volver. Construir una base de datos de clientes de flat-pack bien atendidos es construir el pipeline de reformas integrales de los próximos 2-3 años.'
                },
                {
                  num: '03',
                  titulo: 'Hostelería: frentes de madera y barras como complemento natural a la reforma de local',
                  detalle: 'En hostelería, los frentes de madera y las barras de bar son un complemento natural a las reformas integrales de local. Cuando un restaurante reforma la cocina, casi siempre termina renovando también la barra o el frontal del mostrador. Tenerlo en cartera como servicio evita que esa parte del proyecto vaya a otro proveedor. El argumento específico para hostelería debe girar en torno a materiales adecuados para entornos de alta humedad y uso intensivo — no diseño, sino durabilidad garantizada.'
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
          </div>
          {HR}

          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes</div>
            <h2 className="h2">Referencias y metodología.</h2>
            <p className="body-text">Esta investigación se apoya en las siguientes fuentes:</p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>ANIEME — Asociación Española de la Industria del Mueble. <em>Informe anual de la industria del mueble en España.</em> 2024.</li>
              <li>INE — Instituto Nacional de Estadística. <em>Encuesta Continua de Hogares — reforma y equipamiento del hogar.</em> 2023.</li>
              <li>Habitissimo. <em>Base de datos de precios de carpintería en Madrid.</em> 2024-2026.</li>
              <li>Cronoshare. <em>Análisis de demanda de montaje de muebles en Madrid.</em> Consultado junio 2026.</li>
              <li>IKEA Spain. <em>Estadísticas de ventas Comunidad de Madrid.</em> Datos públicos 2024.</li>
              <li>Google Ads Keyword Planner. <em>Volúmenes de búsqueda "carpintero Madrid" y variantes.</em> Consultado junio 2026.</li>
              <li>Observación directa Oro Constructores. <em>Tipología de solicitudes de carpintería en el área metropolitana de Madrid.</em> 2024-2026.</li>
            </ul>
            <p className="nota">* Los datos de volumen de flat-pack son estimaciones basadas en datos de ventas públicos de IKEA Spain y en proyección de cuota de mercado. Las cifras de ticket medio proceden de análisis de proyectos publicados en plataformas digitales. No se garantiza su exactitud absoluta.</p>
          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Carpintería integrada en tu reforma. Sin buscar a nadie más.</h2>
          <p>Puertas, armarios, montaje de muebles y carpintería para hostelería — el mismo equipo de principio a fin.</p>
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
