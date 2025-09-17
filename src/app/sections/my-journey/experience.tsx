import React from 'react'
import experiences from "@/app/constants/experiences";
import { motion } from "motion/react";
import {Briefcase } from "lucide-react";

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
            <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                <Briefcase color="#c5c5c5" size={24} />
                <span className="text-xl">Experience</span>
            </div>

            <ol className="relative border-s border-gray-200">
                {
                    experiences.map((experience, index) => {
                        return (
                            <li key={index} className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                                    {experience.duration}
                                </time>
                                <h3 className="text-lg font-semibold text-[#c5c5c5]">{experience.position}</h3>
                                <h4 className="text-md text-gray-500">{experience.company}</h4>
                                <ul className="list-disc pl-5 mt-2 space-y-1 text-base font-normal">
                                    {experience.summary.map((point, i) => (
                                        <li key={i} className="pl-1">{point}</li>
                                    ))}
                                </ul>

                                <p className="mt-2 text-sm text-gray-400 ">
                                    <span className="font-semibold text-gray-500">Tech Stack:</span> {experience.stacks.join(", ")}
                                </p>
                            </li>
                        )
                    })
                }
            </ol>
        </motion.div>
    )
}
export default Experience
