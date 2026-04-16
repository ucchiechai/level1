import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000] dark">
      <HeroSection />
      <MenuSection />
    </main>
  )
}
