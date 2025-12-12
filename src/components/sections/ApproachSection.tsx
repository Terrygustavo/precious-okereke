import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const ApproachSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="approach" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="heading-lg mb-6 scroll-animate animate-fade-up">
            Transforming businesses
            <br />
            through <span className="text-muted-foreground">strategic</span>
            <br />
            <span className="text-muted-foreground">insight & action.</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300 scroll-animate animate-slide-in-left stagger-1">
            <div className="relative z-10">
              <p className="text-primary font-semibold mb-4">Data-Driven Strategy</p>
              <p className="body-md mb-6">
                We leverage real-time market data and business analytics to craft 
                strategies that deliver measurable results. Our approach reduces 
                decision-making cycles by 40% while maximizing ROI potential.
              </p>
              <Button variant="card" size="sm">
                Learn more
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          {/* Right Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300 scroll-animate animate-slide-in-right stagger-1">
            <div className="relative z-10">
              <p className="text-primary font-semibold mb-4">Client Success</p>
              <p className="body-md mb-6">
                "Precious helped us restructure our real estate portfolio and diversify 
                into new markets. The results exceeded our expectations within 6 months."
              </p>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground">JA</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">James Adeyemi</p>
                  <p className="text-xs text-muted-foreground">CEO, Adeyemi Holdings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
