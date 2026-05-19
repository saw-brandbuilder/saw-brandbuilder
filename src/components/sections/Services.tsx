import { Reveal } from '../ui/Reveal';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">03 / What We Do</span>
          <h2 className="section__title display">
            Services
            <span>서비스 영역</span>
          </h2>
          <p className="section__lead">Two integrated pillars that cover the full brand-to-product journey — from the first concept to long-term scale.</p>
        </Reveal>

        <Reveal className="services__pillars">
          <article className="pillar pillar--light">
            <div className="pillar__num">01</div>
            <h3 className="pillar__title">
              Brand Building
              <span>브랜드 빌딩 / 기획</span>
            </h3>
            <p className="pillar__desc">Concept development, product planning, and brand-aligned design direction — from philosophy to first sample.</p>
            <ul className="pillar__list">
              <li><span className="n">01</span><span className="en">Brand Positioning</span><span className="kr">포지셔닝</span></li>
              <li><span className="n">02</span><span className="en">Product Planning</span><span className="kr">제품 기획</span></li>
              <li><span className="n">03</span><span className="en">Design Direction</span><span className="kr">디자인 디렉션</span></li>
              <li><span className="n">04</span><span className="en">Prototyping</span><span className="kr">샘플 개발</span></li>
            </ul>
          </article>

          <article className="pillar pillar--dark">
            <div className="pillar__num">02</div>
            <h3 className="pillar__title">
              Scaling &amp; Production
              <span>양산 / 생산 파트너십</span>
            </h3>
            <p className="pillar__desc">A production OS that turns single samples into consistent, scalable output — with quality, timing, and cost engineered in.</p>
            <ul className="pillar__list">
              <li><span className="n">01</span><span className="en">Production Setup</span><span className="kr">양산 셋업</span></li>
              <li><span className="n">02</span><span className="en">Quality Management</span><span className="kr">품질 관리</span></li>
              <li><span className="n">03</span><span className="en">Supply Chain Ops</span><span className="kr">공급망 운영</span></li>
              <li><span className="n">04</span><span className="en">Long-term Partnership</span><span className="kr">장기 파트너십</span></li>
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
