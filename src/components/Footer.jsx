import usePortfolioStore from '../store/usePortfolioStore';

const Footer = () => {
  const personalInfo = usePortfolioStore((state) => state.personalInfo);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-pitch border-t border-subtle mt-section-gap">
      <div className="max-w-container-max mx-auto px-gutter py-12 flex flex-col md:flex-row justify-between items-center gap-base">
        <div className="font-label-caps text-label-caps text-terminal-green flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-green"></span>
            PORT_8080:LISTENING
          </div>
          <span className="hidden md:inline">|</span>
          © {currentYear} {personalInfo.name.toUpperCase()}. ROOT@PORTFOLIO:~#
        </div>
        <div className="flex gap-8">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="font-code-sm text-code-sm text-text-muted hover:text-terminal-green hover:underline decoration-terminal-green transition-all duration-300">Github</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="font-code-sm text-code-sm text-text-muted hover:text-terminal-green hover:underline decoration-terminal-green transition-all duration-300">LinkedIn</a>
          <a href="#contact" className="font-code-sm text-code-sm text-text-muted hover:text-terminal-green hover:underline decoration-terminal-green transition-all duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
