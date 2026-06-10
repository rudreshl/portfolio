'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Mic, MicOff, Mouse, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePortfolioMode } from '@/hooks/usePortfolioMode'

declare global {
  interface SpeechRecognitionAlternative {
    readonly transcript: string
    readonly confidence: number
  }
  interface SpeechRecognitionResult {
    readonly isFinal: boolean
    readonly length: number
    readonly [index: number]: SpeechRecognitionAlternative
  }
  interface SpeechRecognitionResultList {
    readonly length: number
    readonly [index: number]: SpeechRecognitionResult
  }
  interface SpeechRecognitionEvent extends Event {
    readonly resultIndex: number
    readonly results: SpeechRecognitionResultList
  }
  interface SpeechRecognition extends EventTarget {
    continuous: boolean
    interimResults: boolean
    lang: string
    onstart: (() => void) | null
    onresult: ((ev: SpeechRecognitionEvent) => void) | null
    onerror: ((ev: Event) => void) | null
    onend: (() => void) | null
    start(): void
    stop(): void
    abort(): void
  }
  interface Window {
    SpeechRecognition: { new(): SpeechRecognition }
    webkitSpeechRecognition: { new(): SpeechRecognition }
  }
}

type MicPermission = 'pending' | 'granted' | 'denied'
type VoiceState = 'idle' | 'listening' | 'processing' | 'speaking'

function TerminalWindow({
  children,
  titleIcon,
  title,
  onClose,
}: {
  children: React.ReactNode
  titleIcon: React.ReactNode
  title: string
  onClose?: () => void
}) {
  return (
    <div className="w-full max-w-md mx-4 border border-outline-variant bg-surface-container rounded-none terminal-glow">
      <div className="flex items-center justify-between bg-surface-container-high px-4 py-2 border-b border-outline-variant">
        <div className="flex items-center gap-2">
          {titleIcon}
          <span className="font-code-block text-body-sm text-on-surface">{title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {onClose ? (
            <button
              onClick={onClose}
              className="w-2.5 h-2.5 rounded-full bg-on-error-container opacity-40 hover:opacity-80 transition-opacity"
            />
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-on-error-container opacity-40" />
          )}
          <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed opacity-40" />
          <div className="w-2.5 h-2.5 rounded-full bg-primary-container opacity-40" />
        </div>
      </div>
      {children}
    </div>
  )
}

interface FloatingTranscriptProps {
  text: string
  role: 'user' | 'assistant'
  isStreaming: boolean
  onDone: () => void
}

function FloatingTranscript({ text, role, isStreaming, onDone }: FloatingTranscriptProps) {
  const [visible, setVisible] = useState(true)
  // Initialize immediately with full text when not streaming (avoids synchronous setState in effect)
  const [displayText, setDisplayText] = useState(() => (isStreaming ? '' : text))
  const onDoneRef = useRef(onDone)
  const minDisplayTime = 3000

  useEffect(() => {
    onDoneRef.current = onDone
  })

  // Only run the interval for streaming content — non-streaming is initialised above
  useEffect(() => {
    if (!isStreaming) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [text, isStreaming])

  // Auto-dismiss after minDisplayTime once the full text is shown
  useEffect(() => {
    if (displayText !== text || text.length === 0) return
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(() => onDoneRef.current(), 400)
    }, minDisplayTime)
    return () => clearTimeout(timer)
  }, [displayText, text])

  return (
    <div
      className={cn(
        'float-in transition-all duration-[400ms]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      )}
    >
      <div
        className={cn(
          'font-label-md text-[9px] tracking-widest uppercase mb-1 text-center',
          role === 'user' ? 'text-primary-fixed-dim' : 'text-secondary-fixed-dim'
        )}
      >
        {role === 'user' ? 'guest@rudresh:~$' : 'rl_os:~$'}
      </div>
      <div
        className={cn(
          'px-4 py-2.5 font-code-block text-[12px] text-center border rounded-full',
          role === 'user'
            ? 'bg-surface-container border-primary-fixed-dim text-on-surface shadow-[0_0_12px_rgba(0,220,229,0.15)]'
            : 'bg-surface-container border-secondary-fixed-dim text-on-surface shadow-[0_0_12px_rgba(221,183,255,0.15)]'
        )}
      >
        {displayText}
        {isStreaming && displayText.length < text.length && (
          <span className="cursor-blink-sm ml-1" />
        )}
      </div>
    </div>
  )
}

export default function VoiceAssistant() {
  const router = useRouter()
  const { mode, chooseMode } = usePortfolioMode()

  const [micPermission, setMicPermission] = useState<MicPermission>(() => {
    if (typeof navigator !== 'undefined' && typeof navigator.mediaDevices?.getUserMedia === 'function') {
      return 'pending'
    }
    return 'denied'
  })
  const [voiceState, setVoiceState] = useState<VoiceState>('idle')
  const [floatingText, setFloatingText] = useState<string | null>(null)
  const [floatingRole, setFloatingRole] = useState<'user' | 'assistant'>('user')
  const [isStreaming, setIsStreaming] = useState(false)
  const [floatingKey, setFloatingKey] = useState(0)

  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const isActiveRef = useRef(false)
  const routerRef = useRef(router)
  const handleSpeechRef = useRef<(text: string) => void>(() => {})
  const voiceStateRef = useRef<VoiceState>('idle')
  const modeRef = useRef(mode)

  useEffect(() => { routerRef.current = router }, [router])
  useEffect(() => { voiceStateRef.current = voiceState }, [voiceState])
  useEffect(() => { modeRef.current = mode }, [mode])

  // Update handler every render so it always closes over latest state setters
  useEffect(() => {
    handleSpeechRef.current = (text: string) => {
      try { recognitionRef.current?.stop() } catch { /* noop */ }
      const lower = text.toLowerCase()

      setFloatingKey((k) => k + 1)
      setFloatingText(text)
      setFloatingRole('user')
      setIsStreaming(false)
      setVoiceState('processing')

      let reply = ''
      if (lower.includes('home') || lower.includes('start')) {
        routerRef.current.push('/')
        reply = 'Navigating to home.'
      } else if (lower.includes('about')) {
        routerRef.current.push('/about')
        reply = 'Opening about section.'
      } else if (lower.includes('skill')) {
        routerRef.current.push('/skills')
        reply = 'Loading skills and tools.'
      } else if (lower.includes('project')) {
        routerRef.current.push('/projects')
        reply = 'Opening projects gallery.'
      } else if (lower.includes('experience') || lower.includes('work')) {
        routerRef.current.push('/experience')
        reply = 'Showing experience timeline.'
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) {
        routerRef.current.push('/contact')
        reply = 'Opening contact terminal.'
      } else if (lower.includes('resume') || lower.includes('cv')) {
        reply = 'Resume download is on the home page.'
      } else {
        reply = "Try saying a page name like 'projects' or 'contact'."
      }

      setTimeout(() => {
        setFloatingKey((k) => k + 1)
        setFloatingText(reply)
        setFloatingRole('assistant')
        setIsStreaming(true)

        if (typeof window === 'undefined') return
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(reply)
        utterance.rate = 1.0
        utterance.pitch = 1.0
        utterance.volume = 0.9
        setVoiceState('speaking')

        utterance.onend = () => {
          if (isActiveRef.current) {
            try { recognitionRef.current?.start() } catch { setVoiceState('idle') }
          } else {
            setVoiceState('idle')
          }
        }
        window.speechSynthesis.speak(utterance)
      }, 400)
    }
  })

  // Request mic permission only when in voice mode
  useEffect(() => {
    if (micPermission !== 'pending' || mode !== 'voice') return
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        stream.getTracks().forEach((t) => t.stop())
        setMicPermission('granted')
      })
      .catch(() => setMicPermission('denied'))
  }, [micPermission, mode])

  // Set up SpeechRecognition once
  useEffect(() => {
    if (typeof window === 'undefined') return
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SR) return

    const rec = new SR()
    rec.continuous = false
    rec.interimResults = false
    rec.lang = 'en-US'

    rec.onstart = () => setVoiceState('listening')

    rec.onresult = (event) => {
      if (event.results[event.results.length - 1].isFinal) {
        const current = Array.from(event.results).map((r) => r[0].transcript).join('')
        handleSpeechRef.current(current)
      }
    }

    rec.onend = () => {
      setVoiceState((v) => {
        if (v === 'listening' && isActiveRef.current) {
          try { rec.start() } catch { /* already running */ }
          return 'listening'
        }
        return v
      })
    }

    rec.onerror = () => { /* handled gracefully */ }

    recognitionRef.current = rec
    return () => {
      isActiveRef.current = false
      try { rec.abort() } catch { /* noop */ }
    }
  }, [])

  // Auto-start listening once permission granted in voice mode
  useEffect(() => {
    if (micPermission !== 'granted' || mode !== 'voice') return
    isActiveRef.current = true
    try { recognitionRef.current?.start() } catch { /* noop */ }
  }, [micPermission, mode])

  // Stop listening when switching away from voice mode
  useEffect(() => {
    if (mode === 'voice') return
    isActiveRef.current = false
    try { recognitionRef.current?.stop() } catch { /* noop */ }
    const t = setTimeout(() => setVoiceState('idle'), 0)
    return () => clearTimeout(t)
  }, [mode])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isActiveRef.current = false
      try { recognitionRef.current?.abort() } catch { /* noop */ }
      if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
    }
  }, [])

  // Keyboard shortcuts — Escape stops mic, Space toggles mic
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (modeRef.current !== 'voice') return
      if (e.code === 'Escape') {
        isActiveRef.current = false
        try { recognitionRef.current?.stop() } catch { /* noop */ }
        setVoiceState('idle')
      }
      if (e.code === 'Space') {
        e.preventDefault()
        if (voiceStateRef.current === 'listening') {
          isActiveRef.current = false
          try { recognitionRef.current?.stop() } catch { /* noop */ }
          setVoiceState('idle')
        } else if (voiceStateRef.current === 'idle') {
          isActiveRef.current = true
          try { recognitionRef.current?.start() } catch { /* noop */ }
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const startListening = () => {
    isActiveRef.current = true
    try { recognitionRef.current?.start() } catch { /* noop */ }
  }

  const stopListening = () => {
    isActiveRef.current = false
    try { recognitionRef.current?.stop() } catch { /* noop */ }
    setVoiceState('idle')
  }

  const isListening = voiceState === 'listening'
  const isProcessing = voiceState === 'processing'
  const isSpeaking = voiceState === 'speaking'

  return (
    <>
      {/* Permission: pending */}
      {mode === 'voice' && micPermission === 'pending' && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-sm">
          <TerminalWindow
            titleIcon={<Terminal className="w-4 h-4 text-primary-fixed-dim" />}
            title="mic_permission.sh"
          >
            <div className="p-8 flex flex-col items-start gap-4">
              <Mic className="w-10 h-10 text-primary-fixed-dim animate-pulse" />
              <h3 className="font-headline-sm text-primary">Microphone Access Required</h3>
              <div className="font-code-block text-on-surface-variant space-y-1 text-sm">
                <p>
                  <span className="text-primary-fixed-dim mr-2">{'>'}</span>
                  Requesting microphone access...
                </p>
                <p>
                  <span className="text-secondary-fixed-dim mr-2">{'>'}</span>
                  Please allow microphone when prompted by your browser.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
                <span className="font-label-md text-on-surface-variant text-xs">
                  Waiting for permission...
                </span>
              </div>
            </div>
          </TerminalWindow>
        </div>
      )}

      {/* Permission: denied */}
      {mode === 'voice' && micPermission === 'denied' && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-surface-container-lowest/80 backdrop-blur-sm">
          <TerminalWindow
            titleIcon={<Terminal className="w-4 h-4 text-error" />}
            title="mic_permission.sh"
          >
            <div className="p-8 flex flex-col items-start gap-4">
              <MicOff className="w-10 h-10 text-error" />
              <h3 className="font-headline-sm text-error">Microphone Access Denied</h3>
              <div className="font-code-block text-on-surface-variant space-y-1 text-sm">
                <p>
                  <span className="text-error mr-2">{'>'}</span>
                  Permission denied by browser.
                </p>
                <p>
                  <span className="text-secondary-fixed-dim mr-2">{'>'}</span>
                  Allow microphone in browser settings and reload, or switch to click mode.
                </p>
              </div>
              <button
                onClick={() => chooseMode('traditional')}
                className="mt-2 flex items-center gap-2 border border-secondary-fixed-dim text-secondary-fixed-dim px-4 py-2 font-label-md hover:bg-secondary/10 transition-colors"
              >
                <Mouse className="w-4 h-4" />
                Switch to Click Mode
              </button>
            </div>
          </TerminalWindow>
        </div>
      )}

      {/* Floating transcript — only in voice mode */}
      {mode === 'voice' && (
        <div className="fixed bottom-[70px] left-1/2 -translate-x-1/2 z-[89] w-[480px] max-w-[calc(100vw-120px)] pointer-events-none">
          {floatingText !== null && (
            <FloatingTranscript
              key={floatingKey}
              text={floatingText}
              role={floatingRole}
              isStreaming={isStreaming}
              onDone={() => setFloatingText(null)}
            />
          )}
        </div>
      )}

      {/* Bottom control bar */}
      <div className="fixed bottom-[34px] left-1/2 -translate-x-1/2 z-[90]">
        <div className="flex items-center border border-outline-variant bg-surface-container-low rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.4)]">

          {/* Traditional button */}
          <button
            onClick={() => chooseMode('traditional')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 transition-all duration-200 font-label-md text-[11px] tracking-widest border-r border-outline-variant',
              mode === 'traditional'
                ? 'bg-surface-container-highest text-secondary-fixed-dim'
                : 'text-on-surface-variant hover:text-on-surface'
            )}
          >
            <span
              className="material-symbols-outlined text-[16px] transition-all duration-200"
              style={{ fontVariationSettings: mode === 'traditional' ? "'FILL' 1" : "'FILL' 0" }}
            >
              mouse
            </span>
            <span className="hidden sm:inline">TRADITIONAL</span>
          </button>

          {/* Voice AI button */}
          <button
            onClick={() => {
              if (mode !== 'voice') {
                chooseMode('voice')
              } else if (isListening) {
                stopListening()
              } else {
                startListening()
              }
            }}
            className={cn(
              'flex items-center gap-2 px-4 py-2 transition-all duration-200 font-label-md text-[11px] tracking-widest relative',
              mode === 'voice'
                ? isListening
                  ? 'bg-primary-container text-on-primary'
                  : 'bg-surface-container-highest text-primary-fixed-dim'
                : 'text-on-surface-variant hover:text-on-surface'
            )}
          >
            <span
              className={cn(
                'material-symbols-outlined text-[16px] transition-all duration-200',
                mode === 'voice' && isListening ? 'mic-pulse' : '',
                mode === 'voice' && isProcessing ? 'spin-slow' : ''
              )}
              style={{
                fontVariationSettings:
                  mode === 'voice' && isListening ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {isProcessing ? 'hourglass_empty' : isSpeaking ? 'volume_up' : 'mic'}
            </span>
            <span className="hidden sm:inline">VOICE AI</span>
            {mode === 'voice' && !isListening && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary-fixed-dim animate-pulse" />
            )}
          </button>

        </div>
      </div>
    </>
  )
}
