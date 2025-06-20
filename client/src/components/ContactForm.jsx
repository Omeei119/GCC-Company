import React, { useState } from 'react';

const ContactForm = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message or Description..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;