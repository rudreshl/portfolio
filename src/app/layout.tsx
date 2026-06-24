import type { Metadata, Viewport } from 'next'
import './globals.css'
import Shell from '@/components/Shell'

const BASE_URL = 'https://www.rudresh.fun'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Rudresh Lagwankar — Software Engineer',
    template: '%s | Rudresh Lagwankar',
  },
  description:
    'Software Engineer with 5+ years of experience building full-stack applications with React.js, Next.js, NestJS, Node.js, Java Spring Boot, and GenAI integrations.',
  keywords: [
    'Rudresh Lagwankar',
    'rudresh lagwankar',
    'rudreshlagwankar',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'NestJS',
    'Spring Boot',
    'GenAI',
    'Portfolio',
    'rudresh.fun',
  ],
  authors: [{ name: 'Rudresh Lagwankar', url: BASE_URL }],
  creator: 'Rudresh Lagwankar',
  publisher: 'Rudresh Lagwankar',
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Rudresh Lagwankar',
    title: 'Rudresh Lagwankar — Software Engineer',
    description:
      'Software Engineer with 5+ years building full-stack apps with React, Next.js, NestJS, Spring Boot & GenAI.',
    images: [{ url: '/rudresh.png', width: 800, height: 800, alt: 'Rudresh Lagwankar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rudresh Lagwankar — Software Engineer',
    description:
      'Software Engineer with 5+ years building full-stack apps with React, Next.js, NestJS, Spring Boot & GenAI.',
    images: ['/rudresh.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rudresh Lagwankar',
  url: BASE_URL,
  email: 'rudralagwankar@gmail.com',
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Valueadd Softtech' },
  sameAs: [
    'https://linkedin.com/in/rudreshlagwankar',
    'https://github.com/rudreshl',
  ],
  knowsAbout: [
    'React.js', 'Next.js', 'NestJS', 'Node.js', 'JavaScript', 'TypeScript',
    'Java', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'GenAI', 'Full Stack Development',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMK8SS8N');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
      <body className="bg-background text-on-surface font-body-sm min-h-svh selection:bg-primary-container selection:text-on-primary-container">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMK8SS8N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="scanline" />
        <div className="fixed inset-0 grid-bg z-0 pointer-events-none" />
        <Shell />
        {children}
      </body>
    </html>
  )
}
