import { ArrowUpRight, Brain, Route, SlidersHorizontal } from "lucide-react";

import {
    FaReact,
    FaPython,
    FaGithub,
    FaCss3Alt,
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTailwindcss,
} from 'react-icons/si';

const skillIcons = {
    React: { icon: FaReact, color: '#61DAFB' },
    JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
    CSS: { icon: FaCss3Alt, color: '#1572B6' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
    Python: { icon: FaPython, color: '#3776AB' },
    'Artificial Intelligence': { icon: Brain, color: '#FF2D83' },
    Algorithms: { icon: SlidersHorizontal, color: '#FF77AE' },
    MAPF: { icon: Route, color: '#F3B6D2' },
};

const projects = [
    {
        title: "Task Manager",
        description:
            "A responsive task management application with task creation, editing, completion tracking, filtering, and local data persistence.",
        image: "/projects/taskmanagerpic.png",
        tags: ["React", "JavaScript", "CSS"],
        link: "https://task-manager-react-me-b1b0.vercel.app/",
        github: "https://github.com/Sandrasa15/Task-Manager-react",
    },
    {
        title: "E-Commerce Website",
        description:
            "A simple e-commerce website built to practice React, focusing on reusable components, dynamic content, and interactive user interfaces.",
        image: "/projects/ecommerceweb.png",
        tags: ["React", "JavaScript", "CSS"],
        link: "https://ecommerce-react-practice.vercel.app/",
        github: "https://github.com/Sandrasa15/ecommerce-react-practice",
    },
    {
        title: "Personal Portfolio",
        description:
            "My personal portfolio showcasing my projects, skills, and experience while exploring modern web development technologies.",
        image: "/projects/portfoliopic.png",
        tags: ["React", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/Sandrasa15/my-personal-portfolio.git",
    },
    {
        title: "Warehouse Robot Controller",
        description:
            "An AI-based multi-agent pathfinding system for coordinating warehouse robots while avoiding collisions and conflicts.",
        image: "/projects/aip.png",
        tags: ["Python", "Artificial Intelligence", "Algorithms", "MAPF"],
        link: "#",
        github: "https://github.com/Salsabil-charif/Warehouse-Robot-Controller",
    },
];


export const Projects = () => {

    return <section className="relative overflow-hidden py-20 md:py-24" id="projects">

        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container relative z-10 mx-auto px-6">
            {/*Section header */}
            <div className="mx-auto mb-16 max-w-3xl text-center">
                <span className="text-3xl font-bold uppercase text-brand-pink animate-fade-in">Featured Projects</span>
                <p className="my-4 text-text-muted animate-fade-in animation-delay-200">A selection of projects showcasing what I&apos;ve learned, built, and explored through code.</p>
            </div>

            {/*Projects grid */}
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <article key={project.title} className="project-card group mx-auto w-full max-w-80 overflow-hidden rounded-xl animate-fade-in md:max-w-none md:rounded-2xl" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                        {/*Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />

                            {/*Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="rounded-full bg-brand-pink p-3 text-foreground transition-all hover:scale-110 hover:bg-brand-magenta">
                                    <ArrowUpRight className="h-5 w-5" />


                                </a>
                                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`} className="rounded-full bg-surface-raised p-3 text-foreground transition-all hover:scale-110 hover:bg-brand-pink">
                                    <FaGithub className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                        {/*Content */}
                        <div className="space-y-2 p-3 sm:space-y-3 sm:p-4 md:space-y-4 md:p-6">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-brand-pink">{project.title}</h3>
                                <ArrowUpRight className="h-5 w-5 shrink-0 text-text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-pink" />
                            </div>
                            <p className="text-sm leading-relaxed text-text-muted">{project.description}</p>
                            <div className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                                {project.tags.map((tag) => {
                                    const skill = skillIcons[tag];
                                    const Icon = skill?.icon;
                                    return (
                                        <span key={tag} className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-semibold text-text-secondary">
                                            {Icon ? <Icon className="h-4 w-4" style={{ color: skill.color }} aria-hidden="true" /> : null}
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>




                    </article>



                ))}



            </div>

        </div>


    </section>;


}