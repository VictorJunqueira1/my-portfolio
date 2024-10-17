"use client";

import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/data/skillsData';

const AboutMe = () => {
    const ref = useRef(null);
    const skillsRef = useRef(null);
    const inView = useInView(ref, { once: true });
    const skillsInView = useInView(skillsRef, { once: true });

    return (
        <TooltipProvider>
            <div
                ref={ref}
                className="flex flex-col md:flex-row items-center rounded-lg text-xl shadow-lg mt-56 mb-24 md:gap-40"
                id='skills'
            >
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 text-gray-400"
                >
                    <h2 className="text-2xl font-bold text-primary mb-4 text-white">⚡ Sobre Mim</h2>
                    <p className="text-muted-foreground mb-4">
                        Olá! Sou <span className="text-accent">Victor Gustavo Junqueira</span>, um desenvolvedor
                        <Tooltip>
                            <TooltipTrigger className="text-green-400 ml-1">Front-End</TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white text-base p-2 rounded shadow-md border border-green-400">
                                <p>Especializado em UI/UX, mas com maior foco em Programação</p>
                            </TooltipContent>
                        </Tooltip>, apaixonado por tecnologia e em constante evolução.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Minha jornada começou em 2022, com 15 anos, na ETEC Pedro Ferreira Alves, onde cursei
                        <span className="text-accent"> Desenvolvimento de Sistemas</span>. Também adquiri conhecimento com o curso da
                        <Tooltip>
                            <TooltipTrigger className="text-green-400 ml-1">B7WEB</TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white text-base p-2 rounded shadow-md border border-green-400">
                                <p>Curso renomado em desenvolvimento web</p>
                            </TooltipContent>
                        </Tooltip>, ampliando meus conhecimentos em desenvolvimento web.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Atualmente, atuo apenas no
                        <Tooltip>
                            <TooltipTrigger className="text-green-400 ml-1">Front-End</TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white text-base p-2 rounded shadow-md border border-green-400">
                                <p>Com foco em Next.js. Pretendendo me especializar em Back-End (C# .NET)</p>
                            </TooltipContent>
                        </Tooltip>, mas com capacidade para atuar no Back-End. Busco sempre me tornar um profissional completo, atualizado com as demandas do mercado.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Hoje, me encontro estudando
                        <Tooltip>
                            <TooltipTrigger className="text-green-400 ml-1">C# e Node</TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white text-base p-2 rounded shadow-md border border-green-400">
                                <p>Microsserviços, arquiteturas de código e boas práticas</p>
                            </TooltipContent>
                        </Tooltip>, linguagens pelas quais admiro e pretendo trabalhar futuramente.
                    </p>
                    <p className="text-muted-foreground">
                        Sinta-se à vontade para explorar meus repositórios e entrar em contato!
                    </p>
                </motion.div>
                <motion.div
                    ref={skillsRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 mt-6 md:mt-0"
                >
                    <Image
                        alt="Retrato de Victor Gustavo Junqueira (autor do portfólio)"
                        src="/profile.jpg"
                        width={300}
                        height={300}
                        className="rounded-full shadow-lg"
                    />
                    <h2 className="text-2xl font-semibold mb-2 mt-4">Skills 🤹‍♀️</h2>
                    <div className="flex flex-wrap gap-4 mb-4 mt-4 pr-0 lg:pr-12">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                                className="bg-stone-900 text-secondary-foreground px-4 py-2 rounded-full flex items-center"
                            >
                                <Image src={skill.svg} alt={skill.name} className="w-6 h-6 mr-2" />
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </TooltipProvider>
    );
};

export default AboutMe;