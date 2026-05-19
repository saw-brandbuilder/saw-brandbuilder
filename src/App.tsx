import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Values from './components/sections/Values';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import ContactModal from './components/ui/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Navbar onOpenContact={openContactModal} />
      <main>
        <Hero />
        <Philosophy />
        <Values />
        <Services />
        <Process />
        <Portfolio />
        <Contact onOpenContact={openContactModal} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}

export default App;
