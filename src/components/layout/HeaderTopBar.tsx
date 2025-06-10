'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeaderTopBar() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [nextDrawTime, setNextDrawTime] = useState(new Date(Date.now() + 3600000)) // 1 hour from now
  const [solPrice, setSolPrice] = useState(98.45)
  const [solChange, setSolChange] = useState(-2.34)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Update next draw time every minute
      const now = new Date()
      const nextHour = new Date(now)
      nextHour.setHours(nextHour.getHours() + 1)
      nextHour.setMinutes(0)
      nextHour.setSeconds(0)
      setNextDrawTime(nextHour)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Update SOL price every minute
  useEffect(() => {
    const updatePrice = async () => {
      try {
        // TODO: Replace with actual API call
        const mockPrice = 98.45 + (Math.random() - 0.5) * 2
        const mockChange = -2.34 + (Math.random() - 0.5) * 1
        setSolPrice(mockPrice)
        setSolChange(mockChange)
      } catch (error) {
        console.error('Failed to update SOL price:', error)
      }
    }

    updatePrice()
    const timer = setInterval(updatePrice, 60000)
    return () => clearInterval(timer)
  }, [])

  const formatTimeRemaining = () => {
    const diff = nextDrawTime.getTime() - currentTime.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="py-2 border-b border-gray-800/50">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Next Draw: {formatTimeRemaining()}</span>
          <span className="text-gray-400">|</span>
          <span className="text-green-400">SOL: ${solPrice.toFixed(2)}</span>
          <span className={`${solChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {solChange >= 0 ? '+' : ''}{solChange.toFixed(2)}%
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/verify" className="text-gray-400 hover:text-white transition-colors">
            🔍 Verify Latest Draw
          </Link>
          <span className="text-gray-400">|</span>
          <Link href="/winners" className="text-gray-400 hover:text-white transition-colors">
            🏆 View Winners
          </Link>
        </div>
      </div>
    </div>
  )
} 