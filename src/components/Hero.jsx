import { useEffect, useState } from 'react';
import { ArrowRight, Code } from 'lucide-react';
import usePortfolioStore from '../store/usePortfolioStore';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const personalInfo = usePortfolioStore((state) => state.personalInfo);
  const text = `[${personalInfo.name.toUpperCase().replace(/\s+/g, '_')}]`;

  useEffect(() => {
    let i = 0;
    let typingInterval;
    const type = () => {
      if (i <= text.length) {
        setTypedText(text.substring(0, i));
        i++;
        typingInterval = setTimeout(type, 150);
      }
    };
    setTimeout(type, 1000);
    return () => clearTimeout(typingInterval);
  }, [text]);

  const handleExecute = () => {
    document.body.style.opacity = '0.5';
    setTimeout(() => {
        document.body.style.opacity = '1';
        window.location.href = '#about';
    }, 100);
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-gutter relative overflow-hidden" id="home">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terminal-green opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl w-full z-10">
        {/* System Status */}
        <div className="mb-base flex items-center gap-2">
          <span className="w-2 h-2 bg-terminal-green animate-pulse rounded-full"></span>
          <p className="font-code-sm text-code-sm text-terminal-green opacity-80 uppercase tracking-widest">System Status: Optimal</p>
        </div>
        
        {/* Hero Title */}
        <h1 className="font-display-lg text-display-lg text-white mb-8 tracking-tighter">
          SYSTEM_INITIALIZE:<br/>
          <span className="text-terminal-green typewriter">{typedText}</span>
        </h1>
        
        {/* Terminal Card */}
        <div className="bg-surface-elevated border border-subtle p-gutter terminal-glow relative mb-12">
          <div className="flex items-center gap-2 mb-4 border-b border-subtle pb-base">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-primary-container"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
            <span className="ml-4 font-code-sm text-code-sm text-text-muted">bash — 80x24</span>
          </div>
          <div className="font-code-sm text-code-sm space-y-2">
            <p className="text-terminal-green"><span className="text-white opacity-50">root@sys_portfolio:~$</span> fetch --profile</p>
            <p className="text-on-surface-variant leading-relaxed">
              &gt; Role: {personalInfo.role}<br/>
              &gt; Action: {personalInfo.greeting}<br/>
              &gt; Location: 127.0.0.1 (Remote)<br/>
              &gt; Status: Available for High-Impact Projects
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <button onClick={handleExecute} className="bg-terminal-green text-black font-label-caps text-label-caps px-10 py-5 rounded-none hover:opacity-90 transition-all hover:translate-x-1 active:scale-95 flex items-center gap-4">
            EXECUTE_ENVIRONMENT
            <ArrowRight size={18} />
          </button>
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-terminal-green transition-colors flex items-center gap-2" href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Code size={18} />
              <span className="font-label-caps text-label-caps">VIEW_SOURCE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Absolute Metadata */}
      <div className="absolute bottom-12 left-gutter hidden lg:block">
        <p className="font-code-sm text-code-sm text-text-muted rotate-90 origin-left tracking-widest">
            V.4.0.2_STABLE
        </p>
      </div>
      <div className="absolute bottom-12 right-gutter hidden lg:block text-right">
        <p className="font-code-sm text-code-sm text-text-muted tracking-widest">
            LATENCY: 14MS<br/>
            UPTIME: 99.9%
        </p>
      </div>
    </section>
  );
};

export default Hero;
