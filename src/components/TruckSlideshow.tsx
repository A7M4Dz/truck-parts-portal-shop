
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
      title: t('slideshow.iveco.title') || "Premium IVECO Trucks",
      subtitle: t('slideshow.iveco.subtitle') || "Built for Performance"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "MAN",
      model: "TGX",
      title: t('slideshow.man.title') || "Reliable MAN Solutions",
      subtitle: t('slideshow.man.subtitle') || "Engineering Excellence"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      brand: "MERCEDES",
      model: "Actros",
      title: t('slideshow.mercedes.title') || "Mercedes Actros Series",
      subtitle: t('slideshow.mercedes.subtitle') || "The Future of Trucking"
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
                <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl mb-8 text-gray-200 font-light">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">
                    {t('hero.browse.catalog')}
                  </button>
                  <button className="btn-secondary">
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
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Brand Badge */}
      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
        <div className="text-3xl font-bold">{slides[currentSlide].brand}</div>
        <div className="text-sm text-gray-300">{slides[currentSlide].model}</div>
      </div>
    </div>
  );
};

export default TruckSlideshow;
