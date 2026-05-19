import { Reveal } from '../ui/Reveal';

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">05 / Project</span>
          <h2 className="section__title display">
            Selected projects
            <span>주요 프로젝트</span>
          </h2>
        </Reveal>

        <div className="cards">
          <Reveal as="a" className="card card--light" href="#contact" aria-label="TWELVE brand">
            <div className="card__image" style={{ backgroundImage: "url('assets/images/1. twelve_image.png')" }}></div>
            <div className="card__overlay"></div>
            <span className="card__index">BRAND / 01</span>
            <div className="card__logo">
              <img src="assets/logos/1. twelve_logo.svg" alt="TWELVE" />
            </div>
          </Reveal>

          <Reveal as="a" className="card card--logo-lg" href="#contact" aria-label="ANIDAR brand">
            <div className="card__image" style={{ backgroundImage: "url('assets/images/2. anidar_image.png')" }}></div>
            <div className="card__overlay"></div>
            <span className="card__index">BRAND / 02</span>
            <div className="card__logo">
              <img src="assets/logos/2. anidar_logo.svg" alt="ANIDAR" />
            </div>
          </Reveal>

          <Reveal as="a" className="card" href="#contact" aria-label="PUBG brand">
            <div className="card__image" style={{ backgroundImage: "url('assets/images/3. PUBG_image.jpg')" }}></div>
            <div className="card__overlay"></div>
            <span className="card__index">BRAND / 03</span>
            <div className="card__logo">
              <img src="assets/logos/3. PUBG_Logo.png" alt="PUBG" />
            </div>
          </Reveal>

          <Reveal as="a" className="card" href="#contact" aria-label="COMO brand">
            <div className="card__image" style={{ backgroundImage: "url('assets/images/4. COMO_image.png')" }}></div>
            <div className="card__overlay"></div>
            <span className="card__index">BRAND / 04</span>
            <div className="card__logo">
              <img src="assets/logos/4. COMO_logo.svg" alt="COMO" style={{ maxWidth: '65%', maxHeight: '59px', transform: 'translateY(10px)' }} />
            </div>
          </Reveal>

          <Reveal as="a" className="card" href="#contact" aria-label="CHEISER brand">
            <div className="card__image" style={{ backgroundImage: "url('assets/images/5. CHEISER_image.jpg')" }}></div>
            <div className="card__overlay"></div>
            <span className="card__index">BRAND / 05</span>
            <div className="card__logo">
              <img src="assets/logos/5. CHEISER_logo.svg" alt="CHEISER" style={{ transform: 'translateY(0px)' }} />
            </div>
          </Reveal>

          <Reveal as="a" className="card" href="#contact" aria-label="ROYALBLOOD brand">
            <div className="card__image" style={{ backgroundImage: "url('assets/images/6. ROYALBLOOD_image.jpg')" }}></div>
            <div className="card__overlay"></div>
            <span className="card__index">BRAND / 06</span>
            <div className="card__logo">
              <img src="assets/logos/6. ROYALBLOOD_logo.svg" alt="ROYALBLOOD" style={{ transform: 'translateY(-2px)' }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
