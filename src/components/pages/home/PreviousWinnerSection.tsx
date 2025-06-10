
export default function PreviousWinnerSection() {
    return (
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
    )
}
