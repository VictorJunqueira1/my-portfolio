'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaEye, FaGithub } from 'react-icons/fa'
import { projectsData } from "@/data/projectsData"

export default function ModernProjects() {
    const [activeCategory, setActiveCategory] = useState(projectsData[0].category)

    return (
        <section className="py-16 dark:bg-black" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-center">
                    Meus Projetos
                </h2>
                <p className="text-xl dark:text-gray-400 text-gray-800 mb-12 text-center max-w-3xl mx-auto">
                    Explore minha coleção de projetos, organizados por linguagem de programação. Cada projeto demonstra
                    minhas habilidades e paixão pelo desenvolvimento.
                </p>

                <div className="flex justify-center mb-12 space-x-4 flex-wrap">
                    {projectsData.map((category) => (
                        <button
                            key={category.category}
                            onClick={() => setActiveCategory(category.category)}
                            className={`px-4 py-2 rounded-full transition-colors duration-300 mb-2 ${activeCategory === category.category
                                    ? 'dark:bg-green-500 bg-green-600 text-white'
                                    : 'dark:bg-gray-800 dark:border-none border border-slate-300 dark:text-gray-400 text-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-fr">
                    {projectsData
                        .find((category) => category.category === activeCategory)
                        ?.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="dark:bg-gray-900 bg-slate-100 border border-slate-300 dark:border-none rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                            >
                                <div className="p-6 flex-grow">
                                    <h3 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                                        <span className="text-3xl mr-2">{project.emoji}</span>
                                        {project.title}
                                    </h3>
                                    <p className="dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <div
                                                key={techIndex}
                                                className="dark:bg-slate-800 bg-slate-200 rounded-full px-4 py-2 flex items-center"
                                            >
                                                <Image
                                                    src={tech.svg}
                                                    alt={tech.name}
                                                    width={1}
                                                    height={1}
                                                    className="mr-2 w-6 h-6"
                                                />
                                                <span className="text-base dark:text-gray-300">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="dark:bg-gray-800 bg-slate-200 p-4 flex justify-between items-center mt-auto">
                                    <Link
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center dark:bg-green-500 bg-green-400 hover:bg-green-500 dark:hover:bg-green-600 dark:text-white py-2 px-4 rounded transition-colors duration-300"
                                    >
                                        <FaEye className="mr-2" />
                                        Ver Demo
                                    </Link>
                                    <Link
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center dark:text-gray-400 text-slate-700 hover:text-black dark:hover:text-white transition-colors duration-300"
                                    >
                                        <FaGithub className="mr-2" />
                                        Ver no GitHub
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    )
}