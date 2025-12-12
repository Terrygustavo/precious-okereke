import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Business Consulting", href: "#" },
    { label: "Real Estate Advisory", href: "#" },
    { label: "Financial Analysis", href: "#" },
    { label: "Business Coaching", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container section-padding">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">PO</span>
              </div>
              <span className="text-foreground font-semibold text-xl">
                Precious Okoreke
              </span>
            </a>
            <p className="body-md max-w-sm mb-6">
              Empowering businesses and high-net-worth individuals through strategic consulting, data-driven insights, and transformative growth solutions.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Email"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                >
                  {social}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Precious Okoreke Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
