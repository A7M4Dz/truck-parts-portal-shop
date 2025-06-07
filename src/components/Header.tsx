
import { Truck, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const navigationItems = [
    { name: t('nav.home'), href: "#" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.products'), href: "#products" },
    { name: t('nav.rfq'), href: "#rfq" },
    { name: t('nav.branches'), href: "#branches" },
    { name: t('nav.careers'), href: "#careers" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <header className="bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Always on the left for both languages */}
          <div className="flex items-center space-x-4 order-1">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-heading">{t('company.name')}</h1>
              <p className="text-sm text-gray-600 font-medium">{t('company.tagline')}</p>
            </div>
          </div>

          {/* Desktop Navigation - Always in center */}
          <div className="hidden lg:flex items-center space-x-1 order-2">
            <nav className={`flex space-x-1 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-blue-50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Language Toggle & Mobile Menu - Always on the right */}
          <div className="flex items-center space-x-3 order-3">
            <LanguageToggle />
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200 shadow-lg rounded-b-xl">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-semibold transition-colors duration-200 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
