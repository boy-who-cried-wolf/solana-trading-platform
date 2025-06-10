'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import HeaderTopBar from './HeaderTopBar'
import Logo from './Logo'
import HeaderNotification from './HeaderNotification'
import ConnectWallet from './ConnectWallet'

const navigationItems = [
  {
    href: '/lottery',
    label: 'Buy Tickets'
  },
  {
    href: '/how-to-play',
    label: 'How to Play'
  },
  {
    href: '/verify',
    label: 'Verify Draws'
  },
  {
    href: '/winners',
    label: 'Winners'
  },
  {
    href: '/leaderboard',
    label: 'Leaderboard'
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <HeaderTopBar />

        {/* Main Header */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <HeaderNotification />
              <ConnectWallet />
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
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              <ConnectWallet />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 