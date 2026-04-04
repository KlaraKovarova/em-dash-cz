import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import AgentsShowcaseSection from '@/components/sections/AgentsShowcaseSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AgentsShowcaseSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
