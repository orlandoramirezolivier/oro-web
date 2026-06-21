import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../restaurantes.css'

function RestFaq({ question, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <div className={`faq-q${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        {question}
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className={`faq-a${open ? ' open' : ''}`}>{children}</div>
    </div>
  )
}

export default function RestaurantesPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const nombre = f.nombre.value
    const tipo = f.tipo.value
    const desc = f.descripcion.value
    const msg = encodeURIComponent(`Hola, soy ${nombre}. Tengo un restaurante en Madrid y quiero un presupuesto para: ${tipo}. ${desc}`)
    window.open(`https://wa.me/34643795099?text=${msg}`, '_blank')
  }

  return (
    <div className="lp-rest">
      {/* NAV MÍNIMO */}
      <nav className="nav-lp">
        <Link to="/" className="nav-lp-logo">
          <img src="/logo_completo_color.png" alt="Oro Constructores" />
        </Link>
        <a href="#presupuesto" className="btn-primary">
          <i className="fa-solid fa-file-invoice"></i> Pedir presupuesto gratis
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">
            <i className="fa-solid fa-utensils"></i> Para restaurantes y hostelería en Madrid
          </div>
          <h1>Cuando algo falla en tu local,<br /><span>no puedes esperar.</span></h1>
          <p className="hero-sub">Somos el equipo de albañil, electricista, fontanero, pintor y alicatador que trabaja para hostelería en Madrid. Urgencias atendidas en el día. Presupuesto cerrado antes de empezar. Sin sorpresas al terminar.</p>
          <div className="hero-ctas">
            <a href="#presupuesto" className="btn-primary btn-primary-lg">
              <i className="fa-solid fa-file-invoice"></i> Quiero presupuesto para mi local
            </a>
            <a href="https://wa.me/34643795099?text=Hola,%20tengo%20un%20restaurante%20en%20Madrid%20y%20necesito%20presupuesto" className="btn-wa" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp directo
            </a>
          </div>
          <div className="hero-micro">
            <span><i className="fa-solid fa-circle-check"></i> Sin compromiso</span>
            <span><i className="fa-solid fa-circle-check"></i> Respuesta en menos de 24h</span>
            <span><i className="fa-solid fa-circle-check"></i> Presupuesto cerrado y detallado</span>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item"><i className="fa-solid fa-calendar"></i><div><strong>+30 años</strong> <span>de oficio real</span></div></div>
          <div className="trust-item"><i className="fa-solid fa-wrench"></i><div><strong>5 oficios</strong> <span>en un solo equipo</span></div></div>
          <div className="trust-item"><i className="fa-solid fa-bolt"></i><div><strong>Urgencias</strong> <span>atendidas en el día</span></div></div>
          <div className="trust-item"><i className="fa-solid fa-file-contract"></i><div><strong>Precio cerrado</strong> <span>siempre</span></div></div>
          <div className="trust-item"><i className="fa-solid fa-users"></i><div><strong>Equipo propio</strong> <span>sin subcontratas</span></div></div>
        </div>
      </div>

      {/* DOLOR (PAS) */}
      <section className="lp-section">
        <div className="container">
          <div className="section-eyebrow text-center">El problema</div>
          <h2 className="section-h2 text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '12px' }}>¿Te suena alguna de estas situaciones?</h2>
          <p className="section-lead text-center mx-auto">Si llevas un restaurante en Madrid, ya habrás vivido alguna de estas. Y sabes perfectamente lo que cuesta en tiempo, dinero y estrés.</p>
          <div className="pain-grid">
            <div className="pain-card"><div className="pain-card-icon"><i className="fa-solid fa-euro-sign"></i></div><h4>El presupuesto inicial se disparó al terminar</h4><p>Te dijeron €2.000 y te cobraron €4.500. Cada "imprevisto" era un cargo nuevo que nadie te avisó. Al final firmaste lo que no querías.</p></div>
            <div className="pain-card"><div className="pain-card-icon"><i className="fa-solid fa-clock"></i></div><h4>La obra duró el doble. Tu local estuvo cerrado más días</h4><p>Cada día cerrado es entre €2.000 y €5.000 de pérdida directa. Los retrasos no son un contratiempo — son dinero que se evapora.</p></div>
            <div className="pain-card"><div className="pain-card-icon"><i className="fa-solid fa-people-arrows"></i></div><h4>Las subcontratas no se coordinaban entre ellas</h4><p>El fontanero abrió la pared que el albañil acababa de cerrar. El electricista llegó tres días tarde. Tú mediando entre desconocidos.</p></div>
            <div className="pain-card"><div className="pain-card-icon"><i className="fa-solid fa-phone-slash"></i></div><h4>Nadie contestó cuando era urgente</h4><p>La campana se rompió a las 7 de la mañana. No podías cocinar. Llamaste a tres empresas y ninguna llegaba antes de pasado mañana.</p></div>
            <div className="pain-card"><div className="pain-card-icon"><i className="fa-solid fa-circle-xmark"></i></div><h4>El técnico no entendía hostelería</h4><p>Alguien que no había visto nunca una cocina industrial tocando tu extracción de humos, tu cámara frigorífica o tu cuadro eléctrico.</p></div>
            <div className="pain-card"><div className="pain-card-icon"><i className="fa-solid fa-rotate"></i></div><h4>Lo arreglaron, pero a los dos meses volvió a fallar</h4><p>Parche sobre parche. Sin diagnóstico real. Sin solución definitiva. Solo la sensación de que esto no va a terminar nunca.</p></div>
          </div>
        </div>
      </section>

      {/* NARRATIVA Z-PATTERN */}
      <section className="narrative-section">
        <div className="container">
          <div className="narrative-block">
            <div className="narrative-text">
              <div className="narrative-tag narrative-tag-bad"><i className="fa-solid fa-triangle-exclamation"></i> El escenario habitual</div>
              <h3>La avería llega un viernes.<br />Ningún técnico aparece hasta el lunes.</h3>
              <p>Tres llamadas sin respuesta. El fontanero que conoces tiene otro trabajo. El electricista no sabe de cocinas industriales. Cada hora que pasa es facturación que no entra. Y encima tienes que cerrar el local y avisar a las reservas del fin de semana.</p>
              <p style={{ marginTop: '16px' }}>Esto no es mala suerte. Es la consecuencia normal de depender de personas distintas para cada problema, sin coordinación, sin compromiso de respuesta.</p>
            </div>
            <div className="narrative-stats">
              <div className="n-stat"><div className="n-stat-icon n-stat-icon-bad"><i className="fa-solid fa-euro-sign"></i></div><div><div className="n-stat-num n-stat-num-bad">€2.500–5.000</div><div className="n-stat-label">pérdida directa por cada día de local cerrado</div></div></div>
              <div className="n-stat"><div className="n-stat-icon n-stat-icon-bad"><i className="fa-solid fa-clock"></i></div><div><div className="n-stat-num n-stat-num-bad">+3 semanas</div><div className="n-stat-label">retraso medio cuando se subcontrata entre gremios distintos</div></div></div>
              <div className="n-stat"><div className="n-stat-icon n-stat-icon-bad"><i className="fa-solid fa-arrow-up-right-from-square"></i></div><div><div className="n-stat-num n-stat-num-bad">"imprevistos"</div><div className="n-stat-label">el coste final siempre supera el inicial cuando el presupuesto no está cerrado</div></div></div>
            </div>
          </div>

          <div className="narrative-block flip">
            <div className="narrative-text">
              <div className="narrative-tag narrative-tag-good"><i className="fa-solid fa-circle-check"></i> Con Oro Constructores</div>
              <h3>Una llamada. El equipo completo.<br />Tu local abre al día siguiente.</h3>
              <p>Nos llamas o escribes por WhatsApp. Evaluamos la urgencia. Si hay disponibilidad ese mismo día, actuamos ese mismo día. Si necesita planificación, tienes el presupuesto en 24 horas. Todo el equipo — albañil, fontanero, electricista — trabaja coordinado desde el primer momento.</p>
              <p style={{ marginTop: '16px' }}>El precio que firmamos antes de empezar es el precio que pagas al terminar. Sin letras pequeñas. Sin conversaciones incómodas al cobrar.</p>
            </div>
            <div className="narrative-stats">
              <div className="n-stat"><div className="n-stat-icon n-stat-icon-good"><i className="fa-solid fa-bolt"></i></div><div><div className="n-stat-num n-stat-num-good">hoy</div><div className="n-stat-label">si es urgente, evaluamos si podemos atenderte el mismo día — sin esperar semanas</div></div></div>
              <div className="n-stat"><div className="n-stat-icon n-stat-icon-good"><i className="fa-solid fa-file-contract"></i></div><div><div className="n-stat-num n-stat-num-good">0 sorpresas</div><div className="n-stat-label">el precio cerrado es el precio final — siempre</div></div></div>
              <div className="n-stat"><div className="n-stat-icon n-stat-icon-good"><i className="fa-solid fa-users"></i></div><div><div className="n-stat-num n-stat-num-good">5 oficios</div><div className="n-stat-label">en un solo equipo coordinado — sin subcontratas externas</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIÓN / UVP */}
      <section className="lp-section-alt">
        <div className="container">
          <div className="section-eyebrow">La solución</div>
          <h2 className="section-h2" style={{ maxWidth: '680px' }}>Un equipo. Todos los oficios. Un solo responsable.</h2>
          <p className="section-lead">En Oro Constructores somos albañil, electricista, fontanero, pintor y alicatador en el mismo equipo. No coordinamos con desconocidos — ejecutamos nosotros. El precio que acordamos es el que pagas. Punto.</p>
          <div className="uvp-grid">
            <div className="uvp-card"><div className="uvp-icon"><i className="fa-solid fa-file-contract"></i></div><h4>Presupuesto cerrado antes de empezar</h4><p>Te entregamos un presupuesto detallado y firmado. Lo que pone en el papel es lo que pagas al terminar. Sin imprevistos de última hora. Sin costes añadidos que nadie te avisó.</p></div>
            <div className="uvp-card"><div className="uvp-icon"><i className="fa-solid fa-bolt"></i></div><h4>Urgencias atendidas en el día</h4><p>Fuga de agua, avería eléctrica, campana rota, cámara frigorífica que falla. Te damos respuesta en horas, no en días. Cuando el local tiene que abrir mañana, llegamos hoy.</p></div>
            <div className="uvp-card"><div className="uvp-icon"><i className="fa-solid fa-users"></i></div><h4>Equipo propio, sin subcontratas</h4><p>Todos los oficios son del mismo equipo. No hay coordinación entre desconocidos, no hay excusas cruzadas, no hay retrasos por "espero a que venga el otro gremio". Un solo interlocutor.</p></div>
            <div className="uvp-card"><div className="uvp-icon"><i className="fa-solid fa-calendar-check"></i></div><h4>Plazo garantizado</h4><p>Te decimos cuántos días necesitamos. Esos días son los que tardamos. Si hay que reformar en enero para que afecte lo menos posible a tu temporada, lo planificamos así desde el primer día.</p></div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="lp-section">
        <div className="container">
          <div className="section-eyebrow text-center">Servicios</div>
          <h2 className="section-h2 text-center mx-auto" style={{ maxWidth: '560px', marginBottom: '12px' }}>Todo lo que puede necesitar tu restaurante</h2>
          <p className="section-lead text-center mx-auto">Desde la avería que para el servicio hasta la reforma que renueva el local. Mismo equipo, mismo interlocutor, mismo nivel de exigencia.</p>
          <div className="services-grid">
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-droplet"></i></div><h4>Fontanería urgente</h4><p>Atascos de cocina industrial, fugas en lavavajillas, cisternas, grifería, conductos de grasa. La avería más frecuente en hostelería.</p><span className="service-freq"><i className="fa-solid fa-bolt"></i> Urgencias en el día</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-bolt"></i></div><h4>Electricidad</h4><p>Cuadros eléctricos, tomas industriales, iluminación, actualizaciones de potencia para nueva maquinaria. Certificado REBT.</p><span className="service-freq"><i className="fa-solid fa-bolt"></i> Urgencias y planificado</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-wind"></i></div><h4>Extracción de humos</h4><p>Campanas, conductos, filtros, motores de extracción. Sin extracción activa, la normativa impide cocinar. Lo resolvemos en horas.</p><span className="service-freq"><i className="fa-solid fa-bolt"></i> Urgencias en el día</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-trowel-bricks"></i></div><h4>Albañilería</h4><p>Apertura de pasos, tapar rozas tras instalaciones, reparación de daños por fuga, redistribución de cocinas, reformas parciales.</p><span className="service-freq">Planificado · Alta demanda</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-border-all"></i></div><h4>Alicatado y pavimentos</h4><p>Sustitución de piezas rotas en cocina y baños, nuevos revestimientos en reformas, solados antideslizantes de cocina industrial.</p><span className="service-freq">Planificado · Media demanda</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-paint-roller"></i></div><h4>Pintura y acabados</h4><p>Repintado de sala, cocina, fachada. Pintura específica para zonas húmedas y alta temperatura. Renovación de imagen sin cerrar semanas.</p><span className="service-freq">Planificado · Estacional</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-restroom"></i></div><h4>Baños completos</h4><p>Reparaciones urgentes y reformas completas. El estado de los aseos impacta directamente en las reseñas de tu local.</p><span className="service-freq">Urgencias y planificado</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-utensils"></i></div><h4>Cocinas industriales</h4><p>Redistribución de cocina, nuevas instalaciones de gas y extracción, adecuación a normativa sanitaria. Con todos los oficios integrados.</p><span className="service-freq">Planificado · Proyecto mayor</span></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-helmet-safety"></i></div><h4>Reforma integral</h4><p>Cocina + barra + sala + baños + fachada. Proyecto completo con todos los gremios coordinados, plazo cerrado y presupuesto único.</p><span className="service-freq">Planificado · Alto valor</span></div>
          </div>

          <div className="urgency-block">
            <h3><i className="fa-solid fa-triangle-exclamation" style={{ color: 'var(--oro)', marginRight: '12px' }}></i>¿Tienes una avería ahora mismo?</h3>
            <p>Las urgencias que impiden abrir tu local son nuestra prioridad. Llama y te decimos en el acto si podemos resolverlo hoy.</p>
            <div className="urgency-ctas">
              <a href="tel:+34643795099" className="btn-primary btn-primary-lg"><i className="fa-solid fa-phone"></i> +34 643 79 50 99 — Llamar ahora</a>
              <a href="https://wa.me/34643795099?text=URGENTE:%20Tengo%20una%20avería%20en%20mi%20restaurante.%20Necesito%20que%20vengan%20hoy." className="btn-wa" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i> Avería urgente por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="lp-section-alt">
        <div className="container">
          <div className="section-eyebrow text-center">El proceso</div>
          <h2 className="section-h2 text-center mx-auto" style={{ maxWidth: '520px', marginBottom: '12px' }}>Tres pasos. Sin burocracia.</h2>
          <p className="section-lead text-center mx-auto" style={{ marginBottom: '64px' }}>Sabemos que no tienes tiempo para procesos largos. Tampoco te lo vamos a pedir.</p>
          <div className="steps-row">
            <div className="step-card"><div className="step-num">1</div><h4>Nos contactas</h4><p>Por teléfono, WhatsApp o el formulario de esta página. Nos cuentas qué necesitas — urgencia o reforma planificada.</p><span className="step-time"><i className="fa-solid fa-clock"></i> Ahora mismo</span></div>
            <div className="step-card"><div className="step-num">2</div><h4>Visitamos y presupuestamos</h4><p>Vamos a tu local, vemos el trabajo real y te entregamos un presupuesto cerrado y detallado. Sin compromisos hasta que lo apruebes.</p><span className="step-time"><i className="fa-solid fa-clock"></i> En menos de 24h</span></div>
            <div className="step-card"><div className="step-num">3</div><h4>Ejecutamos y cerramos</h4><p>El equipo trabaja con el plazo acordado. Cuando terminamos, el precio es el del presupuesto. Sin sorpresas. Sin discusiones.</p><span className="step-time"><i className="fa-solid fa-clock"></i> En el plazo acordado</span></div>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="lp-section">
        <div className="container">
          <div className="guarantee-block">
            <div className="guarantee-shield"><i className="fa-solid fa-shield-halved"></i></div>
            <div>
              <h3>El precio del presupuesto es el precio final.</h3>
              <p>Lo ponemos por escrito antes de empezar. No hay letra pequeña, no hay imprevistos que aparezcan al terminar, no hay conversaciones incómodas al cobrar. Lo que acordamos, es lo que pagas. Y si algo no cumple el estándar, lo corregimos sin coste adicional.</p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)' }}></i> Presupuesto firmado antes de empezar</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)' }}></i> Precio final = precio del presupuesto</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--ink)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--success)' }}></i> Si no está bien, lo rehacemos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="lp-section-dark">
        <div className="container">
          <div className="section-eyebrow-dark text-center">Lo que dicen los clientes</div>
          <h2 className="section-h2-dark text-center mx-auto" style={{ maxWidth: '520px', marginBottom: '12px' }}>Restauradores que ya trabajan con nosotros</h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.4)', textAlign: 'center', marginBottom: '48px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>Resultados reales. Sin letra pequeña.</p>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-quote">"Tuvimos una fuga en la cocina un martes por la noche. <strong>Llegaron al día siguiente a primera hora, arreglaron el atasco y tapiaron la pared todo en el mismo día.</strong> Pudimos abrir a la hora del almuerzo. Sin este equipo, habríamos perdido dos días de servicio."</p>
              <div className="testimonial-author"><span className="t-name">Restaurante en Chamberí · Madrid</span><span className="t-biz">Fontanería urgente + albañilería</span></div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-quote">"Reformamos los baños y la barra en enero. <strong>El presupuesto fue exactamente lo que pagamos al terminar.</strong> Ni un euro más. Llevaba años con miedo a hacer obras en el local por las malas experiencias previas. Con Oro fue diferente."</p>
              <div className="testimonial-author"><span className="t-name">Bar-Restaurante en Malasaña · Madrid</span><span className="t-biz">Reforma de baños y barra</span></div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-quote">"La campana dejó de funcionar un viernes. Sin extracción no podíamos cocinar y la inspección nos habría cerrado. <strong>Orlando me contestó en 20 minutos y tenían a alguien en el local en dos horas.</strong> Lo arreglaron ese mismo día."</p>
              <div className="testimonial-author"><span className="t-name">Restaurante en Chueca · Madrid</span><span className="t-biz">Reparación urgente campana extractora</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="lp-section-alt">
        <div className="container">
          <div className="section-eyebrow text-center">La diferencia</div>
          <h2 className="section-h2 text-center mx-auto" style={{ maxWidth: '640px', marginBottom: '12px' }}>Por qué no es lo mismo que contratar a un autónomo<br />o a una empresa grande</h2>
          <p className="section-lead text-center mx-auto" style={{ marginBottom: 0 }}>La alternativa tiene un precio oculto que casi nadie calcula.</p>
          <table className="comp-table">
            <thead>
              <tr>
                <th style={{ background: 'var(--paper-alt)', textAlign: 'left', padding: '20px 24px', fontSize: '13px', color: 'var(--ink-3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px' }}>Criterio</th>
                <th className="col-oro">Oro Constructores</th>
                <th className="col-alt">Autónomo individual</th>
                <th className="col-alt">Empresa grande</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Todos los oficios en un equipo</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="cross"><i className="fa-solid fa-circle-xmark"></i></span></td><td className="col-alt"><i className="fa-solid fa-circle-check check"></i></td></tr>
              <tr><td>Presupuesto cerrado garantizado</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="check-partial">A veces</span></td><td className="col-alt"><span className="check-partial">Con cláusulas</span></td></tr>
              <tr><td>Urgencias en el día</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="check-partial">Si está disponible</span></td><td className="col-alt"><span className="cross"><i className="fa-solid fa-circle-xmark"></i></span></td></tr>
              <tr><td>Experiencia en hostelería</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="check-partial">Depende del gremio</span></td><td className="col-alt"><i className="fa-solid fa-circle-check check"></i></td></tr>
              <tr><td>Rango de trabajo €500–30.000</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="check-partial">Solo su oficio</span></td><td className="col-alt"><span className="cross"><i className="fa-solid fa-circle-xmark"></i></span></td></tr>
              <tr><td>Sin subcontratas externas</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="cross"><i className="fa-solid fa-circle-xmark"></i></span></td><td className="col-alt"><span className="cross"><i className="fa-solid fa-circle-xmark"></i></span></td></tr>
              <tr><td>Un solo interlocutor para todo</td><td className="col-oro"><i className="fa-solid fa-circle-check check"></i></td><td className="col-alt"><span className="cross"><i className="fa-solid fa-circle-xmark"></i></span></td><td className="col-alt"><span className="check-partial">Gestor de proyecto</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-section">
        <div className="container">
          <div className="section-eyebrow text-center">Preguntas frecuentes</div>
          <h2 className="section-h2 text-center mx-auto" style={{ maxWidth: '520px', marginBottom: '48px' }}>Lo que nos preguntan los restauradores</h2>
          <div className="faq-list">
            <RestFaq question="¿Qué pasa si aparecen imprevistos durante la obra?">Si durante la ejecución encontramos algo que genuinamente no era visible en la visita inicial, te lo comunicamos antes de actuar y te damos un presupuesto adicional para esa partida concreta. Nunca ejecutamos sin tu aprobación previa. Lo que está en el presupuesto original, no cambia.</RestFaq>
            <RestFaq question="¿Cuánto tiempo tardan en pasar el presupuesto?">Para trabajos de mantenimiento o urgencias, el presupuesto es inmediato — lo damos en la propia visita. Para reformas más grandes, el presupuesto detallado está en menos de 24 horas desde la visita.</RestFaq>
            <RestFaq question="¿Trabajan en fines de semana o fuera del horario habitual?">Dependiendo de la disponibilidad, intentamos atender las urgencias críticas también en fin de semana — especialmente las que impiden abrir el local. Consúltanos directamente y te decimos en el momento si podemos ir. Para obras planificadas, trabajamos de lunes a sábado.</RestFaq>
            <RestFaq question="¿Tienen experiencia con la normativa de hostelería (PCI, extracción, sanidad)?">Sí. La normativa de protección contra incendios, los requisitos de extracción de humos y las exigencias sanitarias son parte del trabajo diario en hostelería. Sabemos qué necesita cumplir cada instalación para pasar una inspección.</RestFaq>
            <RestFaq question="¿Cuándo es mejor hacer una reforma para minimizar el impacto en el negocio?">Octubre y noviembre son el momento ideal para planificar — firmamos el presupuesto ahora y ejecutamos en enero o febrero, que es la temporada baja de la hostelería madrileña. Así la reforma se hace cuando hay menos servicio que perder.</RestFaq>
            <RestFaq question="¿Hacen solo trabajos grandes o también reparaciones pequeñas?">Trabajamos desde €300 (reparación puntual) hasta €50.000 (reforma integral). El tamaño del trabajo no define si lo aceptamos — lo define si podemos hacerlo con el mismo nivel de calidad y con un presupuesto cerrado. Que sea pequeño no significa que merece menos atención.</RestFaq>
            <RestFaq question="¿Qué zonas de Madrid cubren?">Trabajamos en toda la ciudad de Madrid. Especialmente activos en Centro (Malasaña, Chueca, Lavapiés), Chamberí, Salamanca y Chamartín. Para el resto de la comunidad, consúltanos.</RestFaq>
            <RestFaq question="¿Emiten factura? ¿Están dados de alta como empresa?">Sí. Oro Constructores es una empresa registrada, con seguro de responsabilidad civil y que emite factura por todos los trabajos. No somos "economía sumergida" — somos una empresa que da garantías reales.</RestFaq>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" id="presupuesto">
        <div className="container">
          <div className="cta-final-inner">
            <div className="cta-copy">
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'rgba(255,255,255,.3)', marginBottom: '12px' }}>Pide tu presupuesto</div>
              <h2>Cuéntanos qué<br />necesita <span>tu local.</span></h2>
              <p>Sin compromiso. Sin rodeos. Te respondemos en menos de 24 horas con un presupuesto cerrado y detallado.</p>
              <ul className="trust-list">
                <li><i className="fa-solid fa-circle-check"></i> Presupuesto cerrado — el precio que acordamos es el que pagas</li>
                <li><i className="fa-solid fa-circle-check"></i> Visita al local sin compromiso</li>
                <li><i className="fa-solid fa-circle-check"></i> Respuesta en menos de 24h</li>
                <li><i className="fa-solid fa-circle-check"></i> Urgencias atendidas en el mismo día</li>
                <li><i className="fa-solid fa-circle-check"></i> Todos los oficios en un solo equipo</li>
              </ul>
              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.3)', marginBottom: '16px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.8px' }}>O llámanos directamente</div>
                <a href="tel:+34643795099" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--oro)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fa-solid fa-phone" style={{ fontSize: '18px' }}></i> +34 643 79 50 99
                </a>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.3)', marginTop: '8px' }}>Lunes a sábado · 8h–20h · Urgencias cualquier hora</div>
              </div>
            </div>
            <div>
              <div className="cta-form">
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', marginBottom: '4px' }}>Solicitar presupuesto gratuito</div>
                <div style={{ fontSize: '13px', color: 'var(--ink-3)', marginBottom: '28px' }}>Rellenar solo toma 60 segundos.</div>
                <form onSubmit={handleSubmit}>
                  <label className="form-label">Tu nombre</label>
                  <input type="text" name="nombre" className="form-input" placeholder="Nombre del responsable del local" required />
                  <label className="form-label">Teléfono</label>
                  <input type="tel" name="telefono" className="form-input" placeholder="+34 600 000 000" required />
                  <label className="form-label">¿Qué necesitas?</label>
                  <select name="tipo" className="form-select" required defaultValue="">
                    <option value="" disabled>Selecciona el tipo de trabajo</option>
                    <option value="urgencia">Urgencia — necesito solución hoy o mañana</option>
                    <option value="reforma-cocina">Reforma de cocina</option>
                    <option value="reforma-banos">Reforma de baños</option>
                    <option value="reforma-sala">Reforma de sala / barra</option>
                    <option value="fontaneria">Fontanería</option>
                    <option value="electricidad">Electricidad</option>
                    <option value="pintura">Pintura y acabados</option>
                    <option value="reforma-integral">Reforma integral del local</option>
                    <option value="otro">Otro trabajo</option>
                  </select>
                  <label className="form-label">Cuéntanos brevemente (opcional)</label>
                  <input type="text" name="descripcion" className="form-input" placeholder="Ej: Atasco en cocina, local en Malasaña..." />
                  <button type="submit" className="form-submit">
                    <i className="fa-solid fa-paper-plane"></i> Quiero mi presupuesto gratuito
                  </button>
                </form>
                <div className="form-divider">o contacta directamente</div>
                <a href="https://wa.me/34643795099?text=Hola,%20tengo%20un%20restaurante%20en%20Madrid%20y%20quiero%20un%20presupuesto%20para:" className="btn-wa-full" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp"></i> Escribir por WhatsApp
                </a>
                <p className="form-micro">
                  Sin compromiso · Presupuesto cerrado y detallado · Respuesta en menos de 24h<br />
                  <Link to="/contacto" style={{ color: 'var(--ink-4)', borderBottom: '1px solid var(--ink-6)' }}>Política de privacidad</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer className="footer-lp">
        <div className="container">
          <div className="footer-lp-inner">
            <Link to="/" className="footer-lp-logo">
              <img src="/logo_completo_negro.png" alt="Oro Constructores" />
            </Link>
            <div className="footer-lp-links">
              <Link to="/contacto">Privacidad</Link>
              <Link to="/contacto">Aviso legal</Link>
              <Link to="/">Volver al sitio</Link>
            </div>
            <span className="footer-lp-copy">© 2026 Oro Constructores · Madrid, España</span>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a href="https://wa.me/34643795099?text=Hola,%20tengo%20un%20restaurante%20en%20Madrid%20y%20quiero%20un%20presupuesto" className="wa-float" target="_blank" rel="noreferrer" title="WhatsApp urgente">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  )
}
