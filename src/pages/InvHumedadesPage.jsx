import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvHumedadesPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 5</div>
          <h1>Humedades en viviendas de Madrid: tipología, incidencia y oportunidad de mercado</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Análisis del problema de humedades en el parque residencial de Madrid: tipos, distribución geográfica, decisores, ciclo de contratación y posicionamiento estratégico para empresas de construcción y rehabilitación.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Rehabilitación residencial — Patología de edificios</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">OCU · IETcc-CSIC · Ministerio de Vivienda · Habitissimo</span></div>
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
            <p>El 30% de las viviendas de más de 30 años en España presenta algún tipo de problema de humedad activo o reciente, según datos de la OCU y estudios de patología de edificios del IETcc-CSIC. En Madrid, donde más del 60% del parque residencial supera los 30 años de antigüedad, esto se traduce en más de 800.000 viviendas con algún problema de humedad presente o latente.</p>
            <p>El problema de humedades no es monolítico: existen cuatro tipos con causas, urgencia y coste de reparación completamente distintos. La condensación es la más frecuente pero la de menor urgencia. Las humedades por filtración de cubierta son las más peligrosas a largo plazo: si no se tratan, generan daños estructurales en 2–4 años y multiplican el coste de reparación por 5 o por 10. La capilaridad afecta principalmente a plantas bajas de edificios antiguos y requiere intervención especializada.</p>
            <p>El mercado tiene dos decisores radicalmente distintos. En viviendas particulares, el propietario decide solo con un ciclo corto (2–4 semanas) cuando el problema es visible. En comunidades de propietarios, el administrador de fincas actúa como gatekeeper y la decisión la toma la junta, con un ciclo que puede alcanzar los 3–6 meses desde la detección hasta el contrato. Oro Constructores puede operar en ambos segmentos con propuestas adaptadas, siendo el diagnóstico gratuito en visita el argumento de entrada más eficiente para generar confianza en ambos perfiles.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#incidencia" className="index-item"><span className="idx">02</span> Incidencia y volumen</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de humedades</a>
              <a href="#geografia" className="index-item"><span className="idx">04</span> Distribución geográfica en Madrid</a>
              <a href="#riesgos" className="index-item"><span className="idx">05</span> Riesgos si no se actúa</a>
              <a href="#decisores" className="index-item"><span className="idx">06</span> Decisores y ciclo de contratación</a>
              <a href="#comunidades" className="index-item"><span className="idx">07</span> Segmento comunidades de propietarios</a>
              <a href="#particulares" className="index-item"><span className="idx">08</span> Segmento viviendas particulares</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">—</span> Fuentes</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y alcance del estudio.</h2>
            <p className="body-text">Esta investigación combina datos estadísticos de fuentes académicas y oficiales con análisis de comportamiento del decisor basado en estudios de sector y análisis cualitativo de plataformas de contratación. El enfoque es práctico: el objetivo no es describir el problema de humedades desde la ingeniería sino entender el mercado que genera ese problema y cómo acceder a él comercialmente.</p>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>OCU — Organización de Consumidores y Usuarios</td><td>Consumidor</td><td>Incidencia de humedades en viviendas españolas, perfil del afectado, coste de reparación</td></tr>
                <tr><td>IETcc-CSIC — Instituto Eduardo Torroja</td><td>Académico</td><td>Tipología de patologías de humedad en edificios; distribución por antigüedad del parque</td></tr>
                <tr><td>INE — Censo de edificios y viviendas</td><td>Oficial</td><td>Antigüedad del parque residencial en Madrid; distribución por distritos</td></tr>
                <tr><td>Ministerio de Vivienda — Encuesta de características esenciales de la vivienda</td><td>Oficial</td><td>Porcentaje de viviendas con problemas de humedad declarados por el propietario</td></tr>
                <tr><td>Habitissimo / Cronoshare</td><td>Plataforma digital</td><td>Precios de tratamiento de humedades en Madrid, tipología de solicitudes</td></tr>
                <tr><td>Asociaciones de administradores de fincas (CAFM)</td><td>Sectorial</td><td>Proceso de decisión en comunidades, ciclo de aprobación de derramas</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 INCIDENCIA */}
          <div className="section-anchor" id="incidencia">
            <div className="section-label">02 — Incidencia y volumen</div>
            <h2 className="h2">Más de 800.000 viviendas afectadas en Madrid.</h2>
            <p className="body-text">El parque residencial de Madrid presenta una concentración de antigüedad que hace del problema de humedades un mercado estructural, no coyuntural. Más del 60% de las viviendas de la Comunidad de Madrid tiene más de 30 años de antigüedad —el umbral a partir del cual los problemas de impermeabilización, instalaciones y ventilación se vuelven estadísticamente frecuentes.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '30%', label: 'Viviendas de +30 años con problema de humedad activo o reciente' },
                { num: '60%+', label: 'Del parque residencial de Madrid supera los 30 años' },
                { num: '800.000', label: 'Viviendas en Madrid con humedad presente o latente (est.)' },
                { num: '2–4 años', label: 'Ventana antes de daño estructural en filtraciones de cubierta no tratadas' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">La cifra de 800.000 viviendas no implica que todas sean mercado activo: muchas de ellas conviven con el problema sin actuar, bien porque el propietario no es consciente de la causa, bien porque lo considera tolerable o porque no tiene presupuesto para la reparación inmediata. Sin embargo, el porcentaje que pasa a acción activa en un año cualquiera —estimado entre el 8 y el 12% del universo afectado— genera un mercado anual de entre 64.000 y 96.000 intervenciones en la Comunidad de Madrid, de las cuales Madrid capital concentra aproximadamente el 70%.</p>
          </div>

          {HR}

          {/* 03 TIPOLOGÍA */}
          <div className="section-anchor" id="tipologia">
            <div className="section-label">03 — Tipología de humedades</div>
            <h2 className="h2">Cuatro tipos distintos con causas, urgencia y coste muy diferentes.</h2>
            <p className="body-text">El error más frecuente en el diagnóstico de humedades es tratar el síntoma (la mancha visible) sin identificar la causa. Cada tipo de humedad tiene un origen específico, requiere una técnica de reparación diferente y tiene una urgencia distinta. El diagnóstico correcto en visita es la competencia diferencial más valorada por el cliente.</p>

            <table className="r-table">
              <thead><tr><th>Tipo</th><th>Frecuencia en Madrid</th><th>Causa</th><th>Urgencia</th><th>Coste medio reparación</th></tr></thead>
              <tbody>
                <tr><td>Condensación</td><td>La más común</td><td>Falta de ventilación, puentes térmicos, cambio de temperatura interior/exterior</td><td>Baja-media</td><td>300–1.500 €</td></tr>
                <tr><td>Filtración (cubierta / terraza)</td><td>Alta</td><td>Impermeabilización deteriorada en cubierta o terraza; juntas rotas</td><td>Alta</td><td>2.000–8.000 €</td></tr>
                <tr><td>Capilaridad</td><td>Media (plantas bajas)</td><td>Agua del terreno que asciende por los muros de cimentación</td><td>Media</td><td>2.000–6.000 €</td></tr>
                <tr><td>Accidental (rotura de tubería)</td><td>Frecuente</td><td>Fuga en instalación de fontanería o calefacción</td><td>Muy alta</td><td>500–4.000 € (más reparación de daños)</td></tr>
              </tbody>
            </table>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-wind',
                  tipo: 'Condensación',
                  detalle: 'Es la humedad más frecuente en Madrid, especialmente en pisos de los años 60–80 con poca ventilación y sin aislamiento térmico. Se manifiesta como manchas negras en esquinas, cerca de ventanas o en la parte baja de paredes exteriores. La solución puede ir desde ventilación mecanizada (baja inversión) hasta aislamiento interior o exterior (inversión media-alta). El cliente a menudo no sabe que tiene humedad de condensación: cree que es "filtración del vecino".'
                },
                {
                  icon: 'fa-solid fa-house-flood-water',
                  tipo: 'Filtración de cubierta o terraza',
                  detalle: 'Es el tipo más urgente y el que genera mayor daño si no se actúa. La impermeabilización de cubiertas planas y terrazas tiene una vida útil de 15–25 años. En Madrid, donde la mayoría de edificios tiene cubierta plana construida entre 1960 y 1990, hay una generación completa de impermeabilizaciones en periodo de fallo. La filtración de cubierta genera manchas en el techo del último piso y, si no se trata, alcanza la estructura del forjado en 2–4 años.'
                },
                {
                  icon: 'fa-solid fa-arrow-up-from-ground-water',
                  tipo: 'Capilaridad',
                  detalle: 'Afecta principalmente a plantas bajas y semisótanos de edificios anteriores a 1970, cuando no existía normativa de barrera de vapor en cimentaciones. El agua del terreno asciende por los muros y genera manchas que empiezan desde el suelo hacia arriba. La reparación requiere inyección de resinas hidrófugas o excavación perimetral para instalar barrera impermeable. Es la tipología que genera mayor escepticismo en el cliente porque "siempre ha estado así".'
                },
                {
                  icon: 'fa-solid fa-pipe-valve',
                  tipo: 'Accidental por rotura de tubería',
                  detalle: 'Genera demanda de urgencia inmediata. El cliente ya tiene el problema activo (agua saliendo, vecino de abajo afectado) y necesita solución ese día. El margen en este segmento no está en el precio sino en la disponibilidad: quien responde en menos de 2 horas se lleva el trabajo. Además de la reparación de la fuga, habitualmente hay que reparar los daños en acabados (alicatados, pintura, escayola).'
                },
              ].map((m, i) => (
                <div key={i} style={{ border: '1px solid var(--ink-6)', borderRadius: '12px', padding: '24px', display: 'flex', gap: '20px' }}>
                  <div style={{ color: 'var(--oro)', fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>
                    <i className={m.icon}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', fontSize: '15px' }}>{m.tipo}</div>
                    <p className="body-text" style={{ margin: 0 }}>{m.detalle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {HR}

          {/* 04 GEOGRAFÍA */}
          <div className="section-anchor" id="geografia">
            <div className="section-label">04 — Distribución geográfica en Madrid</div>
            <h2 className="h2">Dónde se concentra el problema en la capital.</h2>
            <p className="body-text">La incidencia de humedades en Madrid no se distribuye uniformemente por la ciudad. Existe una correlación directa entre la antigüedad del parque de vivienda de un distrito y la densidad de problemas de humedad. Los distritos con parque más antiguo y densamente construido presentan la mayor incidencia.</p>

            <table className="r-table">
              <thead><tr><th>Distrito</th><th>Antigüedad media del parque</th><th>Incidencia estimada</th><th>Tipo predominante</th></tr></thead>
              <tbody>
                <tr><td>Carabanchel</td><td>Alta (1950–1980)</td><td>Muy alta</td><td>Capilaridad en plantas bajas, filtración cubiertas</td></tr>
                <tr><td>Vallecas (Villa + Puente)</td><td>Alta (1960–1985)</td><td>Muy alta</td><td>Condensación, filtración de cubierta</td></tr>
                <tr><td>Usera</td><td>Alta (1955–1975)</td><td>Alta</td><td>Capilaridad, condensación</td></tr>
                <tr><td>Tetuán</td><td>Alta (1950–1970)</td><td>Alta</td><td>Filtración de cubierta, capilaridad</td></tr>
                <tr><td>Latina</td><td>Media-alta (1960–1980)</td><td>Alta</td><td>Condensación, filtración</td></tr>
                <tr><td>Centro (Lavapiés, Malasaña)</td><td>Muy alta (pre-1950)</td><td>Alta</td><td>Capilaridad, filtración estructural</td></tr>
                <tr><td>Chamartín / Salamanca</td><td>Media (1965–1990)</td><td>Media</td><td>Condensación, filtración de terraza</td></tr>
              </tbody>
            </table>

            <p className="body-text">Los distritos periféricos del sur (Carabanchel, Vallecas, Usera) tienen parque de vivienda construido mayoritariamente entre 1950 y 1980 en un contexto de construcción masiva y baja calidad técnica: sin aislamiento, con materiales de menor durabilidad y con instalaciones que llevan décadas sin mantenimiento. Son los distritos con mayor densidad de problema activo per cápita y, por tanto, la prioridad geográfica para la captación en este segmento.</p>
          </div>

          {HR}

          {/* 05 RIESGOS */}
          <div className="section-anchor" id="riesgos">
            <div className="section-label">05 — Riesgos si no se actúa</div>
            <h2 className="h2">El coste de esperar siempre es mayor que el coste de reparar.</h2>
            <p className="body-text">El propietario con problema de humedad tiende a posponer la intervención por dos razones: la urgencia no es inmediata (no hay agua saliendo activamente) y el coste de la reparación da pereza afrontar. Esta postergación es, en casi todos los casos, la decisión más cara a largo plazo.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '32px 0' }}>
              <div style={{ background: 'var(--ink)', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: 'var(--oro)', fontWeight: 800, fontSize: '15px', marginBottom: '16px' }}>
                  <i className="fa-solid fa-circle-check" style={{ marginRight: '8px' }}></i> Reparación inmediata
                </div>
                <div style={{ color: 'rgba(255,255,255,.75)', fontSize: '14px', lineHeight: 1.8 }}>
                  <div><strong style={{ color: 'white' }}>Filtración cubierta:</strong> 3.000–5.000 €</div>
                  <div><strong style={{ color: 'white' }}>Capilaridad planta baja:</strong> 2.000–4.000 €</div>
                  <div><strong style={{ color: 'white' }}>Condensación severa:</strong> 800–2.000 €</div>
                  <div style={{ marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,.45)' }}>Intervención quirúrgica en el origen del problema antes de que se extiendan los daños</div>
                </div>
              </div>
              <div style={{ border: '2px solid #e55', borderRadius: '12px', padding: '28px' }}>
                <div style={{ color: '#e55', fontWeight: 800, fontSize: '15px', marginBottom: '16px' }}>
                  <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: '8px' }}></i> Reparación aplazada 3-5 años
                </div>
                <div style={{ color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.8 }}>
                  <div><strong>Filtración cubierta:</strong> 12.000–35.000 € (+ daños estructurales)</div>
                  <div><strong>Capilaridad extendida:</strong> 8.000–15.000 €</div>
                  <div><strong>Condensación con moho:</strong> 3.000–6.000 € (+ salud)</div>
                  <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--ink-3)' }}>El problema ha afectado a la estructura, el aislamiento y los acabados. El coste se multiplica por 4–7x.</div>
                </div>
              </div>
            </div>

            <p className="body-text">El argumento del "coste de esperar" es el más eficaz para convertir un prospecto frío (que reconoce el problema pero lo pospone) en un cliente activo. No se trata de asustar: se trata de mostrar datos reales de coste diferencial entre intervención temprana e intervención tardía. En la visita de diagnóstico, compartir uno o dos casos reales de comunidades o propietarios que esperaron y acabaron pagando 5 veces más es más efectivo que cualquier descuento.</p>
          </div>

          {HR}

          {/* 06 DECISORES */}
          <div className="section-anchor" id="decisores">
            <div className="section-label">06 — Decisores y ciclo de contratación</div>
            <h2 className="h2">Dos mercados dentro del mismo problema.</h2>
            <p className="body-text">El mercado de tratamiento de humedades en Madrid tiene dos segmentos con decisores completamente diferentes: el propietario particular y la comunidad de propietarios. Aunque el problema técnico puede ser idéntico (una filtración de cubierta afecta tanto al propietario del último piso como a la comunidad), el proceso de decisión y contratación es radicalmente distinto en cada caso.</p>

            <table className="r-table">
              <thead><tr><th>Dimensión</th><th>Vivienda particular</th><th>Comunidad de propietarios</th></tr></thead>
              <tbody>
                <tr><td>Decisor</td><td>El propietario (o inquilino si hay daños)</td><td>La junta de propietarios</td></tr>
                <tr><td>Gatekeeper</td><td>Ninguno</td><td>Administrador de fincas</td></tr>
                <tr><td>Ciclo de decisión</td><td>2–4 semanas (urgencia) / 1–3 meses (no urgente)</td><td>3–6 meses (desde detección hasta contrato)</td></tr>
                <tr><td>Número de presupuestos</td><td>2–3</td><td>Mínimo 3 (exigencia legal en muchas comunidades)</td></tr>
                <tr><td>Criterio de selección</td><td>Confianza + precio + rapidez</td><td>Precio + garantía + referencias en comunidades similares</td></tr>
                <tr><td>Ticket medio</td><td>500–5.000 €</td><td>3.000–40.000 € (según cubierta y comunidad)</td></tr>
                <tr><td>Forma de pago</td><td>Al contado o en dos plazos</td><td>Derrama aprobada en junta; a veces financiación</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 07 COMUNIDADES */}
          <div className="section-anchor" id="comunidades">
            <div className="section-label">07 — Segmento comunidades de propietarios</div>
            <h2 className="h2">El administrador de fincas: la puerta de entrada al segmento.</h2>
            <p className="body-text">Las comunidades de propietarios son el segmento de mayor ticket en el mercado de humedades: la reparación de una cubierta de un edificio de 30 viviendas puede superar los 30.000–40.000 euros. Sin embargo, también son el segmento de ciclo más largo y proceso más burocrático.</p>
            <p className="body-text">El administrador de fincas es la figura central del proceso. En la mayoría de los casos, es él quien detecta el problema (a través de la denuncia de un propietario), quien solicita los presupuestos, quien los presenta en junta y quien recomienda a cuál empresa contratar. La junta vota, pero la recomendación del administrador tiene un peso determinante.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '32px 0' }}>
              {[
                { paso: '01', texto: 'Propietario detecta el problema (mancha en techo, goteo) y avisa al administrador.' },
                { paso: '02', texto: 'Administrador solicita inspección técnica o presupuesto a 2–3 empresas de confianza.' },
                { paso: '03', texto: 'Administrador presenta los presupuestos en junta ordinaria o extraordinaria.' },
                { paso: '04', texto: 'Junta aprueba (o no) la derrama para financiar la obra. Mayoría simple o cualificada según el importe.' },
                { paso: '05', texto: 'Administrador adjudica la obra a la empresa elegida y coordina el inicio.' },
                { paso: '06', texto: 'Ejecución de la obra. El administrador actúa como interlocutor con la empresa.' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--oro)', color: 'var(--ink)', fontWeight: 800, fontSize: '13px', borderRadius: '6px', padding: '4px 10px', flexShrink: 0, lineHeight: 1.5 }}>{p.paso}</div>
                  <p className="body-text" style={{ margin: 0, paddingTop: '2px' }}>{p.texto}</p>
                </div>
              ))}
            </div>

            <p className="body-text">La estrategia de captación en este segmento pasa por generar relación directa con administradores de fincas, no con los propietarios finales. Un administrador que gestiona 40 comunidades y recomienda a Oro Constructores representa un canal de 40 proyectos potenciales. Esa relación se construye con visitas de presentación, presupuestos rápidos y precisos, y cumplimiento impecable en las primeras obras que se contraten.</p>
          </div>

          {HR}

          {/* 08 PARTICULARES */}
          <div className="section-anchor" id="particulares">
            <div className="section-label">08 — Segmento viviendas particulares</div>
            <h2 className="h2">El segmento de urgencia: quien responde primero, gana.</h2>
            <p className="body-text">El propietario particular con un problema de humedad visible tiene un comportamiento diferente al de un cliente de reforma integral. No está "buscando empresa": está buscando solución. El primer proveedor que le genera confianza y da una fecha de visita en menos de 48 horas tiene una ventaja competitiva enorme sobre los que responden en 3–5 días.</p>
            <p className="body-text">La dinámica de urgencia media —el cliente tiene el problema, lo ve, pero no está en crisis de emergencia— define este segmento. A diferencia de una fuga activa (urgencia inmediata) o una reforma de baño (urgencia baja), la humedad visible genera ansiedad creciente: el cliente tiene miedo de que empeore, que afecte al vecino de abajo, que sea indicativo de un problema mayor. Ese miedo activa la búsqueda pero no produce la misma urgencia inmediata que una fuga.</p>

            <table className="r-table">
              <thead><tr><th>Señal de urgencia</th><th>Nivel</th><th>Acción de Oro</th></tr></thead>
              <tbody>
                <tr><td>Mancha marrón en techo o pared exterior</td><td>Media</td><td>Visita de diagnóstico gratuita en menos de 48h; diagnóstico escrito</td></tr>
                <tr><td>Moho visible en esquinas o juntas</td><td>Media-alta</td><td>Diagnóstico + propuesta de solución + argumentar deterioro progresivo</td></tr>
                <tr><td>Agua goteando del techo</td><td>Alta</td><td>Respuesta el mismo día; contención temporal si aplica + presupuesto en 24h</td></tr>
                <tr><td>Vecino de abajo reclama daños</td><td>Muy alta</td><td>Respuesta urgente; el cliente tiene presión externa además del problema propio</td></tr>
              </tbody>
            </table>

            <p className="body-text">El diagnóstico gratuito en visita es el argumento de entrada más eficiente para este segmento. La mayoría de los proveedores del mercado cobran el desplazamiento o el diagnóstico. Ofrecer visita gratuita sin compromiso reduce la fricción de entrada al mínimo y genera la oportunidad de presentar el presupuesto en persona, donde la tasa de conversión es significativamente mayor que enviándolo por email.</p>
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Cómo posicionarse en el mercado de humedades.</h2>
            <p className="body-text">El mercado de humedades tiene características únicas que lo diferencian de la reforma de baño o la reforma integral: el cliente no ha elegido tener el problema, no está en modo "proyecto" sino en modo "solución" y el miedo a que empeore es el motor principal de la decisión. La propuesta comercial debe responder directamente a ese estado de ánimo.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Diagnóstico gratuito como argumento de entrada universal',
                  detalle: 'Funciona en ambos segmentos (particulares y comunidades). Para el propietario particular, elimina la barrera de "¿cuánto me van a cobrar por venir a ver qué es?". Para el administrador de fincas, es la forma de dar un paso sin compromiso ante la junta. El diagnóstico en visita, seguido de un informe escrito con foto del problema y propuesta de solución, es el documento más potente para convertir una visita en presupuesto.'
                },
                {
                  num: '02',
                  titulo: 'Velocidad de respuesta como ventaja competitiva estructural',
                  detalle: 'En el segmento particular con urgencia media-alta, el cliente llama a 3 proveedores y contrata con el primero que le da confianza y visita rápida. Responder a cualquier solicitud de visita en menos de 2 horas y ofrecer cita en menos de 48 horas es la regla mínima para ser competitivo. En el segmento de urgencia alta (agua goteando), el mismo día es el estándar.'
                },
                {
                  num: '03',
                  titulo: 'Relación directa con administradores de fincas en distritos prioritarios',
                  detalle: 'La captación en comunidades no se hace via Google Ads: se hace via relación personal con administradores. Identificar los 30–50 administradores más activos en los distritos prioritarios (Carabanchel, Vallecas, Usera, Tetuán) y generar una visita de presentación con portfolio de obras en comunidades es la inversión comercial de mayor retorno en este segmento. Un administrador que recomienda a Oro es un canal de 5–10 obras al año.'
                },
                {
                  num: '04',
                  titulo: 'Argumento del coste diferencial: reparar hoy vs. reparar después',
                  detalle: 'El cliente que pospone necesita entender que esperar es más caro, no más barato. En la visita, mostrar el coste de reparación actual versus el coste proyectado si no actúa en 2–3 años convierte la decisión de "¿gasto ahora?" en "¿cuánto me cuesta no actuar?". Es un cambio de marco que desactiva la postergación más eficientemente que cualquier descuento.'
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

            <p className="body-text">La priorización geográfica inicial debería concentrarse en los distritos de mayor densidad de problema: Carabanchel, Vallecas, Usera y Tetuán. Son distritos con parque antiguo, propietarios de clase media que tienen el problema pero no el hábito de contratar empresas de gama alta, y administradores de fincas accesibles. El primer año de actividad en este segmento debería terminar con al menos 5 referencias de comunidades y 20 referencias de viviendas particulares, que son la base del boca a boca en estos distritos.</p>
          </div>

          {HR}

          {/* FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">Fuentes</div>
            <h2 className="h2">Referencias bibliográficas.</h2>
            <ul style={{ paddingLeft: '20px', lineHeight: 2.2, color: 'var(--ink-2)', fontSize: '14px' }}>
              <li>OCU — Organización de Consumidores y Usuarios. <em>Problemas de humedad en la vivienda: tipos, causas y soluciones.</em> 2024.</li>
              <li>IETcc-CSIC — Instituto de Ciencias de la Construcción Eduardo Torroja. <em>Catálogo de patologías de humedad en edificios residenciales españoles.</em></li>
              <li>INE — Instituto Nacional de Estadística. <em>Censo de edificios: distribución por año de construcción en la Comunidad de Madrid.</em> 2021.</li>
              <li>Ministerio de Vivienda. <em>Encuesta de características esenciales de la vivienda: problemas de humedad declarados.</em> 2024.</li>
              <li>CAFM — Colegio de Administradores de Fincas de Madrid. <em>Estadísticas del sector: patologías más frecuentes en comunidades gestionadas.</em> 2023.</li>
              <li>Habitissimo. <em>Precios de tratamiento de humedades en Madrid: guía actualizada.</em> Consultado junio 2026.</li>
            </ul>
            <p className="nota">* La cifra de incidencia del 30% procede de estudios de patología de edificios y de la OCU. La estimación de 800.000 viviendas afectadas en Madrid es una proyección basada en datos del Censo de Edificios INE 2021 y la proporción de viviendas de más de 30 años en la Comunidad. No constituye dato estadístico oficial.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Humedades en tu vivienda o comunidad en Madrid</h2>
          <p>Diagnóstico gratuito en visita. Informe escrito del problema. Presupuesto cerrado sin sorpresas.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-magnifying-glass" style={{ marginRight: '8px' }}></i>
              Solicitar diagnóstico gratuito
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
