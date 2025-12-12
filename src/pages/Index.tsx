import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <ValidationSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
