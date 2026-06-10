'use client'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type Mode = 'voice' | 'traditional' | null

interface ModeState {
  mode: Mode
  isDecided: boolean
  chooseMode: (m: 'voice' | 'traditional') => void
  resetMode: () => void
}

// No `persist` — resets on every page refresh intentionally
const useModeStore = create<ModeState>()(
  devtools(
    (set) => ({
      mode: null,
      isDecided: false,
      chooseMode: (m) => set({ mode: m, isDecided: true }),
      resetMode: () => set({ mode: null, isDecided: false }),
    }),
    { name: 'mode-store' }
  )
)

export function usePortfolioMode() {
  return useModeStore()
}
