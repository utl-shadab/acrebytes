"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building, Landmark, Store, Users, Briefcase, Coffee,  Globe2 } from "lucide-react";

const categories = [
  { id: 1, name: "Town House", properties: 2, icon: <Home size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 2, name: "Modern Villa", properties: 10, icon: <Landmark size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 3, name: "Apartment", properties: 3, icon: <Building size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 4, name: "Office", properties: 3, icon: <Briefcase size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 5, name: "Single Family", properties: 5, icon: <Users size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 6, name: "Shop House", properties: 2, icon: <Store size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 7, name: "Cafe", properties: 4, icon: <Coffee size={40} className="group-hover:text-white text-blue-600" /> },
  { id: 8, name: "Global Office", properties: 6, icon: <Globe2 size={40} className="group-hover:text-white text-blue-600" /> },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold">Featured Categories</h2>
          <p className="text-gray-500">Lorem ipsum dolor sit amet</p>
        </div>
        <motion.button
          className="flex text-xs items-center space-x-2 px-4 py-2 text-blue-600 bg-white shadow-2xl rounded-full hover:bg-blue-600 hover:text-white transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View All Categories</span>
          <ArrowRight size={15} />
        </motion.button>
      </div>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-6 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            className="flex flex-col items-center cursor-pointer justify-center text-center p-6 bg-white  shadow-md relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></motion.div>
            
            {/* Icon */}
            <div className="relative z-10">{category.icon}</div>
            
            {/* Text */}
            <h3 className="mt-3 font-semibold relative z-10 group-hover:text-white">
              {category.name}
            </h3>
            <p className="text-sm text-gray-500 relative z-10 group-hover:text-white">
              {category.properties} Properties
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
