'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [activeNav, setActiveNav] = useState<string>('home');

  const navItems = [
    { id: 'home', label: 'HOME', href: '#' },
    { id: 'features', label: 'FEATURES', href: '#features' },
    { id: 'solutions', label: 'SOLUTIONS', href: '#solutions' },
    { id: 'safety-standards', label: 'SAFETY STANDARDS', href: '#safety-standards' },
  ];

  // Optional: Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'solutions', 'safety-standards'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 150) {
        setActiveNav('home');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, href: string, e: React.MouseEvent) => {
    setActiveNav(id);
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.getElementById(id);
      if (targetEl) {
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="h-16 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick('home', '#', e)}
          className="flex items-center gap-3 group"
        >
          <div className="h-10 w-10 overflow-hidden rounded-lg bg-white p-0.5 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
            <img
              src="/logo.png"
              alt="Smart Interlock Shield Logo"
              className="h-12 w-12 object-cover object-top transition-transform group-hover:scale-105"
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            SmartInterlock
          </span>
        </a>

        {/* Navigation Menu with Active State Color Change */}
        <nav className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.id, item.href, e)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary font-extrabold shadow-xs'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50 font-bold'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Action */}
        <div className="flex items-center gap-4">
          <a
            href="#quote"
            className="hidden md:inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            GET A QUOTE
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
