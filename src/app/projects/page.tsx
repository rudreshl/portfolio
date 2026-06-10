import Link from 'next/link'

const projects = [
  {
    title: 'Xirify',
    tags: ['--on-demand', '--full-stack'],
    icon: 'terminal',
    description: 'High-performance on-demand service platform connecting local businesses with real-time consumer needs.',
    role: 'Full Stack Developer',
    stack: 'React JS, Node JS, MongoDB',
    stats: 'Team: 12 | Duration: 14mo',
    highlights: [
      'Real-time tracking enabled via WebSockets',
      'Geospatial indexing for service discovery',
    ],
    border: 'border-b border-r',
  },
  {
    title: 'TCAS',
    tags: ['--compliance', '--fintech'],
    icon: 'security',
    description: 'Enterprise-grade Trade Compliance portal for cross-border transaction monitoring and auditing.',
    role: 'Full Stack Developer',
    stack: 'React, Next.js, Spring Boot',
    stats: 'Team: 8 | Duration: 18mo',
    highlights: [
      'Automated multi-region audit logging',
      'Scalable Java microservices architecture',
    ],
    border: 'border-b',
  },
  {
    title: 'Procasa',
    tags: ['--onboarding', '--team-lead'],
    icon: 'groups',
    description: 'Real estate agent onboarding system streamlining the verification and legal workflow for brokers.',
    role: 'Team Lead',
    stack: 'Vue JS, JavaScript',
    stats: 'Team: 5 | Duration: 9mo',
    highlights: [
      'Managed end-to-end component library',
      'Complex state management for 40+ forms',
    ],
    border: 'border-r',
  },
  {
    title: 'UMS Portal',
    tags: ['--edu-tech', '--workflow'],
    icon: 'school',
    description: 'Workflow management platform for large-scale academic institutions handling enrollment and results.',
    role: 'Full Stack Developer',
    stack: 'Angular, Node.js',
    stats: 'Team: 15 | Duration: 24mo',
    highlights: [
      'RESTful API optimization for 50k users',
      'Legacy system migration to Node environment',
    ],
    border: '',
  },
]

export default function ProjectsPage() {
  return (
    <main className="ml-[80px] mt-[40px] mb-[30px] p-10 min-h-[calc(100vh-70px)] bg-surface-dim relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 opacity-5 pointer-events-none">
        <span className="font-headline-lg text-[120px] select-none">PROJECTS.EXE</span>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg text-primary-fixed-dim flex items-center">
            guest@rudresh:~$ ls -la /projects
            <span className="cursor-blink-sm" />
          </h1>
          <p className="font-body-lg text-on-surface-variant mt-2 max-w-2xl">
            Detailed technical overview of production-grade systems and architectural implementations.
          </p>
        </div>

        {/* Terminal OS Window */}
        <div className="bg-surface-container rounded-lg border border-outline-variant os-window-shadow overflow-hidden">
          {/* Window Header */}
          <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[16px]">folder_open</span>
              <span className="text-label-md font-label-md text-on-surface">repository_view.sh</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-surface-variant" />
              <div className="w-3 h-3 rounded-full bg-surface-variant" />
              <div className="w-3 h-3 rounded-full bg-primary-container opacity-50" />
            </div>
          </div>

          {/* Card Grid 2x2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`p-8 ${project.border} border-outline-variant hover:bg-surface-bright transition-colors group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-1">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 bg-[#324467] border border-primary-fixed-dim text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                    {project.icon}
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant mb-6">{project.description}</p>
                <div className="bg-surface-container-lowest p-4 rounded border border-outline-variant font-code-block text-code-block space-y-1">
                  <div className="flex gap-2">
                    <span className="text-primary-fixed-dim">ROLE:</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary-fixed-dim">STACK:</span>
                    <span>{project.stack}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-primary-fixed-dim">STATS:</span>
                    <span>{project.stats}</span>
                  </div>
                  <div className="mt-2 text-secondary-fixed-dim border-t border-outline-variant pt-2">
                    {project.highlights.map((h) => (
                      <div key={h}>&gt; {h}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Footer Status */}
          <div className="bg-surface-container-low px-4 py-2 flex items-center gap-6 border-t border-outline-variant text-[10px] font-code-block text-on-surface-variant">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-container" /> System Online
            </div>
            <div className="flex items-center gap-1">Projects: 4</div>
            <div className="flex items-center gap-1">Load: 0.24ms</div>
            <div className="ml-auto">UTF-8</div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-primary-container text-on-primary-container px-8 py-3 font-headline-md text-[14px] flex items-center gap-2 hover:shadow-[0_0_12px_#00f5ff] transition-all active:scale-95">
            <span className="material-symbols-outlined">download</span>
            &gt; DOWNLOAD_RESUME.PDF
          </button>
        </div>
      </div>
    </main>
  )
}
