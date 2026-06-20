const projects = [
  {
    id: '01',
    title: 'Restaurant Application with Voice AI Agent',
    period: 'Mar 2026 – Present',
    duration: '3 months',
    stack: ['React.js', 'PWA', 'Tailwind CSS', 'Redux Toolkit', 'WebRTC', 'LiveKit'],
    team: '8–10',
    tags: ['--voice-ai', '--pwa', '--real-time'],
    icon: 'mic',
    active: true,
    highlights: [
      'Developing a responsive Restaurant Management Application integrated with a Voice AI Agent, enabling users to interact via real-time voice commands using WebRTC and LiveKit for low-latency audio streaming.',
      'Developed reusable React components using React Hooks, Context API, and Redux Toolkit for efficient state management across the application.',
      'Implemented code splitting and lazy loading techniques to improve application performance and reduce initial load time.',
      'Built responsive and pixel-perfect user interfaces using React.js, Tailwind CSS, and PWA technologies based on Figma designs.',
      'Collaborated with backend teams to integrate REST APIs and real-time communication using WebRTC and LiveKit.',
      "Leveraging LiveKit's WebRTC infrastructure to handle real-time peer-to-peer communication between the Voice AI Agent and end users with minimal latency.",
    ],
  },
  {
    id: '02',
    title: 'University Management System',
    period: 'Jun 2025 – Mar 2026',
    duration: '9 months',
    stack: ['Angular', 'Node.js', 'SQL Server'],
    team: '5–6',
    tags: ['--edu-tech', '--workflow'],
    icon: 'school',
    active: false,
    highlights: [
      'Managed student and admin portals implementing course admissions, enrollment, scheduling, and academic workflow automation.',
      'Designed and modified database schemas, created and updated stored procedures in SQL Server to support complex academic data models.',
      'Developed and maintained RESTful APIs connecting front-end and back-end functionalities with high reliability.',
      'Performed testing, debugging, and code optimization to ensure smooth and reliable application performance.',
    ],
  },
  {
    id: '03',
    title: 'Agent Onboarding — Real Estate Agent Management System (Procasa)',
    period: 'Mar 2024 – Jun 2025',
    duration: '15 months',
    stack: ['Vue.js', 'JavaScript'],
    team: '6–8',
    tags: ['--onboarding', '--team-lead'],
    icon: 'groups',
    active: false,
    highlights: [
      'Led a team of 5 developers as Team Lead, driving end-to-end development of a centralized agent onboarding system for a multi-role real estate organization.',
      'Collaborated with stakeholders to gather requirements and translated them into scalable technical solutions across hierarchical organizational roles.',
      'Oversaw frontend design implementation, data filtration, API integrations, and code quality while enforcing clean code practices.',
      'Managed sprint timelines, participated in client meetings, mentored team members, and resolved technical challenges to ensure smooth delivery.',
    ],
  },
  {
    id: '04',
    title: 'TCAS — Trade Compliance As a Service',
    period: 'Jan 2022 – Mar 2024',
    duration: '26 months',
    stack: ['React.js', 'Next.js', 'Redux Toolkit', 'Java (Spring Boot)', 'MySQL'],
    team: '10–12',
    tags: ['--compliance', '--fintech', '--full-stack'],
    icon: 'security',
    active: false,
    highlights: [
      'Contributed as Full Stack Developer on a trade compliance portal offering entity screening, commodity classification, license screening, and rules publication services.',
      'Developed scalable micro-frontend modules using React.js, Next.js, Redux Toolkit, and React Hooks to support enterprise-scale application architecture.',
      'Improved application performance through lazy loading, code splitting, and component optimization techniques.',
      'Implemented reusable component architecture and state management patterns for enterprise-scale applications.',
      'Participated in unit testing and end-to-end testing using Cypress to ensure application reliability.',
      'Collaborated closely with solution architects and cross-functional teams, participating in client discussions to align technical solutions with business needs.',
    ],
  },
  {
    id: '05',
    title: 'Xirify — On-Demand Service & Delivery Platform',
    period: 'Dec 2020 – Jan 2022',
    duration: '13 months',
    stack: ['React.js', 'Node.js', 'MongoDB'],
    team: '8–10',
    tags: ['--on-demand', '--full-stack'],
    icon: 'delivery_dining',
    active: false,
    highlights: [
      'Developed and optimized backend APIs using Node.js and MongoDB for an on-demand service platform connecting customers with local service partners.',
      'Implemented in-app push notification systems and integrated secure payment gateways to ensure reliable transaction processing.',
      'Designed and managed database schemas with complex data manipulations to support scalability and high performance.',
      'Built responsive UI components with data filtration and API integrations on the frontend to enhance the user experience.',
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="main-offset ml-[64px] mt-[36px] mb-[26px] p-10 min-h-[calc(100vh-62px)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-20 opacity-5 pointer-events-none select-none">
        <span className="font-headline-lg text-[120px]">PROJECTS.EXE</span>
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

          {/* Project List */}
          <div className="divide-y divide-outline-variant">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-8 hover:bg-surface-bright transition-colors group"
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 w-10 h-10 flex items-center justify-center border ${project.active ? 'border-primary-container bg-[#324467]' : 'border-outline-variant bg-surface-container-high'}`}>
                      <span className={`material-symbols-outlined text-[20px] ${project.active ? 'text-primary-container' : 'text-on-surface-variant'}`}>
                        {project.icon}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-code-block text-[10px] text-outline">[{project.id}]</span>
                        {project.active && (
                          <span className="px-2 py-0.5 bg-[#324467] border border-primary-container text-primary-container text-[10px] rounded-full">
                            ACTIVE
                          </span>
                        )}
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-surface-container-high border border-outline-variant text-on-surface-variant rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className={`font-headline-md text-headline-md leading-snug ${project.active ? 'text-primary' : 'text-on-surface'}`}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0 md:text-right">
                    <span className="px-2 py-1 border border-outline-variant text-on-surface-variant text-[10px] font-code-block rounded-full">
                      {project.period}
                    </span>
                    <span className="px-2 py-1 border border-outline-variant text-on-surface-variant text-[10px] font-code-block rounded-full">
                      {project.duration}
                    </span>
                    <span className="px-2 py-1 border border-outline-variant text-on-surface-variant text-[10px] font-code-block rounded-full">
                      team: {project.team}
                    </span>
                  </div>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5 pl-14">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-surface-container-lowest border border-outline-variant text-on-surface-variant text-[11px] font-code-block"
                    >
                      --{s}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="pl-14 space-y-2 font-code-block text-[13px] text-on-surface-variant">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className={`shrink-0 mt-0.5 ${project.active ? 'text-primary-container' : 'text-outline'}`}>&gt;</span>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Footer Status */}
          <div className="bg-surface-container-low px-4 py-2 flex items-center gap-6 border-t border-outline-variant text-[10px] font-code-block text-on-surface-variant">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary-container" /> System Online
            </div>
            <div className="flex items-center gap-1">Projects: 5</div>
            <div className="flex items-center gap-1">Load: 0.24ms</div>
            <div className="ml-auto">UTF-8</div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="Rudresh_Lagwankar_Resume.pdf"
            download="Rudresh_Lagwankar_Resume.pdf"
            className="bg-primary-container text-on-primary-container px-8 py-3 font-headline-md text-[14px] flex items-center gap-2 hover:shadow-[0_0_12px_#00f5ff] transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">download</span>
            &gt; DOWNLOAD_RESUME.PDF
          </a>
        </div>
      </div>
    </main>
  )
}
