'use client'

import Link from 'next/link'
import { usePortfolioMode } from '@/hooks/usePortfolioMode'
import ModeSelector from '@/components/ModeSelector'

export default function HeroPage() {
  const { isDecided, chooseMode } = usePortfolioMode()

  return (
    <>
      {!isDecided && <ModeSelector onModeSelected={chooseMode} />}
      <div className="scanline" />
      <div className="fixed inset-0 grid-bg z-0 pointer-events-none" />
      <main className="ml-[80px] pt-[40px] pb-[30px] h-screen flex items-center justify-center p-gutter relative z-10">
        {/* Terminal Window Frame */}
        <div className="max-w-[1000px] w-full border border-outline-variant bg-surface-container shadow-2xl overflow-hidden">
          {/* Window Header */}
          <div className="flex items-center justify-between bg-surface-container-high px-4 py-2 border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">terminal</span>
              <span className="font-label-md text-on-surface-variant opacity-70">bash — 80x24</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-on-error-container opacity-40" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed opacity-40" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container opacity-40" />
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-10 md:p-16 flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-secondary-fixed-dim opacity-70 uppercase tracking-widest">
                Initialization Complete...
              </span>
              <h1 className="font-headline-lg text-[48px] md:text-[64px] text-primary flex items-center">
                Rudresh Lagwankar<span className="cursor-blink" />
              </h1>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[#324467] border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 font-label-md rounded-lg">
                  --Software Engineer
                </span>
                <span className="bg-[#324467] border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 font-label-md rounded-lg">
                  --5.3 Years Exp
                </span>
                <span className="bg-[#324467] border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 font-label-md rounded-lg">
                  --Full Stack
                </span>
                <span className="bg-[#324467] border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 font-label-md rounded-lg">
                  --GenAI
                </span>
              </div>
            </div>

            <div className="w-full max-w-2xl bg-surface-container-low border border-outline-variant p-6 font-code-block text-on-surface-variant relative">
              <div className="absolute -top-3 left-4 bg-surface-container-low px-2 text-[10px] text-outline">
                INFO_STDOUT
              </div>
              <p className="text-body-lg flex items-start gap-3">
                <span className="text-primary-fixed-dim font-bold">guest@rudresh:~$</span>
                <span className="text-on-surface">
                  Building scalable web apps · React · Node · NestJS · AI integrations
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <Link
                href="/projects"
                className="bg-primary-container text-on-primary-container font-label-md px-8 py-4 uppercase tracking-tighter flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all active:scale-95 group"
              >
                <span>&gt; run projects.sh</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  keyboard_arrow_right
                </span>
              </Link>
              <button className="border border-secondary-fixed-dim text-secondary-fixed-dim hover:bg-secondary/10 font-label-md px-8 py-4 uppercase tracking-tighter flex items-center gap-2 transition-all active:scale-95">
                <span>&gt; get resume.pdf</span>
                <span className="material-symbols-outlined text-sm">download</span>
              </button>
            </div>
          </div>

          {/* Terminal Footer Status */}
          <div className="bg-surface-container-low px-6 py-2 border-t border-outline-variant flex justify-between items-center opacity-60">
            <div className="flex gap-4 font-label-md text-[10px]">
              <span>UTF-8</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim" />
                SYSTEM_LIVE
              </span>
            </div>
            <div className="font-label-md text-[10px]">Ln 1, Col 1 — 100%</div>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
          <div className="flex flex-col gap-4">
            <div className="w-32 h-1 bg-primary-fixed-dim shadow-[0_0_8px_rgba(0,220,229,1)]" />
            <div className="w-24 h-1 bg-secondary-fixed-dim shadow-[0_0_8px_rgba(221,183,255,1)]" />
          </div>
        </div>
      </main>
    </>
  )
}
