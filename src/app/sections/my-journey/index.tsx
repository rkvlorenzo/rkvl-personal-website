import React from 'react'
import Experience from "@/app/sections/my-journey/experience";
import Education from "@/app/sections/my-journey/education";
import SectionDivider from "@/components/dividers/SectionDivider";

const MyJourney = () => {
    return (
        <div className="mt-5 mb-5">
            <Education/>
            <SectionDivider/>
            <Experience/>
        </div>
    )
}
export default MyJourney
