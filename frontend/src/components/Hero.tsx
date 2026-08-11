'use client';

import React from 'react';
import Image from 'next/image'; // 1. Tambahkan import Image Next.js
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

// 2. Variabel basePath (bisa ditambahkan pengecekan NEXT_PUBLIC_BASE_PATH agar lebih kuat)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Forklift-PTO' : '');

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Headline & CTA */}
        <div className="space-y-6 lg:pr-5">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            {t.headline}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* Primary CTA */}
            <button className="bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded transition-all shadow-md flex items-center justify-center gap-2 group">
              <span>{t.ctaPrimary}</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            {/* Secondary CTA */}
            <a href="https://youtu.be/dQw4w9WgXcQ?si=kSgHTqgslQg1Td_Y" target="_blank" rel="noopener noreferrer">
              <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                <span>{t.ctaSecondary}</span>
                <span className="material-symbols-outlined text-[20px] text-slate-700">
                  play_circle
                </span>
              </button>
            </a>
          </div>

          {/* Rating & Social Proof */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-1 text-[20px]">
                  star
                </span>
              ))}
            </div>
            <span className="text-xs text-slate-600 font-semibold">
              {t.socialProof}
            </span>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:block relative h-[480px] w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
          {/* 3. Ubah tag img menjadi komponen Image */}
          <Image
            src={`${basePath}/heroimg.png`}
            alt="Dashboard mockup"
            width={480}
            height={480}
            className="w-full h-full object-cover"
            priority={true} // Memprioritaskan gambar ini di-load pertama kali karena berada di Hero section
          />
        </div>
      </div>
    </section>
  );
}