import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Leaf, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to make navbar look dynamic on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'journal', label: 'Wellness Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar-root"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-white/80 backdrop-blur-md border-b border-white shadow-soft'
          : 'py-6 bg-white/0 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Branding */}
        <button
          id="logo-button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white shadow-md shadow-navy/10 group-hover:scale-105 transition-transform duration-300">
            <Leaf className="w-5 h-5 text-sky" />
          </div>
          <div>
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-navy block leading-none">
              ImmunoPal
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emerald font-extrabold block mt-0.5">
              Everyday Wellness
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans font-extrabold text-xs uppercase tracking-wider transition-colors relative py-1 cursor-pointer focus:outline-none ${
                  isActive ? 'text-emerald' : 'text-navy/60 hover:text-emerald'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button & Mobile Trigger */}
        <div id="nav-actions" className="flex items-center gap-4">
          <a
            id="header-amazon-cta"
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#123A63] hover:bg-[#0A243F] text-white px-6 py-3 rounded-full font-sans font-extrabold text-xs uppercase tracking-wider shadow-soft hover:scale-[1.03] transition-all duration-300"
          >
            <span>Shop on Amazon</span>
            <ExternalLink className="w-3.5 h-3.5 text-sky" />
          </a>

          {/* Mobile Menu Icon */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-navy hover:bg-surface rounded-xl md:hidden transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 top-[76px] bg-white z-40 md:hidden animate-fade-in flex flex-col p-6 border-t border-navy/5"
        >
          <div className="flex flex-col gap-5 my-auto">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-sans font-extrabold text-3xl text-left py-2 transition-colors ${
                    isActive ? 'text-emerald pl-3 border-l-4 border-emerald' : 'text-navy/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-navy/5">
            <a
              id="mobile-header-amazon-cta"
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#123A63] hover:bg-[#0A243F] text-white py-4 rounded-2xl font-sans font-extrabold text-sm tracking-wider uppercase shadow-soft"
            >
              <ShoppingBag className="w-4.5 h-4.5" />
              <span>Shop on Amazon</span>
              <ExternalLink className="w-4 h-4 text-sky" />
            </a>
            <p className="text-center text-[10px] text-navy/40 mt-4 leading-normal">
              Exclusively distributed on Amazon. Prime shipping available.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
