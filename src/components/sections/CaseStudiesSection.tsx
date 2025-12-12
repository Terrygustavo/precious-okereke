import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    category: "Real Estate",
    title: "Property Portfolio Optimization",
    description: "Restructured a ₦200M real estate portfolio for maximum yield and risk diversification across commercial and residential assets.",
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    category: "SME Growth",
    title: "SME Scale-Up Strategy",
    description: "Helped a local business achieve 3x revenue growth through strategic planning, market expansion, and operational efficiency.",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "Financial Analysis",
    title: "Investment Portfolio Review",
    description: "Comprehensive analysis and rebalancing of a high-net-worth individual's investment portfolio for long-term wealth preservation.",
  },
];

export const CaseStudiesSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="case-studies" className="section-padding bg-background" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="label-text mb-4 scroll-animate animate-blur-in">Case Studies</p>
            <h2 className="heading-lg scroll-animate animate-fade-up stagger-1">
              Real results, real
              <br />
              transformations.
            </h2>
          </div>
          <Button variant="heroOutline" className="scroll-animate animate-blur-in stagger-2">
            View all studies
            <ArrowUpRight size={18} />
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`group cursor-pointer scroll-animate animate-slide-in-left stagger-${index + 3}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-border">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play size={24} className="text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-xs text-primary font-medium mb-2">{study.category}</p>
              <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors duration-200">
                {study.title}
              </h3>
              <p className="body-sm">{study.description}</p>
            </div>
          ))}
        </div>

        {/* Video Feature */}
        <div className="mt-16 relative rounded-2xl overflow-hidden border border-border scroll-animate animate-blur-in stagger-6">
          <div className="aspect-video relative">
            <video
              src="/videos/video_1.mp4"
              className="w-full h-full object-cover"
              controls
              poster="/images/thumb.jpg"
            >
              Your browser does not support the video tag.
            </video>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <p className="text-xs text-muted-foreground mb-2">Featured Insight</p>
              <h3 className="heading-md text-foreground">
                Building wealth through strategic diversification
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
