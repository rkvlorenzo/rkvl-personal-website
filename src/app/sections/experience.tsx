import React from 'react'
import experiences from "@/app/constants/experiences";
import { motion } from "motion/react";

const Experience = () => {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {
                    experiences.map((experience, index) => {
                        return (
                            <li key={index} className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {experience.duration}
                                </time>
                                <h3 className="text-lg font-semibold text-[#c5c5c5]">{experience.position}</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{experience.summary}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </motion.div>
    )
}
export default Experience
