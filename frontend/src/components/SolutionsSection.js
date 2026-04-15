import { motion } from 'framer-motion';
import { BarChart3, Bot, Zap, Wrench, RefreshCw, ClipboardList } from 'lucide-react';

const solutions = [
  { icon: BarChart3, title: 'Custom Dashboards', desc: 'Real-time visibility into your ops, sales, or production. A live command center built for your data — not another spreadsheet.' },
  { icon: Bot, title: 'AI Agents & Chatbots', desc: 'Customer support, lead qualification, FAQ handling — intelligent agents that work 24/7 without salaries or sick days.' },
  { icon: Zap, title: 'Workflow Automation', desc: 'Kill repetitive tasks. Auto-assign, auto-notify, auto-update. Connect every tool in your stack seamlessly.' },
  { icon: Wrench, title: 'Internal Tools', desc: 'Admin panels, approval flows, inventory systems — built for how YOUR team actually works, not a generic template.' },
  { icon: RefreshCw, title: 'Data Pipelines', desc: 'Connect your tools. Sync data across platforms automatically. Build a single source of truth for your operations.' },
  { icon: ClipboardList, title: 'CRM & Ops Systems', desc: 'Track leads, orders, and projects — your way, not Salesforce\'s way. Custom-built for your exact workflow.' },
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      data-testid="solutions-section"
      className="relative py-12 md:py-16 bg-sx-bg"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-8">
          <span className="font-condensed text-[15px] tracking-[0.15em] text-sx-accent block mb-4">SERVICES</span>
          <h2 data-testid="solutions-headline" className="font-condensed text-[48px] md:text-[64px] lg:text-[72px] text-sx-text leading-[0.95] tracking-wide uppercase max-w-[700px]">
            Built for teams that need results
          </h2>
          <p className="font-body text-[16px] text-sx-text-secondary mt-5 leading-relaxed max-w-[520px]">
            No templates. No off-the-shelf software that "kind of" works. We build what your business actually needs — from scratch, fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sx-border">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                data-testid={`solution-card-${i}`}
                className="p-6 md:p-8 bg-sx-bg hover:bg-sx-surface-hover transition-colors duration-200"
              >
                <Icon size={22} className="text-sx-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-condensed text-[22px] tracking-wide uppercase text-sx-text mb-3">{sol.title}</h3>
                <p className="font-body text-[14px] text-sx-text-secondary leading-relaxed">{sol.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
