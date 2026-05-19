import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

export function Reveal({ children, className = '', as: Component = 'div', ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const combinedClassName = `reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim();

  return (
    <Component
      ref={ref as any}
      className={combinedClassName}
      {...props}
    >
      {children}
    </Component>
  );
}
