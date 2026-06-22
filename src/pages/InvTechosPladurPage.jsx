import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvTechosPladurPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 14</div>
          <h1>Techos y pladur en Madrid: demanda de partición interior, aislamiento y falsos techos</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Análisis del mercado de cartón-yeso y sistemas de partición seca en la Comunidad de Madrid: aplicaciones, perfiles de cliente, problemática de la insonorización y oportunidades de posicionamiento.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Sistemas de Partición y Techos</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">ATEDY · CTE DB-HR · Habitissimo · Knauf · Análisis de campo</span></div>
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
            <p>El pladur —denominación comercial del cartón-yeso o drywall— ha pasado de ser un material exclusivo de la construcción industrial a estar presente en el setenta por ciento de las reformas integrales residenciales en España. Su expansión responde a una ventaja técnica clara: permite crear tabiques, modificar techos y añadir capas de aislamiento térmico o acústico en una sola intervención, a un coste significativamente inferior al de la construcción tradicional en húmedo. Un tabique de pladur cuesta entre treinta y cinco y cincuenta y cinco euros por metro cuadrado frente a los cincuenta y cinco a noventa euros del tabique de ladrillo, y se instala en horas en lugar de días.</p>
            <p>En Madrid, la combinación de un parque residencial envejecido —con muchos pisos de los años sesenta y ochenta con distribuciones inadaptadas— y una demanda creciente de redistribución de espacios genera un mercado activo y sostenido para los profesionales del pladur. A esto se suma la problemática de la insonorización: Madrid es una de las ciudades con mayor contaminación acústica de Europa, y el treinta y cinco por ciento de los propietarios que solicitan reforma mencionan problemas de ruido como uno de sus motivos principales.</p>
            <p>El principal problema del mercado es la calidad desigual de la instalación. La mayoría de los instaladores utilizan pladur estándar independientemente de la necesidad real del cliente, lo que genera insatisfacción cuando el resultado acústico no cumple las expectativas. Diferenciarse con especificación técnica correcta —pladur acústico, ignífugo o con trasdosado de lana mineral según el caso— es el argumento comercial más potente del segmento.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del mercado en Madrid</a>
              <a href="#aplicaciones" className="index-item"><span className="idx">03</span> Aplicaciones principales del pladur</a>
              <a href="#tipologia" className="index-item"><span className="idx">04</span> Tipología de cliente</a>
              <a href="#insonorizacion" className="index-item"><span className="idx">05</span> El problema de la insonorización</a>
              <a href="#techos" className="index-item"><span className="idx">06</span> El falso techo como servicio combinado</a>
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
            <p className="body-text">Esta investigación utiliza datos sectoriales de la industria del cartón-yeso, normativa técnica española aplicable (Código Técnico de la Edificación, Documento Básico de Protección frente al Ruido DB-HR) y análisis de plataformas de servicios para construir una visión del mercado de tabiques y techos de pladur en la Comunidad de Madrid. Los rangos de precio se han verificado con datos de campo propios y referencias publicadas en plataformas de comparación de servicios.</p>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>ATEDY — Asociación Técnica y Empresarial del Yeso</td><td>Sectorial</td><td>Volumen de mercado del pladur en España, tendencias de aplicación, datos de instalación</td></tr>
                <tr><td>CTE DB-HR (Código Técnico — Protección frente al ruido)</td><td>Normativa</td><td>Requisitos de aislamiento acústico en viviendas y locales; índices de aislamiento mínimos</td></tr>
                <tr><td>Knauf / Saint-Gobain Placo</td><td>Fabricante</td><td>Especificaciones técnicas de sistemas de pladur acústico, ignífugo y trasdosado</td></tr>
                <tr><td>Habitissimo / Cronoshare</td><td>Plataforma digital</td><td>Precios de tabiques, falsos techos y trasdosados en Madrid; demanda por tipología</td></tr>
                <tr><td>Análisis de campo — Oro Constructores</td><td>Primario</td><td>Obras ejecutadas, problemáticas detectadas, preferencias de cliente</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 CONTEXTO */}
          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del mercado en Madrid</div>
            <h2 className="h2">La redistribución de espacios como motor estructural de la demanda.</h2>
            <p className="body-text">Madrid tiene un parque de viviendas donde más del cuarenta por ciento de las unidades se construyó antes de 1980, bajo criterios de distribución interior ya obsoletos para los estándares actuales. Dormitorios pequeños, salones sin luz natural directa, cocinas cerradas sin conexión con el comedor y pasillos largos que ocupan superficie útil son los problemas de distribución más frecuentes que los propietarios quieren corregir cuando reforman.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '70%', label: 'Reformas integrales en España que incluyen trabajo de pladur' },
                { num: '35-55€', label: 'Precio medio por m² de tabique de pladur (mat. + mano de obra)' },
                { num: '35%', label: 'Clientes que mencionan ruido como motivo de reforma' },
                { num: '2.000-6.000€', label: 'Ticket combinado falso techo + electricidad LED' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">El pladur es la solución más eficiente para corregir estos problemas porque opera en seco: no requiere tiempo de fraguado, genera menos escombro que la obra en húmedo y permite modificar o desmontar la instalación en el futuro sin daño estructural. En un mercado donde el propietario no quiere obra larga ni excesiva suciedad, estas ventajas son determinantes en la decisión de contratar.</p>
          </div>

          {HR}

          {/* 03 APLICACIONES */}
          <div className="section-anchor" id="aplicaciones">
            <div className="section-label">03 — Aplicaciones principales del pladur</div>
            <h2 className="h2">Cuatro usos distintos con motivadores y tickets diferenciados.</h2>
            <p className="body-text">El pladur no es un único servicio sino un conjunto de aplicaciones técnicas que comparten el material base pero responden a necesidades muy diferentes del cliente. Conocer estas diferencias permite cotizar correctamente y evitar la comparación de presupuestos entre servicios que no son equivalentes.</p>

            <table className="r-table">
              <thead><tr><th>Aplicación</th><th>Descripción</th><th>Motivador del cliente</th><th>Precio orientativo</th></tr></thead>
              <tbody>
                <tr><td>Tabique interior de separación</td><td>Creación de dormitorio, zona de trabajo o baño nuevo en espacio existente</td><td>Necesidad de habitación adicional; separación de espacios</td><td>35–55 €/m²</td></tr>
                <tr><td>Falso techo liso</td><td>Bajada de techo para integrar iluminación, ocultar instalaciones o mejorar acústica</td><td>Iluminación empotrada; renovación estética; ocultar tuberías y cables</td><td>22–40 €/m²</td></tr>
                <tr><td>Trasdosado acústico o térmico</td><td>Capa de pladur + aislante pegada a pared existente sin modificar la distribución</td><td>Ruido de vecinos; fachada fría; condensación en paredes exteriores</td><td>30–55 €/m²</td></tr>
                <tr><td>Pladur ignífugo (EI-60 / EI-90)</td><td>Revestimiento resistente al fuego para cocinas industriales, locales de hostelería y zonas de riesgo</td><td>Cumplimiento de normativa de incendios; seguros y licencias</td><td>45–75 €/m²</td></tr>
              </tbody>
            </table>

            <p className="body-text">La creación de tabiques interiores es la aplicación más solicitada en vivienda residencial. En Madrid, la demanda se concentra en dos casos: convertir un salón amplio en salón más dormitorio adicional (muy habitual en pisos de los sesenta y setenta con salones de treinta metros cuadrados) y añadir un baño de servicio separando parte de un dormitorio o pasillo. En ambos casos, el pladur es la solución más rápida y económica frente al tabique de ladrillo.</p>
          </div>

          {HR}

          {/* 04 TIPOLOGÍA */}
          <div className="section-anchor" id="tipologia">
            <div className="section-label">04 — Tipología de cliente</div>
            <h2 className="h2">Cuatro perfiles con necesidades técnicas y urgencias muy distintas.</h2>
            <p className="body-text">A diferencia de otros servicios de reforma donde el perfil del cliente es relativamente homogéneo, el mercado del pladur en Madrid presenta cuatro perfiles que raramente se solapan y que requieren argumentos comerciales completamente diferentes.</p>

            <table className="r-table">
              <thead><tr><th>Perfil</th><th>Necesidad principal</th><th>Aplicación</th><th>Urgencia</th></tr></thead>
              <tbody>
                <tr><td>Propietario que reforma piso y quiere una habitación más</td><td>Ganar dormitorio o separar espacio de trabajo</td><td>Tabique interior</td><td>Media (vinculado a reforma integral)</td></tr>
                <tr><td>Propietario afectado por ruido</td><td>Reducir ruido de vecinos, tráfico o sistema de climatización del edificio</td><td>Trasdosado acústico o tabique con lana mineral</td><td>Alta (el problema es cotidiano)</td></tr>
                <tr><td>Hostelero con obligación normativa</td><td>Cumplir normativa de incendios para renovar licencia o pasar inspección</td><td>Pladur ignífugo EI-60 o EI-90</td><td>Muy alta (bloqueante legal)</td></tr>
                <tr><td>Propietario u oficina que quiere separar zonas</td><td>Crear zona de reuniones, despacho privado o área diferenciada</td><td>Tabique con puerta o ventana integrada</td><td>Baja-media</td></tr>
              </tbody>
            </table>

            <p className="body-text">El cliente afectado por ruido es el de mayor urgencia percibida y, paradójicamente, el más insatisfecho con el mercado actual. La razón es técnica: la mayoría de instaladores colocan pladur estándar de doce milímetros porque es el más barato y el más rápido de instalar. Pero un tabique de pladur estándar ofrece un índice de reducción acústica de treinta y dos a treinta y cinco decibelios, insuficiente para reducir el ruido de impacto o el ruido aéreo de baja frecuencia procedente de vecinos. Para conseguir una reducción real percibida por el usuario se necesitan sistemas con doble placa, montantes desvinculados y lana mineral de alta densidad —un sistema que cuesta entre el cuarenta y el ochenta por ciento más pero que cumple lo que promete.</p>
          </div>

          {HR}

          {/* 05 INSONORIZACIÓN */}
          <div className="section-anchor" id="insonorizacion">
            <div className="section-label">05 — El problema de la insonorización</div>
            <h2 className="h2">El servicio más demandado y peor ejecutado del mercado.</h2>
            <p className="body-text">Madrid es la segunda ciudad española con mayor número de expedientes de contaminación acústica por habitante, según datos de la Agencia de Medio Ambiente y Agua de la Comunidad de Madrid. El ruido de vecinos —conversaciones, música, pasos, golpes— es la queja número uno en comunidades de vecinos de la capital. Esta realidad genera una demanda creciente de soluciones de insonorización que el mercado no está resolviendo bien.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  icon: 'fa-solid fa-volume-xmark',
                  titulo: 'Pladur estándar: el problema de las expectativas fallidas',
                  detalle: 'El cliente pide insonorización y el instalador coloca pladur estándar de doce milímetros porque eso es lo que sabe hacer y lo que cabe en el presupuesto. El resultado es un índice de aislamiento de treinta y dos a treinta y cinco decibelios: suficiente para reducir el ruido aéreo a alta frecuencia (voces en habitación contigua) pero insuficiente para el ruido de impacto (pasos del vecino de arriba) o el ruido de baja frecuencia (graves de música). El cliente comprueba que el ruido sigue y culpa al instalador o al material, cuando el problema fue la especificación incorrecta desde el inicio.'
                },
                {
                  icon: 'fa-solid fa-layer-group',
                  titulo: 'El sistema correcto: doble placa y montantes desvinculados',
                  detalle: 'La solución técnica estándar para insonorización real en vivienda es el trasdosado con doble placa de pladur (12+12 mm) sobre estructura de montantes desvinculada de la pared original, con relleno de lana de roca de cien milímetros en la cámara de aire. Este sistema alcanza índices de aislamiento de cuarenta y seis a cincuenta y dos decibelios, suficiente para que el usuario perciba una reducción significativa del ruido de vecinos. El coste es un cuarenta por ciento superior al trasdosado simple, pero es el único sistema que cumple el DB-HR del Código Técnico de la Edificación en reformas que declaran aislamiento acústico.'
                },
                {
                  icon: 'fa-solid fa-file-contract',
                  titulo: 'La normativa como argumento: el CTE DB-HR',
                  detalle: 'El Código Técnico de la Edificación, en su Documento Básico de Protección frente al Ruido (DB-HR), establece índices mínimos de aislamiento entre viviendas de un mismo edificio. Aunque en reformas parciales la aplicación estricta es discutible, el cliente que solicita un trasdosado acústico tiene el derecho de recibir un sistema que al menos se aproxime a esos índices. Especificar el sistema técnico en el presupuesto —incluyendo el índice Ra esperado— es un argumento de diferenciación que pocos instaladores utilizan.'
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

          {/* 06 FALSO TECHO */}
          <div className="section-anchor" id="techos">
            <div className="section-label">06 — El falso techo como servicio combinado</div>
            <h2 className="h2">Techo + electricidad: el binomio con mayor ticket medio del pladur residencial.</h2>
            <p className="body-text">El falso techo de pladur rara vez es un servicio aislado. En el noventa por ciento de los casos, el cliente que quiere un falso techo quiere también integrar iluminación empotrada LED —ya sea en toda la vivienda o en cocina y salón—. Esta combinación convierte el falso techo en el proyecto de pladur con mayor ticket medio del segmento residencial, y en uno de los más rentables por metro cuadrado para la empresa que lo coordina.</p>

            <table className="r-table">
              <thead><tr><th>Servicio</th><th>Precio orientativo</th><th>Plazo de ejecución</th><th>Nota técnica</th></tr></thead>
              <tbody>
                <tr><td>Falso techo liso (pladur, sin estructura vista)</td><td>22–35 €/m²</td><td>1–2 días (sala estándar)</td><td>Requiere pasantes para instalación eléctrica si va con iluminación</td></tr>
                <tr><td>Falso techo con iluminación LED empotrada (kit completo)</td><td>45–80 €/m²</td><td>2–3 días</td><td>Incluye electricista para cableado y colocación de empotrables</td></tr>
                <tr><td>Techo con moldura perimetral y pared trasdosada</td><td>55–90 €/m²</td><td>3–5 días</td><td>Combinación de techo y trasdosado; aislamiento térmico o acústico integrable</td></tr>
                <tr><td>Techo y tabique de nueva habitación (reforma distribución)</td><td>Presupuesto global</td><td>3–6 días</td><td>Intervención integral de distribución; requiere visita técnica previa</td></tr>
              </tbody>
            </table>

            <p className="body-text">Desde la perspectiva comercial, el falso techo es el servicio que más frecuentemente genera el salto de un cliente puntual a un cliente de reforma integral. El propietario que empieza pidiendo un falso techo en el salón termina en muchos casos ampliando el proyecto al pasillo, la cocina y eventualmente al baño o a la redistribución de dormitorios. La visita técnica para el techo es, en realidad, una auditoría de reforma completa que el comercial debe aprovechar.</p>
          </div>

          {HR}

          {/* 07 PRECIOS */}
          <div className="section-anchor" id="precios">
            <div className="section-label">07 — Estructura de precios</div>
            <h2 className="h2">Precios de referencia por aplicación y calidad de sistema.</h2>

            <table className="r-table">
              <thead><tr><th>Aplicación</th><th>Sistema básico (€/m²)</th><th>Sistema técnico avanzado (€/m²)</th><th>Diferencia</th></tr></thead>
              <tbody>
                <tr><td>Tabique interior de separación</td><td>35–45 (1 placa, sin aislante)</td><td>50–65 (2 placas + lana mineral)</td><td>+40–45%</td></tr>
                <tr><td>Trasdosado de pared</td><td>28–38 (pladur simple adherido)</td><td>45–65 (sistema desvinculado + relleno)</td><td>+50–70%</td></tr>
                <tr><td>Falso techo</td><td>22–32 (estructura continua, 1 placa)</td><td>38–55 (doble placa, con iluminación)</td><td>+50–70%</td></tr>
                <tr><td>Pladur ignífugo (EI-60)</td><td>50–65 (sistema certificado básico)</td><td>70–90 (EI-90 + documentación)</td><td>+35–40%</td></tr>
              </tbody>
            </table>
            <p className="nota">* Precios orientativos para Madrid capital (junio 2026). No incluyen IVA. Los precios del sistema técnico avanzado incluyen material de mayor especificación y mano de obra especializada. La diferencia de coste siempre debe justificarse al cliente con el resultado esperado.</p>

            <p className="body-text">La brecha de precio entre el sistema básico y el avanzado es la principal fuente de conflicto en este segmento: el cliente recibe presupuestos muy distintos y no entiende por qué. Desglosar la partida en el presupuesto —material base + tipo de placa + relleno + sistema de montante— permite al cliente comparar correctamente y entender qué está pagando. Esta transparencia es un argumento de venta, no un riesgo comercial.</p>
          </div>

          {HR}

          {/* 08 MERCADO */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">08 — Estructura del mercado actual</div>
            <h2 className="h2">Un oficio transversal sin especialistas consolidados en Madrid.</h2>
            <p className="body-text">El mercado de pladur en Madrid está compuesto principalmente por instaladores autónomos que trabajan como subcontratistas de empresas de reformas generalistas. Existen pocos profesionales del pladur con presencia digital propia, lo que significa que el cliente que busca directamente un especialista en tabiques o insonorización encuentra muy poca oferta organizada.</p>

            <table className="r-table">
              <thead><tr><th>Operador</th><th>Ventaja</th><th>Problema</th></tr></thead>
              <tbody>
                <tr><td>Instalador autónomo de pladur</td><td>Precio competitivo; disponibilidad variable</td><td>No asesora sobre sistema técnico; usa pladur estándar en todos los casos; sin garantía formal</td></tr>
                <tr><td>Empresa de reformas generalista</td><td>Único interlocutor; coordina con otros oficios</td><td>Subcontrata el pladur; no controla la calidad del sistema instalado</td></tr>
                <tr><td>Empresa especializada en pladur y aislamiento</td><td>Conocimiento técnico; especificación correcta</td><td>Escasas con presencia digital; pocas integran el servicio en reformas más amplias</td></tr>
              </tbody>
            </table>

            <p className="body-text">La oportunidad para Oro Constructores está en ofrecer el pladur como un servicio integrado —no subcontratado— dentro de sus reformas integrales. El cliente no tiene que buscar a un instalador de pladur por separado, no hay riesgo de conflictos de agenda entre el instalador del tabique y el del suelo, y la garantía del trabajo recae en una única empresa. Esa integración es el argumento más potente frente al modelo de autónomos coordinados externamente.</p>
          </div>

          {HR}

          {/* 09 IMPLICACIONES */}
          <div className="section-anchor" id="implicaciones">
            <div className="section-label">09 — Implicaciones para Oro Constructores</div>
            <h2 className="h2">El pladur como palanca de valor en reformas integrales.</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '32px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Especificación técnica como diferenciador: presupuestar el sistema, no el material',
                  detalle: 'El argumento de diferenciación más potente en este segmento es la especificación técnica correcta. Cuando el cliente pide insonorización, el presupuesto debe indicar explícitamente el sistema: tipo de placa, número de capas, sistema de montante y relleno, e índice de aislamiento Ra esperado. Ningún instalador autónomo en Madrid lo hace así. Ese nivel de detalle genera confianza técnica inmediata y hace imposible la comparación de precio en frío con un presupuesto de cuatro líneas.'
                },
                {
                  num: '02',
                  titulo: 'El falso techo como punto de entrada a la reforma integral',
                  detalle: 'El cliente que solicita un falso techo con iluminación suele tener otros proyectos pendientes en la vivienda. La visita técnica para el techo es la oportunidad de ver el estado general del piso y ofrecer una propuesta de reforma más amplia. El perfil de cliente de falso techo —propietario establecido, treinta y cinco a cincuenta y cinco años, orientado a mejorar la estética y la funcionalidad— coincide exactamente con el perfil de cliente de reforma integral.'
                },
                {
                  num: '03',
                  titulo: 'Coordinar internamente (no subcontratar) para proteger la calidad y el margen',
                  detalle: 'Subcontratar el pladur introduce un riesgo de calidad difícil de controlar: el subcontratista puede reducir su margen usando placa de menor calidad o saltándose el relleno de lana mineral, y Oro Constructores responde ante el cliente por el resultado. Tener instalador propio de pladur, o un colaborador habitual con protocolo claro de ejecución, elimina ese riesgo y protege tanto la calidad del trabajo como el margen comercial.'
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
              <li>ATEDY — Asociación Técnica y Empresarial del Yeso. <em>Estadísticas del sector del cartón-yeso en España.</em> 2024.</li>
              <li>Ministerio de Vivienda y Agenda Urbana. <em>Código Técnico de la Edificación — Documento Básico DB-HR: Protección frente al Ruido.</em> Versión actualizada 2022.</li>
              <li>Knauf Insulation España. <em>Sistemas de partición y aislamiento acústico para vivienda.</em> Catálogo técnico 2024.</li>
              <li>Saint-Gobain Placo España. <em>Guía de sistemas de pladur para reforma residencial.</em> 2023-2024.</li>
              <li>Habitissimo. <em>Precios de tabiques, trasdosados y falsos techos en Madrid.</em> Consultado junio 2026.</li>
              <li>Agencia de Medio Ambiente y Agua — Comunidad de Madrid. <em>Mapa de ruido de la Comunidad de Madrid.</em> 2024.</li>
            </ul>
            <p className="nota">* Los precios son orientativos para Madrid capital. Los índices de aislamiento acústico citados son valores típicos de los sistemas mencionados en condiciones de instalación correcta; el resultado real depende del estado de la obra y de la ejecución. No se garantiza su exactitud absoluta.</p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Necesitas un tabique, un falso techo o insonorización en Madrid?</h2>
          <p>Especificación técnica correcta, sistema instalado con garantía, sin subcontratistas. Presupuesto cerrado en 48 horas.</p>
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
