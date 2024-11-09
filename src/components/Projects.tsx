'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {FaEye, FaGithub} from 'react-icons/fa'
import { projectsData } from "@/data/projectsData"

export default function ModernProjects() {
    const [activeCategory, setActiveCategory] = useState(projectsData[0].category)

    return (
        <section className="py-16 bg-black" id="projects">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
                    Meus Projetos
                </h2>
                <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                    Explore minha coleção de projetos, organizados por linguagem de programação. Cada projeto demonstra
                    minhas habilidades e paixão pelo desenvolvimento.
                </p>

                <div className="flex justify-center mb-12 space-x-4 flex-wrap">
                    {projectsData.map((category) => (
                        <button
                            key={category.category}
                            onClick={() => setActiveCategory(category.category)}
                            className={`px-4 py-2 rounded-full transition-colors duration-300 mb-2 ${
                                activeCategory === category.category
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
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
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                            >
                                <div className="p-6 flex-grow">
                                    <h3 className="text-2xl font-semibold mb-3 text-white flex items-center">
                                        <span className="text-3xl mr-2">{project.emoji}</span>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <div
                                                key={techIndex}
                                                className="bg-slate-800 rounded-full px-4 py-2 flex items-center"
                                            >
                                                <Image
                                                    src={tech.svg}
                                                    alt={tech.name}
                                                    width={1}
                                                    height={1}
                                                    className="mr-2 w-6 h-6"
                                                />
                                                <span className="text-base text-gray-300">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-4 flex justify-between items-center mt-auto">
                                    <Link
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                                    >
                                        <FaEye className="mr-2"/>
                                        Ver Demo
                                    </Link>
                                    <Link
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <FaGithub className="mr-2"/>
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