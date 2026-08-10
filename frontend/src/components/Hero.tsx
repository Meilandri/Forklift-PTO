'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Headline & CTA */}
        <div className="space-y-6 pr-5 ml-auto">
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
              Dipercaya oleh Fasilitas Logistik
            </span>
          </div>
        </div>

        {/* Right Column: Visual Dashboard Mockup Card */}
        <div className="hidden lg:block relative h-[480px] w-[480px] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between ml-[100px]">
          <img src="heroimg.png" alt="Dashboard mockup" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
