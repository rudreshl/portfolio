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
                  <p className="font-code-block text-secondary-fixed-dim text-lg mt-1">&gt; Senior Software Engineer</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-outline-variant/30">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <span className="font-code-block text-on-surface-variant text-xs">COMPANY:</span>
                    <span className="font-code-block text-primary-fixed bg-on-primary-fixed-variant/30 px-2 py-0.5 rounded border border-primary-fixed-dim/20">
                      Rezolve AI (Valueadd Softtech)
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

              {/* Interests terminal */}
              <div className="border border-outline-variant bg-surface-container-lowest overflow-hidden">
                <div className="bg-surface-container px-4 py-2 flex items-center justify-between border-b border-outline-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-sm">terminal</span>
                    <span className="font-code-block text-[12px] text-on-surface-variant">interests.json</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-outline-variant opacity-50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-outline-variant opacity-50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-outline-variant opacity-50" />
                  </div>
                </div>
                <div className="p-5 font-code-block text-[12px] leading-relaxed space-y-4">
                  <p className="text-primary-fixed-dim">
                    <span className="text-primary">rudresh</span>
                    <span className="text-on-surface-variant">@life</span>
                    <span className="text-outline"> ~ </span>
                    <span className="text-on-surface">cat interests.json</span>
                  </p>

                  {/* adventures */}
                  <div className="space-y-1">
                    <p className="text-outline">// adventures</p>
                    <div className="pl-4 space-y-1">
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--scuba-diving</span>
                        <span className="text-secondary-fixed-dim">exploring underwater worlds</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--trekking</span>
                        <span className="text-secondary-fixed-dim">mountains <span className="text-primary">&gt;</span> meetings</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--exploring</span>
                        <span className="text-secondary-fixed-dim">always planning the next trip</span>
                      </div>
                    </div>
                  </div>

                  {/* sports */}
                  <div className="space-y-1">
                    <p className="text-outline">// sports</p>
                    <div className="pl-4 space-y-1">
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--cricket</span>
                        <span className="text-secondary-fixed-dim">watching <span className="text-primary">|</span> living</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--swimming</span>
                        <span className="text-secondary-fixed-dim">active</span>
                      </div>
                    </div>
                  </div>

                  {/* currently playing */}
                  <div className="space-y-1">
                    <p className="text-outline">// currently playing</p>
                    <div className="pl-4 space-y-1">
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--song</span>
                        <span className="text-primary">Eye of the Tiger</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--artist</span>
                        <span className="text-primary">Rahul Deshpande</span>
                      </div>
                    </div>
                  </div>

                  {/* on screen */}
                  <div className="space-y-1">
                    <p className="text-outline">// on screen</p>
                    <div className="pl-4">
                      <div className="flex gap-4">
                        <span className="text-primary-fixed-dim w-36 shrink-0">--show</span>
                        <span>
                          <span className="text-primary">The Office</span>
                          <span className="text-outline"> // rewatching for the nth time</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* tags */}
                  <div className="space-y-2">
                    <p className="text-outline">// tags</p>
                    <div className="flex flex-wrap gap-2 pl-4">
                      {['--adventurer', '--outdoor-first', '--ocean-lover', '--cricket-fan', '--office-stan'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-primary-fixed-dim/40 text-primary-fixed-dim bg-surface-container-high rounded-full text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/Rudresh_Lagwankar_Resume.pdf"
                  download="Rudresh_Lagwankar_Resume.pdf"
                  className="bg-primary-container text-on-primary-container font-code-block font-bold py-3 px-8 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all active:scale-95 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  &gt; fetch_resume.pdf
                </a>
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
