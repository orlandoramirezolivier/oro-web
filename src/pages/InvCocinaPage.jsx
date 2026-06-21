import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvCocinaPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-microscope"></i> Investigación de mercado · Vol. 6</div>
          <h1>El cliente que reformó la cocina en Madrid</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>Perfil del propietario madrileño que decide reformar su cocina: motivadores, miedos, ciclo de decisión y el déficit de coordinación que ningún operador del mercado resuelve bien.</p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Comunidad de Madrid</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">Reformas residenciales — Cocinas</span></div>
            <div className="meta-item"><span className="meta-label">Fuentes</span><span className="meta-value">INE · ANFAPA · Observatorio de la Construcción · IKEA · Habitissimo</span></div>
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
            <p>La cocina es la segunda estancia más reformada en España, representando aproximadamente el 22% de todas las obras de reforma en vivienda. En Madrid se realizan entre 18.000 y 22.000 reformas de cocina al año, con un ticket medio de entre 8.000 y 20.000 euros, sin contar electrodomésticos. El volumen de mercado en la Comunidad de Madrid supera los 200 millones de euros anuales solo en este segmento.</p>
            <p>El perfil del cliente es sorprendente: el 40% de los propietarios que reforma su cocina no tiene ninguna avería. La cocina funciona, pero es vieja, oscura o no encaja con cómo vive hoy. La motivación es estética y de calidad de vida, no funcional. Esto define un ciclo de decisión largo —entre 8 y 14 meses desde la primera visita a IKEA hasta la firma con el contratista— en el que el cliente acumula frustración antes de encontrar a alguien que le transmita confianza.</p>
            <p>El punto de dolor principal no es el precio ni la calidad de los muebles: es la coordinación. Los studios de cocina venden el mueble bien pero no gestionan la obra previa ni posterior. El cliente acaba coordinando él mismo al fontanero, al electricista y al alicatador. Esta fricción es el diferencial comercial que Oro Constructores puede capitalizar: un solo equipo que hace todo, de principio a fin, con fecha de entrega garantizada.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#mercado" className="index-item"><span className="idx">01</span> El mercado de reforma de cocina en Madrid</a>
              <a href="#perfil" className="index-item"><span className="idx">02</span> Perfil del cliente tipo</a>
              <a href="#motivadores" className="index-item"><span className="idx">03</span> Motivadores — por qué decide reformar</a>
              <a href="#miedos" className="index-item"><span className="idx">04</span> Miedos y frenos a la contratación</a>
              <a href="#ciclo" className="index-item"><span className="idx">05</span> Ciclo de decisión — de la idea al contrato</a>
              <a href="#mercado-actual" className="index-item"><span className="idx">06</span> El mercado actual — quién compite y cómo</a>
              <a href="#oportunidad" className="index-item"><span className="idx">07</span> Oportunidad para Oro Constructores</a>
              <a href="#conclusiones" className="index-item"><span className="idx">08</span> Conclusiones</a>
            </div>
          </div>

          {/* 01 MERCADO */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">01 — El mercado</div>
            <h2 className="h2">18.000–22.000 cocinas reformadas al año en Madrid.</h2>
            <p className="body-text">El mercado de reforma de cocina en España moviliza más de 2.500 millones de euros anuales. La Comunidad de Madrid, con aproximadamente el 15% del parque residencial nacional y una renta per cápita por encima de la media, concentra una cuota de mercado desproporcionalmente alta en reformas de cocina de gama media-alta.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '22%', label: 'de todas las reformas residenciales incluyen cocina — segunda solo tras el baño' },
                { num: '20.000', label: 'reformas de cocina estimadas al año en la Comunidad de Madrid' },
                { num: '12.000€', label: 'ticket medio sin electrodomésticos — rango 5.000–20.000€' },
                { num: '200M€', label: 'volumen de mercado estimado en Madrid solo en reformas de cocina' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">Las reformas de cocina se concentran en dos momentos de vida del propietario: la compra de vivienda de segunda mano —donde la cocina es habitualmente el primer elemento a renovar— y el ciclo natural de envejecimiento, con reformas cada 12–18 años en el parque existente. Madrid tiene un parque de vivienda con una antigüedad media elevada: más del 60% de los pisos de la ciudad tiene más de 30 años, lo que implica cocinas construidas con estándares y materiales que ya no encajan con las expectativas actuales.</p>

            <table className="r-table">
              <thead><tr><th>Rango de inversión</th><th>Alcance de la reforma</th><th>% del mercado</th></tr></thead>
              <tbody>
                <tr><td>Hasta 5.000€</td><td>Cambio de frentes, pintura, pequeños trabajos sin obra estructural</td><td>~20%</td></tr>
                <tr><td>5.000–10.000€</td><td>Muebles nuevos, encimera, alicatado frontal, pintura techo, sin mover fontanería</td><td>~35%</td></tr>
                <tr><td>10.000–20.000€</td><td>Reforma completa con cambio de distribución, derribo de tabique, nueva fontanería y eléctrica</td><td>~30%</td></tr>
                <tr><td>Más de 20.000€</td><td>Reforma integral con apertura al salón, suelo nuevo, equipamiento de alta gama</td><td>~15%</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 02 PERFIL */}
          <div className="section-anchor" id="perfil">
            <div className="section-label">02 — Perfil del cliente</div>
            <h2 className="h2">Quién reforma su cocina en Madrid.</h2>
            <p className="body-text">El cliente tipo de reforma de cocina en Madrid no responde a un único perfil demográfico. Existen tres segmentos diferenciados con motivaciones y presupuestos distintos, pero con un denominador común: el proceso les genera estrés y esperan ser guiados.</p>

            <table className="r-table">
              <thead><tr><th>Segmento</th><th>Perfil</th><th>Motivación principal</th><th>Presupuesto típico</th></tr></thead>
              <tbody>
                <tr><td>Propietario establecido</td><td>35–55 años, pareja, lleva 10+ años en el piso. La cocina "siempre ha estado ahí" pero ya no aguanta más.</td><td>Renovación estética. Cocina vieja que avergüenza cuando vienen visitas.</td><td>8.000–15.000€</td></tr>
                <tr><td>Comprador de segunda mano</td><td>30–45 años, acaba de comprar el piso. La cocina es lo primero que quiere cambiar antes de mudarse.</td><td>Empezar desde cero. No quiere vivir con los muebles del anterior propietario.</td><td>10.000–20.000€</td></tr>
                <tr><td>Inversor en alquiler</td><td>40–65 años, propietario de piso para alquilar. La cocina no renta o los inquilinos se quejan.</td><td>Funcional, durable y que "aguante" inquilinos. Presupuesto más ajustado.</td><td>5.000–9.000€</td></tr>
              </tbody>
            </table>

            <p className="body-text">El segmento más rentable para Oro Constructores es el propietario establecido o el comprador de segunda mano: ambos buscan calidad de ejecución, coordinación total y un resultado del que presumir. No son clientes de bajo precio. Son clientes que pagarán más si confían en que el equipo lo hará bien y a tiempo.</p>
          </div>

          {HR}

          {/* 03 MOTIVADORES */}
          <div className="section-anchor" id="motivadores">
            <div className="section-label">03 — Motivadores</div>
            <h2 className="h2">Por qué decide reformar — y el 40% no tiene avería.</h2>
            <p className="body-text">El dato más relevante para entender este mercado es la distribución de motivaciones: la mayoría de los clientes que reforman su cocina no lo hacen porque algo esté roto. La cocina funciona. Pero funcional no es suficiente.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '40%', label: 'Reforma estética pura — ninguna avería, solo quieren modernizar' },
                { num: '28%', label: 'Cocina oscura o pequeña — quieren ampliar o abrir al salón' },
                { num: '18%', label: 'Aprovechan compra de vivienda para reformar antes de entrar' },
                { num: '14%', label: 'Avería grave o deterioro acumulado que fuerza la renovación' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <h3 style={h3style}>Los motivadores por orden de frecuencia</h3>

            {[
              ['Cocina vieja y fea — pero que funciona', 'El motivador más frecuente y el más importante de entender. El cliente tiene una cocina de los años 90 o 2000, los muebles están amarillentos o abombados, el alicatado del frontal tiene juntas negras imposibles de limpiar, y el fregadero parece sacado de otra época. Nada está roto, todo funciona. Pero el propietario siente vergüenza de su cocina. Ha visto cocinas reformadas en Instagram, en casa de un amigo o en un piso que visitó, y ha tomado la decisión. Solo le falta encontrar a alguien de confianza.'],
              ['Apertura al salón — la cocina americana', 'El segundo motivador más poderoso del mercado en los últimos 5 años. El cliente quiere derribar el tabique que separa la cocina del salón para crear un espacio único y luminoso. Esta reforma implica necesariamente trabajo estructural (comprobación de si el tabique es de carga o no), obra civil, y una coordinación de todos los oficios. No es una reforma que pueda ejecutar cualquier empresa de muebles de cocina.'],
              ['Cambio de vivienda — primer paso antes de entrar', 'El comprador de piso de segunda mano toma la decisión de reformar la cocina antes de mudarse porque después "nunca hay momento". Este segmento tiene alta urgencia: quieren la cocina terminada para la fecha de entrada. La presión de plazo es el factor determinante en su elección de proveedor.'],
              ['Deterioro acumulado que ya no se puede ignorar', 'En este caso hay alguna avería: una fuga menor bajo el fregadero, los cajones que ya no cierran, las bisagras rotas, la encimera laminada que se ha levantado. El cliente lleva tiempo con estos problemas y finalmente decide que tiene sentido hacer la reforma completa en lugar de seguir poniendo parches.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          {HR}

          {/* 04 MIEDOS */}
          <div className="section-anchor" id="miedos">
            <div className="section-label">04 — Miedos y frenos</div>
            <h2 className="h2">Lo que paraliza al cliente — antes de firmar y durante la obra.</h2>
            <p className="body-text">El cliente de reforma de cocina llega al proceso con una carga de ansiedad significativa. Ha leído historias de obras mal ejecutadas, ha visto memes sobre obras que nunca acaban, y probablemente tiene algún conocido con una experiencia negativa. Entender estos miedos es entender qué hay que comunicar para cerrar la venta.</p>

            <h3 style={h3style}>Los cinco miedos principales, por impacto en la decisión</h3>

            <table className="r-table">
              <thead><tr><th>Miedo</th><th>Frecuencia</th><th>Cómo se manifiesta</th><th>Lo que resuelve el cliente</th></tr></thead>
              <tbody>
                <tr><td>Semanas sin cocina</td><td>Muy alta</td><td>"¿Cuántos días voy a estar sin poder cocinar?"</td><td>Busca plazo máximo garantizado. Pregunta por fines de semana.</td></tr>
                <tr><td>Que los muebles no encajen</td><td>Alta</td><td>"¿Y si la medida no cuadra cuando los instalen?"</td><td>Exige medición exhaustiva previa a la compra.</td></tr>
                <tr><td>Que el fontanero y el electricista no aparezcan</td><td>Alta</td><td>"¿Tengo que buscarlos yo o los traéis vosotros?"</td><td>Quiere un único interlocutor que lo coordine todo.</td></tr>
                <tr><td>Que la instalación eléctrica se dispare de precio</td><td>Alta</td><td>"Vi que a mi vecino le costó el doble de lo que presupuestaron"</td><td>Exige presupuesto cerrado con todos los oficios incluidos.</td></tr>
                <tr><td>Polvo y suciedad en todo el piso</td><td>Media-alta</td><td>"La obra de la cocina de mi cuñada dejó el piso destrozado"</td><td>Pregunta explícitamente cómo protegen el resto del piso.</td></tr>
              </tbody>
            </table>

            <p className="body-text">El miedo más crítico, por encima de todos, es quedarse sin cocina durante semanas. El cliente que trabaja fuera de casa y tiene hijos no puede permitirse no cocinar más de una semana. Cualquier empresa que no garantice un plazo de ejecución concreto pierde la venta ante cualquier competidor que sí lo haga, aunque sea más caro.</p>

            <p className="body-text">El segundo miedo más relevante desde el punto de vista comercial es la coordinación de oficios. El cliente sabe, por experiencia propia o ajena, que el fontanero y el electricista no siempre aparecen cuando deben. Si tiene que coordinarlos él, la obra se alargará. Este miedo está en la base del argumento diferenciador más potente del mercado: un solo equipo, todos los oficios, sin que el cliente tenga que gestionar nada.</p>
          </div>

          {HR}

          {/* 05 CICLO */}
          <div className="section-anchor" id="ciclo">
            <div className="section-label">05 — Ciclo de decisión</div>
            <h2 className="h2">De la primera visita a IKEA al contrato firmado: 8–14 meses.</h2>
            <p className="body-text">El ciclo de decisión de reforma de cocina es notablemente largo comparado con otros servicios del hogar. El cliente no decide en una tarde. Pasa por varias etapas diferenciadas, y en cada etapa hay una oportunidad de captación y un riesgo de pérdida.</p>

            <h3 style={h3style}>Las etapas del ciclo de decisión</h3>

            {[
              ['Etapa 1 — Inspiración (meses 1–3)', 'El cliente empieza a mirar cocinas en Instagram, Pinterest o en casa de conocidos. Empieza a formarse una imagen mental de lo que quiere. Visita IKEA o Leroy Merlin "a ver qué hay". Todavía no tiene claro si reformará ni cuándo. La decisión no está tomada, solo está latente.'],
              ['Etapa 2 — Exploración de opciones (meses 3–6)', 'El cliente visita uno o dos studios de cocinas. Pide presupuesto de los muebles. Empieza a entender que hay más cosas involucradas (fontanería, electricidad, alicatado) y que tendrá que buscarlas aparte. En muchos casos, este momento genera frustración y el proceso se congela temporalmente.'],
              ['Etapa 3 — Búsqueda de instalador (meses 6–10)', 'El cliente tiene claro qué muebles quiere pero no tiene a nadie para la obra. Busca en Google, pregunta a conocidos, pide referencias. En esta etapa la recomendación directa tiene una tasa de conversión muy superior a cualquier otro canal. Es el momento de mayor receptividad a un proveedor que ofrezca la solución completa.'],
              ['Etapa 4 — Comparación y cierre (meses 10–14)', 'El cliente pide 2–3 presupuestos, compara y decide. Los criterios de decisión a esta altura son: confianza en el equipo, claridad del presupuesto (cerrado o abierto), plazo de ejecución garantizado, referencias de obras similares. El precio ya es secundario si los otros factores están claros.'],
            ].map(([h, p]) => (
              <div className="finding" key={h}>
                <div className="finding-line"></div>
                <div className="finding-body"><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}

            <p className="body-text">La implicación práctica de este ciclo: el cliente que pide presupuesto a Oro Constructores ya lleva meses pensando en esto. No está "mirando". Está a punto de decidir. Hay que tratar cada solicitud de presupuesto como un cliente en fase de cierre, no como alguien explorando.</p>
          </div>

          {HR}

          {/* 06 MERCADO ACTUAL */}
          <div className="section-anchor" id="mercado-actual">
            <div className="section-label">06 — El mercado actual</div>
            <h2 className="h2">Quién compite, cómo y qué deja mal cubierto.</h2>
            <p className="body-text">El mercado de reforma de cocina en Madrid está fragmentado entre tres tipos de operadores con lógicas de negocio incompatibles entre sí. Ninguno resuelve bien el problema completo del cliente.</p>

            <table className="r-table">
              <thead><tr><th>Operador</th><th>Ejemplos</th><th>Qué hace bien</th><th>Qué deja sin resolver</th></tr></thead>
              <tbody>
                <tr><td>Studio de cocinas (muebles + instalación básica)</td><td>Stosa, Schmidt, Dica, MAPAL</td><td>El diseño y los muebles. Medición profesional. Visualización 3D. Asesoramiento estético.</td><td>No coordinan la obra previa: fontanería, electricidad, derribo, alicatado. El cliente tiene que buscarlos aparte. El studio "solo coloca muebles".</td></tr>
                <tr><td>IKEA + servicio de instalación</td><td>IKEA con instaladores homologados</td><td>Precio de muebles muy competitivo. Proceso estandarizado. Financiación.</td><td>Los instaladores son subcontratistas con variabilidad de calidad. No hacen obra civil. El cliente coordina el resto.</td></tr>
                <tr><td>Empresa de reformas generalista</td><td>Habitissimo, Certicalia, empresas locales</td><td>Capacidad para hacer todo: obra + muebles. Presupuesto integrado.</td><td>En muchos casos no se especializan en cocinas. El resultado final depende mucho del equipo asignado. Alta variabilidad de calidad y plazo.</td></tr>
                <tr><td>Instalador autónomo</td><td>El "chico de las cocinas" recomendado por el vecino</td><td>Precio bajo. Trato directo. Flexibilidad.</td><td>Muchas veces solo pone muebles. No tiene equipo propio para fontanería ni electricidad. Sin garantía formal.</td></tr>
              </tbody>
            </table>

            <p className="body-text">El punto de dolor universal es la coordinación de oficios. El studio de cocinas vende los muebles perfectamente pero no se hace cargo de la fontanería. El fontanero llega y encuentra que el electricista no ha pasado el cableado aún. El cliente tiene que gestionar cuatro proveedores distintos, hacer seguimiento de cuatro agendas distintas, y asumir él el coste de los retrabados cuando los plazos no encajan. Esta fricción es la fuente de la mayoría de las malas experiencias documentadas en el mercado.</p>
          </div>

          {HR}

          {/* 07 OPORTUNIDAD */}
          <div className="section-anchor" id="oportunidad">
            <div className="section-label">07 — Oportunidad para Oro Constructores</div>
            <h2 className="h2">El argumento ganador: coordinación total, un solo equipo.</h2>
            <p className="body-text">La oportunidad de Oro Constructores en el mercado de reforma de cocina no está en competir con IKEA en precio ni con los studios de diseño en la presentación del catálogo. Está en resolver exactamente el problema que todos los demás dejan sin resolver: la coordinación de todos los trabajos necesarios, con un solo equipo, en un plazo garantizado.</p>

            <h3 style={h3style}>El argumento de venta principal</h3>
            <p className="body-text">No solo instalamos los muebles. Hacemos todo lo que necesita una cocina antes de que los muebles puedan entrar: derribamos el tabique si hace falta, actualizamos la instalación eléctrica al consumo real que tendrá la cocina, recolocamos la fontanería donde la necesita el nuevo diseño, alicatamos el frontal, pintamos el techo y dejamos la cocina lista para que los muebles encajen a la primera. Un solo equipo, un solo presupuesto cerrado, una sola fecha de entrega.</p>

            <h3 style={h3style}>Los trabajos que Oro Constructores hace y los demás no coordinan</h3>

            <table className="r-table">
              <thead><tr><th>Trabajo previo a los muebles</th><th>Quién lo suele hacer</th><th>El problema habitual</th></tr></thead>
              <tbody>
                <tr><td>Derribo de tabique para cocina abierta</td><td>Empresa de reformas (no el studio)</td><td>El studio no lo incluye. El cliente busca a alguien aparte y coordina él.</td></tr>
                <tr><td>Actualización de instalación eléctrica</td><td>Electricista autónomo</td><td>El electricista no coordina con el instalador de cocinas. Retrasos habituales.</td></tr>
                <tr><td>Recolocación de fontanería</td><td>Fontanero autónomo</td><td>Idem. Si hay cambio de distribución, el fontanero tiene que volver dos veces.</td></tr>
                <tr><td>Alicatado del frontal</td><td>Alicatador autónomo o el propio studio</td><td>Algunos studios lo incluyen, muchos no. El cliente busca a alguien aparte.</td></tr>
                <tr><td>Pintura del techo y paredes</td><td>Pintor autónomo</td><td>Se hace al final, cuando ya están los muebles, y hay riesgo de manchar.</td></tr>
                <tr><td>Instalación de luminaria de cocina</td><td>Electricista</td><td>El mismo electricista que instaló los circuitos tiene que volver para las luces.</td></tr>
              </tbody>
            </table>

            <p className="body-text">El cliente que descubre que Oro Constructores hace todos estos trabajos con el mismo equipo, en el mismo plazo y en el mismo presupuesto, no necesita más argumentos. Ha pasado semanas intentando coordinar esto solo, y aquí está la solución. Ese es el momento de cierre.</p>
          </div>

          {HR}

          {/* 08 CONCLUSIONES */}
          <div className="section-anchor" id="conclusiones">
            <div className="section-label">08 — Conclusiones</div>
            <h2 className="h2">Lo que revela esta investigación.</h2>
            <div className="conclusion-grid">
              <div className="conclusion-cell"><div className="c-num">01</div><h4>Mercado de volumen alto y demanda estable</h4><p>20.000 reformas de cocina al año en Madrid, con un ticket medio de 12.000€. Es uno de los segmentos de reforma residencial con mayor volumen económico de la Comunidad.</p></div>
              <div className="conclusion-cell"><div className="c-num">02</div><h4>El cliente no espera una avería para reformar</h4><p>El 40% reforma por razones estéticas. Esto significa que la demanda existe independientemente del estado del parque residencial — es una decisión de calidad de vida, no de necesidad urgente.</p></div>
              <div className="conclusion-cell"><div className="c-num">03</div><h4>El ciclo de decisión es largo — hay que estar presente antes</h4><p>8–14 meses desde la primera visita a IKEA hasta el contrato. Quien capta al cliente en la etapa de exploración tiene ventaja sobre quien aparece solo cuando el cliente ya está pidiendo presupuestos.</p></div>
              <div className="conclusion-cell"><div className="c-num">04</div><h4>La coordinación es el diferencial ganador</h4><p>Ningún operador actual resuelve bien la coordinación de todos los oficios. El cliente tiene que gestionarlos él. La empresa que elimina esa fricción tiene el argumento de venta más poderoso del mercado.</p></div>
              <div className="conclusion-cell"><div className="c-num">05</div><h4>El plazo garantizado cierra la venta</h4><p>El miedo a quedarse semanas sin cocina es el freno más frecuente. Un plazo máximo garantizado y comunicado con claridad elimina la principal barrera de decisión.</p></div>
              <div className="conclusion-cell"><div className="c-num">06</div><h4>El presupuesto cerrado es condición necesaria</h4><p>La experiencia de "el precio se disparó" es tan frecuente que el cliente llega con desconfianza por defecto. Un presupuesto cerrado con todos los oficios incluidos no es una ventaja — es el mínimo para ser considerado seriamente.</p></div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Vas a reformar<br />tu cocina en Madrid?</h2>
          <p>Un solo equipo. Todos los oficios. Presupuesto cerrado y fecha de entrega garantizada.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg"><i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis</Link>
            <Link to="/contacto" className="btn btn-ghost btn-lg">Hablar con nosotros</Link>
          </div>
        </div>
      </section>
    </>
  )
}
