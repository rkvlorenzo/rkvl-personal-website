import React from "react";
import { Medal } from "lucide-react";
import { motion } from "framer-motion";
import achievements from "@/app/constants/achievements";

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

            <ul className="list-disc pl-6 space-y-2 text-base">
                {achievements.map((achievement, i) => (
                    <li key={i} className="leading-relaxed">
                        {achievement}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Achievements;
