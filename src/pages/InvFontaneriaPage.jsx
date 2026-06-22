import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvFontaneriaPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 10</div>
          <h1>Fontanería en Madrid: el mercado de urgencias y la puerta a la reforma integral</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>El 70% de las búsquedas de fontanería en Madrid son urgentes. Esta investigación analiza los dos mercados que coexisten — urgencias y reforma de instalaciones — el perfil del cliente en cada uno, los precios de referencia y por qué el servicio de urgencias es el mejor captador de clientes de reforma a largo plazo.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Fontanería Residencial y Hostelería, Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">INE · Canal de Isabel II · Habitissimo · Observatorio IDAE · Certicalia</span></div>
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
            <p>La fontanería en Madrid opera en dos mercados con lógicas de compra radicalmente distintas. El primero — y el mayor en volumen de solicitudes — es el mercado de urgencias: fugas, atascos, averías de caldera, cortes de agua. Aproximadamente el 70% de las búsquedas de fontanería en Madrid contienen términos de urgencia. El cliente no está planificando — tiene un problema ahora, el agua está cayendo o el baño está atascado, y necesita a alguien hoy. En este mercado, quien llega primero cobra más y el precio es secundario al tiempo de respuesta.</p>
            <p>El segundo mercado — reforma de fontanería — es planificado, comparable y sensible al precio. El cliente que reforma un baño o una cocina, que quiere cambiar la caldera o que necesita sustituir toda la instalación de tuberías por ser demasiado antigua, pide 2–3 presupuestos y toma una decisión en días o semanas. Madrid tiene un parque de tuberías con una antigüedad media alta: el 55% de los edificios residenciales tienen más de 40 años, con instalaciones que incluyen tramos de plomo y acero que requieren sustitución obligatoria por normativa o por deterioro.</p>
            <p>La oportunidad estratégica está en la conexión entre ambos mercados. El cliente al que resuelves una urgencia de fontanería — bien, rápido, sin sobresaltos — tiene una probabilidad estimada del 60–70% de contratarte cuando le llegue el momento de la reforma mayor. El servicio de urgencias bien ejecutado no es solo un trabajo: es el primer punto de contacto con el cliente de reforma residencial de mayor valor.</p>
            <p>Esta investigación analiza los dos mercados por separado, detalla el comportamiento del cliente en cada uno, compara la oferta actual en Madrid y extrae las implicaciones estratégicas concretas para Oro Constructores — tanto en el posicionamiento de urgencias como en la propuesta diferencial para reforma de instalaciones y hostelería.</p>
          </div>

          {/* INDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#dos-mercados" className="index-item"><span className="idx">03</span> Dos mercados con lógicas distintas</a>
              <a href="#urgencias" className="index-item"><span className="idx">04</span> El mercado de urgencias: comportamiento del cliente</a>
              <a href="#reforma" className="index-item"><span className="idx">05</span> El mercado de reforma de fontanería</a>
              <a href="#hosteleria" className="index-item"><span className="idx">06</span> Fontanería en hostelería</a>
              <a href="#precios" className="index-item"><span className="idx">07</span> Precios de referencia</a>
              <a href="#mercado" className="index-item"><span className="idx">08</span> Estructura del mercado actual</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">10</span> Fuentes y metodología</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y método de trabajo.</h2>
            <p className="body-text">Esta investigación combina datos del parque residencial de Madrid con análisis de comportamiento de búsqueda y solicitud de presupuesto en plataformas especializadas. Las fuentes de datos de parque residencial son el Censo de Edificios del INE y los informes de infraestructura de Canal de Isabel II. Los datos de comportamiento de búsqueda proceden del análisis de tendencias de Google y de los datos publicados por Habitissimo y Certicalia sobre categorías de mayor volumen de solicitud.</p>
            <p className="body-text">Los precios de referencia recogen tarifas actuales de fontanería en Madrid a junio de 2026, basadas en la comparación de presupuestos reales y en datos de plataformas de comparación. El análisis de la hostelería se basa en informes sectoriales de la Comunidad de Madrid y en la experiencia directa de Oro Constructores en este segmento.</p>
            <p className="body-text">La investigación no pretende ser representativa estadísticamente de todo el mercado: su propósito es orientar la estrategia comercial y de posicionamiento de Oro Constructores en el mercado de fontanería en Madrid, tanto en urgencias residenciales como en reformas y hostelería. Los datos se actualizarán con cada ciclo operativo y con la incorporación de experiencia directa de obra.</p>
            <p className="body-text">Los precios recogidos en la sección 07 corresponden a tarifas actuales a junio de 2026 y deben revisarse con cada ciclo de presupuestación real. El mercado de fontanería tiene una sensibilidad moderada a la inflación de materiales y a la disponibilidad de mano de obra cualificada, por lo que la actualización periódica de referencias es relevante para mantener la competitividad de los presupuestos de Oro Constructores.</p>
          </div>

          {HR}

          {/* 02 CONTEXTO */}
          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">Un parque de tuberías que envejece — y lo seguirá haciendo.</h2>
            <p className="body-text">La Comunidad de Madrid tiene aproximadamente 3,2 millones de viviendas. El 55% de los edificios residenciales tienen más de 40 años de antigüedad, lo que significa instalaciones de fontanería diseñadas y ejecutadas con materiales y normas de los años 60, 70 y 80 del siglo pasado. El problema específico de Madrid es la prevalencia de tuberías de plomo y acero en barrios de construcción antigua: Carabanchel, Tetuán, Vallecas, Lavapiés, Latina, Hortaleza interior y gran parte del Ensanche histórico.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '70%', label: 'de búsquedas de fontanería en Madrid contienen términos de urgencia' },
                { num: '55%', label: 'de edificios residenciales en Madrid tienen más de 40 años de antigüedad' },
                { num: '60–70%', label: 'de probabilidad de recontratar a quien resolió bien una urgencia' },
                { num: '3.000€', label: 'pérdida diaria estimada en un restaurante cerrado por avería de fontanería' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">Las tuberías de plomo fueron prohibidas en instalaciones de agua potable por la normativa española en 2003. Sin embargo, muchos edificios anteriores a esa fecha aún tienen tramos de plomo en sus instalaciones interiores, especialmente en los montantes generales del edificio y en las derivaciones a viviendas particulares. La sustitución de estas instalaciones es obligatoria cuando se detectan en obras de reforma o cuando el edificio solicita cédula de habitabilidad renovada. Esto genera una demanda de sustitución de instalaciones que se activará de forma masiva en los próximos 10–15 años a medida que las comunidades de propietarios acometan obras de rehabilitación.</p>
            <p className="body-text">Las tuberías de acero, más recientes que las de plomo pero igualmente problemáticas, tienen una vida útil de 30–40 años. Muchas instalaciones de acero de los años 80 están alcanzando o superando ese límite, con roturas espontáneas, pérdidas de presión y problemas de calidad de agua que se manifiestan como urgencias para el propietario pero que son síntomas de un problema de instalación que requiere solución integral.</p>

            <div style={{ background: 'var(--ink-6)', borderRadius: '12px', padding: '24px 28px', margin: '32px 0', borderLeft: '4px solid var(--oro)' }}>
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--ink)', fontSize: '15px', marginBottom: '8px' }}>El parque de tuberías de Madrid por generación</p>
              <p className="body-text" style={{ margin: 0 }}>Plomo — edificios anteriores a 1970, presentes en distritos históricos de construcción densa (Lavapiés, Tetuán, Carabanchel). Prohibido por normativa española desde 2003, su sustitución es obligatoria en obras de reforma. Acero galvanizado — construcción de los años 70 y 80, con vida útil superada o próxima a superarse. Cobre — instalaciones de los 90 y principios de 2000, en buen estado general salvo casos de agua muy dura. Multicapa y PVC — edificios de obra nueva desde 2005, sin incidencias de material. El fontanero que conoce esta estratigrafía de materiales puede anticipar lo que va a encontrar antes de abrir — y presupuestar con más precisión.</p>
            </div>
            <p className="body-text">La Comunidad de Madrid tendrá una demanda creciente de sustitución de instalaciones de plomo y acero durante la próxima década, impulsada por la normativa de rehabilitación y por las comunidades de propietarios que inicien obras de fachada o cubierta. Este ciclo de rehabilitación representa una oportunidad de trabajos de mayor ticket que los servicios de urgencia y que requiere posicionamiento anticipado.</p>
          </div>

          {HR}

          {/* 03 DOS MERCADOS */}
          <div className="section-anchor" id="dos-mercados">
            <div className="section-label">03 — Dos mercados con lógicas distintas</div>
            <h2 className="h2">Urgencias y reforma: clientes distintos, decisiones distintas.</h2>
            <p className="body-text">El mercado de fontanería en Madrid tiene dos segmentos con comportamientos de compra completamente distintos. Confundir las estrategias de captación y servicio entre ambos segmentos es el error más frecuente del proveedor de fontanería que quiere crecer.</p>

            <div style={{ background: 'var(--ink-6)', borderRadius: '12px', padding: '24px 28px', margin: '32px 0', borderLeft: '4px solid var(--oro)' }}>
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--ink)', fontSize: '15px', marginBottom: '8px' }}>La trampa de mezclar los dos mercados</p>
              <p className="body-text" style={{ margin: 0 }}>El proveedor que intenta competir en urgencias con la misma estrategia que usa en reforma — publicando precios, pidiendo que el cliente compare, esperando a que el cliente le encuentre en Google — pierde ambos mercados. Las urgencias se ganan con disponibilidad y velocidad de respuesta, no con argumentos de calidad. La reforma se gana con confianza técnica y presupuesto claro, no con disponibilidad inmediata. Tener clara esta distinción es el primer paso para diseñar una estrategia de fontanería que funcione en Madrid.</p>
            </div>

            <table className="r-table">
              <thead><tr><th>Característica</th><th>Urgencias</th><th>Reforma de fontanería</th></tr></thead>
              <tbody>
                <tr><td>Tiempo de decisión</td><td>Minutos — llama al primero que coge el teléfono</td><td>Días o semanas — pide 2–3 presupuestos</td></tr>
                <tr><td>Criterio principal</td><td>Disponibilidad inmediata y tiempo de llegada</td><td>Precio, experiencia y garantía del trabajo</td></tr>
                <tr><td>Sensibilidad al precio</td><td>Baja — acepta sobreprecio con tal de que alguien llegue hoy</td><td>Alta — compara presupuestos y negocia</td></tr>
                <tr><td>Ticket medio</td><td>150–600€ por intervención de urgencia</td><td>800–8.000€ según envergadura</td></tr>
                <tr><td>Canal de búsqueda</td><td>Llamada directa, Google Maps "fontanero cerca"</td><td>Google, recomendación, plataformas de comparación</td></tr>
                <tr><td>Frecuencia de repetición</td><td>Variable — cuando aparece una avería</td><td>Baja — cada 15–25 años por vivienda</td></tr>
                <tr><td>Potencial de recurrencia</td><td>Alto — el cliente guarda el número si la urgencia se resuelve bien</td><td>Medio — la reforma es puntual pero genera referencias</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 04 URGENCIAS */}
          <div className="section-anchor" id="urgencias">
            <div className="section-label">04 — El mercado de urgencias</div>
            <h2 className="h2">El cliente de urgencias llama al primero que coge el teléfono.</h2>
            <p className="body-text">El mercado de urgencias de fontanería en Madrid funciona de una forma muy específica y diferente a casi cualquier otro servicio de reforma. El cliente no está eligiendo un proveedor con criterios elaborados — está en una situación de estrés inmediato y toma decisiones en minutos.</p>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }}>Los cinco problemas que generan la urgencia — y lo que los complica</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                { icon: 'fa-solid fa-pipe-section', titulo: 'Tuberías de plomo o acero galvanizado ocultas', detalle: 'El fontanero tiene que abrir para saber qué hay. En viviendas anteriores a los años 90 de Carabanchel, Tetuán, Latina o Vallecas, la instalación original puede ser de plomo o acero. Hasta que no se abre la pared no se sabe. Esto convierte cualquier reparación en una investigación: el presupuesto inicial es orientativo porque el diagnóstico real solo llega cuando hay rotura. El cliente no lo entiende hasta que lo vive.' },
                { icon: 'fa-solid fa-eye-slash', titulo: 'La fuga que no se ve: el origen está a metros de donde parece', detalle: 'El cliente oye gotear pero la mancha aparece en el techo del vecino de abajo o en la pared de la habitación contigua. El agua viaja por dentro de los forjados y las paredes antes de manifestarse. Localizar el origen exacto de una fuga no visible requiere experiencia y en ocasiones equipos de detección. Sin esa capacidad, el fontanero abre donde no es y el problema continúa — con el coste añadido de cerrar lo que se abrió mal.' },
                { icon: 'fa-solid fa-gauge-high', titulo: 'Presión de red en Madrid: varía entre 2 y 8 bar según zona y hora', detalle: 'La red de distribución de Canal de Isabel II tiene variaciones de presión significativas entre distritos y a lo largo del día. Una instalación que funciona bien a las 10 de la mañana puede generar golpes de ariete o pérdidas de presión a las 8 de la tarde. Esto complica el diagnóstico de urgencias de presión: el fontanero llega, no reproduce el problema y no puede dar un diagnóstico certero sin medir la presión en distintos momentos o sin conocer el comportamiento de la red en esa zona concreta.' },
                { icon: 'fa-solid fa-moon', titulo: 'El fontanero que no trabaja fuera de horario: el sistema revienta el viernes por la noche', detalle: 'La avería de fontanería no elige horario. El tubo que revienta lo hace el viernes a las 22:00 o el sábado a las 8:00. El fontanero autónomo que no trabaja fuera de su jornada deja al cliente sin solución hasta el lunes. En esas horas, quien coge el teléfono y puede llegar ese mismo día — aunque sea con sobreprecio de urgencia — gana el trabajo sin ninguna competencia. La disponibilidad fuera de horario es el activo más escaso y más valioso del mercado de urgencias.' },
                { icon: 'fa-solid fa-layer-group', titulo: 'Coordinación con alicatador: si el fontanero no termina antes, hay que romper el alicatado ya puesto', detalle: 'En reformas de baño y cocina, el orden de oficios es crítico. El fontanero tiene que terminar su trabajo — tuberías, conexiones, prueba de presión — antes de que el alicatador cierre las paredes. Si el fontanero llega tarde, el alicatador ha avanzado y hay que romper lo que ya está puesto. Este problema es estructural cuando fontanero y alicatador son autónomos distintos que no se coordinan entre sí. El cliente lo descubre cuando ya hay daño hecho.' },
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

            {[
              ['El proceso de búsqueda en una urgencia', 'El cliente tiene una fuga, un atasco grave o un corte de agua inesperado. Lo primero que hace es llamar a alguien de confianza — un fontanero que ya conoce, el que usó la última vez. Si no tiene ese número a mano o si ese fontanero no coge el teléfono, pasa a Google: busca "fontanero urgente Madrid" o "fontanero cerca de mí" y llama al primero del mapa. Si en tres llamadas nadie responde o nadie puede venir hoy, hace otra búsqueda y repite el proceso. El que coge el teléfono y puede dar una hora de llegada ese día, gana el trabajo.'],
              ['El precio es secundario cuando hay agua en el suelo', 'El cliente de urgencias no está en posición de comparar precios. Si el fontanero dice "son 250€ de desplazamiento más lo que salga", el cliente acepta porque la alternativa es seguir con el agua cayendo. Esta dinámica hace que el mercado de urgencias tenga precios altos y estructuralmente poco negociables — no porque haya acuerdo de precios, sino porque el cliente en urgencia no tiene tiempo ni motivación para buscar una segunda opinión.'],
              ['La urgencia bien resuelta crea fidelidad inmediata', 'El cliente que llama con agua en el suelo, recibe a alguien en dos horas, el problema se resuelve ese mismo día y el fontanero le explica qué ha pasado y por qué — ese cliente guarda el número en el teléfono. No lo busca en Google la próxima vez. Y cuando tenga que reformar el baño en dos años, llama a quien le resolvió la urgencia. La urgencia es la primera impresión y el punto de entrada a la relación a largo plazo.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 05 REFORMA */}
          <div className="section-anchor" id="reforma">
            <div className="section-label">05 — El mercado de reforma de fontanería</div>
            <h2 className="h2">Instalaciones que superan su vida útil y un cliente que compara.</h2>
            <p className="body-text">El mercado de reforma de fontanería en Madrid está impulsado principalmente por dos eventos: la reforma de baño o cocina, que requiere nueva instalación de agua y desagüe, y la sustitución de instalaciones antiguas por deterioro o incumplimiento de normativa. En ambos casos el cliente tiene tiempo para planificar y compara presupuestos con mayor detenimiento que en urgencias.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '40%', label: 'de las reformas de baño en Madrid incluyen sustitución completa de fontanería' },
                { num: '30–40', label: 'años es la vida útil de las tuberías de acero — muchas en Madrid ya la superan' },
                { num: '3.000–8.000€', label: 'ticket de sustitución completa de instalación en vivienda de tamaño medio' },
                { num: '4', label: 'generaciones de materiales coexisten en el parque residencial madrileño' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">La reforma de baño es el caso más frecuente. Aproximadamente el 40% de las reformas de baño en Madrid incluyen sustitución completa de la fontanería, no solo el alicatado y los sanitarios. El cliente que reforma un baño en un piso de los años 70 se encuentra con tuberías de cobre o acero que ya tienen 40–50 años y que, aunque no presenten avería inmediata, es recomendable sustituir mientras las paredes están abiertas. El coste incremental de sustituir la fontanería mientras ya hay reforma es mucho menor que hacerlo en una intervención futura.</p>
            <p className="body-text">La sustitución de instalaciones completas — desde la acometida hasta los puntos de consumo — es el trabajo de mayor ticket en fontanería residencial, con presupuestos que van de 3.000€ a 8.000€ en viviendas de tamaño medio. Este mercado tiene una estacionalidad ligada a la reforma integral: pico en primavera y en septiembre-octubre, coincidiendo con la temporada alta de reformas.</p>

            {[
              ['El coste de aprovechar que ya están las paredes abiertas', 'La lógica más frecuente en fontanería de reforma es la del coste marginal: si ya hay que abrir la pared para reformar el baño, el coste de sustituir las tuberías mientras está abierta es mucho menor que hacerlo en una intervención futura. Un fontanero que detecta tuberías de acero o cobre en mal estado y no lo comunica en este momento le está haciendo un flaco favor al cliente. El argumento es directo: "mientras estamos aquí, por X euros más, evitamos una urgencia en tres años". En reforma planificada, ese argumento se acepta con frecuencia.'],
              ['El fontanero de reforma necesita diagnóstico previo del material', 'Madrid tiene cuatro generaciones de tuberías en su parque residencial: plomo (pre-1970), acero galvanizado (1970-1990), cobre (1990-2005) y multicapa o PVC (post-2005). El fontanero que entra a presupuestar una reforma sin saber qué material va a encontrar no puede dar un precio cerrado. La diferencia entre una instalación de multicapa que hay que adaptar y una de plomo que hay que sustituir completa puede suponer 1.500-3.000€ de diferencia en el presupuesto final. Conocer el año de construcción del edificio y el distrito ya permite anticipar qué material hay con alta probabilidad antes de abrir.'],
              ['La coordinación con el alicatador como argumento de venta', 'En reformas de baño y cocina, el orden fontanero-alicatador es crítico. Si el fontanero termina tarde, el alicatado que ya está puesto hay que romperlo. Si termina pronto pero no hay nadie para cerrar la pared, el plazo se alarga. Esta coordinación, que en el mercado actual suele ser responsabilidad del propio cliente, es el argumento diferenciador más potente de Oro Constructores en presupuestos de reforma que incluyen fontanería: los dos oficios son propios, el fontanero termina antes de que el alicatador empiece, y el cliente no tiene que gestionar nada.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <table className="r-table">
              <thead><tr><th>Tipo de trabajo</th><th>Ticket orientativo</th><th>Plazo típico</th></tr></thead>
              <tbody>
                <tr><td>Reforma fontanería de baño completo</td><td>1.200–2.500€</td><td>2–3 días de ejecución</td></tr>
                <tr><td>Sustitución de caldera de gas</td><td>1.500–3.000€ (instalación + equipo)</td><td>1 día</td></tr>
                <tr><td>Sustitución instalación completa vivienda</td><td>3.000–8.000€</td><td>5–10 días</td></tr>
                <tr><td>Reforma fontanería de cocina</td><td>600–1.500€</td><td>1–2 días</td></tr>
                <tr><td>Instalación de calefacción por radiadores</td><td>4.000–10.000€</td><td>5–15 días</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 06 HOSTELERÍA */}
          <div className="section-anchor" id="hosteleria">
            <div className="section-label">06 — Fontanería en hostelería</div>
            <h2 className="h2">El restaurante paga lo que haga falta para abrir ese día.</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '3.000€', label: 'pérdida estimada por día de cierre en un restaurante de volumen medio' },
                { num: '3–4x', label: 'mayor frecuencia de avería de fontanería en hostelería vs. uso residencial equivalente' },
                { num: '2–3x', label: 'la tarifa estándar que acepta un restaurante en fin de semana para garantizar apertura' },
                { num: '3–6 meses', label: 'intervalo de atasco grave en desagüe de cocina sin mantenimiento preventivo' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">El segmento de hostelería es el mercado de fontanería con mayor urgencia percibida y mayor tolerancia al precio en toda la cadena. Un restaurante con la cocina sin agua o con los desagües bloqueados no puede operar. La pérdida de ingresos por cierre o degradación del servicio está entre 1.000€ y 3.000€ por día, dependiendo del tipo de local, el día de la semana y la ocupación habitual. Frente a esa pérdida, el coste de un fontanero de urgencias —incluso a tarifa de emergencia— es secundario.</p>
            <p className="body-text">Las cocinas de restaurante tienen características específicas que generan mayor frecuencia de averías que una instalación residencial: presión constante en las tuberías de agua caliente, grasas en los desagües de cocina que se acumulan y forman atascos, conexiones de lavavajillas y lavamanos industriales que trabajan a caudales superiores a los domésticos y que sobrecargan las instalaciones diseñadas para uso residencial. Un restaurante de volumen medio necesita intervención de fontanería con una frecuencia 3–4 veces mayor que una vivienda de tamaño equivalente.</p>

            {[
              ['El problema de las grasas en desagüe de cocina', 'Es la incidencia más frecuente en fontanería de hostelería. Las grasas cocinadas se solidifican en las tuberías de desagüe a temperatura ambiente, formando taponamientos que pueden bloquear completamente el drenaje de la cocina. Un restaurante que no mantiene sus desagües con regularidad tiene un atasco grave cada 3–6 meses. El mantenimiento preventivo — limpieza de desagüe cada 2–3 meses — es la solución más eficiente, pero muchos restaurantes solo actúan cuando hay avería.'],
              ['Lavavajillas industriales y consumo de agua', 'Los lavavajillas industriales de hostelería consumen entre 3 y 10 litros por ciclo, con ciclos de 2–3 minutos. En un turno de servicio de 4 horas, esto supone cientos de litros de agua caliente a presión. Las conexiones de alimentación y desagüe de estos equipos requieren instalación específica y mantenimiento regular — conexiones mal dimensionadas o en mal estado generan pérdidas de presión, fallos del equipo y riesgo de inundación.'],
              ['Urgencias en hostelería: el horario no importa', 'Una avería de fontanería en un restaurante a las 9 de la mañana del sábado, con el primer servicio a las 14:00, es una emergencia. El restaurante llamará a quien sea capaz de venir en las próximas horas, en fin de semana, con precio de urgencia. El fontanero que está disponible en este horario y puede garantizar llegada en 2 horas tiene en este segmento una tarifa de mercado que puede ser 2–3 veces la tarifa estándar de semana, y el cliente la aceptará sin negociar.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 07 PRECIOS */}
          <div className="section-anchor" id="precios">
            <div className="section-label">07 — Precios de referencia</div>
            <h2 className="h2">Tarifas actuales de mercado en Madrid — junio 2026.</h2>
            <p className="body-text">Los precios de fontanería en Madrid tienen una dispersión mayor que otros oficios, especialmente en urgencias, donde la disponibilidad inmediata tiene un valor de mercado real. Los precios siguientes son orientativos y sin IVA.</p>

            <div style={{ background: 'var(--ink-6)', borderRadius: '12px', padding: '24px 28px', margin: '32px 0', borderLeft: '4px solid var(--oro)' }}>
              <p style={{ margin: 0, fontWeight: 700, color: 'var(--ink)', fontSize: '15px', marginBottom: '8px' }}>Sobre la dispersión de precios en urgencias</p>
              <p className="body-text" style={{ margin: 0 }}>El precio de urgencia de fontanería en Madrid puede variar entre 150€ y 600€ por la misma intervención, dependiendo del proveedor, el horario y si el cliente ha podido comparar o no. El cliente en urgencia no compara: llama al primero que coge el teléfono y acepta el precio. Esto hace que la dispersión de precios en urgencias sea estructuralmente alta. Comunicar un precio de referencia claro — incluso si es más alto que el de un autónomo — transmite profesionalidad y reduce la resistencia del cliente.</p>
            </div>

            <table className="r-table">
              <thead><tr><th>Trabajo</th><th>Precio orientativo</th><th>Observaciones</th></tr></thead>
              <tbody>
                <tr><td>Desplazamiento + primera hora (urgencia)</td><td>150–300€</td><td>Tarifa base de urgencia. Precio mayor en fines de semana y festivos.</td></tr>
                <tr><td>Reparación de fuga en tubería vista</td><td>200–500€</td><td>Variable según accesibilidad y tipo de tubería.</td></tr>
                <tr><td>Reparación de fuga en tubería empotrada</td><td>600–2.000€</td><td>Incluye apertura y cierre de pared. Alta variabilidad según profundidad.</td></tr>
                <tr><td>Desatasco de tubería</td><td>150–400€</td><td>Con máquina helicoidal o hidrojetting según gravedad.</td></tr>
                <tr><td>Sustitución de grifo o llave de paso</td><td>80–200€</td><td>Material no incluido. Mano de obra y desplazamiento.</td></tr>
                <tr><td>Sustitución de caldera de gas (instalación)</td><td>300–600€ (mano de obra)</td><td>Equipo aparte: 600–2.000€ según modelo.</td></tr>
                <tr><td>Reforma fontanería baño completo</td><td>1.200–2.500€</td><td>Mano de obra. Material (tuberías, conexiones) aparte o incluido según presupuesto.</td></tr>
              </tbody>
            </table>

            <p className="nota">Los precios de urgencias tienen un sobrecoste habitual del 50–100% sobre la tarifa estándar en fin de semana, festivos y noches. El mercado de Madrid acepta este sobrecoste porque la alternativa — esperar al lunes — tiene un coste mayor para el cliente.</p>
          </div>

          {HR}

          {/* 08 MERCADO ACTUAL */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">08 — Estructura del mercado actual</div>
            <h2 className="h2">Fontaneros que no cogen el teléfono — la oportunidad más clara del mercado.</h2>
            <p className="body-text">El mercado de fontanería en Madrid está dominado por autónomos individuales y cuadrillas de 2–3 personas. Es un mercado muy fragmentado, sin actores dominantes y con escasa diferenciación de propuesta de valor. La queja más frecuente del cliente no es el precio ni la calidad técnica — es la falta de disponibilidad y la dificultad de contactar con el proveedor.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de proveedor</th><th>Fortalezas</th><th>Déficits habituales</th></tr></thead>
              <tbody>
                <tr><td>Fontanero autónomo individual</td><td>Precio ajustado. Conocimiento del barrio y los edificios donde ha trabajado.</td><td>No siempre coge el teléfono. Saturado en temporada alta. Sin garantía formal. Si está en obra no puede ir a una urgencia.</td></tr>
                <tr><td>Empresa de fontanería (5–15 personas)</td><td>Mayor capacidad. Turno de guardia posible. Garantías formales.</td><td>Precio más alto. Proceso de presupuestación más lento. Menos trato personal.</td></tr>
                <tr><td>Empresa de reformas con fontanería integrada</td><td>Fontanería como parte de un proyecto integral. Un interlocutor para toda la obra.</td><td>No siempre atienden urgencias fuera del proyecto en curso. La fontanería puede ser subcontratada.</td></tr>
                <tr><td>Plataformas de urgencias (Cronoshare, Habitissimo)</td><td>Acceso rápido a múltiples proveedores disponibles.</td><td>El cliente recibe múltiples llamadas. Calidad muy variable entre proveedores de la plataforma. No hay relación de confianza previa.</td></tr>
              </tbody>
            </table>

            {[
              ['La señal de demanda más clara: el cliente que no encuentra a nadie el viernes por la noche', 'El fontanero autónomo individual — que representa la mayoría del mercado — cierra su jornada a las 18:00 y no coge el teléfono en fin de semana. La demanda de urgencias fuera de horario existe, es real y está sistemáticamente desatendida. Quien diseña un sistema que responde a esta demanda — turno de guardia propio, número directo con respuesta garantizada — captura un segmento entero del mercado sin competencia directa.'],
              ['El cliente fidelizado vale más que diez captados por publicidad', 'El fontanero al que el cliente llama "sin buscar en Google" tiene un coste de adquisición de cliente efectivamente nulo. Ese capital de fidelización se construye urgencia a urgencia, y se materializa cuando el mismo cliente necesita reformar el baño, cambiar la caldera o hacer obras en la cocina. El mercado de fontanería en Madrid no necesita inversión en publicidad para crecer: necesita que cada urgencia resuelta bien se convierta en un número guardado en el teléfono del cliente.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">El teléfono que siempre coge — y lo que eso genera a largo plazo.</h2>
            <p className="body-text">La fontanería urgente es el servicio de mayor potencial de captación de clientes para Oro Constructores, con una inversión de marketing prácticamente nula. El mecanismo es directo: la empresa que siempre coge el teléfono, que llega ese mismo día, que resuelve la avería correctamente y que explica qué ha pasado — esa empresa guarda el número de ese cliente para siempre.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '01', titulo: 'Urgencias: número directo con respuesta garantizada ese día', detalle: 'La diferenciación en urgencias no es técnica ni de precio — es de disponibilidad. El cliente llama por orden: primero a quien conoce, después a Google. Si Oro Constructores está en ese primer puesto — porque ya ha trabajado con ese cliente, porque ha venido cuando nadie venía, porque se lo recomendó un vecino — cada avería futura es nuestra. Publicitar un tiempo de respuesta garantizado (ej. "en 2 horas o no cobramos desplazamiento") es el argumento más potente que existe en este mercado. El posicionamiento en urgencias se construye urgencia a urgencia, no con publicidad.' },
                { num: '02', titulo: 'Conocimiento del parque de tuberías de Madrid como diferenciador técnico', detalle: 'Madrid tiene una composición de instalaciones única: plomo en edificios anteriores a 1970, acero galvanizado en los años 80, cobre en los 90 y principios de 2000, multicapa y PVC en obra nueva. Un fontanero que entra a un piso de Carabanchel o Tetuán y sabe de antemano qué material encontrará — y qué problemas específicos tiene — genera confianza técnica inmediata. Comunicar este conocimiento en la web, en la explicación al cliente y en el presupuesto es una ventaja frente a cualquier autónomo sin experiencia en el parque histórico madrileño.' },
                { num: '03', titulo: 'Fontanero y alicatador propios para reformas de baño y cocina sin esperas ni retrabajos', detalle: 'El problema más frecuente en reformas que incluyen fontanería es la coordinación entre el fontanero y quien cierra la pared o coloca el alicatado. Si el fontanero no termina antes, hay que abrir el alicatado ya puesto. Con equipo propio en ambos oficios, Oro Constructores controla el orden de los trabajos, elimina esperas entre subcontratistas y garantiza que la reforma avanza sin retrabajos. Este argumento es especialmente potente en presupuestos de reforma de baño y cocina completa.' },
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

          {/* 10 FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes y metodología</div>
            <h2 className="h2">Referencias y base documental.</h2>
            <p className="body-text">Esta investigación se apoya en las siguientes fuentes:</p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>INE — Censo de Edificios y Viviendas. <em>Antigüedad del parque residencial en la Comunidad de Madrid.</em> 2021.</li>
              <li>Canal de Isabel II. <em>Informe anual de infraestructura y abastecimiento de agua en Madrid.</em> 2024.</li>
              <li>ASEFAVE — Asociación de Fabricantes de Tuberías y Accesorios de PVC. <em>Datos de instalaciones y sustitución de redes en España.</em> 2023.</li>
              <li>IDAE — Instituto para la Diversificación y Ahorro de la Energía. <em>Stock de calderas y consumo energético en viviendas por comunidad autónoma.</em> 2023.</li>
              <li>Habitissimo. <em>Estudio de precios y demanda en fontanería residencial en Madrid.</em> 2025.</li>
              <li>Certicalia. <em>Ranking de categorías por volumen de solicitud — fontanería, urgencias y reformas.</em> 2024.</li>
              <li>Oro Constructores. <em>Observación directa: precios de referencia, patrones de comportamiento de cliente y experiencia en hostelería. Madrid.</em> 2026.</li>
            </ul>
            <p className="body-text">La estrategia de fontanería de Oro Constructores se basa en los tres ejes que esta investigación identifica como diferenciadores: disponibilidad inmediata en urgencias, conocimiento técnico del parque de tuberías de Madrid y coordinación de oficios propia para reformas. Cada urgencia bien resuelta es una inversión en el cliente de reforma del futuro. Los datos de esta investigación deben revisarse anualmente con los datos directos de obra para mantener la precisión de los precios de referencia y los patrones de comportamiento del cliente.</p>
            <p className="nota">* Esta investigación es un documento interno de análisis de mercado elaborado por Oro Constructores. Los datos estadísticos corresponden a las publicaciones oficiales más recientes disponibles a junio de 2026. Los porcentajes de comportamiento de búsqueda son estimaciones basadas en análisis de tendencias de Google y datos de plataformas de comparación.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Fontanería urgente<br />y reforma de instalaciones en Madrid.</h2>
          <p>Atendemos urgencias el mismo día. Presupuestos de reforma sin compromiso.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg"><i className="fa-solid fa-phone"></i> Contactar</Link>
          </div>
        </div>
      </section>
    </>
  )
}
