const quickLinks = [
  { label: 'Services', href: '#solutions' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Work', href: '#proof' },
  { label: 'Book a Call', href: 'https://cal.com/solvx-ai/15min' },
];

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-sx-dark border-t border-sx-border-dark py-8 md:py-10"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#hero" className="font-heading font-bold text-base text-sx-text-on-dark tracking-tight">
              SolvX<span className="text-sx-accent">.AI</span>
            </a>
            <p className="font-body text-[12px] text-sx-text-on-dark-muted mt-2 max-w-[280px] leading-relaxed">
              We build what your business needs. Custom AI tools, agents, and automations — delivered in weeks.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                className="font-body text-[12px] text-sx-text-on-dark-muted hover:text-sx-text-on-dark-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sx-border-dark flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-sx-text-on-dark-muted">
            &copy; 2026 SolvX.AI. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" data-testid="footer-privacy" className="font-body text-[11px] text-sx-text-on-dark-muted hover:text-sx-text-on-dark-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" data-testid="footer-terms" className="font-body text-[11px] text-sx-text-on-dark-muted hover:text-sx-text-on-dark-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
