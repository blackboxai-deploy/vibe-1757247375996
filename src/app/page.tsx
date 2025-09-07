"use client";

import Hero from '@/components/Hero';
import Aspiration from '@/components/Aspiration';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Aspiration />
      <Features />
      <SocialProof />
      <Pricing />
      <FinalCTA />
    </main>
  );
}