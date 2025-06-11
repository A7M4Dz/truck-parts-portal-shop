
import React from 'react';

const Hero = () => {
  const handleViewWork = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-linkedin-light-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Profile Photo Area */}
        <div className="mb-12 sm:mb-16">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 mx-auto rounded-full shadow-2xl border-6 border-white overflow-hidden bg-white transform hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/9ea0c48e-693c-4ff4-8ad8-017d7738f4a3.png"
              alt="Ahmed Alotaebe - HR Professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
        </div>
        
        <div className="space-y-8 sm:space-y-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            <span className="block">Transforming Organizations</span>
            <span className="block text-linkedin-blue">Through Strategic</span>
            <span className="block">Talent Development</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-linkedin-gray mb-8 leading-relaxed font-medium px-4">
              HR Professional with 2+ years driving workforce excellence at leading organizations like 
              <span className="text-linkedin-blue font-semibold"> Aramco</span> and 
              <span className="text-linkedin-blue font-semibold"> Flynas</span>. 
              Specialized in automation, analytics, and scalable training solutions that deliver measurable business impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <button 
              onClick={handleViewWork}
              className="bg-linkedin-blue hover:bg-linkedin-blue-hover text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={handleGetInTouch}
              className="border-2 border-linkedin-blue hover:bg-linkedin-blue hover:text-white text-linkedin-blue px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
