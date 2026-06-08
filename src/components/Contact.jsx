import { useState } from 'react';
import { Send } from 'lucide-react';
import usePortfolioStore from '../store/usePortfolioStore';

const Contact = () => {
  const personalInfo = usePortfolioStore((state) => state.personalInfo);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`SYSTEM ALERt: Communication module offline. Please email directly at ${personalInfo.email}`);
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-section-gap px-gutter overflow-hidden">
      {/* Background Atmospheric Element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="scanline"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-terminal-green/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[800px]">
        {/* Terminal Header Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-base border-b border-subtle pb-4 gap-4">
          <div className="space-y-1">
            <h2 className="font-display-lg text-3xl md:text-display-lg leading-none tracking-tighter text-white">ESTABLISH_SIGNAL</h2>
            <p className="font-code-sm text-code-sm text-text-muted">LOC_ID: 127.0.0.1 // STATUS: AWAITING_INPUT</p>
          </div>
          <div className="text-left md:text-right">
            <div className="font-code-sm text-code-sm text-terminal-green flex items-center justify-start md:justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
              AUTH_STATE: ENCRYPTED
            </div>
            <div className="font-code-sm text-code-sm text-text-muted mt-1">
              LATENCY: 14ms
            </div>
          </div>
        </div>
        
        {/* Terminal Form */}
        <div className="bg-surface-pitch border border-subtle terminal-glow p-gutter md:p-12 relative">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terminal-green"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-terminal-green"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-terminal-green"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terminal-green"></div>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Field 01 */}
            <div className="group relative">
              <label className="block font-label-caps text-label-caps text-terminal-green mb-4" htmlFor="user_identifier">
                [01] USER_IDENTIFIER
              </label>
              <div className="flex items-center gap-4">
                <span className="font-code-sm text-code-sm text-text-muted">&gt;</span>
                <input 
                  id="user_identifier" 
                  type="text" 
                  placeholder="ENTER_NAME..." 
                  className="w-full bg-transparent border-0 border-b border-subtle focus:border-terminal-green focus:ring-0 font-code-sm text-code-sm py-2 placeholder:text-surface-container-highest transition-all text-white outline-none focus:outline-none focus:border-b-2"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
            </div>
            
            {/* Field 02 */}
            <div className="group relative">
              <label className="block font-label-caps text-label-caps text-terminal-green mb-4" htmlFor="return_addr">
                [02] RETURN_ADDR
              </label>
              <div className="flex items-center gap-4">
                <span className="font-code-sm text-code-sm text-text-muted">&gt;</span>
                <input 
                  id="return_addr" 
                  type="email" 
                  placeholder="IDENTIFY_ENDPOINT..." 
                  className="w-full bg-transparent border-0 border-b border-subtle focus:border-terminal-green focus:ring-0 font-code-sm text-code-sm py-2 placeholder:text-surface-container-highest transition-all text-white outline-none focus:outline-none focus:border-b-2"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            
            {/* Field 03 */}
            <div className="group relative">
              <label className="block font-label-caps text-label-caps text-terminal-green mb-4" htmlFor="payload_content">
                [03] PAYLOAD_CONTENT
              </label>
              <div className="flex gap-4">
                <span className="font-code-sm text-code-sm text-text-muted mt-2">&gt;</span>
                <textarea 
                  id="payload_content" 
                  rows="4" 
                  placeholder="COMPILE_MESSAGE..." 
                  className="w-full bg-transparent border border-subtle focus:border-terminal-green focus:ring-0 font-code-sm text-code-sm p-4 placeholder:text-surface-container-highest transition-all resize-none text-white outline-none focus:outline-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
            </div>
            
            {/* Execution Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-base pt-8">
              <div className="flex items-center gap-4 font-code-sm text-code-sm text-text-muted">
                <span className="animate-pulse">_</span>
                SYSTEM_READY_FOR_TRANSFER
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto bg-terminal-green text-surface-pitch font-label-caps text-label-caps px-12 py-4 hover:bg-primary transition-all flex items-center justify-center gap-3 active:scale-95 group"
              >
                EXECUTE_SIGNAL.EXE
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
        
        {/* Metadata Footer */}
        <div className="mt-base flex flex-wrap gap-x-8 gap-y-2 font-code-sm text-code-sm text-text-muted opacity-60">
          <span>BITRATE: 128kbps</span>
          <span>CIPHER: AES-256-GCM</span>
          <span>TLS_VER: 1.3</span>
          <span>SEQ_NUM: 0x4F2A</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
