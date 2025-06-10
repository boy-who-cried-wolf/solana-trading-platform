
export default function JackpotSection() {
    return (
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
    )
}
