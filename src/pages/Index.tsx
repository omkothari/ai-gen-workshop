import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import AudienceSection from "@/components/AudienceSection";
import OutcomesSection from "@/components/OutcomesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PedagogySection from "@/components/PedagogySection";
import ImpactSection from "@/components/ImpactSection";
import SpeakersSection from "@/components/SpeakersSection";
import ChiefGuestSection from "@/components/ChiefGuestSection";
import OrganizingSection from "@/components/OrganizingSection";
import VenueSection from "@/components/VenueSection";
import ContactSection from "@/components/ContactSection";
import ConclusionSection from "@/components/ConclusionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ObjectivesSection />
      <AudienceSection />
      <OutcomesSection />
      <ScheduleSection />
      <PedagogySection />
      <ImpactSection />
      <SpeakersSection />
      <ChiefGuestSection />
      <OrganizingSection />
      <VenueSection />
      <ConclusionSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;