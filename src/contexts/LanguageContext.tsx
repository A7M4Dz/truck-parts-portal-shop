
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products', 
    'nav.branches': 'Branches',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Premium Truck Parts & Components',
    'hero.subtitle': 'Your trusted partner for high-quality truck parts and professional automotive solutions',
    'hero.our.location': 'Our Location',
    'hero.get.quote': 'Get Quote',

    // Slideshow
    'slideshow.iveco.title': 'IVECO Excellence',
    'slideshow.iveco.subtitle': 'Italian innovation meets practical design for superior performance',
    'slideshow.zf.title': 'ZF Transmission',
    'slideshow.zf.subtitle': 'Advanced transmission technology for optimal efficiency',

    // Brands
    'brands.title': 'Trusted',
    'brands.title.highlight': 'Partners',
    'brands.description': 'We work with leading global brands to provide you with the highest quality truck parts and components',

    // Footer
    'footer.description': 'Your trusted partner for premium truck parts and automotive solutions in the Kingdom of Saudi Arabia.',
    'footer.quick.links': 'Quick Links',
    'footer.contact.info': 'Contact Info',

    // Map/Location
    'map.address': 'Al Khobar, Eastern Province, Saudi Arabia',

    // WhatsApp
    'whatsapp.message': 'Hello! I would like to inquire about your truck parts and services.'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.branches': 'الفروع',
    'nav.contact': 'اتصل بنا',

    // Hero Section
    'hero.title': 'قطع غيار شاحنات متميزة ومكونات عالية الجودة',
    'hero.subtitle': 'شريكك الموثوق لقطع غيار الشاحنات عالية الجودة والحلول السيارات المهنية',
    'hero.our.location': 'موقعنا',
    'hero.get.quote': 'احصل على عرض سعر',

    // Slideshow
    'slideshow.iveco.title': 'تميز إيفيكو',
    'slideshow.iveco.subtitle': 'الابتكار الإيطالي يلتقي بالتصميم العملي لأداء فائق',
    'slideshow.zf.title': 'ناقل حركة ZF',
    'slideshow.zf.subtitle': 'تقنية ناقل حركة متقدمة للحصول على كفاءة مثلى',

    // Brands
    'brands.title': 'شركاء',
    'brands.title.highlight': 'موثوقون',
    'brands.description': 'نتعاون مع العلامات التجارية العالمية الرائدة لنوفر لك أعلى جودة من قطع غيار الشاحنات والمكونات',

    // Footer
    'footer.description': 'شريكك الموثوق لقطع غيار الشاحنات المتميزة والحلول السيارات في المملكة العربية السعودية.',
    'footer.quick.links': 'روابط سريعة',
    'footer.contact.info': 'معلومات الاتصال',

    // Map/Location
    'map.address': 'الخبر، المنطقة الشرقية، المملكة العربية السعودية',

    // WhatsApp
    'whatsapp.message': 'مرحباً! أود الاستفسار عن قطع غيار الشاحنات والخدمات المتوفرة لديكم.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key; // Return the key itself as fallback
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
