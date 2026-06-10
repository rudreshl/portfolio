'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: 'home', label: 'Home', href: '/' },
  { icon: 'person', label: 'About', href: '/about' },
  { icon: 'terminal', label: 'Skills', href: '/skills' },
  { icon: 'code', label: 'Projects', href: '/projects' },
  { icon: 'work', label: 'Experience', href: '/experience' },
  { icon: 'terminal', label: 'Contact', href: '/contact' },
]

const tabMap: Record<string, string> = {
  '/': 'main.sh',
  '/about': 'about.md',
  '/skills': 'skills.json',
  '/projects': 'projects.sh',
  '/experience': 'git.log',
  '/contact': 'contact.env',
}

const allTabs = ['main.sh', 'about.md', 'skills.json', 'projects.sh', 'git.log', 'contact.env']

export default function Shell() {
  const pathname = usePathname()
  const activeTab = tabMap[pathname] ?? 'main.sh'

  return (
    <>
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[80px] border-r border-outline-variant bg-surface-container-low flex flex-col items-center py-grid-unit z-50">
        <div className="mb-gutter">
          <span className="font-headline-md text-headline-md font-bold text-primary-fixed-dim">RL</span>
        </div>
        <nav className="flex flex-col gap-6 flex-1 w-full px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'flex flex-col items-center justify-center text-primary-fixed-dim border-l-2 border-primary-fixed-dim shadow-[0_0_12px_rgba(0,220,229,0.3)] py-4 hover:bg-surface-container-highest transition-all duration-150 active:scale-95'
                    : 'flex flex-col items-center justify-center text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-container-highest transition-all duration-150 py-4 active:scale-95'
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span className="font-label-md text-[10px] mt-1">{item.label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="flex flex-col gap-4 mb-grid-unit">
          <button className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </aside>

      {/* Header tab bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-80px)] h-[40px] border-b border-outline-variant bg-surface-container-high flex items-center justify-between px-gutter z-40">
        <div className="flex items-center gap-4">
          <span className="font-label-md text-on-surface">~/rudresh_portfolio</span>
          <div className="flex gap-4 ml-gutter overflow-x-auto">
            {allTabs.map((tab) => (
              <span
                key={tab}
                className={
                  tab === activeTab
                    ? 'font-label-md text-primary-fixed-dim font-bold whitespace-nowrap'
                    : 'font-label-md text-on-surface-variant hover:bg-surface-bright px-2 py-1 cursor-pointer transition-colors whitespace-nowrap'
                }
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer hover:bg-surface-bright p-1">minimize</span>
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer hover:bg-surface-bright p-1">fullscreen</span>
          <span className="material-symbols-outlined text-[18px] text-error cursor-pointer hover:bg-error-container p-1">close</span>
        </div>
      </header>

      {/* Footer status bar */}
      <footer className="fixed bottom-0 right-0 w-[calc(100%-80px)] h-[30px] border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between px-gutter z-40">
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
