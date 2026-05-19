export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__main">
        <div className="hero__eyebrow">
          <span className="eyebrow">S A W</span>
          <span className="eyebrow hero__eyebrow-sep">|</span>
          <span className="eyebrow eyebrow--light">Brand Builder</span>
        </div>
        <h1 className="display hero__headline">
          The New Standard,<br />
          Engineered for Excellence.
        </h1>
        <p className="hero__kr-headline">
          정교한 실행으로 완성하는 새로운 기준
        </p>
        <div className="hero__rule" aria-hidden="true"></div>
        <div className="hero__subcopy">
          <p className="hero__subcopy-en">
            S A W is a Brand Builder that helps brands execute with greater clarity and grow with confidence,<br />
            by structuring and precisely managing the entire journey from product planning to production.
          </p>
          <p className="hero__subcopy-kr">
            S A W는 제품 기획부터 생산까지의 전 과정을 구조화하고 정교하게 관리하여,<br />
            브랜드가 더 명확하게 실행하고 더 안정적으로 성장할 수 있도록 돕는 Brand Builder 입니다.
          </p>
        </div>
      </div>

      <div className="container hero__bottom">
        <span>Company Introduction</span>
        <a href="#philosophy" className="hero__scroll">
          Scroll
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
            <path d="M5 1v11M1 8l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
