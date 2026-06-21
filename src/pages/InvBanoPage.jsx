import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvBanoPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 3</div>
          <h1>Reforma de baño en Madrid: comportamiento del comprador y oportunidades de mercado</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Análisis del mercado de reforma de cuartos de baño en la Comunidad de Madrid: volumen, ticket medio, ciclo de decisión, miedos del cliente y posicionamiento estratégico para contratistas.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Reformas residenciales — Cuartos de baño</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">SICI · Leroy Merlin · Reforma de Baños Madrid · INE</span></div>
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
            <p>La reforma de cuartos de baño es el segmento más activo del mercado residencial de reformas en España. Aproximadamente 180.000 baños se reforman cada año en el país; de ellos, entre 25.000 y 28.000 corresponden a la Comunidad de Madrid. El ticket medio oscila entre 4.000 y 8.000 euros, con un ticket mediano situado en torno a los 6.000 euros para un baño completo estándar de 5–8 m².</p>
            <p>El ciclo de decisión es largo para el tamaño de la obra: el propietario promedio tarda entre 4 y 9 meses desde que identifica la necesidad hasta que firma con un contratista. Durante ese periodo compara entre 3 y 5 presupuestos, consulta plataformas como Habitissimo o Houzz, y la decisión final recae mayoritariamente en la mujer del hogar —que elige estilo, materiales y empresa— mientras que el hombre suele ser quien formaliza el contrato.</p>
            <p>El principal problema que el mercado no resuelve bien es la coordinación entre fontanero y alicatador. Cuando un propietario contrata a dos autónomos por separado, los solapamientos de agenda generan retrasos y la responsabilidad de los defectos queda diluida. Oro Constructores, con equipo propio integrado (fontanero + alicatador + pintor bajo un mismo mando), elimina ese problema estructural y puede posicionar el presupuesto cerrado como el argumento central de venta.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#volumen" className="index-item"><span className="idx">02</span> Volumen de mercado</a>
              <a href="#perfiles" className="index-item"><span className="idx">03</span> Perfiles de cliente</a>
              <a href="#motivadores" className="index-item"><span className="idx">04</span> Motivadores de reforma</a>
              <a href="#miedos" className="index-item"><span className="idx">05</span> Miedos y fricciones</a>
              <a href="#decision" className="index-item"><span className="idx">06</span> Ciclo de decisión</a>
              <a href="#seasonality" className="index-item"><span className="idx">07</span> Estacionalidad</a>
              <a href="#mercado" className="index-item"><span className="idx">08</span> Oferta actual del mercado</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">—</span> Fuentes</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y alcance del estudio.</h2>
            <p className="body-text">Esta investigación combina datos secundarios de fuentes sectoriales y oficiales con análisis de comportamiento del consumidor procedente de estudios de mercado publicados. No se han realizado entrevistas primarias en esta versión; el estudio está diseñado para ser enriquecido con datos de campo (visitas técnicas, entrevistas a propietarios) en fases posteriores.</p>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>SICI (Salón Internacional de la Cerámica y la Piscina)</td><td>Sectorial</td><td>Volumen de reformas de baño en España, tendencias de materiales, perfil del decisor</td></tr>
                <tr><td>Leroy Merlin — Estudio de Reformas del Hogar</td><td>Comercial / sectorial</td><td>Rol de la mujer en la decisión de reforma, preferencias de estilo y materiales</td></tr>
                <tr><td>INE — Estadística de reforma de vivienda</td><td>Oficial</td><td>Volumen de reformas residenciales por tipología</td></tr>
                <tr><td>Habitissimo / Cronoshare</td><td>Plataforma digital</td><td>Rangos de precio, tiempos medios de obra, demanda por zona en Madrid</td></tr>
                <tr><td>Análisis competitivo directo</td><td>Primario (desk research)</td><td>Oferta de empresas de reforma de baño en Madrid: posicionamiento, precios, comunicación</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 VOLUMEN */}
          <div className="section-anchor" id="volumen">
            <div className="section-label">02 — Volumen de mercado</div>
            <h2 className="h2">Un mercado de 150 millones de euros solo en Madrid.</h2>
            <p className="body-text">La reforma de baño es el proyecto de reforma residencial más frecuente en España por delante de la cocina. Los datos del sector indican que en torno a 180.000 baños se reforman anualmente en el conjunto del territorio nacional, con la Comunidad de Madrid representando aproximadamente el 14–16% del total dado el peso demográfico y el precio del metro cuadrado de la capital, que convierte la mejora del hogar en una inversión con rentabilidad clara para los propietarios.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '180.000', label: 'Baños reformados al año en España' },
                { num: '25.000', label: 'Reformas de baño anuales en Madrid' },
                { num: '6.000€', label: 'Ticket medio de reforma de baño' },
                { num: '150M€', label: 'Mercado potencial Madrid (estimación)' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">El ticket varía significativamente según el alcance de la obra. Un baño de visita de 3–4 m² con cambio de sanitarios y alicatado puede resolverse por 3.000–4.500 euros. Un baño principal de 6–8 m² con reforma completa —demolición, nueva fontanería, suelo, revestimiento, mueble, sanitarios y accesorios— se sitúa entre 5.500 y 8.500 euros. Los baños con cambios de distribución o con materiales premium (porcelánicos de gran formato, griferías de diseño) pueden superar los 12.000 euros.</p>

            <table className="r-table">
              <thead><tr><th>Tipología de baño</th><th>Superficie</th><th>Alcance</th><th>Rango de precio</th></tr></thead>
              <tbody>
                <tr><td>Baño de visita — básico</td><td>3–4 m²</td><td>Sanitarios + alicatado</td><td>3.000–4.500 €</td></tr>
                <tr><td>Baño principal — estándar</td><td>5–7 m²</td><td>Reforma completa sin redistribución</td><td>5.000–7.500 €</td></tr>
                <tr><td>Baño principal — integral</td><td>6–9 m²</td><td>Reforma completa + redistribución</td><td>7.000–10.000 €</td></tr>
                <tr><td>Baño principal — premium</td><td>7–12 m²</td><td>Reforma completa + materiales de diseño</td><td>9.000–15.000 €</td></tr>
              </tbody>
            </table>
            <p className="nota">* Precios orientativos para Madrid capital. Incluyen materiales estándar, mano de obra y gestión de residuos. No incluyen IVA.</p>
          </div>

          {HR}

          {/* 03 PERFILES */}
          <div className="section-anchor" id="perfiles">
            <div className="section-label">03 — Perfiles de cliente</div>
            <h2 className="h2">Quién reforma el baño y por qué.</h2>
            <p className="body-text">El mercado de reforma de baño en Madrid tiene tres perfiles dominantes que se comportan de forma diferente tanto en motivación como en proceso de decisión y sensibilidad al precio.</p>

            <table className="r-table">
              <thead><tr><th>Perfil</th><th>Edad media</th><th>Situación</th><th>Motivador principal</th><th>Ticket medio</th></tr></thead>
              <tbody>
                <tr><td>Propietario establecido</td><td>45–60 años</td><td>Lleva 10+ años en la vivienda</td><td>Modernización estética o avería grave</td><td>5.500–7.500 €</td></tr>
                <tr><td>Comprador reciente</td><td>30–42 años</td><td>Compró piso de segunda mano</td><td>Actualizar antes de entrar a vivir</td><td>4.500–7.000 €</td></tr>
                <tr><td>Propietario-inversor</td><td>35–55 años</td><td>Reforma para alquiler o venta</td><td>Revalorización del activo</td><td>3.500–5.500 €</td></tr>
              </tbody>
            </table>

            <p className="body-text">El <strong>propietario establecido</strong> es el perfil más frecuente. Lleva años postergando la reforma porque el baño "funciona", hasta que una avería (grifo que gotea, bañera deteriorada, humedad en la junta) actúa como detonante. Su sensibilidad al precio es moderada: busca calidad y empresa de confianza más que precio mínimo.</p>
            <p className="body-text">El <strong>comprador reciente</strong> reforma el baño en la ventana entre escritura y mudanza — habitualmente 4–8 semanas. Tiene el presupuesto ajustado porque acaba de comprar, por lo que busca eficiencia de precio sin sacrificar resultado. Valora mucho el cumplimiento de plazos porque tiene una fecha de mudanza fija.</p>
            <p className="body-text">El <strong>propietario-inversor</strong> tiene el criterio más racional: calcula el retorno de la reforma en precio de venta o en incremento de renta. Busca precio competitivo y garantía de que la obra no genere problemas futuros con los inquilinos.</p>
          </div>

          {HR}

          {/* 04 MOTIVADORES */}
          <div className="section-anchor" id="motivadores">
            <div className="section-label">04 — Motivadores de reforma</div>
            <h2 className="h2">Qué desencadena la decisión de reformar el baño.</h2>
            <p className="body-text">La reforma de baño rara vez es un capricho impulsivo. En la mayoría de los casos existe un detonante concreto que convierte la idea en proyecto activo. Identificar ese detonante es clave para saber en qué momento comunicar y qué mensaje usar.</p>

            <table className="r-table">
              <thead><tr><th>Detonante</th><th>Frecuencia</th><th>Urgencia</th><th>Nota para el comercial</th></tr></thead>
              <tbody>
                <tr><td>Avería grave (tubería, grifo, bañera)</td><td>Alta</td><td>Alta</td><td>El cliente necesita solución rápida; priorizar respuesta en menos de 48h</td></tr>
                <tr><td>Azulejos rotos o desprendidos</td><td>Media</td><td>Media</td><td>Miedo al agua detrás del azulejo; argumento: "si lo dejamos, el problema será mayor"</td></tr>
                <tr><td>Cambio de vivienda (compra reciente)</td><td>Alta</td><td>Media-alta</td><td>Fecha de mudanza como deadline; presupuesto en 24h es ventaja competitiva</td></tr>
                <tr><td>Modernización estética</td><td>Media</td><td>Baja</td><td>Ciclo de decisión más largo; acompañar con referencias visuales y muestras</td></tr>
                <tr><td>Problema de humedad o moho</td><td>Media</td><td>Media</td><td>El cliente tiene miedo de que empeore; diagnóstico gratuito como entrada</td></tr>
              </tbody>
            </table>

            <p className="body-text">Los meses de mayor actividad comercial (enero–marzo) coinciden con decisiones tomadas durante las vacaciones de Navidad: muchos propietarios aprovechan el tiempo libre para visitar tiendas, pedir presupuestos y tomar la decisión. El segundo pico (septiembre–octubre) responde a la vuelta de vacaciones de verano, con energía y presupuesto renovados tras el periodo estival.</p>
          </div>

          {HR}

          {/* 05 MIEDOS */}
          <div className="section-anchor" id="miedos">
            <div className="section-label">05 — Miedos y fricciones</div>
            <h2 className="h2">Los cinco miedos que bloquean al cliente.</h2>
            <p className="body-text">El cliente que necesita reformar un baño no siempre contrata. Existe una brecha significativa entre "tengo intención de reformar" y "firmo el contrato". Esa brecha está poblada de miedos concretos y experiencias negativas de conocidos. Entender esos miedos es el primer paso para desactivarlos.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-broom',
                  titulo: 'Obra sucia y sin control',
                  detalle: 'El propietario teme que el polvo de la demolición afecte a toda la vivienda. Especialmente crítico en hogares con niños o con vecinos de planta. La protección de la obra (plásticos, aspirador industrial, limpieza diaria) no está garantizada con autónomos individuales.'
                },
                {
                  icon: 'fa-solid fa-clock',
                  titulo: 'Plazos que no se cumplen',
                  detalle: 'Es el miedo más citado en plataformas de reseñas. El cliente oye "tres semanas" y la obra dura seis. Esto es especialmente crítico cuando hay una mudanza pactada o cuando el baño afectado es el único de la vivienda.'
                },
                {
                  icon: 'fa-solid fa-person-walking-arrow-right',
                  titulo: 'El fontanero desaparece a mitad',
                  detalle: 'Cuando se contratan oficios por separado, el fontanero termina su parte y ya no vuelve si surgen ajustes o problemas durante el alicatado. El cliente queda atrapado entre dos autónomos que se culpan mutuamente.'
                },
                {
                  icon: 'fa-solid fa-arrow-trend-up',
                  titulo: 'Coste final mayor que el presupuestado',
                  detalle: 'El "presupuesto orientativo" es una de las quejas más frecuentes. El cliente firma por 5.000 € y la factura final llega a 6.800 € con "extras" que no estaban claros al inicio. La desconfianza ante presupuestos no cerrados es estructural en el sector.'
                },
                {
                  icon: 'fa-solid fa-toilet',
                  titulo: 'Quedarse sin baño operativo',
                  detalle: 'En viviendas de un solo baño, la reforma implica días sin acceso a ducha o WC. El cliente quiere saber exactamente cuántos días y cuándo. La planificación detallada —y su comunicación— es un diferenciador comercial real.'
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
            <h2 className="h2">Quién decide y cómo decide.</h2>
            <p className="body-text">Los estudios de Leroy Merlin y SICI sobre comportamiento del consumidor en reformas del hogar coinciden en un dato relevante: en hogares de pareja, la mujer es la decisora principal en reformas de baño en más del 65% de los casos. Elige el estilo, los materiales, el acabado y, en última instancia, la empresa. El hombre suele ser quien solicita el presupuesto por teléfono y quien firma el contrato, pero la decisión de fondo la ha tomado la mujer.</p>
            <p className="body-text">Esto tiene implicaciones directas en cómo presentar el portafolio: las referencias visuales (fotos de obra terminada, muestras de materiales, renders de distribución) tienen más peso comercial que las fichas técnicas. La confianza se genera antes con una mujer cliente a través de la estética del trabajo que a través del precio por metro cuadrado.</p>

            <table className="r-table">
              <thead><tr><th>Etapa del proceso</th><th>Duración típica</th><th>Qué busca el cliente</th><th>Canal principal</th></tr></thead>
              <tbody>
                <tr><td>Idea / inspiración</td><td>1–6 meses</td><td>Referentes visuales, materiales, posibilidades</td><td>Pinterest, Instagram, Houzz</td></tr>
                <tr><td>Búsqueda de empresas</td><td>2–6 semanas</td><td>Opciones en su zona, reseñas, portfolio</td><td>Google Maps, Habitissimo, boca a boca</td></tr>
                <tr><td>Solicitud de presupuestos</td><td>2–4 semanas</td><td>3–5 presupuestos comparables</td><td>Formulario web, WhatsApp, teléfono</td></tr>
                <tr><td>Comparación y decisión</td><td>1–3 semanas</td><td>Precio, confianza, plazo, garantía</td><td>Conversación interna de pareja</td></tr>
                <tr><td>Firma de contrato</td><td>1 semana</td><td>Claridad de condiciones, fecha de inicio</td><td>Presencial o digital</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 07 ESTACIONALIDAD */}
          <div className="section-anchor" id="seasonality">
            <div className="section-label">07 — Estacionalidad</div>
            <h2 className="h2">Los dos picos del año y cómo aprovecharlos.</h2>
            <p className="body-text">La demanda de reforma de baño no se distribuye uniformemente a lo largo del año. Existen dos ventanas claras de alta demanda que coinciden con periodos de reflexión y planificación del propietario.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '32px 0' }}>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '18px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-snowflake" style={{ marginRight: '8px' }}></i> Enero — Marzo
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  Las Navidades actúan como catalizador: el propietario pasa tiempo en casa, ve los defectos del baño y toma la decisión durante las vacaciones. En enero y febrero empieza a pedir presupuestos. El pico de firma de contratos se produce en febrero-marzo para obras que arrancan en primavera.
                </p>
              </div>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '18px', marginBottom: '12px' }}>
                  <i className="fa-solid fa-sun" style={{ marginRight: '8px' }}></i> Septiembre — Octubre
                </div>
                <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  La vuelta del verano reactiva proyectos que quedaron aparcados en junio. El cliente tiene energía renovada y en muchos casos presupuesto ahorrado durante el año. Las obras de otoño permiten terminar antes de las fiestas de fin de año.
                </p>
              </div>
            </div>

            <p className="body-text">Los meses de menor demanda son julio y agosto (vacaciones, calor, falta de disponibilidad de contratistas) y diciembre (fiestas, nadie quiere obra en casa). Estos meses son ideales para trabajo interno: formación, mantenimiento de herramientas, actualización de portfolio y planificación de captación para el siguiente pico.</p>
          </div>

          {HR}

          {/* 08 MERCADO */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">08 — Oferta actual del mercado</div>
            <h2 className="h2">Qué ofrece la competencia y dónde falla.</h2>
            <p className="body-text">El mercado de reforma de baño en Madrid está fragmentado entre tres tipos de operador, cada uno con ventajas e inconvenientes claros desde la perspectiva del propietario.</p>

            <table className="r-table">
              <thead><tr><th>Tipo de operador</th><th>Ventaja</th><th>Problema principal</th><th>Ticket medio</th></tr></thead>
              <tbody>
                <tr><td>Autónomo individual (fontanero o alicatador)</td><td>Precio bajo, trato directo</td><td>No cubre todos los oficios; si falla la coordinación, el propietario queda sin responsable</td><td>2.500–4.000 €</td></tr>
                <tr><td>Empresa de reformas generalista</td><td>Cubre varios oficios</td><td>Subcontrata; el propietario paga la capa de intermediación sin ganar coordinación real</td><td>5.000–9.000 €</td></tr>
                <tr><td>Empresa especializada en baños</td><td>Proceso estandarizado, rapidez</td><td>Catálogo cerrado; poca flexibilidad de materiales; precio rígido</td><td>4.500–8.000 €</td></tr>
                <tr><td>Cadena de bricolaje (Leroy Merlin, etc.)</td><td>Confianza de marca, financiación</td><td>Precio elevado, subcontrata la obra, proceso lento</td><td>7.000–12.000 €</td></tr>
              </tbody>
            </table>

            <p className="body-text">El gap de mercado más claro está en el segmento de 5.000–8.000 euros: el cliente quiere un equipo propio (no subcontratado), presupuesto cerrado, plazo cumplido y un único interlocutor. Ningún operador dominante cubre ese espacio con consistencia en Madrid.</p>
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Cómo posicionarse en este mercado.</h2>
            <p className="body-text">Los datos de esta investigación apuntan a tres vectores de diferenciación claros para Oro Constructores en el segmento de reforma de baño:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Equipo propio integrado como argumento comercial principal',
                  detalle: 'El principal dolor del cliente es la falta de coordinación entre fontanero y alicatador cuando los contrata por separado. Oro Constructores tiene equipo propio (fontanero + alicatador + pintor). Ese hecho debe estar en el primer párrafo de toda comunicación comercial, no en el pie de página.'
                },
                {
                  num: '02',
                  titulo: 'Presupuesto cerrado como promesa de marca',
                  detalle: 'El miedo al "extra" final es estructural. La promesa de presupuesto cerrado —el precio que se firma es el precio que se paga— desactiva el principal bloqueador de decisión. Debe ir respaldado por condiciones claras en el contrato y comunicado explícitamente en el presupuesto (no en la letra pequeña).'
                },
                {
                  num: '03',
                  titulo: 'Portfolio visual orientado a la decisora real',
                  detalle: 'La mujer decide el baño. El portfolio de Oro debe mostrar trabajos terminados con fotos de calidad: material visual antes/después, detalles de acabados, combinaciones de materiales. El certificado técnico viene después; la foto impactante viene primero.'
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

            <p className="body-text">La estacionalidad indica que el esfuerzo de captación debe concentrarse en diciembre-enero (para cerrar obras de febrero-marzo) y en agosto (para cerrar obras de septiembre-octubre). Fuera de esos picos, el foco debe estar en el seguimiento de presupuestos presentados y en la generación de contenido de referencia (portfolio, casos de éxito).</p>
          </div>

          {HR}

          {/* FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">Fuentes</div>
            <h2 className="h2">Referencias bibliográficas.</h2>
            <p className="body-text">Esta investigación se apoya en las siguientes fuentes:</p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>SICI — Salón Internacional de la Cerámica y la Piscina. <em>Informe de mercado reforma de baño en España.</em> Edición 2024.</li>
              <li>Leroy Merlin España. <em>Estudio de reformas del hogar: perfil del comprador y proceso de decisión.</em> 2023–2024.</li>
              <li>INE — Instituto Nacional de Estadística. <em>Estadística de licencias municipales de obras y rehabilitación.</em> 2024.</li>
              <li>Habitissimo / Cronoshare. <em>Precios orientativos de reforma de cuarto de baño en Madrid.</em> Consultado junio 2026.</li>
              <li>OCU — Organización de Consumidores y Usuarios. <em>Cómo contratar una reforma: guía y precios.</em> 2024.</li>
            </ul>
            <p className="nota">* Los datos de volumen de mercado son estimaciones basadas en proyección de datos nacionales. Las cifras de ticket medio proceden de análisis de precios publicados en plataformas digitales y estudios sectoriales. No se garantiza su exactitud absoluta.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Tienes un baño que reformar en Madrid?</h2>
          <p>Presupuesto cerrado, equipo propio, plazo comprometido. Sin sorpresas en la factura final.</p>
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
