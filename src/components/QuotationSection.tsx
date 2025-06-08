
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileText } from "lucide-react";

const QuotationSection = () => {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [partsNeeded, setPartsNeeded] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    console.log("Quotation request:", { email, partsNeeded });
    
    // Reset form
    setEmail("");
    setPartsNeeded("");
    setIsSubmitting(false);
    
    // Show success message (you could use a toast here)
    alert(language === 'ar' ? 'تم إرسال طلب عرض السعر بنجاح! سنعود إليك قريباً.' : 'Your quotation request has been submitted successfully! We\'ll get back to you soon.');
  };

  return (
    <section id="quotation" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-heading">
            {language === 'ar' ? 'طلب' : 'Request a'} <span className="text-gradient">{language === 'ar' ? 'عرض سعر' : 'Quotation'}</span>
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {language === 'ar' 
              ? 'احصل على عرض سعر شخصي لاحتياجاتك من قطع غيار الشاحنات. ما عليك سوى تقديم بريدك الإلكتروني ووصف القطع التي تبحث عنها.'
              : 'Get a personalized quote for your truck parts needs. Simply provide your email and describe the parts you\'re looking for.'
            }
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6 md:pb-8 px-4 md:px-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                {language === 'ar' ? 'احصل على عرض السعر' : 'Get Your Quote'}
              </CardTitle>
              <p className="text-gray-600 text-base md:text-lg">
                {language === 'ar' 
                  ? 'املأ النموذج أدناه وسنعود إليك بعرض سعر مفصل'
                  : 'Fill out the form below and we\'ll get back to you with a detailed quotation'
                }
              </p>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                    {language === 'ar' ? 'عنوان البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ar' ? 'أدخل عنوان بريدك الإلكتروني' : 'Enter your email address'}
                    required
                    className="h-12 md:h-14 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="parts" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                    {language === 'ar' ? 'القطع المطلوبة' : 'Parts Needed'}
                  </label>
                  <Textarea
                    id="parts"
                    value={partsNeeded}
                    onChange={(e) => setPartsNeeded(e.target.value)}
                    placeholder={language === 'ar' 
                      ? 'صف القطع التي تحتاجها (العلامة التجارية، الطراز، أرقام القطع، الكميات، إلخ)'
                      : 'Describe the parts you need (brand, model, part numbers, quantities, etc.)'
                    }
                    required
                    rows={6}
                    className="text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200 min-h-[44px]"
                >
                  {isSubmitting 
                    ? (language === 'ar' ? 'جاري الإرسال...' : 'Submitting...') 
                    : (language === 'ar' ? 'إرسال' : 'Submit')
                  }
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuotationSection;
