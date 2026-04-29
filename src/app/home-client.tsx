'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import KeywordMarquee from '@/components/sections/keywords';
import ServicesSection from '@/components/sections/services';
import ProductsSection from '@/components/sections/products';

import Footer from '@/components/footer';
import BackgroundDecor from '@/components/background-decor';
import WhatsAppButton from '@/components/whatsapp-button';

const CareerSection = dynamic(() => import('@/components/sections/careers'), {
  ssr: false,
  loading: () => null,
});

const TechFeaturesSection = dynamic(() => import('@/components/sections/tech-features'), {
  ssr: false,
  loading: () => null,
});


const EcosystemSection = dynamic(() => import('@/components/sections/ecosystem'), {
  ssr: false,
  loading: () => null,
});

const TechStackSection = dynamic(() => import('@/components/sections/tech-stack'), {
  ssr: false,
  loading: () => null,
});

const ClientsSection = dynamic(() => import('@/components/sections/clients'), {
  ssr: false,
  loading: () => null,
});

import { useState } from 'react';

export default function HomeClient() {
  const [quotationData, setQuotationData] = useState<any>(null);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <BackgroundDecor />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <KeywordMarquee />
        <ServicesSection />
        <ProductsSection />
        <EcosystemSection />
        <ClientsSection />
        <TechStackSection />
        <CareerSection />
        <TechFeaturesSection />

        <Footer />
        <WhatsAppButton />
      </main>
    </div>
  );
}
