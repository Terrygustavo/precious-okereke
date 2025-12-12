import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const validationPoints = [
  "100+ businesses and individuals transformed",
  "Data-driven methodologies backed by real results",
  "Personalized strategies for HNWIs and SMEs",
  "End-to-end support from analysis to execution",
];

export const ValidationSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-background-secondary" ref={sectionRef}>
      <div className="section-container">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 scroll-animate animate-fade-up">
            Trusted by entrepreneurs
            <br />
            and investors <span className="text-gradient-primary">across</span>
            <br />
            <span className="text-gradient-primary">industries.</span>
          </h2>
          <p className="body-lg mb-8 scroll-animate animate-blur-in stagger-1">
            With years of experience in real estate, financial analysis, and business 
            development, Precious Okereke has helped countless clients achieve their goals.
          </p>
          <Button variant="heroOutline" size="lg" className="scroll-animate animate-blur-in stagger-2">
            Watch on YouTube
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* Validation Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {validationPoints.map((point, index) => (
            <div
              key={point}
              className={`flex items-start gap-3 p-4 bg-card border border-border rounded-xl scroll-animate animate-slide-in-left stagger-${index + 3}`}
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{point}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="label-text mb-4 scroll-animate animate-blur-in stagger-7">Ready to get started?</p>
          <p className="body-md mb-6 scroll-animate animate-blur-in stagger-8">
            Join the community of changemakers at @CoachPreciousOkereke on YouTube.
          </p>
        </div>
      </div>
    </section>
  );
};
