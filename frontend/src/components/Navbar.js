import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#solutions' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Offer', href: '#offer' },
  { label: 'Contact', href: '#cta' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'solutions', 'how-it-works', 'offer', 'cta'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled ? 'bg-sx-nav-bg backdrop-blur-xl' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-center relative">
          {/* Standalone logo — fades out on scroll */}
          <motion.a
            href="#hero"
            data-testid="navbar-logo"
            className="absolute left-5 md:left-8 lg:left-12 font-condensed text-2xl text-sx-nav-logo tracking-wider"
            animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? 40 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
          >
            SOLVX<span className="text-sx-accent">.AI</span>
          </motion.a>

          {/* Center nav with logo merge slot */}
          <motion.nav
            data-testid="navbar"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-stretch border border-sx-nav-border bg-sx-nav-bg backdrop-blur-xl overflow-hidden"
          >
            {/* Logo merged into nav — slides in on scroll */}
            <motion.a
              href="#hero"
              data-testid="navbar-logo-merged"
              className="flex items-center border-r border-sx-nav-border overflow-hidden"
              animate={{
                width: scrolled ? 150 : 0,
                opacity: scrolled ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-condensed text-[18px] tracking-[0.12em] text-sx-nav-logo whitespace-nowrap px-7 py-4">
                SOLVX<span className="text-sx-accent">.AI</span>
              </span>
            </motion.a>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`font-condensed text-[18px] tracking-[0.12em] uppercase px-7 py-4 transition-all duration-200 ${
                  activeSection === link.href
                    ? 'bg-sx-nav-active-bg text-sx-nav-active-text'
                    : 'text-sx-nav-text hover:text-sx-nav-text-hover'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Theme toggle — fades on scroll */}
          <motion.button
            onClick={toggleTheme}
            data-testid="theme-toggle"
            className="absolute right-5 md:right-8 lg:right-12 w-10 h-10 flex items-center justify-center border border-sx-nav-border text-sx-nav-text hover:text-sx-nav-text-hover transition-colors"
            animate={{ opacity: scrolled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: scrolled ? 'none' : 'auto' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden bg-sx-nav-bg backdrop-blur-xl border-b border-sx-nav-border">
        <div className="px-5 py-3 flex items-center justify-between">
          <a href="#hero" className="font-condensed text-xl text-sx-nav-logo tracking-wider">
            SOLVX<span className="text-sx-accent">.AI</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              data-testid="theme-toggle-mobile"
              className="w-9 h-9 flex items-center justify-center border border-sx-nav-border text-sx-nav-text"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              data-testid="mobile-menu-toggle"
              className="w-9 h-9 flex items-center justify-center border border-sx-nav-border text-sx-nav-logo"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-4 top-[56px] bg-sx-dark border border-sx-nav-border z-50 p-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className={`block font-condensed text-lg tracking-wider uppercase px-4 py-3 transition-colors ${
                  activeSection === link.href
                    ? 'bg-sx-nav-active-bg text-sx-nav-active-text'
                    : 'text-sx-nav-text hover:text-sx-nav-text-hover'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/solvx-ai/15min"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-cta-button"
              className="mt-2 block text-center bg-sx-accent text-white font-condensed text-lg tracking-wider uppercase px-6 py-3"
              onClick={() => setMobileOpen(false)}
            >
              Book Audit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
