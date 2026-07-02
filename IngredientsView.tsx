import { Leaf, ArrowUp, Mail, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Footer({ activePage, setActivePage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-root" className="bg-[#0A243F] text-white/90 border-t border-navy/20 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">
          {/* Brand Block */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-sky" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-2xl tracking-tighter text-white block leading-none">
                  ImmunoPal
                </span>
                <span className="text-[10px] uppercase tracking-widest text-sky font-extrabold block mt-0.5">
                  Everyday Wellness
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-sm">
              We create premium, plant-enhanced wellness products designed for everyday routines. Crafted with care, our mission is to support your daily vitality with absolute quality and ingredient transparency.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/50 bg-white/5 border border-white/10 px-4 py-2.5 rounded-[20px] self-start shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald" />
              <span className="font-sans font-bold">Sells exclusively via Amazon Prime</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
            <h4 className="font-sans font-extrabold text-sm text-white tracking-wider uppercase">
              Brand Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Our Story' },
                { id: 'products', label: 'ImmunoPal Gummies' },
                { id: 'ingredients', label: 'Ingredient Sourcing' },
                { id: 'journal', label: 'Wellness Journal' },
                { id: 'contact', label: 'Get in Touch' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="font-sans font-extrabold text-sm text-white/60 hover:text-white hover:underline text-left transition-all cursor-pointer py-0.5 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sourcing & Quality Column */}
          <div className="col-span-6 md:col-span-4 flex flex-col gap-4">
            <h4 className="font-sans font-extrabold text-sm text-white tracking-wider uppercase">
              Customer Support
            </h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Have questions about your order or ingredients? Our support team is here to help you.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:support@immunopal.com"
                className="flex items-center gap-2.5 text-sm text-sky hover:text-sky-light transition-colors font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>support@immunopal.com</span>
              </a>
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-light hover:text-emerald font-extrabold transition-colors mt-1"
              >
                <span>Visit our Amazon Storefront →</span>
              </a>
            </div>
          </div>
        </div>

        {/* FDA Compliance Block - CRITICAL */}
        <div className="py-10 border-b border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-soft">
            <div className="bg-white/10 p-3 rounded-xl shrink-0">
              <Heart className="w-6 h-6 text-emerald-light" />
            </div>
            <div>
              <p className="font-sans text-xs text-white/60 leading-relaxed">
                * These statements have not been evaluated by the Food and Drug Administration. ImmunoPal products are designed to support your daily wellness and are intended as simple additions to your everyday healthy routines. Our supplements are not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before starting any new dietary supplement, especially if you have a medical condition, are taking medications, or are pregnant or lactating.
              </p>
              <p className="font-sans text-xs text-white/40 mt-3 leading-normal">
                ImmunoPal is a registered lifestyle brand. All ingredients are sourced with care and processed in premium facilities adhering to high quality control metrics.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} ImmunoPal. All rights reserved. Sells exclusively through Amazon.</p>
          <div className="flex gap-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer font-bold"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-white transition-colors cursor-pointer font-bold"
            >
              Terms of Use
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
