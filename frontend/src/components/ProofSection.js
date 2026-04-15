import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AgencyFlow Dashboard',
    desc: 'Real-time project tracker & client portal for a 40-person digital agency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    metrics: ['20 hrs saved/week', 'Built in 12 days', '5 integrations'],
    category: 'Dashboard',
  },
  {
    title: 'PropBot AI Assistant',
    desc: 'Lead qualification chatbot for a real estate firm handling 200+ inquiries/day.',
    image: 'https://images.unsplash.com/photo-1720135885007-454165745e21?w=600&h=340&fit=crop',
    metrics: ['94% accuracy', '24/7 coverage', '3x faster response'],
    category: 'AI Agent',
  },
  {
    title: 'DecorOps Inventory System',
    desc: 'Custom inventory & order management tool for a home decor brand with 3 warehouses.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop',
    metrics: ['Zero stockouts', 'Built in 14 days', '2 warehouse sync'],
    category: 'Internal Tool',
  },
  {
    title: 'LeadSync Pipeline',
    desc: 'Automated lead routing & follow-up system across 4 sales channels.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=340&fit=crop',
    metrics: ['40% more conversions', 'Auto follow-ups', 'Built in 10 days'],
    category: 'Automation',
  },
];

export default function ProofSection() {
  return (
    <section
      id="proof"
      data-testid="proof-section"
      className="relative py-12 md:py-16 bg-sx-dark grid-pattern"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span className="font-condensed text-[15px] tracking-[0.15em] text-sx-accent block mb-3">WORK</span>
          <h2
            data-testid="proof-headline"
            className="font-condensed text-[48px] md:text-[64px] lg:text-[72px] text-sx-text-on-dark leading-[0.95] tracking-wide uppercase"
          >
            Built. Shipped. Working.
          </h2>
          <p className="font-body text-[15px] text-sx-text-on-dark-muted mt-3">
            Real projects. Real results. Here's what we've delivered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              data-testid={`proof-card-${i}`}
              className="group border border-sx-border-dark overflow-hidden hover:border-sx-border-dark-hover transition-all duration-300 bg-sx-dark"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-85 group-hover:scale-[1.03] transition-all duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-sx-dark via-transparent to-transparent" />
                <span className="absolute top-3 left-3 font-body text-[10px] tracking-wider uppercase px-2.5 py-1 bg-[rgba(0,0,0,0.5)] text-[rgba(255,255,255,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                  {project.category}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-condensed text-[18px] tracking-wide uppercase text-sx-text-on-dark">{project.title}</h3>
                  <ArrowUpRight size={16} className="text-sx-text-on-dark-muted flex-shrink-0 mt-0.5 group-hover:text-sx-accent transition-colors" />
                </div>
                <p className="font-body text-[12px] text-sx-text-on-dark-muted mb-3 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.metrics.map((metric, j) => (
                    <span key={j} className="font-body text-[10px] font-medium px-2.5 py-1 border border-sx-accent/20 text-sx-accent/80">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
