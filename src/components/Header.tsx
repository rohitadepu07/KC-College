import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admission', href: '#admission' },
  { label: 'Placements', href: '#placements' },
  { label: 'Campus Life', href: '#campus' },
  { label: 'News & Events', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* ── TOP IDENTITY BAR ── */}
      <div className="bg-white/70 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4">

            {/* LEFT — College Logo */}
            <div className="flex-shrink-0">
              <img
                src="/circle-logo.png"
                alt="KC College of Engineering Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>

            {/* CENTER — College Name */}
            <div className="flex-1 text-center px-2">
              <p className="text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-widest mb-0.5">
                Excelssior Education Society's
              </p>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-normal text-brand-blue leading-tight tracking-wide">
                K.C. College of Engineering
              </h1>
              <p className="text-[11px] sm:text-sm text-gray-500 font-medium tracking-wide">
                &amp; Management Studies &amp; Research
              </p>
            </div>

            {/* RIGHT — NAAC Badge + Apply */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <motion.img
                src="/naac-a-grade.png"
                alt="NAAC A Grade Accredited"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-md"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                title="NAAC Accredited with 'A' Grade"
              />
              <span className="hidden sm:block text-[9px] font-bold uppercase tracking-widest text-orange-400">
                NAAC Accredited
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM NAV BAR ── */}
      <div className="bg-brand-blue/80 backdrop-blur-md hidden md:block border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            <div className="flex items-center h-full">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative h-full flex items-center px-4 text-[13px] font-semibold text-white/80 
                             hover:text-white hover:bg-white/10 transition-all duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-amber 
                                   group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
            <a
              href="#admission"
              className="text-[12px] font-bold uppercase tracking-widest text-brand-blue 
                         bg-brand-amber px-5 py-1.5 hover:bg-yellow-400 transition-colors duration-200"
            >
              Apply Now →
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU TOGGLE ── */}
      <div className="md:hidden bg-brand-blue/80 backdrop-blur-md px-4 h-10 flex items-center justify-between border-t border-white/10">
        <span className="text-white text-sm font-semibold tracking-wide">Menu</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-white">
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-brand-blue 
                             hover:bg-brand-amber/10 hover:text-brand-amber rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#admission"
                className="block w-full text-center bg-brand-blue text-white px-6 py-3 
                           rounded-xl font-bold text-sm mt-3 hover:bg-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
