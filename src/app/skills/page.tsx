const categories = [
  {
    key: 'frontend',
    label: 'Frontend',
    file: 'frontend.json',
    icon: 'web',
    color: 'text-primary-fixed-dim',
    border: 'border-primary-fixed-dim',
    bg: 'bg-surface-container-highest',
    cmd: 'list-skills --category=frontend',
    cmdColor: 'text-primary-fixed-dim',
    skills: [
      'React.js', 'Next.js', 'Vue.js', 'PWA', 'JavaScript (ES6+)', 'TypeScript',
      'Redux', 'Redux Toolkit', 'React Query (TanStack Query)', 'Context API',
      'React Hooks', 'Tailwind CSS', 'Strapi', 'HTML5', 'CSS3', 'Responsive Design',
    ],
  },
  {
    key: 'architecture',
    label: 'Frontend Architecture & Performance',
    file: 'architecture.json',
    icon: 'architecture',
    color: 'text-secondary-fixed-dim',
    border: 'border-secondary-fixed-dim',
    bg: 'bg-surface-container-highest',
    cmd: 'list-skills --category=architecture',
    cmdColor: 'text-secondary-fixed-dim',
    skills: [
      'Component Architecture', 'State Management', 'Performance Optimization',
      'Code Splitting', 'Lazy Loading', 'Micro Frontends',
    ],
  },
  {
    key: 'testing',
    label: 'Testing',
    file: 'testing.json',
    icon: 'bug_report',
    color: 'text-tertiary',
    border: 'border-tertiary',
    bg: 'bg-surface-container-highest',
    cmd: 'list-skills --category=testing',
    cmdColor: 'text-tertiary',
    skills: ['Jest', 'Cypress', 'Unit Testing'],
  },
  {
    key: 'backend',
    label: 'Backend',
    file: 'backend.json',
    icon: 'dns',
    color: 'text-primary',
    border: 'border-primary',
    bg: 'bg-surface-container-highest',
    cmd: 'list-skills --category=backend',
    cmdColor: 'text-primary',
    skills: ['Node.js', 'NestJS', 'Express.js', 'Java (Spring Boot)', 'RESTful APIs', 'GraphQL'],
  },
  {
    key: 'databases',
    label: 'Databases',
    file: 'databases.json',
    icon: 'storage',
    color: 'text-secondary',
    border: 'border-secondary',
    bg: 'bg-surface-container-highest',
    cmd: 'list-skills --category=databases',
    cmdColor: 'text-secondary',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'NoSQL'],
  },
  {
    key: 'devops',
    label: 'Cloud & DevOps',
    file: 'devops.json',
    icon: 'cloud',
    color: 'text-primary-container',
    border: 'border-primary-container',
    bg: 'bg-surface-container-highest',
    cmd: 'list-skills --category=devops',
    cmdColor: 'text-primary-container',
    skills: ['Git', 'GitHub', 'Jira', 'Docker', 'CI/CD', 'Vercel', 'GCP', 'Postman'],
  },
  {
    key: 'ai',
    label: 'AI & Others',
    file: 'ai.json',
    icon: 'auto_awesome',
    color: 'text-primary-fixed-dim',
    border: 'border-primary-fixed-dim',
    bg: 'bg-[#324467]',
    cmd: 'list-skills --category=ai',
    cmdColor: 'text-primary-fixed-dim',
    skills: [
      'GenAI Integrations', 'Voice AI', 'WebRTC', 'LiveKit',
      'Claude Code', 'Codex', 'Cursor', 'Google Stitch', 'Warp',
      'Lovable', 'n8n', 'Google Colab', 'Figma',
    ],
  },
]

export default function SkillsPage() {
  return (
    <main className="main-offset ml-[64px] pt-[36px] pb-[26px] min-h-screen">
      <div className="max-w-container-max mx-auto p-margin-desktop space-y-10">

        {/* Page Header */}
        <section className="border-b border-outline-variant pb-gutter">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            system_capabilities.config<span className="text-primary-fixed-dim cursor-blink">█</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant mt-2 max-w-2xl">
            Defining the architectural boundaries and operational stack for{' '}
            <span className="text-primary-fixed-dim">Rudresh Lagwankar</span>.
            Optimizing for performance, scalability, and AI-driven workflows.
          </p>
        </section>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="bg-surface-container rounded-lg border border-outline-variant overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined ${cat.color} text-sm`}>{cat.icon}</span>
                  <span className="font-label-md text-on-surface">{cat.file}</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Category label + prompt */}
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant text-xs">guest@rudresh:~$</span>
                  <span className={`font-code-block text-xs ${cat.cmdColor}`}>{cat.cmd}</span>
                </div>

                <div>
                  <p className={`font-code-block text-[10px] uppercase mb-3 ${cat.color} opacity-70`}>
                    // {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 ${cat.bg} border ${cat.border} ${cat.color} rounded-full font-code-block text-xs`}
                      >
                        --{skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Info */}
        <div className="bg-surface-container-low border border-outline-variant p-gutter rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[120px]">info</span>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-label-md text-primary-fixed-dim uppercase mb-2">Primary Directive</h3>
              <p className="text-on-surface-variant font-code-block text-sm">
                Building software that bridges the gap between high-level AI workflows and low-level system stability.
              </p>
            </div>
            <div>
              <h3 className="font-label-md text-secondary uppercase mb-2">Current Focus</h3>
              <p className="text-on-surface-variant font-code-block text-sm">
                Voice AI integrations with WebRTC & LiveKit, and AI-driven automation using n8n and GenAI tools.
              </p>
            </div>
            <div>
              <h3 className="font-label-md text-on-surface uppercase mb-2">System Status</h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-code-block text-xs">AVAILABLE_FOR_HIRE = true</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-code-block text-xs">VIBE_CHECK = passed</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
