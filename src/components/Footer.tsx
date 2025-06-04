
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">TruckParts Pro</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading supplier of commercial truck parts with over 20 years of experience. 
              We provide quality parts from trusted manufacturers worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                📧
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                📞
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                📍
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 info@truckpartspro.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Industrial Blvd, City, State 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TruckParts Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
