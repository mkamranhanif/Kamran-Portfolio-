import usePortfolioStore from '../store/usePortfolioStore';
import { Layout, Shield, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = usePortfolioStore((state) => state.skills);

  return (
    <section id="skills" className="max-w-container-max mx-auto px-gutter py-section-gap">
      <h2 className="font-headline-md text-3xl md:text-headline-md text-white mb-12 flex items-center gap-4">
        <span className="text-terminal-green">01.</span> CORE_CAPABILITIES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        
        {/* Bento Item 1: Large Focus */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layout size={120} className="text-white" />
          </div>
          <span className="font-label-caps text-label-caps text-terminal-green mb-4 block">FRONTEND</span>
          <h3 className="font-headline-md text-2xl text-white mb-4">UI/UX Architecture</h3>
          <p className="text-on-surface-variant font-body-base text-body-base max-w-md">
            Specializing in interactive and dynamic interfaces using modern frameworks. Implementing responsive designs and scalable component structures.
          </p>
          <div className="mt-12 space-y-4">
            <div className="w-full bg-surface-container h-1">
              <div className="bg-terminal-green h-full w-[95%]"></div>
            </div>
            <div className="flex justify-between font-code-sm text-code-sm text-text-muted">
              <span>REACT.JS</span>
              <span>95%</span>
            </div>
          </div>
        </div>

        {/* Bento Item 2: Square */}
        <div className="md:col-span-2 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-terminal-green mb-2 block">LANGUAGES</span>
            <h3 className="text-xl font-headline-md text-white">Core Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.find(s => s.category === "Languages")?.items.map(skill => (
              <span key={skill} className="px-2 py-1 bg-surface-container border border-subtle font-code-sm text-code-sm text-on-surface-variant">
                {skill.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* Bento Item 3 */}
        <div className="md:col-span-1 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group">
          <Database size={32} className="text-terminal-green mb-4 block" />
          <h3 className="text-lg font-headline-md text-white mb-2">Backend & Services</h3>
          <div className="flex flex-wrap gap-2 mt-2">
             {skills.find(s => s.category === "Services / DBs")?.items.map(skill => (
              <span key={skill} className="font-code-sm text-xs text-text-muted block w-full">{skill}</span>
            ))}
          </div>
        </div>

        {/* Bento Item 4 */}
        <div className="md:col-span-1 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group">
          <Terminal size={32} className="text-terminal-green mb-4 block" />
          <h3 className="text-lg font-headline-md text-white mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2 mt-2">
             {skills.find(s => s.category === "Tools / Services")?.items.map(skill => (
              <span key={skill} className="font-code-sm text-xs text-text-muted block w-full">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
