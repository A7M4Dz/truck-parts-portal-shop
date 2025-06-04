
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BrandsSection />
      <ProductsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
