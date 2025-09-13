import React from "react";
import { Medal, Hourglass } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = () => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-5 mb-5"
        >
            <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                <Medal color="#c5c5c5" size={24} />
                <span className="text-xl">Achievements</span>
            </div>

            {/* Coming Soon / Placeholder */}
            <div className="flex flex-col items-center justify-center text-gray-400 py-10">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                    <Hourglass size={40} />
                </motion.div>
                <p className="mt-3 text-lg font-medium">Coming Soon</p>
                <p className="text-sm text-gray-500">This section is in progress</p>
            </div>
        </motion.div>
    );
};

export default Achievements;
