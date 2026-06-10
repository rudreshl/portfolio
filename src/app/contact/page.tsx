'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSuccess(true)
  }

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

            {/* Form */}
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative group">
                <div className="flex items-center gap-2 mb-2 opacity-50 text-label-md">
                  <span className="material-symbols-outlined text-xs">alternate_email</span>
                  <span>INPUT_EMAIL</span>
                </div>
                <div className="flex items-center gap-3 border-b border-outline-variant focus-within:border-primary-container transition-colors duration-300 pb-2">
                  <span className="text-primary font-bold">guest@rudresh:~$</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface w-full p-0 font-code-block placeholder:opacity-30"
                    placeholder="enter your email..."
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-2 mb-2 opacity-50 text-label-md">
                  <span className="material-symbols-outlined text-xs">chat_bubble</span>
                  <span>INPUT_MESSAGE</span>
                </div>
                <div className="flex items-start gap-3 border-b border-outline-variant focus-within:border-primary-container transition-colors duration-300 pb-2">
                  <span className="text-primary font-bold mt-0.5">&gt;</span>
                  <textarea
                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-on-surface w-full p-0 font-code-block placeholder:opacity-30 resize-none"
                    placeholder="how can I help you today?"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                className="group flex items-center gap-3 px-6 py-3 bg-primary text-on-primary font-bold terminal-glow hover:bg-primary-fixed hover:scale-[0.98] transition-all disabled:opacity-60"
                type="submit"
                disabled={loading || success}
              >
                <span className="material-symbols-outlined">send</span>
                <span className="font-code-block">
                  {loading ? '--deploying_message...' : success ? '--message_sent!' : '--run deploy_message'}
                </span>
              </button>
            </form>

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
            href="https://rudresh.fun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-2xl">language</span>
            <span className="font-label-md opacity-0 group-hover:opacity-100 transition-opacity">rudresh.fun</span>
          </a>
          <a
            className="flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-2xl">code</span>
            <span className="font-label-md opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          <a
            className="flex flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
            href="https://linkedin.com"
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
