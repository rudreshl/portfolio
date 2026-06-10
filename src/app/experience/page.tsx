import Link from 'next/link'

export default function ExperiencePage() {
  return (
    <main className="fixed top-[36px] bottom-[26px] left-[64px] right-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="p-gutter">
        <div className="max-w-container-max mx-auto space-y-grid-unit">
          {/* Terminal Card Header */}
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
                <p className="text-primary-fixed-dim">
                  guest@rudresh:~$ git log --graph --oneline --decorate
                </p>
                <p className="text-outline text-xs mt-1">Fetching remote career history...</p>
              </div>

              {/* Timeline */}
              <div className="relative pl-12">
                {/* Vertical Line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-px bg-outline-variant" />

                {/* Entry 01 */}
                <div className="relative mb-12 group">
                  <div className="absolute left-[-32px] top-1 w-6 h-6 rounded-full bg-surface-container border-2 border-primary-container z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#00f5ff]" />
                  </div>
                  <div className="space-y-4 bg-surface-container-lowest p-6 border-l-4 border-primary-container">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h2 className="font-headline-md text-headline-md text-primary-container">
                          commit e7a8d2c (HEAD -&gt; main)
                        </h2>
                        <p className="font-body-lg text-body-lg text-on-surface font-bold mt-1">
                          Valueadd Softtech &amp; Systems Pvt. Ltd.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#324467] border border-primary-container text-primary-container text-[10px] rounded-full">
                          --software-engineer
                        </span>
                        <span className="px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface-variant text-[10px] rounded-full">
                          Dec 2020 - Present
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-on-surface-variant">
                      {[
                        'Design and implement highly scalable web applications leveraging modern framework architectures.',
                        'Lead technical coordination with cross-functional teams to align system requirements.',
                        'Conduct rigorous GitHub PR reviews maintaining high standards for code quality and security.',
                        'Architect comprehensive API documentation using Swagger/OpenAPI specifications.',
                        'Manage deployment release notes and system mindmaps for architectural visualization.',
                        'Execute deep-level debugging and performance optimization across the full software stack.',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="text-primary-container">&gt;</span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-outline-variant flex items-center gap-4">
                      <span className="text-secondary font-bold">Duration: 5.3 Years</span>
                      <span className="text-outline">|</span>
                      <div className="flex gap-2">
                        {['#nodejs', '#reactjs', '#postgresql'].map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 border border-outline-variant text-outline">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Entry 02 */}
                <div className="relative mb-12 opacity-60">
                  <div className="absolute left-[-32px] top-1 w-6 h-6 rounded-full bg-surface-container border-2 border-outline-variant z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-outline-variant" />
                  </div>
                  <div className="space-y-2 pl-4">
                    <p className="text-on-surface-variant italic">commit a1b2c3d</p>
                    <p className="font-body-sm text-body-sm text-on-surface">System Initialization Phase / Internship</p>
                    <p className="text-xs text-outline">Jul 2020 - Nov 2020</p>
                  </div>
                </div>

                {/* End of Log */}
                <div className="flex items-center gap-2 mt-12 text-outline">
                  <span className="material-symbols-outlined text-sm">block</span>
                  <span>(END)</span>
                  <span className="w-2 h-4 bg-primary-container cursor-blink ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mt-grid-unit">
            <div className="md:col-span-2 bg-surface-container border border-outline-variant p-6 rounded relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-primary font-bold">--system-metrics</h3>
                <span className="material-symbols-outlined text-outline">monitoring</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Uptime', value: '5.3y' },
                  { label: 'PRs Reviewed', value: '1.2k+' },
                  { label: 'Apps Shipped', value: '12' },
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
