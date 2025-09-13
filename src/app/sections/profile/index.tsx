import { motion } from "motion/react"
import React from 'react'
import TechStack from "@/app/sections/profile/TechStack";
import AboutMe from "@/app/sections/profile/AboutMe";
import SectionDivider from "@/components/dividers/SectionDivider";

const Profile = () => {
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
            <AboutMe/>
            <SectionDivider/>
            <TechStack/>
        </motion.div>
    )
}
export default Profile
