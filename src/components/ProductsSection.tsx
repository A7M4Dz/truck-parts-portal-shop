
import { useState } from "react";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Engine", "Brake Parts", "Transmission"];

  const products = [
    {
      id: 1,
      name: "Heavy Duty Engine Assembly",
      category: "Engine",
      image: "🔧",
      description: "Complete engine assembly for commercial trucks",
      price: "Contact for pricing",
    },
    {
      id: 2,
      name: "Air Brake System",
      category: "Brake Parts",
      image: "🛠️",
      description: "Professional grade air brake components",
      price: "Contact for pricing",
    },
    {
      id: 3,
      name: "Transmission Gearbox",
      category: "Transmission",
      image: "⚙️",
      description: "High-performance transmission systems",
      price: "Contact for pricing",
    },
    {
      id: 4,
      name: "Drive Shaft Assembly",
      category: "Transmission",
      image: "🔩",
      description: "Durable drive shaft for heavy-duty applications",
      price: "Contact for pricing",
    },
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl group-hover:bg-gray-200 transition-colors duration-200">
                {product.image}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm">
                    View Details
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
