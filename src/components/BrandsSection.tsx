
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Brands</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the world's leading manufacturers to bring you premium quality truck parts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center h-24 group cursor-pointer"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {brand.logo}
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
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
