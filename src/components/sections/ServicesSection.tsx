import { Building2, BarChart3, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    icon: Building2,
    title: "Real Estate Consulting",
    description: "Strategic real estate advisory for investors and developers. Property portfolio management, market analysis, and investment optimization.",
  },
  {
    icon: BarChart3,
    title: "Financial Analysis",
    description: "Comprehensive financial assessments, investment analysis, and data-driven insights to maximize returns and minimize risks.",
  },
  {
    icon: Users,
    title: "Business Consulting for SMEs",
    description: "Tailored strategies for small and medium enterprises to scale operations, increase efficiency, and achieve sustainable growth.",
  },
];

const additionalServices = [
  {
    icon: Target,
    title: "Business Development",
    description: "Identifying growth opportunities, market expansion strategies, and partnership development to accelerate your business trajectory.",
  },
  {
    icon: Lightbulb,
    title: "Business Coaching & SME Training",
    description: "One-on-one coaching and group training programs to empower entrepreneurs and business leaders with actionable skills.",
  },
  {
    icon: TrendingUp,
    title: "Portfolio Diversification",
    description: "Strategic portfolio management for high-net-worth individuals. Data-driven diversification across real estate, equities, and alternative investments.",
  },
];

export const ServicesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-background-secondary" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="heading-lg mb-6 scroll-animate animate-fade-up">
            Expert Services
            <br />
            <span className="text-muted-foreground">For Your Success.</span>
          </h2>
          <p className="body-lg scroll-animate animate-blur-in stagger-1">
            Comprehensive consulting services designed to help businesses and high-net-worth 
            individuals achieve their goals through strategic planning and data-driven insights.
          </p>
        </div>

        {/* Service Cards - Top Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 scroll-animate animate-slide-in-left stagger-${index + 2}`}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm mb-3 text-foreground">{service.title}</h3>
              <p className="body-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Cards - Bottom Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 scroll-animate animate-slide-in-right stagger-${index + 5}`}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-sm mb-3 text-foreground">{service.title}</h3>
              <p className="body-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center mb-8">
            Areas of Expertise
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["Real Estate", "Financial Markets", "SME Growth", "Portfolio Management", "Business Strategy"].map((area) => (
              <span
                key={area}
                className="text-muted-foreground/40 font-medium text-sm hover:text-muted-foreground transition-colors duration-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
