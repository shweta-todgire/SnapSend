import React from "react";
import { motion } from "framer-motion";

const AnimatedBackdrop = () => {
    const nodes = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 4,
        delay: Math.random() * 5,
    }));

    return (
        <div className="fixed inset-0 bg-black overflow-hidden pointer-events-none">

            {/* GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
                        linear-gradient(white 1px, transparent 1px),
                        linear-gradient(90deg, white 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* CONNECTION LINES */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                {nodes.map((node, i) => {
                    const next = nodes[(i + 1) % nodes.length];
                    return (
                        <motion.line
                            key={i}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${next.x}%`}
                            y2={`${next.y}%`}
                            stroke="rgba(59,130,246,0.3)"
                            strokeWidth="1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.6, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: node.delay,
                            }}
                        />
                    );
                })}
            </svg>

            {/* NODES */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute rounded-full bg-blue-500"
                    style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        boxShadow: "0 0 10px rgba(59,130,246,0.8)",
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* PULSE CENTER EFFECT */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full"
                style={{
                    transform: "translate(-50%, -50%)",
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* FLOATING LIGHT PARTICLES */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -80, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedBackdrop;