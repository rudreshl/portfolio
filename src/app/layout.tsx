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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface font-body-sm min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        <Shell />
        {children}
      </body>
    </html>
  )
}
