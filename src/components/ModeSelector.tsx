'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Terminal, Mic, Mouse } from 'lucide-react'

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
  // Shorten boot animation delay on landscape-mobile short screens
  const [shortScreen, setShortScreen] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 10)
    const mq = window.matchMedia('(max-height: 500px)')
    const handleMq = () => setShortScreen(mq.matches)
    handleMq()
    mq.addEventListener('change', handleMq)
    return () => {
      clearTimeout(t)
      mq.removeEventListener('change', handleMq)
    }
  }, [])

  const handleChoose = (mode: 'voice' | 'traditional') => {
    setFadingOut(true)
    setTimeout(() => onModeSelected(mode), 300)
  }

  const choiceDelay = shortScreen ? '200ms' : '1200ms'

  return (
    <div
      className={cn(
        'mode-selector-overlay fixed inset-0 z-[200] grid-bg bg-surface-container-lowest flex items-center justify-center px-4 transition-opacity duration-300',
        mounted && !fadingOut ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div className="w-full max-w-2xl border border-outline-variant bg-surface-container rounded-none terminal-glow overflow-hidden">

        {/* Window header */}
        <div className="flex items-center justify-between bg-surface-container-high px-4 py-2 border-b border-outline-variant">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary-fixed-dim" />
            <span className="font-label-md text-[11px] text-on-surface-variant opacity-70">
              init_session.sh
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-on-error-container opacity-40" />
            <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed opacity-40" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-container opacity-40" />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 flex flex-col gap-3 sm:gap-6">

          {/* Boot sequence — hidden on short landscape screens via CSS */}
          <div className="modal-boot-lines flex flex-col gap-0.5">
            {BOOT_LINES.map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-2 font-code-block text-xs text-on-surface-variant"
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
              animationDelay: choiceDelay,
            }}
          >
            <h2 className="font-code-block text-primary text-[16px] sm:text-[22px] font-bold">
              Select interface mode
              <span className="cursor-blink-sm" />
            </h2>
            <p className="font-code-block text-on-surface-variant text-[11px] sm:text-[13px] mt-1 opacity-70">
              guest@rudresh:~$ awaiting input...
            </p>

            {/* Always 2 columns */}
            <div className="grid grid-cols-2 gap-3 mt-4">

              {/* Voice mode */}
              <button
                onClick={() => handleChoose('voice')}
                className="border border-outline-variant bg-surface-container p-3 sm:p-5 text-left rounded-none hover:border-primary-fixed-dim hover:shadow-[0_0_12px_rgba(0,220,229,0.3)] transition-all duration-200 flex flex-col"
              >
                <Mic className="w-7 h-7 sm:w-9 sm:h-9 text-primary-fixed-dim" />
                <p className="font-label-md text-primary-fixed-dim text-[11px] sm:text-[12px] mt-2">
                  &gt; voice_mode.sh
                </p>
                <p className="font-code-block text-on-surface-variant text-[10px] sm:text-[12px] mt-1 flex-1 leading-tight">
                  Navigate by speaking. AI guides you through the portfolio.
                </p>
                <span className="mt-3 self-start bg-brand-container border border-primary-fixed-dim text-primary-fixed-dim px-2 py-0.5 font-label-md text-[9px] sm:text-[10px] rounded-full">
                  --hands-free
                </span>
              </button>

              {/* Traditional mode */}
              <button
                onClick={() => handleChoose('traditional')}
                className="border border-outline-variant bg-surface-container p-3 sm:p-5 text-left rounded-none hover:border-secondary-fixed-dim hover:shadow-[0_0_12px_rgba(221,183,255,0.3)] transition-all duration-200 flex flex-col"
              >
                <Mouse className="w-7 h-7 sm:w-9 sm:h-9 text-secondary-fixed-dim" />
                <p className="font-label-md text-secondary-fixed-dim text-[11px] sm:text-[12px] mt-2">
                  &gt; traditional_mode.sh
                </p>
                <p className="font-code-block text-on-surface-variant text-[10px] sm:text-[12px] mt-1 flex-1 leading-tight">
                  Classic browsing. Click and scroll through the portfolio.
                </p>
                <span className="mt-3 self-start bg-brand-container border border-secondary-fixed-dim text-secondary-fixed-dim px-2 py-0.5 font-label-md text-[9px] sm:text-[10px] rounded-full">
                  --standard-ui
                </span>
              </button>

            </div>

            <p className="font-label-md text-on-surface-variant text-[10px] opacity-40 mt-3">
              // mode can be reset anytime via settings
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
