import { motion } from 'framer-motion';
import { ArrowRight, Target, Cpu, Bot, Workflow, Zap, BarChart3 } from 'lucide-react';

const CAL_URL = 'https://cal.com/solvx-ai/15min';

const stats = [
  { value: '25+', label: 'Automations built' },
  { value: '500+', label: 'Hours saved monthly' },
  { value: '3.2x', label: 'Avg efficiency gain' },
];

const capabilities = [
  { icon: Bot, text: 'Custom AI agents' },
  { icon: Cpu, text: 'Personalised applications' },
  { icon: Zap, text: 'Workflow automation' },
  { icon: BarChart3, text: 'Dashboards & analytics' },
  { icon: Workflow, text: 'Data pipelines' },
  { icon: Target, text: 'Internal tools' },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen bg-sx-dark grid-pattern overflow-hidden"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12 pt-28 md:pt-36 pb-12 md:pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <span className="w-2 h-2 bg-sx-accent" />
          <span className="font-condensed text-[16px] tracking-[0.2em] text-sx-accent">
            AI AUTOMATION AGENCY
          </span>
        </motion.div>

        {/* Main headline — centered */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06 }}
          data-testid="hero-headline"
          className="font-condensed text-[56px] sm:text-[72px] md:text-[88px] lg:text-[110px] text-sx-text-on-dark leading-[0.95] tracking-wide uppercase text-center mb-6"
        >
          We build AI systems that run your business
        </motion.h1>

        {/* Subheadline — centered */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          data-testid="hero-subheadline"
          className="font-body text-[17px] md:text-[19px] text-sx-text-on-dark-secondary max-w-[620px] mx-auto leading-relaxed mb-8 text-center"
        >
          Custom AI agents, personalised applications, workflow automations, dashboards, and internal tools — from problem to production in 2-3 weeks.
        </motion.p>

        {/* CTA — centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-14 text-center"
        >
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-button"
            className="inline-flex items-center gap-3 bg-sx-accent text-white font-condensed text-[18px] tracking-[0.15em] uppercase px-10 py-4 hover:bg-sx-accent-hover transition-all duration-200"
          >
            Get Started
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </motion.div>

        {/* Stats row — inline, no box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-testid={`hero-stat-${i}`}>
                <p className="font-condensed text-[36px] md:text-[44px] text-sx-accent leading-none mb-1">{stat.value}</p>
                <p className="font-body text-[12px] text-sx-text-on-dark-muted tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Capabilities — inline tags */}
          <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={i} className="flex items-center gap-2 px-3 py-2 border border-sx-border-dark" data-testid={`hero-capability-${i}`}>
                  <Icon size={14} className="text-sx-accent flex-shrink-0" strokeWidth={1.5} />
                  <span className="font-body text-[12px] text-sx-text-on-dark-secondary">{cap.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
