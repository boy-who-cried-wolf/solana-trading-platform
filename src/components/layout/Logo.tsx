'use client'

import Link from 'next/link'

export default function Logo() {

  return (
    <Link href="/" className="flex items-center group">
      <div className="flex items-center">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/20 flex items-center justify-center">
            <span className="text-xl font-bold text-white">O</span>
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-xl blur-sm"></div>
          </div>
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ORAO</span>
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
  )
} 