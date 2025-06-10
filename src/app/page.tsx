import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CTASection from '@/components/pages/home/CTASection'
import HeroSection from '@/components/pages/home/HeroSection'
import HowItWorksSection from '@/components/pages/home/HowItWorksSection'
import JackpotSection from '@/components/pages/home/JackpotSection'
import PreviousWinnerSection from '@/components/pages/home/PreviousWinnerSection'
import VerifyDrawSection from '@/components/pages/home/VerifyDrawSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
          {/* Hero Section */}
          <HeroSection />

          {/* Current Jackpot Section */}
          <JackpotSection />

          {/* How It Works Section */}
          <HowItWorksSection />

          {/* Previous Winners Section */}
          <PreviousWinnerSection />

          {/* Verify Draws Section */}
          <VerifyDrawSection />

          {/* CTA Section */}
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}
