'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  User,
  Terminal,
  Code2,
  Briefcase,
  Mail,
  Settings,
  Minus,
  Maximize2,
  X,
  ChevronUp,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'
import { usePortfolioMode } from '@/hooks/usePortfolioMode'
import VoiceAssistant from './VoiceAssistant'
import ModeSelector from './ModeSelector'

interface NavItem {
  Icon: LucideIcon
  sidebarLabel: string
  tabLabel: string
  href: string
}

const navItems: NavItem[] = [
  { Icon: Home, sidebarLabel: 'Home', tabLabel: 'main.sh', href: '/' },
  { Icon: User, sidebarLabel: 'About', tabLabel: 'about.md', href: '/about' },
  { Icon: Terminal, sidebarLabel: 'Skills', tabLabel: 'skills.json', href: '/skills' },
  { Icon: Code2, sidebarLabel: 'Projects', tabLabel: 'projects.sh', href: '/projects' },
  { Icon: Briefcase, sidebarLabel: 'Experience', tabLabel: 'experience.log', href: '/experience' },
  { Icon: Mail, sidebarLabel: 'Contact', tabLabel: 'contact.env', href: '/contact' },
]

export default function Shell() {
  const pathname = usePathname()
  const { isDecided, chooseMode } = usePortfolioMode()

  const [menuOpenForPath, setMenuOpenForPath] = useState<string | null>(null)
  const tabMenuOpen = menuOpenForPath === pathname

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpenForPath(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const activeItem = navItems.find((item) => item.href === pathname) ?? navItems[0]

  return (
    <>
      {/* Mode selector — shown on every fresh load until user picks */}
      {!isDecided && <ModeSelector onModeSelected={chooseMode} />}

      {/* Sidebar */}
      <aside className="sidebar-width fixed left-0 top-0 h-full w-[64px] border-r border-outline-variant bg-surface-container-low flex flex-col items-center py-grid-unit z-50">
        {/* Logo */}
        <div className="mb-6 text-center">
          <span className="font-headline-md font-bold text-primary-fixed-dim text-[16px] block">RL</span>
          <span className="font-label-md text-[9px] opacity-50 uppercase tracking-widest">v1.0.4</span>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col items-center w-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'flex flex-col items-center justify-center w-full py-3 gap-1 text-primary-fixed-dim border-l-2 border-primary-fixed-dim shadow-[0_0_12px_rgba(0,220,229,0.3)] bg-surface-container-highest'
                    : 'flex flex-col items-center justify-center w-full py-3 gap-1 text-on-surface-variant hover:text-primary-fixed-dim hover:bg-surface-container-highest transition-all duration-150 active:scale-95'
                }
              >
                <item.Icon className="w-5 h-5" />
                <span className="sidebar-nav-label font-label-md text-[9px] mt-0.5">
                  {item.sidebarLabel}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Settings */}
        <div className="mt-auto mb-2">
          <Settings className="w-5 h-5 text-on-surface-variant hover:text-primary-fixed-dim cursor-pointer transition-colors" />
        </div>
      </aside>

      {/* Top Navbar */}
      <header className="header-offset fixed top-0 left-[64px] right-0 h-[36px] border-b border-outline-variant bg-surface-container-high flex items-center justify-between px-4 z-40">
        {/* Left: path + tabs */}
        <div className="flex items-center gap-3 min-w-0 overflow-hidden">
          <span className="font-label-md text-on-surface text-[11px] hidden sm:block opacity-70 shrink-0">
            ~/rudresh_portfolio
          </span>
          <div className="h-3 w-[1px] bg-outline-variant hidden sm:block shrink-0" />

          {/* Desktop tabs */}
          <div className="hidden lg:flex gap-1 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? 'flex items-center gap-1 px-2 py-0.5 font-label-md text-[11px] text-primary-fixed-dim font-bold'
                      : 'flex items-center gap-1 px-2 py-0.5 font-label-md text-[11px] text-on-surface-variant hover:bg-surface-bright cursor-pointer transition-colors rounded-sm'
                  }
                >
                  <item.Icon className="w-3 h-3" />
                  {item.tabLabel}
                </Link>
              )
            })}
          </div>

          {/* Mobile active tab + dropdown */}
          <div className="lg:hidden flex items-center gap-2" ref={dropdownRef}>
            <activeItem.Icon className="w-3.5 h-3.5 text-primary-fixed-dim" />
            <span className="font-label-md text-primary-fixed-dim font-bold text-[11px]">
              {activeItem.tabLabel}
            </span>
            <button
              onClick={() => setMenuOpenForPath(tabMenuOpen ? null : pathname)}
              className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors ml-1"
            >
              {tabMenuOpen ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Dropdown */}
            {tabMenuOpen && (
              <div className="fixed top-[36px] left-[64px] bg-surface-container-high border border-outline-variant w-[180px] py-1 z-50">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 font-label-md text-[11px] hover:bg-surface-container-highest cursor-pointer ${
                        isActive ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                      }`}
                      onClick={() => setMenuOpenForPath(null)}
                    >
                      <item.Icon className="w-3 h-3" />
                      {item.tabLabel}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-1 shrink-0">
          <Minus className="w-4 h-4 text-on-surface-variant cursor-pointer hover:bg-surface-bright rounded p-0.5" />
          <Maximize2 className="w-4 h-4 text-on-surface-variant cursor-pointer hover:bg-surface-bright rounded p-0.5" />
          <X className="w-4 h-4 text-error cursor-pointer hover:bg-error-container rounded p-0.5" />
        </div>
      </header>

      {/* Bottom control bar + voice assistant (always rendered, handles both modes) */}
      <VoiceAssistant />

      {/* Footer status bar */}
      <footer className="footer-offset fixed bottom-0 left-[64px] right-0 h-[26px] border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between px-4 z-40">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-label-md text-on-surface-variant text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse" />
            <span>SYSTEM_READY</span>
          </div>
          <div className="h-3 w-[1px] bg-outline-variant" />
          <span className="font-label-md text-secondary-fixed-dim text-[10px] steady-blink">
            Available for Hire
          </span>
        </div>
        <div className="flex items-center gap-3 font-label-md text-on-surface-variant text-[10px]">
          <span>UTF-8</span>
          <span>Git:main</span>
          <span className="hidden sm:block">© 2024 Rudresh Lagwankar</span>
        </div>
      </footer>
    </>
  )
}
