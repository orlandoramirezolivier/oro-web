import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SolucionesPage from './pages/SolucionesPage'
import PresupuestoPage from './pages/PresupuestoPage'
import ContactoPage from './pages/ContactoPage'
import SobreNosotrosPage from './pages/SobreNosotrosPage'
import NuestraHistoriaPage from './pages/NuestraHistoriaPage'
import NuestraCulturaPage from './pages/NuestraCulturaPage'
import TiendaPage from './pages/TiendaPage'
import RestaurantesPage from './pages/RestaurantesPage'
import InvHosteleriaPage from './pages/InvHosteleriaPage'
import InvNegocioHosteleriaPage from './pages/InvNegocioHosteleriaPage'
import InvestigacionesPage from './pages/InvestigacionesPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Rutas que son landings autónomas (con su propio nav/footer)
const STANDALONE = ['/restaurantes']

export default function App() {
  const { pathname } = useLocation()
  const isStandalone = STANDALONE.includes(pathname)

  return (
    <>
      <ScrollToTop />
      {!isStandalone && <Nav />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soluciones" element={<SolucionesPage />} />
        <Route path="/presupuesto" element={<PresupuestoPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
        <Route path="/nuestra-historia" element={<NuestraHistoriaPage />} />
        <Route path="/nuestra-cultura" element={<NuestraCulturaPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/restaurantes" element={<RestaurantesPage />} />
        <Route path="/investigaciones/hosteleria-madrid" element={<InvHosteleriaPage />} />
        <Route path="/investigaciones" element={<InvestigacionesPage />} />
        <Route path="/investigaciones/negocio-hosteleria" element={<InvNegocioHosteleriaPage />} />
      </Routes>
      {!isStandalone && <Footer />}
    </>
  )
}
