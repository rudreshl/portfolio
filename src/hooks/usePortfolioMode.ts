'use client'
import { useState, useEffect } from 'react'

type Mode = 'voice' | 'traditional' | null

export function usePortfolioMode() {
  const [mode, setMode] = useState<Mode>(null)
  const [isDecided, setIsDecided] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('rl_portfolio_mode') as Mode
    if (stored === 'voice' || stored === 'traditional') {
      setMode(stored)
      setIsDecided(true)
    }
  }, [])

  const chooseMode = (chosen: 'voice' | 'traditional') => {
    localStorage.setItem('rl_portfolio_mode', chosen)
    setMode(chosen)
    setIsDecided(true)
  }

  const resetMode = () => {
    localStorage.removeItem('rl_portfolio_mode')
    setMode(null)
    setIsDecided(false)
  }

  return { mode, isDecided, chooseMode, resetMode }
}
