import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import VacancyCostCalculator from "@/components/vacancy-cost-calculator"
import BusinessModelSection from "@/components/business-model-section"
import ServicesSection from "@/components/services-section"
import SectorsSection from "@/components/sectors-section"
import AcademySection from "@/components/academy-section"
import PartnersSection from "@/components/partners-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import HubspotChatbot from "@/components/hubspot-chatbot"
import { CharlotteChatbot } from "@/components/charlotte-chatbot"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <BusinessModelSection />
      <VacancyCostCalculator />
      <ServicesSection />
      <SectorsSection />
      <AcademySection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <HubspotChatbot />
      <CharlotteChatbot />
    </main>
  )
}
