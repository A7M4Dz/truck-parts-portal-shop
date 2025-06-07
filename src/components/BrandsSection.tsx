
import { useLanguage } from "@/contexts/LanguageContext";

const BrandsSection = () => {
  const { t } = useLanguage();
  
  const brands = [
    { 
      name: "IVECO", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      description: "Italian commercial vehicle manufacturer"
    },
    { 
      name: "MAN", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      description: "German truck and bus manufacturer"
    },
    { 
      name: "ZF", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      description: "Leading transmission technology"
    }
  ];

  return (
    <section id="brands" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
            {t('brands.title')} <span className="text-gradient">{t('brands.title.highlight')}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('brands.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-slideIn max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="card p-12 flex flex-col items-center justify-center h-48 group cursor-pointer hover:scale-105 transition-all duration-300 bg-white shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">{brand.name}</span>
              </div>
              <span className="text-lg font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300 mb-2">
                {brand.name}
              </span>
              <p className="text-sm text-gray-600 text-center">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
