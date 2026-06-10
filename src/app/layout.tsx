import type { Metadata, Viewport } from 'next'
import './globals.css'
import Shell from '@/components/Shell'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'RL_OS // Rudresh Lagwankar',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts CDN early — reduces icon/font load latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        {/* Material Symbols: request only the axes we use (FILL 0-1, wght 400) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=block"
        />
      </head>
      <body className="bg-background text-on-surface font-body-sm min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        <Shell />
        {children}
      </body>
    </html>
  )
}
