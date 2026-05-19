import { useState, type FormEvent, useRef, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add all attached files to formData
      files.forEach((file) => {
        formData.append('fi-file-attachments[]', file);
      });

      // @ts-ignore
      const forminit = new window.Forminit();
      const { error } = await forminit.submit('f8o6b32oaof', formData);

      if (error) {
        alert(error.message);
      } else {
        setSubmitted(true);
        formRef.current?.reset();
        setFiles([]); // clear files
        
        setTimeout(() => {
          setSubmitted(false);
          onClose(); // close modal after success message
        }, 3200);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while sending your inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const validFiles = newFiles.filter(file => {
        if (file.size > 10 * 1024 * 1024) {
          alert(`"${file.name}" exceeds the 10MB limit and won't be added.`);
          return false;
        }
        return true;
      });

      setFiles(prev => {
        const total = [...prev, ...validFiles];
        if (total.length > 5) {
          alert('You can only upload a maximum of 5 files.');
          return total.slice(0, 5);
        }
        return total;
      });
      
      // Reset input so the same file can be selected again if removed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        <div className="modal-header">
          <h3 className="display">Start a Project</h3>
          <p>Tell us about your brand and what you're building.</p>
        </div>

        <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name  /  이름</label>
            <input type="text" id="name" name="fi-sender-fullName" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="company">Company  /  브랜드 · 회사</label>
            <input type="text" id="company" name="fi-sender-company" placeholder="Brand or company name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email  /  이메일</label>
            <input type="email" id="email" name="fi-sender-email" placeholder="you@brand.com" required />
          </div>
          <div className="field">
            <label htmlFor="topic">Inquiry  /  문의 영역</label>
            <select id="topic" name="fi-select-topic">
              <option value="brand-building">Brand Building / 기획</option>
              <option value="scaling">Scaling &amp; Production / 양산</option>
              <option value="both">Both / 전체 파트너십</option>
              <option value="other">Other / 기타</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">Project Brief  /  프로젝트 개요</label>
            <textarea id="message" name="fi-text-message" placeholder="Tell us about your brand and what you're building." required></textarea>
          </div>
          
          <div className="field">
            <label>Attachments  /  첨부파일 (최대 5개, 각 10MB 이하)</label>
            <div className="file-upload-wrapper">
              <button 
                type="button" 
                className="file-upload-btn" 
                onClick={() => fileInputRef.current?.click()}
                disabled={files.length >= 5}
              >
                + Add File
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                multiple 
                style={{ display: 'none' }} 
              />
            </div>
            
            {files.length > 0 && (
              <ul className="file-list">
                {files.map((file, idx) => (
                  <li key={idx} className="file-item">
                    <span className="file-name">{file.name} ({(file.size / 1024 / 1024).toFixed(1)}MB)</span>
                    <button type="button" className="file-remove" onClick={() => removeFile(idx)}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button 
            type="submit" 
            className="contact__submit"
            disabled={isSubmitting || submitted}
            style={submitted ? { background: '#ffffff', color: '#0a0a0a' } : {}}
          >
            {submitted ? (
              "Thank you  /  감사합니다"
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send inquiry
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
