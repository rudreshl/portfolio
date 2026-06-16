export default function ContactPage() {
  const links = [
    {
      icon: 'alternate_email',
      label: 'EMAIL',
      display: 'rudralagwankar@gmail.com',
      href: 'mailto:rudralagwankar@gmail.com',
    },
    {
      icon: 'language',
      label: 'PORTFOLIO',
      display: 'www.rudresh.fun',
      href: 'https://www.rudresh.fun',
    },
    {
      icon: 'link',
      label: 'LINKEDIN',
      display: 'linkedin.com/in/rudreshlagwankar',
      href: 'https://linkedin.com/in/rudreshlagwankar',
    },
    {
      icon: 'code',
      label: 'GITHUB',
      display: 'github.com/rudreshl',
      href: 'https://github.com/rudreshl',
    },
  ]

  return (
    <main className="main-offset ml-[64px] mt-[36px] mb-[26px] flex-grow flex items-center justify-center p-gutter min-h-[calc(100vh-62px)]">
      <div className="max-w-2xl w-full">
        {/* Terminal Card */}
        <div className="border border-outline-variant bg-surface-container-low terminal-glow overflow-hidden">
          {/* Card Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">terminal</span>
              <span className="font-code-block text-body-sm">contact_session.sh</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim" />
            </div>
          </div>

          <div className="p-8 space-y-10">
            <div className="space-y-2">
              <h1 className="font-headline-lg text-headline-lg text-primary flex items-center">
                Get In Touch<span className="cursor-blink ml-1">█</span>
              </h1>
              <p className="text-on-surface-variant font-body-lg">
                Open to new opportunities · Let&apos;s build something.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-6">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group block"
                >
                  <div className="flex items-center gap-2 mb-2 opacity-50 text-label-md">
                    <span className="material-symbols-outlined text-xs">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-3 border-b border-outline-variant group-hover:border-primary-container transition-colors duration-300 pb-2">
                    <span className="text-primary font-bold shrink-0">rudresh@portfolio:~$</span>
                    <span className="font-code-block text-on-surface group-hover:text-primary transition-colors duration-300">
                      {item.display}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Visual Accent */}
            <div className="pt-8 border-t border-outline-variant grid grid-cols-3 gap-4">
              {[
                { label: 'LATENCY', value: '12ms' },
                { label: 'REGION', value: 'GLOBAL-01' },
                { label: 'ENCRYPTION', value: 'AES-256' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 border border-outline-variant bg-surface-container-lowest">
                  <span className="block text-[10px] opacity-40 mb-1">{stat.label}</span>
                  <span className="text-primary font-code-block">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-8">
          <a
            className="flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
            href="https://www.rudresh.fun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-2xl">language</span>
            <span className="font-label-md opacity-0 group-hover:opacity-100 transition-opacity">rudresh.fun</span>
          </a>
          <a
            className="flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
            href="https://github.com/rudreshl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-2xl">code</span>
            <span className="font-label-md opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          <a
            className="flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
            href="https://linkedin.com/in/rudreshlagwankar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-2xl">link</span>
            <span className="font-label-md opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>
        </div>
      </div>
    </main>
  )
}
