import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-32">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10">
                  <span className="text-sm font-medium">🎰 Next Draw in: 23:45:12</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Solana Lottery
                </h1>
                <p className="text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                  The first hourly raffle-style lottery on Solana. More tokens = more entries = better odds!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link
                    href="/lottery"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg tracking-wide text-primary-600 bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5"
                  >
                    Buy Tickets
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/how-to-play"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-lg tracking-wide text-white bg-primary-600/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-primary-600/30 hover:-translate-y-0.5"
                  >
                    How to Play
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Current Jackpot Section */}
          <section className="py-32 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">Current Jackpot</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">The biggest prize pool in Solana lottery history</p>
              </div>
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 border border-primary-700/50">
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Total Prize Pool</p>
                  <h3 className="text-6xl md:text-8xl font-bold text-white mb-6">1,234,567 SOL</h3>
                  <p className="text-gray-400 mb-8">≈ $123,456,789</p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Next Draw</p>
                      <p className="text-white font-semibold">23:45:12</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Tickets Sold</p>
                      <p className="text-white font-semibold">45,678</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Your Tickets</p>
                      <p className="text-white font-semibold">5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-32 bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Simple steps to start winning</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="group p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-500 mb-6">1</div>
                  <h3 className="font-bold text-xl mb-4 text-white">Hold $BALL Tokens</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Every 10,000 $BALL tokens you hold = 1 raffle entry
                  </p>
                </div>
                <div className="group p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-500 mb-6">2</div>
                  <h3 className="font-bold text-xl mb-4 text-white">More Entries = Better Odds</h3>
                  <p className="text-gray-400 leading-relaxed">
                    50,000 tokens = 5 entries, 100,000 tokens = 10 entries
                  </p>
                </div>
                <div className="group p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-500 mb-6">3</div>
                  <h3 className="font-bold text-xl mb-4 text-white">Hourly Draws</h3>
                  <p className="text-gray-400 leading-relaxed">
                    VRF selects a random ticket every hour, winner gets paid automatically
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Previous Winners Section */}
          <section className="py-32 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">Previous Winners</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">See who won big in our recent draws</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div className="ml-4">
                        <p className="text-white font-semibold">Draw #1234</p>
                        <p className="text-gray-400 text-sm">2 hours ago</p>
                      </div>
                    </div>
                    <span className="text-green-400 font-semibold">+500 SOL</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span>Winning Numbers:</span>
                    <div className="flex ml-2">
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs mx-1">7</div>
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs mx-1">14</div>
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs mx-1">21</div>
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs mx-1">28</div>
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs mx-1">35</div>
                    </div>
                  </div>
                </div>
                {/* Add more winner cards here */}
              </div>
            </div>
          </section>

          {/* Verify Draws Section */}
          <section className="py-32 bg-gray-950">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-white">Verify Draw Fairness</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Don't trust, verify! Every draw is provably fair and fully auditable.</p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-white mb-4">Snapshot Files</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Contains all token holders and their ticket counts</li>
                      <li>• First line: Winner address and winning ticket number</li>
                      <li>• Complete list of all participants and their tickets</li>
                      <li>• Sorted by wallet address</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                    <h3 className="text-xl font-bold text-white mb-4">Tickets Files</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Shows the ticket assignment matrix</li>
                      <li>• Maps each ticket number to its owner</li>
                      <li>• Original unsorted order from RPC</li>
                      <li>• Cross-verifiable with snapshot files</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/verify"
                    className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-300"
                  >
                    Browse Verification Files
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="container mx-auto px-4 relative">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-white">Ready to Win Big?</h2>
                <p className="text-xl mb-10 text-gray-200">
                  Join thousands of players who are already winning on our platform.
                </p>
                <Link
                  href="/lottery"
                  className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-lg tracking-wide text-primary-600 bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-0.5"
                >
                  Buy Tickets Now
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
