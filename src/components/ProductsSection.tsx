
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  const categories = [
    { key: "All", label: t('products.category.all') },
    { key: "Engine", label: t('products.category.engine') },
    { key: "Brake Parts", label: t('products.category.brake') },
    { key: "Transmission", label: t('products.category.transmission') }
  ];

  const products = [
    {
      id: 1,
      name: t('products.heavy.duty.engine'),
      category: "Engine",
      image: "🔧",
      description: t('products.engine.description'),
      price: t('products.contact.pricing'),
    },
    {
      id: 2,
      name: t('products.air.brake'),
      category: "Brake Parts",
      image: "🛠️",
      description: t('products.brake.description'),
      price: t('products.contact.pricing'),
    },
    {
      id: 3,
      name: t('products.transmission.gearbox'),
      category: "Transmission",
      image: "⚙️",
      description: t('products.transmission.description'),
      price: t('products.contact.pricing'),
    },
    {
      id: 4,
      name: t('products.drive.shaft'),
      category: "Transmission",
      image: "🔩",
      description: t('products.drive.description'),
      price: t('products.contact.pricing'),
    },
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section 
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95)), url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      id="products"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-white/90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('products.title')} <span className="text-blue-600">{t('products.title.highlight')}</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('products.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.key
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-blue-600 border border-gray-200 shadow-md"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-7xl group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300">
                {product.image}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold text-lg">{product.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-semibold transform hover:scale-105 shadow-lg">
                    {t('products.view.details')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
