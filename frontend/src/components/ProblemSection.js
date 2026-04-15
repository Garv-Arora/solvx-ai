import { motion } from 'framer-motion';
import { Clock, BarChart3, Unplug, Banknote, Flame } from 'lucide-react';

const painPoints = [
  { icon: Clock, text: 'Repetitive tasks eating 15+ hours a week', stat: '15+ hrs/week wasted' },
  { icon: BarChart3, text: 'No real-time visibility into what\'s actually happening', stat: 'Zero visibility' },
  { icon: Unplug, text: 'Tools that don\'t talk to each other', stat: 'Siloed systems' },
  { icon: Banknote, text: 'Hiring people for work that software should be doing', stat: 'Overspending' },
  { icon: Flame, text: 'Putting out fires instead of building systems', stat: 'Reactive mode' },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative py-12 md:py-16 bg-sx-dark border-t border-sx-border-dark"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <span className="font-condensed text-[15px] tracking-[0.15em] text-sx-accent block mb-4">THE PROBLEM</span>
              <h2 data-testid="problem-headline" className="font-condensed text-[48px] md:text-[64px] lg:text-[72px] text-sx-text-on-dark leading-[0.95] tracking-wide uppercase">
                Your team is drowning in manual work
              </h2>
              <p data-testid="problem-closer" className="font-body text-[16px] text-sx-text-on-dark-muted mt-6 leading-relaxed max-w-[440px]">
                Every week you wait is another week of wasted time, lost deals, and burnt-out teams. Sound familiar?
              </p>
            </motion.div>
          </div>

          <div className="space-y-1">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  data-testid={`pain-point-${i}`}
                  className="flex items-center gap-4 p-4 border border-sx-border-dark hover:border-sx-border-dark-hover transition-all"
                >
                  <Icon size={16} strokeWidth={1.5} className="text-sx-accent flex-shrink-0" />
                  <p className="font-body text-[15px] text-sx-text-on-dark-secondary flex-1">{point.text}</p>
                  <span className="font-condensed text-[13px] tracking-wider text-sx-accent hidden sm:block">{point.stat}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
