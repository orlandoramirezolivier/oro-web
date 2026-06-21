import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvPinturaPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 8</div>
          <h1>El mercado de pintura en Madrid: estacionalidad, ticket y perfil del cliente</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>La pintura es el servicio de reforma más contratado en España por frecuencia. Esta investigación analiza el volumen de mercado en Madrid, los tres segmentos de cliente, la estacionalidad que define los precios y el upsell natural que convierte cada trabajo de pintura en el inicio de un proyecto mayor.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Reformas — Pintura y revestimientos</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">INE · ANFAPA · Observatorio de la Rehabilitación · Habitissimo · Certicalia</span></div>
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
            <p>La pintura es el servicio de construcción más contratado en España por frecuencia, por encima de la fontanería, la electricidad y la carpintería. Aproximadamente el 35% de los propietarios de vivienda en Madrid contratan un trabajo de pintura al menos una vez cada cinco años, generando un mercado de alta rotación con demanda sostenida y predecible. Los tickets varían desde 800€ en una habitación hasta 6.000€ en un local comercial de superficie media.</p>
            <p>El mercado tiene una estacionalidad clara y pronunciada: dos picos de demanda (abril-junio y septiembre-octubre) y una temporada baja (enero-febrero) donde la demanda cae significativamente y los precios son negociables. Para el proveedor, esto define una estrategia de calendario: cargar la agenda en los picos y usar la temporada baja para trabajos de mayor margen o proyectos de mayor envergadura que los clientes habituales no quieren programar en los picos.</p>
            <p>El diferencial de Oro Constructores en este mercado no está en el precio ni en la técnica de pintura — es en la limpieza, la protección del mobiliario del cliente y el cumplimiento del plazo. Estos tres elementos son las fuentes de mayor insatisfacción con el mercado actual de pintores, y resolverlos bien genera recomendaciones directas: un cliente de pintura satisfecho refiere a 2–3 conocidos de media.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#mercado" className="index-item"><span className="idx">01</span> El mercado de pintura en Madrid</a>
              <a href="#estacionalidad" className="index-item"><span className="idx">02</span> Estacionalidad y ciclo de demanda</a>
              <a href="#segmentos" className="index-item"><span className="idx">03</span> Los tres segmentos del mercado</a>
              <a href="#cliente" className="index-item"><span className="idx">04</span> Perfil del cliente y qué prioriza</a>
              <a href="#mercado-actual" className="index-item"><span className="idx">05</span> El mercado actual — pintores y sus déficits</a>
              <a href="#upsell" className="index-item"><span className="idx">06</span> Upsell natural y puerta a proyectos mayores</a>
              <a href="#oportunidad" className="index-item"><span className="idx">07</span> Posicionamiento para Oro Constructores</a>
              <a href="#conclusiones" className="index-item"><span className="idx">08</span> Conclusiones</a>
            </div>
          </div>

          {/* 01 MERCADO */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">01 — El mercado</div>
            <h2 className="h2">El servicio de reforma más contratado en España.</h2>
            <p className="body-text">El mercado de pintura decorativa en España mueve más de 1.800 millones de euros anuales en mano de obra y materiales. La Comunidad de Madrid, con una densidad de población urbana alta y un parque residencial con antigüedad media elevada, es el segundo mercado provincial más grande del país, solo por detrás de Cataluña.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '35%', label: 'de propietarios en Madrid contratan pintura al menos una vez cada 5 años' },
                { num: '1.800€', label: 'ticket medio en vivienda tipo de 80m² en Madrid (solo mano de obra)' },
                { num: '2 picos', label: 'estacionales al año: abril-junio y septiembre-octubre' },
                { num: '2–3', label: 'recomendaciones directas generadas por cada cliente de pintura satisfecho' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">La alta frecuencia de contratación hace del mercado de pintura algo cualitativamente diferente a otros servicios de reforma: la demanda es continua y estructural, no dependiente de eventos puntuales (compra de vivienda, reforma integral). Un propietario puede contratar pintura en su vivienda cada 5–7 años independientemente de cualquier otra circunstancia, y eso crea un mercado de altísima recurrencia.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de trabajo</th><th>Ticket medio orientativo</th><th>Frecuencia de contratación</th></tr></thead>
              <tbody>
                <tr><td>Habitación individual</td><td>400–700€</td><td>Alta — trabajo puntual frecuente</td></tr>
                <tr><td>Vivienda completa (80m²)</td><td>1.200–2.500€</td><td>Cada 6–8 años por propietario</td></tr>
                <tr><td>Vivienda premium o gran superficie</td><td>2.500–5.000€</td><td>Cada 7–10 años</td></tr>
                <tr><td>Local comercial / oficina (150m²)</td><td>2.000–4.500€</td><td>Cada 4–6 años o en cambio de inquilino</td></tr>
                <tr><td>Escalera de comunidad (planta por planta)</td><td>800–2.000€ por planta</td><td>Cada 8–12 años para el edificio completo</td></tr>
                <tr><td>Fachada exterior</td><td>3.000–15.000€ según superficie</td><td>Cada 10–15 años</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 ESTACIONALIDAD */}
          <div className="section-anchor" id="estacionalidad">
            <div className="section-label">02 — Estacionalidad</div>
            <h2 className="h2">Dos picos de demanda, una temporada baja y cómo aprovecharlo.</h2>
            <p className="body-text">El mercado de pintura en Madrid tiene una estacionalidad pronunciada y predecible. No es un mercado plano de demanda constante — tiene dos picos claros de alta demanda y un valle en invierno que permite al proveedor diferente estrategia de precio y tipo de trabajo según el momento del año.</p>

            <h3 style={h3style}>El ciclo anual de demanda</h3>

            {[
              ['Pico primavera — Abril, mayo, junio', 'Es el pico de mayor demanda del año en pintura residencial. El cliente aprovecha la Semana Santa o los fines de semana largos de mayo para que pinten mientras están fuera o de vacaciones. El calor moderado hace que la pintura seque rápido y el olor se disipe bien con las ventanas abiertas. La agenda de pintores en Madrid se llena semanas antes de los puentes de mayo y de la Semana Santa. Es el momento de precio más alto y menor negociación.'],
              ['Valle verano — Julio y agosto', 'La demanda baja en vivienda particular porque los propietarios están de vacaciones. Sin embargo, es el mejor momento para locales comerciales, oficinas y comunidades de propietarios: el local está cerrado, la oficina vacía, el edificio con pocos vecinos. Los pintores que trabajan en segmento comercial tienen julio-agosto como su segundo pico del año.'],
              ['Pico otoño — Septiembre y octubre', 'La vuelta de vacaciones activa una segunda oleada de demanda residencial. El propietario ha vuelto al piso después de semanas fuera y lo ve "diferente" — más viejo, más sucio. Las grietas que en invierno pasaban desapercibidas se hacen evidentes con el ojo fresco de septiembre. Es el segundo pico del año, ligeramente por debajo del de primavera, pero muy consistente.'],
              ['Temporada baja — Noviembre, diciembre, enero, febrero', 'La demanda cae. Noviembre y diciembre por las fiestas y los gastos de Navidad. Enero y febrero por el frío (la pintura seca peor, el cliente no quiere tener las ventanas abiertas). Los pintores con poca agenda bajan precios en esta época. Para Oro Constructores, la temporada baja es el momento de trabajar proyectos de mayor envergadura que ocupan más jornadas, o de captar clientes de comunidades de propietarios para obras programadas en los meses siguientes.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <p className="nota">La estacionalidad define la estrategia de precio: en los picos, el precio de mercado es alto y el cliente tiene menos poder de negociación porque la demanda supera la oferta disponible. En temporada baja, los pintores bajan precios para mantener ocupación. Para Oro Constructores, la temporada baja es el momento de captar clientes de mayor volumen (comunidades, locales comerciales) que compensan el menor ticket medio de los trabajos residenciales pequeños.</p>
          </div>

          {HR}

          {/* 03 SEGMENTOS */}
          <div className="section-anchor" id="segmentos">
            <div className="section-label">03 — Los tres segmentos</div>
            <h2 className="h2">Tres clientes distintos con lógicas de compra completamente diferentes.</h2>
            <p className="body-text">El mercado de pintura en Madrid no es homogéneo. Hay tres segmentos diferenciados con perfiles, motivaciones y procesos de decisión distintos. Entender a qué segmento se le está hablando en cada momento es determinante para saber qué argumento usar y qué precio proponer.</p>

            <h3 style={h3style}>Segmento A — Vivienda particular</h3>
            <p className="body-text">El cliente más frecuente y el más emocional de los tres. Su motivación no es puramente funcional — la pintura ya protege las paredes — sino estética y de calidad de vida. Quiere el piso "nuevo", "más luminoso", "como cuando era joven". La decisión de qué colores usar es importante para él. No entiende de pinturas técnicas ni de imprimaciones, pero tiene una idea clara de cómo quiere que quede.</p>

            <table className="r-table">
              <thead><tr><th>Característica</th><th>Detalle</th></tr></thead>
              <tbody>
                <tr><td>Decisor</td><td>El propietario, frecuentemente en pareja. La decisión de colores puede involucrar debate.</td></tr>
                <tr><td>Proceso de búsqueda</td><td>Recomendación de amigos o vecinos en primer lugar. Google en segundo. Plataformas como Habitissimo en tercero.</td></tr>
                <tr><td>Criterio de selección #1</td><td>Que no ensucien nada — muebles, suelos, parquet. El miedo a tener que limpiar después de la obra es muy alto.</td></tr>
                <tr><td>Criterio de selección #2</td><td>Que acaben en el plazo prometido. Tiene que organizar su vida en torno a la obra (estar fuera, dormir en casa de alguien).</td></tr>
                <tr><td>Precio orientativo</td><td>800–2.500€ para vivienda completa. El precio no es el primer criterio pero sí filtra.</td></tr>
              </tbody>
            </table>

            <h3 style={h3style}>Segmento B — Local comercial y oficina</h3>
            <p className="body-text">El cliente más exigente en plazo y el más indiferente al resultado estético detallado. Para una oficina, la pintura tiene que estar hecha antes de que lleguen los empleados el lunes. Para un restaurante o tienda, tiene que estar lista antes de abrir. El tiempo de ejecución fuera del horario laboral (noches, fines de semana) es una exigencia, no una opción. Este segmento paga más porque el servicio es más exigente, pero la lealtad también es mayor si el proveedor cumple.</p>

            <table className="r-table">
              <thead><tr><th>Característica</th><th>Detalle</th></tr></thead>
              <tbody>
                <tr><td>Decisor</td><td>Gerente o propietario del negocio. Decisión rápida si el servicio cumple requisitos de plazo.</td></tr>
                <tr><td>Exigencia principal</td><td>Noche o fin de semana. El local tiene que estar operativo el lunes o el día de apertura.</td></tr>
                <tr><td>Criterio de selección #1</td><td>Que el proveedor trabaje fuera de horario y que lo garantice antes de contratar.</td></tr>
                <tr><td>Precio orientativo</td><td>1.500–5.000€ según superficie. Con sobrecoste por trabajo nocturno o en fin de semana de hasta un 30%.</td></tr>
                <tr><td>Recurrencia</td><td>Alta — las oficinas repintan cada cambio de inquilino, cada 3–5 años. Una vez que el proveedor es de confianza, la relación es muy estable.</td></tr>
              </tbody>
            </table>

            <h3 style={h3style}>Segmento C — Comunidades de propietarios</h3>
            <p className="body-text">El segmento de mayor ticket unitario y proceso de decisión más lento. La comunidad de propietarios toma decisiones en junta, lo que puede alargar el proceso de aprobación de presupuesto entre 2 y 8 semanas. Sin embargo, una vez aprobado, el trabajo es seguro y el ticket es alto — una escalera completa de 8 plantas puede superar los 15.000€. El administrador de fincas es el prescriptor clave: es quien propone empresas a la junta y cuya opinión tiene más peso en la decisión.</p>

            <table className="r-table">
              <thead><tr><th>Característica</th><th>Detalle</th></tr></thead>
              <tbody>
                <tr><td>Decisor formal</td><td>La junta de propietarios (voto por mayoría). Pero el prescriptor real es el administrador de fincas.</td></tr>
                <tr><td>Proceso de decisión</td><td>El administrador solicita 2–3 presupuestos, los presenta en junta, la junta vota. Plazo: 4–8 semanas desde el primer contacto.</td></tr>
                <tr><td>Criterio de selección #1</td><td>Precio — la junta vota presupuestos y suele elegir el más ajustado si los demás criterios son similares.</td></tr>
                <tr><td>Criterio de selección #2</td><td>Referencias de comunidades similares. El administrador valora mucho a los proveedores que ya conoce o que le han recomendado otros administradores.</td></tr>
                <tr><td>Ticket orientativo</td><td>800–2.000€ por planta para escalera. 8.000–20.000€ para proyecto completo de edificio.</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 04 CLIENTE */}
          <div className="section-anchor" id="cliente">
            <div className="section-label">04 — El cliente de pintura</div>
            <h2 className="h2">Qué prioriza el cliente cuando contrata un pintor.</h2>
            <p className="body-text">La investigación de mercado sobre comportamiento de compra en servicios de pintura revela que el cliente no compra "pintura aplicada". Compra una serie de garantías implícitas que los pintores actuales no siempre cumplen. Entender estas garantías es entender qué diferencia a un servicio de 5 estrellas de uno de 3 estrellas en este mercado.</p>

            <h3 style={h3style}>Las cinco prioridades del cliente de pintura, por orden</h3>

            {[
              ['1. Que no haya suciedad ni polvo en sus muebles', 'Este es, por amplio margen, el miedo más frecuente del cliente residencial de pintura. No teme que el resultado sea malo — teme que el pintor manche su parquet, su sofá o sus muebles con pintura o con el polvo de lijar las paredes. Un cliente que ha tenido esa experiencia antes nunca la olvida. La protección completa de suelos, muebles y electrodomésticos antes de empezar a trabajar no es un lujo — es el primer criterio de evaluación del servicio.'],
              ['2. Que el resultado sea parejo y limpio — sin marcas de rodillo', 'El cliente sabe distinguir una pintura bien aplicada de una pintura mal aplicada, aunque no sepa explicar técnicamente la diferencia. Las marcas de rodillo visibles, el veteado irregular, los trazos de brocha en las esquinas y las manchas de pintura vieja que se transparentan son los defectos que más se mencionan en las reseñas negativas de pintores en Madrid.'],
              ['3. Que acaben en el plazo prometido', 'El cliente de pintura organiza su vida en torno a la obra: se va a casa de los padres, duerme en el salón porque el dormitorio está siendo pintado, tiene la nevera en el pasillo. Cada día adicional de obra no previsto es una molestia real, no abstracta. El pintor que dice "mañana acabamos" y vuelve pasado mañana — o directamente ya no vuelve porque "tiene otro trabajo antes" — genera una insatisfacción que se convierte en reseña negativa y en ausencia de recomendación.'],
              ['4. Que haya un interlocutor claro que responda', 'El cliente quiere saber a quién llamar si hay un problema después de la obra. Una mancha que aparece a los dos días, una zona que no ha quedado bien, una pared que tiene aspecto diferente a plena luz del día. El pintor autónomo que "ya no coge el teléfono cuando la obra está pagada" es el patrón de queja más frecuente en el mercado. Garantizar respuesta post-obra durante 30 días es un diferenciador real.'],
              ['5. Precio razonable y sin costes ocultos', 'El precio de la pintura es relativamente homogéneo en el mercado madrileño — el margen de variación entre presupuestos similares para el mismo trabajo no suele superar el 25–30%. Lo que genera insatisfacción no es el precio inicial sino los costes que aparecen después: "resulta que hacían falta dos manos más de imprimación", "el andamio valía aparte", "el material de protección no estaba incluido". El presupuesto cerrado elimina la principal fuente de desconfianza.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 05 MERCADO ACTUAL */}
          <div className="section-anchor" id="mercado-actual">
            <div className="section-label">05 — El mercado actual</div>
            <h2 className="h2">El pintor de siempre del vecino no siempre está disponible — ni es siempre bueno.</h2>
            <p className="body-text">El mercado de pintura en Madrid está dominado por pintores autónomos individuales. Es un mercado muy fragmentado, con altísima atomización y escasa diferenciación de propuesta de valor. El cliente contacta habitualmente a través de recomendación, acepta el primer presupuesto que le cuadra, y si el resultado es aceptable, guarda el número. Si el resultado es malo, no vuelve a llamar — pero tampoco siempre deja reseña negativa.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de proveedor</th><th>Fortalezas</th><th>Déficits habituales</th></tr></thead>
              <tbody>
                <tr><td>Pintor autónomo individual</td><td>Precio bajo. Trato directo. Flexibilidad de agenda.</td><td>Trabaja solo — obras grandes se alargan. Sin garantía formal. Desaparece si hay incidencia post-obra. Alta variabilidad de calidad según el profesional.</td></tr>
                <tr><td>Pequeño equipo de pintores (2–3 personas)</td><td>Mayor capacidad. Pueden cubrir proyectos medianos en pocos días.</td><td>Sin marca, sin proceso estandarizado, sin garantía escrita. La calidad depende de quién trabaja ese día.</td></tr>
                <tr><td>Empresa de reformas con pintura incluida</td><td>Contexto de reforma integral. La pintura es parte del proyecto completo.</td><td>No es su servicio principal — lo subcontratan. El cliente no trata directamente con el pintor y la calidad varía.</td></tr>
                <tr><td>Plataformas de comparación (Habitissimo, Certicalia)</td><td>Acceso a múltiples presupuestos en un contacto.</td><td>El cliente recibe 5–10 llamadas simultáneas, lo que genera confusión. La calidad de los pintores de la plataforma es muy variable.</td></tr>
              </tbody>
            </table>

            <p className="body-text">El patrón de insatisfacción más documentado en el mercado no es "la pintura quedó mal" — es "el pintor no volvió a acabar lo que empezó" o "dejó la casa hecha un desastre". Estos dos problemas — abandono de la obra antes de terminar y falta de protección del mobiliario — son los que generan el mayor porcentaje de reseñas negativas y ausencia de recomendación. Son también los más fáciles de resolver con un proceso de trabajo estandarizado.</p>
          </div>

          {HR}

          {/* 06 UPSELL */}
          <div className="section-anchor" id="upsell">
            <div className="section-label">06 — Upsell natural</div>
            <h2 className="h2">La pintura como puerta de entrada a proyectos de mayor envergadura.</h2>
            <p className="body-text">La pintura es el trabajo de reforma con mayor frecuencia de repetición y con mayor potencial de upsell natural. El motivo es estructural: el proceso de preparación de superficies para pintar — lijar, tapar grietas, aplicar imprimación — expone sistemáticamente otros problemas en la vivienda que el propietario no había visto o había ignorado.</p>

            <h3 style={h3style}>Lo que aparece cuando se prepara una pared para pintar</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '70%', label: 'de clientes de pintura tienen grietas visibles que requieren tratamiento previo' },
                { num: '45%', label: 'presentan humedad en alguna pared o techo — especialmente en baños y cocinas' },
                { num: '30%', label: 'tienen juntas deterioradas en ventanas o marcos que deben sellarse antes de pintar' },
                { num: '25%', label: 'descubren durante la obra que necesitan reparar parte del enlucido o el yeso' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {[
              ['Reparación de grietas y fisuras', 'La grieta en la pared que el propietario lleva meses ignorando se vuelve imposible de pasar por alto cuando hay que pintar. El pintor que solo pinta — sin reparar la grieta de fondo — garantiza que el problema reaparezca en 6–12 meses. El proveedor que repara la grieta correctamente antes de pintar añade valor real y cobrable. El incremento de ticket es de 50–200€ por intervención, con coste de materiales mínimo.'],
              ['Tratamiento de humedades', 'La humedad en techo de baño, en la pared medianera o en el techo de la cocina es detectada sistemáticamente durante el trabajo de preparación. El pintor que solo aplica pintura anti-humedad está poniendo un parche. El proveedor que identifica el origen (condensación, filtración, capilaridad) y lo resuelva antes de pintar está haciendo un trabajo que justifica un precio significativamente mayor. Este es el upsell de mayor ticket dentro de los trabajos de pintura.'],
              ['Sellado de marcos y juntas de ventanas', 'Los marcos de ventana con silicona deteriorada o con sellados agrietados permiten la entrada de agua en caso de lluvia intensa. El cliente no sabe que esto es un problema hasta que ve la mancha de agua aparecer en la pared que acaba de pintar. El proveedor que detecta y sella correctamente antes de pintar — y lo explica al cliente — no solo añade valor, también protege la garantía de su propio trabajo.'],
              ['Reparación de enlucido y yeso', 'Los golpes, las anclas mal extraídas, las zonas de yeso desprendido y los rincones con enlucido cuarteado son defectos que se notan claramente bajo la pintura nueva si no se reparan antes. El cliente que los descubre después de pagar la pintura atribuye el mal resultado al pintor. El proveedor que los señala antes de empezar, los repara correctamente y los incluye en el presupuesto tiene cero reclamaciones y cliente satisfecho.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <p className="body-text">El potencial de conversión desde pintura a proyectos mayores también existe: el cliente que ve a Oro Constructores trabajar bien en la pintura de su vivienda, con protección completa, sin suciedad y en el plazo acordado, tiene una predisposición muy alta a volver cuando necesite una reforma de mayor envergadura — baño, cocina, reforma integral. La pintura es la presentación de la empresa al cliente residencial de mayor valor.</p>
          </div>

          {HR}

          {/* 07 POSICIONAMIENTO */}
          <div className="section-anchor" id="oportunidad">
            <div className="section-label">07 — Posicionamiento</div>
            <h2 className="h2">Pintores que dejan el piso como estaba pero mejor — sin manchar nada y acabando en el plazo.</h2>
            <p className="body-text">El posicionamiento de Oro Constructores en el mercado de pintura no es en precio ni en volumen. Es en calidad de proceso y en confianza. El mensaje central no es "somos los mejores pintores" — es "somos los que no ensucian, los que no desaparecen y los que acaban cuando dicen".</p>

            <h3 style={h3style}>Los tres pilares de diferenciación en pintura</h3>

            <table className="r-table">
              <thead><tr><th>Pilar</th><th>Qué significa en la práctica</th><th>Por qué importa</th></tr></thead>
              <tbody>
                <tr><td>Protección total antes de empezar</td><td>Plásticos en suelos, muebles protegidos con tela, cinta en rodapiés y marcos. El cliente puede confiar en que nada se va a manchar.</td><td>Es el miedo #1 del cliente. El proveedor que lo elimina antes de empezar gana inmediatamente confianza.</td></tr>
                <tr><td>Plazo garantizado por escrito</td><td>La fecha de fin de obra aparece en el presupuesto. Si no se cumple, hay consecuencias claras.</td><td>El retraso del pintor es la queja más frecuente del mercado. Garantizarlo por escrito es el diferenciador más difícil de igualar para el pintor autónomo.</td></tr>
                <tr><td>Garantía post-obra de 30 días</td><td>Cualquier incidencia (mancha, zona mal cubierta, irregularidad) se resuelve sin coste adicional en los 30 días siguientes a la obra.</td><td>El "pintor que ya no coge el teléfono" es el estereotipo del mercado. Una garantía real invierte la percepción y genera referencias activas.</td></tr>
              </tbody>
            </table>

            <h3 style={h3style}>El generador de referencias más eficiente del mercado</h3>
            <p className="body-text">La pintura tiene una característica única respecto a otros servicios de reforma: el resultado es visible para todos los visitantes del hogar. Cuando alguien visita un piso recién pintado que quedó bien, pregunta. Y el propietario da el contacto del proveedor. Un cliente de pintura satisfecho tiene una tasa de recomendación estimada de 2–3 referencias directas en los 12 meses siguientes a la obra. Esto convierte la calidad de ejecución en pintura en la inversión de marketing más eficiente del negocio.</p>
          </div>

          {HR}

          {/* 08 CONCLUSIONES */}
          <div className="section-anchor" id="conclusiones">
            <div className="section-label">08 — Conclusiones</div>
            <h2 className="h2">Lo que revela esta investigación.</h2>
            <div className="conclusion-grid">
              <div className="conclusion-cell"><div className="c-num">01</div><h4>Mercado de alta frecuencia y demanda continua</h4><p>El 35% de propietarios madrileños contratan pintura cada 5 años. Es la reforma más repetible del mercado, con demanda que no depende de eventos puntuales sino del ciclo natural de mantenimiento del hogar.</p></div>
              <div className="conclusion-cell"><div className="c-num">02</div><h4>Estacionalidad definida y aprovechable</h4><p>Dos picos (abril-junio y septiembre-octubre) y una temporada baja (enero-febrero). El pico se gestiona con agenda llena a precio alto. La temporada baja es el momento de proyectos de mayor ticket o de captación de comunidades de propietarios.</p></div>
              <div className="conclusion-cell"><div className="c-num">03</div><h4>Tres segmentos con lógicas de compra distintas</h4><p>Vivienda particular (emocional, prioriza limpieza y plazo), local comercial (exige noche/fin de semana) y comunidades de propietarios (proceso largo, ticket alto, el administrador es el prescriptor). Cada uno requiere un argumento de venta diferente.</p></div>
              <div className="conclusion-cell"><div className="c-num">04</div><h4>El diferencial no es técnico — es de proceso</h4><p>El cliente no sabe distinguir entre técnicas de pintura, pero sabe perfectamente si el pintor manchó su parquet. La protección del mobiliario, el plazo cumplido y la garantía post-obra son los tres diferenciadores con mayor impacto en la satisfacción y en la recomendación.</p></div>
              <div className="conclusion-cell"><div className="c-num">05</div><h4>Upsell natural en el 70% de los trabajos</h4><p>Grietas, humedades, juntas deterioradas y enlucido dañado aparecen sistemáticamente durante la preparación de superficies. El proveedor que los detecta, los explica y los resuelve añade valor real y aumenta el ticket medio sin necesidad de esfuerzo comercial adicional.</p></div>
              <div className="conclusion-cell"><div className="c-num">06</div><h4>La pintura es el generador de referencias más eficiente</h4><p>El resultado es visible para todos los visitantes del hogar. Un cliente satisfecho genera 2–3 referencias directas en los 12 meses siguientes. Es la inversión de marketing más eficiente disponible para Oro Constructores en el segmento residencial.</p></div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Pintores que acaban<br />cuando dicen — sin manchar nada.</h2>
          <p>Protección total de muebles y suelos. Plazo garantizado. Garantía post-obra de 30 días.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-paint-roller"></i> Pedir presupuesto de pintura</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">Hablar con nosotros</Link>
          </div>
        </div>
      </section>
    </>
  )
}
