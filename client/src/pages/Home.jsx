import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Leaf, Shield, Award } from 'lucide-react';

const Home = () => {
  // Featured vehicles data
  const featuredVehicles = [
    {
      id: 1,
      name: "Electric Truck",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Heavy-duty electric truck for commercial use"
    },
    {
      id: 2,
      name: "Auto Rickshaw",
      image: "https://images.pexels.com/photos/2519370/pexels-photo-2519370.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Eco-friendly passenger transport solution"
    },
    {
      id: 3,
      name: "E-Rickshaw",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Efficient urban mobility vehicle"
    }
  ];

  // Company features
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Electric Power",
      description: "100% electric vehicles with zero emissions"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Eco-Friendly",
      description: "Sustainable transportation for a greener future"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Reliable",
      description: "Built with quality components for durability"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Certified",
      description: "All vehicles meet industry safety standards"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Future of <span className="text-green-600">Electric</span> Transportation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading manufacturer of electric vehicles, providing sustainable and efficient transportation solutions for urban mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Vehicles</h2>
            <p className="text-lg text-gray-600">Discover our range of electric vehicles designed for modern transportation needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{vehicle.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Green Charge?</h2>
            <p className="text-lg text-gray-600">We're committed to providing the best electric vehicle solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white rounded-full shadow-md">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Electric?</h2>
          <p className="text-xl text-green-100 mb-8">Join the electric revolution and make a positive impact on the environment</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;