
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TruckSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "IVECO",
      model: "S-Way",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "IVECO",
      model: "Daily",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "MAN",
      model: "TGX",
      title: t('slideshow.man.title') || "Reliable MAN Solutions",
      subtitle: t('slideshow.man.subtitle') || "Engineering Excellence"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1566473179817-95b9e8be8e8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "MAN",
      model: "TGS",
      title: t('slideshow.man.title') || "Reliable MAN Solutions",
      subtitle: t('slideshow.man.subtitle') || "Engineering Excellence"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "ZF",
      model: "Transmission",
      title: t('slideshow.zf.title') || "ZF Transmission Systems",
      subtitle: t('slideshow.zf.subtitle') || "Advanced Technology"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "ZF",
      model: "Axles",
      title: t('slideshow.zf.title') || "ZF Transmission Systems",
      subtitle: t('slideshow.zf.subtitle') || "Advanced Technology"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToQuotation = () => {
    const element = document.querySelector("#quotation");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-max">
              <div className="max-w-2xl text-white animate-fadeInUp">
                <div className="text-blue-400 text-xl font-semibold mb-2 tracking-wide">
                  {slide.brand}
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-8 text-gray-200 font-light">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary text-sm md:text-base px-6 py-3 md:px-8 md:py-4">
                    {t('hero.browse.catalog')}
                  </button>
                  <button 
                    onClick={scrollToQuotation}
                    className="btn-secondary text-sm md:text-base px-6 py-3 md:px-8 md:py-4"
                  >
                    {t('hero.get.quote')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Get Instant Quote Button - Top Left */}
      <button
        onClick={scrollToQuotation}
        className="absolute top-6 left-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 z-10 shadow-lg"
      >
        {t('hero.get.quote')}
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Brand Badge */}
      <div className="absolute top-6 md:top-8 right-6 md:right-8 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4 text-white">
        <div className="text-xl md:text-3xl font-bold">{slides[currentSlide].brand}</div>
        <div className="text-xs md:text-sm text-gray-300">{slides[currentSlide].model}</div>
      </div>
    </div>
  );
};

export default TruckSlideshow;
