import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import DSASection from "@/components/dsa-section"
import ResumeSection from "@/components/resume-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <DSASection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
