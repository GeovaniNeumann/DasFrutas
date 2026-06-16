import Header        from '../components/Header/Header.jsx'
import HeroCarousel  from '../components/HeroCarousel/HeroCarousel.jsx'
import About         from '../components/About/About.jsx'
import Differentials from '../components/Differentials/Differentials.jsx'
import ContactForm   from '../components/ContactForm/ContactForm.jsx'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton.jsx'
import Footer        from '../components/Footer/Footer.jsx'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero ocupa 100vh desde o topo — header flutua sobre ele */}
      <div id="inicio">
        <HeroCarousel />
      </div>

      <main>
        <section id="sobre">
          <About />
        </section>

        <section id="produtos">
          <Differentials />
        </section>

        <section id="contato">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
