import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideMessageCircle, LucideUsers, LucideBriefcase, LucideStar, LucideArrowBigRight, LucideMoveUpRight } from "lucide-react";

// Stepper Data
const steps = [
    {
        title: "Enquire",
        description:
            "Sell / Buy / Lease / Rent a property",
        buttonLabel: "Enquire",
        icon: <LucideMessageCircle size={18} />,
    },
    {
        title: "Get Broker",
        description:
            "Get connected with professional Brokers",
        buttonLabel: "Get Broker",
        icon: <LucideUsers size={18} />,
    },
    {
        title: "Work on Enquiry",
        description:
            "Let Broker work on your requirements",
        buttonLabel: "Work on Enquiry",
        icon: <LucideBriefcase size={18} />,
    },
    {
        title: "Rate Broker",
        description:
            "Let us know how was your experience with the assigned Broker",
        buttonLabel: "Rate Broker",
        icon: <LucideStar size={18} />,
    },
];

const StepperComponent = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-4xl h-80   mx-auto py-10">
            <div className="text-center">
                <h1 className="text-4xl mb-3">How it works - Enquire. Connect. Close. Rate</h1>
                <p className="mb-3">Your seamless path to get better experience in real estase !</p>
            </div>
            {/* Stepper Navigation */}
            <div className="flex items-center  justify-between  ml-32 mb-6 relative">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center w-full">
                        {/* Step Indicator */}
                        <div
                            className={`relative flex items-center justify-center w-8 h-8 text-sm font-bold rounded-full border-2 transition-all duration-300 ${index === currentStep
                                    ? "border-blue-500 bg-blue-100 text-blue-600"
                                    : index < currentStep
                                        ? "border-blue-500 bg-blue-600 text-white"
                                        : "border-gray-300 bg-gray-100 text-gray-400"
                                }`}
                        >
                            {index + 1}
                        </div>
                        {index === currentStep && (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute top-14 h-36  w-60 p-4 bg-white shadow-lg rounded-md text-center"
                            >
                                <LucideMoveUpRight className="absolute top-1 cursor-pointer right-2 bg-blue-600 text-white rounded-full p-2" size={28} />
                                <h2 className="text-sm font-semibold text-gray-800">
                                    {steps[currentStep].title}
                                </h2>
                                <p className="text-gray-600 mt-1 text-xs">
                                    {steps[currentStep].description}
                                </p>
                                <motion.button
                                    className="bg-blue-600 text-white cursor-pointer px-4 py-2 text-xs rounded-md my-4 flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {steps[currentStep].icon}
                                    <span>{steps[currentStep].buttonLabel}</span>
                                </motion.button>
                            </motion.div>
                        )}
                        {/* Running Blue Progress Bar */}
                        {index < steps.length - 1 && (
                            <div className="flex-1 h-1 mx-2 rounded-full overflow-hidden bg-gray-300">
                                <motion.div
                                    className="h-full bg-blue-600"
                                    initial={{ width: "0%" }}
                                    animate={{
                                        width:
                                            index === currentStep
                                                ? ["0%", "100%"] // Running step animation
                                                : index < currentStep
                                                    ? "100%" // Completed step
                                                    : "0%", // Future steps
                                    }}
                                    transition={{
                                        duration: index === currentStep ? 5 : 0.5,
                                        ease: "linear",
                                    }}
                                ></motion.div>
                            </div>
                        )}
                    </div>
                ))}
            </div>


        </div>
    );
};

export default StepperComponent;
