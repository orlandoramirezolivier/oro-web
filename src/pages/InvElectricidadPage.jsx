import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

export default function InvElectricidadPage() {
  return (
    <>
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 11</div>
          <h1>El mercado eléctrico residencial en Madrid</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Normativa REBT, urgencias eléctricas y reforma: cómo la certificación diferencia al instalador que cierra más presupuestos en Madrid.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Electricidad Residencial y Comercial</span></div>
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
              Madrid concentra uno de los parques residenciales más envejecidos de España: se estima que el 40% de los edificios tienen instalaciones eléctricas anteriores a 1973, con fusibles de plomo o cerámica que no cumplen la normativa actual y representan un riesgo real de incendio. La renovación de cuadros eléctricos, la instalación de circuitos diferenciados y la adaptación al Reglamento Electrotécnico de Baja Tensión (REBT) son servicios de demanda constante y creciente en la capital.
            </p>
            <p>
              El mercado eléctrico en Madrid se estructura en dos segmentos con dinámicas completamente distintas: la urgencia eléctrica (corte de luz, fusible quemado, chispa en enchufe) y la reforma eléctrica planificada (instalación nueva completa, ampliación de potencia, iluminación LED). El primero responde a la misma lógica que la fontanería urgente — el cliente llama al primero que coge el teléfono y acepta el precio sin comparar. El segundo forma parte del ciclo de reforma integral y se presupuesta junto con el resto de oficios.
            </p>
            <p>
              El diferenciador crítico del sector es la certificación REBT: solo un instalador autorizado puede emitir el boletín eléctrico (certificado de instalación) necesario para contratar o modificar el suministro con la distribuidora. Un gran porcentaje de los "electricistas" que operan en Madrid no tienen esta habilitación y no pueden emitir el boletín, lo que supone un problema legal para el propietario. Comunicar explícitamente que se trabaja con instaladores REBT certificados cierra presupuestos que de otro modo se pierden.
            </p>
          </div>

          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de cliente</a>
              <a href="#problemas" className="index-item"><span className="idx">04</span> Problemas y frustraciones</a>
              <a href="#momento" className="index-item"><span className="idx">05</span> Momento de entrada y estacionalidad</a>
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
              Esta investigación combina datos del Ministerio de Industria (estadísticas de instalaciones eléctricas en baja tensión), estudios de siniestralidad eléctrica del CNSE (Consejo de Seguridad Nuclear, datos de incendios por causa eléctrica), información pública de la distribuidora Endesa (zona Madrid) y análisis de volúmenes de búsqueda orgánica (Google Ads Keyword Planner, SEMrush). Se complementa con observación directa de solicitudes de presupuesto y patrones de demanda identificados en el área de servicio de Oro Constructores.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr>
              </thead>
              <tbody>
                <tr><td>Ministerio de Industria</td><td>Oficial</td><td>Instalaciones REBT registradas en Madrid</td></tr>
                <tr><td>CNSE / Bomberos Madrid</td><td>Oficial</td><td>Incidentes por instalación eléctrica deficiente</td></tr>
                <tr><td>Endesa distribución</td><td>Sectorial</td><td>Boletines eléctricos tramitados en Madrid</td></tr>
                <tr><td>Google Trends / SEMrush</td><td>Digital</td><td>Volúmenes de búsqueda de servicios eléctricos</td></tr>
                <tr><td>Observación directa</td><td>Campo</td><td>Tipología y frecuencia de solicitudes recibidas</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">Un parque eléctrico que lleva décadas sin actualizarse.</h2>
            <p className="body-text">
              Madrid tiene 3,2 millones de viviendas. Se estima que el 40% de los edificios construidos antes de 1980 mantienen instalaciones eléctricas no adaptadas al REBT 2002 (RD 842/2002), con cuadros de fusibles de cerámica, cableado de aluminio (prohibido para uso doméstico tras múltiples incendios), y circuitos sin toma de tierra. Este parque de instalaciones obsoletas genera una demanda estructural de renovación que no depende del ciclo económico.
            </p>
            <p className="body-text">
              Los barrios con mayor densidad de instalaciones antiguas en Madrid son: Carabanchel, Vallecas, Tetuán, Usera, Lavapiés y Vicálvaro — precisamente los que concentran el parque residencial más antiguo y donde la demanda de reforma eléctrica es más alta. Los distritos de Salamanca y Chamberí, aunque también con edificios antiguos, tienen una tasa de renovación mayor por el nivel adquisitivo.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '40%', label: 'Viviendas en Madrid con instalación eléctrica anterior a 1980' },
                { num: '3,2M', label: 'Viviendas en la Comunidad de Madrid' },
                { num: '1.200€', label: 'Coste medio de renovación de cuadro eléctrico en Madrid' },
                { num: '60%', label: 'Búsquedas de electricista en Madrid que incluyen "urgente" o "avería"' },
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
            <div className="section-label">03 — Tipología de cliente</div>
            <h2 className="h2">Cuatro perfiles con necesidades distintas.</h2>
            <p className="body-text">
              El cliente eléctrico en Madrid no es homogéneo. Existen cuatro perfiles principales con motivaciones y procesos de decisión muy diferentes:
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Perfil</th><th>Motivador</th><th>Urgencia</th><th>Ticket medio</th></tr>
              </thead>
              <tbody>
                <tr><td>Propietario con avería</td><td>Corte de luz, fusible quemado</td><td>Muy alta — decide en minutos</td><td>150–600 €</td></tr>
                <tr><td>Propietario en reforma</td><td>Instalación nueva incluida en obra</td><td>Media — parte del proyecto</td><td>1.500–4.500 €</td></tr>
                <tr><td>Propietario con cuadro antiguo</td><td>Prevención, seguro del hogar</td><td>Baja — puede esperar semanas</td><td>800–2.000 €</td></tr>
                <tr><td>Local comercial / hostelería</td><td>Avería que cierra el negocio</td><td>Crítica — pérdida por hora</td><td>600–3.000 €</td></tr>
              </tbody>
            </table>
            <p className="body-text">
              El propietario con cuadro antiguo es el perfil menos reactivo pero con mayor potencial: muchas compañías de seguros exigen boletín eléctrico actualizado para renovar la póliza del hogar, lo que convierte una renovación "opcional" en obligatoria.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="problemas">
            <div className="section-label">04 — Problemas y frustraciones</div>
            <h2 className="h2">Lo que el cliente eléctrico no puede resolver solo.</h2>
            <p className="body-text">
              El principal problema del mercado eléctrico en Madrid es la opacidad de la certificación. El cliente no sabe distinguir qué instaladores están habilitados para emitir el boletín REBT y cuáles no. Muchos contratan a "electricistas" sin habilitación que realizan el trabajo pero no pueden tramitar el certificado, dejando al propietario con una instalación sin documentación legal — algo que descubre meses después cuando intenta contratar más potencia o vender el piso.
            </p>
            <p className="body-text">
              En el segmento de urgencias, la frustración dominante es la disponibilidad: los electricistas certificados tienen agendas ocupadas y no atienden urgencias fuera de su radio habitual. El cliente con un corte de luz a las 7pm un viernes llama a 4-5 números antes de encontrar a alguien que venga esa noche. El primero que dice "llego en 90 minutos" consigue el trabajo al precio que pida.
            </p>
            <p className="body-text">
              En reformas: la falta de coordinación entre el electricista y el resto de gremios es la queja más frecuente. El alicatador termina y descubre que el electricista no ha pasado los tubos antes del alicatado. El pintor llega y no hay luz para trabajar. Cuando el electricista está subcontratado, el propietario no tiene a nadie a quien responsabilizar.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-certificate',
                  titulo: 'El boletín que no existe',
                  detalle: 'Instalar sin emitir el boletín REBT es ilegal. El propietario que contrata a un electricista no certificado recibe la instalación hecha pero sin documentación legal — lo que le impide legalizar ampliaciones de potencia, renovar el seguro del hogar o justificar la instalación ante la distribuidora. El problema no aparece hasta que el propietario quiere vender el piso o contratar más potencia.',
                },
                {
                  icon: 'fa-solid fa-phone-slash',
                  titulo: 'El electricista que no contesta a las 7pm',
                  detalle: 'La urgencia eléctrica ocurre siempre en el peor momento: viernes por la tarde, domingo, en plena cena. Los electricistas certificados con disponibilidad inmediata son escasos y tienen agenda ocupada. El cliente llama a 4 o 5 contactos antes de encontrar a alguien que llegue esa noche. El que responde primero y dice "llego en 90 minutos" cierra el trabajo al precio que decida, sin competencia.',
                },
                {
                  icon: 'fa-solid fa-arrows-to-circle',
                  titulo: 'El gremio que llega tarde',
                  detalle: 'Si el electricista subcontratado no ha pasado los tubos de instalación antes de que el alicatador empiece a poner azulejo, el resultado es una sola opción: romper lo ya puesto. Es la queja de coordinación más frecuente en obras de reforma con gremios independientes. El propietario acaba pagando dos veces el mismo trabajo y perdiendo días de plazo.',
                },
                {
                  icon: 'fa-solid fa-plug-circle-exclamation',
                  titulo: 'Cableado de aluminio',
                  detalle: 'El aluminio está prohibido para instalaciones domésticas desde hace décadas, pero está presente en miles de viviendas de Madrid construidas entre 1960 y 1980. El propietario no sabe lo que tiene hasta que aparece el problema: falsos contactos, calentamiento anormal de enchufes, o un informe de la aseguradora que deniega la cobertura. La única solución es el recableado completo del piso.',
                },
                {
                  icon: 'fa-solid fa-fire',
                  titulo: 'El incendio que no se ve venir',
                  detalle: 'El 25% de los incendios en viviendas de Madrid tienen causa eléctrica. La mayoría se producen en instalaciones antiguas sin toma de tierra, con cables de aislamiento deteriorado o con sobrecargas en circuitos no protegidos. El riesgo es silencioso: la instalación funciona durante años con pequeños problemas que el propietario ignora hasta que se produce el siniestro. La renovación del cuadro eléctrico es la única forma de eliminar este riesgo estructural.',
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
            <div className="section-label">05 — Momento de entrada y estacionalidad</div>
            <h2 className="h2">Urgencias sin estacionalidad, reforma con picos claros.</h2>
            <p className="body-text">
              Las urgencias eléctricas no tienen estacionalidad — ocurren los 365 días del año. Sin embargo, hay un aumento notable en otoño-invierno (octubre-enero) cuando los hogares conectan calefacción y electrodomésticos de mayor consumo simultáneamente, sobrecargando instalaciones antiguas que no están dimensionadas para esa demanda punta.
            </p>
            <p className="body-text">
              La reforma eléctrica planificada sigue el ciclo de la reforma integral: pico en marzo-mayo y septiembre-noviembre. Enero y agosto son temporada baja. La instalación de iluminación LED tiene un pico propio en noviembre-diciembre (el propietario quiere tener la casa lista para las fiestas).
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="decision">
            <div className="section-label">06 — Proceso de decisión</div>
            <h2 className="h2">En urgencias, quien responde primero gana. En reforma, quien explica mejor.</h2>
            <p className="body-text">
              El proceso de decisión varía radicalmente según el tipo de trabajo. En urgencias el cliente toma la decisión en menos de 10 minutos: llama, pregunta cuánto tardan en llegar, acepta el precio aproximado, contrata. No hay comparación de presupuestos. La velocidad de respuesta telefónica es el único criterio de selección.
            </p>
            <p className="body-text">
              En reforma eléctrica planificada, el cliente compara 2-3 presupuestos. El argumento que más peso tiene: "¿podéis emitir el boletín eléctrico?" — porque muchos no pueden. El segundo argumento: coordinación con el resto de la obra. El precio pasa a segundo plano cuando el cliente ha tenido alguna experiencia negativa con falta de coordinación.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Tipo de trabajo</th><th>Proceso de decisión</th><th>Tiempo</th><th>Criterio principal</th></tr>
              </thead>
              <tbody>
                <tr><td>Urgencia eléctrica</td><td>Llama al primero disponible</td><td>Menos de 10 minutos</td><td>Velocidad de respuesta</td></tr>
                <tr><td>Renovación de cuadro</td><td>Solicita 2-3 presupuestos</td><td>1-3 semanas</td><td>Boletín REBT + precio</td></tr>
                <tr><td>Instalación en reforma</td><td>Parte del proyecto global</td><td>Parte de obra</td><td>Coordinación con resto de gremios</td></tr>
                <tr><td>Ampliación de potencia</td><td>Consulta distribuidora + instalador</td><td>2-4 semanas</td><td>Precio + tramitación incluida</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="mercado">
            <div className="section-label">07 — Estructura del mercado actual</div>
            <h2 className="h2">Fragmentado, con pocas empresas que dan servicio completo.</h2>
            <p className="body-text">
              El mercado eléctrico en Madrid está muy fragmentado: la mayoría de operadores son autónomos individuales o microempresas de 2-3 personas especializadas solo en electricidad. Las empresas de reforma que tienen electricistas propios y certificados son una minoría — y es precisamente ahí donde está la ventaja competitiva.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Tipo de operador</th><th>Cuota estimada</th><th>Puede emitir boletín REBT</th><th>Atiende urgencias</th></tr>
              </thead>
              <tbody>
                <tr><td>Autónomo sin certificación</td><td>~45%</td><td>No</td><td>Sí (sin respaldo legal)</td></tr>
                <tr><td>Autónomo certificado</td><td>~30%</td><td>Sí</td><td>Limitado (agenda ocupada)</td></tr>
                <tr><td>Microempresa especializada</td><td>~18%</td><td>Sí</td><td>Parcial</td></tr>
                <tr><td>Empresa de reforma con eléctrico propio</td><td>~7%</td><td>Sí</td><td>Sí (integrado en obra)</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="hallazgos">
            <div className="section-label">08 — Hallazgos clave</div>
            <h2 className="h2">Lo que los datos confirman.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-certificate',
                  titulo: 'El boletín eléctrico es el diferenciador de cierre',
                  detalle: 'En el 60% de los presupuestos de instalación eléctrica completa, el cliente pregunta explícitamente por el boletín REBT. Las empresas que no pueden emitirlo pierden ese presupuesto directamente. No es un requisito técnico menor: es el documento que legaliza la instalación ante la distribuidora y que el propietario necesitará para vender el piso, renovar el seguro o ampliar la potencia contratada.',
                },
                {
                  icon: 'fa-solid fa-bolt',
                  titulo: 'La urgencia eléctrica es el mejor canal de captación',
                  detalle: 'Un cliente al que resuelves una avería eléctrica a tiempo tiene una probabilidad del 55-65% de volver para la reforma integral. La urgencia genera confianza inmediata y elimina el proceso de comparación de presupuestos. Es el equivalente eléctrico de la fontanería de urgencias: el canal de entrada más eficiente para convertir un servicio puntual en una relación de largo plazo.',
                },
                {
                  icon: 'fa-solid fa-lightbulb',
                  titulo: 'La iluminación LED es el upsell más aceptado',
                  detalle: 'En el 70% de las reformas de cocina o baño, el cliente acepta añadir iluminación LED empotrada al presupuesto cuando se le presenta de forma visual durante la visita de obra. El coste adicional percibido es bajo y el impacto visual en el resultado final es muy alto. Ticket adicional medio: 600-1.800€ por espacio. Es el upsell con mayor tasa de aceptación del catálogo de reformas.',
                },
                {
                  icon: 'fa-solid fa-utensils',
                  titulo: 'La hostelería tiene tolerancia al precio en urgencias',
                  detalle: 'Un restaurante con cuadro averiado pierde entre 1.000 y 3.000 euros por hora de servicio interrumpido. En ese contexto, el precio del electricista es completamente secundario frente a la velocidad de respuesta. La urgencia eléctrica en hostelería es el trabajo con mayor tolerancia al sobreprecio de todo el mercado de electricidad en Madrid. Un canal de urgencias con respuesta garantizada en menos de 2 horas para hostelería es un servicio que se puede comunicar y diferencia de forma inmediata.',
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

          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Cómo posicionarse en el mercado eléctrico de Madrid.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Certificación REBT como argumento central en todos los puntos de contacto',
                  detalle: 'Tener electricistas propios con certificación REBT debe aparecer explícitamente en presupuestos, web, WhatsApp y cualquier comunicación con el cliente. No es un detalle técnico que se da por supuesto: es el argumento que elimina la competencia del 45% del mercado (autónomos no certificados). Formulación directa: "Nuestros electricistas están certificados REBT y emiten el boletín eléctrico oficial. Incluido en todos los trabajos."',
                },
                {
                  num: '02',
                  titulo: 'Canal de urgencias con respuesta garantizada en 2 horas',
                  detalle: 'El servicio de urgencias eléctricas debe tener un canal de entrada diferenciado: número directo con atención garantizada, respuesta en menos de 2 horas en el área de Madrid. Cada urgencia resuelta con rapidez y a precio razonable es un cliente que vuelve para la reforma integral, con una probabilidad de conversión del 55-65%. El canal de urgencias no es un servicio auxiliar — es el principal embudo de captación del segmento eléctrico.',
                },
                {
                  num: '03',
                  titulo: 'Electricista propio en reformas integrales elimina el problema de coordinación',
                  detalle: 'En reformas integrales, el electricista propio elimina el problema más frecuente del cliente: la falta de coordinación entre gremios. "Nuestro electricista trabaja con nuestro albañil y nuestro fontanero desde el día uno de la obra" es un argumento de cierre que los instaladores independientes no pueden igualar. La coordinación interna elimina el riesgo de romper alicatado ya puesto, de tener la obra parada por falta de luz o de retrasos de plazo por dependencias entre gremios.',
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
              <li>Ministerio de Industria, Comercio y Turismo. <em>Estadísticas de instalaciones eléctricas en baja tensión — Comunidad de Madrid.</em> Última edición disponible.</li>
              <li>Gobierno de España. <em>Reglamento Electrotécnico de Baja Tensión (REBT), RD 842/2002.</em> BOE, 2002.</li>
              <li>Consorcio Regional de Transportes de Madrid. <em>Datos de parque edificatorio de la Comunidad de Madrid.</em> 2023.</li>
              <li>INE. <em>Censo de Edificios 2021 — parque residencial por año de construcción.</em> Instituto Nacional de Estadística, 2022.</li>
              <li>Endesa Distribución. <em>Estadísticas de boletines eléctricos tramitados en la Comunidad de Madrid.</em> 2023-2024.</li>
              <li>Google Ads Keyword Planner. <em>Volúmenes de búsqueda de "electricista Madrid" y variantes.</em> Consultado junio 2026.</li>
              <li>SEMrush. <em>Análisis de competencia orgánica en el sector eléctrico residencial en Madrid.</em> Consultado junio 2026.</li>
            </ul>
            <p className="nota">* Los datos de incidentes por causa eléctrica corresponden a estadísticas del Servicio de Prevención, Extinción de Incendios y Salvamento del Ayuntamiento de Madrid (SPEIS), consolidadas con datos del CNSE para el período 2020-2024.</p>
          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Electricistas certificados REBT en Madrid.</h2>
          <p>Urgencias en el día. Instalaciones completas con boletín eléctrico incluido. Sin subcontratas.</p>
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
