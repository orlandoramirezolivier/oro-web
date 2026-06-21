import { Link } from 'react-router-dom'

export default function InvNegocioHosteleriaPage() {
  return (
    <>
      {/* INTERNAL HEADER */}
      <div className="internal-header">
        <div className="container">
          <div className="internal-badge"><i className="fa-solid fa-lock"></i> Documento interno — Uso exclusivo Oro Constructores</div>
          <h1>Oportunidad de negocio: segmento hostelería en Madrid</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>Análisis interno de cómo convertir la investigación del sector en captación real. Incluye ROI del scraper, priorización de zonas, secuencia de acción y métricas de seguimiento.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Elaborado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Uso</span><span className="meta-value">Uso interno · Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Fuente base</span><span className="meta-value">Investigación 1: Sector Hostelería Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Decisor</span><span className="meta-value">Orlando Ramírez</span></div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* SOURCE REFERENCE */}
          <div className="source-banner">
            <i className="fa-solid fa-link"></i>
            <p>Este documento es la <strong>Investigación 2 (interna)</strong>. Utiliza como fuente de verdad la <Link to="/investigaciones/hosteleria-madrid" style={{ color: 'var(--ink)', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid var(--oro)' }}>Investigación 1 — Sector Hostelería Madrid</Link> (pública). Los datos de mercado, tipologías y análisis competitivo no se repiten aquí; se asumen como base conocida.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#oportunidad" className="index-item"><span className="idx">01</span> La oportunidad identificada</a>
              <a href="#servicios" className="index-item"><span className="idx">02</span> Servicios de Oro aplicables</a>
              <a href="#roi" className="index-item"><span className="idx">03</span> ROI del scraper (€0 / €5 / €10 / €20)</a>
              <a href="#zonas" className="index-item"><span className="idx">04</span> Zonas prioritarias</a>
              <a href="#plan" className="index-item"><span className="idx">05</span> Plan de acción semanal</a>
              <a href="#kpis" className="index-item"><span className="idx">06</span> Métricas de seguimiento</a>
              <a href="#riesgos" className="index-item"><span className="idx">07</span> Riesgos y mitigaciones</a>
            </div>
          </div>

          {/* 01 OPORTUNIDAD */}
          <div className="section-anchor" id="oportunidad">
            <div className="section-label">01 — La oportunidad</div>
            <h2 className="h2">Por qué hostelería es<br />la apuesta correcta ahora.</h2>
            <p className="body-text">La investigación de mercado confirma tres condiciones que juntas hacen de la hostelería madrileña el segmento más viable para Oro en este momento. No son proyecciones optimistas: son hechos del mercado que ya existen hoy.</p>
            <div className="opportunity-grid">
              <div className="opp-card">
                <div className="opp-icon"><i className="fa-solid fa-users"></i></div>
                <h4>Mercado masivo y accesible</h4>
                <p>10.000+ restaurantes en Madrid. Sin acceso restringido, sin licitaciones públicas, sin intermediarios. El dueño decide y tiene el móvil en la mano.</p>
              </div>
              <div className="opp-card">
                <div className="opp-icon"><i className="fa-solid fa-triangle-exclamation"></i></div>
                <h4>Hueco real sin cubrir</h4>
                <p>No existe ningún competidor que ofrezca todos los oficios + respuesta urgente + presupuesto cerrado en el rango €500–30.000. Ese es exactamente lo que Oro puede hacer.</p>
              </div>
              <div className="opp-card">
                <div className="opp-icon"><i className="fa-solid fa-bolt"></i></div>
                <h4>Urgencias = fidelización inmediata</h4>
                <p>El proveedor que resuelve la primera avería tiene preferencia automática en todos los proyectos siguientes. Un cliente de hostelería que se queda fiel vale €5.000–25.000 en 5 años.</p>
              </div>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }}>El cliente ideal de Oro en hostelería</h3>
            <table className="r-table">
              <thead><tr><th>Característica</th><th>Descripción</th><th>Por qué importa para Oro</th></tr></thead>
              <tbody>
                <tr><td>Tipo de local</td><td>Restaurante independiente, bar-restaurante, cafetería de calidad</td><td>El dueño decide solo. Sin comités de compras.</td></tr>
                <tr><td>Volumen</td><td>50–120 cubiertos. Ticket €15–40</td><td>Tiene recursos para pagar. No negocia en urgencias.</td></tr>
                <tr><td>Antigüedad del local</td><td>3–8 años de apertura o reciente cambio de dueño</td><td>Está en el punto del ciclo donde las cosas empiezan a fallar o necesita reformar.</td></tr>
                <tr><td>Zona</td><td>Centro, Salamanca, Chamberí, Chamartín (primera oleada)</td><td>Mayor densidad de locales + mayor ticket de reforma</td></tr>
                <tr><td>Perfil del dueño</td><td>35–55 años, gestor activo, orientado a resultados</td><td>Valora la rapidez y la claridad. No quiere perder tiempo.</td></tr>
              </tbody>
            </table>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

          {/* 02 SERVICIOS */}
          <div className="section-anchor" id="servicios">
            <div className="section-label">02 — Fit de servicios</div>
            <h2 className="h2">Qué puede hacer Oro en hostelería<br />y con qué frecuencia se demanda.</h2>
            <div className="service-match">
              <div className="sm-cell"><div className="sm-icon"><i className="fa-solid fa-wrench"></i></div><h4>Fontanería</h4><p>Atascos de cocina, fugas en lavavajillas, cisternas, grifería. Avería más frecuente del sector.</p><span className="sm-freq">Frecuencia: muy alta · Urgente</span></div>
              <div className="sm-cell"><div className="sm-icon"><i className="fa-solid fa-bolt"></i></div><h4>Electricidad</h4><p>Cuadros, tomas, iluminación, actualizaciones de potencia por maquinaria nueva.</p><span className="sm-freq">Frecuencia: alta · Mix urgente/planificado</span></div>
              <div className="sm-cell"><div className="sm-icon"><i className="fa-solid fa-trowel-bricks"></i></div><h4>Albañilería</h4><p>Apertura de pasos, tapar rozas, reparación de daños de fuga, reformas parciales.</p><span className="sm-freq">Frecuencia: media · Planificado</span></div>
              <div className="sm-cell"><div className="sm-icon"><i className="fa-solid fa-paint-roller"></i></div><h4>Pintura</h4><p>Repintado de sala, cocina, fachada. Alta frecuencia en locales con concepto de imagen.</p><span className="sm-freq">Frecuencia: media · Estacional</span></div>
              <div className="sm-cell"><div className="sm-icon"><i className="fa-solid fa-border-all"></i></div><h4>Alicatado</h4><p>Sustitución de piezas rotas en cocina/baños, revestimientos nuevos en reformas.</p><span className="sm-freq">Frecuencia: media · Planificado</span></div>
              <div className="sm-cell"><div className="sm-icon"><i className="fa-solid fa-helmet-safety"></i></div><h4>Reforma integral</h4><p>Cocinas, barras, salones, baños. Ciclo 5–8 años. Mayor ticket económico.</p><span className="sm-freq">Frecuencia: baja · Alto valor</span></div>
            </div>
            <div className="source-banner" style={{ marginTop: 0 }}>
              <i className="fa-solid fa-star"></i>
              <p><strong>Punto de entrada recomendado:</strong> fontanería de urgencia. Es la avería más frecuente, la decisión más rápida y la que genera más fidelización. Cada cliente de urgencia se convierte en cliente de reforma si el servicio es excelente. La estrategia óptima es entrar por urgencias y convertir a reforma planificada.</p>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

          {/* 03 ROI DEL SCRAPER */}
          <div className="section-anchor" id="roi">
            <div className="section-label">03 — ROI del scraper</div>
            <h2 className="h2">Cuántos contactos puedes conseguir<br />y qué revenue potencial te dan.</h2>
            <p className="body-text">Antes de calcular el ROI de cada escenario de inversión, hay que entender la cadena de conversión del negocio. La investigación de mercado nos da los números de cada etapa. Estos son los rangos realistas para un primer ciclo de outreach sin reputación previa en el segmento:</p>

            <table className="r-table">
              <thead><tr><th>Etapa del embudo</th><th>Tasa estimada</th><th>Comentario</th></tr></thead>
              <tbody>
                <tr><td>Contactos alcanzados que responden</td><td>3–8%</td><td>WhatsApp frío a restaurante desconocido. Tasa normal de respuesta inicial.</td></tr>
                <tr><td>Respuestas que aceptan visita</td><td>30–50%</td><td>De los que responden, la mitad aceptan que pasemos a ver el local.</td></tr>
                <tr><td>Visitas que generan presupuesto</td><td>70–85%</td><td>Si llegamos a ver el local, casi siempre hay algo que presupuestar.</td></tr>
                <tr><td>Presupuestos que cierran (primera ronda)</td><td>25–40%</td><td>Sin historial previo con el cliente. Tasa mejora con el tiempo y las reseñas.</td></tr>
                <tr><td>Ticket medio (mantenimiento/pequeña reforma)</td><td>€800–3.500</td><td>Trabajos de 1–5 días. El más común en primer contacto.</td></tr>
                <tr><td>Ticket medio (reforma media)</td><td>€5.000–25.000</td><td>Cocina, baños, sala. Proyecto de semanas. Se genera en relaciones ya establecidas.</td></tr>
              </tbody>
            </table>

            {/* ESCENARIO A */}
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }}>Escenario A — Inversión €0 (fuentes gratuitas)</h3>
            <div className="roi-scenario">
              <div className="roi-scenario-header">
                <div><div className="rs-invest">€0</div><div className="rs-label">inversión en datos</div></div>
                <div style={{ textAlign: 'right' }}><div className="rs-name">Fuentes públicas + trabajo manual</div><div className="rs-label" style={{ marginTop: '4px' }}>Ayuntamiento CSV + Google Maps manual</div></div>
              </div>
              <div className="roi-scenario-body">
                <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '16px' }}>El Ayuntamiento de Madrid publica un CSV del Censo de Locales (datos.madrid.es) con dirección, tipo de actividad y referencia catastral. Tiene ~22.000 locales de hostelería pero <strong>sin teléfono ni email</strong>. Requiere enriquecimiento manual o scraping de Maps.</p>
                <div className="roi-flow">
                  <div className="roi-step"><div className="rs-n">~800</div><div className="rs-l">contactos enriquecidos manualmente en 1–2 semanas</div></div>
                  <div className="roi-step"><div className="rs-n">~48</div><div className="rs-l">respuestas (6% tasa media)</div></div>
                  <div className="roi-step"><div className="rs-n">~19</div><div className="rs-l">visitas (40% de respuestas)</div></div>
                  <div className="roi-step"><div className="rs-n">~15</div><div className="rs-l">presupuestos (80% de visitas)</div></div>
                  <div className="roi-step highlight"><div className="rs-n">~5</div><div className="rs-l">trabajos cerrados (33% cierre)</div></div>
                </div>
                <div className="roi-detail">
                  <div className="roi-detail-item"><div className="rd-label">Revenue estimado (5 trabajos × €1.500 medio)</div><div className="rd-value">€7.500</div><div className="rd-sub">Rango: €4.000 – €17.000</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Coste en tiempo (40–60 h trabajo manual)</div><div className="rd-value">Alto</div><div className="rd-sub">El coste real es tiempo de Orlando, no dinero</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Velocidad de arranque</div><div className="rd-value">Lenta</div><div className="rd-sub">2–3 semanas para tener el primer lote útil</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Escalabilidad</div><div className="rd-value">Baja</div><div className="rd-sub">Difícil escalar sin automatizar la recolección</div></div>
                </div>
                <div className="roi-notes"><p><strong>Veredicto:</strong> Válido para empezar sin presupuesto. El resultado en revenue es real, pero el coste en tiempo de Orlando es alto. Usar solo si no se dispone de ningún presupuesto para datos.</p></div>
              </div>
            </div>

            {/* ESCENARIO B */}
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }}>Escenario B — Inversión €5</h3>
            <div className="roi-scenario">
              <div className="roi-scenario-header">
                <div><div className="rs-invest">€5</div><div className="rs-label">inversión en datos</div></div>
                <div style={{ textAlign: 'right' }}><div className="rs-name">Outscraper Google Maps (créditos básicos)</div><div className="rs-label" style={{ marginTop: '4px' }}>+CSV Ayuntamiento gratis como base</div></div>
              </div>
              <div className="roi-scenario-body">
                <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '16px' }}>Outscraper.com permite comprar créditos para extraer datos de Google Maps a ~€0,002 por registro. Con €5 obtienes aproximadamente 2.500 créditos, suficiente para extraer <strong>~2.000–2.500 restaurantes en Madrid</strong> con nombre, dirección, teléfono, web y valoración.</p>
                <div className="roi-flow">
                  <div className="roi-step"><div className="rs-n">~2.200</div><div className="rs-l">contactos con teléfono directo</div></div>
                  <div className="roi-step"><div className="rs-n">~132</div><div className="rs-l">respuestas (6% tasa media)</div></div>
                  <div className="roi-step"><div className="rs-n">~53</div><div className="rs-l">visitas (40% de respuestas)</div></div>
                  <div className="roi-step"><div className="rs-n">~42</div><div className="rs-l">presupuestos (80% de visitas)</div></div>
                  <div className="roi-step highlight"><div className="rs-n">~14</div><div className="rs-l">trabajos cerrados (33% cierre)</div></div>
                </div>
                <div className="roi-detail">
                  <div className="roi-detail-item"><div className="rd-label">Revenue estimado (14 trabajos × €1.500 medio)</div><div className="rd-value">€21.000</div><div className="rd-sub">Rango: €11.000 – €49.000</div></div>
                  <div className="roi-detail-item"><div className="rd-label">ROI sobre inversión en datos</div><div className="rd-value">×4.200</div><div className="rd-sub">€21.000 generados por €5 invertidos en datos</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Velocidad de arranque</div><div className="rd-value">Rápida</div><div className="rd-sub">Scraping ejecutado en 1–2 horas. Lista lista el mismo día.</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Limitación</div><div className="rd-value">Sin email</div><div className="rd-sub">Solo WhatsApp/teléfono. Suficiente para el outreach recomendado.</div></div>
                </div>
                <div className="roi-notes"><p><strong>Veredicto: la mejor relación calidad/precio.</strong> Por €5 tienes 2.000+ contactos reales con teléfono, listos en horas. El ROI teórico de ×4.200 es el más alto de los tres escenarios. Limitación: sin email, solo WhatsApp. Pero el canal WhatsApp es el más efectivo para restaurantes.</p></div>
              </div>
            </div>

            {/* ESCENARIO C */}
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }}>Escenario C — Inversión €10</h3>
            <div className="roi-scenario">
              <div className="roi-scenario-header">
                <div><div className="rs-invest">€10</div><div className="rs-label">inversión en datos</div></div>
                <div style={{ textAlign: 'right' }}><div className="rs-name">Outscraper ampliado + LeadCanvas 7 días gratis</div><div className="rs-label" style={{ marginTop: '4px' }}>~5.000 contactos con teléfono + validación WhatsApp</div></div>
              </div>
              <div className="roi-scenario-body">
                <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '16px' }}>Con €10 en Outscraper obtienes ~5.000 registros de Google Maps. Añadiendo el trial gratuito de 7 días de LeadCanvas, puedes validar qué teléfonos tienen WhatsApp activo, aumentando la tasa de respuesta.</p>
                <div className="roi-flow">
                  <div className="roi-step"><div className="rs-n">~5.000</div><div className="rs-l">contactos brutos con teléfono</div></div>
                  <div className="roi-step"><div className="rs-n">~3.500</div><div className="rs-l">con WhatsApp validado (70% estimado)</div></div>
                  <div className="roi-step"><div className="rs-n">~245</div><div className="rs-l">respuestas (7% tasa mayor por WA validado)</div></div>
                  <div className="roi-step"><div className="rs-n">~98</div><div className="rs-l">visitas (40%)</div></div>
                  <div className="roi-step highlight"><div className="rs-n">~26</div><div className="rs-l">trabajos cerrados (33% × 80%)</div></div>
                </div>
                <div className="roi-detail">
                  <div className="roi-detail-item"><div className="rd-label">Revenue estimado (26 trabajos × €1.500 medio)</div><div className="rd-value">€39.000</div><div className="rd-sub">Rango: €20.000 – €90.000</div></div>
                  <div className="roi-detail-item"><div className="rd-label">ROI sobre inversión en datos</div><div className="rd-value">×3.900</div><div className="rd-sub">€39.000 generados por €10 invertidos</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Ventaja sobre Escenario B</div><div className="rd-value">×1.85</div><div className="rd-sub">Casi el doble de revenue con solo €5 adicionales</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Tiempo para procesar</div><div className="rd-value">4–6 semanas</div><div className="rd-sub">5.000 contactos requiere cadencia estructurada de outreach</div></div>
                </div>
                <div className="roi-notes"><p><strong>Veredicto: recomendado si vas a hacer outreach en modo campaña estructurada.</strong> Empieza con el Escenario B y escala aquí cuando el pipeline esté procesado y tengas el flujo optimizado.</p></div>
              </div>
            </div>

            {/* ESCENARIO D */}
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }}>Escenario D — Inversión €20</h3>
            <div className="roi-scenario">
              <div className="roi-scenario-header">
                <div><div className="rs-invest">€20</div><div className="rs-label">inversión en datos</div></div>
                <div style={{ textAlign: 'right' }}><div className="rs-name">Outscraper máximo + combinación de fuentes</div><div className="rs-label" style={{ marginTop: '4px' }}>~10.000–12.000 contactos · cobertura casi total del mercado objetivo</div></div>
              </div>
              <div className="roi-scenario-body">
                <p style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '16px' }}>Con €20 en Outscraper se puede extraer prácticamente todo el mercado objetivo (restaurantes en Madrid ciudad por zonas). Combinado con el CSV del Ayuntamiento y el trial de LeadCanvas para validación de WhatsApp.</p>
                <div className="roi-flow">
                  <div className="roi-step"><div className="rs-n">~10.000</div><div className="rs-l">contactos totales acumulados</div></div>
                  <div className="roi-step"><div className="rs-n">~7.000</div><div className="rs-l">filtrados y depurados (duplicados, cerrados)</div></div>
                  <div className="roi-step"><div className="rs-n">~490</div><div className="rs-l">respuestas (7% tasa estimada)</div></div>
                  <div className="roi-step"><div className="rs-n">~196</div><div className="rs-l">visitas (40%)</div></div>
                  <div className="roi-step highlight"><div className="rs-n">~52</div><div className="rs-l">trabajos cerrados (33% × 80%)</div></div>
                </div>
                <div className="roi-detail">
                  <div className="roi-detail-item"><div className="rd-label">Revenue estimado (52 trabajos × €1.500 medio)</div><div className="rd-value">€78.000</div><div className="rd-sub">Campaña de 6–12 meses a plena cadencia</div></div>
                  <div className="roi-detail-item"><div className="rd-label">ROI sobre inversión en datos</div><div className="rd-value">×3.900</div><div className="rd-sub">€78.000 generados por €20 invertidos</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Diferencia con comprar GSAS €90,90</div><div className="rd-value">+Email</div><div className="rd-sub">GSAS añade email pero cuesta 4.5× más y el canal WhatsApp es más efectivo</div></div>
                  <div className="roi-detail-item"><div className="rd-label">Limitación principal</div><div className="rd-value">Capacidad operativa</div><div className="rd-sub">52 trabajos cerrados requieren mucha capacidad de ejecución</div></div>
                </div>
                <div className="roi-notes"><p><strong>Veredicto: este es el límite del volumen útil para la fase actual.</strong> Primero el Escenario B, luego C, luego D cuando la operativa esté preparada para crecer.</p></div>
              </div>
            </div>
            <p className="nota">* Todos los cálculos de revenue son estimaciones basadas en tasas de conversión conservadoras-medias para outreach frío en B2C/micropymes.</p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

          {/* 04 ZONAS */}
          <div className="section-anchor" id="zonas">
            <div className="section-label">04 — Priorización de zonas</div>
            <h2 className="h2">Dónde atacar primero<br />y en qué orden.</h2>
            <p className="body-text">No todos los distritos generan el mismo retorno en la primera oleada. La priorización se basa en tres variables: densidad de locales, ticket de reforma esperado y facilidad logística para Oro.</p>
            <table className="zone-table">
              <thead><tr><th>Prioridad</th><th>Zona</th><th>Locales estimados</th><th>Ticket reforma</th><th>Argumento de prioridad</th></tr></thead>
              <tbody>
                <tr>
                  <td><span className="pri pri-1">P1 · Atacar ya</span></td>
                  <td>Centro (Malasaña, Chueca, Lavapiés)</td>
                  <td>~3.200</td>
                  <td>€1.500–15.000</td>
                  <td>Mayor concentración. Alta rotación. Muchos locales en ciclo de reforma. Accesible logísticamente.</td>
                </tr>
                <tr>
                  <td><span className="pri pri-1">P1 · Atacar ya</span></td>
                  <td>Chamberí (Ponzano, Almagro)</td>
                  <td>~1.800</td>
                  <td>€2.000–20.000</td>
                  <td>Crecimiento +7,3% anual. Muchos locales nuevos con necesidad de adecuación. Perfil de dueño con recursos.</td>
                </tr>
                <tr>
                  <td><span className="pri pri-2">P2 · Oleada 2</span></td>
                  <td>Salamanca</td>
                  <td>~2.100</td>
                  <td>€3.000–30.000</td>
                  <td>Ticket muy alto. Pero el perfil de decisión es más lento y exigente. Mejor cuando ya tenemos reseñas y portfolio de hostelería.</td>
                </tr>
                <tr>
                  <td><span className="pri pri-2">P2 · Oleada 2</span></td>
                  <td>Chamartín</td>
                  <td>~1.600</td>
                  <td>€1.500–15.000</td>
                  <td>Crecimiento sostenido. Hostelería de negocio estable. Segunda oleada recomendada.</td>
                </tr>
                <tr>
                  <td><span className="pri pri-3">P3 · Oleada 3</span></td>
                  <td>Vallecas, Tetuán, Prosperidad</td>
                  <td>Variable</td>
                  <td>€800–8.000</td>
                  <td>Zonas emergentes con crecimiento rápido. Ticket menor, pero volumen alto y menor competencia.</td>
                </tr>
              </tbody>
            </table>
            <div className="source-banner" style={{ marginTop: 0 }}>
              <i className="fa-solid fa-map-pin"></i>
              <p>El scraper de Outscraper permite filtrar por zona geográfica con radio o por código postal. Para ejecutar la oleada P1, usar los códigos postales de Centro (28004, 28005, 28012, 28013, 28014, 28015) y Chamberí (28003, 28010) como primer filtro.</p>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

          {/* 05 PLAN DE ACCIÓN */}
          <div className="section-anchor" id="plan">
            <div className="section-label">05 — Plan de acción</div>
            <h2 className="h2">Qué hacer, en qué orden<br />y en qué semana.</h2>

            <div className="phase-block">
              <div className="phase-tag"><i className="fa-solid fa-database"></i> Semana 1 — Infraestructura de datos</div>
              <div className="action-items">
                <div className="action-item">
                  <div className="ai-num">1</div>
                  <div className="ai-body"><h4>Ejecutar scraper Outscraper — Oleada P1</h4><p>Comprar €5 en Outscraper. Extraer restaurantes en códigos postales de Centro + Chamberí. Exportar a CSV. Resultado esperado: ~1.800–2.200 contactos con teléfono.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">2</div>
                  <div className="ai-body"><h4>Descargar CSV Ayuntamiento Madrid</h4><p>Censo de locales gratuito en datos.madrid.es. Filtrar por código CNAE 5610 (Restaurantes) y 5630 (Bares). Cruzar con datos del scraper para enriquecer.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">3</div>
                  <div className="ai-body"><h4>Importar a hoja de seguimiento (Google Sheets)</h4><p>Columnas: Nombre, Teléfono, Dirección, Zona, Rating Maps, Estado (nuevo / contactado / respondió / visita / presupuesto / cerrado). Esta hoja es el mini-CRM hasta que haya uno real.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
              </div>
            </div>

            <div className="phase-block">
              <div className="phase-tag"><i className="fa-solid fa-paper-plane"></i> Semana 2 — Primer lote de outreach</div>
              <div className="action-items">
                <div className="action-item">
                  <div className="ai-num">4</div>
                  <div className="ai-body"><h4>Seleccionar 50 contactos del lote P1</h4><p>Filtrar por: rating Maps ≥ 4.0 (local activo y cuidado), zona Centro o Chamberí, tipo restaurante (excluir pizzerías de cadena y fast food). Estos son los mejores leads del primer lote.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">5</div>
                  <div className="ai-body"><h4>Enviar Mensaje 1 (urgencia) a los 50 seleccionados</h4><p>Usar el Mensaje 1 de la guía de outreach. Enviar en horario 11h–12h30 o 16h–17h30. Hacer seguimiento 48h después con mensaje corto si no responde.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">6</div>
                  <div className="ai-body"><h4>Registrar respuestas en la hoja de seguimiento</h4><p>Actualizar estado de cada contacto. Las respuestas positivas pasan directamente a agenda de visita. Las negativas se anotan para repesca en 30 días.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
              </div>
            </div>

            <div className="phase-block">
              <div className="phase-tag"><i className="fa-solid fa-handshake"></i> Semana 3–4 — Visitas y presupuestos</div>
              <div className="action-items">
                <div className="action-item">
                  <div className="ai-num">7</div>
                  <div className="ai-body"><h4>Ejecutar visitas de las respuestas positivas</h4><p>Objetivo: 3–6 visitas en la primera semana. Cada visita termina con un presupuesto enviado en menos de 24 horas usando la app Oro Presupuestos.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">8</div>
                  <div className="ai-body"><h4>Enviar siguiente lote de 50 contactos (Mensaje 2 — precio cerrado)</h4><p>Mientras se gestionan las visitas del primer lote, el outreach continúa. Ciclo continuo: 50 contactos / semana durante 4–6 semanas para tener siempre pipeline activo.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">9</div>
                  <div className="ai-body"><h4>Primer cierre y primera reseña</h4><p>El objetivo del primer mes no es el revenue: es conseguir 2–3 clientes satisfechos y obtener sus reseñas en Google Maps. Las reseñas multiplican la tasa de conversión de todos los outreachs siguientes.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
              </div>
            </div>

            <div className="phase-block">
              <div className="phase-tag"><i className="fa-solid fa-chart-line"></i> Mes 2–3 — Escalar y repetir</div>
              <div className="action-items">
                <div className="action-item">
                  <div className="ai-num">10</div>
                  <div className="ai-body"><h4>Escalar a Escenario C (€10 adicionales) si el pipeline está saturado</h4><p>Si las visitas superan la capacidad de ejecución, parar el outreach hasta absorber el trabajo. Si hay capacidad, comprar el siguiente lote con zonas P2 (Salamanca, Chamartín).</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
                <div className="action-item">
                  <div className="ai-num">11</div>
                  <div className="ai-body"><h4>Activar outreach estacional (octubre–noviembre)</h4><p>En octubre, cambiar al Mensaje 4 (temporada baja) para captar proyectos de reforma para enero–febrero. Este mensaje tiene la mayor tasa de conversión para proyectos de mayor ticket.</p></div>
                  <div className="ai-status"><div className="status-dot status-pending"></div></div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

          {/* 06 KPIs */}
          <div className="section-anchor" id="kpis">
            <div className="section-label">06 — Métricas de seguimiento</div>
            <h2 className="h2">Cómo saber si el sistema<br />está funcionando.</h2>
            <p className="body-text">Estos son los KPIs que hay que medir semanalmente. Si cualquiera de ellos está muy por debajo del objetivo, hay que intervenir en esa etapa del embudo antes de seguir escalando.</p>
            <div className="kpi-grid">
              <div className="kpi-box"><div className="kn">50<span>+</span></div><div className="kl">Contactos nuevos enviados por semana (mínimo para mantener pipeline)</div></div>
              <div className="kpi-box"><div className="kn">3<span>–8%</span></div><div className="kl">Tasa de respuesta al primer mensaje (si es menor al 3%, revisar el texto)</div></div>
              <div className="kpi-box"><div className="kn">2<span>+</span></div><div className="kl">Visitas a locales por semana (si es 0 semanas seguidas, el embudo está roto)</div></div>
              <div className="kpi-box"><div className="kn">1<span>+</span></div><div className="kl">Presupuesto enviado y seguido por semana (objetivo mínimo de cadencia)</div></div>
              <div className="kpi-box"><div className="kn"><span>€</span>1.500</div><div className="kl">Ticket medio inicial (si es menor, subir perfil del lead seleccionado)</div></div>
              <div className="kpi-box"><div className="kn">25<span>%</span></div><div className="kl">Tasa de cierre de presupuestos (si es menor, revisar formato de presupuesto)</div></div>
              <div className="kpi-box"><div className="kn">3<span> </span><i className="fa-solid fa-star" style={{ fontSize: '20px' }}></i></div><div className="kl">Reseñas en Google Maps en los primeros 60 días (prioridad máxima)</div></div>
              <div className="kpi-box"><div className="kn"><span>€</span>15K</div><div className="kl">Revenue mínimo del primer trimestre de la campaña hostelería</div></div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

          {/* 07 RIESGOS */}
          <div className="section-anchor" id="riesgos">
            <div className="section-label">07 — Riesgos y mitigaciones</div>
            <h2 className="h2">Qué puede salir mal<br />y cómo anticiparse.</h2>
            <table className="r-table">
              <thead><tr><th>Riesgo</th><th>Probabilidad</th><th>Impacto</th><th>Mitigación</th></tr></thead>
              <tbody>
                <tr><td>Tasa de respuesta menor al 3%</td><td>Media</td><td>Alto</td><td>Revisar el mensaje — probar con los 5 formatos de apertura de la Investigación 1. A/B test entre mensajes.</td></tr>
                <tr><td>Pipeline de visitas supera capacidad de ejecución</td><td>Alta si se escala rápido</td><td>Bajo (es un buen problema)</td><td>Pausar el outreach cuando haya 5+ visitas pendientes. Retomar cuando se hayan convertido en presupuesto.</td></tr>
                <tr><td>Clientes no dejan reseña después del trabajo</td><td>Alta sin sistema</td><td>Alto a largo plazo</td><td>Crear un mensaje post-trabajo estándar: pedir la reseña con enlace directo 24–48h después de terminar.</td></tr>
                <tr><td>Datos del scraper con muchos duplicados o locales cerrados</td><td>Media</td><td>Medio</td><td>Filtrar por rating Maps (sin rating = probablemente cerrado). Depurar antes de enviar masivamente.</td></tr>
                <tr><td>Competidor adopta la misma estrategia</td><td>Baja en el corto plazo</td><td>Bajo</td><td>La ventaja de Oro es la propuesta de valor (todos los oficios + precio cerrado + urgencias), no el canal. Acelerar la construcción de reseñas.</td></tr>
                <tr><td>Presupuestos que no cierran por precio</td><td>Media</td><td>Medio</td><td>Si el cierre es menor al 20%, revisar el proceso de seguimiento post-presupuesto. Un mensaje a los 5 días aumenta el cierre entre un 15–25%.</td></tr>
              </tbody>
            </table>
          </div>

          {/* FINAL NOTE */}
          <div style={{ background: 'var(--ink)', borderRadius: 'var(--radius-lg)', padding: '40px', margin: '48px 0' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.8px', color: 'var(--oro)', marginBottom: '16px' }}><i className="fa-solid fa-lock"></i> Documento de uso interno</div>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginBottom: '8px' }}>Esta investigación es un documento vivo. Debe actualizarse conforme avance la campaña con datos reales de respuesta, cierre y revenue.</p>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.7)', lineHeight: 1.7, marginBottom: 0 }}>La <Link to="/investigaciones/hosteleria-madrid" style={{ color: 'var(--oro)', textDecoration: 'none', borderBottom: '1px solid rgba(253,191,0,.3)' }}>Investigación 1 (pública)</Link> contiene los datos de mercado, competencia y comportamiento del decisor que sustentan todos los cálculos de esta investigación interna.</p>
          </div>

        </div>
      </section>
    </>
  )
}
