import Navbar          from '@/components/Navbar';
import Hero            from '@/components/Hero';
import TickerCounters  from '@/components/TickerCounters';
import ClientsPartners from '@/components/ClientsPartners';
import About           from '@/components/About';
import QuoteStrip      from '@/components/QuoteStrip';
import Services        from '@/components/Services';
import Industries      from '@/components/Industries';
import Certifications  from '@/components/Certifications';
import Resources       from '@/components/Resources';
import ContactBand     from '@/components/ContactBand';
import Contact         from '@/components/Contact';
import Footer          from '@/components/Footer';
import ScrollReveal    from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <TickerCounters />
        <ClientsPartners />
        <About />
        <QuoteStrip />
        <Services />
        <Industries />
        <Certifications />
        <Resources />
        <ContactBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
