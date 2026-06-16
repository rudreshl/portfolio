import Link from 'next/link'

const jobs = [
  {
    commit: 'e7a8d2c',
    head: true,
    role: 'Senior Software Engineer',
    company: 'Rezolve AI (Valueadd Softtech)',
    location: 'Pune, India',
    period: 'Dec 2020 – Present',
    duration: '5.3 Years',
    description:
      'Building scalable web applications across full-stack domains — from React.js micro-frontends and Voice AI integrations using WebRTC & LiveKit, to RESTful APIs and SQL/NoSQL backends. Led teams, owned client-facing delivery, and contributed across industries including trade compliance, real estate, and university management.',
    stack: ['React.js', 'Vue.js', 'Angular', 'Next.js', 'Node.js', 'WebRTC / LiveKit'],
  },
  {
    commit: 'a1b2c3d',
    head: false,
    role: 'Software Engineer Intern',
    company: 'Gatelength Technology',
    location: 'Bengaluru, India',
    period: 'Jul – Dec 2020',
    duration: '6 months',
    description:
      'Developed a full-stack mobile application end-to-end using React Native, Express.js, and both SQL and MongoDB databases. Gained hands-on experience across API design, UI implementation, and database integration in a fast-paced startup environment.',
    stack: ['React Native', 'Express.js', 'MongoDB', 'SQL'],
  },
]

const awards = [
  {
    title: 'Employee of the Quarter',
    org: 'Rezolve AI / Valueadd Softtech',
    date: 'January 2023',
    icon: 'emoji_events',
  },
  {
    title: 'Bravo Award',
    org: 'Rezolve AI',
    date: 'August 2024',
    icon: 'military_tech',
  },
]

export default function ExperiencePage() {
  return (
    <main className="fixed top-[36px] bottom-[26px] left-[64px] right-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="p-gutter">
        <div className="max-w-container-max mx-auto space-y-grid-unit">

          {/* Terminal Card */}
          <div className="bg-surface-container-low border border-outline-variant rounded-t overflow-hidden terminal-glow">
            <div className="bg-surface-container-high px-4 py-2 flex justify-between items-center border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed-dim text-lg">terminal</span>
                <span className="font-code-block text-code-block text-on-surface-variant">experience_log.git</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-outline-variant opacity-50" />
                <div className="w-3 h-3 rounded-full bg-outline-variant opacity-50" />
                <div className="w-3 h-3 rounded-full bg-primary-fixed-dim" />
              </div>
            </div>

            <div className="p-8 font-code-block text-code-block leading-relaxed">
              {/* Prompt */}
              <div className="mb-8">
                <p className="text-primary-fixed-dim">guest@rudresh:~$ git log --graph --oneline --decorate</p>
                <p className="text-outline text-xs mt-1">Fetching remote career history...</p>
              </div>

              {/* Timeline */}
              <div className="relative pl-12">
                <div className="absolute left-[20px] top-0 bottom-0 w-px bg-outline-variant" />

                {jobs.map((job) => (
                  <div key={job.commit} className="relative mb-10 group">
                    {/* Node */}
                    <div className={`absolute left-[-32px] top-1.5 w-6 h-6 rounded-full bg-surface-container z-10 flex items-center justify-center ${job.head ? 'border-2 border-primary-container' : 'border-2 border-outline-variant'}`}>
                      <div className={`w-2 h-2 rounded-full ${job.head ? 'bg-primary-container shadow-[0_0_8px_#00f5ff]' : 'bg-outline-variant'}`} />
                    </div>

                    <div className={`space-y-4 bg-surface-container-lowest p-6 border-l-4 ${job.head ? 'border-primary-container' : 'border-outline-variant'}`}>
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                        <div>
                          <p className={`text-xs mb-1 ${job.head ? 'text-primary-container' : 'text-outline'}`}>
                            commit {job.commit}{job.head ? ' (HEAD → main)' : ''}
                          </p>
                          <h2 className="font-headline-md text-headline-md text-on-surface">{job.role}</h2>
                          <p className={`font-body-lg text-body-lg font-bold mt-0.5 ${job.head ? 'text-primary' : 'text-on-surface-variant'}`}>
                            {job.company}
                          </p>
                          <p className="text-xs text-outline mt-0.5">{job.location}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 shrink-0">
                          <span className={`px-2 py-1 border text-[10px] rounded-full ${job.head ? 'bg-[#324467] border-primary-container text-primary-container' : 'border-outline-variant text-on-surface-variant'}`}>
                            {job.period}
                          </span>
                          <span className="px-2 py-1 bg-surface-container border border-outline-variant text-on-surface-variant text-[10px] rounded-full">
                            {job.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="flex items-start gap-3 text-on-surface-variant">
                        <span className={`shrink-0 ${job.head ? 'text-primary-container' : 'text-outline'}`}>&gt;</span>
                        <p className="text-[13px] leading-relaxed">{job.description}</p>
                      </div>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {job.stack.map((s) => (
                          <span key={s} className="px-2 py-0.5 bg-surface-container-high border border-outline-variant text-on-surface-variant text-[10px]">
                            --{s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* End of Log */}
                <div className="flex items-center gap-2 mt-4 text-outline">
                  <span className="material-symbols-outlined text-sm">block</span>
                  <span>(END)</span>
                  <span className="w-2 h-4 bg-primary-container cursor-blink ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-surface-container-low border border-outline-variant overflow-hidden">
            <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-outline-variant">
              <span className="material-symbols-outlined text-primary-fixed-dim text-lg">trophy</span>
              <span className="font-code-block text-code-block text-on-surface-variant">awards_and_recognitions.sh</span>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awards.map((award) => (
                <div key={award.title} className="flex items-start gap-4 p-5 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-highest/40 transition-colors">
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-primary-container bg-[#324467]">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">{award.icon}</span>
                  </div>
                  <div>
                    <p className="font-headline-md text-[15px] text-primary">{award.title}</p>
                    <p className="text-[12px] text-on-surface-variant font-code-block mt-0.5">{award.org}</p>
                    <p className="text-[11px] text-outline font-code-block mt-1">{award.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2 bg-surface-container border border-outline-variant p-6 rounded relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-primary font-bold">--system-metrics</h3>
                <span className="material-symbols-outlined text-outline">monitoring</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Uptime', value: '5.3y' },
                  { label: 'PRs Reviewed', value: '1.2k+' },
                  { label: 'Projects', value: '5' },
                  { label: 'Status', value: 'Active' },
                ].map((metric) => (
                  <div key={metric.label} className="border border-outline-variant p-4 text-center">
                    <p className="text-[10px] text-outline uppercase">{metric.label}</p>
                    <p className="text-headline-md text-primary-container">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant p-6 rounded flex flex-col justify-center">
              <p className="text-on-surface-variant text-body-sm mb-4">
                Interested in collaboration or system integration?
              </p>
              <Link
                href="/contact"
                className="bg-primary-container text-on-primary-container py-2 font-bold hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                &gt; run contact.sh
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
