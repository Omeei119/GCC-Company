import React from 'react';
import { Building, Users, Calendar, DollarSign, FileText, Globe, Award, Target, Eye } from 'lucide-react';

const About = () => {
  // Company information data
  const companyData = [
    {
      icon: <Building className="w-6 h-6 text-blue-600" />,
      label: "Nature of Business",
      value: "Manufacturer"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      label: "Total Number of Employees",
      value: "4 People"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      label: "GST Registration Date",
      value: "19-05-2025"
    },
    {
      icon: <FileText className="w-6 h-6 text-red-600" />,
      label: "Legal Status of Firm",
      value: "Limited Company"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      label: "Annual Turnover",
      value: "1.5 - 5 Cr"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      label: "Import Export Code (IEC)",
      value: "AAHCE*****"
    }
  ];

  // Company values
  const values = [
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Our Mission",
      description: "To revolutionize urban transportation through innovative electric vehicle solutions that are sustainable, efficient, and accessible to all."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Our Vision",
      description: "To become the leading manufacturer of electric vehicles in India, contributing to a cleaner and greener future for generations to come."
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Our Values",
      description: "Innovation, sustainability, quality, and customer satisfaction are at the core of everything we do at GreenCharge Company."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About GreenCharge</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the electric vehicle revolution with innovative, sustainable transportation solutions since 2023.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                GreenCharge Company was founded with a vision to transform urban transportation through 
                sustainable electric vehicle solutions. Since our establishment in 2023, we have been 
                committed to manufacturing high-quality electric rickshaws, trucks, and other commercial vehicles.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of dedicated professionals works tirelessly to design and manufacture vehicles 
                that not only meet the highest standards of quality and safety but also contribute to 
                reducing carbon emissions and creating a cleaner environment.
              </p>
              <p className="text-lg text-gray-600">
                With a focus on innovation and customer satisfaction, we continue to expand our product 
                range and improve our manufacturing processes to serve our customers better.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Electric Vehicle Manufacturing"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600">The principles that guide our journey towards sustainable transportation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Information</h2>
            <p className="text-lg text-gray-600">Key details about our organization and operations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyData.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-500 mb-1">{item.label}</h3>
                    <p className="text-lg font-semibold text-gray-900">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">GST No.</h3>
                  <p className="text-lg font-semibold text-gray-900">Available on Request</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                  <Building className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">CIN No.</h3>
                  <p className="text-lg font-semibold text-gray-900">Available on Request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At GreenCharge, we are committed to excellence in manufacturing, customer service, and 
              environmental responsibility. Our experienced team ensures that every vehicle meets the 
              highest standards of quality and performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control processes ensure reliable products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">Dedicated support team providing excellent customer service</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Contributing to a greener future through eco-friendly transportation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;