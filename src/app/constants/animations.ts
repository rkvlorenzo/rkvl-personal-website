import {Variants} from "framer-motion";

export const slideIn: Variants = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.2, // manual stagger based on index
        },
    }),
};

