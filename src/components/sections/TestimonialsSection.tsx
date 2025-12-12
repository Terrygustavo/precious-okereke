import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "Precious transformed our approach to real estate investment. His strategic insight helped us identify opportunities we would have never seen on our own.",
    author: "Chidi Okonkwo",
    role: "Real Estate Investor",
    company: "Okonkwo Properties",
  },
  {
    quote: "Working with Coach Precious was a game-changer for our SME. We went from struggling to scaling in just 8 months with his guidance.",
    author: "Amara Nwosu",
    role: "Founder",
    company: "Nwosu Ventures",
  },
  {
    quote: "The financial analysis and portfolio diversification strategy helped us weather market volatility while growing our net worth significantly.",
    author: "Emeka Obi",
    role: "High-Net-Worth Client",
    company: "Private Investor",
  },
];

export const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section className="section-padding bg-background-secondary" ref={sectionRef}>
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="heading-lg mb-6 scroll-animate animate-fade-up">
            Success Stories from
            <br />
            <span className="text-muted-foreground">Our Clients.</span>
          </h2>
        </div>

        {/* Stats Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 scroll-animate animate-blur-in stagger-1">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=400&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <p className="text-5xl md:text-7xl font-bold text-foreground mb-2">
              $10M+ MANAGED
            </p>
            <p className="text-muted-foreground">
              in client portfolio assets under advisory
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 scroll-animate animate-slide-in-left stagger-${index + 2}`}
            >
              <p className="body-sm mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-medium text-foreground">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-card border border-border rounded-2xl scroll-animate animate-blur-in stagger-5">
          <div>
            <h3 className="heading-sm mb-2">Ready to transform your business?</h3>
            <p className="body-sm">Join successful entrepreneurs and investors who trust Precious Okereke.</p>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 text-primary hover:text-primary-glow transition-colors duration-200 font-medium"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
