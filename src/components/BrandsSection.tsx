
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
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading">
            {t('brands.title')} <span className="text-gradient">{t('brands.title.highlight')}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('brands.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-slideIn max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="card p-8 flex flex-col items-center justify-center h-64 group cursor-pointer hover:scale-105 transition-all duration-300 bg-white shadow-xl"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-full h-32 flex items-center justify-center mb-6">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300 mb-3">
                {brand.name}
              </span>
              <p className="text-base text-gray-600 text-center leading-relaxed">
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
