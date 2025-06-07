
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="container-max relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/lovable-uploads/f0209fbc-f8ca-4223-aeb5-786f4422f8a7.png" 
                alt="ALREEM Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-2xl font-bold text-blue-400 font-heading">{t('company.name')}</h3>
                <p className="text-gray-400">{t('company.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Mail size={20} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Phone size={20} />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <MapPin size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400 font-heading">{t('footer.quick.links')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400 relative group">
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400 relative group">
                {t('nav.products')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#location" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400 relative group">
                {t('nav.branches')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400 relative group">
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400 font-heading">{t('footer.contact.info')}</h4>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center text-lg">
                <Mail className="mr-3 text-blue-400" size={20} /> 
                info@alreem.sa
              </p>
              <p className="flex items-center text-lg">
                <Phone className="mr-3 text-blue-400" size={20} /> 
                +966 11 123 4567
              </p>
              <p className="flex items-center text-lg">
                <MapPin className="mr-3 text-blue-400" size={20} /> 
                {t('map.address')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
