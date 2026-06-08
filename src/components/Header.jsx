import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';
import usePortfolioStore from '../store/usePortfolioStore';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const personalInfo = usePortfolioStore((state) => state.personalInfo);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-subtle' : 'bg-surface-pitch border-b border-subtle'}`}>
      <nav className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-16">
        <div className="font-label-caps text-label-caps text-terminal-green tracking-widest uppercase flex items-center gap-2">
          <Terminal size={18} />
          SYS_PORTFOLIO
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-terminal-green transition-colors" href="#projects">Projects</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-terminal-green transition-colors" href="#skills">Skills</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-terminal-green transition-colors" href="#contact">Terminal</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-terminal-green transition-colors" href="#about">About</a>
        </div>
        <div className="flex items-center gap-4">
          <a href={personalInfo.resumeLink || "#"} className="font-label-caps text-label-caps text-terminal-green border border-terminal-green px-4 py-2 hover:bg-terminal-green hover:text-black transition-all active:scale-95 inline-block">
            RESUME.SH
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
