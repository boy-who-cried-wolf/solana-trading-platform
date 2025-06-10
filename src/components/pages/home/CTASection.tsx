import Link from "next/link";

export default function CTASection() {
    return (
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
    )
}
