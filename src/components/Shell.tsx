'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePortfolioMode } from '@/hooks/usePortfolioMode'
import VoiceAssistant from './VoiceAssistant'

const navItems = [
  { icon: 'home', label: 'main.sh', href: '/' },
  { icon: 'person', label: 'about.md', href: '/about' },
  { icon: 'terminal', label: 'skills.json', href: '/skills' },
  { icon: 'code', label: 'projects.sh', href: '/projects' },
  { icon: 'work', label: 'experience.log', href: '/experience' },
  { icon: 'contact_mail', label: 'contact.env', href: '/contact' },
]

export default function Shell() {
  const pathname = usePathname()
  const { mode } = usePortfolioMode()

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-[60px] border-b border-outline-variant bg-surface-container-high flex items-center justify-between px-6 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-headline-md text-headline-md font-bold text-primary-fixed-dim">RL</span>
          <span className="font-label-md text-on-surface-variant text-xs hidden md:block">~/rudresh_portfolio</span>
        </div>

        {/* Nav Items */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'flex flex-row items-center gap-0.5 px-3 py-2 text-primary-fixed-dim border-b-2 border-primary-fixed-dim shadow-[0_4px_12px_rgba(0,220,229,0.2)] transition-all duration-150'
                    : 'flex flex-row items-center gap-0.5 px-3 py-2 text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-container-highest rounded transition-all duration-150 active:scale-95'
                }
              >
                <span
                  className="material-symbols-outlined text-[20px] leading-none"
                  style={isActive ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" } : undefined}
                >
                  {item.icon}
                </span>
                <span className="text-xl font-label-md ml-3">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Window controls */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer hover:bg-surface-bright rounded p-1">minimize</span>
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer hover:bg-surface-bright rounded p-1">fullscreen</span>
          <span className="material-symbols-outlined text-[18px] text-error cursor-pointer hover:bg-error-container rounded p-1">close</span>
        </div>
      </header>

      {mode === 'voice' && <VoiceAssistant />}

      {/* Footer status bar */}
      <footer className="fixed bottom-0 left-0 right-0 h-[30px] border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between px-6 z-40">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-label-md text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
            <span>SYSTEM_READY</span>
          </div>
          <div className="h-4 w-[1px] bg-outline-variant" />
          <span className="font-label-md text-secondary-fixed-dim steady-blink">Available for Hire</span>
        </div>
        <div className="flex items-center gap-4 font-label-md text-on-surface-variant">
          <span>UTF-8</span>
          <span>Git:main</span>
          <span>© 2024 Rudresh Lagwankar</span>
        </div>
      </footer>
    </>
  )
}
