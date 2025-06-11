
import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import ContactPopup from './ContactPopup';

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const phoneNumber = '+966582692285';
  const email = 'ahmedmbalotaibi@gmail.com';
  
  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/ahmedalotaebe',
      href: 'https://www.linkedin.com/in/ahmedalotaebe/',
      isLinkedIn: true,
      onClick: null
    },
    {
      icon: Mail,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      isLinkedIn: false,
      onClick: null
    },
    {
      icon: Phone,
      label: 'Phone',
      value: phoneNumber,
      href: null,
      isLinkedIn: false,
      onClick: () => setIsPopupOpen(true)
    }
  ];

  const handleContactClick = (method: typeof contactMethods[0]) => {
    if (method.onClick) {
      method.onClick();
    } else if (method.href) {
      if (method.isLinkedIn) {
        window.open(method.href, '_blank');
      } else {
        window.location.href = method.href;
      }
    }
  };

  return (
    <>
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-linkedin-light-gray px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Let's Connect</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-gray max-w-3xl mx-auto font-medium leading-relaxed">
              Ready to collaborate on your next project? I'm always excited to discuss new opportunities and creative challenges.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleContactClick(method)}
                  className={`group bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-8 sm:p-10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    method.isLinkedIn 
                      ? 'hover:bg-linkedin-blue hover:border-linkedin-blue' 
                      : 'hover:border-linkedin-blue hover:bg-white'
                  } cursor-pointer`}
                >
                  <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-6 transition-colors duration-300 ${
                    method.isLinkedIn 
                      ? 'text-linkedin-blue group-hover:text-white' 
                      : 'text-linkedin-blue'
                  }`} />
                  <h3 className={`text-xl sm:text-2xl font-bold mb-4 transition-colors duration-300 ${
                    method.isLinkedIn 
                      ? 'text-slate-900 group-hover:text-white' 
                      : 'text-slate-900'
                  }`}>{method.label}</h3>
                  <p className={`text-base sm:text-lg transition-colors duration-300 break-all ${
                    method.isLinkedIn 
                      ? 'text-linkedin-gray group-hover:text-blue-100' 
                      : 'text-linkedin-gray'
                  }`}>
                    {method.value}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      <ContactPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        phoneNumber={phoneNumber}
      />
    </>
  );
};

export default Contact;
