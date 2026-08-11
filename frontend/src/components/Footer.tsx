'use client';

import React from 'react';
import Image from 'next/image'; // 1. Tambahkan import Image
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

// 2. Tambahkan variabel basePath untuk deployment GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Forklift-PTO' : '');

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer id="safety-standards" className="bg-slate-950 text-white py-16 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                {/* 3. Ubah tag img menjadi Image dengan penambahan basePath */}
                <Image
                  src={`${basePath}/logo.png`}
                  alt="Smart Interlock Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-cover object-top"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SmartInterlock
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.brandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  {t.links.features}
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  {t.links.solutions}
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition-colors">
                  {t.links.aboutUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.contact}
            </h4>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>bluru kidul</p>
              <p>Sidoarjo Kota</p>
              <p className="text-slate-300 font-mono">sales@smartinterlock.com</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {t.followUs}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Share"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Website"
              >
                <span className="material-symbols-outlined text-[18px]">language</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Network"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-500 font-medium">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}