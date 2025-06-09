
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TruckSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/360531dc-e9c5-4d78-9d06-90c9a2f09e3c.png",
      brand: "IVECO",
      model: "S-Way",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    },
    {
      id: 2,
      image: "/lovable-uploads/3fef7e04-c55f-4baa-bed1-fe5f16e74bd6.png",
      brand: "MAN",
      model: "TGX",
      title: t('slideshow.man.title') || "Reliable MAN Solutions",
      subtitle: t('slideshow.man.subtitle') || "Engineering Excellence"
    },
    {
      id: 3,
      image: "/lovable-uploads/87c582d4-8154-4465-b42e-b7f382738800.png",
      brand: "IVECO",
      model: "S-Way Electric",
      title: t('slideshow.iveco.title') || "Premium IVECO Parts",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
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

  const scrollToLocation = () => {
    const element = document.querySelector("#location");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container-max">
              <div className="max-w-2xl animate-fadeInUp px-4 sm:px-6">
                <div className="text-blue-300 text-base sm:text-lg md:text-xl font-semibold mb-2 tracking-wide">
                  <span className="bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                    {slide.brand}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-white">
                  <span className="bg-black/30 px-2 py-1 rounded backdrop-blur-sm block w-fit">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-100 font-light">
                  <span className="bg-black/30 px-2 py-1 rounded backdrop-blur-sm inline-block">
                    {slide.subtitle}
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button 
                    onClick={scrollToLocation}
                    className="btn-primary text-sm md:text-base px-4 py-2 md:px-6 md:py-3 min-h-[44px] shadow-lg font-medium"
                  >
                    Our Location
                  </button>
                  <button 
                    onClick={scrollToQuotation}
                    className="btn-secondary text-sm md:text-base px-4 py-2 md:px-6 md:py-3 min-h-[44px] shadow-lg font-medium"
                  >
                    {t('hero.get.quote')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} className="md:w-5 md:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-sm hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={18} className="md:w-5 md:h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center shadow-lg ${
              index === currentSlide 
                ? 'bg-blue-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Brand Badge */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-black/40 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white shadow-lg">
        <div className="text-lg md:text-2xl font-bold">{slides[currentSlide].brand}</div>
        <div className="text-xs md:text-sm text-gray-200">{slides[currentSlide].model}</div>
      </div>
    </div>
  );
};

export default TruckSlideshow;
