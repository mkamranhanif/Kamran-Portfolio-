import { Cloud, PenTool } from 'lucide-react';
import usePortfolioStore from '../store/usePortfolioStore';

const About = () => {
  const personalInfo = usePortfolioStore((state) => state.personalInfo);

  return (
    <section id="about" className="mx-auto flex min-h-screen max-w-container-max items-center px-gutter py-section-gap">
      <div className="grid w-full grid-cols-1 items-start gap-section-gap md:grid-cols-12">
        {/* Side A: High-fidelity Headshot */}
        <div className="sticky top-32 md:col-span-5">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-none bg-terminal-green opacity-20 transition-opacity duration-500 group-hover:opacity-40"></div>
            <div className="border-subtle relative flex aspect-[4/5] items-center justify-center overflow-hidden border bg-surface-container-lowest">
              <img
                alt="Professional Technical Headshot"
                className="h-full w-full object-cover brightness-75 contrast-125 grayscale transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWMlKdMPW9t_BpvrFaigXwgit7-4nDVxtZcuZsvvhzmwUPFGkwOiMXlGOXPVJpiVqKQqnHG22HsYz_O9dZIrQeN4a52EFMGg8-QCSW7T1Xz9x8I0sSQAQt0_vAopbybzu-QJKkFquSiCAusA5CP-A8ucKhuyaPUYojaysnjBY7KFuJFpppqa92YymGjOALjaM1OTanSXY5l1m_JSCIT0LB-s5kRn0BApDgO0H9_SxqgPlDY-3AT6ydDjbthysmBrCjz6OxvB9YuKI"
              />
              {/* Overlay metadata */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="mb-1 flex items-center gap-2 font-code-sm text-code-sm text-terminal-green">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-terminal-green"></span>
                  STATUS: ACTIVE_DEVELOPER
                </div>
                <div className="font-label-caps text-[10px] text-text-muted">
                  LOC: 127.0.0.1 // SECURE_NODE
                </div>
              </div>
            </div>
            {/* Decorative technical elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-terminal-green/30"></div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-terminal-green/30"></div>
          </div>
        </div>

        {/* Side B: Bio & Information Architecture */}
        <div className="space-y-12 md:col-span-7">
          {/* Headline */}
          <header>
            <div className="mb-4 font-label-caps text-label-caps text-terminal-green">PROFILE.IDENTIFIER</div>
            <h2 className="mb-2 font-display-lg text-4xl uppercase md:text-display-lg">{personalInfo.role}</h2>
            <div className="h-1 w-24 bg-terminal-green"></div>
          </header>

          {/* Bio */}
          <section className="space-y-6">
            <div className="font-code-sm text-code-sm text-terminal-green opacity-60">root@portfolio:~$ cat bio.txt</div>
            <p className="max-w-prose font-body-base text-body-base leading-relaxed text-on-surface-variant">
              {personalInfo.bio}
            </p>
          </section>

          {/* Education */}
          <section className="border-subtle relative space-y-6 border-l pl-8">
            <div className="absolute left-[-5px] top-0 h-[10px] w-[10px] bg-terminal-green"></div>
            <div className="font-label-caps text-label-caps text-terminal-green">ACADEMIC_FOUNDATION</div>
            <div className="group">
              <h3 className="mb-1 font-headline-md text-2xl transition-colors group-hover:text-terminal-green">B.S. Information Technology</h3>
              <p className="font-body-base text-body-base text-text-muted">University of Jhang</p>
              <div className="mt-4 flex gap-4">
                <span className="border-subtle border bg-surface-container-high px-3 py-1 font-code-sm text-code-sm">CGPA: 3.49/4.0</span>
                <span className="border-subtle border bg-surface-container-high px-3 py-1 font-code-sm text-code-sm">Present</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};

export default About;
