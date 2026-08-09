'use client';

import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Infrastruktur Keselamatan Komprehensif
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Sistem kami merombak manajemen keselamatan forklift tradisional menjadi alur kerja digital yang proaktif, aman, dan dapat dilacak sepenuhnya.
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
              Smart Interlock System
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mencegah penggunaan forklift oleh operator yang tidak berwenang. Mesin hanya dapat diaktifkan melalui otentikasi RFID atau biometrik yang terverifikasi di sistem.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 text-tertiary rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">checklist_rtl</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Daily Digital PTO
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Daftar periksa operasional harian (Pre-Task Observation) yang didigitalisasi. Wajib diisi sebelum mesin Interlock melepaskan kunci pengapian.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[28px]">verified_user</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              K3 Compliance
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Otomatisasi pelaporan keselamatan K3. Dasbor analitik melacak insiden, near-misses, dan metrik kepatuhan untuk audit yang lebih mudah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
