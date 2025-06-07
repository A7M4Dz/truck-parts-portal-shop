
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ProductsSection from "@/components/ProductsSection";
import QuotationSection from "@/components/QuotationSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <BrandsSection />
        <ProductsSection />
        <QuotationSection />
        <MapSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
