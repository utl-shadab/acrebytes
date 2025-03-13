"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Shield, Users, Star, Home, Globe, ThumbsUp, Clock } from "lucide-react";

const features = [
  { id: 1, title: "Expert Brokers", description: "Work with highly skilled professionals.", icon: <Briefcase size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 2, title: "Secure Transactions", description: "We ensure 100% security in transactions.", icon: <Shield size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 3, title: "Trusted by Clients", description: "Over 10,000+ happy customers.", icon: <Users size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 4, title: "Top Rated Service", description: "5-star service guarantee.", icon: <Star size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 5, title: "Diverse Listings", description: "Find a home that suits your needs.", icon: <Home size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 6, title: "Global Reach", description: "We operate in multiple countries.", icon: <Globe size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 7, title: "Customer Satisfaction", description: "We prioritize customer happiness.", icon: <ThumbsUp size={32} className="group-hover:text-white text-blue-600" /> },
  { id: 8, title: "24/7 Support", description: "Our team is available around the clock.", icon: <Clock size={32} className="group-hover:text-white text-blue-600" /> },
];

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6  rounded-lg  relative overflow-hidden group"
    >
      {/* Background Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500"
      ></motion.div>
      
      {/* Icon */}
      <div className="relative z-10 group-hover:text-white">{icon}</div>
      
      {/* Text */}
      <h3 className="mt-3 font-semibold relative z-10 group-hover:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-500 relative z-10 group-hover:text-white">
        {description}
      </p>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <div className="w-full bg-white rounded-2xl mx-auto px-6 py-10 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;