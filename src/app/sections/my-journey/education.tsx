import React from 'react'
import {motion} from "motion/react";
import educations from "@/app/constants/educations";
import {GraduationCap } from "lucide-react";

const Education = () => {
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
            <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                <GraduationCap  color="#c5c5c5" size={24} />
                <span className="text-xl">Education</span>
            </div>

            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {
                    educations.map((education, index) => {
                        return (
                            <li key={index} className="mb-5 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {education.duration}
                                </time>
                                <h3 className="text-lg font-semibold text-[#c5c5c5]">{education.position}</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{education.summary}</p>
                            </li>
                        )
                    })
                }
            </ol>
        </motion.div>
    )
}
export default Education
