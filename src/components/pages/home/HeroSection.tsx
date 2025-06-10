import Link from 'next/link'

export default function HeroSection() {
    return (
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
    )
}
