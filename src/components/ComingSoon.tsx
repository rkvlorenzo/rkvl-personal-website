import React from "react";
import { Hourglass } from "lucide-react";
import { motion } from "framer-motion";

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-400 py-10">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
                <Hourglass size={40} />
            </motion.div>
            <p className="mt-3 text-lg font-medium">Coming Soon</p>
            <p className="text-sm text-gray-500">This section is in progress</p>
        </div>
    )
}
export default ComingSoon
