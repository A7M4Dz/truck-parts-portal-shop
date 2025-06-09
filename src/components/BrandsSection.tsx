
import { useLanguage } from "@/contexts/LanguageContext";

const BrandsSection = () => {
  const { t, language } = useLanguage();
  
  const brands = [
    { 
      name: "MAN", 
      logo: "/lovable-uploads/7b4506ea-9087-4fc3-a247-0d9dacaa77e9.png",
      description: language === 'ar' 
        ? "مورد رائد لتقنيات ناقل الحركة والهيكل المتقدمة. أنظمة ناقل حركة متطورة ومكونات تقدم أداءً فائقًا وكفاءة عالية."
        : "Global leader in driveline and chassis technology. Advanced transmission systems and components that deliver superior performance and efficiency."
    },
    { 
      name: "IVECO", 
      logo: "/lovable-uploads/27fa8e0b-46b8-4094-a90f-f69815ca2ee4.png",
      description: language === 'ar'
        ? "الابتكار الإيطالي يلتقي بالتصميم العملي. نقدم حلولاً شاملة للنقل والبناء مع التركيز على الاستدامة والأداء."
        : "Italian innovation meets practical design. Offering comprehensive solutions for transport and construction with focus on sustainability and performance."
    },
    { 
      name: "ZF", 
      logo: "/lovable-uploads/cc41819d-57bc-4b05-b3a4-cbd0fb7940bd.png",
      description: language === 'ar'
        ? "رائد عالمي في تقنيات ناقل الحركة والهيكل. أنظمة ناقل حركة متقدمة ومكونات تقدم أداءً فائقًا وكفاءة عالية."
        : "Global leader in driveline and chassis technology. Advanced transmission systems and components that deliver superior performance and efficiency."
    }
  ];

  return (
    <section id="brands" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-5 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp px-4">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-heading ${language === 'ar' ? 'leading-relaxed font-arabic' : ''}`}>
            {t('brands.title')} <span className="text-gradient">{t('brands.title.highlight')}</span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 md:mb-8"></div>
          <p className={`text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed ${language === 'ar' ? 'text-right font-arabic' : 'text-left'}`}>
            {t('brands.description')}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-slideIn max-w-6xl mx-auto px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="card p-6 md:p-8 group cursor-pointer hover:scale-105 transition-all duration-300 bg-white shadow-xl min-h-[300px] md:min-h-[350px] flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-1 flex items-center justify-center mb-4 md:mb-6 h-32 md:h-40">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    filter: 'none',
                    objectFit: 'contain',
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                  loading="lazy"
                />
              </div>
              <div className={`text-center flex-shrink-0 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <p className={`text-gray-600 text-sm md:text-base leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
