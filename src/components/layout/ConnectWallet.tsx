'use client'

import Link from 'next/link'

export default function ConnectWallet() {

  return (
    <Link
      href="/connect-wallet"
      className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-primary-500/20"
    >
      Connect Wallet
    </Link>
  )
} 