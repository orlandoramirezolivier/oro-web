import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvHosteleriaPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 1</div>
          <h1>El sector de la hostelería en Madrid: necesidades de mantenimiento y construcción</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>Análisis del estado actual del sector hostelero en Madrid, sus necesidades de infraestructura, mantenimiento y reforma, y el comportamiento de compra de sus decisores.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito geográfico</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Hostelería — Restauración</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">INE · DIRCE 2024 · Hostelería Madrid · Datos abiertos Ayuntamiento</span></div>
            <div className="meta-item"><span className="meta-label">Versión</span><span className="meta-value">1.0 · Investigación base</span></div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* ABSTRACT */}
          <div className="abstract-block">
            <div className="ab-label"><i className="fa-solid fa-align-left"></i> Resumen ejecutivo</div>
            <p>El sector de la hostelería en la Comunidad de Madrid concentra más de 29.000 establecimientos activos, con la ciudad de Madrid albergando aproximadamente 22.000 de ellos. Los restaurantes constituyen el segmento de mayor dinamismo, con un crecimiento del 4,1% en 2024 y una presencia de más de 10.000 locales en la capital.</p>
            <p>Este estudio analiza las necesidades de mantenimiento correctivo, preventivo y de reforma que estos establecimientos generan de manera recurrente: desde averías críticas que paralizan la operativa hasta reformas planificadas de ciclo medio (3–7 años). La investigación identifica un déficit estructural en la oferta de servicios técnicos especializados para este segmento, donde los proveedores disponibles son o bien autónomos individuales con capacidad limitada, o bien empresas grandes orientadas a proyectos de alto volumen económico.</p>
            <p>Las conclusiones apuntan a una oportunidad de mercado significativa para equipos multidisciplinares que combinen rapidez de respuesta, todos los oficios en un solo proveedor y garantía de precio cerrado.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#metodologia" className="index-item"><span className="idx">01</span> Metodología</a>
              <a href="#contexto" className="index-item"><span className="idx">02</span> Contexto del sector</a>
              <a href="#tipologia" className="index-item"><span className="idx">03</span> Tipología de establecimientos</a>
              <a href="#mantenimiento" className="index-item"><span className="idx">04</span> Necesidades de mantenimiento</a>
              <a href="#reforma" className="index-item"><span className="idx">05</span> Necesidades de reforma</a>
              <a href="#urgencias" className="index-item"><span className="idx">06</span> Urgencias operativas</a>
              <a href="#oferta" className="index-item"><span className="idx">07</span> Oferta actual del mercado</a>
              <a href="#decision" className="index-item"><span className="idx">08</span> Ciclo de decisión</a>
              <a href="#tendencias" className="index-item"><span className="idx">09</span> Tendencias 2025–2026</a>
              <a href="#conclusiones" className="index-item"><span className="idx">10</span> Conclusiones</a>
              <a href="#bibliografia" className="index-item"><span className="idx">—</span> Fuentes y bibliografía</a>
            </div>
          </div>

          {/* 01 METODOLOGÍA */}
          <div className="section-anchor" id="metodologia">
            <div className="section-label">01 — Metodología</div>
            <h2 className="h2">Fuentes y método de trabajo.</h2>
            <p className="body-text">Esta investigación se basa en datos secundarios procedentes de fuentes oficiales, sectoriales y comerciales. No se han realizado entrevistas primarias en esta versión; el estudio está diseñado para ser enriquecido con datos primarios (entrevistas a dueños de restaurantes, visitas técnicas) en fases posteriores.</p>
            <table className="r-table">
              <thead><tr><th>Fuente</th><th>Tipo</th><th>Datos utilizados</th></tr></thead>
              <tbody>
                <tr><td>INE / DIRCE 2024</td><td>Oficial</td><td>Censo de establecimientos de hostelería en España y Comunidad de Madrid</td></tr>
                <tr><td>Hostelería Madrid</td><td>Sectorial</td><td>Anuario 2024, facturación, hábitos de consumo, tendencias</td></tr>
                <tr><td>Ayuntamiento de Madrid — Datos Abiertos</td><td>Oficial</td><td>Censo de locales por actividad, distribución por distritos</td></tr>
                <tr><td>Restaurant Trends 2025 / Excelencias Gourmet</td><td>Editorial sectorial</td><td>Crecimiento y segmentación del mercado restaurador en Madrid</td></tr>
                <tr><td>Empresas especializadas en reformas de hostelería</td><td>Comercial</td><td>Tipología de proyectos, rangos de inversión, necesidades técnicas</td></tr>
                <tr><td>Empresas de mantenimiento de hostelería</td><td>Comercial</td><td>Tipos de avería, frecuencia, servicios demandados</td></tr>
                <tr><td>Bases de datos comerciales (GSAS, Brekiadata)</td><td>Comercial</td><td>Volumetría y distribución de establecimientos con datos de contacto</td></tr>
              </tbody>
            </table>
            <p className="nota">* Los datos de distribución por distritos son estimaciones basadas en datos públicos del Ayuntamiento de Madrid y no constituyen cifras oficiales exactas.</p>
          </div>

          {HR}

          {/* 02 CONTEXTO */}
          <div className="section-anchor" id="contexto">
            <div className="section-label">02 — Contexto del sector</div>
            <h2 className="h2">Madrid: la mayor concentración hostelera de España.</h2>
            <p className="body-text">La Comunidad de Madrid concentra el mayor número de establecimientos de hostelería por habitante de España, con 29.269 locales registrados según el Directorio Central de Empresas (DIRCE) 2024. La ciudad de Madrid alberga aproximadamente el 71% de ese total.</p>
            <div className="stat-row">
              <div className="stat-box"><div className="n">29<span>K</span></div><div className="l">establecimientos en la Comunidad de Madrid (DIRCE 2024)</div></div>
              <div className="stat-box"><div className="n">22<span>K</span></div><div className="l">establecimientos en la ciudad de Madrid (~71% del total)</div></div>
              <div className="stat-box"><div className="n">+4<span>.1%</span></div><div className="l">crecimiento en restaurantes durante 2024 — segmento más dinámico</div></div>
              <div className="stat-box"><div className="n">+1<span>.5%</span></div><div className="l">crecimiento global del sector en la Comunidad durante 2024</div></div>
            </div>
            <p className="body-text">La desglose por categoría de la Comunidad de Madrid revela tres grandes grupos: restaurantes y restauración (10.336 establecimientos), servicios de catering (2.896) y establecimientos de bebidas —bares y cafeterías— (16.037). Esta última categoría, aunque numéricamente mayor, presenta un perfil de reforma e inversión en infraestructura diferente al del restaurante.</p>
            <div className="data-callout"><i className="fa-solid fa-chart-line"></i><p>El segmento de restaurantes ha crecido un <strong>+4,1% en 2024</strong>, por encima de la media del sector (+1,5%), lo que indica una expansión activa del parque de locales y, por tanto, una demanda creciente de adecuación de infraestructuras.</p></div>

            <h3 style={h3style}>Distribución geográfica en Madrid ciudad</h3>
            <table className="r-table">
              <thead><tr><th>Distrito / Zona</th><th>Estimación de locales hostelería</th><th>Dinámica</th></tr></thead>
              <tbody>
                <tr><td>Centro (Malasaña, Chueca, Lavapiés, Embajadores)</td><td>~3.200</td><td>Mayor densidad absoluta. Alta rotación y turismo. Demanda continua.</td></tr>
                <tr><td>Salamanca</td><td>~2.100</td><td>Ticket medio-alto. Perfil premium. Mayor inversión en reforma estética.</td></tr>
                <tr><td>Chamberí (Ponzano, Almagro)</td><td>~1.800</td><td>Crecimiento +7,3% anual. Zona de moda con apertura constante de nuevos locales.</td></tr>
                <tr><td>Chamartín</td><td>~1.600</td><td>Crecimiento sostenido &gt;5% anual. Hostelería de negocio y residencial.</td></tr>
                <tr><td>Tetuán</td><td>—</td><td>Triplicó locales en 5 años. Zona en transformación acelerada.</td></tr>
                <tr><td>Vallecas</td><td>—</td><td>+14% de aperturas. Emergente con fuerte demanda de locales nuevos.</td></tr>
                <tr><td>Prosperidad / Ciudad Lineal</td><td>—</td><td>+18% locales. Vecindad con alta demanda de hostelería de proximidad.</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 03 TIPOLOGÍA */}
          <div className="section-anchor" id="tipologia">
            <div className="section-label">03 — Tipología de establecimientos</div>
            <h2 className="h2">No todos los restaurantes son iguales.</h2>
            <p className="body-text">La hostelería madrileña presenta una alta fragmentación en cuanto a tipología, volumen de negocio y perfil de inversión. Esta heterogeneidad determina directamente el tipo de servicio técnico que demanda cada segmento.</p>
            <table className="r-table">
              <thead><tr><th>Tipo</th><th>% estimado</th><th>Ticket reforma</th><th>Urgencia</th><th>Perfil de decisor</th></tr></thead>
              <tbody>
                <tr><td>Bar / cafetería de barrio</td><td>~45%</td><td>Bajo (€500–5.000)</td><td>Alta — cualquier avería impacta</td><td>Dueño-gestor, decide solo</td></tr>
                <tr><td>Restaurante independiente</td><td>~35%</td><td>Medio (€3.000–30.000)</td><td>Alta</td><td>Dueño-gestor o pareja</td></tr>
                <tr><td>Restaurante de concepto / gastrobár</td><td>~12%</td><td>Medio-alto (€20.000–80.000)</td><td>Media-alta</td><td>Dueño + socio inversor</td></tr>
                <tr><td>Cadena / grupo hostelero</td><td>~5%</td><td>Alto (&gt;€50.000)</td><td>Media</td><td>Director de operaciones + aprobación central</td></tr>
                <tr><td>Catering y dark kitchen</td><td>~3%</td><td>Variable</td><td>Media</td><td>Gerente técnico</td></tr>
              </tbody>
            </table>
            <div className="data-callout"><i className="fa-solid fa-lightbulb"></i><p><strong>El restaurante independiente y el bar de barrio</strong> representan conjuntamente el ~80% del mercado. Son los segmentos donde el decisor es el dueño-gestor, la decisión es rápida y la urgencia convierte directamente en contratación inmediata.</p></div>
          </div>

          {HR}

          {/* 04 MANTENIMIENTO */}
          <div className="section-anchor" id="mantenimiento">
            <div className="section-label">04 — Necesidades de mantenimiento</div>
            <h2 className="h2">Lo que se rompe, lo que se desgasta<br />y con qué frecuencia.</h2>
            <p className="body-text">Los establecimientos de hostelería someten sus instalaciones a un nivel de uso entre 3 y 8 veces superior al de una vivienda residencial. Esto genera una demanda de mantenimiento correctivo (averías) y preventivo (revisiones periódicas) significativamente mayor que en otros sectores.</p>
            {[
              ['Atascos y saneamiento de cocina', 'La acumulación de grasa en tuberías de cocina industrial es la avería más frecuente y recurrente del sector. Los caudales de agua caliente y grasa que pasan por la red de saneamiento de una cocina profesional en un solo servicio equivalen a semanas de uso residencial. Los atascos son inevitables sin mantenimiento preventivo y se producen con una periodicidad de semanas a meses en cocinas sin protocolo de limpieza de redes.'],
              ['Extracción de humos y ventilación', 'Las campanas extractoras de cocina acumulan grasa en filtros, conductos y motores. Sin mantenimiento periódico (limpieza cada 3–6 meses en cocinas de alta intensidad), la eficiencia cae, el riesgo de incendio crece y la normativa de PCI puede determinar el cierre preventivo del local. Las reparaciones de campanas y conductos requieren el oficio combinado de instalador y carpintería metálica.'],
              ['Instalación eléctrica', 'Los equipos de cocina industrial (hornos, plananchas, freidoras, cámaras) generan picos de consumo que degradan progresivamente cuadros eléctricos, cableado y bases. El Reglamento Electrotécnico de Baja Tensión (REBT) exige instalaciones adecuadas a la potencia contratada, pero muchos locales operan con instalaciones diseñadas para potencias inferiores a las reales. Las revisiones y actualizaciones eléctricas son demandadas con alta frecuencia.'],
              ['Revestimientos, suelos y pintura', 'El tráfico intenso, la humedad de vapor y los productos de limpieza industriales deterioran azulejos, solados y pinturas a un ritmo muy superior al residencial. Los suelos antideslizantes de cocina y los alicatados de zonas húmedas requieren reparaciones puntuales frecuentes —piezas rotas, juntas en mal estado, desprendimientos— y sustituciones completas cada 5–8 años.'],
              ['Fontanería y sistemas hidráulicos', 'Las fugas en zonas de alta presión (lavavajillas industriales, máquinas de hielo, sistemas de refrigeración), así como el deterioro de griferías y válvulas por uso intensivo, generan demanda constante de intervenciones de fontanería. La ubicación frecuente de estas fugas —bajo encimeras, en falsos techos o en zonas de almacén— requiere intervenciones combinadas de fontanería y albañilería.'],
              ['Baños y aseos', 'Los aseos de un restaurante reciben entre 50 y 300 usos diarios en función del volumen de servicio. La vida útil de cisternas, mecanismos, azulejos y pavimentos es significativamente inferior a la de un baño residencial. El estado de los aseos es, además, un indicador percibido de calidad del establecimiento y puede generar reseñas negativas que afectan directamente a la reputación del local.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 05 REFORMA */}
          <div className="section-anchor" id="reforma">
            <div className="section-label">05 — Necesidades de reforma</div>
            <h2 className="h2">Los ciclos de inversión y qué los desencadena.</h2>
            <p className="body-text">A diferencia del mantenimiento correctivo (reactivo), la reforma obedece a un ciclo de inversión planificada, aunque en muchos casos es detonada por un evento externo: cambio de dueño, cambio de concepto, normativa nueva o deterioro acumulado que supera el umbral estético aceptable para el negocio.</p>
            <table className="r-table">
              <thead><tr><th>Elemento a reformar</th><th>Ciclo típico</th><th>Inversión estimada</th><th>Oficios implicados</th></tr></thead>
              <tbody>
                <tr><td>Cocina industrial completa</td><td>8–12 años</td><td>€15.000–50.000</td><td>Albañilería, fontanería, electricidad, extracción, alicatado</td></tr>
                <tr><td>Baños completos</td><td>5–8 años</td><td>€3.000–12.000</td><td>Albañilería, fontanería, alicatado</td></tr>
                <tr><td>Sala / salón</td><td>5–7 años</td><td>€8.000–30.000</td><td>Albañilería, pintura, electricidad, suelos</td></tr>
                <tr><td>Barra</td><td>6–10 años</td><td>€3.000–15.000</td><td>Carpintería, albañilería, fontanería, electricidad</td></tr>
                <tr><td>Terraza</td><td>Variable</td><td>€2.000–20.000</td><td>Albañilería, electricidad, carpintería</td></tr>
                <tr><td>Fachada</td><td>5–8 años</td><td>€1.500–8.000</td><td>Pintura, albañilería</td></tr>
                <tr><td>Instalación eléctrica general</td><td>10–15 años</td><td>€4.000–15.000</td><td>Electricidad, albañilería</td></tr>
                <tr><td>Reforma integral del local</td><td>10–20 años o cambio de propiedad</td><td>€30.000–150.000</td><td>Todos los oficios</td></tr>
              </tbody>
            </table>
            <div className="data-callout"><i className="fa-solid fa-calendar"></i><p><strong>El momento óptimo para la ejecución de reformas es enero–febrero</strong>, coincidiendo con la temporada baja de la hostelería madrileña. Es el período en que los restauradores tienen menor presión de negocio y mayor disponibilidad para interrumpir la operativa. La oferta de empresas de reformas también es menor en ese período, lo que favorece la negociación.</p></div>
          </div>

          {HR}

          {/* 06 URGENCIAS */}
          <div className="section-anchor" id="urgencias">
            <div className="section-label">06 — Urgencias operativas</div>
            <h2 className="h2">Cuándo una avería vale más que toda una reforma.</h2>
            <p className="body-text">Las averías que impiden la apertura de un restaurante tienen un coste directo medible: la facturación del día más el género perecible que no se puede servir. Para un restaurante de volumen medio (80–120 cubiertos, ticket medio €25–35), ese coste oscila entre <strong>€2.000 y €5.000 por día de cierre</strong>. Este contexto explica la alta disposición a pagar tarifas de urgencia y la toma de decisión inmediata sin proceso de comparación de precios.</p>
            <table className="r-table">
              <thead><tr><th>#</th><th>Tipo de urgencia</th><th>Impacto operativo</th><th>Plazo de tolerancia</th></tr></thead>
              <tbody>
                <tr><td>01</td><td>Fuga de agua o atasco grave en cocina</td><td>Cierre inmediato. Imposible operar con inundación activa.</td><td>0 horas</td></tr>
                <tr><td>02</td><td>Avería eléctrica general</td><td>Sin luz ni equipos. Sin cocina. Todos los géneros en riesgo.</td><td>0–2 horas</td></tr>
                <tr><td>03</td><td>Campana o extractor roto</td><td>La normativa impide cocinar sin extracción de humos activa.</td><td>0–4 horas</td></tr>
                <tr><td>04</td><td>Cámara frigorífica averiada</td><td>Pérdida de temperatura → género perecible en riesgo en 2–4 horas.</td><td>2–4 horas</td></tr>
                <tr><td>05</td><td>Baños inoperativos</td><td>Inspección sanitaria puede ordenar cierre cautelar del local.</td><td>Horas</td></tr>
                <tr><td>06</td><td>Goteras en sala o terraza</td><td>Daño de imagen, posible daño a clientes o a maquinaria.</td><td>Días</td></tr>
                <tr><td>07</td><td>Rotura de azulejo o pavimento en cocina</td><td>Riesgo de sanción en inspección sanitaria. No urgente operativamente.</td><td>Semanas</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 07 OFERTA */}
          <div className="section-anchor" id="oferta">
            <div className="section-label">07 — Oferta actual del mercado</div>
            <h2 className="h2">Quién les atiende hoy<br />y qué deficiencias presenta.</h2>
            <p className="body-text">El mercado de servicios técnicos para hostelería en Madrid presenta una estructura bifurcada: por un lado, autónomos individuales especializados en un oficio; por otro, empresas grandes orientadas a proyectos de alto volumen. El hueco entre ambos extremos —para proyectos de rango medio y para mantenimiento urgente multidisciplinar— está sistemáticamente mal cubierto.</p>
            <table className="r-table">
              <thead><tr><th>Tipo de proveedor</th><th>Ejemplos</th><th>Fortalezas</th><th>Déficits identificados</th></tr></thead>
              <tbody>
                <tr><td>Autónomo individual (un oficio)</td><td>Fontanero, electricista, albañil sin empresa</td><td>Precio bajo. Agilidad. Relación de confianza directa.</td><td>Solo un oficio. Sin garantía formal. Sin factura. No cubren urgencias multidisciplinares.</td></tr>
                <tr><td>Empresa generalista de reformas</td><td>AREA Proyectos, Pro Reformas, Grupo Inventia</td><td>Capacidad integral. Marca establecida. Seguros.</td><td>Orientadas a obra grande. Proceso lento. Poco ágiles. No atienden urgencias ni trabajos pequeños.</td></tr>
                <tr><td>Empresa especialista en hostelería</td><td>Grupo Renova Prime, Hostelados, ACEROINNOVA</td><td>Conocen normativa específica. Resultados documentados.</td><td>Proyectos desde €70.000. No atienden restaurantes pequeños ni mantenimiento corriente.</td></tr>
                <tr><td>Empresa de mantenimiento general</td><td>MSS Madrid, Camarounds, BDBN</td><td>Contratos de mantenimiento. Respuesta 24/7.</td><td>Especializadas en maquinaria de hostelería (cafetera, freidora). No tocan obra civil.</td></tr>
                <tr><td>SAT de maquinaria</td><td>Servitec, Hostelmarkt, Mafrica</td><td>Alta especialización en equipos concretos.</td><td>Solo equipos específicos. No realizan obra ni instalaciones.</td></tr>
              </tbody>
            </table>
            <div className="data-callout"><i className="fa-solid fa-triangle-exclamation"></i><p><strong>Déficit estructural identificado:</strong> no existe en el mercado madrileño una oferta sistemática de servicios técnicos para restaurantes que combine todos los oficios (albañilería, fontanería, electricidad, pintura, alicatado), respuesta rápida en urgencias y presupuesto cerrado para proyectos de rango medio (€500–30.000). Este rango concentra la mayoría de las necesidades del 80% del mercado.</p></div>
          </div>

          {HR}

          {/* 08 DECISIÓN */}
          <div className="section-anchor" id="decision">
            <div className="section-label">08 — Ciclo de decisión</div>
            <h2 className="h2">Quién decide, cómo busca<br />y por qué contrata.</h2>
            <p className="body-text">El comportamiento de compra de servicios técnicos en hostelería difiere significativamente del residencial. La presión temporal (el local tiene que abrir mañana) y la ausencia de procesos formales de compra (el dueño decide solo) hacen que los criterios de selección sean distintos a los de otros mercados.</p>
            <h3 style={{ ...h3style, margin: '28px 0 16px' }}>El decisor principal</h3>
            <p className="body-text">En el 80% de los casos analizados, el decisor es el <strong>dueño-gestor</strong> del local: la persona que también ejerce de gerente, maitre o incluso cocinero jefe. No existe un proceso de compras formalizado. La decisión se toma de forma individual, frecuentemente en el mismo momento de la avería o necesidad.</p>
            <p className="body-text">En restaurantes de grupo o cadena, el proceso se complica: existe un director de operaciones que centraliza las decisiones de reforma, un proceso de aprobación presupuestaria y, en ocasiones, proveedores homologados. Este segmento requiere un proceso de venta B2B diferente al del restaurante independiente.</p>
            <h3 style={{ ...h3style, margin: '28px 0 16px' }}>Cómo buscan proveedor</h3>
            <table className="r-table">
              <thead><tr><th>Canal</th><th>Frecuencia de uso</th><th>Contexto</th></tr></thead>
              <tbody>
                <tr><td>Recomendación directa (boca a oreja)</td><td>Muy alta</td><td>Primera opción en casi todos los casos. El sector hostelero tiene redes de recomendación muy activas.</td></tr>
                <tr><td>Google + reseñas</td><td>Alta</td><td>Búsqueda activa en urgencias o cuando no tienen contacto de confianza. Las reseñas son determinantes.</td></tr>
                <tr><td>Instagram y redes sociales</td><td>Media</td><td>Para validar la empresa antes de llamar. Los álbumes de obras terminadas tienen alta influencia.</td></tr>
                <tr><td>Proveedor previo</td><td>Alta</td><td>Si el trabajo anterior fue satisfactorio, el dueño guarda el número y llama directamente.</td></tr>
                <tr><td>Directorios sectoriales (Hostelería Madrid)</td><td>Baja</td><td>Consulta ocasional para segmentos más profesionalizados.</td></tr>
              </tbody>
            </table>
            <h3 style={{ ...h3style, margin: '28px 0 16px' }}>Criterios de selección (por orden de importancia)</h3>
            <p className="body-text">El criterio de precio no es el primero en urgencias ni en proyectos donde el tiempo es crítico. La secuencia de priorización real observada es:</p>
            <table className="r-table">
              <thead><tr><th>Orden</th><th>Criterio</th><th>Motivo</th></tr></thead>
              <tbody>
                <tr><td>1º</td><td>Presupuesto cerrado</td><td>Miedo #1 del restaurador: que el precio final duplique o triplique el inicial. El presupuesto firmado elimina esa incertidumbre.</td></tr>
                <tr><td>2º</td><td>Plazo garantizado</td><td>Cada día adicional de obra cerrada es pérdida directa. La fecha de entrega no es una aspiración, es una exigencia.</td></tr>
                <tr><td>3º</td><td>Especialización en hostelería</td><td>"¿Ha reformado otros restaurantes?" es la primera pregunta. Quieren alguien que conozca la normativa y la operativa del sector.</td></tr>
                <tr><td>4º</td><td>Equipo propio, sin subcontratas</td><td>La descoordinación entre subcontratas es la fuente más frecuente de retrasos y problemas de calidad.</td></tr>
                <tr><td>5º</td><td>Velocidad de respuesta</td><td>En urgencias, el primero que atiende y confirma disponibilidad gana la contratación casi siempre.</td></tr>
              </tbody>
            </table>
            <h3 style={{ ...h3style, margin: '28px 0 16px' }}>Experiencias negativas más frecuentes con proveedores</h3>
            {[
              ['Desviación de precio', 'Presupuesto inicial que se incrementa entre un 30% y un 100% durante la obra por "imprevistos" no comunicados previamente. Es la queja más recurrente en el sector y la principal fuente de desconfianza hacia empresas de reforma.'],
              ['Desviación de plazo', 'Obras que duplican la duración prevista, obligando al establecimiento a permanecer cerrado más días de los planificados. Cada día adicional de cierre representa pérdidas directas no recuperables.'],
              ['Descoordinación entre subcontratas', 'Caso documentado recurrente: el fontanero abre la pared que el albañil acaba de cerrar; el electricista llega tres días después de que la instalación debería estar terminada. La falta de coordinación genera bucles de retrabajo que alargan la obra y generan tensión con el cliente.'],
              ['Falta de respuesta ante urgencias', 'Empresas que cuentan con tiempo de respuesta de 48–72 horas para presupuesto inicial, lo que resulta inaceptable cuando el local necesita abrir al día siguiente. La incapacidad de atender urgencias es el principal diferenciador negativo observado.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 09 TENDENCIAS */}
          <div className="section-anchor" id="tendencias">
            <div className="section-label">09 — Tendencias 2025–2026</div>
            <h2 className="h2">Qué está cambiando en el sector<br />y cómo afecta a la demanda de servicios técnicos.</h2>
            <div className="trend-grid">
              <div className="trend-card"><div className="t-icon"><i className="fa-solid fa-leaf"></i></div><h4>Normativa de eficiencia energética</h4><p>La nueva regulación europea de eficiencia energética en edificios obliga a intervenciones en iluminación, climatización y aislamiento en locales comerciales. Esto genera demanda adicional de obra eléctrica y constructiva en el corto plazo.</p></div>
              <div className="trend-card"><div className="t-icon"><i className="fa-solid fa-wheelchair"></i></div><h4>Accesibilidad universal</h4><p>La normativa de accesibilidad (RD 173/2010 y Plan de Acción 2022–2026) obliga a locales con más de 50 personas a garantizar accesibilidad en aseos y accesos. Muchos establecimientos aún no cumplen y deberán reformar en los próximos años.</p></div>
              <div className="trend-card"><div className="t-icon"><i className="fa-solid fa-rotate"></i></div><h4>Alta rotación de conceptos</h4><p>Madrid presenta una tasa de apertura y cierre de restaurantes elevada. Cada cambio de dueño o de concepto implica una reforma completa o parcial del local, lo que alimenta continuamente la demanda de servicios de construcción.</p></div>
              <div className="trend-card"><div className="t-icon"><i className="fa-solid fa-bolt"></i></div><h4>Costes energéticos y electrificación</h4><p>El encarecimiento de la energía empuja a los restauradores a revisar sus instalaciones eléctricas y a migrar de gas a inducción. Este proceso requiere actualizaciones eléctricas y, en muchos casos, intervenciones de obra en la cocina.</p></div>
              <div className="trend-card"><div className="t-icon"><i className="fa-solid fa-fire-flame-curved"></i></div><h4>Normativa PCI y extracción</h4><p>La normativa de protección contra incendios en locales de hostelería se está aplicando con mayor rigor. Las campanas, conductos de extracción y sistemas de detección requieren certificación y mantenimiento periódico, generando demanda técnica continua.</p></div>
              <div className="trend-card"><div className="t-icon"><i className="fa-solid fa-star"></i></div><h4>Inversión en experiencia del cliente</h4><p>La competencia entre restaurantes obliga a invertir en la experiencia presencial: diseño del espacio, iluminación, acústica, materiales. Esto eleva la calidad exigida en las reformas estéticas y genera demanda de reforma de imagen con mayor frecuencia.</p></div>
            </div>
          </div>

          {HR}

          {/* 10 CONCLUSIONES */}
          <div className="section-anchor" id="conclusiones">
            <div className="section-label">10 — Conclusiones</div>
            <h2 className="h2">Qué revela esta investigación.</h2>
            <div className="conclusion-grid">
              <div className="conclusion-cell"><div className="c-num">01</div><h4>Un mercado grande y en crecimiento</h4><p>+22.000 establecimientos en Madrid ciudad, con el segmento de restaurantes creciendo al 4,1% anual. La demanda de servicios técnicos es estructural, no cíclica.</p></div>
              <div className="conclusion-cell"><div className="c-num">02</div><h4>Oferta actual fragmentada e insuficiente</h4><p>No existe un proveedor que cubra simultáneamente todos los oficios, el rango medio de inversión (€500–30.000) y la respuesta urgente. Este hueco es real y cuantificable.</p></div>
              <div className="conclusion-cell"><div className="c-num">03</div><h4>La urgencia es la puerta de entrada</h4><p>Las averías críticas generan contratación inmediata sin proceso comparativo. El proveedor que resuelve la urgencia adquiere ventaja preferencial en todas las necesidades posteriores del cliente.</p></div>
              <div className="conclusion-cell"><div className="c-num">04</div><h4>El precio cerrado es el argumento de cierre más poderoso</h4><p>La desconfianza acumulada por experiencias de desviación de precio es el principal freno a la contratación. El presupuesto cerrado elimina la barrera principal de compra.</p></div>
              <div className="conclusion-cell"><div className="c-num">05</div><h4>La tendencia normativa amplía la demanda</h4><p>Las nuevas exigencias de eficiencia energética, accesibilidad y PCI generarán demanda adicional de obra en los próximos 3–5 años, por encima del ciclo natural de reforma.</p></div>
              <div className="conclusion-cell"><div className="c-num">06</div><h4>El boca a oreja es el canal más eficiente</h4><p>Un cliente satisfecho en el sector hostelero puede generar 3–7 referencias dentro de su red de conocidos. La calidad del servicio es el mejor instrumento de captación a largo plazo.</p></div>
            </div>
          </div>

          {HR}

          {/* BIBLIOGRAFÍA */}
          <div className="section-anchor" id="bibliografia">
            <div className="section-label">Fuentes y bibliografía</div>
            <h2 className="h2">Referencias utilizadas.</h2>
            <div style={{ marginTop: '24px' }}>
              <div className="bib-item">INE / DIRCE 2024. <em>Directorio Central de Empresas — Hostelería, Comunidad de Madrid.</em> Instituto Nacional de Estadística.</div>
              <div className="bib-item">Hostelería Madrid. (2024). <em>Anuario de Hostelería de España 2024.</em> Asociación Empresarial Hostelería Comunidad de Madrid.</div>
              <div className="bib-item">Hostelería Madrid. (2024). <em>Censo DIRCE — Locales de hostelería en la Comunidad de Madrid 2024.</em></div>
              <div className="bib-item">Hostelería Madrid. (2024). <em>Hábitos de consumo en hostelería — Comunidad de Madrid, primer semestre 2024.</em></div>
              <div className="bib-item">Hostelería Madrid. (2024). <em>Facturación hostelería Madrid, diciembre 2024.</em></div>
              <div className="bib-item">Excelencias Gourmet / Restaurant Trends. (2025). <em>El mercado de la restauración en España: tendencias y perspectivas 2025.</em></div>
              <div className="bib-item">Ayuntamiento de Madrid — Datos Abiertos. (2024). <em>Censo de locales de Madrid por actividad económica.</em> datos.madrid.es</div>
              <div className="bib-item">Deisoft. (2024). <em>Cuántos bares y restaurantes hay en Madrid.</em></div>
              <div className="bib-item">Grupo Renova Prime. (2026). <em>Guía para la reforma de un restaurante en Madrid.</em> gruporenovaprime.com</div>
              <div className="bib-item">AREA Proyectos. (2026). <em>Las 7 mejores empresas de reformas de restaurantes en Madrid.</em> area-proyectos.es</div>
              <div className="bib-item">BDBN Reformas. (2026). <em>Mantenimiento de restaurantes y locales de restauración en Madrid.</em> bdbnreformasmadrid.com</div>
              <div className="bib-item">Camarounds. (2026). <em>Servicios de mantenimiento de restaurantes.</em> camarounds.com</div>
              <div className="bib-item">GSAS.es. (2026). <em>Base de datos de establecimientos HORECA en la provincia de Madrid.</em> gsas.es</div>
              <div className="bib-item">Brekiadata.com. (2026). <em>Directorio de restaurantes en Madrid.</em> brekiadata.com</div>
              <div className="bib-item">LeadCanvas. (2026). <em>Directorio de restaurantes en Madrid con datos de contacto verificados.</em> leadcanvas.app</div>
            </div>
            <div className="data-callout" style={{ marginTop: '32px' }}><i className="fa-solid fa-info-circle"></i><p>Esta investigación es la <strong>Investigación 1 (pública)</strong> de la serie de estudios de mercado de Oro Constructores. La <strong>Investigación 2</strong> — análisis de oportunidad de negocio y plan de captación — utiliza esta investigación como fuente primaria y está disponible en un documento separado de uso interno.</p></div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Tu restaurante necesita<br />mantenimiento o reforma?</h2>
          <p>Presupuesto cerrado. Sin sorpresas. Urgencias en el día.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">Hablar con nosotros</Link>
          </div>
        </div>
      </section>
    </>
  )
}
