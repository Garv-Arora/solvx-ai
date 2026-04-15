import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, BarChart3, Brain } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function EmailCaptureSection() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    if (!email.trim() || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email.');
      return;
    }

    setStatus('loading');
    try {
      const res = await axios.post(`${API}/subscribe`, { email: email.trim() });
      setStatus('success');
      setMessage(res.data.message || "You're in! Check your inbox.");
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  };

  return (
    <section
      id="email-capture"
      data-testid="email-capture-section"
      className="relative py-20 md:py-28"
    >
      <div className="max-w-[600px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-10 rounded-2xl bg-sx-surface border border-sx-border"
        >
          <span className="inline-block font-body text-[12px] font-medium text-sx-text-muted mb-3 px-3 py-1 rounded-full border border-sx-border">
            Not Ready to Call?
          </span>

          <h2
            data-testid="email-headline"
            className="font-heading font-bold text-xl md:text-2xl text-sx-text tracking-tight"
          >
            Steal Our Systems
          </h2>

          <p className="font-body text-[14px] text-sx-text-secondary mt-2 leading-relaxed">
            We share the exact automations, tools, and playbooks we use to build fast. Free. Weekly.
          </p>

          <div className="flex flex-wrap gap-4 mt-5 mb-7">
            <div className="flex items-center gap-2 text-sx-text-muted">
              <Wrench size={14} strokeWidth={1.5} />
              <span className="font-body text-[12px]">Automation breakdowns</span>
            </div>
            <div className="flex items-center gap-2 text-sx-text-muted">
              <BarChart3 size={14} strokeWidth={1.5} />
              <span className="font-body text-[12px]">Tool reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sx-text-muted">
              <Brain size={14} strokeWidth={1.5} />
              <span className="font-body text-[12px]">Ops strategies</span>
            </div>
          </div>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: 'spring' }}
              data-testid="email-success-message"
              className="py-4 text-center"
            >
              <p className="font-body text-[14px] text-sx-accent font-medium">{message}</p>
            </motion.div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute opacity-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Your best email"
                  data-testid="email-input"
                  className={`flex-1 bg-sx-bg border rounded-xl px-4 py-3 font-body text-[14px] text-sx-text placeholder:text-sx-text-muted focus:outline-none focus:ring-2 focus:ring-sx-accent/30 transition-all ${
                    status === 'error'
                      ? 'border-red-400'
                      : 'border-sx-border'
                  }`}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  data-testid="email-submit-button"
                  className="inline-flex items-center justify-center gap-2 bg-sx-text text-sx-bg font-body font-medium text-[13px] px-5 py-3 rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'loading' ? 'Sending...' : (
                    <>
                      Send Me the Playbooks
                      <ArrowRight size={14} strokeWidth={2} />
                    </>
                  )}
                </button>
              </form>
              {status === 'error' && (
                <p data-testid="email-error-message" className="font-body text-[12px] text-red-500 mt-2">
                  {message}
                </p>
              )}
            </div>
          )}

          <p className="font-body text-[11px] text-sx-text-muted mt-4">
            Join 200+ operators. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
