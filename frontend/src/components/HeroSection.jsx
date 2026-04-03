import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
            <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                    <img
                        src={logo}
                        alt="SnapSend"
                        className="h-16 sm:h-20 w-auto"
                    />
                </div>
            </div>

            <p className="text-l sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Share files securely and instantly with peer-to-peer technology.
                <br className="hidden sm:block" />
                No uploads, no storage, just direct transfers between devices.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">

                {/* Send Button */}
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/send")}
                    className="group bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-[200px]"
                >
                    <span className="flex items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v6"
                            />
                        </svg>
                        <span>Send Files</span>
                    </span>
                </motion.button>

                {/* Receive Button */}
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/receive")}
                    className="group bg-gray-900 hover:bg-black text-white font-semibold py-3 sm:py-4 px-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-[200px]"
                >
                    <span className="flex items-center justify-center gap-2">
                        <svg
                            className="w-5 h-5 group-hover:translate-y-[2px] transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 11l3 3m0 0l3-3m-3 3V8"
                            />
                        </svg>
                        <span>Receive Files</span>
                    </span>
                </motion.button>

            </div>
        </motion.div>
    );
};

export default HeroSection;