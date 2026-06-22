import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvSuelosPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 13</div>
          <h1>Suelos y tarimas en Madrid: mercado, tendencias y ciclo de decisión del propietario</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Análisis del mercado de instalación y cambio de suelo en la Comunidad de Madrid: volumen potencial, tipología de cliente, tendencias de material 2024-2026 y posicionamiento estratégico para contratistas.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Suelos y Revestimientos Horizontales</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">ASCER · INE · Habitissimo · ANFFECC · Análisis de campo</span></div>
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
            <p>El cambio de suelo es el proyecto de reforma residencial con el ciclo de decisión más corto del sector. Una obra de suelos dura entre uno y tres días, no requiere que el propietario abandone la vivienda durante los trabajos y el resultado visual es inmediato. Esas tres características hacen que el propietario pase de la idea a la firma del presupuesto en apenas dos a seis semanas, frente a los cuatro a nueve meses que tarda en decidirse para una reforma de baño o cocina. Esta velocidad de decisión convierte la instalación de suelos en uno de los segmentos más eficientes en términos de coste de captación para cualquier empresa de reformas.</p>
            <p>El parque de viviendas de Madrid ofrece un volumen de demanda potencial extraordinario. Con 3,2 millones de viviendas en la Comunidad y un ciclo de vida medio del suelo de doce a dieciocho años, se estima que entre 80.000 y 100.000 obras de suelo se ejecutan anualmente solo en la región. Las tendencias de material han cambiado de forma acelerada desde 2022: el vinílico LVT y SPC crece un cuarenta por ciento en instalaciones anuales gracias a su resistencia al agua, mientras el parquet natural retrocede por precio y exigencia de mantenimiento. La cerámica de gran formato gana terreno en salones, y la tarima laminada AC5 se consolida como la opción dominante en el segmento de precio medio.</p>
            <p>El principal problema operativo del mercado es la falta de instaladores disponibles. La mayoría son autónomos individuales con agendas llenas, lo que genera esperas de tres a seis semanas para iniciar la obra. Para el cliente que acaba de comprar un piso y tiene una fecha de mudanza, esa demora es inaceptable. La empresa que ofrece inicio de obra en menos de dos semanas y garantiza la nivelación de la base previa tiene una ventaja competitiva directa y cuantificable sobre el mercado de autónomos.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de cliente</a>
              <a href="#tendencias" className="index-item"><span className="idx">04</span> Tendencias de material 2024-2026</a>
              <a href="#momento" className="index-item"><span className="idx">05</span> Ciclo de decisión y estacionalidad</a>
              <a href="#problemas" className="index-item"><span className="idx">06</span> Problemas y frustraciones del cliente</a>
              <a href="#precios" className="index-item"><span className="idx">07</span> Estructura de precios</a>
              <a href="#mercado" className="index-item"><span className="idx">08</span> Estructura del mercado actual</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">10</span> Fuentes</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y alcance del estudio.</h2>
            <p className="body-text">Esta investigación combina datos secundarios de fuentes sectoriales, estadísticas oficiales y análisis de comportamiento de plataformas de compraventa de servicios. El análisis de tendencias de material se apoya en informes de la industria cerámica y de la madera publicados en 2024 y 2025. Los rangos de precio se han construido a partir de presupuestos publicados en plataformas de comparación de servicios y datos propios de campo.</p>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>ASCER — Asociación Española de Fabricantes de Azulejos y Pavimentos Cerámicos</td><td>Sectorial</td><td>Volumen de mercado cerámico, tendencias gran formato, evolución de la demanda</td></tr>
                <tr><td>ANFFECC — Asociación Nacional de Fabricantes de Fritas, Esmaltes y Colores Cerámicos</td><td>Sectorial</td><td>Datos de producción y consumo de pavimentos en España</td></tr>
                <tr><td>INE — Estadística de vivienda</td><td>Oficial</td><td>Parque de viviendas Comunidad de Madrid, antigüedad media</td></tr>
                <tr><td>Habitissimo / Cronoshare</td><td>Plataforma digital</td><td>Precios orientativos, tiempos medios, demanda por tipo de suelo</td></tr>
                <tr><td>Análisis de campo (presupuestos y obras)</td><td>Primario</td><td>Tiempos reales de instalación, problemas de nivelación, preferencias del cliente</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 CONTEXTO */}
          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">Un mercado con 80.000 obras anuales y demanda estructural creciente.</h2>
            <p className="body-text">El mercado de suelos residenciales en Madrid está impulsado por dos motores independientes que se refuerzan mutuamente. El primero es el envejecimiento del parque de viviendas: Madrid tiene un parque residencial donde más del treinta por ciento de las viviendas supera los cuarenta años de antigüedad, y el suelo original de esas viviendas —moqueta, terrazo o tarima de los ochenta— ha superado con creces su vida útil estética y funcional. El segundo motor es el mercado de compraventa de segunda mano, que en la Comunidad de Madrid supera las 70.000 operaciones anuales: cada comprador de segunda mano es un cliente potencial de suelo nuevo antes de la mudanza.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '3,2M', label: 'Viviendas en la Comunidad de Madrid' },
                { num: '100.000', label: 'Obras de suelo estimadas al año en Madrid' },
                { num: '40%', label: 'Crecimiento del vinílico LVT desde 2022' },
                { num: '1-3 días', label: 'Duración media de una obra de suelo (80m²)' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">La rapidez de ejecución es el rasgo que distingue al mercado de suelos de cualquier otro servicio de reforma. Un piso de ochenta metros cuadrados con cambio de tarima en salón, pasillo y dormitorios se resuelve en uno o dos días de trabajo. El propietario puede quedarse en la vivienda, los muebles se mueven zona a zona, y al tercer día el espacio está habitable y completamente transformado visualmente. Esta combinación —resultado impactante, mínima disrupción, plazo brevísimo— genera las mejores reseñas de satisfacción del sector reformas.</p>
          </div>

          {HR}

          {/* 03 TIPOLOGÍA */}
          <div className="section-anchor" id="tipologia">
            <div className="section-label">03 — Tipología de cliente</div>
            <h2 className="h2">Tres perfiles con motivaciones y tickets diferenciados.</h2>
            <p className="body-text">El cliente de suelos en Madrid se concentra en tres perfiles con comportamientos de compra distintos. Identificar el perfil desde el primer contacto permite adaptar el argumento comercial y el presupuesto antes de la visita.</p>

            <table className="r-table">
              <thead><tr><th>Perfil</th><th>Situación</th><th>Motivador</th><th>Material preferente</th><th>Ticket medio</th></tr></thead>
              <tbody>
                <tr><td>Comprador de segunda mano</td><td>Acaba de comprar piso; quiere suelo nuevo antes de entrar</td><td>Eliminar el suelo anterior (terrazo, moqueta, tarima vieja); empezar desde cero</td><td>Tarima laminada AC5 o LVT</td><td>1.500–3.500 €</td></tr>
                <tr><td>Propietario establecido (upsell de reforma)</td><td>Reformó baño o cocina; aprovecha la presencia del equipo</td><td>"Ya que estamos": reducir coste de movilización compartiendo visita</td><td>Cerámica gran formato o LVT</td><td>800–2.000 €</td></tr>
                <tr><td>Propietario de inversión (alquiler/Airbnb)</td><td>Quiere suelo resistente, neutral y fácil de mantener</td><td>Maximizar durabilidad; evitar reclamaciones de inquilinos</td><td>SPC vinílico o cerámica porcelánica</td><td>1.200–2.800 €</td></tr>
              </tbody>
            </table>

            <p className="body-text">El perfil de comprador de segunda mano es el más urgente y el que más valora la disponibilidad de inicio rápido. Tiene una fecha de mudanza y no puede esperar seis semanas a que un instalador autónomo esté libre. El perfil de propietario de inversión es el más racional: compara materiales por coste de mantenimiento a largo plazo más que por precio de instalación inicial.</p>
            <p className="body-text">El upsell de reforma en curso merece atención especial porque el coste de captación es cero: el equipo ya está en la obra, el cliente ya confía en la empresa y el presupuesto adicional se firma en la propia visita. "Mientras cambiamos el baño, ¿le hacemos el pasillo también?" es la frase comercial con mayor conversión del sector.</p>
          </div>

          {HR}

          {/* 04 TENDENCIAS */}
          <div className="section-anchor" id="tendencias">
            <div className="section-label">04 — Tendencias de material 2024-2026</div>
            <h2 className="h2">El vinílico desplaza al parquet; la cerámica de gran formato conquista el salón.</h2>
            <p className="body-text">El mercado de suelos ha experimentado una rotación de materiales significativa desde 2020. El parquet natural, que fue dominante durante la década de los 2000, cede posiciones de forma constante por dos razones estructurales: su precio ha subido por encima de la inflación general y su mantenimiento (barnizado periódico, sensibilidad al agua) genera fricciones en un cliente que prefiere la comodidad del bajo mantenimiento. En su lugar emergen con fuerza dos alternativas.</p>

            <table className="r-table">
              <thead><tr><th>Material</th><th>Tendencia</th><th>Ventaja principal</th><th>Limitación</th><th>Precio referencia (m²)</th></tr></thead>
              <tbody>
                <tr><td>Tarima laminada AC5</td><td>Estable — sigue siendo dominante en precio medio</td><td>Precio accesible, estética cálida, instalación rápida (flotante)</td><td>No apta para zonas húmedas; sensible al agua estancada</td><td>12–22 € mat. + inst.</td></tr>
                <tr><td>Vinílico LVT / SPC</td><td>Fuerte crecimiento (+40% desde 2022)</td><td>100% impermeable; ideal para cocinas, baños y zonas de paso</td><td>Sensación menos "cálida" al tacto; gama de precio amplia con calidades muy distintas</td><td>18–35 € mat. + inst.</td></tr>
                <tr><td>Parquet natural</td><td>Retroceso gradual</td><td>Aspecto premium; se puede lijar y renovar varias veces</td><td>Precio elevado; necesita barnizado cada 5-8 años; sensible a humedad</td><td>35–70 € mat. + inst.</td></tr>
                <tr><td>Cerámica porcelánica gran formato (60×60, 60×120)</td><td>Crecimiento en salones y zonas diáfanas</td><td>Durabilidad máxima, fácil limpieza, aspecto arquitectónico</td><td>Instalación más lenta (requiere nivelación precisa); precio material más alto</td><td>25–55 € mat. + inst.</td></tr>
              </tbody>
            </table>

            <p className="body-text">El vinílico SPC (Stone Plastic Composite) merece un análisis aparte porque está desplazando a la tarima laminada en cocinas y baños de toda la región. Su núcleo rígido lo hace completamente impermeable y estable ante cambios de temperatura, dos ventajas que la tarima laminada no puede ofrecer. El cliente que en 2019 hubiera puesto tarima en toda la casa, hoy pone SPC en cocina y baño y laminada en dormitorios —creando distinción de zona sin distinción visual agresiva.</p>
          </div>

          {HR}

          {/* 05 CICLO */}
          <div className="section-anchor" id="momento">
            <div className="section-label">05 — Ciclo de decisión y estacionalidad</div>
            <h2 className="h2">El mercado con el ciclo de decisión más corto del sector reformas.</h2>
            <p className="body-text">La brevedad del ciclo de decisión en suelos tiene una causa estructural: el cliente puede ver el resultado final antes de empezar la obra. Las muestras de material en tienda, los renders de suelo sobre foto de la vivienda y los vídeos de antes/después eliminan la incertidumbre visual que sí existe en otros proyectos de reforma. Cuando el cliente ya tiene claro el material, el único freno es el precio y la disponibilidad del instalador.</p>

            <table className="r-table">
              <thead><tr><th>Etapa</th><th>Duración típica</th><th>Qué busca</th><th>Canal</th></tr></thead>
              <tbody>
                <tr><td>Idea y selección de material</td><td>1–3 semanas</td><td>Comparar materiales; visitar tiendas de suelo o grandes superficies</td><td>Leroy Merlin, tiendas especializadas, Instagram</td></tr>
                <tr><td>Búsqueda de instalador</td><td>3–10 días</td><td>Profesional de confianza, disponible pronto</td><td>Google Maps, recomendación personal, Habitissimo</td></tr>
                <tr><td>Solicitud de presupuestos</td><td>1–2 semanas</td><td>2-3 presupuestos comparables; fecha de inicio confirmada</td><td>WhatsApp, formulario web, teléfono</td></tr>
                <tr><td>Decisión y firma</td><td>3–7 días</td><td>Precio, disponibilidad, confianza en el instalador</td><td>Visita técnica presencial o videollamada</td></tr>
              </tbody>
            </table>

            <p className="body-text">La estacionalidad en suelos es menos marcada que en otras reformas porque el trabajo no requiere obras de gran envergadura. Sin embargo, se detectan dos picos de demanda: el primero en primavera (marzo a mayo), cuando los compradores de segunda mano que cerraron escrituras en invierno quieren preparar el piso antes del verano; y el segundo en septiembre-octubre, coincidiendo con la vuelta de vacaciones y el arranque del curso escolar.</p>
          </div>

          {HR}

          {/* 06 PROBLEMAS */}
          <div className="section-anchor" id="problemas">
            <div className="section-label">06 — Problemas y frustraciones del cliente</div>
            <h2 className="h2">Los cuatro puntos de dolor que la competencia no resuelve.</h2>
            <p className="body-text">El mercado de instalación de suelos tiene problemas recurrentes que afectan a una proporción significativa de obras. Identificarlos y comunicar cómo Oro Constructores los evita es el argumento comercial más potente en este segmento.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-ruler-combined',
                  titulo: 'Mala nivelación de la base: el suelo cruje o se hunde',
                  detalle: 'La nivelación de la solera antes de instalar el suelo es el paso técnico que más autónomos omiten o ejecutan mal para ahorrar tiempo. Un suelo flotante sobre base irregular cruje al pisarlo desde el primer día. En cerámica de gran formato, una base con desnivel superior a tres milímetros produce la rotura de piezas en las primeras semanas. La nivelación previa con mortero autonivelante no es un extra — es un requisito técnico que debe incluirse en el presupuesto y ejecutarse siempre.'
                },
                {
                  icon: 'fa-solid fa-calendar-xmark',
                  titulo: 'Esperas de 3 a 6 semanas para que empiecen',
                  detalle: 'La mayoría de instaladores de suelo en Madrid son autónomos que trabajan solos o en pareja. Sus agendas se llenan con facilidad, especialmente en primavera y otoño. El cliente que necesita el piso listo en dos semanas para mudarse no tiene opciones en el mercado de autónomos. La empresa con equipo propio y capacidad de planificación de agenda tiene aquí una ventaja que el autónomo no puede igualar.'
                },
                {
                  icon: 'fa-solid fa-triangle-exclamation',
                  titulo: 'Extras no previstos en la instalación de rodapiés y umbrales',
                  detalle: 'Un presupuesto de suelo que solo incluye el material y la instalación de la tarima o cerámica raramente incluye rodapiés, perfiles de unión entre zonas, umbrales de puerta o el sellado de juntas de dilatación. El cliente descubre estos "extras" durante la obra, cuando ya es difícil negociar. Un presupuesto cerrado que los incluya desde el inicio genera confianza y elimina el conflicto.'
                },
                {
                  icon: 'fa-solid fa-water',
                  titulo: 'Instalación de tarima en zonas húmedas sin advertencia previa',
                  detalle: 'Muchos instaladores colocan tarima laminada en cocinas o junto a baños sin informar al cliente del riesgo. Cuando llega la primera salpicadura importante o una fuga menor, el parqué se hincha y la reforma se repite. Asesorar correctamente al cliente sobre qué material es apto para cada zona no es solo ético — es la diferencia entre un cliente satisfecho y uno que deja una reseña negativa.'
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

          {/* 07 PRECIOS */}
          <div className="section-anchor" id="precios">
            <div className="section-label">07 — Estructura de precios</div>
            <h2 className="h2">Precios de referencia por material y tipología de obra.</h2>
            <p className="body-text">Los precios en el mercado de suelos de Madrid varían en función del material elegido, la superficie a cubrir y las condiciones de la base existente. Los rangos siguientes incluyen material y mano de obra de instalación, pero no incluyen IVA ni la preparación de la base cuando esta requiere trabajos adicionales de nivelación.</p>

            <table className="r-table">
              <thead><tr><th>Material</th><th>Precio por m² (mat. + inst.)</th><th>Precio obra media 80m² salón y pasillo</th><th>Plazo de instalación</th></tr></thead>
              <tbody>
                <tr><td>Tarima laminada AC4 (entrada)</td><td>12–16 €/m²</td><td>960–1.280 €</td><td>1 día</td></tr>
                <tr><td>Tarima laminada AC5 (calidad media)</td><td>16–22 €/m²</td><td>1.280–1.760 €</td><td>1–2 días</td></tr>
                <tr><td>Vinílico LVT (clic, gama media)</td><td>18–28 €/m²</td><td>1.440–2.240 €</td><td>1–2 días</td></tr>
                <tr><td>Vinílico SPC (rígido, resistencia total)</td><td>22–35 €/m²</td><td>1.760–2.800 €</td><td>1–2 días</td></tr>
                <tr><td>Parquet natural (roble, flotante)</td><td>35–55 €/m²</td><td>2.800–4.400 €</td><td>2–3 días</td></tr>
                <tr><td>Cerámica 60×60 porcelánica</td><td>28–45 €/m²</td><td>2.240–3.600 €</td><td>2–4 días</td></tr>
                <tr><td>Cerámica gran formato 60×120</td><td>40–65 €/m²</td><td>3.200–5.200 €</td><td>3–5 días</td></tr>
              </tbody>
            </table>
            <p className="nota">* Precios orientativos para Madrid capital (junio 2026). Incluyen material, mano de obra e instalación estándar. No incluyen rodapiés, perfiles de unión, umbrales ni nivelación de base. No incluyen IVA.</p>

            <p className="body-text">La diferencia de precio entre una tarima laminada AC4 de entrada y una cerámica de gran formato puede ser de dos a cuatro veces. Sin embargo, la percepción de valor del cliente no es proporcional: el cliente que elige cerámica de gran formato valora principalmente la durabilidad y la modernidad estética, mientras que el que elige laminada valora la calidez y el coste. Conocer el motivador antes de presentar el presupuesto permite recomendar el material correcto y evitar la comparación de precios en frío.</p>
          </div>

          {HR}

          {/* 08 MERCADO */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">08 — Estructura del mercado actual</div>
            <h2 className="h2">Un mercado atomizado con una oportunidad clara de diferenciación.</h2>
            <p className="body-text">El mercado de instalación de suelos en Madrid está dominado por autónomos y pequeñas empresas de dos a cuatro personas. A diferencia del mercado de reforma de cocina o baño, no existen cadenas especializadas con presencia dominante. Leroy Merlin y otras grandes superficies ofrecen el servicio de instalación como complemento a la venta de material, pero su propuesta es lenta (tres a seis semanas de espera), rígida (solo instalan su propio material) y con precio elevado por la capa de gestión adicional.</p>

            <table className="r-table">
              <thead><tr><th>Operador</th><th>Ventaja</th><th>Problema</th><th>Precio relativo</th></tr></thead>
              <tbody>
                <tr><td>Autónomo instalador</td><td>Precio bajo, trato directo</td><td>Agenda llena (3-6 semanas de espera); sin garantía formal; no asesora sobre material</td><td>Bajo</td></tr>
                <tr><td>Empresa de reformas generalista</td><td>Cubre varios oficios; único interlocutor</td><td>La instalación de suelos no es su especialidad; pueden subcontratar</td><td>Medio-alto</td></tr>
                <tr><td>Grandes superficies (Leroy Merlin)</td><td>Confianza de marca; financiación</td><td>Solo instalan su propio material; precio elevado; proceso burocrático y lento</td><td>Alto</td></tr>
                <tr><td>Empresa especializada en suelos</td><td>Conocimiento de material; instalación ágil</td><td>Escasas en Madrid con presencia digital sólida; pocas con equipo propio</td><td>Medio</td></tr>
              </tbody>
            </table>

            <p className="body-text">El hueco de mercado más claro es la empresa con equipo propio, presencia digital, capacidad de inicio de obra en menos de dos semanas y asesoramiento de material incluido en la visita. Ningún operador dominante en Madrid ocupa ese espacio de forma consistente.</p>
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Tres vectores de acción concretos.</h2>
            <p className="body-text">Los datos de esta investigación apuntan a tres palancas específicas para que Oro Constructores capture demanda en el mercado de suelos de Madrid con eficiencia comercial máxima.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'El suelo como upsell natural en toda reforma de baño o cocina',
                  detalle: 'Toda obra de baño o cocina incluye una visita técnica al piso. En esa visita, el comercial debe valorar el estado del suelo de pasillo, salón y dormitorios y añadir la propuesta al presupuesto. "Mientras estamos, ¿le hacemos el pasillo también?" es la pregunta que puede incrementar el ticket medio un treinta por ciento sin incrementar el coste de captación. La coordinación del equipo ya está resuelta porque el mismo equipo que hace el baño puede hacer el suelo el día siguiente.'
                },
                {
                  num: '02',
                  titulo: 'Comunicar la disponibilidad de inicio en menos de dos semanas como argumento de ventas',
                  detalle: 'La espera de tres a seis semanas con instaladores autónomos es el dolor estructural del mercado. Oro Constructores, con equipo propio y planificación de agenda, puede ofrecer inicio de obra en diez a quince días. Ese compromiso —comunicado explícitamente en el presupuesto con fecha de inicio confirmada— convierte la disponibilidad en ventaja competitiva directa.'
                },
                {
                  num: '03',
                  titulo: 'Presupuesto cerrado con nivelación incluida como estándar',
                  detalle: 'Incluir la nivelación básica de base en todos los presupuestos de suelo —como partida visible, no como coste oculto— diferencia la propuesta comercial de la del autónomo que omite ese paso. El cliente percibe mayor rigor técnico y evita la sorpresa del "extra" durante la obra. Si la nivelación requiere trabajos adicionales (más de un centímetro de desnivel), se comunica antes de iniciar, no durante.'
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

          {/* 10 FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes</div>
            <h2 className="h2">Referencias bibliográficas.</h2>
            <p className="body-text">Esta investigación se apoya en las siguientes fuentes:</p>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>ASCER — Asociación Española de Fabricantes de Azulejos y Pavimentos Cerámicos. <em>Informe anual del mercado cerámico español.</em> Edición 2024.</li>
              <li>ANFFECC. <em>Estadística de producción y consumo de pavimentos en España.</em> 2024.</li>
              <li>INE — Instituto Nacional de Estadística. <em>Censos de población y vivienda.</em> Comunidad de Madrid, 2021-2024.</li>
              <li>Habitissimo. <em>Precios orientativos de instalación de suelos en Madrid.</em> Consultado junio 2026.</li>
              <li>Leroy Merlin España. <em>Tendencias en materiales de suelo para el hogar.</em> 2024-2025.</li>
              <li>Análisis de campo propio — Oro Constructores. <em>Presupuestos y obras de suelo en Madrid.</em> 2025-2026.</li>
            </ul>
            <p className="nota">* Los rangos de precio son orientativos para Madrid capital. Las estimaciones de volumen de mercado se basan en proyecciones demográficas y datos sectoriales. No se garantiza su exactitud absoluta.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Quieres cambiar el suelo de tu vivienda o local en Madrid?</h2>
          <p>Asesoramiento de material, nivelación de base incluida, inicio en menos de dos semanas. Presupuesto cerrado sin sorpresas.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-file-invoice" style={{ marginRight: '8px' }}></i>
              Pedir presupuesto gratis
            </Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-phone" style={{ marginRight: '8px' }}></i>
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
