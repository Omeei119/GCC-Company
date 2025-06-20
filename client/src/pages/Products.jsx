import React, { useState } from 'react';
import { Battery, Zap, Shield, Award, ChevronRight, Star } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'rickshaw', name: 'E-Rickshaws' },
    { id: 'truck', name: 'Electric Trucks' },
    { id: 'battery', name: 'Battery Solutions' }
  ];

  // Products data
  const products = [
    {
      id: 1,
      name: "Electric Passenger Rickshaw",
      category: "rickshaw",
      image: "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹2,50,000",
      features: ["Seating for 6 passengers", "60km range", "8-hour charging", "LED headlights"],
      rating: 4.8,
      description: "Eco-friendly electric rickshaw designed for city transport, offering high mileage and comfort for daily passenger commute."
    },
    {
      id: 2,
      name: "Cargo E-Rickshaw",
      category: "rickshaw",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹2,80,000",
      features: ["500kg load capacity", "80km range", "Fast charging", "GPS tracking"],
      rating: 4.7,
      description: "Sturdy build for heavy loads, designed to streamline local delivery operations efficiently with enhanced safety features."
    },
    {
      id: 3,
      name: "Electric Delivery Truck",
      category: "truck",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹8,50,000",
      features: ["1000kg payload", "120km range", "Commercial grade", "Digital dashboard"],
      rating: 4.9,
      description: "Heavy-duty electric truck for commercial use, perfect for urban delivery and logistics operations."
    },
    {
      id: 4,
      name: "Lithium Battery Pack",
      category: "battery",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹45,000",
      features: ["48V 100Ah", "3000+ cycles", "BMS protection", "2-year warranty"],
      rating: 4.6,
      description: "Long-lasting and quick-charging batteries for electric vehicles, ensuring continuous operation and reliability."
    },
    {
      id: 5,
      name: "Premium E-Rickshaw",
      category: "rickshaw",
      image: "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹3,20,000",
      features: ["Luxury seating", "100km range", "Music system", "Air conditioning"],
      rating: 4.9,
      description: "Premium electric rickshaw with enhanced comfort features and extended range for superior passenger experience."
    },
    {
      id: 6,
      name: "Heavy Duty Battery",
      category: "battery",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹65,000",
      features: ["72V 150Ah", "5000+ cycles", "Waterproof", "3-year warranty"],
      rating: 4.8,
      description: "High-capacity battery solution for heavy-duty electric vehicles with extended life and superior performance."
    }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of electric vehicles and battery solutions designed for modern transportation needs.
          </p>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Product Image */}
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="w-4 h-4 text-green-500 mr-1" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      <span className="text-sm text-gray-500 ml-1">onwards</span>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-gray-600">Advanced features and benefits that set our vehicles apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Long Battery Life</h3>
              <p className="text-gray-600">Advanced lithium batteries with 3000+ charge cycles</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Charging</h3>
              <p className="text-gray-600">Quick charging technology for minimal downtime</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">Built-in safety features and certified components</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous testing and quality control processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make the Switch?</h2>
          <p className="text-xl text-green-100 mb-8">Contact us today for personalized quotes and detailed product information</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Call Now: +91 12345 67890
            </a>
            <a
              href="mailto:info@greencharge.com"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;