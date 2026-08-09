'use client';

import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: 1,
      title: 'Login & Otentikasi',
      description:
        'Operator memindai ID card pada perangkat interlock yang terpasang di forklift. Sistem memverifikasi lisensi dan otorisasi.',
    },
    {
      num: 2,
      title: 'Inspeksi Digital (PTO)',
      description:
        'Setelah otentikasi berhasil, layar meminta operator menyelesaikan ceklis inspeksi harian (rem, hidrolik, dll) secara langsung.',
    },
    {
      num: 3,
      title: 'Operasi Diizinkan',
      description:
        'Jika PTO lulus, interlock membuka kunci pengapian. Data dicatat secara real-time ke dasbor manajemen K3 pusat.',
    },
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Solution Section Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title & Stepper Timeline (6 columns) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Proses Operasi yang Aman &amp;<br />Terstruktur
            </h2>

            {/* Stepper Container */}
            <div className="relative space-y-6">
              {/* Connecting Vertical Timeline Line */}
              <div className="absolute left-[13px] top-4 bottom-8 w-[2px] bg-slate-300 pointer-events-none"></div>

              {steps.map((step) => (
                <div key={step.num} className="relative flex items-start gap-4 z-10 group">
                  {/* Step Circular Badge */}
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-extrabold text-xs flex items-center justify-center shrink-0 border-2 border-white shadow-sm mt-5">
                    {step.num}
                  </div>

                  {/* Step Card */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase Grid (6 columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Middle Tall Card: RFID Authentication Image */}
            <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-slate-900 group">
              <img
                src="/rfid_scan.png"
                alt="Otentikasi RFID"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-sm border border-slate-200/80">
                <span className="font-bold text-xs text-slate-900">
                  Otentikasi RFID
                </span>
              </div>
            </div>

            {/* Right Stacked Cards: Compliance Stats & Digital Checklist Image */}
            <div className="flex flex-col gap-4 h-[440px]">
              {/* Top Compliance Stats Card */}
              <div className="h-[210px] bg-[#eceef0] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xs border border-slate-200/80">
                <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-xl flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[28px]">fact_check</span>
                </div>
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight block">
                  100%
                </span>
                <span className="text-xs text-slate-600 font-semibold mt-1">
                  Kepatuhan PTO
                </span>
              </div>

              {/* Bottom Digital Checklist Card */}
              <div className="relative h-[214px] rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-slate-900 group">
                <img
                  src="/digital_checklist_tablet.png"
                  alt="Digital Checklist"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-sm border border-slate-200/80">
                  <span className="font-bold text-xs text-slate-900">
                    Digital Checklist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
