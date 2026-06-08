import usePortfolioStore from '../store/usePortfolioStore';
import { Layout, Shield, Database, Terminal, Server, Layers, Code2, Braces } from 'lucide-react';

const MernProgressBar = ({ label, percent, delay }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between font-code-sm text-code-sm text-text-muted">
      <span>{label}</span>
      <span className="text-terminal-green">{percent}%</span>
    </div>
    <div className="w-full bg-surface-container h-1.5 overflow-hidden">
      <div
        className="bg-terminal-green h-full transition-all duration-1000 ease-out"
        style={{ width: `${percent}%`, transitionDelay: `${delay}ms` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = usePortfolioStore((state) => state.skills);

  return (
    <section id="skills" className="max-w-container-max mx-auto px-gutter py-section-gap">
      <h2 className="font-headline-md text-3xl md:text-headline-md text-white mb-4 flex items-center gap-4">
        <span className="text-terminal-green">01.</span> CORE_CAPABILITIES
      </h2>
      <p className="text-on-surface-variant font-body-base text-body-base opacity-70 mb-12 max-w-2xl">
        Frontend Developer transitioning to full-stack MERN development — building end-to-end JavaScript solutions from database to UI.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto">

        {/* Bento Item 1: MERN Stack Spotlight — Large card spanning 2 cols + 2 rows */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.12] transition-opacity">
            <Layers size={140} className="text-terminal-green" />
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-label-caps text-label-caps text-terminal-green">MERN STACK</span>
            <span className="px-2 py-0.5 bg-terminal-green/10 border border-terminal-green/30 font-code-sm text-[10px] text-terminal-green">
              PRIMARY_FOCUS
            </span>
          </div>
          <h3 className="font-headline-md text-2xl text-white mb-2">Full-Stack JavaScript</h3>
          <p className="text-on-surface-variant font-body-base text-body-base max-w-md mb-8">
            End-to-end JavaScript ecosystem for building scalable, production-ready web applications — from MongoDB databases to React interfaces.
          </p>

          {/* MERN stack individual progress bars */}
          <div className="space-y-4">
            <MernProgressBar label="MONGODB" percent={60} delay={0} />
            <MernProgressBar label="EXPRESS.JS" percent={65} delay={100} />
            <MernProgressBar label="REACT.JS" percent={90} delay={200} />
            <MernProgressBar label="NODE.JS" percent={65} delay={300} />
          </div>

          {/* MERN Journey indicator */}
          <div className="mt-8 pt-4 border-t border-subtle">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span>
                <span className="font-code-sm text-[11px] text-terminal-green">ACTIVELY_LEARNING</span>
              </div>
              <span className="font-code-sm text-[11px] text-text-muted">Frontend → Full-Stack</span>
            </div>
          </div>
        </div>

        {/* Bento Item 2: Frontend Mastery */}
        <div className="md:col-span-2 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layout size={80} className="text-white" />
          </div>
          <span className="font-label-caps text-label-caps text-terminal-green mb-2 block">FRONTEND</span>
          <h3 className="text-xl font-headline-md text-white mb-3">UI/UX Architecture</h3>
          <p className="text-on-surface-variant font-body-base text-sm mb-4 max-w-sm">
            Specializing in interactive, responsive interfaces with modern component architecture and state management.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.find(s => s.category === "Frontend")?.items.map(skill => (
              <span key={skill} className="px-2 py-1 bg-surface-container border border-subtle font-code-sm text-code-sm text-on-surface-variant">
                {skill.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="w-full bg-surface-container h-1">
              <div className="bg-terminal-green h-full w-[90%]"></div>
            </div>
            <div className="flex justify-between font-code-sm text-code-sm text-text-muted">
              <span>PROFICIENCY</span>
              <span>90%</span>
            </div>
          </div>
        </div>

        {/* Bento Item 3: Languages */}
        <div className="md:col-span-2 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 size={18} className="text-terminal-green" />
              <span className="font-label-caps text-label-caps text-terminal-green">LANGUAGES</span>
            </div>
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

        {/* Bento Item 4: Backend & Databases */}
        <div className="md:col-span-1 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group">
          <Database size={28} className="text-terminal-green mb-3 block" />
          <h3 className="text-lg font-headline-md text-white mb-2">Backend & DBs</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
             {skills.find(s => s.category === "Backend & Databases")?.items.map(skill => (
              <span key={skill} className="font-code-sm text-xs text-text-muted block w-full">{skill}</span>
            ))}
          </div>
        </div>

        {/* Bento Item 5: Concepts */}
        <div className="md:col-span-1 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group">
          <Braces size={28} className="text-terminal-green mb-3 block" />
          <h3 className="text-lg font-headline-md text-white mb-2">Concepts</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
             {skills.find(s => s.category === "Concepts")?.items.map(skill => (
              <span key={skill} className="font-code-sm text-xs text-text-muted block w-full">{skill}</span>
            ))}
          </div>
        </div>

        {/* Bento Item 6: Tools & DevOps — Full width bottom strip */}
        <div className="md:col-span-2 bg-surface-elevated border border-subtle p-8 hover:border-terminal-green transition-all group">
          <div className="flex items-center gap-2 mb-3">
            <Terminal size={22} className="text-terminal-green" />
            <h3 className="text-lg font-headline-md text-white">Tools & DevOps</h3>
          </div>
          <div className="flex flex-wrap gap-2">
             {skills.find(s => s.category === "Tools & DevOps")?.items.map(skill => (
              <span key={skill} className="px-2 py-1 bg-surface-container border border-subtle font-code-sm text-[11px] text-on-surface-variant">
                {skill.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
