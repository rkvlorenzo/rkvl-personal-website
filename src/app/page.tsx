"use client";

import React, {useEffect, useState} from "react";
import SlidingTabBar from "@/components/SlidingTabBar";
import Profile from "@/app/sections/profile/index";
import PersonalInformation from "@/app/sections/personal-information/index";
import { motion } from "motion/react";
import { slideIn } from "@/app/constants/animations";
import MyJourney from "@/app/sections/my-journey";

const Page = () => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (activeTab) {
            const el = document.getElementById("section-start");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [activeTab]); // runs whenever "open" changes

    return (
        <>
            <div id="section-start" className="max-w-7xl mx-auto px-4 py-8 text-[#c5c5c5]">
                <div className="flex flex-col md:flex-row gap-8">
                    <PersonalInformation/>
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
                                <div>
                                    {activeTab === 0 && <Profile/>}
                                    {activeTab === 1 && <MyJourney/>}
                                </div>
                            </div>
                        </div>
                    </motion.main>
                </div>
            </div>
        </>
    )
}
export default Page
