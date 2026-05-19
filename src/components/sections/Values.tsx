import { Reveal } from '../ui/Reveal';

export default function Values() {
  return (
    <section className="section values" id="values">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">02 / Core Values</span>
          <h2 className="section__title display">
            Five Core Values
            <span>다섯 가지 핵심 가치</span>
          </h2>
          <p className="section__lead">The principles that define how we create, build, and grow alongside our brand partners.</p>
        </Reveal>

        <Reveal className="values__grid">
          <div className="values__item">
            <div className="values__num">01</div>
            <div className="values__name-en">Refinement</div>
            <div className="values__name-kr">정제</div>
            <div className="values__tag">Distilling ideas into their purest form.</div>
            <div className="values__desc">We go beyond making products. By identifying only what matters most, we transform complex ideas into the clearest and most refined product outcome.</div>
          </div>
          <div className="values__item">
            <div className="values__num">02</div>
            <div className="values__name-en">Architecture</div>
            <div className="values__name-kr">구조화</div>
            <div className="values__tag">Turning ambiguity into structured clarity.</div>
            <div className="values__desc">We design a logical framework for the entire journey from concept to production, reducing friction and increasing efficiency through structure.</div>
          </div>
          <div className="values__item">
            <div className="values__num">03</div>
            <div className="values__name-en">Precision</div>
            <div className="values__name-kr">정교함</div>
            <div className="values__tag">An uncompromising pursuit of excellence.</div>
            <div className="values__desc">We aim beyond accuracy toward true precision, ensuring that the original intent is carried through every detail of execution with consistency and care.</div>
          </div>
          <div className="values__item">
            <div className="values__num">04</div>
            <div className="values__name-en">Depth</div>
            <div className="values__name-kr">깊이</div>
            <div className="values__tag">Exploring the value beneath the surface.</div>
            <div className="values__desc">We look beyond trends and appearances to understand the philosophy and context behind each brand, translating that depth into meaningful product experiences.</div>
          </div>
          <div className="values__item">
            <div className="values__num">05</div>
            <div className="values__name-en">Scalability</div>
            <div className="values__name-kr">확장성</div>
            <div className="values__tag">Building the foundation for sustainable growth.</div>
            <div className="values__desc">We create the standards and systems that enable brands to grow with stability and scale with confidence over time.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
