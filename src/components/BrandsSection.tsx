
import { useLanguage } from "@/contexts/LanguageContext";

const BrandsSection = () => {
  const { t } = useLanguage();
  
  const brands = [
    { 
      name: "MAN", 
      logo: "/lovable-uploads/7b4506ea-9087-4fc3-a247-0d9dacaa77e9.png",
      description: t('brands.man.description')
    },
    { 
      name: "IVECO", 
      logo: "/lovable-uploads/27fa8e0b-46b8-4094-a90f-f69815ca2ee4.png",
      description: t('brands.iveco.description')
    },
    { 
      name: "ZF", 
      logo: "/lovable-uploads/cc41819d-57bc-4b05-b3a4-cbd0fb7940bd.png",
      description: t('brands.zf.description')
    }
  ];

  return (
    <section id="brands" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-heading">
            {t('brands.title')} <span className="text-gradient">{t('brands.title.highlight')}</span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('brands.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-slideIn max-w-6xl mx-auto px-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 flex flex-col items-center justify-center h-64 md:h-80 group cursor-pointer hover:scale-105 transition-all duration-300 bg-white shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
