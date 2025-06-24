import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation links
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Products', href: '/products' },
      { name: 'Contact', href: '/contact' },
    ],
    products: [
      { name: 'E-Rickshaws', href: '/products' },
      { name: 'Electric Trucks', href: '/products' },
      { name: 'Battery Solutions', href: '/products' },
    ],
    support: [
      { name: 'Customer Support', href: '/contact' },
      { name: 'Warranty', href: '/contact' },
      { name: 'Service Centers', href: '/contact' },
    ]
  };

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              
                <img
                  src="assets/logo.png" // or {logo} if imported
                  alt="GreenCharge Logo"
                  className="h-10 w-10 object-contain rounded-xl shadow-md"
                  
                />
              
              <div>
                <h3 className="text-lg font-bold">Green Charge Company</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Energy that Cares , Powered by Inovation</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of electric vehicles, providing sustainable and efficient transportation solutions for urban mobility since 2024.
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-green-500" />
                <span className="text-sm">123 Green Street, Electric City</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-sm">+91 9975651709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-sm">@greencharge.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div>
              <h5 className="text-sm font-semibold mb-3 text-gray-400">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-green-600 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Green Charge Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;