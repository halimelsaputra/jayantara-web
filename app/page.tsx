import { HeroSection } from '@/components/hero-section'
import { ShowroomSection } from '@/components/showroom-section'
import { CtaSection } from '@/components/cta-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Showroom Section */}
      <ShowroomSection />

      {/* 3. CTA Section */}
      <CtaSection />

      {/* 4. Keunggulan Section */}
      <FeaturesSection />

      {/* 5. Final CTA & Footer (Template 3 READY TO) */}
      <Footer />
    </main>
  )
}
