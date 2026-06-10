'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const BOOT_LINES = [
  'Initializing RL_OS v1.0.4...',
  'Loading kernel modules...',
  'Mounting filesystem...',
  'Detecting input devices...',
  'System ready.',
]

interface ModeSelectorProps {
  onModeSelected: (mode: 'voice' | 'traditional') => void
}

export default function ModeSelector({ onModeSelected }: ModeSelectorProps) {
  const [mounted, setMounted] = useState(false)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleChoose = (mode: 'voice' | 'traditional') => {
    setFadingOut(true)
    setTimeout(() => onModeSelected(mode), 300)
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] grid-bg bg-surface-container-lowest flex items-center justify-center px-4 transition-opacity duration-300',
        mounted && !fadingOut ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="w-full max-w-2xl border border-outline-variant bg-surface-container rounded-none terminal-glow">
        {/* Window header */}
        <div className="flex items-center justify-between bg-surface-container-high px-4 py-2 border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">terminal</span>
            <span className="font-label-md text-on-surface-variant opacity-70">init_session.sh</span>
          </div>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-on-error-container opacity-40" />
            <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed opacity-40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-container opacity-40" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col gap-6">
          {/* Boot sequence */}
          <div className="flex flex-col gap-1">
            {BOOT_LINES.map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-2 font-code-block text-on-surface-variant"
                style={{
                  opacity: 0,
                  animation: 'mode-boot-line 0.3s ease-out forwards',
                  animationDelay: `${i * 200}ms`,
                }}
              >
                <span className="text-primary-fixed-dim select-none">{'>'}</span>
                <span>{line}</span>
              </div>
            ))}
          </div>

          {/* Choice section */}
          <div
            style={{
              opacity: 0,
              animation: 'mode-slide-up 0.4s ease-out forwards',
              animationDelay: '1200ms',
            }}
          >
            <h2 className="font-headline-md text-primary">
              Select interface mode<span className="cursor-blink" />
            </h2>
            <p className="font-code-block text-on-surface-variant mt-2">
              guest@rudresh:~$ awaiting input...
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {/* Voice mode */}
              <button
                onClick={() => handleChoose('voice')}
                className="border border-outline-variant bg-surface-container p-6 text-left rounded-none hover:border-primary-fixed-dim hover:shadow-[0_0_12px_rgba(0,220,229,0.3)] transition-all duration-200 flex flex-col"
              >
                <span className="material-symbols-outlined text-[40px] text-primary-fixed-dim">mic</span>
                <p className="font-label-md text-primary-fixed-dim font-bold mt-3">&gt; voice_mode.sh</p>
                <p className="font-body-sm text-on-surface-variant mt-2 flex-1">
                  Navigate by speaking. AI assistant guides you through the portfolio.
                </p>
                <span className="mt-4 self-start bg-brand-container border border-primary-fixed-dim text-primary-fixed-dim px-3 py-1 font-label-md rounded-full">
                  --hands-free
                </span>
              </button>

              {/* Traditional mode */}
              <button
                onClick={() => handleChoose('traditional')}
                className="border border-outline-variant bg-surface-container p-6 text-left rounded-none hover:border-secondary-fixed-dim hover:shadow-[0_0_12px_rgba(221,183,255,0.3)] transition-all duration-200 flex flex-col"
              >
                <span className="material-symbols-outlined text-[40px] text-secondary-fixed-dim">mouse</span>
                <p className="font-label-md text-secondary-fixed-dim font-bold mt-3">&gt; traditional_mode.sh</p>
                <p className="font-body-sm text-on-surface-variant mt-2 flex-1">
                  Classic browsing. Click and scroll through the portfolio.
                </p>
                <span className="mt-4 self-start bg-brand-container border border-secondary-fixed-dim text-secondary-fixed-dim px-3 py-1 font-label-md rounded-full">
                  --standard-ui
                </span>
              </button>
            </div>

            <p className="font-label-md text-on-surface-variant opacity-40 mt-4">
              // mode can be reset anytime via settings
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
