'use client';

import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Siap Membangun Budaya Keselamatan yang Lebih Baik?
        </h2>

        <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Kurangi risiko kecelakaan, pastikan kepatuhan regulasi, dan lindungi aset berharga Anda dengan Smart Interlock &amp; Digital PTO.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-lg transition-all shadow-xl flex items-center justify-center gap-2 group">
            <span>Optimalikan Keselamatan Kerja Hari ini</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              lock_reset
            </span>
          </button>

          <button className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-white font-bold px-7 py-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
            <span>Hubungi Tim Sales</span>
          </button>
        </div>
      </div>
    </section>
  );
}
