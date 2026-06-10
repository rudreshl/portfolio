'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition
    webkitSpeechRecognition: typeof SpeechRecognition
  }
}

type VoiceState = 'idle' | 'listening' | 'processing' | 'speaking'

interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
  timestamp: Date
}

export default function VoiceAssistant() {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const [voiceState, setVoiceState] = useState<VoiceState>('idle')
  const [messages, setMessages] = useState<Message[]>([])
  const [transcript, setTranscript] = useState('')
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      const current = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join('')
      setTranscript(current)
      if (event.results[event.results.length - 1].isFinal) {
        handleUserSpeech(current)
      }
    }

    recognition.onend = () => {
      setVoiceState((prev) => (prev === 'listening' ? 'idle' : prev))
    }

    recognitionRef.current = recognition
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.code === 'Space' && !isExpanded) {
        e.preventDefault()
        startListening()
      } else if (e.code === 'Escape') {
        stopListening()
        setIsExpanded(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isExpanded])

  const startListening = () => {
    recognitionRef.current?.start()
    setVoiceState('listening')
    setIsExpanded(true)
  }

  const stopListening = () => {
    recognitionRef.current?.stop()
    setVoiceState('idle')
  }

  const addMessage = (role: 'user' | 'assistant', text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role, text, timestamp: new Date() },
    ])
  }

  const speakReply = (text: string) => {
    if (typeof window === 'undefined') return
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.0
    utterance.pitch = 1.0
    utterance.volume = 0.9
    setVoiceState('speaking')
    utterance.onend = () => setVoiceState('idle')
    window.speechSynthesis.speak(utterance)
  }

  const handleUserSpeech = (text: string) => {
    const lower = text.toLowerCase()
    addMessage('user', text)
    setVoiceState('processing')

    let reply = ''
    if (lower.includes('home') || lower.includes('start')) {
      router.push('/')
      reply = 'Navigating to home.'
    } else if (lower.includes('about')) {
      router.push('/about')
      reply = 'Opening about section.'
    } else if (lower.includes('skill')) {
      router.push('/skills')
      reply = 'Loading skills and tools.'
    } else if (lower.includes('project')) {
      router.push('/projects')
      reply = 'Opening projects gallery.'
    } else if (lower.includes('experience') || lower.includes('work')) {
      router.push('/experience')
      reply = 'Showing experience timeline.'
    } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email')) {
      router.push('/contact')
      reply = 'Opening contact terminal.'
    } else if (lower.includes('resume') || lower.includes('cv')) {
      reply = 'Resume download is on the home page.'
    } else {
      reply = "I didn't catch that. Try saying a page name like 'projects' or 'contact'."
    }

    setTimeout(() => {
      addMessage('assistant', reply)
      speakReply(reply)
      setVoiceState('idle')
    }, 400)
  }

  const isListening = voiceState === 'listening'
  const isProcessing = voiceState === 'processing'

  return (
    <div className="fixed bottom-[50px] right-[20px] z-[100] flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {isExpanded && (
        <div className="w-[340px] border border-outline-variant bg-surface-container rounded-none overflow-hidden">
          {/* Panel header */}
          <div className="bg-surface-container-high border-b border-outline-variant px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-fixed-dim text-sm">mic</span>
              <span className="font-code-block text-body-sm text-on-surface">voice_session.sh</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsExpanded(false)}
                className="w-2.5 h-2.5 rounded-full bg-on-error-container opacity-40 hover:opacity-80 transition-opacity"
              />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed opacity-40" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container opacity-40" />
            </div>
          </div>

          {/* Panel body */}
          <div className="bg-surface-container-low p-4 space-y-3 max-h-[320px] overflow-y-auto">
            {messages.length === 0 && !isListening && !isProcessing ? (
              <div className="font-code-block text-xs text-on-surface-variant opacity-60 space-y-1">
                <p>voice session initialized</p>
                <p>speak to navigate...</p>
              </div>
            ) : null}

            {messages.map((msg) =>
              msg.role === 'user' ? (
                <div
                  key={msg.id}
                  className="bg-surface-container px-3 py-2 border-l-2 border-primary-fixed-dim"
                >
                  <span className="text-primary-fixed-dim font-bold text-xs mr-2">
                    guest@rudresh:~$
                  </span>
                  <span className="font-code-block text-body-sm text-on-surface">{msg.text}</span>
                </div>
              ) : (
                <div
                  key={msg.id}
                  className="bg-surface-container-high px-3 py-2 border-l-2 border-secondary-fixed-dim"
                >
                  <span className="text-secondary-fixed-dim font-bold text-xs mr-2">rl_os:~$</span>
                  <span className="font-code-block text-body-sm text-on-surface">{msg.text}</span>
                </div>
              )
            )}

            {(isListening || isProcessing) && (
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="flex items-center gap-1">
                  {[0, 200, 400].map((delay) => (
                    <span
                      key={delay}
                      className="w-1 h-1 rounded-full bg-primary-fixed-dim animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
                <span className="font-label-md text-primary-fixed-dim animate-pulse text-xs">
                  listening...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Panel footer */}
          <div className="bg-surface-container-lowest border-t border-outline-variant px-4 py-2 flex items-center justify-between">
            {/* Waveform bars */}
            <div className="flex items-end gap-0.5 h-[30px]">
              {[0, 100, 200, 150, 50].map((delay, i) => (
                <span
                  key={i}
                  className={`w-0.5 rounded-full bg-primary-fixed-dim transition-all ${
                    isListening ? 'animate-pulse' : ''
                  }`}
                  style={
                    isListening
                      ? {
                          height: '10px',
                          animation: `waveform 0.8s ease-in-out infinite alternate`,
                          animationDelay: `${delay}ms`,
                        }
                      : { height: '10px' }
                  }
                />
              ))}
            </div>

            {/* Mic toggle */}
            <button
              onClick={isListening ? stopListening : startListening}
              className={`rounded-full w-8 h-8 flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {isListening ? 'mic' : 'mic_off'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Collapsed mic button */}
      <div className="relative">
        <button
          onClick={() => (isExpanded ? setIsExpanded(false) : (isListening ? stopListening() : startListening()))}
          className={`w-12 h-12 rounded-full bg-surface-container border flex items-center justify-center transition-all duration-200 ${
            isListening
              ? 'border-primary-container animate-pulse shadow-[0_0_20px_rgba(0,220,229,0.6)]'
              : 'border-primary-fixed-dim terminal-glow'
          }`}
        >
          <span className="material-symbols-outlined text-primary-fixed-dim">mic</span>
        </button>
        {/* Status dot */}
        <span
          className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${
            isListening ? 'bg-primary-fixed-dim animate-pulse' : 'bg-outline'
          }`}
        />
      </div>

      <style jsx>{`
        @keyframes waveform {
          0% { height: 10px; }
          100% { height: 30px; }
        }
      `}</style>
    </div>
  )
}
