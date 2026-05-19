import { Reveal } from '../ui/Reveal';

export default function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__num">01 / Philosophy</span>
          <h2 className="section__title display">
            Great brands begin
            <span>좋은 브랜드는 좋은 제품에서 시작됩니다.</span>
          </h2>
        </Reveal>

        <Reveal className="philosophy__grid">
          <div className="philosophy__col philosophy__col--en">
            <div className="eyebrow">— EN</div>
            <p>Great brands begin with great products, and great products are completed through strong execution.</p>
            <p>SAW connects vision and reality, planning and production, direction and execution — to transform brand ideas into refined product experiences.</p>
            <p>We do more than make products. We build the standards and structure that help brands create with clarity and grow with confidence.</p>
          </div>
          <div className="philosophy__rule" aria-hidden="true"></div>
          <div className="philosophy__col philosophy__col--kr">
            <div className="eyebrow">— KR</div>
            <p>좋은 브랜드는 좋은 제품에서 시작되고, 좋은 제품은 좋은 실행 구조에서 완성됩니다.</p>
            <p>SAW는 브랜드의 아이디어를 정제된 제품 경험으로 구현하기 위해, 감각과 현실, 기획과 생산, 방향과 실행 사이를 정교하게 연결합니다.</p>
            <p>우리는 단순히 제품을 만드는 것이 아니라, 브랜드가 더 명확하게 만들고 더 안정적으로 성장할 수 있는 기준과 구조를 함께 만듭니다.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
