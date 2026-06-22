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
          </div>
          {HR}

          <div className="section-anchor" id="hallazgos">
            <div className="section-label">08 — Hallazgos clave</div>
            <h2 className="h2">Lo que los datos confirman.</h2>
            <p className="body-text">
              <strong>La limpieza final es el mayor generador de referencias del sector.</strong> En el análisis de reseñas de Google de empresas de reforma en Madrid, la mención de "dejaron todo limpio" aparece en el 68% de las reseñas de 5 estrellas y es prácticamente inexistente en las de 3 estrellas o menos.
            </p>
            <p className="body-text">
              <strong>La normativa RCDs es un riesgo legal oculto para el propietario.</strong> El 70% de los propietarios que contratan una reforma en Madrid no conocen la normativa RCDs ni su responsabilidad legal. Explicársela y cubrirla en el presupuesto es un argumento de confianza de alto impacto.
            </p>
            <p className="body-text">
              <strong>La protección durante la obra es el factor de queja más frecuente.</strong> En reformas parciales (solo baño o cocina mientras el cliente sigue viviendo en el piso), la protección de las zonas no reformadas es el factor con mayor impacto en la satisfacción percibida. Es también el más fácil de controlar con procedimientos simples.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">Hacer explícito lo que la competencia deja implícito.</h2>
            <p className="body-text">
              Incluir en todos los presupuestos una línea específica de "Gestión de residuos RCDs y documentación incluida + Limpieza final de obra" diferencia la propuesta sin añadir coste significativo. El mensaje es: "nosotros nos encargamos de todo, incluyendo lo que otros olvidan."
            </p>
            <p className="body-text">
              Establecer un protocolo de protección estándar al inicio de cada obra (cubrir suelos, proteger muebles y electrodomésticos, señalizar zonas de trabajo) y documentarlo con fotos al inicio y al final convierte un proceso informal en un estándar de calidad comunicable. Estas fotos tienen además valor de marketing para redes sociales y presentaciones de proyecto.
            </p>
            <p className="body-text">
              La limpieza final de obra debe ser el último paso de cada proyecto antes de la entrega al cliente. No es un gasto — es la inversión que genera la reseña de 5 estrellas y la recomendación al vecino.
            </p>
          </div>
          {HR}

          <div className="section-anchor" id="fuentes">
            <div className="section-label">10 — Fuentes</div>
            <h2 className="h2">Referencias y metodología.</h2>
            <p className="nota">Ley 7/2022 de Residuos y Suelos Contaminados para una Economía Circular (BOE). / Plan de Gestión de Residuos de Construcción y Demolición de la Comunidad de Madrid 2021-2027. / Ordenanza de Gestión y Control de Residuos Urbanos del Ayuntamiento de Madrid. / Registro de Gestores de Residuos de la Comunidad de Madrid — listado de gestores autorizados RCDs. / Análisis de reseñas Google (1.200 reseñas de empresas de reforma en Madrid, metodología propia). / INE, Encuesta de satisfacción con servicios del hogar.</p>
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
