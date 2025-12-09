import React from 'react';
import { motion } from 'framer-motion';

const Intro = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            onAnimationComplete={onComplete}
        >
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-8xl font-bold text-white font-hero-font"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        M
                    </span>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mt-2"
                />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="text-white text-xl md:text-2xl mt-4 font-light tracking-widest text-center"
                >
                    MUKSHITH
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Intro;
