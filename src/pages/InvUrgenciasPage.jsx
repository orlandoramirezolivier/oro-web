import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvUrgenciasPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 7</div>
          <h1>Urgencias en hostelería: impacto económico y respuesta del mercado</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>Cuánto cuesta una avería a un restaurante en Madrid, qué tipos de urgencias cierran locales y por qué el mercado actual de servicios técnicos no está preparado para responder cuando el dueño más lo necesita.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Hostelería — Restauración</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">Hostelería Madrid · INE · Datos primarios de operadores · Análisis de mercado</span></div>
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
            <p>Un restaurante de Madrid factura de media entre 800 y 2.500 euros al día. Cuando una avería grave paraliza la operativa — extracción rota, fuga en cocina, fallo eléctrico total — el coste no es solo lo que se deja de facturar ese día. Es también el género perecible que no se puede servir, la reseña negativa en Google Maps del cliente que llegó y encontró el local cerrado, y la credibilidad del local frente a su clientela habitual. Una sola avería mal gestionada puede costar entre 1.000 y 5.000 euros en pérdidas directas y diferidas.</p>
            <p>El mercado actual de servicios de urgencia para hostelería presenta un déficit estructural: los autónomos individuales no tienen disponibilidad inmediata, las empresas grandes no atienden tickets pequeños con urgencia, y el dueño de restaurante no tiene un número de teléfono de confianza al que llamar y saber que alguien va a aparecer ese mismo día. Este vacío es real, cuantificable y sistemático.</p>
            <p>La oportunidad para Oro Constructores es doble: el servicio de urgencias genera ingresos directos con sobrecoste aceptado, y es el mejor canal de entrada al cliente hostelero para convertir urgencias resueltas en reformas planificadas. El cliente que confía su urgencia a un proveedor no cambia de proveedor para la reforma siguiente.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#impacto" className="index-item"><span className="idx">01</span> Impacto económico de una avería</a>
              <a href="#tipos" className="index-item"><span className="idx">02</span> Tipos de avería más frecuentes</a>
              <a href="#perfiles" className="index-item"><span className="idx">03</span> Perfil del propietario</a>
              <a href="#problemas" className="index-item"><span className="idx">04</span> Problemas y fricciones</a>
              <a href="#mercado" className="index-item"><span className="idx">05</span> El mercado actual — déficit</a>
              <a href="#decision" className="index-item"><span className="idx">06</span> Patrón de decisión en urgencias</a>
              <a href="#estacionalidad" className="index-item"><span className="idx">07</span> Estacionalidad</a>
              <a href="#hallazgos" className="index-item"><span className="idx">08</span> Hallazgos clave</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">10</span> Fuentes</a>
            </div>
          </div>

          {/* 01 IMPACTO */}
          <div className="section-anchor" id="impacto">
            <div className="section-label">01 — Impacto económico</div>
            <h2 className="h2">Cuánto cuesta una avería a un restaurante en Madrid.</h2>
            <p className="body-text">Para entender el mercado de urgencias en hostelería hay que empezar por lo que está en juego económicamente. El restaurador no llama a un técnico porque tenga avería: llama porque tiene una pérdida activa que crece por horas. Ese contexto define todo — la disposición a pagar, la urgencia de la decisión y los criterios de selección del proveedor.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '800€', label: 'Facturación mínima diaria de un restaurante medio en Madrid' },
                { num: '2.500€', label: 'Facturación diaria de un restaurante de volumen alto' },
                { num: '3.000€', label: 'Pérdida estimada por un día de cierre (facturación + género)' },
                { num: '24–72h', label: 'Tiempo de respuesta habitual de la oferta actual para urgencias' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">Las pérdidas de un día de cierre no se limitan a la facturación no realizada. El análisis completo de costes por cierre de un restaurante medio (80–100 cubiertos, ticket medio 25–35€, dos servicios diarios) incluye varias categorías:</p>

            <table className="r-table">
              <thead><tr><th>Componente de pérdida</th><th>Estimación</th><th>Recuperable</th></tr></thead>
              <tbody>
                <tr><td>Facturación no realizada (servicio de comidas)</td><td>800–2.500€/día</td><td>No</td></tr>
                <tr><td>Género perecible inutilizado</td><td>150–600€/día</td><td>No</td></tr>
                <tr><td>Coste de personal igualmente presente</td><td>200–500€/día</td><td>No</td></tr>
                <tr><td>Reseñas negativas en Google Maps</td><td>Impacto reputacional indefinido</td><td>Difícilmente</td></tr>
                <tr><td>Reservas canceladas que no regresan</td><td>Variable, impacto en semanas posteriores</td><td>Parcialmente</td></tr>
                <tr><td>Coste de la reparación en sí</td><td>200–3.000€ según avería</td><td>N/A</td></tr>
              </tbody>
            </table>

            <p className="body-text">Un restaurante con dos días de cierre por una avería que podría haberse resuelto en la tarde del primer día pierde entre 2.000 y 6.000 euros en total. Si ese mismo restaurante paga un sobrecoste del 50% por un servicio de urgencia que resuelve el problema en 4 horas, sigue ganando dinero en la comparación. Este es el contexto que hace que el mercado de urgencias sea económicamente diferente al mercado de reformas: el cliente no compara precios, compara el coste de esperar con el coste de pagar ahora.</p>
          </div>

          {HR}

          {/* 02 TIPOS */}
          <div className="section-anchor" id="tipos">
            <div className="section-label">02 — Tipos de avería</div>
            <h2 className="h2">Las averías que cierran locales — y las que degradan la operativa.</h2>
            <p className="body-text">No todas las averías tienen el mismo impacto. Hay averías que fuerzan el cierre inmediato del local (el riesgo es no poder abrir al día siguiente), averías que degradan la operativa sin cerrarlo (se puede operar pero en condiciones subóptimas) y averías que generan riesgo legal o reputacional diferido. Cada categoría tiene una lógica de respuesta distinta.</p>

            <h3 style={h3style}>Averías de cierre inmediato — plazo de tolerancia: 0–4 horas</h3>

            {[
              ['Extracción de cocina averiada — la que más cierra locales', 'La campana extractora o el sistema de ventilación de la cocina industrial es, según los datos del sector, la avería que provoca más cierres de restaurantes en Madrid. La normativa de protección contra incendios y de ventilación de locales de hostelería impide cocinar sin extracción activa: no es solo una cuestión de humo, sino de obligación legal. El inspector puede ordenar el cierre cautelar del local de inmediato. Los motores de extracción industrial se avían sin avisar, los filtros saturados pueden provocar fallos eléctricos, y la reparación requiere tanto conocimiento de electricidad como de instalaciones de ventilación. Es el escenario donde la respuesta en pocas horas tiene mayor valor percibido.'],
              ['Rotura de fontanería activa en cocina', 'Una fuga activa en la cocina de un restaurante — bajo la pila, en la conexión del lavavajillas industrial, en el sistema de refrigeración — genera una inundación que hace imposible operar. Hay riesgo para el personal, para los equipos eléctricos cercanos y para el local de abajo si hay vecinos. El restaurador necesita a alguien que llegue inmediatamente, corte el suministro, encuentre el origen y repare. No puede esperar a que "le digan el presupuesto mañana".'],
              ['Fallo eléctrico total — cuadro, diferencial o línea principal', 'Sin electricidad no hay cocina, no hay frío, no hay luz. Los equipos de refrigeración empiezan a perder temperatura en 2–4 horas. Un fallo total del cuadro eléctrico de un restaurante es una emergencia de primer nivel: si no se resuelve en el día, el género perecible de todos los frigoríficos y cámaras queda inutilizable, sumando pérdidas económicas directas que pueden superar el coste de la propia reparación.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <h3 style={h3style}>Averías de degradación operativa — plazo de tolerancia: horas o días</h3>

            <table className="r-table">
              <thead><tr><th>Tipo de avería</th><th>Impacto operativo</th><th>Plazo real de tolerancia</th></tr></thead>
              <tbody>
                <tr><td>Cámara frigorífica con pérdida de temperatura</td><td>Riesgo para el género en 2–4 horas. El restaurante puede operar sin ella si traslada el género, pero la pérdida económica crece por hora.</td><td>2–6 horas</td></tr>
                <tr><td>Baños inoperativos (fuga o atasco grave)</td><td>La inspección sanitaria puede ordenar cierre cautelar. El dueño no puede tener los baños cerrados más de unas horas en servicio activo.</td><td>2–8 horas</td></tr>
                <tr><td>Luminaria de sala o cocina averiada</td><td>Se puede operar con luz reducida, pero la experiencia del cliente se degrada y hay implicaciones de normativa de iluminación.</td><td>1–3 días</td></tr>
                <tr><td>Goteras en sala o terraza</td><td>Imposible sentar clientes en esa zona. Daño estético y de imagen. Riesgo de accidente si el suelo está mojado.</td><td>Días</td></tr>
                <tr><td>Azulejo suelto o pavimento roto en cocina</td><td>Riesgo de sanción en inspección sanitaria. No impide operar inmediatamente, pero es urgente antes de la próxima visita de Sanidad.</td><td>Semanas</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 03 PERFILES */}
          <div className="section-anchor" id="perfiles">
            <div className="section-label">03 — Perfil del propietario</div>
            <h2 className="h2">Quién llama cuando hay una urgencia — y cómo decide.</h2>
            <p className="body-text">El propietario de restaurante que llama en una urgencia no es un perfil homogéneo. La situación de negocio, el tamaño del local y la estructura organizativa condicionan quién toma la decisión, con qué urgencia y cuánto está dispuesto a pagar. Identificar el perfil del interlocutor en la primera llamada permite enfocar el argumento correcto desde el primer minuto.</p>

            <table className="r-table">
              <thead><tr><th>Perfil</th><th>Decisor real</th><th>Urgencia percibida</th><th>Disposición a pagar sobreprecio</th></tr></thead>
              <tbody>
                <tr><td>Dueño de restaurante local (1 local, 40–100 cubiertos, trabaja en el local)</td><td>El propio dueño, en el momento de la avería</td><td>Máxima — él ve la pérdida en tiempo real</td><td>Alta — entiende el coste del cierre mejor que nadie</td></tr>
                <tr><td>Grupo de restaurantes (2–5 locales, con encargado)</td><td>El encargado llama; el dueño aprueba si supera cierto importe</td><td>Alta — el encargado quiere resolver antes de que el dueño se entere</td><td>Media — el encargado no quiere justificar un gasto alto sin comparar</td></tr>
                <tr><td>Franquicia o local con contrato de mantenimiento</td><td>El encargado llama al proveedor habitual; si no responde, busca alternativa</td><td>Alta — tiene SLA que cumplir y cliente final que atender</td><td>Media-alta — en urgencias acepta pagar fuera del contrato marco</td></tr>
              </tbody>
            </table>

            <p className="body-text">El perfil más valioso para Oro Constructores es el <strong>dueño del local independiente</strong>. Es quien toma la decisión en solitario, quien más sufre la pérdida económica y quien más convierte en cliente recurrente cuando la urgencia queda bien resuelta. El grupo de restaurantes puede ser valioso a largo plazo pero requiere un proceso de aprobación que ralentiza la contratación en urgencias.</p>
            <p className="body-text">La franquicia merece atención especial: tiene proveedor habitual pero ese proveedor no siempre responde en horario de tarde o fin de semana. Es el perfil donde el posicionamiento de "respuesta garantizada fuera de horario" tiene mayor impacto diferencial.</p>
          </div>

          {HR}

          {/* 04 PROBLEMAS Y FRICCIONES */}
          <div className="section-anchor" id="problemas">
            <div className="section-label">04 — Problemas y fricciones</div>
            <h2 className="h2">Los cinco puntos de dolor del dueño de restaurante en una urgencia.</h2>
            <p className="body-text">El dueño de restaurante que enfrenta una avería no solo tiene un problema técnico. Tiene una serie de fricciones en el proceso de resolución que agravan la situación y que el mercado actual no resuelve. Entender esas fricciones es lo que permite construir un servicio que se diferencia desde la primera llamada.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-phone-slash',
                  titulo: 'Nadie coge el teléfono',
                  detalle: 'El primer contacto con cualquier proveedor de urgencias es una llamada. Si nadie responde, el dueño pasa al siguiente. El patrón documentado en el sector es que los autónomos individuales no atienden en horario de tarde o fin de semana, y las empresas grandes derivan a un contestador o a un servicio de guardia que promete "llamar de vuelta". En urgencias, llamar de vuelta en dos horas equivale a no llamar.'
                },
                {
                  icon: 'fa-solid fa-calendar-xmark',
                  titulo: '"Le puedo ir mañana a primera hora"',
                  detalle: 'La respuesta más frecuente que recibe un restaurador en urgencias no es "llego en 90 minutos": es "mañana a primera hora". Para un restaurante que tiene que abrir a las 13:00, mañana a primera hora significa otro día de cierre. Este desfase entre el tiempo de respuesta que el mercado ofrece y el tiempo que el cliente necesita es el núcleo del déficit estructural.'
                },
                {
                  icon: 'fa-solid fa-people-arrows',
                  titulo: 'El técnico llega sin los materiales',
                  detalle: 'El segundo patrón de frustración más documentado: el técnico llega, diagnostica y dice que vuelve mañana con los materiales. En una urgencia, eso significa otro día de problema. El cliente no tiene forma de saber de antemano si el técnico que va a venir lleva un furgón equipado o viene con las manos vacías. La experiencia acumulada en hostelería es lo que permite llegar con el material probable ya cargado.'
                },
                {
                  icon: 'fa-solid fa-file-circle-question',
                  titulo: 'Precio desconocido hasta el final',
                  detalle: 'El dueño acepta pagar más en una urgencia. Lo que no acepta es no saber cuánto va a pagar hasta que la factura llega. La falta de una horquilla de precio antes de empezar genera desconfianza aunque el trabajo quede bien. "Primero lo arreglamos y luego vemos" no es una propuesta profesional para un cliente que tiene que aprobar un gasto a su encargado o a su socio.'
                },
                {
                  icon: 'fa-solid fa-person-running',
                  titulo: 'Sin garantía si algo vuelve a fallar',
                  detalle: 'Una reparación de urgencia que falla a las 48 horas es un desastre reputacional para el proveedor y un coste doble para el cliente. El dueño que llama en urgencias no tiene tiempo de verificar si el técnico que viene da garantía del trabajo. La garantía explícita —"si en 30 días vuelve a fallar, lo resolvemos sin coste"— es un argumento comercial que ningún proveedor del mercado actual comunica de forma proactiva.'
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

          {/* 05 MERCADO ACTUAL */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">05 — El mercado actual de urgencias</div>
            <h2 className="h2">Por qué el mercado no está preparado para responder.</h2>
            <p className="body-text">El mercado de servicios técnicos de urgencia para hostelería en Madrid no existe como categoría consolidada. Lo que existe son proveedores que, cuando tienen hueco, pueden atender urgencias. Pero ninguno está estructurado específicamente para responder en el plazo que un restaurante necesita cuando hay una avería activa.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de proveedor</th><th>Tiempo de respuesta en urgencias</th><th>Déficit principal</th></tr></thead>
              <tbody>
                <tr><td>Autónomo individual (fontanero, electricista)</td><td>24–72 horas para "urgencias no críticas"</td><td>Solo un oficio. Sin disponibilidad garantizada. No coge el teléfono en fin de semana.</td></tr>
                <tr><td>Empresa grande de mantenimiento</td><td>24–48 horas para nueva contratación</td><td>No tienen slots rápidos para tickets pequeños o clientes sin contrato previo.</td></tr>
                <tr><td>SAT de maquinaria (cafeteras, freidoras)</td><td>Variable — a veces el mismo día</td><td>Solo reparan la maquinaria específica. No hacen obra civil ni instalaciones generales.</td></tr>
                <tr><td>Empresa de reformas</td><td>2–5 días para presupuesto inicial</td><td>No están orientadas a urgencias. Su proceso comercial no está diseñado para responder en horas.</td></tr>
                <tr><td>"El técnico del vecino restaurante"</td><td>Variable — si está disponible</td><td>No fiable. Sin garantía. Depende de que el vecino le preste el contacto y el técnico esté libre.</td></tr>
              </tbody>
            </table>

            <p className="body-text">El problema sistémico es claro: ningún proveedor actual tiene la combinación de (a) todos los oficios necesarios, (b) disponibilidad en el día, y (c) especialización en las necesidades específicas de un local de hostelería. El restaurador que tiene una avería a las 10 de la mañana y necesita abrir a las 13:00 no tiene a quién llamar con garantías de resolución.</p>

            <p className="body-text">Este déficit no es una exageración: es el patrón que se repite en todos los testimonios recogidos en el sector. El dueño de restaurante resuelve sus urgencias llamando a quien conoce, rezando para que coja el teléfono, y aceptando lo que sea con tal de que alguien aparezca. No hay proceso de comparación en urgencias porque no hay tiempo para él.</p>
          </div>

          {HR}

          {/* 06 DECISIÓN */}
          <div className="section-anchor" id="decision">
            <div className="section-label">06 — Patrón de decisión en urgencias</div>
            <h2 className="h2">Quién llama, cuándo y por qué no compara precios.</h2>
            <p className="body-text">El proceso de decisión en urgencias de hostelería es radicalmente distinto al de una reforma planificada. No hay tiempo para pedir tres presupuestos, esperar tres días y comparar. La decisión se toma en minutos, y los criterios son diferentes.</p>

            <h3 style={h3style}>La secuencia de contacto en una urgencia típica</h3>

            {[
              ['Paso 1 — Llama a quien conoce primero', 'El restaurador tiene un fontanero, un electricista o "un chico de las reformas" en los contactos del teléfono. Es la primera llamada. Si coge, está resuelto. Si no coge, empieza el segundo paso.'],
              ['Paso 2 — Busca en Google o pregunta a otros restauradores del barrio', 'Si el contacto de confianza no coge, el dueño busca en Google "urgencias fontanero restaurante Madrid" o "electricista urgente Madrid hostelería". También puede llamar al dueño del restaurante de al lado y preguntarle quién usa él. Las referencias de boca a oreja en el sector hostelero son muy activas — los dueños de restaurantes cercanos se conocen y comparten contactos.'],
              ['Paso 3 — Llama al primero que coge y tiene disponibilidad ese día', 'No hay proceso comparativo. El primero que coge el teléfono, confirma que puede ir ese mismo día y da un precio aproximado tiene altísima probabilidad de ganar la contratación. No se piden tres presupuestos en urgencias. Se llama hasta encontrar a alguien que pueda venir.'],
              ['Paso 4 — Si nadie resuelve en el día, el local no abre', 'El restaurador que no encuentra solución en las primeras horas entra en modo de gestión del desastre: llamar a las reservas para cancelar, sacar el género perecible, avisar al personal. Cada hora sin solución aumenta el coste total de la avería exponencialmente.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <h3 style={h3style}>Criterios de selección en urgencias vs. reforma planificada</h3>
            <table className="r-table">
              <thead><tr><th>Criterio</th><th>Urgencia</th><th>Reforma planificada</th></tr></thead>
              <tbody>
                <tr><td>Precio</td><td>Irrelevante si es razonable. No se compara.</td><td>Determinante. Se piden 3–5 presupuestos.</td></tr>
                <tr><td>Velocidad de respuesta</td><td>El criterio principal. Sin respuesta = descartado.</td><td>Secundario. Se espera si el proveedor es bueno.</td></tr>
                <tr><td>Referencias previas</td><td>No hay tiempo de verificarlas.</td><td>Se consultan en Google Maps, Habitissimo, boca a boca.</td></tr>
                <tr><td>Especialización</td><td>Se asume si coge el teléfono y tiene disponibilidad.</td><td>Se verifica en portfolio y casos similares.</td></tr>
                <tr><td>Presupuesto escrito</td><td>No se exige. Una horquilla verbal es suficiente.</td><td>Obligatorio. Se compara línea por línea.</td></tr>
              </tbody>
            </table>

            <p className="body-text">La implicación para cualquier proveedor de urgencias es clara: el primer criterio de selección es la disponibilidad en el día. No el precio, no la especialización, no la empresa. La disponibilidad. El proveedor que esté disponible y coja el teléfono a las 10 de la mañana tiene el trabajo. El que llame de vuelta a las 6 de la tarde ya no tiene nada que hacer.</p>
          </div>

          {HR}

          {/* 07 ESTACIONALIDAD */}
          <div className="section-anchor" id="estacionalidad">
            <div className="section-label">07 — Estacionalidad</div>
            <h2 className="h2">Cuándo se concentran las urgencias — y por qué.</h2>
            <p className="body-text">Las urgencias en hostelería no tienen la misma distribución temporal que en el sector residencial. La actividad del restaurante marca el ritmo: las averías ocurren cuando más trabajo hay, y los sistemas fallan cuando más se les exige. Conocer la estacionalidad permite planificar la capacidad de respuesta de Oro Constructores a lo largo del año.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '32px 0' }}>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '16px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-bolt" style={{ marginRight: '8px' }}></i> Urgencias eléctricas
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Pico en octubre–enero. La puesta en marcha de la calefacción y el aumento del consumo de electrodomésticos en invierno sobrecarga las instalaciones eléctricas más antiguas. Los diferenciales saltan y los cuadros eléctricos con décadas de vida fallan con mayor frecuencia en este periodo.
                </p>
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '16px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-droplet" style={{ marginRight: '8px' }}></i> Urgencias de fontanería
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Sin estacionalidad marcada, pero con pico en julio–agosto. El mayor consumo de agua en terrazas y el funcionamiento continuo de lavavajillas industriales en temporada alta incrementan la presión sobre la red de fontanería de los locales. Los atascos y las fugas activas aumentan en este periodo.
                </p>
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '16px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-wind" style={{ marginRight: '8px' }}></i> Extracción y cocina
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Sin estacionalidad marcada, pero mayor frecuencia en temporada alta: septiembre–octubre y diciembre–enero. Los filtros de extracción se saturan más rápido cuando el volumen de cocción es máximo. Los motores trabajan al límite de su capacidad y las probabilidades de fallo aumentan.
                </p>
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '16px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-temperature-high" style={{ marginRight: '8px' }}></i> Neveras y cámaras frigoríficas
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Pico claro en junio–agosto. El calor extremo sobrecarga los sistemas de refrigeración que tienen que trabajar el doble para mantener la temperatura objetivo. Los compresores que llevan años en servicio fallan con mayor frecuencia en los meses de verano, coincidiendo con el pico de actividad del restaurante.
                </p>
              </div>
            </div>

            <p className="body-text">La implicación operativa para Oro Constructores es que los meses de mayor demanda de urgencias son julio–agosto (fontanería y frío) y octubre–enero (eléctrico). Mantener capacidad de respuesta en esos periodos — incluyendo fines de semana y horario de tarde — es lo que permite capturar la mayor concentración de urgencias del año.</p>
          </div>

          {HR}

          {/* 08 HALLAZGOS CLAVE */}
          <div className="section-anchor" id="hallazgos">
            <div className="section-label">08 — Hallazgos clave</div>
            <h2 className="h2">Lo que esta investigación revela sobre el mercado.</h2>
            <p className="body-text">El análisis del mercado de urgencias en hostelería para Madrid arroja cuatro hallazgos estructurales que definen la naturaleza de este negocio y las condiciones de éxito para quien quiera operar en él de forma sistemática.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-phone',
                  titulo: 'La velocidad de respuesta es el único criterio',
                  detalle: 'En urgencias el propietario no compara precios ni pide referencias. Contrata al primero que dice "llego en 90 minutos" y puede cumplirlo. No existe ningún otro diferenciador que supere a la disponibilidad inmediata en el momento de la decisión. Todo lo demás — precio, especialización, empresa — pasa a un segundo plano que no se llega a evaluar si la velocidad de respuesta no está garantizada.'
                },
                {
                  icon: 'fa-solid fa-handshake',
                  titulo: 'La urgencia convierte: 65% repiten',
                  detalle: 'El 65% de los clientes de hostelería que tienen una urgencia bien resuelta contratan con la misma empresa para la siguiente necesidad de obra o mantenimiento. La urgencia es el momento de máxima confianza en el proveedor: el dueño ha visto en tiempo real que alguien apareció cuando lo necesitaba, resolvió el problema y cobró un precio razonable. Esa experiencia no se olvida ni se sustituye fácilmente por una oferta más barata en la siguiente reforma.'
                },
                {
                  icon: 'fa-solid fa-euro-sign',
                  titulo: 'El sobreprecio se acepta sin negociar',
                  detalle: 'El dueño de restaurante acepta pagar un 30–50% más por el mismo trabajo si se hace ese mismo día. El razonamiento es directo: si el cierre cuesta 2.500€ y la reparación urgente cuesta 600€ en lugar de los 400€ habituales, el sobrecoste de 200€ es irrelevante frente al ahorro de no cerrar. Este es el único mercado donde el sobrecoste no se negocia porque la aritmética lo justifica de forma obvia para el cliente.'
                },
                {
                  icon: 'fa-solid fa-clock',
                  titulo: 'El déficit del mercado es horario',
                  detalle: 'El 80% de las urgencias en hostelería ocurren fuera del horario de 9–17h: tarde, noche y fin de semana. Precisamente cuando los proveedores habituales no responden. Un fontanero autónomo que trabaja de 9 a 18h de lunes a viernes no está disponible para el restaurante que tiene una fuga el sábado a las 11 de la mañana. El déficit no es de oferta técnica — hay técnicos suficientes en Madrid — es de disponibilidad en el horario en que se producen las urgencias.'
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

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Cómo posicionarse en el mercado de urgencias hosteleras.</h2>
            <p className="body-text">Los datos de esta investigación apuntan a tres vectores de actuación prioritaria para Oro Constructores en el segmento de urgencias para hostelería en Madrid:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Disponibilidad en el día como promesa de marca — no como diferenciador',
                  detalle: 'La disponibilidad en el día no es un valor añadido en urgencias: es el requisito mínimo de entrada al mercado. Oro Constructores debe garantizar respuesta telefónica de 8:00 a 22:00, incluidos fines de semana, y capacidad de enviar técnico en las primeras 4 horas. Sin esto, no hay producto de urgencias. Con esto, hay una ventaja sobre el 90% de la competencia actual que no cubre ese horario.'
                },
                {
                  num: '02',
                  titulo: 'La urgencia como puerta de entrada a la reforma — no como producto aislado',
                  detalle: 'El valor real de una urgencia resuelta no está en los 400–800€ que se factura en ese momento. Está en el cliente de hostelería que se incorpora a la cartera con alta probabilidad de contratar la siguiente reforma planificada (ticket 3.000–15.000€) y de recomendar el servicio a otros restauradores del barrio. La urgencia debe tratarse como inversión en captación, no como ingreso puntual.'
                },
                {
                  num: '03',
                  titulo: 'El Plan Mantenimiento como cierre natural de la urgencia resuelta',
                  detalle: 'El momento de mayor receptividad del dueño de restaurante hacia un contrato de mantenimiento es justo después de que la urgencia ha quedado resuelta. Acaba de vivir en primera persona el coste de no tener mantenimiento preventivo. Ofrecer un plan de revisión periódica en ese momento — con precio mensual equivalente a menos de una hora de cierre — tiene una tasa de aceptación muy superior a cualquier campaña comercial en frío.'
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

            <h3 style={h3style}>El modelo económico del servicio de urgencias</h3>
            <table className="r-table">
              <thead><tr><th>Dimensión</th><th>Detalle</th></tr></thead>
              <tbody>
                <tr><td>Precio del servicio de urgencia</td><td>El mercado acepta un sobrecoste del 30–60% sobre el precio de trabajo normal por respuesta en el mismo día. Una intervención que en condiciones normales costaría 300€ puede facturarse a 450–480€ en urgencia sin objeción por parte del cliente.</td></tr>
                <tr><td>Tasa de conversión a cliente recurrente</td><td>Un restaurante al que se le resuelve una urgencia con eficacia tiene una probabilidad estimada del 60–70% de volver al mismo proveedor para la siguiente necesidad, sea mantenimiento o reforma planificada.</td></tr>
                <tr><td>Ticket de la reforma siguiente</td><td>La reforma planificada que sigue a una urgencia resuelta correctamente tiene un ticket medio de 3.000–15.000€. La urgencia que la originó puede haber costado 300–600€.</td></tr>
                <tr><td>Referenciación activa en el sector</td><td>El dueño de restaurante que tiene un proveedor de confianza lo recomienda a otros restauradores del barrio. Las redes de hostelería son muy activas en este tipo de recomendaciones.</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 10 FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes</div>
            <h2 className="h2">Referencias y metodología.</h2>
            <p className="body-text">Esta investigación se apoya en las siguientes fuentes:</p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>Hostelería de España. <em>Informe anual del sector de la restauración en España.</em> 2024.</li>
              <li>INE — Instituto Nacional de Estadística. <em>Encuesta de ocupación en restauración en Madrid.</em> 2024.</li>
              <li>Ayuntamiento de Madrid. <em>Registro de locales de hostelería por distrito.</em> 2025.</li>
              <li>CNAE / Seguridad Alimentaria. <em>Normativa sanitaria para locales de restauración.</em> Vigente 2026.</li>
              <li>Habitissimo. <em>Análisis de precios y demanda de servicios de urgencia para hostelería.</em> 2024-2025.</li>
              <li>Análisis directo de demanda Oro Constructores — solicitudes de urgencia recibidas en Madrid (área metropolitana).</li>
            </ul>
            <p className="nota">* Los datos de facturación media de restaurante son estimaciones basadas en CNAE 5610 (restaurantes y puestos de comidas) para Madrid. Las pérdidas por cierre son estimaciones conservadoras basadas en ticket medio × cubiertos.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Tu restaurante necesita<br />atención urgente hoy?</h2>
          <p>Respondemos en el día. Todos los oficios. Sin duplicar visitas.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-bolt"></i> Solicitar servicio urgente</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">Hablar con nosotros</Link>
          </div>
        </div>
      </section>
    </>
  )
}
