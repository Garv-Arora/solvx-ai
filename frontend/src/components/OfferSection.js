import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const valueStack = [
  { item: 'Free Operations Audit', detail: 'We\'ll find the 3 biggest time-wasters in your workflow' },
  { item: 'Custom Solution Blueprint', detail: 'A clear plan for what to build and why' },
  { item: 'Priority Build Slot', detail: 'We only take 4 new projects per month' },
  { item: '2-3 Week Delivery Guarantee', detail: 'Working system live within weeks of kickoff' },
  { item: '30-Day Support Included', detail: 'Post-launch fixes and tweaks, on us' },
];

export default function OfferSection() {
  return (
    <section
      id="offer"
      data-testid="offer-section"
      className="relative py-12 md:py-16 bg-sx-bg"
    >
      <div className="max-w-[800px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <span className="font-condensed text-[15px] tracking-[0.15em] text-sx-accent block mb-4">THE OFFER</span>
          <h2
            data-testid="offer-headline"
            className="font-condensed text-[48px] md:text-[64px] text-sx-text leading-[0.95] tracking-wide uppercase"
          >
            Here's what happens when you book a call
          </h2>
          <p className="font-body text-[15px] text-sx-text-secondary mt-4">
            No pitch decks. No "let me get back to you." Just a real conversation about your operations.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {valueStack.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              data-testid={`offer-item-${i}`}
              className="flex items-start gap-4 p-4 md:p-5 border border-sx-border hover:border-sx-border-hover transition-all duration-200"
            >
              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full mt-0.5">
                <span className="w-2 h-2 rounded-full bg-sx-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-condensed text-[16px] tracking-wide uppercase text-sx-text">{item.item}</p>
                <p className="font-body text-[12px] text-sx-text-muted mt-0.5">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="font-body text-[14px] text-sx-text-muted">
            Your cost for the call: <span className="text-sx-accent font-semibold">$0</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
