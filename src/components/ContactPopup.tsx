
import React from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
}

const ContactPopup = ({ isOpen, onClose, phoneNumber }: ContactPopupProps) => {
  if (!isOpen) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
    onClose();
  };

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 transform animate-scale-in">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">Contact Ahmed</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Message on WhatsApp
            </button>
            
            <button
              onClick={handleCall}
              className="w-full flex items-center justify-center gap-3 bg-linkedin-blue hover:bg-linkedin-blue-hover text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Phone
            </button>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-4">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
