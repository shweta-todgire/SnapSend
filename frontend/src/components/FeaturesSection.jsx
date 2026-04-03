import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
const FeaturesSection = () => {
    const features = [
        {
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
            ),
            title: "Secure Transfer",
            description:
                "Direct P2P transfers with WebRTC's built-in security protocols",
            iconColor: "text-blue-900",
        },
        {
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                />
            ),
            title: "No Storage",
            description:
                "Files never touch our servers - direct peer-to-peer transfer only",
            iconColor: "text-green-900",
        },
        {
            icon: (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            ),
            title: "Fast & Easy",
            description:
                "Simple session codes and instant file sharing in seconds",
            iconColor: "text-yellow-900",
        },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
        >
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    iconColor={feature.iconColor}
                />
            ))}
        </motion.div>
    );
};
export default FeaturesSection;
