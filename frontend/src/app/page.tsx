'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProcessSection from '@/components/ProcessSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen selection:bg-primary selection:text-white">
      <Header />
      <main className="w-full pt-16">
        <Hero />
        <Features />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}