import { motion } from "framer-motion";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/victorjunqueira",
        alt: "LinkedIn icon",
        icon: (
            <FaLinkedin className="h-6 w-6" />
        ),
        label: "LinkedIn",
    },
    {
        href: "https://github.com/VictorJunqueira1",
        alt: "GitHub icon",
        icon: (
            <FaGithub className="h-6 w-6" />
        ),
        label: "GitHub",
    },
    {
        href: "/CV_Victor_Junqueira.pdf",
        alt: "CV icon",
        icon: (
            <Newspaper />
        ),
        label: "CV",
    },
];

const SocialLinks = () => {
    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            {socialLinks.map((link, index) => (
                <motion.div
                    key={link.href}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, delay: 3.5 + index * 0.1 }}
                    variants={linkVariants}
                >
                    <Link
                        href={link.href}
                        className="flex items-center justify-center border dark:border-none border-slate-300 dark:bg-stone-900 bg-slate-100 rounded-lg py-2 px-4 dark:hover:bg-stone-800 hover:bg-slate-200 transition duration-300 dark:text-green-400 text-green-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                        <span className="ml-2 flex-1 dark:text-white text-black text-lg">{link.label}</span>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default SocialLinks;