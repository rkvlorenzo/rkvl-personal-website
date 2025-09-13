"use client";

import React, {useState} from 'react';
import Image from "next/image";
import {ChevronDown, Contact, Mail, MapPin} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {slideIn} from "@/app/constants/animations";

const PersonalInformation = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/*Medium to Large Devices View*/}
            <motion.aside
                initial="hidden"
                animate="show"
                variants={slideIn}
                className="hidden md:block md:w-1/4 w-full md:sticky top-8 self-start bg-[#191919] border border-gray-600 rounded-sm text-[#c5c5c5] shadow-lg"
            >
                <div className="w-full flex justify-center py-8">
                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                        <Image
                            className="rounded-full"
                            src="/my-img.JPG"
                            width={150}
                            height={150}
                            alt="rkvl"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center py-4 text-center">
                    <h1 className="text-2xl font-bold">Ralph Kenneth Lorenzo</h1>
                    <p className="text-gray-400">Software Engineer</p>
                </div>

                <div className="inline-flex items-center justify-center w-full">
                    <hr className="h-px w-9/10 my-5 bg-gray-600 border-0" />
                </div>

                <div className="w-full flex flex-col mx-5 my-5 mb-10">
                    <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                        <MapPin color="#c5c5c5" size={24} />
                        <span>Cavite, Philippines</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                        <Contact color="#c5c5c5" size={24} />
                        <span>+639152664843</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#c5c5c5] mb-5">
                        <Mail color="#c5c5c5" size={24} />
                        <span>lorenzo.rkv@gmail.com</span>
                    </div>
                </div>
            </motion.aside>

            {/*Small Devices View*/}
            <div className="md:hidden w-full bg-[#191919] border border-gray-600 rounded-lg text-[#c5c5c5] shadow-md p-6 mt-6">
                {/* Header (always visible) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between w-full"
                >
                    <div className="flex items-center gap-4">
                        {/* Profile Image */}
                        <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                            <Image
                                className="rounded-full"
                                src="/my-img.JPG"
                                width={80}
                                height={80}
                                alt="rkvl"
                            />
                        </div>

                        {/* Name & Title */}
                        <div className="flex flex-col text-left">
                            <h1 className="text-lg font-bold">Ralph Kenneth Lorenzo</h1>
                            <p className="text-gray-400 text-sm">Software Engineer</p>
                        </div>
                    </div>

                    {/* Chevron Icon */}
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown />
                    </motion.div>
                </button>

                {/* Animated Content */}
                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="h-px w-9/10 my-5 bg-gray-600 border-0" />
                            </div>

                            <div className="flex flex-col gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} /> <span>Cavite, Philippines</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Contact size={18} /> <span>+639152664843</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={18} /> <span>lorenzo.rkv@gmail.com</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>

    );
};

export default PersonalInformation;
