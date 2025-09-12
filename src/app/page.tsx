"use client";

import React, {useState} from "react";
import SlidingTabBar from "@/components/SlidingTabBar";
import Profile from "@/app/sections/profile";
import Experience from "@/app/sections/experience";
import Personal_information from "@/app/sections/personal_information";
import { motion } from "motion/react";
import { slideIn } from "@/app/constants/animations";

const Page = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 text-[#c5c5c5]">
                <div className="flex flex-col md:flex-row gap-8">
                    <Personal_information/>

                    <motion.main
                        initial="hidden"
                        animate="show"
                        variants={slideIn}
                        className="flex-1 space-y-20">

                        <div className="w-full h-full block p-6 bg-[#191919] border border-gray-600 rounded-sm">
                            <div>
                                <SlidingTabBar
                                    activeTabIndex={activeTab}
                                    onTabChange={(index) => setActiveTab(index)}
                                />
                                {activeTab === 0 && <Profile/>}
                                {activeTab === 1 && <Experience/>}
                            </div>
                        </div>
                    </motion.main>
                </div>
            </div>
        </>

    )
}
export default Page
