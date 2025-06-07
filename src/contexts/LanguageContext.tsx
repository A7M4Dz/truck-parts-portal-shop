
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.branches': 'Our Locations',
    'nav.contact': 'Contact Us',
    'company.name': 'ALREEM',
    'company.tagline': 'Commercial Truck Parts',
    
    // Hero Section
    'hero.title': 'Premium Commercial',
    'hero.title.highlight': 'Truck Parts',
    'hero.description': 'Your trusted partner for genuine IVECO, MAN, and ZF truck parts. Professional quality, competitive prices, fast delivery across Saudi Arabia.',
    'hero.browse.catalog': 'Browse Our Catalog',
    'hero.get.quote': 'Get Instant Quote',
    'hero.years.experience': 'Years Experience',
    'hero.parts.available': 'Parts Available',
    'hero.customer.support': 'Customer Support',
    
    // Slideshow
    'slideshow.iveco.title': 'Premium IVECO Parts',
    'slideshow.iveco.subtitle': 'Built for Performance',
    'slideshow.man.title': 'Reliable MAN Solutions',
    'slideshow.man.subtitle': 'Engineering Excellence',
    
    // Brands Section
    'brands.title': 'Authorized Dealer for',
    'brands.title.highlight': 'Leading Brands',
    'brands.description': 'We are proud authorized dealers for IVECO, MAN, and ZF - the world\'s most trusted commercial vehicle manufacturers',
    
    // Products Section
    'products.title': 'Premium',
    'products.title.highlight': 'Truck Parts',
    'products.description': 'Discover our comprehensive selection of commercial truck parts from leading manufacturers',
    'products.category.all': 'All',
    'products.category.engine': 'Engine',
    'products.category.brake': 'Brake Parts',
    'products.category.transmission': 'Transmission',
    'products.heavy.duty.engine': 'Heavy Duty Engine Assembly',
    'products.engine.description': 'Complete engine assembly for commercial trucks with warranty',
    'products.air.brake': 'Air Brake System',
    'products.brake.description': 'Professional grade air brake components - OEM quality',
    'products.transmission.gearbox': 'ZF Transmission Gearbox',
    'products.transmission.description': 'High-performance ZF transmission systems for heavy duty',
    'products.drive.shaft': 'Drive Shaft Assembly',
    'products.drive.description': 'Durable drive shaft for heavy-duty commercial applications',
    'products.contact.pricing': 'Contact for pricing',
    'products.view.details': 'View Details',
    
    // Map Section
    'map.title': 'Visit Our Store',
    'map.description': 'Find us at our location for in-person consultations and immediate part availability',
    'map.address': 'Riyadh, Saudi Arabia',
    'map.directions': 'Get Directions',
    
    // Footer
    'footer.description': 'Leading supplier of commercial truck parts in Saudi Arabia with over 20 years of experience. We provide quality OEM parts from IVECO, MAN, and ZF to keep your fleet running strong.',
    'footer.quick.links': 'Quick Links',
    'footer.contact.info': 'Contact Info',
    'footer.copyright': '2024 ALREEM. All rights reserved. | Commercial Vehicle Solutions'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.branches': 'مواقعنا',
    'nav.contact': 'اتصل بنا',
    'company.name': 'الريم',
    'company.tagline': 'قطع غيار الشاحنات التجارية',
    
    // Hero Section
    'hero.title': 'قطع غيار تجارية',
    'hero.title.highlight': 'عالية الجودة',
    'hero.description': 'شريكك الموثوق لقطع غيار الشاحنات الأصلية من إيفيكو ومان و زد إف. جودة مهنية، أسعار تنافسية، توصيل سريع في جميع أنحاء المملكة العربية السعودية.',
    'hero.browse.catalog': 'تصفح الكتالوج',
    'hero.get.quote': 'احصل على عرض سعر',
    'hero.years.experience': 'سنة خبرة',
    'hero.parts.available': 'قطعة غيار متوفرة',
    'hero.customer.support': 'دعم العملاء',
    
    // Slideshow
    'slideshow.iveco.title': 'قطع غيار إيفيكو المتميزة',
    'slideshow.iveco.subtitle': 'مصممة للأداء المتميز',
    'slideshow.man.title': 'حلول مان الموثوقة',
    'slideshow.man.subtitle': 'تميز في الهندسة',
    
    // Brands Section
    'brands.title': 'وكيل معتمد لـ',
    'brands.title.highlight': 'العلامات الرائدة',
    'brands.description': 'نفخر بكوننا وكلاء معتمدين لإيفيكو ومان و زد إف - أكثر مصنعي المركبات التجارية موثوقية في العالم',
    
    // Products Section
    'products.title': 'قطع غيار',
    'products.title.highlight': 'شاحنات عالية الجودة',
    'products.description': 'اكتشف مجموعتنا الشاملة من قطع غيار الشاحنات التجارية من الشركات المصنعة الرائدة',
    'products.category.all': 'الكل',
    'products.category.engine': 'المحرك',
    'products.category.brake': 'قطع الفرامل',
    'products.category.transmission': 'ناقل الحركة',
    'products.heavy.duty.engine': 'مجموعة محرك للخدمة الشاقة',
    'products.engine.description': 'مجموعة محرك كاملة للشاحنات التجارية مع الضمان',
    'products.air.brake': 'نظام الفرامل الهوائية',
    'products.brake.description': 'مكونات فرامل هوائية احترافية - جودة أصلية',
    'products.transmission.gearbox': 'صندوق تروس زد إف',
    'products.transmission.description': 'أنظمة نقل زد إف عالية الأداء للخدمة الشاقة',
    'products.drive.shaft': 'مجموعة عمود الإدارة',
    'products.drive.description': 'عمود إدارة متين للتطبيقات التجارية الثقيلة',
    'products.contact.pricing': 'اتصل للحصول على السعر',
    'products.view.details': 'عرض التفاصيل',
    
    // Map Section
    'map.title': 'زوروا متجرنا',
    'map.description': 'اعثروا علينا في موقعنا للاستشارات الشخصية وتوفر القطع فوراً',
    'map.address': 'الرياض، المملكة العربية السعودية',
    'map.directions': 'احصل على الاتجاهات',
    
    // Footer
    'footer.description': 'مورد رائد لقطع غيار الشاحنات التجارية في المملكة العربية السعودية مع أكثر من 20 عامًا من الخبرة. نوفر قطع غيار أصلية عالية الجودة من إيفيكو ومان و زد إف للحفاظ على قوة أسطولك.',
    'footer.quick.links': 'روابط سريعة',
    'footer.contact.info': 'معلومات الاتصال',
    'footer.copyright': '2024 الريم. جميع الحقوق محفوظة. | حلول المركبات التجارية'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div 
        className={`${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`} 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
      >
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
