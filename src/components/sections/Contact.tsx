import { Reveal } from '../ui/Reveal';

interface ContactProps {
  onOpenContact?: () => void;
}

export default function Contact({ onOpenContact }: ContactProps) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section__num" style={{ color: 'var(--gray-300)', marginBottom: '24px' }}>06 / Contact</div>
          <h2 className="display contact__headline">
            Ready to build a brand<br />
            that grows with confidence?
          </h2>
          <p className="contact__kr">
            더 명확한 실행과 안정적인 성장을 향해, 브랜드의 새로운 기준을 함께 만들어 갈 파트너를 기다립니다.
          </p>
        </Reveal>

        <Reveal className="contact__action" style={{ marginTop: '64px', display: 'flex', justifyContent: 'center' }}>
          <button 
            type="button" 
            className="contact__submit" 
            onClick={onOpenContact}
            style={{ maxWidth: '400px', fontSize: '18px', padding: '24px 32px' }}
          >
            Contact us
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true" style={{ marginLeft: '12px' }}>
              <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
