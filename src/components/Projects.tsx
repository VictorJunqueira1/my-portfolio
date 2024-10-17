import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye, FaGithub } from 'react-icons/fa';
import { projectsData } from '@/data/projectsData';

export const Projects = () => {
    return (
        <section className="p-8 text-white" id='projects'>
            <div className='mx-auto max-w-7xl'>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 border-b-4 border-green-500 pb-2 transition-colors duration-300 animate__animated animate__fadeIn">
                    Meus Projetos
                </h2>
                <p className="text-gray-400 mb-8 text-base md:text-lg transition-opacity duration-300 animate__animated animate__fadeIn animate__delay-1s">
                    Confira alguns dos projetos que desenvolvi, organizados por linguagem de programação.
                </p>
                {projectsData.map((category, index) => (
                    <div key={index} className="mt-10">
                        <h3 className="text-4xl font-semibold mb-6 text-green-400 animate__animated animate__fadeIn animate__delay-2s">
                            {category.category}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.projects.map((project, projectIndex) => (
                                <div
                                    key={projectIndex}
                                    className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 group relative overflow-hidden flex flex-col justify-between"
                                    style={{ height: '350px' }}
                                >
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 transition-colors duration-300 flex items-center relative">
                                            <span className="text-3xl mr-2">{project.emoji}</span>
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 mb-4 relative">{project.description}</p>
                                        <div className="flex items-center mb-4 relative">
                                            {project.technologies.map((tech, techIndex) => (
                                                <div key={techIndex} className="relative w-10 h-10 mr-2">
                                                    <Image
                                                        src={tech.svg}
                                                        alt={tech.name}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        className="transition-transform duration-300 transform hover:scale-110"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4 relative">
                                        <Link
                                            href={project.deployLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center bg-green-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-green-400"
                                        >
                                            <FaEye className="mr-2" />
                                            Ver Demo
                                        </Link>
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-green-400 underline transition-colors duration-300 hover:text-green-300"
                                        >
                                            <FaGithub className="mr-2" />
                                            Ver no GitHub
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;