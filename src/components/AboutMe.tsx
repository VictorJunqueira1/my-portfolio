"use client";

import Image from 'next/image';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {skills} from '@/data/skillsData';

const AboutMe = () => {
    const ref = useRef(null);
    const skillsRef = useRef(null);
    const inView = useInView(ref, {once: true});
    const skillsInView = useInView(skillsRef, {once: true});

    return (
        <TooltipProvider>
            <div
                ref={ref}
                className="flex flex-col md:flex-row items-center rounded-lg text-xl mt-56 mb-24 md:gap-40"
                id='skills'
            >
                <motion.div
                    ref={ref}
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 1}}
                    className="md:w-1/2 dark:text-gray-400 text-gray-800"
                >
                    <h2 className="text-2xl font-bold text-primary mb-4 dark:text-white text-black">⚡ Sobre Mim</h2>
                    <p className="text-muted-foreground mb-4">
                        Olá! Sou <span className="text-accent">Victor Gustavo Junqueira</span>, um desenvolvedor
                        <Tooltip>
                            <TooltipTrigger className="dark:text-green-400 text-green-600 ml-1">Front-End</TooltipTrigger>
                            <TooltipContent
                                className="dark:bg-gray-800 dark:text-white bg-slate-100 text-black text-base p-2 rounded shadow-lg dark:shadow-md border border-green-500 dark:border-green-400">
                                <p>Especializado em UI/UX, mas com maior foco em Programação</p>
                            </TooltipContent>
                        </Tooltip>, apaixonado por tecnologia e em constante evolução.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Minha jornada começou em 2022, com 15 anos, na escola estadual ETEC Pedro Ferreira Alves, onde
                        cursei
                        <span className="text-accent"> Desenvolvimento de Sistemas</span>.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Também adquiri conhecimentos de lógica de programação e boas práticas de desenvolvimento web com
                        o curso da
                        <Tooltip>
                            <TooltipTrigger className="dark:text-green-400 text-green-600 ml-1">B7WEB</TooltipTrigger>
                            <TooltipContent
                                className="dark:bg-gray-800 dark:text-white bg-slate-100 text-black text-base p-2 rounded shadow-lg dark:shadow-md border border-green-400">
                                <p>Curso Full-Stack Web abrangendo do básico ao avançado</p>
                            </TooltipContent>
                        </Tooltip>
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Atualmente, sou especializado em
                        <Tooltip>
                            <TooltipTrigger className="dark:text-green-400 text-green-600 ml-1">Front-End</TooltipTrigger>
                            <TooltipContent
                                className="dark:bg-gray-800 dark:text-white bg-slate-100 text-black text-base p-2 rounded shadow-lg dark:shadow-md border border-green-400">
                                <p>Com foco no framework Next.js. </p>
                            </TooltipContent>
                        </Tooltip>, e expandindo minhas habilidades para o
                        <Tooltip>
                            <TooltipTrigger className="dark:text-green-400 text-green-600 ml-1">Back-end.</TooltipTrigger>
                            <TooltipContent
                                className="dark:bg-gray-800 dark:text-white bg-slate-100 text-black text-base p-2 rounded shadow-lg dark:shadow-md border border-green-400">
                                <p>Construindo APIs web com Node e C# (ASP.NET Core).</p>
                            </TooltipContent>
                        </Tooltip>
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Hoje, estou focando nas melhores
                        práticas de arquitetura de software e nos princípios de programação.
                    </p>
                </motion.div>
                <motion.div
                    ref={skillsRef}
                    initial={{opacity: 0, y: 20}}
                    animate={skillsInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
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
                                initial={{opacity: 0, y: 20}}
                                animate={skillsInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.8, delay: index * 0.3}}
                                className="dark:bg-stone-900 bg-slate-200 dark:text-white px-4 py-2 rounded-full flex items-center"
                            >
                                <Image src={skill.svg} alt={skill.name} width={24} height={24} className="mr-2"/>
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