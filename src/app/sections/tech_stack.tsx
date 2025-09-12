import React from 'react'
import {ToolCase} from "lucide-react";
import techStacks from "@/app/constants/tech_stacks";

const TechStack = () => {
    return (
        <>
            <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                <ToolCase  color="#c5c5c5" size={24} />
                <span className="text-xl">Tech Stack</span>
            </div>

            {
                techStacks.map((techStack, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 text-[#c5c5c5] mb-5">
                            <p>{techStack.category}</p>
                            <div className="flex gap-2 flex-wrap">
                                {
                                    techStack.items.map((item) => {
                                        return (
                                            <span key={item} className="px-2 py-0.5 text-md rounded-md border border-gray-500 hover:bg-gray-700 hover:border-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{item}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default TechStack
