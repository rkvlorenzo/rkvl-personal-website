import React from 'react'
import {Medal} from "lucide-react";

const Achievements = () => {
    return (
        <>
            <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                <Medal   color="#c5c5c5" size={24} />
                <span className="text-xl">Achievements</span>
            </div>
        </>
    )
}
export default Achievements
