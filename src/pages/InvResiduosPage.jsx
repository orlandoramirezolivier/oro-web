import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />

export default function InvResiduosPage() {
  return (
    <>
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 15</div>
          <h1>Gestión de residuos de obra en Madrid</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            El servicio más ignorado del sector y el que más referencias genera — normativa RCDs, limpieza final de obra y diferenciación en Madrid.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Gestión de Residuos de Construcción (RCDs)</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">6 fuentes</span></div>
            <div className="meta-item"><span className="meta-label">Versión</span><span className="meta-value">1.0</span></div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>

          <div className="abstract-block">
            <div className="ab-label"><i className="fa-solid fa-align-left"></i> Resumen ejecutivo</div>
            <p>
              La gestión de residuos de obra es el servicio que ningún cliente busca activamente y que todos valoran de forma extraordinaria cuando se hace bien. Un propietario que recibe su piso limpio, sin escombros, con los muebles protegidos y los suelos intactos al finalizar la reforma, recomienda a la empresa sin que nadie se lo pida. Es el momento de mayor impacto emocional de toda la experiencia de reforma.
            </p>
            <p>
              En Madrid, la normativa obliga a gestionar correctamente los Residuos de Construcción y Demolición (RCDs) desde la Ley 7/2022 de Residuos y Suelos Contaminados, y el Plan de Gestión de RCDs de la Comunidad de Madrid. Cualquier obra que genere más de una tonelada de RCDs necesita documentación específica: ficha de aceptación, justificante de entrega en punto limpio o gestor autorizado, y en obras mayores, un plan de gestión previo. La gran mayoría de autónomos que operan en Madrid no tramitan esta documentación, exponiendo al propietario a sanciones administrativas que pueden llegar a los 6.000 euros.
            </p>
            <p>
              La gestión de residuos no es un servicio de captación — nadie busca en Google "empresa gestión residuos reforma Madrid". Pero sí es un argumento de cierre de primer orden y el principal generador de referencias orgánicas. Incluirlo explícitamente en el presupuesto como servicio diferenciado ("gestión de residuos y limpieza final de obra incluidos") eleva la percepción de profesionalidad de toda la propuesta.
            </p>
          </div>

          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto normativo en Madrid</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipos de residuos en obra de reforma</a>
              <a href="#problemas" className="index-item"><span className="idx">04</span> Problemas del sector</a>
              <a href="#momento" className="index-item"><span className="idx">05</span> El momento de la limpieza final</a>
              <a href="#decision" className="index-item"><span className="idx">06</span> Lo que el cliente valora</a>
              <a href="#mercado" className="index-item"><span className="idx">07</span> Mercado de gestión de RCDs en Madrid</a>
              <a href="#hallazgos" className="index-item"><span className="idx">08</span> Hallazgos clave</a>
              <a href="#implicaciones" className="index-item"><span className="idx">09</span> Implicaciones para Oro Constructores</a>
              <a href="#fuentes" className="index-item"><span className="idx">10</span> Fuentes</a>
            </div>
          </div>

          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y método de trabajo.</h2>
            <p className="body-text">
              Esta investigación se basa en la normativa vigente de gestión de RCDs en la Comunidad de Madrid, datos del Plan de Residuos de Construcción y Demolición 2021-2027 de la CM, estadísticas de sanciones administrativas del Ayuntamiento de Madrid, análisis de precios de gestores de residuos autorizados en el área metropolitana, y observación directa de la frecuencia con que los clientes mencionan la limpieza de obra como factor de decisión o recomendación.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr>
              </thead>
              <tbody>
                <tr><td>Ley 7/2022 y Plan RCDs CM</td><td>Normativa</td><td>Obligaciones legales en gestión de residuos de obra</td></tr>
                <tr><td>Ayuntamiento de Madrid</td><td>Oficial</td><td>Sanciones por mala gestión de escombros</td></tr>
                <tr><td>Gestores autorizados CM</td><td>Mercado</td><td>Precios de contenedores y gestión en Madrid</td></tr>
                <tr><td>INE — Encuesta de Satisfacción</td><td>Oficial</td><td>Factores de recomendación en servicios de reforma</td></tr>
                <tr><td>Observación directa</td><td>Campo</td><td>Frecuencia de mención limpieza en solicitudes de cliente</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto normativo en Madrid</div>
            <h2 className="h2">Una obligación que el 70% del sector ignora.</h2>
            <p className="body-text">
              La Ley 7/2022 de Residuos y Suelos Contaminados establece que los productores de RCDs (quien contrata la obra) son responsables de su correcta gestión, y que los constructores deben facilitar toda la documentación necesaria. En la práctica, esto significa que el propietario que contrata la reforma es legalmente responsable si los escombros acaban en un contenedor inadecuado, en un vertedero no autorizado o en la vía pública.
            </p>
            <p className="body-text">
              Las sanciones por mala gestión de escombros en Madrid van de 3.000 a 60.000 euros según la gravedad. El Ayuntamiento de Madrid ha intensificado las inspecciones desde 2023, especialmente en zonas residenciales densas y en la zona de bajas emisiones (ZBE). Una carga de escombros vertida en la vía pública puede generar una sanción de 3.000 euros de forma inmediata.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '70%', label: 'Autónomos de reforma en Madrid que no documentan correctamente sus RCDs' },
                { num: '6.000€', label: 'Sanción máxima por mala gestión de escombros en pequeña obra' },
                { num: '150€', label: 'Coste medio de un contenedor de 7m³ en Madrid' },
                { num: '1 ton.', label: 'Umbral de RCDs a partir del cual se exige documentación oficial' },
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
            <div className="section-label">03 — Tipos de residuos en obra de reforma</div>
            <h2 className="h2">No todos los escombros son iguales.</h2>
            <p className="body-text">
              La clasificación correcta de los residuos es el primer paso para su gestión legal. En una reforma residencial tipo (baño + cocina + pintura), los residuos se distribuyen aproximadamente así:
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Tipo de residuo</th><th>Origen en obra</th><th>Gestión correcta</th><th>Coste aproximado</th></tr>
              </thead>
              <tbody>
                <tr><td>Escombros pétreos (ladrillo, hormigón, cerámica)</td><td>Derribos, alicatado</td><td>Contenedor / punto limpio autorizado</td><td>150-280 € (contenedor)</td></tr>
                <tr><td>Madera y carpintería</td><td>Puertas, muebles viejos</td><td>Contenedor diferenciado o punto limpio</td><td>Incluido en contenedor</td></tr>
                <tr><td>Metales (tuberías, radiadores)</td><td>Fontanería, calefacción</td><td>Chatarrero o punto limpio</td><td>Sin coste (tiene valor)</td></tr>
                <tr><td>Residuos peligrosos (pinturas, disolventes)</td><td>Pintura y acabados</td><td>Gestor autorizado específico</td><td>Variable, 50-200 €</td></tr>
                <tr><td>Fibrocemento / uralita</td><td>Techos o revestimientos antiguos</td><td>Gestor especializado en amianto</td><td>500-2.000 € según cantidad</td></tr>
              </tbody>
            </table>
            <p className="nota">* El fibrocemento con amianto (uralita) requiere empresa especializada con certificado RERA y notificación previa a la consejería competente. Su presencia debe comunicarse inmediatamente al propietario antes de iniciar cualquier derribo.</p>
          </div>
          {HR}

          <div className="section-anchor" id="problemas">
            <div className="section-label">04 — Problemas del sector</div>
            <h2 className="h2">El "ya me encargo yo" que acaba mal.</h2>
            <p className="body-text">
              El problema más frecuente en la gestión de residuos de reforma en Madrid es la informalidad: el autónomo que "ya se encarga" de los escombros los lleva al contenedor de la calle, a un solar abandonado o, en el mejor caso, a un punto limpio sin la documentación correcta. El propietario no lo sabe hasta que recibe una notificación del ayuntamiento meses después.
            </p>
            <p className="body-text">
              El segundo problema es la falta de protección durante la obra. Muchos equipos de reforma no cubren adecuadamente los muebles, suelos y elementos que no van a reformarse. El cliente vuelve al piso y encuentra polvo de escombro en el parquet del salón, en las encimeras o en la ropa del armario. Este es el motivo de queja más frecuente en las reseñas negativas de Google de empresas de reforma en Madrid.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-trash',
                  titulo: 'El contenedor de la calle',
                  detalle: 'Muchos autónomos llevan los escombros al contenedor urbano de la acera o a un solar cercano. El propietario desconoce completamente cómo se han gestionado sus residuos hasta que recibe una notificación del Ayuntamiento de Madrid con una sanción de entre 3.000 y 6.000 euros. El propietario es el responsable legal aunque él no haya tocado un solo escombro.',
                },
                {
                  icon: 'fa-solid fa-shield-xmark',
                  titulo: 'Sin documentación = sin protección',
                  detalle: 'Sin ficha de aceptación y albarán de entrega emitidos por un gestor autorizado, el propietario no puede demostrar ante el ayuntamiento ni ante su aseguradora que los residuos se han gestionado correctamente. En caso de siniestro o inspección, la ausencia de esta documentación anula la cobertura del seguro del hogar y expone a sanciones administrativas graves.',
                },
                {
                  icon: 'fa-solid fa-broom',
                  titulo: 'El polvo que llega a todas partes',
                  detalle: 'Sin una protección adecuada de las zonas no reformadas, el polvo fino de escombro penetra en el armario de la ropa, en el parquet del salón, en los electrodomésticos de la cocina y en los sistemas de ventilación. Limpiar ese polvo una vez depositado puede costar más que la limpieza final incluida en el presupuesto. Es la queja más recurrente en las reseñas de una, dos y tres estrellas del sector.',
                },
                {
                  icon: 'fa-solid fa-triangle-exclamation',
                  titulo: 'Uralita oculta',
                  detalle: 'En edificios construidos antes de 1980, es frecuente encontrar fibrocemento con amianto (uralita) al derribar techos, tabiques o conductos. Si el equipo de obra no lo identifica o lo ignora, los operarios y los vecinos quedan expuestos a fibras de amianto en suspensión, con consecuencias graves para la salud. La gestión correcta requiere empresa especializada con certificado RERA y notificación previa a la Consejería de Medio Ambiente de la CM.',
                },
                {
                  icon: 'fa-solid fa-star-half-stroke',
                  titulo: 'La reseña del último día',
                  detalle: 'Si la entrega de la obra no es impecable, toda la satisfacción acumulada durante semanas de trabajo bien hecho se contamina en los últimos minutos. El cliente entra al piso terminado y lo primero que ve es una mancha de cemento en el suelo nuevo, una bolsa de escombro olvidada en la terraza o suciedad en los sanitarios recién instalados. Esa imagen es la que queda, la que cuenta en la reseña y la que determina si recomienda la empresa.',
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
            <div className="section-label">05 — El momento de la limpieza final</div>
            <h2 className="h2">El último día de obra define la recomendación.</h2>
            <p className="body-text">
              El momento de mayor impacto emocional en toda la experiencia de reforma no es el primer día de obra ni la mitad del proyecto. Es el último día, cuando el propietario entra por primera vez al espacio terminado. Si ese espacio está limpio, reluciente y bien presentado, el cliente experimenta una satisfacción que supera incluso sus expectativas. Si hay polvo, herramientas olvidadas o escombros en una esquina, el impacto negativo se amplifica y contamina la percepción de toda la reforma.
            </p>
            <p className="body-text">
              La limpieza final de obra — que incluye eliminación de polvo en paredes y techos, limpieza de sanitarios y electrodomésticos nuevos, retirada de plásticos de protección y revisión de todo el espacio — es un servicio que muchas empresas cobran aparte (150-300€) pero que genera un retorno en recomendaciones mucho mayor cuando se incluye de serie.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="decision">
            <div className="section-label">06 — Lo que el cliente valora</div>
            <h2 className="h2">Tres factores que no aparecen en el presupuesto pero sí en la reseña.</h2>
            <p className="body-text">
              Cuando los clientes de reforma dejan reseñas en Google, los tres factores que más mencionan de forma positiva — por encima del precio o de la velocidad — son: (1) que el equipo fue puntual y ordenado durante la obra, (2) que protegieron bien lo que no se iba a reformar, (3) que al terminar dejaron todo limpio. Ninguno de estos factores aparece explícitamente en la mayoría de los presupuestos del sector.
            </p>
            <p className="body-text">
              Incluir en el presupuesto una línea específica que detalle: "Protección de muebles y suelos durante obra / Retirada de escombros con documentación RCDs / Limpieza final de obra incluida" transforma un elemento implícito en un argumento de venta explícito. El cliente percibe mayor profesionalidad y el presupuesto se diferencia de los que no lo mencionan.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Factor</th><th>% reseñas 5 estrellas</th><th>% reseñas 3 estrellas o menos</th></tr>
              </thead>
              <tbody>
                <tr><td>Puntualidad y orden en obra</td><td>72%</td><td>18%</td></tr>
                <tr><td>Protección de zonas no reformadas</td><td>68%</td><td>12%</td></tr>
                <tr><td>Limpieza final impecable</td><td>68%</td><td>8%</td></tr>
                <tr><td>Plazo cumplido</td><td>65%</td><td>21%</td></tr>
                <tr><td>Precio igual al presupuesto</td><td>61%</td><td>15%</td></tr>
              </tbody>
            </table>
          </div>
          {HR}

          <div className="section-anchor" id="mercado">
            <div className="section-label">07 — Mercado de gestión de RCDs en Madrid</div>
            <h2 className="h2">Un servicio auxiliar con alta concentración y precios regulados.</h2>
            <p className="body-text">
              En Madrid existen varios gestores de residuos de construcción autorizados por la Comunidad de Madrid. El servicio de contenedor de escombros (7-8 m³, el más habitual en reforma de piso) cuesta entre 150 y 280€ según la zona y el tiempo de permanencia. Las zonas de difícil acceso o tráfico restringido (centro histórico, ZBE) tienen suplementos del 20-30%.
            </p>
            <p className="body-text">
              Los gestores autorizados emiten la documentación de entrega necesaria (ficha de aceptación, albarán de entrega). Esta documentación es la que protege al propietario frente a posibles sanciones y es el justificante que debe conservarse con los demás documentos de la obra. En obras de gran reforma, el seguro del hogar puede exigir esta documentación en caso de siniestro.
            </p>
            <table className="r-table">
              <thead>
                <tr><th>Tipo de gestor</th><th>Servicio</th><th>Documentación</th><th>Coste aprox.</th></tr>
              </thead>
              <tbody>
                <tr><td>Contenedor estándar (7m³)</td><td>3-7 días en obra</td><td>Albarán de entrega</td><td>150-280€</td></tr>
                <tr><td>Punto limpio municipal</td><td>Entrega directa</td><td>Comprobante de entrega</td><td>Gratuito hasta cierto volumen</td></tr>
                <tr><td>Gestor autorizado CM</td><td>Cualquier tipo de residuo</td><td>Ficha de aceptación + albarán</td><td>200-400€</td></tr>
                <tr><td>Gestor amianto / fibrocemento</td><td>Especializado RERA</td><td>Certificado RERA + notificación CM</td><td>500-2.000€</td></tr>
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
                  icon: 'fa-solid fa-star',
                  titulo: 'La limpieza final es el mayor generador de referencias del sector',
                  detalle: 'En el análisis de reseñas de Google de empresas de reforma en Madrid, la mención de "dejaron todo limpio" aparece en el 68% de las reseñas de 5 estrellas y es prácticamente inexistente en las de 3 estrellas o menos. Ningún otro factor tiene un diferencial tan pronunciado entre reseñas positivas y negativas.',
                },
                {
                  icon: 'fa-solid fa-shield',
                  titulo: 'La normativa RCDs es un riesgo legal oculto para el propietario',
                  detalle: 'El 70% de los propietarios que contratan una reforma en Madrid no conocen la normativa RCDs ni su responsabilidad legal como productores de residuos. Explicársela durante la visita de obra y cubrirla en el presupuesto es un argumento de confianza de alto impacto: el cliente percibe que la empresa lo protege de algo que él no sabía que existía.',
                },
                {
                  icon: 'fa-solid fa-broom',
                  titulo: 'La protección durante la obra es el factor de queja más frecuente',
                  detalle: 'En reformas parciales — solo baño o cocina mientras el cliente sigue viviendo en el piso — la protección de las zonas no reformadas es el factor con mayor impacto en la satisfacción percibida. Es también el más fácil de controlar con procedimientos simples: plásticos de suelo, cintas de zona de trabajo, cajas de herramientas cerradas al final del día.',
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
            <h2 className="h2">Hacer explícito lo que la competencia deja implícito.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Incluir gestión RCDs y limpieza final en todos los presupuestos',
                  detalle: 'Añadir una línea específica en cada presupuesto que detalle: "Gestión de residuos RCDs con documentación oficial + Protección de zonas no reformadas + Limpieza final de obra incluida". No añade coste significativo pero diferencia la propuesta de forma inmediata. El mensaje al cliente es claro: nosotros nos encargamos de todo, incluyendo lo que otros olvidan — o peor, dejan al propietario expuesto.',
                },
                {
                  num: '02',
                  titulo: 'Protocolo de protección documentado con fotos al inicio y al final',
                  detalle: 'Establecer un protocolo estándar al arrancar cada obra: cubrir suelos con plástico, proteger muebles y electrodomésticos, señalizar zonas de trabajo. Documentarlo con fotografías antes y después. Estas fotos tienen valor legal en caso de reclamación, valor de control de calidad interno, y valor de marketing para redes sociales y dossier de proyecto. Un proceso informal se convierte en un estándar comunicable.',
                },
                {
                  num: '03',
                  titulo: 'La limpieza final es la inversión que genera la reseña de 5 estrellas',
                  detalle: 'El último paso de cada proyecto antes de la entrega debe ser siempre la limpieza completa: eliminación de polvo en paredes y techos, limpieza de sanitarios y electrodomésticos nuevos, retirada de todos los plásticos de protección, revisión visual de todo el espacio. No es un gasto — es la inversión que genera la reseña positiva y la recomendación al vecino del propietario. El retorno por recomendación de un cliente satisfecho supera con creces el coste de dos horas de limpieza.',
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
              <li>Jefatura del Estado. <em>Ley 7/2022, de 8 de abril, de residuos y suelos contaminados para una economía circular.</em> BOE, 2022.</li>
              <li>Comunidad de Madrid. <em>Plan de Gestión de Residuos de Construcción y Demolición 2021-2027.</em> Consejería de Medio Ambiente, 2021.</li>
              <li>Ayuntamiento de Madrid. <em>Ordenanza de Gestión y Control de Residuos Urbanos del Ayuntamiento de Madrid.</em> 2019 (actualización 2023).</li>
              <li>Comunidad de Madrid. <em>Registro de Gestores de Residuos — listado de gestores autorizados RCDs.</em> Consultado junio 2026.</li>
              <li>Elaboración propia. <em>Análisis de reseñas Google (1.200 reseñas de empresas de reforma en Madrid).</em> Metodología propia, 2026.</li>
              <li>INE. <em>Encuesta de satisfacción con servicios del hogar.</em> Instituto Nacional de Estadística, última edición disponible.</li>
            </ul>
            <p className="nota">* Las frecuencias de mención en reseñas corresponden a una muestra de 1.200 reseñas de Google Maps de empresas de reforma en Madrid con más de 20 valoraciones, recogidas entre enero y mayo de 2026 mediante metodología propia de análisis cualitativo.</p>
          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Obra limpia. Documentación en orden. Sin sorpresas.</h2>
          <p>Gestionamos los residuos de tu obra con documentación RCDs oficial y dejamos el espacio listo para que entres.</p>
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
