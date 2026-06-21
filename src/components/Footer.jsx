import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/logo_completo_negro.png" alt="Oro Constructores" />
            </div>
            <p className="footer-desc">Reformas y construcción en Madrid. Maestros con +30 años de oficio. Sin sorpresas. Sin letra pequeña.</p>
            <div style={{ marginTop: '20px' }}>
              <span className="footer-badge"><i className="fa-solid fa-shield-check"></i> Empresa verificada</span>
            </div>
          </div>
          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><Link to="/soluciones">Reformas Integrales</Link></li>
              <li><Link to="/soluciones">Cocinas y Baños</Link></li>
              <li><Link to="/soluciones">Pintura y Acabados</Link></li>
              <li><Link to="/soluciones">Fontanería</Link></li>
              <li><Link to="/soluciones">Electricidad</Link></li>
              <li><Link to="/soluciones">Alicatado</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><Link to="/nuestra-historia">Nuestra historia</Link></li>
              <li><Link to="/nuestra-cultura">Nuestra cultura</Link></li>
              <li><Link to="/presupuesto">Pedir presupuesto</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Investigaciones</h5>
            <ul>
              <li><Link to="/investigaciones">Ver todas las investigaciones</Link></li>
              <li><Link to="/investigaciones/hosteleria-madrid">Hostelería en Madrid</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto</h5>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+34643795099">+34 643 79 50 99</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info.oroconstructores@gmail.com">info.oroconstructores@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Madrid, España</span>
            </div>
            <div className="footer-contact-item" style={{ marginTop: '16px' }}>
              <a href="https://wa.me/34643795099" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,.65)', fontSize: '14px' }}>
                <i className="fa-brands fa-whatsapp" style={{ color: 'var(--oro)', fontSize: '18px' }}></i> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Oro Constructores · Madrid, España · Empresa del holding Oro Corporation</p>
          <p>oroconstructores.com</p>
        </div>
      </div>
    </footer>
  )
}
