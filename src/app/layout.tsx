import type { Metadata } from 'next'
import './globals.css'
import Shell from '@/components/Shell'

export const metadata: Metadata = {
  title: 'RL_OS // Rudresh Lagwankar',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background text-on-surface font-body-sm min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        <Shell />
        {children}
      </body>
    </html>
  )
}
