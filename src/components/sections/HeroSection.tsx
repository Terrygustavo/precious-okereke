import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50 animate-pulse-glow" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="label-text mb-4 opacity-0 animate-fade-up">
              Business Consultant • Global Changemaker
            </p>
            <h1 className="heading-xl mb-6 opacity-0 animate-fade-up stagger-1">
              Precious{" "}
              <span className="text-gradient-primary">Okoreke</span>
            </h1>
            <p className="body-lg max-w-lg mb-8 opacity-0 animate-fade-up stagger-2">
              Real Estate Consultant | Financial Analyst | Business Manager | 
              Entrepreneur | SME Trainer | Business Developer
            </p>
            <p className="body-md max-w-lg mb-8 text-muted-foreground opacity-0 animate-fade-up stagger-2">
              Helping companies and businesses diversify their portfolios through 
              data-driven strategies and proven methodologies.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-3">
              <Button variant="hero" size="lg">
                Book a Consultation
                <ArrowRight size={18} />
              </Button>
              <Button variant="heroOutline" size="lg">
                <Play size={18} />
                Watch My Story
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-up stagger-4">
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <a href="https://www.youtube.com/@CoachPreciousOkoreke" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 font-medium text-sm hover:text-primary transition-colors">
                  YouTube
                </a>
                <a href="https://instagram.com/coverealestaltd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 font-medium text-sm hover:text-primary transition-colors">
                  @coverealestaltd
                </a>
                <span className="text-muted-foreground/60 font-medium text-sm">
                  Global Reach
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="order-1 lg:order-2 relative opacity-0 animate-fade-up stagger-2 h-[50vh] lg:h-[80vh]">
            <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-10" />
              <img
                src="/images/hero.jpg"
                alt="Precious Okoreke - Business Consultant"
                className="w-full h-full object-cover object-top"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-lg border border-border rounded-xl p-4 max-w-[200px] z-20">
                <p className="text-xs text-muted-foreground mb-1">Businesses Transformed</p>
                <p className="text-2xl font-bold text-foreground">100+</p>
                <p className="text-xs text-primary">Success Stories</p>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 animate-float hidden lg:block z-20">
              <p className="text-xs text-muted-foreground">Portfolio Value</p>
              <p className="text-lg font-bold text-foreground">$10M+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
