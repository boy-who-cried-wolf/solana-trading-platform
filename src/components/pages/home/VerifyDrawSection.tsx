import Link from 'next/link'

export default function VerifyDrawSection() {
    return (
        <section className="py-32 bg-gray-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Verify Draw Fairness</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Don&apos;t trust, verify! Every draw is provably fair and fully auditable.</p>
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
    )
}
