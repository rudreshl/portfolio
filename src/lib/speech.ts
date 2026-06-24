const VOICE_LANG = 'en-GB'

function getVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find(v => v.lang === VOICE_LANG && v.name.toLowerCase().includes('male')) ??
    voices.find(v => v.lang === VOICE_LANG && !v.name.toLowerCase().includes('female')) ??
    voices.find(v => v.lang.startsWith('en-GB')) ??
    voices.find(v => v.lang.startsWith('en')) ??
    voices[0]
  )
}

function buildUtterance(text: string): SpeechSynthesisUtterance {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = VOICE_LANG
  utterance.pitch = 0.85
  utterance.rate = 0.92
  const voice = getVoice()
  if (voice) utterance.voice = voice
  return utterance
}

export function speak(text: string): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(buildUtterance(text))
}

// Tries to speak immediately; if voices aren't loaded yet, waits for voiceschanged.
// Chrome blocks speechSynthesis on page load without a user gesture — returns a cleanup fn
// so callers can register a one-time interaction fallback instead.
export function speakWhenReady(
  text: string,
  onBlocked?: () => void,
): () => void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return () => {}

  let played = false

  const trySpeak = () => {
    if (played) return
    // Chrome: speechSynthesis.speaking/pending stays false when blocked by autoplay;
    // check after a tick to see if the utterance actually queued.
    window.speechSynthesis.cancel()
    const utterance = buildUtterance(text)
    utterance.onstart = () => { played = true }
    window.speechSynthesis.speak(utterance)

    // Give the browser 600 ms to start — if it hasn't, flag as blocked
    setTimeout(() => {
      if (!played) onBlocked?.()
    }, 600)
  }

  if (window.speechSynthesis.getVoices().length > 0) {
    // Tiny defer helps Chrome honour the utterance after navigation
    setTimeout(trySpeak, 80)
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null
      setTimeout(trySpeak, 80)
    }
  }

  return () => { played = true } // cancel callback
}
