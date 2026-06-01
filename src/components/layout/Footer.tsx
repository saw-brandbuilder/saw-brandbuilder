export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__col">
            <div className="footer__col-label">S A W Brandbuilder</div>
            <p className="footer__brand-copy">
              Transforming brand ideas into refined product experiences.<br/>
              브랜드 아이디어를 정제된 제품 경험으로 구현합니다.
            </p>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">Contact</div>
            <dl>
              <dt>E-mail</dt>
              <dd><a href="mailto:saw@saw-brandbuilder.com">saw@saw-brandbuilder.com</a></dd>
              <dt>Phone</dt>
              <dd><a href="tel:+821051240538">+82.10.5124.0538</a></dd>
              <dt>Instagram</dt>
              <dd><a href="https://instagram.com/s_a_w_brandbuilder" target="_blank" rel="noopener">@s_a_w_brandbuilder</a></dd>
            </dl>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">Company</div>
            <dl>
              <dt>Address</dt>
              <dd>18-7, Nambusunhwan-ro 317-gil,<br/>Seocho-gu, Seoul, Republic of Korea</dd>
              <dt>사업자 등록번호</dt>
              <dd>721-04-01706</dd>
              <dt>통신판매업 신고번호</dt>
              <dd>2020-서울서초-0579</dd>
            </dl>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026  /  S A W  Brandbuilder. All rights reserved.</div>
          <div className="footer__legal">
            <span>Seoul, KR</span>
            <span>Brand Builder / Production OS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
