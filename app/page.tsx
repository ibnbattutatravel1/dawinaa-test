import { HeroSection } from "@/components/sections/hero-section"
import { SearchSection } from "@/components/sections/search-section"
import { FeaturedDoctorsSection } from "@/components/sections/featured-doctors-section"
import { SpecialtiesSection } from "@/components/sections/specialties-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogSection } from "@/components/sections/blog-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SearchSection />
      <FeaturedDoctorsSection />
      <SpecialtiesSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </div>
  )
}
