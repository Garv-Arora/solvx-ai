import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CAL_URL = 'https://cal.com/solvx-ai/15min';

const steps = [
  { num: '01', title: 'Map Your Problem', detail: 'We define the processes, pain points, and bottlenecks worth automating before writing a single line of code. You get clarity on day one.' },
  { num: '02', title: 'Design The Solution', detail: 'Within 48 hours you get a clear blueprint — what we\'ll build, how it works, the tech stack, and exactly when it ships. No ambiguity.' },
  { num: '03', title: 'Build And Iterate', detail: 'We build fast, ship often, and tighten the solution using real feedback until it\'s production-ready. Average delivery: 2-3 weeks.' },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative py-12 md:py-16 bg-sx-bg">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <span className="font-condensed text-[15px] tracking-[0.15em] text-sx-accent block mb-4">PROCESS</span>
              <h2 data-testid="how-it-works-headline" className="font-condensed text-[48px] md:text-[64px] lg:text-[72px] text-sx-text leading-[0.95] tracking-wide uppercase">
                Fast launch. Tight feedback. Better systems.
              </h2>
              <p className="font-body text-[16px] text-sx-text-secondary mt-6 leading-relaxed max-w-[440px]">
                The problem is understood first. Then the solution, architecture, and delivery are aligned so your automation compounds instead of collecting dust.
              </p>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" data-testid="process-cta" className="inline-flex items-center gap-3 bg-sx-accent text-white font-condensed text-[16px] tracking-[0.12em] uppercase px-8 py-3.5 mt-8 hover:bg-sx-accent-hover transition-all">
                Book Strategy Call <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>

          <div className="space-y-1">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} data-testid={`step-${i}`} className="p-5 md:p-6 border border-sx-border">
                <div className="flex items-start gap-5">
                  <span className="font-condensed text-[32px] md:text-[40px] text-sx-accent leading-none shrink-0">{step.num}</span>
                  <div>
                    <h3 className="font-condensed text-[20px] tracking-wide uppercase text-sx-text mb-2">{step.title}</h3>
                    <p className="font-body text-[14px] text-sx-text-secondary leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} data-testid="how-it-works-quote"
          className="font-heading font-medium text-[17px] text-sx-text-muted mt-12 italic text-center">
          "From first call to live system in 2-3 weeks. No contracts. No BS."
        </motion.p>
      </div>
    </section>
  );
}
