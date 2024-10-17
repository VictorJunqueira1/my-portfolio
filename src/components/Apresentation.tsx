"use client"

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Apresentation = () => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="space-y-2" id='home'>
            <motion.h1
                className="text-xl md:text-3xl font-semibold mb-2 text-green-400 mt-24 md:mt-40"
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
                variants={variants}
            >
                Olá, pessoal! Eu sou-
            </motion.h1>
            <motion.span
                className="text-6xl md:text-7xl lg:text-9xl text-white font-bold mb-6 py-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={variants}
            >
                Victor Junqueira.
            </motion.span>
            <motion.div
                className="flex items-center gap-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5, delay: 1 }}
                variants={variants}
            >
                <motion.p
                    className="text-xl md:text-3xl max-w-3xl font-semibold mb-6"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, delay: 1.5 }}
                    variants={variants}
                >
                    Software Engineer.
                    <span className="text-gray-500"> Desenvolvedor compromissado com interesse em Tecnologia.</span>
                </motion.p>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5, delay: 2 }}
                variants={variants}
            >
                <motion.p
                    className="text-lg sm:text-xl mb-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, delay: 2.5 }}
                    variants={variants}
                >
                    🚀 Atualmente especializado em Front-End (React / Next.js)
                </motion.p>
                <motion.p
                    className="text-lg sm:text-xl mb-8"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, delay: 3 }}
                    variants={variants}
                >
                    ⚡ Especializado em <span className="text-green-400">Responsividade e SEO</span>
                </motion.p>
            </motion.div>
            <SocialLinks />
        </div>
    );
};

export default Apresentation;