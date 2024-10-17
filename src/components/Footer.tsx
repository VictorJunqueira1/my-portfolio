"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const footerLinks = [
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

const Footer: React.FC = () => {
    const linkVariants = {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col items-center justify-center mt-52 mb-12 space-y-10">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 text-center">
                Entre Em Contato
            </h1>
            <div className="text-lg text-gray-400 mb-6 text-center px-6 md:px-0 space-y-0">
                <p>Estou atualmente especializado em<span className='text-green-400'> Desevolvimento  Front-End</span></p>
                <p>Sinta-se à vontade para entrar em contato e conversar mais sobre seus projetos.</p>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                {footerLinks.map((link, index) => (
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

            <div className="flex justify-center items-center text-center flex-col pt-32 px-4">
                <p className="text-white">
                    Desenvolvido e projetado por <span className="text-green-400">Victor Junqueira</span>.
                </p>
                <p className="text-white">
                    Construído com <span className="text-green-400">Next.js</span> e <span className="text-green-400">ShadCN UI</span>. Hospedado no <span className="text-green-400">Vercel</span>.
                </p>
            </div>
        </div>
    );
}

export default Footer;