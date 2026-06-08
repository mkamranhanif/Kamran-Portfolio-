import usePortfolioStore from '../store/usePortfolioStore';
import { ArrowUpRight, Terminal, Share2 } from 'lucide-react';

const PROJECT_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1jmB9FwmHwIw3BaqSJLrwngETarE3et-C_z_0RJq9QaIKBsC8khx01I2kM_Rem6TaVSm9ILmjXS0JE3LWF5W4Yvo1lA9eAmr9JEskbVzs_hs54nNRKQGcHcBUft0tmpKztTeN8lNsfUaAcfmAK855T5Cn0ejcBWsROEr-HObJi_u3D_2AFsiTccpt4Gq70cz3jB_vnn4wWSIQfULhStllzevjm3D3UMd1TeElA37P2UbPhevw03bnGgTqmdyDK_dBAysbMFivv8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuMD2kBWr6XK-PMWwmZHuS6tvamQdb-0YnA1kDD5W68sLgkOb1cyvEIz182z7suQDD7aOHP3eJn9pYdHIL-454J6Gsd5QmWC-Oj5GnLFzn-sVdJG3GWnJNv9zIltqgEgNpgghywV3YKMEQZ6z_zpeRY0pxUwnYtNvPopWyzpy3x5_ZlOYdn73BAvmBF1M9KgTl85savETa7FA7IeuqxXeoftwP00ULLJ33aOXWXvW-K53owLtw_A1AmFJPH8aOdrZXjlO_guqj0Fg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEt5FglMpcKbwG1woPPf0-a6nnICtk2eNda0GhMsuXzNgnQyonuNIJqsMiYE735xGDl1315bfAd2EW_knC-FYct8ljEAY9syXq9j-YaY1bUsC0-ItwZUOqdF6i7CLUuTM0Rv9NhSXGNzQABrM1MzRZMZHcFtOM32u2vdTmyg6YiBiCN1-BB72Qq2Xr8ybl63J9qe4nAI0RFvGlLvCA7RD_YpRKMpmn7lirgoPSAJ3QXWaO0clHyWkCBrTaB3nrCoX1BrJNC516QaQ"
];

const Projects = () => {
  const projects = usePortfolioStore((state) => state.projects);

  return (
    <section id="projects" className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 className="font-headline-md text-3xl md:text-headline-md text-white mb-2 flex items-center gap-4">
            <span className="text-terminal-green">02.</span> DEPLOYED_PROJECTS
          </h2>
          <p className="text-on-surface-variant font-body-base text-body-base opacity-70">A selection of recent technical implementations.</p>
        </div>
        <a className="font-label-caps text-label-caps text-terminal-green flex items-center gap-2 hover:underline" href={usePortfolioStore(s => s.personalInfo.github)} target="_blank" rel="noopener noreferrer">
          VIEW_ALL_REPOS <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article key={index} className="group relative bg-surface-pitch border border-subtle p-base hover:border-terminal-green transition-all duration-300 flex flex-col">
            <div className="aspect-video mb-base overflow-hidden relative">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
                src={PROJECT_IMAGES[index % PROJECT_IMAGES.length]} 
                alt={project.title}
              />
              <div className="absolute inset-0 bg-terminal-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-md text-xl text-white line-clamp-1">{project.title.toUpperCase()}</h3>
                <span className="font-code-sm text-code-sm text-terminal-green">{project.year}</span>
              </div>
              <p className="text-on-surface-variant font-body-base text-body-base mb-6 line-clamp-3 flex-grow">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="font-label-caps text-[10px] text-terminal-green bg-terminal-green/10 px-2 py-0.5">{tech.toUpperCase()}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto border-t border-subtle pt-4">
                <div className="flex gap-4">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-terminal-green cursor-pointer">
                    <Terminal size={18} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-terminal-green cursor-pointer">
                    <Share2 size={18} />
                  </a>
                </div>
                <span className="font-label-caps text-[10px] text-text-muted border border-subtle px-2 py-0.5">{project.type}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
