export default function SkillsPage() {
  const skills = [
    '--JavaScript/TypeScript',
    '--React JS / Next JS',
    '--Node JS',
    '--Nest JS',
    '--Java / Spring Boot',
    '--PostgreSQL',
    '--MongoDB',
    '--Docker basics',
    '--Vibe coding',
    '--Ollama / Hugging Face',
    '--AI Workflow',
    '--n8n',
  ]

  const tools = [
    '--Claude Code',
    '--Cursor AI',
    '--Augment',
    '--Vercel v0',
    '--Deployment',
    '--Postman',
    '--Jira',
    '--Git',
    '--Figma Design Suite',
  ]

  return (
    <main className="main-offset ml-[64px] pt-[36px] pb-[26px] min-h-screen">
      <div className="max-w-container-max mx-auto p-margin-desktop space-y-12">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Skills Section */}
          <div className="md:col-span-12 lg:col-span-7">
            <div className="bg-surface-container rounded-lg border border-outline-variant overflow-hidden">
              <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-sm">terminal</span>
                  <span className="font-label-md text-on-surface">skills_manifest.json</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                </div>
              </div>
              <div className="p-gutter space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant">guest@rudresh:~$</span>
                  <span className="font-code-block text-primary-fixed-dim">list-skills --all</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface-container-highest border border-primary-fixed-dim text-primary-fixed-dim rounded-full terminal-glow font-code-block text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-on-surface-variant">guest@rudresh:~$</span>
                  <span className="w-2 h-5 bg-primary-fixed-dim cursor-blink" />
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="bg-surface-container rounded-lg border border-outline-variant overflow-hidden">
              <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">construction</span>
                  <span className="font-label-md text-on-surface">tools_inventory.yml</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                </div>
              </div>
              <div className="p-gutter space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-on-surface-variant">guest@rudresh:~$</span>
                  <span className="font-code-block text-secondary">inspect-toolchain --installed</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {tools.map((tool, i) => (
                    <span
                      key={tool}
                      className={`px-3 py-1.5 bg-surface-container-highest border border-secondary/30 text-secondary rounded-lg font-code-block text-xs flex items-center gap-2${i === tools.length - 1 ? ' col-span-2' : ''}`}
                    >
                      <span className="text-[10px] opacity-60">#</span> {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-4">
                  <span className="text-on-surface-variant">guest@rudresh:~$</span>
                  <span className="w-2 h-5 bg-secondary cursor-blink" />
                </div>
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="md:col-span-12">
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
                    Optimizing local LLM deployment through Ollama and custom n8n automation architectures.
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
        </div>
      </div>
    </main>
  )
}
