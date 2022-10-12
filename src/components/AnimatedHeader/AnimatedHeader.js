import React from 'react';
import { motion } from "framer-motion";
import './AnimatedHeader.css'

const AnimatedHeader = () => {
    return (
        <div>
            <motion.h1
                animate={{ x: [50, 150, 25], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
            >
                <span className='headline'>
                    Increase Your <span style={{ color: 'maroon' }}>Learning</span> Path
                </span>
            </motion.h1>
        </div>
    );
};

export default AnimatedHeader;