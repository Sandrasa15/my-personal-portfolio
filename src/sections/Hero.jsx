import { Button } from '@/components/Button';
import {
    ArrowRight,
} from 'lucide-react';
import {
    FaReact,
    FaPython,
    FaJava,
    FaGithub,
    FaLinkedin,
    FaHtml5,
    FaCss3Alt,
} from 'react-icons/fa';
import {
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiMysql,
    SiCplusplus,
    SiVercel,
} from 'react-icons/si';


const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
];
export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto max-w-6xl px-5 pt-24 pb-14 relative z-10 sm:px-6 lg:pt-28 lg:pb-16">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-6">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-magenta opacity-90 mb-6">
                                <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
                                ENSIA student - Frontend developer
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-[2.65rem] font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="font-black uppercase glow-text">Hi, I am Sandra</span>{' '}<br />
                                <span className="text-brand-pink font-serif italic font-normal">
                                    I build, learn, and create with technology.
                                </span>
                            </h1>
                            <p className="max-w-lg pt-5 text-base leading-relaxed text-text-muted animate-fade-in animation-delay-200 lg:text-lg">
                                I&apos;m an Artificial Intelligence student passionate about software development and AI. I enjoy turning ideas into practical projects, exploring new technologies, and continuously learning to become a better developer.
                            </p>
                        </div>
                        <div className="animate-fade-in animation-delay-300">
                            <Button
                                size="lg"
                                className="px-10 sm:px-12"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Me
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                                { icon: FaGithub, href: 'https://github.com/Sandrasa15', label: 'GitHub' },
                                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                                    aria-label={social.label}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5 text-surface" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-300">
                        <div className="w-full max-w-52 sm:max-w-64 lg:max-w-80">
                            <img
                                src="/heropic.webp"
                                alt="Sandra"
                                width="640"
                                height="853"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="hero-character w-full aspect-4/5 object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>

                {/*Skills section */}
                <div className='mt-14 animate-fade-in animation-delay-600 lg:mt-16'>
                    <div className='mb-5 flex items-center justify-center gap-3'>
                        <span className='h-px w-12 bg-brand-pink/60' aria-hidden='true' />
                        <h2 className='text-xl font-bold uppercase tracking-[0.16em] text-brand-pink drop-shadow-[0_0_12px_rgba(255,45,131,0.45)] sm:text-2xl'>Technologies I work with</h2>
                        <span className='h-px w-12 bg-brand-pink/60' aria-hidden='true' />
                    </div>

                    <div className='relative overflow-hidden  '>
                        <div className='tech-marquee-track flex animate-marquee'>
                            {[...skills, ...skills].map(({ name, icon: Icon, color }, idx) => (

                                <div key={`${name}-${idx}`} className='group flex shrink-0 items-center gap-3 px-5 py-4 sm:px-7'>
                                    <Icon className='h-6 w-6 transition-transform duration-300 group-hover:scale-110' style={{ color }} aria-hidden='true' />
                                    <span className='text-base font-semibold text-text-muted/70 transition-colors group-hover:text-foreground sm:text-lg'>{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>







        </section>
    );
};