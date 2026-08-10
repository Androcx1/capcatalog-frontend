import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import PromoPopup from './components/PromoPopup'

import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import OffersPage from './pages/OffersPage'
import WearablePage from './pages/WearablePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import PoliciesPage from './pages/PoliciesPage'
import PurchaseGuidePage from './pages/PurchaseGuidePage'
import ShippingPage from './pages/ShippingPage'
import CarePage from './pages/CarePage'
import StatsPage from './pages/StatsPage'

import './styles/section-header.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/catalog.css'
import './styles/promotions.css'
import './styles/wearable.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/popup.css'
import './styles/pages.css'
import './styles/contact-form.css'
import './styles/map.css'
import './styles/stats.css'
import './styles/wearable-stats.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/ofertas" element={<OffersPage />} />
        <Route path="/wearable" element={<WearablePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/preguntas-frecuentes" element={<FAQPage />} />
        <Route path="/politicas" element={<PoliciesPage />} />
        <Route path="/guia-compra" element={<PurchaseGuidePage />} />
<Route path="/envios" element={<ShippingPage />} />
<Route path="/cuidado-gorras" element={<CarePage />} />
<Route path="/estadisticas" element={<StatsPage />} />
      </Routes>

      <Footer />
      <PromoPopup />
    </BrowserRouter>
  )
}

export default App