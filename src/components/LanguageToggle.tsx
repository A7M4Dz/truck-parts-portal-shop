
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-blue-50 group border border-gray-200 hover:border-blue-300 min-h-[44px] shadow-sm"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe size={18} className="group-hover:rotate-12 transition-transform duration-200 flex-shrink-0" />
      <span className="font-semibold text-sm whitespace-nowrap">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;
