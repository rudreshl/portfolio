'use client'

import { useState, useEffect } from 'react'

export default function PortraitGuard() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px) and (orientation: portrait)')
    const handler = () => setShow(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (!show) return null

  return (
    <div className="mode-selector-overlay fixed inset-0 z-[300] bg-surface-container-lowest grid-bg flex flex-col items-center justify-center gap-8">
      <span
        className="material-symbols-outlined text-primary-fixed-dim"
        style={{ fontSize: '64px', animation: 'rotate-hint 2.5s ease-in-out infinite' }}
      >
        screen_rotation
      </span>

      <div className="text-center space-y-2 px-8">
        <p className="font-code-block text-primary-fixed-dim text-[16px]">
          {'>'} rotate_device.sh
        </p>
        <p className="font-label-md text-on-surface-variant text-[11px] tracking-widest opacity-60">
          // RL_OS is optimized for landscape mode
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse" />
        <span className="font-label-md text-[10px] text-on-surface-variant opacity-40">
          awaiting orientation change...
        </span>
      </div>
    </div>
  )
}
