import { Link } from 'react-router-dom'

export default function SolucionesPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-mini">
        <div className="container">
          <div className="hero-label"><i className="fa-solid fa-screwdriver-wrench"></i> Nuestros servicios</div>
          <h1>Hacemos realidad lo que<br />tienes en mente.</h1>
          <p>Transformamos espacios a través de planificación estratégica y ejecución impecable. Maestros reales. Resultados reales.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-primary">Pedir presupuesto gratis</Link>
            <Link to="/contacto" className="btn btn-ghost-inv">Hablar con nosotros</Link>
          </div>
        </div>
      </section>

      {/* CATEGORÍA 1: REFORMAS */}
      <section className="section">
        <div className="container">
          <div className="service-category-header">
            <div className="service-category-icon"><i className="fa-solid fa-building"></i></div>
            <div>
              <h2>Reformas Integrales</h2>
              <p>Gestión completa de la transformación de tu vivienda o local. De principio a fin, sin subcontrataciones opacas.</p>
            </div>
          </div>

          <div className="service-list-item">
            <div className="service-list-icon"><i className="fa-solid fa-house"></i></div>
            <div className="service-list-text">
              <h3>Reforma Integral de Vivienda</h3>
              <p>Transformación completa del piso o casa: derribos, tabiquería, instalaciones nuevas (luz, agua, gas), solados, revestimientos y acabados. Coordinamos todos los gremios y te mantenemos informado en cada fase.</p>
              <div className="service-list-tags">
                <span className="service-tag">Viviendas completas</span>
                <span className="service-tag">Pisos</span>
                <span className="service-tag">Chalets</span>
                <span className="service-tag">Ático</span>
              </div>
            </div>
          </div>

          <div className="service-list-item">
            <div className="service-list-icon"><i className="fa-solid fa-store"></i></div>
            <div className="service-list-text">
              <h3>Reforma de Local Comercial</h3>
              <p>Adecuación de locales para hostelería, oficinas, tiendas o clínicas. Conocemos la normativa y los plazos de la administración. Entrega en el tiempo acordado para que puedas abrir cuanto antes.</p>
              <div className="service-list-tags">
                <span className="service-tag">Restaurantes</span>
                <span className="service-tag">Bares</span>
                <span className="service-tag">Oficinas</span>
                <span className="service-tag">Clínicas</span>
              </div>
            </div>
          </div>

          <div className="service-list-item">
            <div className="service-list-icon"><i className="fa-solid fa-layer-group"></i></div>
            <div className="service-list-text">
              <h3>Reforma Parcial o por Estancias</h3>
              <p>Solo necesitas reformar el baño, la cocina o el salón. Trabajamos por estancias sin obligarte a reformar todo el piso. Presupuesto ajustado a lo que realmente necesitas.</p>
              <div className="service-list-tags">
                <span className="service-tag">Salón</span>
                <span className="service-tag">Dormitorios</span>
                <span className="service-tag">Pasillo</span>
                <span className="service-tag">Terraza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍA 2: COCINAS Y BAÑOS */}
      <section className="section section-paper">
        <div className="container">
          <div className="service-category-header">
            <div className="service-category-icon"><i className="fa-solid fa-shower"></i></div>
            <div>
              <h2>Cocinas y Baños</h2>
              <p>Las estancias más exigentes de la reforma. Precisión, materiales de calidad y acabados impecables.</p>
            </div>
          </div>

          <div className="service-list-item">
            <div className="service-list-icon"><i className="fa-solid fa-shower"></i></div>
            <div className="service-list-text">
              <h3>Reforma de Baño Completa</h3>
              <p>Demolición total, impermeabilización, nueva instalación de fontanería, alicatado, instalación de sanitarios y muebles. El baño que siempre quisiste, con la tranquilidad de que está bien hecho.</p>
              <div className="service-list-tags">
                <span className="service-tag">Alicatado</span>
                <span className="service-tag">Fontanería</span>
                <span className="service-tag">Sanitarios</span>
                <span className="service-tag">Ducha o bañera</span>
              </div>
            </div>
          </div>

          <div className="service-list-item">
            <div className="service-list-icon"><i className="fa-solid fa-utensils"></i></div>
            <div className="service-list-text">
              <h3>Reforma de Cocina</h3>
              <p>Reforma integral o parcial. Instalación de nuevos muebles, encimeras, electrodomésticos encastrados, iluminación y revestimientos. Fontanería y electricidad incluidas.</p>
              <div className="service-list-tags">
                <span className="service-tag">Muebles de cocina</span>
                <span className="service-tag">Encimeras</span>
                <span className="service-tag">Electrodomésticos</span>
                <span className="service-tag">Iluminación</span>
              </div>
            </div>
          </div>

          <div className="service-list-item">
            <div className="service-list-icon"><i className="fa-solid fa-droplet"></i></div>
            <div className="service-list-text">
              <h3>Fontanería y Reparación de Fugas</h3>
              <p>Detección y reparación de fugas, sustitución de tuberías, instalación de calentadores, termos y sistemas de calefacción. Respuesta rápida en urgencias.</p>
              <div className="service-list-tags">
                <span className="service-tag">Fugas urgentes</span>
                <span className="service-tag">Calentadores</span>
                <span className="service-tag">Tuberías</span>
                <span className="service-tag">Calefacción</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍA 3: ACABADOS */}
      <section className="section">
        <div className="container">
          <div className="service-category-header">
            <div className="service-category-icon"><i className="fa-solid fa-paint-roller"></i></div>
            <div>
              <h2>Acabados y Detalles</h2>
              <p>La diferencia entre una reforma buena y una reforma impecable está en los detalles. Nosotros no los descuidamos.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            <div className="service-list-item" style={{ paddingRight: '32px', borderRight: '1px solid var(--ink-6)' }}>
              <div className="service-list-icon"><i className="fa-solid fa-paint-roller"></i></div>
              <div className="service-list-text">
                <h3>Pintura Lavable</h3>
                <p>Aplicación profesional en paredes y techos. Preparación, imprimación y acabado en cualquier tipo de superficie. Colores a tu elección.</p>
              </div>
            </div>
            <div className="service-list-item" style={{ paddingLeft: '32px' }}>
              <div className="service-list-icon"><i className="fa-solid fa-table-cells-large"></i></div>
              <div className="service-list-text">
                <h3>Cerámica y Alicatado</h3>
                <p>Colocación de cerámica y porcelánico en baños, cocinas y suelos. Trabajo de precisión para un resultado duradero y estético.</p>
              </div>
            </div>
            <div className="service-list-item" style={{ paddingRight: '32px', borderRight: '1px solid var(--ink-6)' }}>
              <div className="service-list-icon"><i className="fa-solid fa-rug"></i></div>
              <div className="service-list-text">
                <h3>Tarima y Suelos</h3>
                <p>Instalación de suelos laminados, vinílicos o madera natural. Preparación de la base y colocación con garantía de resultado.</p>
              </div>
            </div>
            <div className="service-list-item" style={{ paddingLeft: '32px' }}>
              <div className="service-list-icon"><i className="fa-solid fa-grid-2"></i></div>
              <div className="service-list-text">
                <h3>Falsos Techos y Pladur</h3>
                <p>Techos continuos, registrables y de pladur. Instalación de techos de escayola y sistemas de iluminación integrada.</p>
              </div>
            </div>
            <div className="service-list-item" style={{ paddingRight: '32px', borderRight: '1px solid var(--ink-6)' }}>
              <div className="service-list-icon"><i className="fa-solid fa-droplet-slash"></i></div>
              <div className="service-list-text">
                <h3>Tratamiento de Humedades</h3>
                <p>Diagnóstico, resanado y tratamiento antihumedad en paredes, techos y fachadas. Soluciones definitivas, no parches.</p>
              </div>
            </div>
            <div className="service-list-item" style={{ paddingLeft: '32px' }}>
              <div className="service-list-icon"><i className="fa-solid fa-bolt"></i></div>
              <div className="service-list-text">
                <h3>Electricidad</h3>
                <p>Instalaciones eléctricas, cuadros de distribución, puntos de luz, enchufes y adaptación a normativa vigente. Electricistas certificados.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <div className="service-list-item">
              <div className="service-list-icon"><i className="fa-solid fa-trash-can"></i></div>
              <div className="service-list-text">
                <h3>Gestión de Escombros</h3>
                <p>Retirada y gestión responsable de escombros y residuos de obra. Tu espacio limpio desde el primer día. Cumplimos con la normativa de residuos de construcción.</p>
                <div className="service-list-tags">
                  <span className="service-tag">Contenedores</span>
                  <span className="service-tag">Retirada</span>
                  <span className="service-tag">Gestión responsable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRECIOS DE REFERENCIA */}
      <section className="section section-paper">
        <div className="container">
          <div className="section-label">Precios de referencia</div>
          <h2 className="h2" style={{ marginBottom: '12px' }}>Transparencia desde el primer momento.</h2>
          <p className="lead" style={{ marginBottom: '32px' }}>Estos son precios orientativos de mano de obra. El presupuesto final depende de las características de tu proyecto. Siempre cerrado antes de empezar.</p>
          <div className="pricing-table">
            <div className="pricing-table-header">
              <span>Servicio</span>
              <span>Precio MO</span>
              <span>Plazo est.</span>
              <span>Condiciones de pago</span>
            </div>
            <div className="pricing-row">
              <div className="name">Reforma Integral</div>
              <div className="price">Desde 6.500€ + IVA</div>
              <div className="term">20 días lab.</div>
              <div className="payment">50% inicio + cuotas por fase</div>
            </div>
            <div className="pricing-row">
              <div className="name">Reforma de Baño Completa</div>
              <div className="price">Desde 1.500€</div>
              <div className="term">5–8 días</div>
              <div className="payment">50% inicio · 50% entrega</div>
            </div>
            <div className="pricing-row">
              <div className="name">Reparación de Fuga Urgente</div>
              <div className="price">Desde 600€ (sin IVA)</div>
              <div className="term">1–2 días</div>
              <div className="payment">Total al finalizar</div>
            </div>
            <div className="pricing-row">
              <div className="name">Pintura (vivienda completa)</div>
              <div className="price">Presupuesto a medida</div>
              <div className="term">Según m²</div>
              <div className="payment">50% inicio · 50% entrega</div>
            </div>
            <div className="pricing-row">
              <div className="name">Alicatado / m²</div>
              <div className="price">Presupuesto a medida</div>
              <div className="term">Según superficie</div>
              <div className="payment">Pago según avance</div>
            </div>
          </div>
          <div className="callout-oro" style={{ marginTop: '24px' }}>
            <strong>Nota importante:</strong> Todos los presupuestos son cerrados y por escrito. No cobramos por la visita ni por el presupuesto. El precio acordado no cambia salvo cambios en el proyecto solicitados por el cliente.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Qué necesitas reformar?</h2>
          <p>Cuéntanos tu proyecto y te devolvemos un presupuesto detallado en menos de 48 horas.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presupuesto" className="btn btn-secondary btn-lg">
              <i className="fa-solid fa-file-invoice"></i> Solicitar presupuesto gratis
            </Link>
            <a href="tel:+34643795099" className="btn btn-ghost btn-lg">
              <i className="fa-solid fa-phone"></i> +34 643 79 50 99
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
