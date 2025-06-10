'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [nextDrawTime, setNextDrawTime] = useState(new Date(Date.now() + 3600000)) // 1 hour from now
  const [solPrice, setSolPrice] = useState(98.45)
  const [solChange, setSolChange] = useState(-2.34)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const formatTimeRemaining = () => {
    const diff = nextDrawTime.getTime() - currentTime.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
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

        {/* Main Header */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">S</span>
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-xl blur-sm"></div>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SOLANA</span>
                    <div className="ml-2 px-2 py-1 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg">
                      <span className="text-sm font-bold text-white">LOTTO</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-0.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="ml-1.5 text-xs text-gray-400">Live Lottery Platform</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                href="/lottery" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Buy Tickets
              </Link>
              <Link 
                href="/how-to-play" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                How to Play
              </Link>
              <Link 
                href="/verify" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Verify Draws
              </Link>
              <Link 
                href="/winners" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Winners
              </Link>
              <Link 
                href="/leaderboard" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Leaderboard
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="p-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <Link 
                href="/connect-wallet"
                className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-primary-500/20"
              >
                Connect Wallet
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/lottery" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Buy Tickets
              </Link>
              <Link 
                href="/how-to-play" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                How to Play
              </Link>
              <Link 
                href="/verify" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Verify Draws
              </Link>
              <Link 
                href="/winners" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Winners
              </Link>
              <Link 
                href="/leaderboard" 
                className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              >
                Leaderboard
              </Link>
              <Link 
                href="/connect-wallet"
                className="mt-3 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 text-center shadow-lg shadow-primary-500/20"
              >
                Connect Wallet
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 