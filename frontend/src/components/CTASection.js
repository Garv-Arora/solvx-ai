import { motion } from 'framer-motion';

const CAL_URL = 'https://cal.com/solvx-ai/15min';

export default function CTASection() {
  return (
    <section
      id="cta"
      data-testid="cta-section"
      className="relative py-14 md:py-20 bg-sx-dark grid-pattern overflow-hidden"
    >
      <div className="relative z-10 max-w-[700px] mx-auto px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-condensed text-[15px] tracking-[0.15em] text-sx-accent block mb-3">CONTACT</span>
          <h2
            data-testid="cta-headline"
            className="font-condensed text-[48px] md:text-[64px] lg:text-[80px] text-sx-text-on-dark tracking-wide leading-[0.95] uppercase"
          >
            If you need smarter systems, we can build the AI for it.
          </h2>
          <p className="font-body text-[15px] text-sx-text-on-dark-muted mt-4 max-w-[500px] mx-auto leading-relaxed">
            We'll review your workflow, pain points, and current tools — then show you the fastest path to automation.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hard-cta-button"
              className="inline-flex items-center gap-2 bg-sx-accent text-white font-condensed text-[16px] tracking-[0.12em] uppercase px-10 py-4 hover:bg-sx-accent-hover transition-all duration-200"
            >
              Book Your Free Strategy Call
            </a>
            <p data-testid="cta-microcopy" className="font-body text-[12px] text-sx-text-on-dark-muted">
              No credit card · No commitment · Spots limited this month
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
