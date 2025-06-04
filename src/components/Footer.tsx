
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer 
      className="relative text-white py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.95)), url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-800/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">{t('company.name')}</h3>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              {t('footer.description')}
            </p>
            <div className="flex space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                📧
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                📞
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                📍
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">{t('footer.quick.links')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400">{t('nav.about')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400">{t('nav.products')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400">{t('nav.careers')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg hover:text-blue-400">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">{t('footer.contact.info')}</h4>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center text-lg"><span className="mr-3">📧</span> info@truckpartspro.com</p>
              <p className="flex items-center text-lg"><span className="mr-3">📞</span> +1 (555) 123-4567</p>
              <p className="flex items-center text-lg"><span className="mr-3">📍</span> 123 Industrial Blvd, City, State 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
