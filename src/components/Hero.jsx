import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideTrendingUp, LucideBox, LucideZap } from "lucide-react";

// Tab content data
const tabs = [
  {
    title: "Stable Income Streams",
    description:
      "AcreBytes provides a steady flow of regular rental income that arrives in weeks, not years. Our real estate portfolio ensures long-term financial stability.",
    icon: <LucideTrendingUp size={24} />,
    image: "/Home.jpg", 
  },
  {
    title: "Rapid Deployment",
    description:
      "Speedy capital deployment to accommodate any investment with good strategy. AcreBytes helps investors enter the real estate market efficiently with minimal friction.",
    icon: <LucideBox size={24} />,
    image: "/Home.jpg", 
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "AcreBytes integrates advanced real estate technology for seamless management, honored with the Tech Pioneer designation from the World Economic Forum.",
    icon: <LucideZap size={24} />,
    image: "/Home.jpg", 
  },
];

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="w-full max-w-screen-xl mx-auto px-5  py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Content - Dynamic Content Based on Active Tab */}
      <motion.div
        key={selectedTab}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          className="border border-black px-4 py-1 rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Why Choose AcreBytes?
        </motion.button>

        <h1 className="text-2xl  font-bold leading-tight">
          {tabs[selectedTab].title}
        </h1>

        <p className="text-gray-600 text-sm mt-2">
          {tabs[selectedTab].description}
        </p>

        {/* Image Section (Changes Based on Active Tab) */}
        <motion.img
          key={selectedTab}
          src={tabs[selectedTab].image}
          alt={tabs[selectedTab].title}
          className="w-full mt-6 rounded-lg h-60 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {/* Right Side - Tabs */}
      <div className="flex flex-col space-y-4">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-md cursor-pointer transition ${
              selectedTab === index ? "bg-blue-600 text-white" : "bg-gray-100"
            } ${selectedTab === index ? "scale-105 shadow-lg" : ""}`}
            onClick={() => setSelectedTab(index)}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center space-x-3">
              {tab.icon}
              <h3 className="text-lg font-semibold">{tab.title}</h3>
            </div>
            <p className="text-xs mt-2">{tab.description}</p>
          </motion.div>
        ))}
      </div>
   
    </section>
  );
};

export default Hero;
