'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Headline & CTA */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Tingkatkan Keamanan &amp; Efisiensi Armada Forklift Anda
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Integrasikan kontrol akses biometrik, daftar periksa harian digital, dan pemantauan real-time untuk mencegah kecelakaan dan memastikan kepatuhan K3 secara otomatis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            {/* Primary CTA */}
            <button className="bg-primary hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded transition-all shadow-md flex items-center justify-center gap-2 group">
              <span>Mulai Uji Coba Gratis</span>
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            {/* Secondary CTA */}
            <button className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold px-6 py-3.5 rounded transition-all flex items-center justify-center gap-2">
              <span>Lihat Cara Kerja</span>
              <span className="material-symbols-outlined text-[20px] text-slate-700">
                play_circle
              </span>
            </button>
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
              Dipercaya oleh 500+ Fasilitas Logistik
            </span>
          </div>
        </div>

        {/* Right Column: Visual Dashboard Mockup Card */}
        <div className="hidden lg:block relative h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800 p-8 flex flex-col justify-between">
          {/* Dashboard Header Bar */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              ● SYSTEM ONLINE
            </span>
          </div>

          {/* Dashboard Main Status */}
          <div className="text-center my-auto space-y-4">
            <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto border border-primary/40 shadow-inner">
              <span className="material-symbols-outlined text-[44px]">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Smart Interlock PTO Active
            </h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
              Sistem pemantauan status kendaraan, checklist keselamatan digital, dan pengunci transmisi otomatis.
            </p>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono text-slate-300 border-t border-slate-800 pt-4">
            <div className="bg-slate-800/60 p-2 rounded">
              <span className="text-slate-400 block text-[10px]">RPM</span>
              <span className="text-amber-400 font-bold text-sm">1200</span>
            </div>
            <div className="bg-slate-800/60 p-2 rounded">
              <span className="text-slate-400 block text-[10px]">PRESSURE</span>
              <span className="text-amber-400 font-bold text-sm">160 BAR</span>
            </div>
            <div className="bg-slate-800/60 p-2 rounded">
              <span className="text-slate-400 block text-[10px]">OIL TEMP</span>
              <span className="text-amber-400 font-bold text-sm">62°C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
