import { motion } from "framer-motion";
import Link from "next/link";
import "@/types/socialLinks"

const socialLinks: SocialLink[] = [
    {
        href: "https://www.linkedin.com/in/victor-junqueira-789004281/",
        alt: "LinkedIn icon",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19.5 3H4.5C3.67 3 3 3.67 3 4.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM8.75 18.5h-3v-9h3v9zM7.25 8.75a1.74 1.74 0 1 1 0-3.49 1.74 1.74 0 0 1 0 3.49zM18.5 18.5h-3v-4.5c0-2.5-3-2.31-3 0v4.5h-3v-9h3v1.25c1.39-2.58 6-2.77 6 2.46v5.29z" />
            </svg>
        ),
        label: "LinkedIn",
    },
    {
        href: "https://github.com/VictorJunqueira1",
        alt: "GitHub icon",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.3 9.42 7.88 10.95.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.48-3.88-1.48-.53-1.36-1.28-1.72-1.28-1.72-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.04 1.78 2.73 1.26 3.4.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.12-3.05 0 0 .96-.3 3.13 1.18a10.7 10.7 0 0 1 2.86-.39c.97 0 1.94.13 2.86.39 2.16-1.49 3.12-1.18 3.12-1.18.63 1.59.24 2.76.12 3.05.73.81 1.18 1.83 1.18 3.1 0 4.41-2.7 5.39-5.27 5.67.41.35.76 1.04.76 2.1v3.1c0 .31.21.68.79.56a10.53 10.53 0 0 0 7.88-10.95C23.5 5.74 18.27.5 12 .5z" />
            </svg>
        ),
        label: "GitHub",
    },
    {
        href: "mailto:victorjunqueira.prog@gmail.com",
        alt: "Email icon",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 6h16l-8 5-8-5zm0 12V9l8 5 8-5v9H4z" />
            </svg>
        ),
        label: "Email",
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
                        className="flex items-center justify-center bg-stone-900 rounded-lg py-2 px-4 hover:bg-stone-800 transition duration-300 text-green-400"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                        <span className="ml-2 flex-1 text-white text-lg">{link.label}</span>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default SocialLinks;