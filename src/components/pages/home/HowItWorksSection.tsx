
export default function HowItWorksSection() {
    return (
        <section className="py-32 bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Simple steps to start winning</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="group p-8 bg-gray-900 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
                        <div className="text-4xl font-bold text-primary-500 mb-6">1</div>
                        <h3 className="font-bold text-xl mb-4 text-white">Hold $ORAO Tokens</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Every 10,000 $ORAO tokens you hold = 1 raffle entry
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
    )
}
