"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";

const properties = [
  { id: 1, name: "Mumbai", properties: 8 },
  { id: 2, name: "Delhi", properties: 0 },
  { id: 3, name: "Bangalore", properties: 0 },
  { id: 4, name: "Hyderabad", properties: 2 },
  { id: 5, name: "Ahmedabad", properties: 1 },
  { id: 6, name: "Chennai", properties: 0 },
  { id: 7, name: "Kolkata", properties: 3 },
  { id: 8, name: "Surat", properties: 2 },
  { id: 9, name: "Pune", properties: 0 },
  { id: 10, name: "Jaipur", properties: 1 },
  { id: 11, name: "Lucknow", properties: 0 },
  { id: 12, name: "Kanpur", properties: 2 },
  { id: 13, name: "Nagpur", properties: 1 },
  { id: 14, name: "Indore", properties: 0 },
  { id: 15, name: "Thane", properties: 3 },
  { id: 16, name: "Bhopal", properties: 2 },
  { id: 17, name: "Visakhapatnam", properties: 0 },
  { id: 18, name: "Pimpri-Chinchwad", properties: 1 },
  { id: 19, name: "Patna", properties: 0 },
  { id: 20, name: "Vadodara", properties: 2 },
  { id: 21, name: "Ghaziabad", properties: 1 },
  { id: 22, name: "Ludhiana", properties: 0 },
  { id: 23, name: "Agra", properties: 3 },
  { id: 24, name: "Nashik", properties: 2 },
  { id: 25, name: "Meerut", properties: 1 },
  { id: 26, name: "Faridabad", properties: 0 },
  { id: 27, name: "Rajkot", properties: 2 },
  { id: 28, name: "Kalyan-Dombivli", properties: 1 },
  { id: 29, name: "Vasai-Virar", properties: 0 },
  { id: 30, name: "Varanasi", properties: 3 },
  { id: 31, name: "Srinagar", properties: 2 },
  { id: 32, name: "Aurangabad", properties: 0 },
  { id: 33, name: "Dhanbad", properties: 1 },
  { id: 34, name: "Amritsar", properties: 0 },

 
];

const SkeletonLoader = () => (
  <motion.div
    className="w-16 h-16 bg-gray-300 rounded-md animate-pulse"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  />
);

const Properties = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full mx-auto p-10 my-10 bg-white rounded-4xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl ">Get new Real estate projects insights <br /> at below cities</h2>
        <motion.button
          className="flex items-center cursor-pointer space-x-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs">View All</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-6 gap-6">
        {properties.slice(0, visibleCount).map((property) => (
          <motion.div
            key={property.id}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <SkeletonLoader />
            <h3 className="mt-3 font-semibold">{property.name}</h3>
            <p className="text-sm text-gray-500">{property.properties} Properties</p>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < properties.length ? (
        <div className="flex justify-center mt-6">
          <motion.button
            className="flex items-center cursor-pointer space-x-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowMore}
            disabled={loading}
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <>
                <span className="text-xs">Show More</span>
                <ChevronDown size={18} />
              </>
            )}
          </motion.button>
        </div>
      ) : (
        <div className="flex justify-center mt-6">
          <motion.button
            className="flex items-center cursor-pointer space-x-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/properties"}
          >
            <span>View More</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Properties;