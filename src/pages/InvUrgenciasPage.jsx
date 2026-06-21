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
              <a href="#mercado" className="index-item"><span className="idx">03</span> El mercado actual de urgencias — déficit</a>
              <a href="#cliente" className="index-item"><span className="idx">04</span> Lo que el dueño de restaurante necesita</a>
              <a href="#decision" className="index-item"><span className="idx">05</span> Patrón de decisión en urgencias</a>
              <a href="#oportunidad" className="index-item"><span className="idx">06</span> Oportunidad y modelo de negocio</a>
              <a href="#conclusiones" className="index-item"><span className="idx">07</span> Conclusiones</a>
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
                <tr><td>Goteras en sala o terraza</td><td>Imposible sentara clientes en esa zona. Daño estético y de imagen. Riesgo de accidente si el suelo está mojado.</td><td>Días</td></tr>
                <tr><td>Azulejo suelto o pavimento roto en cocina</td><td>Riesgo de sanción en inspección sanitaria. No impide operar inmediatamente, pero es urgente antes de la próxima visita de Sanidad.</td><td>Semanas</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 03 MERCADO ACTUAL */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">03 — El mercado actual de urgencias</div>
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

          {/* 04 CLIENTE */}
          <div className="section-anchor" id="cliente">
            <div className="section-label">04 — Lo que el cliente necesita</div>
            <h2 className="h2">Cuatro cosas que el dueño de restaurante necesita en una urgencia.</h2>
            <p className="body-text">El dueño de restaurante que tiene una avería no necesita el técnico más barato ni el más especializado. Necesita cuatro cosas muy específicas, en este orden de prioridad:</p>

            {[
              ['1. Un número que coja el teléfono', 'Esta es la primera barrera. En el momento de la urgencia, el dueño llama. Si no le cogen, pasa al siguiente. Si no hay segundo, empieza a buscar en Google y llama al primer resultado que coja. La disponibilidad telefónica es la condición de entrada al mercado de urgencias. No es un diferenciador, es un requisito. Sin esto, no se está compitiendo.'],
              ['2. Un técnico que aparezca ese mismo día — máximo 24 horas', 'El dueño no puede esperar. Si el local tiene que abrir a las 13:00 y son las 10:00, el técnico tiene que poder llegar antes de las 12:00. Cualquier proveedor que diga "le llamamos mañana para coordinar visita" está descartado. La capacidad de llegar en pocas horas no es una ventaja competitiva en urgencias — es la definición del servicio.'],
              ['3. Alguien que sepa qué hace sin duplicar visitas', 'Uno de los patrones de frustración más documentados en hostelería: "vino a ver y me dijo que vuelve con los materiales mañana". El técnico que llega a una urgencia y necesita una segunda visita para traer piezas le está costando al restaurante otro día de problema. En emergencias, el técnico tiene que llegar con los materiales más probables, diagnosticar en la primera visita y resolver en la misma. La experiencia en el tipo de avería es lo que permite hacer esto.'],
              ['4. Precio aproximado antes de empezar', 'En urgencias el cliente acepta pagar más. Eso no significa que acepte pagar sin saber cuánto. El técnico que llega y dice "no sé hasta que lo vea, y cuando lo vea no sé hasta que lo arregle" genera desconfianza aunque resuelva el problema. Dar una horquilla honesta antes de empezar ("esto me va a costar entre X e Y dependiendo de si hace falta cambiar el motor") es lo que diferencia a un profesional de alguien que improvisa.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 05 DECISIÓN */}
          <div className="section-anchor" id="decision">
            <div className="section-label">05 — Patrón de decisión en urgencias</div>
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

            <p className="body-text">La implicación para cualquier proveedor de urgencias es clara: el primer criterio de selección es la disponibilidad en el día. No el precio, no la especialización, no la empresa. La disponibilidad. El proveedor que esté disponible y coja el teléfono a las 10 de la mañana tiene el trabajo. El que llame de vuelta a las 6 de la tarde ya no tiene nada que hacer.</p>
          </div>

          {HR}

          {/* 06 OPORTUNIDAD */}
          <div className="section-anchor" id="oportunidad">
            <div className="section-label">06 — Oportunidad y modelo de negocio</div>
            <h2 className="h2">Por qué las urgencias son el mejor canal de entrada a hostelería.</h2>
            <p className="body-text">El servicio de urgencias para hostelería no es solo un producto que generar ingresos directos. Es la estrategia de captación más eficiente para el cliente hostelero a largo plazo. La lógica es simple: el cliente que confía su urgencia a un proveedor —que aparece, lo resuelve y cobra un precio razonable— no busca a otro proveedor para la reforma del año que viene.</p>

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

            <h3 style={h3style}>El "Plan Mantenimiento" como upsell natural</h3>
            <p className="body-text">La urgencia resuelta es el momento de mayor confianza del cliente hacia el proveedor. Es el momento óptimo para proponer un "Plan Mantenimiento" que prevenga la siguiente avería. Este plan puede incluir revisiones periódicas de instalaciones críticas (extracción, fontanería, cuadro eléctrico) a un precio mensual fijo. El cliente lo acepta con mayor predisposición en ese momento que en cualquier otro, porque acaba de vivir en primera persona el coste de no tener mantenimiento preventivo.</p>

            <table className="r-table">
              <thead><tr><th>Servicio</th><th>Precio orientativo mensual</th><th>Qué incluye</th></tr></thead>
              <tbody>
                <tr><td>Plan Básico</td><td>80–120€/mes</td><td>1 visita trimestral de revisión + descuento del 20% en urgencias + respuesta prioritaria en el día</td></tr>
                <tr><td>Plan Estándar</td><td>180–250€/mes</td><td>1 visita mensual + mantenimiento preventivo de extracción + fontanería + prioridad absoluta en urgencias</td></tr>
                <tr><td>Plan Integral</td><td>350–500€/mes</td><td>Visita quincenal + todos los oficios cubiertos + coste de materiales de mantenimiento preventivo incluido</td></tr>
              </tbody>
            </table>

            <p className="body-text">El Plan Mantenimiento convierte una relación transaccional (urgencia resuelta, cliente cerrado) en una relación recurrente mensual con ingresos predecibles. Para el restaurador, el valor percibido es alto: saber que hay alguien que le puede resolver cualquier problema en horas, por un precio mensual que equivale a menos de una hora de cierre por avería, es una decisión económica obvia.</p>
          </div>

          {HR}

          {/* 07 CONCLUSIONES */}
          <div className="section-anchor" id="conclusiones">
            <div className="section-label">07 — Conclusiones</div>
            <h2 className="h2">Lo que revela esta investigación.</h2>
            <div className="conclusion-grid">
              <div className="conclusion-cell"><div className="c-num">01</div><h4>El coste de una avería supera siempre el coste de repararla</h4><p>Entre la facturación no realizada, el género perdido y el impacto reputacional, una avería de un día puede costar 3.000–5.000€. El precio de la reparación urgente siempre es menor que el coste de esperar.</p></div>
              <div className="conclusion-cell"><div className="c-num">02</div><h4>La extracción de cocina es la avería más crítica</h4><p>Es la que más locales cierra por imperativo legal. Un proveedor que pueda resolver averías de extracción en el mismo día tiene una propuesta de valor única en el mercado.</p></div>
              <div className="conclusion-cell"><div className="c-num">03</div><h4>El mercado actual no está preparado para responder</h4><p>Ni los autónomos individuales ni las empresas grandes cubren el hueco de urgencias multidisciplinares en el día para el restaurante independiente. El déficit es real y sistemático.</p></div>
              <div className="conclusion-cell"><div className="c-num">04</div><h4>La decisión se toma en minutos y sin comparar precios</h4><p>El primer proveedor que coge el teléfono y confirma disponibilidad en el día tiene la contratación. No hay proceso comparativo en urgencias.</p></div>
              <div className="conclusion-cell"><div className="c-num">05</div><h4>La urgencia es la puerta de entrada a la reforma</h4><p>El cliente que confía una urgencia no cambia de proveedor. La tasa de conversión a cliente recurrente post-urgencia es alta. El valor del cliente a 12 meses puede ser 10–30 veces el valor de la urgencia inicial.</p></div>
              <div className="conclusion-cell"><div className="c-num">06</div><h4>El Plan Mantenimiento cierra el ciclo</h4><p>Propuesto en el momento de mayor confianza — justo después de resolver la urgencia — tiene alta tasa de aceptación. Convierte la relación transaccional en ingresos recurrentes predecibles.</p></div>
            </div>
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
