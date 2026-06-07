import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { SectorMarquee } from "@/components/sector-marquee"
import { CapabilitiesPrelude } from "@/components/capabilities-prelude"
import { ProjectsSection } from "@/components/projects-section"
import { StudioSection } from "@/components/studio-section"
import { EditorialBreak } from "@/components/editorial-break"
import { ApproachSection } from "@/components/approach-section"
import { JournalSection } from "@/components/journal-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <Navigation />
      <Hero />
      <SectorMarquee />
      <CapabilitiesPrelude />
      <ProjectsSection />
      <EditorialBreak />
      <StudioSection />
      <ApproachSection />
      <JournalSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
