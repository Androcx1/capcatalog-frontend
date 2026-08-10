import HeroBanner from '../components/HeroBanner'
import Catalog from '../components/Catalog'
import PromotionsSection from '../components/PromotionsSection'
import SmartwatchWidget from '../components/SmartwatchWidget'
import ContactSection from '../components/ContactSection'

function HomePage() {
  return (
    <>
      <HeroBanner />
      <Catalog />
      <PromotionsSection />
      <SmartwatchWidget />
      <ContactSection />
    </>
  )
}

export default HomePage