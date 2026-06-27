import { Link } from 'react-router-dom'

const HR = <hr style={{ border: 'none', borderTop: '1px solid var(--ink-6)', margin: '56px 0' }} />
const h3style = { fontSize: '18px', fontWeight: 800, color: 'var(--ink)', margin: '32px 0 16px' }

export default function InvOroAppPage() {
  return (
    <>
      {/* RESEARCH HEADER */}
      <div className="research-header">
        <div className="container">
          <div className="research-tag"><i className="fa-solid fa-robot"></i> Investigación de producto · Documento interno</div>
          <h1>Oro App: plataforma de agentes IA para el sector de la construcción y reformas</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.5)', maxWidth: '640px', lineHeight: 1.7 }}>
            Concepto, arquitectura y hoja de ruta del asistente conversacional Oro — sistema multi-agente con roles diferenciados profesional/cliente, tienda de asistentes y modelo de suscripción.
          </p>
          <div className="research-meta">
            <div className="meta-item"><span className="meta-label">Publicado</span><span className="meta-value">Junio 2026</span></div>
            <div className="meta-item"><span className="meta-label">Autoría</span><span className="meta-value">Oro Constructores · Interno</span></div>
            <div className="meta-item"><span className="meta-label">Ámbito</span><span className="meta-value">Producto de software</span></div>
            <div className="meta-item"><span className="meta-label">Sector</span><span className="meta-value">IA conversacional · Construcción y reformas</span></div>
            <div className="meta-item"><span className="meta-label">Estado</span><span className="meta-value">Concepto validado — desarrollo pendiente</span></div>
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
            <p>Oro App es una plataforma de inteligencia artificial construida sobre la experiencia operativa de Oro Constructores. Su núcleo es un asistente conversacional llamado <strong>Oro</strong>, capaz de interactuar por voz o texto, delegar tareas a sub-agentes especializados y adaptarse al rol del usuario —profesional de obra o cliente propietario.</p>
            <p>El producto nace desde dentro: todo lo construido para automatizar las operaciones de Oro Constructores —la PWA de presupuestos, el CRM, los generadores de PDF, el sistema de outreach— se convierte en módulos dentro de Oro App. Lo que hoy es una herramienta interna se comercializa como producto vertical especializado para el sector de la construcción.</p>
            <p>El mercado de asistentes IA para pymes de construcción en España está vacío en 2026. No existe ningún producto conversacional dedicado a reformistas, maestros de obra o pequeñas constructoras. Oro App entra en ese espacio con ventaja de conocimiento de dominio que ningún asistente genérico puede replicar a corto plazo.</p>
          </div>

          {/* ÍNDICE */}
          <div className="research-index">
            <h3>Índice de contenidos</h3>
            <div className="index-list">
              <a href="#contexto" className="index-item"><span className="idx">01</span> Contexto: por qué ahora</a>
              <a href="#mercado" className="index-item"><span className="idx">02</span> El mercado de asistentes IA</a>
              <a href="#producto" className="index-item"><span className="idx">03</span> El producto: Oro App</a>
              <a href="#arquitectura" className="index-item"><span className="idx">04</span> Arquitectura del sistema</a>
              <a href="#roles" className="index-item"><span className="idx">05</span> Roles y perfiles de usuario</a>
              <a href="#tienda" className="index-item"><span className="idx">06</span> Tienda de asistentes</a>
              <a href="#negocio" className="index-item"><span className="idx">07</span> Modelo de negocio</a>
              <a href="#stack" className="index-item"><span className="idx">08</span> Stack tecnológico</a>
              <a href="#roadmap" className="index-item"><span className="idx">09</span> Hoja de ruta</a>
              <a href="#fuentes" className="index-item"><span className="idx">—</span> Fuentes</a>
            </div>
          </div>

          {/* 01 CONTEXTO */}
          <div className="section-anchor" id="contexto">
            <div className="section-label">01 — Contexto</div>
            <h2 className="h2">Por qué construir esto ahora.</h2>
            <p className="body-text">Oro Constructores tiene a finales de 2026 una infraestructura digital que pocos competidores del sector poseen: web con 16 investigaciones publicadas, CRM, scraper de prospectos, PWA de presupuestos con IA, generadores de PDF. Esta infraestructura es operativamente valiosa para la empresa. Pero también es un activo de producto: puede empaquetarse y venderse como plataforma a otros profesionales del sector.</p>
            <p className="body-text">Tres factores hacen que este sea el momento adecuado:</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '28px 0' }}>
              {[
                { icon: 'fa-brain', title: 'La IA conversacional es ahora accesible', detail: 'La API de Claude permite construir un asistente especializado en días, no en años. El coste de inferencia por conversación es inferior a €0,01. La barrera tecnológica ha desaparecido.' },
                { icon: 'fa-helmet-safety', title: 'El sector no tiene nada parecido', detail: 'Los ERPs de construcción (Sitelicon, Builderp, Obras.io) son lentos, caros y no tienen IA conversacional. Los asistentes genéricos (ChatGPT, Gemini) no conocen el vocabulario, los precios ni los procesos del sector de reformas en España.' },
                { icon: 'fa-code', title: 'La base ya existe', detail: 'Oro Presupuestos PWA, el pipeline Whisper + Claude, el CRM y los scripts de facturación ya están construidos. El coste de convertirlos en módulos de producto es marginal respecto a construirlos desde cero.' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', padding: '20px', border: '1px solid var(--ink-6)', borderRadius: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`fa-solid ${c.icon}`} style={{ color: 'var(--oro)', fontSize: '16px' }}></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px' }}>{c.title}</div>
                    <div style={{ fontSize: '14px', color: 'var(--ink-4)', lineHeight: 1.6 }}>{c.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {HR}

          {/* 02 MERCADO */}
          <div className="section-anchor" id="mercado">
            <div className="section-label">02 — El mercado</div>
            <h2 className="h2">Un segmento sin asistentes verticales especializados.</h2>
            <p className="body-text">El mercado de software para pymes de construcción en España mueve aproximadamente 420 millones de euros anuales, con un crecimiento del 12% desde 2023 impulsado por la digitalización obligada del sector. Sin embargo, la adopción de IA conversacional en el segmento de reformas y pequeña construcción es prácticamente nula: menos del 3% de las empresas con menos de 10 empleados usa alguna herramienta de IA de forma sistemática.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: '16px', margin: '32px 0' }}>
              {[
                { num: '420M€', label: 'Mercado software construcción España' },
                { num: '12%', label: 'Crecimiento anual del sector tech' },
                { num: '<3%', label: 'Adopción IA en pymes de reformas' },
                { num: '0', label: 'Asistentes verticales para reformistas en España' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.5)', marginTop: '8px', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p className="body-text">El perfil de la pyme de construcción es el de una empresa familiar con 2–8 empleados, facturación entre 150.000 y 800.000 euros anuales, y un único responsable que gestiona ventas, obras y clientes al mismo tiempo. Esta persona —el empresario-maestro— necesita herramientas que funcionen desde obra, desde el móvil, sin curva de aprendizaje. Un chatbox no sirve. Un ERP tampoco. Un asistente de voz que entienda qué es un alicatado o una bajante, sí.</p>

            <table className="r-table">
              <thead><tr><th>Categoría de competidor</th><th>Fortaleza</th><th>Debilidad frente a Oro App</th></tr></thead>
              <tbody>
                <tr><td>ERPs de construcción (Sitelicon, Builderp)</td><td>Funcionalidades completas, integración contable</td><td>Sin IA, curva de aprendizaje alta, precio €200–500/mes, no funciona desde obra</td></tr>
                <tr><td>Asistentes genéricos (ChatGPT, Gemini)</td><td>Potentes, actualizados, multitarea</td><td>Sin conocimiento de dominio, no integran presupuesto ni CRM, no recuerdan el historial del cliente</td></tr>
                <tr><td>Plataformas de presupuestación (Habitissimo, Cronoshare)</td><td>Base de datos de leads, exposición a clientes</td><td>Comisión por lead, sin asistente, sin operaciones internas</td></tr>
                <tr><td>Apps de gestión de obras (Fieldwire, PlanGrid)</td><td>Gestión técnica en obra, planos digitales</td><td>Enfocadas en grandes proyectos, sin IA conversacional, precio elevado</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 03 EL PRODUCTO */}
          <div className="section-anchor" id="producto">
            <div className="section-label">03 — El producto</div>
            <h2 className="h2">Oro App: una plataforma, un asistente, múltiples módulos.</h2>
            <p className="body-text">Oro App no es un chatbot. Es una plataforma con capas: un asistente principal que coordina, sub-agentes especializados que ejecutan, y módulos funcionales que hacen el trabajo real. El usuario —tanto el maestro de obra como el cliente propietario— solo interactúa con Oro. El sistema decide qué agente activa y qué herramienta utiliza.</p>

            <div style={{ background: 'var(--ink)', borderRadius: '16px', padding: '32px', margin: '28px 0' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--oro)', marginBottom: '20px' }}>Propuesta de valor</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { icon: 'fa-microphone', titulo: 'Conversacional por voz y texto', detalle: 'El maestro habla desde obra con guantes puestos. El cliente escribe desde el sofá. Oro entiende ambos.' },
                  { icon: 'fa-users', titulo: 'Roles diferenciados', detalle: 'La app pregunta al activarse si eres profesional o cliente. La experiencia completa cambia según la respuesta.' },
                  { icon: 'fa-robot', titulo: 'Multi-agente', detalle: 'Oro coordina sub-agentes especializados: presupuestos, CRM, facturación, planificación. El usuario solo habla con uno.' },
                  { icon: 'fa-file-invoice-dollar', titulo: 'Módulos integrados', detalle: 'Oro Presupuestos, el CRM, los PDFs, el outreach. Todo lo construido migra como módulo funcional.' },
                ].map((c, i) => (
                  <div key={i} style={{ borderTop: '2px solid var(--oro)', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <i className={`fa-solid ${c.icon}`} style={{ color: 'var(--oro)', fontSize: '14px' }}></i>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>{c.titulo}</div>
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.45)', lineHeight: 1.6 }}>{c.detalle}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="body-text">El nombre del asistente es <strong>Oro</strong>. Una sola palabra, tres letras, dos vocales abiertas. Funciona en reconocimiento de voz sin errores. Conecta de forma natural con la marca. Y cuando el usuario dice "Oye, Oro, ¿cuánto le cobré a García por el baño del año pasado?", suena a un compañero que recuerda todo, no a un software.</p>
          </div>

          {HR}

          {/* 04 ARQUITECTURA */}
          <div className="section-anchor" id="arquitectura">
            <div className="section-label">04 — Arquitectura</div>
            <h2 className="h2">Cuatro capas que trabajan juntas.</h2>
            <p className="body-text">La arquitectura de Oro App sigue un modelo de capas donde cada nivel tiene una responsabilidad clara. El usuario nunca ve la complejidad: solo habla con Oro.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '28px 0' }}>
              {[
                {
                  num: '01',
                  titulo: 'Asistente principal — Oro',
                  detalle: 'Interfaz conversacional por voz y texto. Entiende la intención del usuario, decide qué sub-agente activar y devuelve la respuesta en lenguaje natural. Tiene memoria de sesión y memoria persistente del usuario y sus clientes.',
                  icon: 'fa-comment-dots',
                },
                {
                  num: '02',
                  titulo: 'Sub-agentes especializados',
                  detalle: 'Agente Presupuestos · Agente CRM · Agente Facturación · Agente Obras · Agente Clientes. Cada uno tiene acceso a sus herramientas y datos específicos. Oro los coordina; el usuario no los activa directamente.',
                  icon: 'fa-sitemap',
                },
                {
                  num: '03',
                  titulo: 'Módulos funcionales',
                  detalle: 'Las herramientas reales: PWA Oro Presupuestos, generador de PDF, CRM, scraper, outreach. Son los mismos módulos que usa Oro Constructores internamente, ahora disponibles como funciones del asistente.',
                  icon: 'fa-puzzle-piece',
                },
                {
                  num: '04',
                  titulo: 'Tienda de asistentes',
                  detalle: 'Capa de personalización y negocio. El usuario puede elegir diferentes asistentes (gratuitos o de pago), configurar el propio, exportarlo e importarlo. Modelo freemium con suscripción.',
                  icon: 'fa-store',
                },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', padding: '20px 24px', border: '2px solid var(--oro)', borderRadius: '12px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--oro)', minWidth: '40px', lineHeight: 1 }}>{c.num}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <i className={`fa-solid ${c.icon}`} style={{ color: 'var(--ink-4)', fontSize: '13px' }}></i>
                      <div style={{ fontWeight: 700, fontSize: '15px' }}>{c.titulo}</div>
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--ink-4)', lineHeight: 1.6 }}>{c.detalle}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={h3style}>Sub-agentes especializados</h3>
            <table className="r-table">
              <thead><tr><th>Sub-agente</th><th>Función</th><th>Herramientas que usa</th><th>Estado</th></tr></thead>
              <tbody>
                <tr><td><strong>Agente Presupuestos</strong></td><td>Genera presupuesto PDF desde notas de visita o voz</td><td>Whisper, Claude, WeasyPrint/PDF</td><td>Base construida (PWA)</td></tr>
                <tr><td><strong>Agente CRM</strong></td><td>Gestiona prospectos, estados, seguimiento</td><td>Supabase, WhatsApp templates</td><td>Estructura lista</td></tr>
                <tr><td><strong>Agente Facturación</strong></td><td>Facturas PDF, registro de cobros</td><td>generar_factura.py, Supabase</td><td>Script funcional</td></tr>
                <tr><td><strong>Agente Obras</strong></td><td>Planning diario, tareas pendientes, materiales</td><td>Calendario, Supabase</td><td>Por construir</td></tr>
                <tr><td><strong>Agente Clientes</strong></td><td>Historial, comunicación, reactivaciones</td><td>WhatsApp API, Gmail MCP</td><td>Por construir</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 05 ROLES */}
          <div className="section-anchor" id="roles">
            <div className="section-label">05 — Roles</div>
            <h2 className="h2">Dos usuarios distintos. Una sola plataforma.</h2>
            <p className="body-text">Al activar Oro App por primera vez, el sistema pregunta: <em>"¿Eres profesional o cliente?"</em>. La respuesta determina toda la experiencia. El sistema recuerda el rol y no vuelve a preguntar. Cambiar de rol requiere ir a configuración.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '28px 0' }}>
              <div style={{ border: '1px solid var(--ink-6)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'var(--ink)', padding: '20px 24px 16px' }}>
                  <i className="fa-solid fa-helmet-safety" style={{ color: 'var(--oro)', fontSize: '20px', marginBottom: '10px', display: 'block' }}></i>
                  <div style={{ fontWeight: 800, fontSize: '17px', color: '#fff' }}>Profesional</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)', marginTop: '4px' }}>Maestro de obra, reformista, empresario de construcción</div>
                </div>
                <div style={{ padding: '16px 24px' }}>
                  {['Planning diario del día con visitas', 'Presupuestador por voz desde obra', 'CRM: prospectos y seguimiento', 'Generador de facturas PDF', 'Historial completo de clientes'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: i < 4 ? '1px solid var(--ink-6)' : 'none', fontSize: '13px' }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--oro)', marginTop: '3px', fontSize: '11px', flexShrink: 0 }}></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ border: '1px solid var(--ink-6)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ background: 'rgba(0,0,0,.04)', padding: '20px 24px 16px' }}>
                  <i className="fa-solid fa-house" style={{ color: 'var(--ink-3)', fontSize: '20px', marginBottom: '10px', display: 'block' }}></i>
                  <div style={{ fontWeight: 800, fontSize: '17px' }}>Cliente</div>
                  <div style={{ fontSize: '13px', color: 'var(--ink-4)', marginTop: '4px' }}>Propietario que tiene una obra en marcha o quiere pedir presupuesto</div>
                </div>
                <div style={{ padding: '16px 24px' }}>
                  {['Solicitar presupuesto por voz o texto', 'Ver estado de su obra en tiempo real', 'Consultar documentos: presupuesto, factura', 'Comunicarse con el equipo', 'Historial de trabajos anteriores'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '7px 0', borderBottom: i < 4 ? '1px solid var(--ink-6)' : 'none', fontSize: '13px' }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--ink-3)', marginTop: '3px', fontSize: '11px', flexShrink: 0 }}></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="nota">* La experiencia de cliente también actúa como canal de fidelización: el cliente tiene visibilidad de su obra sin tener que llamar. Reduce las interrupciones al maestro durante la jornada.</p>
          </div>

          {HR}

          {/* 06 TIENDA */}
          <div className="section-anchor" id="tienda">
            <div className="section-label">06 — Tienda de asistentes</div>
            <h2 className="h2">Un catálogo de asistentes. Tu asistente, a tu manera.</h2>
            <p className="body-text">La tienda de asistentes es la capa de diferenciación del producto y el motor de monetización. Cualquier usuario puede elegir entre asistentes prediseñados o configurar el suyo propio. Los asistentes pueden exportarse e importarse, lo que permite a los usuarios llevar su configuración entre dispositivos o compartirla con el equipo.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '28px 0' }}>
              {[
                {
                  tier: 'Free', precio: '0 €/mes', color: 'rgba(142,142,147,.15)', borderColor: 'rgba(142,142,147,.3)',
                  items: ['1 asistente básico (Oro lite)', '50 consultas/mes', 'Sin memoria extendida', 'Sin reconocimiento de voz', 'Exportación de asistente no disponible'],
                },
                {
                  tier: 'Pro', precio: '19 €/mes', color: 'rgba(253,191,0,.08)', borderColor: 'rgba(253,191,0,.3)',
                  items: ['Todos los sub-agentes activos', 'Consultas ilimitadas', 'Memoria extendida de clientes y obras', 'Reconocimiento de voz (Whisper)', 'Exportación e importación de asistente'],
                },
                {
                  tier: 'Empresa', precio: '49 €/mes', color: 'rgba(0,0,0,.04)', borderColor: 'rgba(0,0,0,.12)',
                  items: ['Todo lo del plan Pro', 'Multi-usuario (hasta 5 usuarios)', 'Roles de equipo (maestro / administración)', 'API propia para integraciones externas', 'Personalización completa del asistente (nombre, tono, avatar)'],
                },
              ].map((t, i) => (
                <div key={i} style={{ background: t.color, border: `1px solid ${t.borderColor}`, borderRadius: '12px', padding: '20px 24px', display: 'grid', gridTemplateColumns: '140px 1fr', gap: '16px', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>{t.tier}</div>
                    <div style={{ fontWeight: 700, fontSize: '22px', color: 'var(--ink)' }}>{t.precio}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {t.items.map((item, j) => (
                      <div key={j} style={{ fontSize: '13px', color: 'var(--ink-3)', display: 'flex', alignItems: 'flex-start', gap: '6px', width: '100%' }}>
                        <i className="fa-solid fa-check" style={{ color: i === 1 ? 'var(--oro-dark)' : 'var(--ink-4)', marginTop: '3px', fontSize: '10px', flexShrink: 0 }}></i>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="body-text">La funcionalidad de <strong>import/export de asistente</strong> es el diferenciador de retención: cuando un usuario configura Oro a su gusto —tono, historial, preferencias, nombre del asistente— y lo exporta, ese archivo se convierte en un activo personal. Cambiar de plataforma implica perderlo. Es el equivalente al "efecto contactos" de los móviles: la portabilidad crea fidelidad.</p>
          </div>

          {HR}

          {/* 07 MODELO DE NEGOCIO */}
          <div className="section-anchor" id="negocio">
            <div className="section-label">07 — Modelo de negocio</div>
            <h2 className="h2">Freemium con palanca en el uso de campo.</h2>
            <p className="body-text">El modelo de negocio combina suscripción recurrente con un canal de distribución orgánico: el propio Oro Constructores demuestra el producto en cada visita de obra. El maestro usa Oro App delante del cliente. El cliente lo ve, lo percibe como diferenciador de profesionalidad, y puede ser el primer usuario de la versión cliente.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '16px', margin: '28px 0' }}>
              {[
                { num: '€0', label: 'Coste de adquisición orgánico', sub: 'Via demostración en obra' },
                { num: '19€', label: 'ARPU mensual plan Pro', sub: 'Recurrente · Sin comisiones' },
                { num: '~€0,01', label: 'Coste por consulta IA', sub: 'Claude API (haiku) por mensaje' },
                { num: '12×', label: 'Margen neto estimado plan Pro', sub: 'Sobre coste de infraestructura' },
              ].map((s, i) => (
                <div key={i} style={{ background: 'var(--ink)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--oro)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.55)', marginTop: '6px', lineHeight: 1.4, fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,.3)', marginTop: '4px' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            <h3 style={h3style}>Motor de crecimiento</h3>
            <table className="r-table">
              <thead><tr><th>Canal</th><th>Mecanismo</th><th>Coste</th></tr></thead>
              <tbody>
                <tr><td>Demostración en obra</td><td>El maestro usa la app → cliente la ve → cliente se descarga → recomienda</td><td>€0</td></tr>
                <tr><td>SEO oroconstructores.com</td><td>Investigaciones publicadas → tráfico orgánico → landing Oro App</td><td>€0 (ya existe)</td></tr>
                <tr><td>WhatsApp outreach restaurantes</td><td>Restaurante recibe mensaje → visita → cierre → uso de app en obra</td><td>Bajo</td></tr>
                <tr><td>Referido profesional</td><td>Un maestro recomienda Oro App a otro → bono de mes gratis para ambos</td><td>€19 (1 mes gratis)</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* 08 STACK */}
          <div className="section-anchor" id="stack">
            <div className="section-label">08 — Stack tecnológico</div>
            <h2 className="h2">Mismos cimientos. Nuevas capas.</h2>
            <p className="body-text">El stack de Oro App se construye sobre la base existente de Oro Constructores para minimizar el tiempo de desarrollo. Todo lo que ya funciona —React, Cloudflare, el pipeline IA— se reutiliza. Las nuevas capas son Supabase (base de datos compartida), Stripe (pagos) y la interfaz del asistente animado.</p>

            <table className="r-table">
              <thead><tr><th>Componente</th><th>Tecnología</th><th>Justificación</th></tr></thead>
              <tbody>
                <tr><td>Frontend (web/PWA)</td><td>React 19 + Vite + Tailwind</td><td>Mismo stack que oroconstructores.com. Sin coste de aprendizaje.</td></tr>
                <tr><td>App móvil (futuro)</td><td>React Native o PWA avanzada</td><td>PWA cubre el 80% de casos de uso. React Native para distribución en stores.</td></tr>
                <tr><td>Backend</td><td>Supabase (Postgres + Auth + Storage)</td><td>Una sola base de datos para web + CRM + app. SDK JS nativo. Gratis hasta escala.</td></tr>
                <tr><td>IA — razonamiento</td><td>Claude claude-haiku-4-5 / claude-sonnet-4-6</td><td>Haiku para respuestas rápidas (€0,01/msg). Sonnet para tareas complejas.</td></tr>
                <tr><td>IA — transcripción de voz</td><td>Whisper API (OpenAI)</td><td>Ya integrado en la PWA Oro Presupuestos. Fiabilidad probada en campo.</td></tr>
                <tr><td>IA — voz del asistente (TTS)</td><td>ElevenLabs o OpenAI TTS</td><td>Oro responde en audio. Crítico para uso en obra sin mirar la pantalla.</td></tr>
                <tr><td>Animación del asistente</td><td>Lottie (2D) o Three.js (3D)</td><td>Avatar visual de Oro: estados escuchando / pensando / respondiendo.</td></tr>
                <tr><td>Pagos y suscripciones</td><td>Stripe</td><td>Gestión de planes Free / Pro / Empresa. Webhooks para activar/desactivar features.</td></tr>
                <tr><td>Deploy</td><td>Cloudflare Pages</td><td>Ya configurado. Auto-deploy en push a main.</td></tr>
                <tr><td>Generación PDF</td><td>WeasyPrint (Python) / Puppeteer</td><td>generar_presupuesto.py y generar_factura.py ya funcionan.</td></tr>
              </tbody>
            </table>

            <div style={{ background: 'rgba(253,191,0,.06)', borderLeft: '3px solid var(--oro)', borderRadius: '0 8px 8px 0', padding: '14px 16px', fontSize: '13px', color: 'var(--ink)', marginTop: '20px', lineHeight: 1.6 }}>
              <strong>Nota sobre modelos IA:</strong> Para Oro App se usa <span style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,.06)', padding: '2px 5px', borderRadius: '4px' }}>claude-haiku-4-5</span> en respuestas conversacionales (velocidad, coste mínimo) y <span style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,.06)', padding: '2px 5px', borderRadius: '4px' }}>claude-sonnet-4-6</span> para tareas de razonamiento complejo como redactar presupuestos o analizar historial de cliente. El usuario no percibe la diferencia; el sistema elige automáticamente.
            </div>
          </div>

          {HR}

          {/* 09 ROADMAP */}
          <div className="section-anchor" id="roadmap">
            <div className="section-label">09 — Hoja de ruta</div>
            <h2 className="h2">Del concepto al MVP en tres fases.</h2>
            <p className="body-text">La hoja de ruta está condicionada por un único factor externo: Orlando comparte la implementación de referencia de la otra marca donde ya está construyendo algo similar. Esa base reduce el tiempo de MVP de meses a semanas. Mientras tanto, algunas piezas pueden avanzar en paralelo.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '28px 0' }}>
              {[
                {
                  fase: 'Fase A', titulo: 'Base de la plataforma', plazo: '1–2 semanas',
                  bloqueante: 'Orlando comparte implementación de referencia',
                  pasos: ['Recibir base de código de la otra marca', 'Adaptar identidad visual a Oro (colores, logo, fuente)', 'Configurar auth con Supabase (roles: profesional / cliente)', 'Conectar Claude API como cerebro del asistente'],
                },
                {
                  fase: 'Fase B', titulo: 'MVP profesional', plazo: '2–3 semanas tras Fase A',
                  bloqueante: 'Ninguno — depende solo de Fase A',
                  pasos: ['Módulo Oro Presupuestos integrado (migrar PWA existente)', 'Agente CRM: consultar y actualizar prospectos por voz', 'Planning diario: visitas del día desde el CRM', 'Historial de cliente accesible por conversación'],
                },
                {
                  fase: 'Fase C', titulo: 'Monetización y tienda', plazo: '1–2 semanas tras Fase B',
                  bloqueante: 'Cuenta Stripe + definir precios finales',
                  pasos: ['Integrar Stripe: planes Free / Pro / Empresa', 'Tienda de asistentes: listado + instalación', 'Import/export de asistente configurado (JSON)', 'Landing page /oro-app en oroconstructores.com'],
                },
              ].map((f, i) => (
                <div key={i} style={{ border: '1px solid var(--ink-6)', borderRadius: '12px', overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: '16px', padding: '18px 24px', background: i === 0 ? 'var(--ink)' : 'var(--bg)' }}>
                    <div style={{ fontWeight: 800, fontSize: '14px', color: i === 0 ? 'var(--oro)' : 'var(--ink-4)', minWidth: '60px' }}>{f.fase}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '15px', color: i === 0 ? '#fff' : 'var(--ink)' }}>{f.titulo}</div>
                      <div style={{ fontSize: '12px', color: i === 0 ? 'rgba(255,255,255,.35)' : 'var(--ink-4)', marginTop: '2px' }}>Bloqueante: {f.bloqueante}</div>
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: i === 0 ? 'rgba(255,255,255,.5)' : 'var(--ink-4)', background: i === 0 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)', padding: '4px 10px', borderRadius: '20px', whiteSpace: 'nowrap' }}>{f.plazo}</div>
                  </div>
                  <div style={{ padding: '16px 24px', borderTop: '1px solid var(--ink-6)' }}>
                    {f.pasos.map((paso, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '7px 0', borderBottom: j < f.pasos.length - 1 ? '1px solid var(--ink-6)' : 'none', fontSize: '13px' }}>
                        <div style={{ minWidth: '22px', height: '22px', borderRadius: '50%', background: 'var(--bg)', border: '1px solid var(--ink-6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'var(--ink-4)', flexShrink: 0, marginTop: '1px' }}>{j + 1}</div>
                        {paso}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={h3style}>Relación con productos existentes de Oro</h3>
            <p className="body-text">Nada queda fuera. Todo lo construido hasta hoy migra a Oro App como módulo. La línea es directa:</p>
            <table className="r-table">
              <thead><tr><th>Lo que existe hoy</th><th>Dónde vive en Oro App</th><th>Esfuerzo de migración</th></tr></thead>
              <tbody>
                <tr><td>PWA Oro Presupuestos (<code>app/index.html</code>)</td><td>Agente Presupuestos — módulo principal del profesional</td><td>Bajo — conectar Supabase y envolver en la UI de Oro</td></tr>
                <tr><td>generar_factura.py / generar_presupuesto.py</td><td>Backend del Agente Facturación</td><td>Nulo — ya funcionan como API interna</td></tr>
                <tr><td>CRM (<code>crm/restaurantes.json</code> → Supabase)</td><td>Agente CRM del profesional</td><td>Bajo — migrar a Supabase (ya planeado)</td></tr>
                <tr><td>Investigaciones publicadas (16 de mercado + 165 de servicio)</td><td>Base de conocimiento del asistente Oro</td><td>Nulo — ya están en el sistema</td></tr>
                <tr><td>Templates WhatsApp outreach</td><td>Agente Clientes — módulo de comunicación</td><td>Nulo — reutilizar directamente</td></tr>
              </tbody>
            </table>
          </div>

          {HR}

          {/* FUENTES */}
          <div className="section-anchor" id="fuentes">
            <div className="section-label">— Fuentes y referencias</div>
            <h2 className="h2">Bases del estudio.</h2>
            <p className="body-text">Este documento es una investigación de concepto de producto, no un estudio de mercado externo. Las cifras de mercado son estimaciones basadas en las fuentes siguientes; los datos operativos son propios de Oro Constructores.</p>
            <ul style={{ margin: '20px 0', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ fontSize: '13px', color: 'var(--ink-4)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
                <i className="fa-solid fa-circle" style={{ position: 'absolute', left: 0, top: '5px', fontSize: '6px', color: 'var(--ink-3)' }}></i>
                <strong>Statista / IDC España (2025):</strong> Estimaciones del mercado de software para pymes de construcción en España. Datos de digitalización y adopción de IA en el sector de la construcción.
              </li>
              <li style={{ fontSize: '13px', color: 'var(--ink-4)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
                <i className="fa-solid fa-circle" style={{ position: 'absolute', left: 0, top: '5px', fontSize: '6px', color: 'var(--ink-3)' }}></i>
                <strong>Anthropic API Documentation (2026):</strong> Modelos claude-haiku-4-5 y claude-sonnet-4-6. Precios de inferencia y capacidades de herramienta/agente para aplicaciones de producción.
              </li>
              <li style={{ fontSize: '13px', color: 'var(--ink-4)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
                <i className="fa-solid fa-circle" style={{ position: 'absolute', left: 0, top: '5px', fontSize: '6px', color: 'var(--ink-3)' }}></i>
                <strong>Investigación interna Oro Constructores (inv-1 a inv-8):</strong> Datos de mercado de reformas y hostelería en Madrid. Base de conocimiento para entrenamiento del asistente Oro.
              </li>
              <li style={{ fontSize: '13px', color: 'var(--ink-4)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
                <i className="fa-solid fa-circle" style={{ position: 'absolute', left: 0, top: '5px', fontSize: '6px', color: 'var(--ink-3)' }}></i>
                <strong>Google AI Mode — conversación de naming (2026-06-23):</strong> Investigación de naming para el asistente. Conclusión: "Oro" como nombre directo del asistente conversacional. Referencia interna: <code>investigacion/oro_app_naming.md</code>.
              </li>
              <li style={{ fontSize: '13px', color: 'var(--ink-4)', lineHeight: 1.6, paddingLeft: '20px', position: 'relative' }}>
                <i className="fa-solid fa-circle" style={{ position: 'absolute', left: 0, top: '5px', fontSize: '6px', color: 'var(--ink-3)' }}></i>
                <strong>Análisis competitivo directo (2026):</strong> Evaluación de Sitelicon, Builderp, Obras.io, Fieldwire, Habitissimo, Cronoshare. Posicionamiento de precios y capacidades vs. Oro App.
              </li>
            </ul>
          </div>

          <div style={{ height: '80px' }} />

        </div>
      </section>
    </>
  )
}
