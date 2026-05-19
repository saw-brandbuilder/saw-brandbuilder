import { Reveal } from '../ui/Reveal';

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">04 / How We Work</span>
          <h2 className="section__title display">
            A five-stage journey
            <span>프로세스 / 5단계</span>
          </h2>
        </Reveal>

        <Reveal className="process__grid">
          <div className="process__step">
            <div className="process__n">01</div>
            <div className="process__name">Discovery<span>발견</span></div>
            <div className="process__desc">Brand philosophy, category, and market context alignment.</div>
          </div>
          <div className="process__step">
            <div className="process__n">02</div>
            <div className="process__name">Definition<span>정의</span></div>
            <div className="process__desc">Product strategy, positioning, and success metrics.</div>
          </div>
          <div className="process__step">
            <div className="process__n">03</div>
            <div className="process__name">Design<span>설계</span></div>
            <div className="process__desc">Concept, material, pattern, and iterative sampling.</div>
          </div>
          <div className="process__step">
            <div className="process__n">04</div>
            <div className="process__name">Delivery<span>실행</span></div>
            <div className="process__desc">Production setup, quality control, and launch.</div>
          </div>
          <div className="process__step">
            <div className="process__n">05</div>
            <div className="process__name">Scale<span>확장</span></div>
            <div className="process__desc">Rollovers, capacity growth, and system evolution.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
