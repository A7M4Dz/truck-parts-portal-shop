
const BrandsSection = () => {
  const brands = [
    { name: "DAS", logo: "🔧" },
    { name: "Haldex", logo: "🛠️" },
    { name: "SACHS", logo: "⚙️" },
    { name: "MAHLE", logo: "🔩" },
    { name: "LBI", logo: "🔨" },
    { name: "TIMP", logo: "⚡" },
    { name: "ZF", logo: "🏭" },
    { name: "TEXTAR", logo: "🚛" },
    { name: "HELLA", logo: "💡" },
    { name: "TKT", logo: "🔧" },
    { name: "KNORR", logo: "🛡️" },
    { name: "Valeo", logo: "⚙️" },
    { name: "WABCO", logo: "🚚" },
    { name: "MERITOR", logo: "🔩" },
    { name: "BERAL", logo: "🔨" },
    { name: "Cofan", logo: "🛠️" },
    { name: "CAMERE", logo: "📷" },
    { name: "BOGIE", logo: "⚡" },
    { name: "ENGINE BEARINGS", logo: "⚙️" },
    { name: "RIE", logo: "🔧" },
    { name: "BOSCH", logo: "🏭" },
  ];

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We partner with the world's most respected manufacturers to deliver premium quality 
            truck parts that keep your business moving forward
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-32 group cursor-pointer border border-gray-200/50 hover:border-blue-300"
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">
                {brand.logo}
              </div>
              <span className="text-sm font-bold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
