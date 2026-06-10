export default function AboutPage() {
  return (
    <main className="main-offset ml-[64px] pt-[36px] pb-[26px] min-h-screen overflow-y-auto">
      <section className="max-w-container-max mx-auto px-margin-desktop py-margin-desktop">
        <div className="border border-outline-variant bg-surface-container-low overflow-hidden rounded-lg">
          {/* Window Header */}
          <div className="bg-surface-container-high px-4 py-2 flex items-center justify-between border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">description</span>
              <span className="font-code-block text-code-block text-on-surface-variant">profile_summary.sh</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Left column */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-6">
              <div className="relative group">
                <div className="relative w-48 h-48 bg-surface-container-highest border-2 border-primary-fixed-dim overflow-hidden shadow-[0_0_20px_rgba(0,220,229,0.15)] group-hover:shadow-[0_0_30px_rgba(0,220,229,0.3)] transition-shadow duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Rudresh Lagwankar"
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                    src="/rudresh.png"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover color-reveal-anim"
                    src="/rudresh.png"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary-container text-on-primary-container px-3 py-1 font-code-block text-[10px] font-bold">
                  ACTIVE_SESSION
                </div>
              </div>

              <div className="space-y-4 w-full text-center md:text-left">
                <div>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tighter">
                    Rudresh Lagwankar<span className="cursor-blink">█</span>
                  </h1>
                  <p className="font-code-block text-secondary-fixed-dim text-lg mt-1">&gt; Software Engineer</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-outline-variant/30">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <span className="font-code-block text-on-surface-variant text-xs">COMPANY:</span>
                    <span className="font-code-block text-primary-fixed bg-on-primary-fixed-variant/30 px-2 py-0.5 rounded border border-primary-fixed-dim/20">
                      Valueadd Softtech
                    </span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <span className="font-code-block text-on-surface-variant text-xs">TENURE:</span>
                    <span className="font-code-block text-on-surface">Dec 2020 – Present</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-8 space-y-8">
              <div className="bg-surface-container-lowest p-6 border border-outline-variant/50 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_10px_rgba(0,220,229,0.5)]" />
                <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
                  Software Engineer with 5+ years across marketplace platforms, trade compliance, real estate,
                  and university management systems. Skilled in Frontend development, GenAI integrations, and
                  full-stack design using React.js, Next.js, NestJS, Node.js, JavaScript, and Java (Spring Boot).
                  Passionate about AI-driven solutions and intelligent systems.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-outline-variant p-4 hover:bg-surface-container-highest/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-secondary text-sm">terminal</span>
                    <h3 className="font-headline-md text-[16px] text-secondary">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['--react.js', '--next.js', '--nestjs', '--spring-boot', '--genai'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface-container-high border border-outline-variant font-code-block text-[11px] text-on-surface-variant"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border border-outline-variant p-4 hover:bg-surface-container-highest/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-sm">architecture</span>
                    <h3 className="font-headline-md text-[16px] text-primary-fixed-dim">Focus</h3>
                  </div>
                  <div className="space-y-1">
                    {['Intelligent Systems', 'Scale Architectures'].map((focus) => (
                      <div key={focus} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full" />
                        <span className="font-code-block text-[12px] text-on-surface">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-primary-container text-on-primary-container font-code-block font-bold py-3 px-8 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all active:scale-95 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  &gt; fetch_resume.pdf
                </button>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="bg-surface-container-lowest px-6 py-3 border-t border-outline-variant flex justify-between items-center">
            <div className="flex gap-4">
              <span className="font-label-md text-label-md text-on-tertiary-container">Status: STABLE</span>
              <span className="font-label-md text-label-md text-on-tertiary-container">Branch: main*</span>
            </div>
            <div className="flex gap-4 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-primary">share</span>
              <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-primary">bug_report</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
