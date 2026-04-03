import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "1",
        title: "Select Files",
        description: "Choose files from your device to share securely",
    },
    {
        number: "2",
        title: "Get Code",
        description: "Generate a unique session code instantly",
    },
    {
        number: "3",
        title: "Share Code",
        description: "Receiver enters the code to establish connection",
    },
    {
        number: "4",
        title: "Transfer",
        description: "Files transfer directly between devices safely",
    },
];

const HowItWorksSection = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-6">
            
            {/* Heading */}
            <div className="text-center mb-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    How it works
                </h2>
                <div className="w-24 h-[2px] bg-gray-700 mx-auto"></div>
            </div>

            {/* Timeline */}
            <div className="relative">
                
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform -translate-x-1/2"></div>

                <div className="space-y-20">
                    {steps.map((step, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative flex items-center justify-between"
                            >
                                {/* Left Side */}
                                <div className={`w-1/2 ${isLeft ? "pr-10 text-right" : "opacity-0"}`}>
                                    {isLeft && (
                                        <>
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {step.description}
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* Center Number */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111] border border-gray-700 text-white font-semibold">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Right Side */}
                                <div className={`w-1/2 ${!isLeft ? "pl-10 text-left" : "opacity-0"}`}>
                                    {!isLeft && (
                                        <>
                                            <h3 className="text-lg font-semibold text-white mb-1">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {step.description}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;