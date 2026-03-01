import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import KeywordMarquee from '@/components/sections/keywords';
import ServicesSection from '@/components/sections/services';
import ProductsSection from '@/components/sections/products';
import ContactSection from '@/components/sections/contact';
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

const CostEstimatorSection = dynamic(() => import('@/components/sections/cost-estimator'), {
  ssr: false,
  loading: () => null,
});

const GameSpaceSection = dynamic(() => import('@/components/sections/game-space'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <BackgroundDecor />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <KeywordMarquee />
        <ServicesSection />
        <ProductsSection />
        <CareerSection />
        <TechFeaturesSection />
        <CostEstimatorSection />
        <GameSpaceSection />
        <ContactSection />
        <WhatsAppButton />
        <Footer />
      </main>
    </div>
  );
}
