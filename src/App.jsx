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
import InvBanoPage from './pages/InvBanoPage'
import InvReformaPisoPage from './pages/InvReformaPisoPage'
import InvHumedadesPage from './pages/InvHumedadesPage'
import InvCocinaPage from './pages/InvCocinaPage'
import InvUrgenciasPage from './pages/InvUrgenciasPage'
import InvPinturaPage from './pages/InvPinturaPage'
import InvAlbanileriaPage from './pages/InvAlbanileriaPage'
import InvFontaneriaPage from './pages/InvFontaneriaPage'
import InvElectricidadPage from './pages/InvElectricidadPage'
import InvAlicatadoPage from './pages/InvAlicatadoPage'
import InvSuelosPage from './pages/InvSuelosPage'
import InvTechosPladurPage from './pages/InvTechosPladurPage'
import InvResiduosPage from './pages/InvResiduosPage'
import InvCarpinteriaPage from './pages/InvCarpinteriaPage'
import CatalogoServiciosPage from './pages/CatalogoServiciosPage'
import ServiceInvestigationPage from './pages/ServiceInvestigationPage'
import NotFoundPage from './pages/NotFoundPage'

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
        <Route path="/investigaciones" element={<InvestigacionesPage />} />
        <Route path="/investigaciones/hosteleria-madrid" element={<InvHosteleriaPage />} />
        <Route path="/investigaciones/negocio-hosteleria" element={<InvNegocioHosteleriaPage />} />
        <Route path="/investigaciones/reforma-bano-madrid" element={<InvBanoPage />} />
        <Route path="/investigaciones/reforma-piso-madrid" element={<InvReformaPisoPage />} />
        <Route path="/investigaciones/humedades-madrid" element={<InvHumedadesPage />} />
        <Route path="/investigaciones/reforma-cocina-madrid" element={<InvCocinaPage />} />
        <Route path="/investigaciones/urgencias-hosteleria-madrid" element={<InvUrgenciasPage />} />
        <Route path="/investigaciones/pintura-madrid" element={<InvPinturaPage />} />
        <Route path="/investigaciones/albanileria-madrid" element={<InvAlbanileriaPage />} />
        <Route path="/investigaciones/fontaneria-madrid" element={<InvFontaneriaPage />} />
        <Route path="/investigaciones/electricidad-madrid" element={<InvElectricidadPage />} />
        <Route path="/investigaciones/alicatado-ceramica-madrid" element={<InvAlicatadoPage />} />
        <Route path="/investigaciones/suelos-tarimas-madrid" element={<InvSuelosPage />} />
        <Route path="/investigaciones/techos-pladur-madrid" element={<InvTechosPladurPage />} />
        <Route path="/investigaciones/residuos-obra-madrid" element={<InvResiduosPage />} />
        <Route path="/investigaciones/carpinteria-madrid" element={<InvCarpinteriaPage />} />
        <Route path="/catalogo-servicios" element={<CatalogoServiciosPage />} />
        <Route path="/investigaciones/servicio/:slug" element={<ServiceInvestigationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isStandalone && <Footer />}
    </>
  )
}
