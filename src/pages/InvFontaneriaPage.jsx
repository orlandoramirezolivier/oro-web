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
          </div>

          {HR}

          {/* 03 DOS MERCADOS */}
          <div className="section-anchor" id="dos-mercados">
            <div className="section-label">03 — Dos mercados con lógicas distintas</div>
            <h2 className="h2">Urgencias y reforma: clientes distintos, decisiones distintas.</h2>
            <p className="body-text">El mercado de fontanería en Madrid tiene dos segmentos con comportamientos de compra completamente distintos. Confundir las estrategias de captación y servicio entre ambos segmentos es el error más frecuente del proveedor de fontanería que quiere crecer.</p>

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
            <p className="body-text">La reforma de baño es el caso más frecuente. Aproximadamente el 40% de las reformas de baño en Madrid incluyen sustitución completa de la fontanería, no solo el alicatado y los sanitarios. El cliente que reforma un baño en un piso de los años 70 se encuentra con tuberías de cobre o acero que ya tienen 40–50 años y que, aunque no presenten avería inmediata, es recomendable sustituir mientras las paredes están abiertas. El coste incremental de sustituir la fontanería mientras ya hay reforma es mucho menor que hacerlo en una intervención futura.</p>
            <p className="body-text">La sustitución de instalaciones completas — desde la acometida hasta los puntos de consumo — es el trabajo de mayor ticket en fontanería residencial, con presupuestos que van de 3.000€ a 8.000€ en viviendas de tamaño medio. Este mercado tiene una estacionalidad ligada a la reforma integral: pico en primavera y en septiembre-octubre, coincidiendo con la temporada alta de reformas.</p>

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
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">El teléfono que siempre coge — y lo que eso genera a largo plazo.</h2>
            <p className="body-text">La fontanería urgente es el servicio de mayor potencial de captación de clientes para Oro Constructores, con una inversión de marketing prácticamente nula. El mecanismo es directo: la empresa que siempre coge el teléfono, que llega ese mismo día, que resuelve la avería correctamente y que explica qué ha pasado — esa empresa guarda el número de ese cliente para siempre.</p>

            {[
              ['Posicionar el número como "el que siempre coge"', 'La diferenciación en urgencias no es técnica ni de precio — es de disponibilidad. El cliente de urgencias llama por orden: primero a quien conoce, después a Google. Si Oro Constructores está en ese primer puesto — porque ya ha trabajado con ese cliente, porque ha venido cuando nadie venía, porque se lo recomendó un vecino — cada avería futura es nuestra. El posicionamiento en urgencias se construye urgencia a urgencia, no con publicidad.'],
              ['La urgencia resuelta tiene probabilidad del 60–70% de derivar en reforma', 'El cliente que reforma el baño o la cocina tiende a llamar primero a quien le resolvió la urgencia cuando tenía el agua cayendo. No busca en Google — llama al que ya conoce. Esta tasa de conversión — urgencia bien resuelta a cliente de reforma — es la razón por la que el servicio de urgencias tiene un valor estratégico mucho mayor que su ticket individual. El coste de captación del cliente de reforma que ya nos conoce por una urgencia es prácticamente cero.'],
              ['Hostelería urgente: el segmento de mayor ticket y menor resistencia al precio', 'El restaurante con avería de fontanería el viernes a las 11:00 pagará lo que sea necesario para abrir al mediodía. Si Oro Constructores es la empresa que el restaurante llama cuando hay avería — porque ya trabajamos allí en una reforma anterior, porque nos conocen del sector, porque respondemos el fin de semana — tenemos el cliente de hostelería más fiel posible: el que sabe que siempre respondemos cuando el problema es urgente.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 10 FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes y metodología</div>
            <h2 className="h2">Referencias y base documental.</h2>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>INE — Censo de Edificios y Viviendas 2021</td><td>Antigüedad del parque residencial en Madrid. 55% de edificios con más de 40 años.</td></tr>
                <tr><td>Canal de Isabel II — Informes de infraestructura</td><td>Estado de las redes de distribución. Datos sobre tuberías de plomo en red interna de edificios.</td></tr>
                <tr><td>Instituto para la Diversificación y Ahorro de la Energía (IDAE)</td><td>Datos sobre calderas y consumo energético en viviendas. Stock de calderas antiguas por comunidad autónoma.</td></tr>
                <tr><td>Habitissimo / Certicalia — Datos de mercado 2024–2025</td><td>Volumen de solicitudes por categoría. Distribución urgencias vs. reforma planificada. Precios medios de mercado.</td></tr>
                <tr><td>Experiencia directa Oro Constructores</td><td>Precios de referencia Madrid junio 2026. Patrones de comportamiento cliente en urgencias. Experiencia en hostelería.</td></tr>
              </tbody>
            </table>
            <p className="nota">Esta investigación es un documento interno de análisis de mercado elaborado por Oro Constructores. Los datos estadísticos corresponden a las publicaciones oficiales más recientes disponibles a junio de 2026. Los porcentajes de comportamiento de búsqueda son estimaciones basadas en análisis de tendencias de Google y datos de plataformas de comparación.</p>
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
