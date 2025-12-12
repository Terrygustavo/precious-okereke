import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const CTASection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 scroll-animate animate-fade-up">
            Ready to transform
            <br />
            your business?
          </h2>
          <p className="body-lg mb-8 scroll-animate animate-blur-in stagger-1">
            Book a consultation with Precious Okoreke to explore how strategic 
            consulting can accelerate your growth journey—whether in real estate, 
            business development, or portfolio management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="scroll-animate animate-slide-in-left stagger-2">
              Schedule a Consultation
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl" className="scroll-animate animate-slide-in-right stagger-2">
              Follow on YouTube
            </Button>
          </div>

          {/* Trust badges */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-6 scroll-animate animate-blur-in stagger-3">
              Expertise & Specializations
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {["Real Estate", "Financial Analysis", "SME Training", "Business Coaching", "Portfolio Management"].map((badge, index) => (
                <span
                  key={badge}
                  className={`text-xs text-muted-foreground/60 font-medium uppercase tracking-wider scroll-animate animate-blur-in stagger-${index + 4}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
