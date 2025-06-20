import React from 'react';
import { Star, ThumbsUp, Quote } from 'lucide-react';

const Reviews = () => {
  // Rating distribution data
  const ratingData = [
    { stars: 5, percentage: 85, color: 'bg-green-500' },
    { stars: 4, percentage: 10, color: 'bg-green-400' },
    { stars: 3, percentage: 3, color: 'bg-green-300' },
    { stars: 2, percentage: 1, color: 'bg-gray-300' },
    { stars: 1, percentage: 1, color: 'bg-gray-300' }
  ];

  // User satisfaction metrics
  const satisfactionMetrics = [
    { label: 'Quality', percentage: 95 },
    { label: 'Service', percentage: 92 },
    { label: 'Value', percentage: 88 }
  ];

  // Customer testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      comment: "Excellent electric rickshaw! Very reliable and cost-effective for my daily business. The battery life is impressive.",
      vehicle: "Electric Passenger Rickshaw"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Great service and quality products. The delivery truck has helped expand our business significantly. Highly recommended!",
      vehicle: "Electric Delivery Truck"
    },
    {
      id: 3,
      name: "Mohammed Ali",
      location: "Bangalore",
      rating: 4,
      comment: "Good value for money. The cargo rickshaw is perfect for local deliveries. Customer support is very helpful.",
      vehicle: "Cargo E-Rickshaw"
    }
  ];

  // Calculate average rating
  const averageRating = ratingData.reduce((acc, rating) => {
    return acc + (rating.stars * rating.percentage / 100);
  }, 0).toFixed(1);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Customer Reviews & Ratings</h2>
          <p className="text-lg text-gray-600">See what our customers say about our electric vehicles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Overall Rating and Breakdown */}
          <div>
            {/* Overall Rating Display */}
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-2">{averageRating}/5</div>
              <div className="flex justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-8 h-8 ${
                      star <= Math.round(averageRating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 font-medium">Based on 150+ Reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-3 mb-8">
              {ratingData.map((rating) => (
                <div key={rating.stars} className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700 w-8">
                    {rating.stars}★
                  </span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${rating.color}`}
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {rating.percentage}%
                  </span>
                </div>
              ))}
            </div>

            {/* User Satisfaction Metrics */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <ThumbsUp className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Customer Satisfaction</h3>
              </div>

              <div className="space-y-4">
                {satisfactionMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                      <span className="text-sm font-bold text-gray-900">{metric.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${metric.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Customer Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Customers Say</h3>
            
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-green-500 mb-4" />
                
                {/* Review Content */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${
                        star <= testimonial.rating 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                
                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{testimonial.vehicle}</p>
                      <p className="text-xs text-gray-500">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="bg-green-600 p-6 rounded-xl text-white text-center">
              <h4 className="text-lg font-semibold mb-2">Share Your Experience</h4>
              <p className="text-green-100 mb-4">Help others make informed decisions by sharing your review</p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;