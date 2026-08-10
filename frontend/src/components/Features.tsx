'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

export default function Features() {
  const { language } = useLanguage();
  const t = translations[language].features;

  return (
    <section id="features" className="py-24 px-6 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {t.sectionDesc}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-orange-100 text-primary rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">lock_person</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t.card1Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.card1Desc}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 text-tertiary rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">checklist_rtl</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t.card2Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.card2Desc}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {t.card3Title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
