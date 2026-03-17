import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AccreditationsBar from "@/components/AccreditationsBar";
import StatsSection from "@/components/StatsSection";
import TestPrepSection from "@/components/TestPrepSection";
import DestinationsSection from "@/components/DestinationsSection";
import ServicesSection from "@/components/ServicesSection";
import UniversitiesMarquee from "@/components/UniversitiesMarquee";
import VisaEventsSection from "@/components/VisaEventsSection";
import DirectorSection from "@/components/DirectorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground antialiased">
    <WhatsAppButton />
    <Navbar />
    <HeroSection />
    <AccreditationsBar />
    <StatsSection />
    <TestPrepSection />
    <DestinationsSection />
    <ServicesSection />
    <UniversitiesMarquee />
    <VisaEventsSection />
    <DirectorSection />
    <TestimonialsSection />
    <FaqSection />
    <Footer />
  </div>
);

export default Index;
