'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // 1. Tambahkan import Image
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

// 2. Tambahkan variabel basePath untuk deployment GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Forklift-PTO' : '');

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
  const [activeNav, setActiveNav] = useState<string>('home');

  const navItems = [
    { id: 'home', label: t.home, href: '#' },
    { id: 'features', label: t.features, href: '#features' },
    { id: 'solutions', label: t.solutions, href: '#solutions' },
    { id: 'about-us', label: t.aboutUs, href: `${basePath}/about-us` },
  ];

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'solutions'];
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
    if (href.startsWith('/')) {
      // Full page navigation — let browser handle it
      setActiveNav(id);
      return;
    }
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
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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
            {/* 3. Ubah tag img menjadi Image dengan penambahan basePath */}
            <Image
              src={`${basePath}/logo.png`}
              alt="Smart Interlock Shield Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-cover object-top transition-transform group-hover:scale-105"
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-900">
            SmartInterlock
          </span>
        </a>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-2 text-xs uppercase tracking-wider font-bold">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.id, item.href, e)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                  ? 'bg-primary/10 text-primary font-extrabold shadow-xs'
                  : 'text-slate-600 hover:text-primary hover:bg-slate-50 font-bold'
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Language Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center gap-1 rounded-lg border border-slate-200 overflow-hidden text-xs font-bold">
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1.5 transition-all ${language === 'id'
                ? 'bg-primary text-white'
                : 'text-slate-500 hover:bg-slate-100'
                }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 transition-all ${language === 'en'
                ? 'bg-primary text-white'
                : 'text-slate-500 hover:bg-slate-100'
                }`}
            >
              EN
            </button>
          </div>

          {/* GET QUOTE CTA */}
          <a
            href="#quote"
            className="hidden md:inline-flex items-center justify-center bg-primary hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            {t.getQuote}
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}