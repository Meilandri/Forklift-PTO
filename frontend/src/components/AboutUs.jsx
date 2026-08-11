'use client';

import React from 'react';
import Image from 'next/image'; // 1. Import komponen Image Next.js
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations';

// 2. Deklarasi basePath
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/Forklift-PTO' : '');

export default function AboutUs() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section className="bg-white py-24 px-6 font-sans">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Back to Home Button */}
                <div>
                    {/* 3. Perbaiki href menuju basePath agar tidak tersesat ke root domain */}
                    <a
                        href={basePath ? basePath : '/'}
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors group"
                    >
                        <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">
                            arrow_back
                        </span>
                        {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
                    </a>
                </div>

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="text-sm font-bold text-primary tracking-widest uppercase">{t.badge}</h1>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        {t.headline}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {t.headlineDesc}
                    </p>
                </div>

                {/* Sejarah Inovasi (Image 1:2) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[1/2] lg:h-[800px] border border-slate-200">
                        {/* 4. Gunakan <Image> untuk sejarah.png (Ukuran diset 1:2 sesuai aspect ratio) */}
                        <Image
                            src={`${basePath}/sejarah.png`}
                            alt={t.historyTitle}
                            width={600}
                            height={1200}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border-4 border-primary/20 rounded-3xl pointer-events-none"></div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                                {t.historyTitle}
                            </h3>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>{t.historyP1}</p>
                                <p>{t.historyP2}</p>
                                <p>{t.historyP3}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visi & Misi */}
                <div className="bg-slate-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-slate-800">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-6 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors">
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-white text-3xl">visibility</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{t.visionTitle}</h3>
                            <p className="text-slate-300 leading-relaxed">{t.visionText}</p>
                        </div>

                        <div className="space-y-6 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 transition-colors">
                            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-white text-3xl">flag</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{t.missionTitle}</h3>
                            <p className="text-slate-300 leading-relaxed">{t.missionText}</p>
                        </div>
                    </div>
                </div>

                {/* Developer Team (Image 1:1) */}
                <div className="space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            {t.devTeamTitle}
                        </h3>
                        <p className="text-lg text-slate-600">{t.devTeamDesc}</p>
                        <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {t.devs.map((dev) => {
                            // 5. Menyiasati string gambar dari translations.ts agar aman dengan/tanpa '/' di depannya
                            const imgSrc = dev.img.startsWith('/') ? dev.img : `/${dev.img}`;

                            return (
                                <div key={dev.name} className="group space-y-6">
                                    <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative shadow-xl border border-slate-200 group-hover:border-primary/50 transition-colors">
                                        {/* 6. Gunakan <Image> untuk foto developer (Ukuran 1:1) */}
                                        <Image
                                            src={`${basePath}${imgSrc}`}
                                            alt={dev.name}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="text-center space-y-2">
                                        <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                            {dev.name}
                                        </h4>
                                        <p className="text-sm font-semibold text-primary uppercase tracking-wider">{dev.role}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed px-4 pt-2">{dev.bio}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}