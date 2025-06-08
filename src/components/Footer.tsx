
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@alreem.sa';
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+966504106845";
    const message = t('whatsapp.message');
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapClick = () => {
    window.open('https://www.google.com/maps?q=26.461526,50.013970', '_blank');
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16 px-4 ${language === 'ar' ? 'md:grid-flow-col-dense' : ''}`}>
          {/* Company Info */}
          <div className={`col-span-1 md:col-span-2 ${language === 'ar' ? 'order-1 md:order-4 text-right' : 'order-1'}`}>
            <div className={`flex items-center space-x-4 mb-6 ${language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <img 
                src="/lovable-uploads/f0209fbc-f8ca-4223-aeb5-786f4422f8a7.png" 
                alt="ALREEM Logo" 
                className="h-16 md:h-20 w-auto"
              />
              <div className={language === 'ar' ? 'text-right' : ''}>
                <h3 className="text-xl md:text-2xl font-bold text-blue-400 font-heading">{t('company.name')}</h3>
                <p className="text-sm md:text-base text-gray-400">{t('company.tagline')}</p>
              </div>
            </div>
            <p className={`text-gray-300 mb-6 md:mb-8 max-w-md leading-relaxed text-base md:text-lg ${language === 'ar' ? 'text-right' : ''}`}>
              {t('footer.description')}
            </p>
            <div className={`flex space-x-4 ${language === 'ar' ? 'flex-row-reverse space-x-reverse justify-end' : ''}`}>
              <button 
                onClick={handleEmailClick}
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="Email us"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
              </button>
              <button 
                onClick={handlePhoneClick}
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="Call us on WhatsApp"
              >
                <Phone size={20} className="md:w-6 md:h-6" />
              </button>
              <button 
                onClick={handleMapClick}
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer min-h-[44px] min-w-[44px]"
                aria-label="Find us on map"
              >
                <MapPin size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${language === 'ar' ? 'order-2 md:order-2 text-right' : 'order-2'}`}>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-blue-400 font-heading">{t('footer.quick.links')}</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><button onClick={() => scrollToSection("#brands")} className={`text-gray-300 hover:text-white transition-colors text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center ${language === 'ar' ? 'justify-end' : ''}`}>
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
              <li><button onClick={() => scrollToSection("#quotation")} className={`text-gray-300 hover:text-white transition-colors text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center ${language === 'ar' ? 'justify-end' : ''}`}>
                {t('nav.products')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
              <li><button onClick={() => scrollToSection("#location")} className={`text-gray-300 hover:text-white transition-colors text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center ${language === 'ar' ? 'justify-end' : ''}`}>
                {t('nav.branches')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
              <li><button onClick={() => scrollToSection("#contact")} className={`text-gray-300 hover:text-white transition-colors text-base md:text-lg hover:text-blue-400 relative group min-h-[44px] flex items-center ${language === 'ar' ? 'justify-end' : ''}`}>
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${language === 'ar' ? 'order-3 md:order-1 text-right' : 'order-3'}`}>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-blue-400 font-heading">{t('footer.contact.info')}</h4>
            <div className="space-y-3 md:space-y-4 text-gray-300">
              <p className={`flex items-center text-base md:text-lg ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Mail className={`text-blue-400 flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} size={18} /> 
                <span className="break-all">info@alreem.sa</span>
              </p>
              <p className={`flex items-center text-base md:text-lg ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Phone className={`text-blue-400 flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} size={18} /> 
                <span>+966 504 106 845</span>
              </p>
              <p className={`flex items-center text-base md:text-lg ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPin className={`text-blue-400 flex-shrink-0 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} size={18} /> 
                <span>{t('map.address')}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center text-gray-400 px-4">
          <p className="text-base md:text-lg">&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
