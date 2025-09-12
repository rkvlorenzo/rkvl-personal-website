"use client";

import React from 'react';
import Image from "next/image";
import { Contact, Mail, MapPin } from "lucide-react";
import { motion  } from "framer-motion";
import {slideIn} from "@/app/constants/animations";

const PersonalInformation = () => {
    return (
        <motion.aside
            initial="hidden"
            animate="show"
            variants={slideIn}
            className="md:w-1/4 w-full md:sticky top-8 self-start bg-[#191919] border border-gray-600 rounded-sm text-[#c5c5c5] shadow-lg"
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
    );
};

export default PersonalInformation;
