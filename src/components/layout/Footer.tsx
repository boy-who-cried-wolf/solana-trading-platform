'use client'

import Link from 'next/link'
import Logo from './Logo'
import { SocialIconGithub, SocialIconReddit, SocialIconSolana, SocialIconTwitter } from '../SocialIcons'

const quickLinks = [
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

const supportLinks = [
  {
    href: '/faq',
    label: 'FAQ'
  },
  {
    href: '/contact',
    label: 'Contact Us'
  },
  {
    href: '/terms',
    label: 'Terms of Service'
  },
  {
    href: '/privacy',
    label: 'Privacy Policy'
  },
  {
    href: '/disclaimer',
    label: 'Legal Disclaimer'
  }
]

const socialLinks = [
  {
    href: '#',
    icon: <SocialIconTwitter />,
    label: 'Twitter'
  },
  {
    href: '#',
    icon: <SocialIconGithub />,
    label: 'GitHub'
  },
  {
    href: '#',
    icon: <SocialIconReddit />,
    label: 'Reddit'
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo />

            <p className="text-gray-400 mb-6 max-w-md">
              The first hourly raffle-style lottery on Solana. More $ORAO tokens = more entries = better odds! Join thousands of players and win big with our hourly draws and instant payouts.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ORAO Lottery. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Built on</span>
              <div className="flex items-center">

                <SocialIconSolana />
                <span className="ml-2 text-gray-400 text-sm">Solana</span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              IMPORTANT LEGAL DISCLAIMER: This is NOT a lottery. ORAO Lottery is a memecoin project and entertainment platform built on the Solana blockchain.
              This project is not affiliated with, endorsed by, or connected to any state lottery, local lottery, or the official Powerball lottery operated by the Multi-State Lottery Association.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 