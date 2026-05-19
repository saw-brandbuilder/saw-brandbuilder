import { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector('.hero');
    const onScroll = () => {
      const threshold = (heroEl?.getBoundingClientRect().height || window.innerHeight) - 80;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'is-scrolled' : 'is-dark'}`} id="nav">
      <div className="container nav__inner">
        <a href="#top" className="logo" aria-label="S A W brandbuilder" style={{ marginLeft: '-12px' }}>
          <img src="logo_dark.svg" alt="S A W brandbuilder" className="logo__img logo__img--light" />
          <img src="logo_light.svg" alt="" className="logo__img logo__img--dark" aria-hidden="true" />
        </a>
        <div className="nav__menu">
          <a href="#philosophy" className="nav__link">Philosophy</a>
          <a href="#values" className="nav__link">Values</a>
          <a href="#services" className="nav__link">Services</a>
          <a href="#portfolio" className="nav__link">Portfolio</a>
        </div>
        <a href="#contact" className="nav__cta" onClick={handleContactClick}>Contact</a>
      </div>
    </nav>
  );
}
