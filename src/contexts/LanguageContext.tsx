
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
    'nav.rfq': 'RFQ',
    'nav.branches': 'Branches',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',
    'company.name': 'TruckParts Pro',
    'company.tagline': 'Commercial Vehicle Solutions',
    
    // Hero Section
    'hero.title': 'Premium Commercial',
    'hero.title.highlight': 'Truck Parts',
    'hero.description': 'Keep your fleet running strong with genuine OEM parts from the world\'s most trusted manufacturers. Professional quality, competitive prices, fast delivery.',
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
    'slideshow.mercedes.title': 'Mercedes Excellence',
    'slideshow.mercedes.subtitle': 'The Future of Trucking',
    
    // Brands Section
    'brands.title': 'Trusted by',
    'brands.title.highlight': 'Industry Leaders',
    'brands.description': 'We partner with the world\'s most respected manufacturers to deliver premium quality truck parts that keep your business moving forward',
    
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
    'products.transmission.gearbox': 'Transmission Gearbox',
    'products.transmission.description': 'High-performance transmission systems for heavy duty',
    'products.drive.shaft': 'Drive Shaft Assembly',
    'products.drive.description': 'Durable drive shaft for heavy-duty commercial applications',
    'products.contact.pricing': 'Contact for pricing',
    'products.view.details': 'View Details',
    
    // Footer
    'footer.description': 'Leading supplier of commercial truck parts with over 20 years of experience. We provide quality OEM parts from trusted manufacturers worldwide to keep your fleet running strong.',
    'footer.quick.links': 'Quick Links',
    'footer.contact.info': 'Contact Info',
    'footer.copyright': '2024 TruckParts Pro. All rights reserved. | Professional Commercial Vehicle Solutions'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.rfq': 'طلب عرض سعر',
    'nav.branches': 'الفروع',
    'nav.careers': 'الوظائف',
    'nav.contact': 'اتصل بنا',
    'company.name': 'تراك بارتس برو',
    'company.tagline': 'حلول المركبات التجارية',
    
    // Hero Section
    'hero.title': 'قطع غيار تجارية',
    'hero.title.highlight': 'عالية الجودة',
    'hero.description': 'حافظ على قوة أسطولك مع قطع الغيار الأصلية من أكثر الشركات المصنعة الموثوقة في العالم. جودة مهنية، أسعار تنافسية، توصيل سريع.',
    'hero.browse.catalog': 'تصفح الكتالوج',
    'hero.get.quote': 'احصل على عرض سعر',
    'hero.years.experience': 'سنة خبرة',
    'hero.parts.available': 'قطعة غيار متوفرة',
    'hero.customer.support': 'دعم العملاء',
    
    // Slideshow
    'slideshow.iveco.title': 'قطع غيار إيفيكو المتميزة',
    'slideshow.iveco.subtitle': 'مصممة للأداء',
    'slideshow.man.title': 'حلول مان الموثوقة',
    'slideshow.man.subtitle': 'تميز الهندسة',
    'slideshow.mercedes.title': 'تميز مرسيدس',
    'slideshow.mercedes.subtitle': 'مستقبل النقل',
    
    // Brands Section
    'brands.title': 'موثوق من قبل',
    'brands.title.highlight': 'قادة الصناعة',
    'brands.description': 'نتشارك مع أكثر الشركات المصنعة احتراماً في العالم لتقديم قطع غيار شاحنات عالية الجودة تحافظ على عملك في المقدمة',
    
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
    'products.transmission.gearbox': 'صندوق تروس ناقل الحركة',
    'products.transmission.description': 'أنظمة نقل عالية الأداء للخدمة الشاقة',
    'products.drive.shaft': 'مجموعة عمود الإدارة',
    'products.drive.description': 'عمود إدارة متين للتطبيقات التجارية الثقيلة',
    'products.contact.pricing': 'اتصل للحصول على السعر',
    'products.view.details': 'عرض التفاصيل',
    
    // Footer
    'footer.description': 'مورد رائد لقطع غيار الشاحنات التجارية مع أكثر من 20 عامًا من الخبرة. نوفر قطع غيار أصلية عالية الجودة من الشركات المصنعة الموثوقة في جميع أنحاء العالم للحفاظ على قوة أسطولك.',
    'footer.quick.links': 'روابط سريعة',
    'footer.contact.info': 'معلومات الاتصال',
    'footer.copyright': '2024 تراك بارتس برو. جميع الحقوق محفوظة. | حلول المركبات التجارية المهنية'
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
