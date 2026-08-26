import { Button } from '@/components/Button';
import {
    ArrowRight,
    ChevronDown,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "Java",
    "PHP",
    "SQL",
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Vercel",
    "MySQL",
    "GitHub"
];
export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: '#D71968',
                            left: `${(i * 37) % 100}%`,
                            top: `${(i * 61) % 100}%`,
                            animation: `slow-drift ${15 + (i % 5) * 4}s ease-in-out infinite`,
                            animationDelay: `${(i % 5) * 0.8}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-magenta opacity-90 mb-6">
                                <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
                                ENSIA student - Frontend developer
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                                <span className="font-black uppercase glow-text">Hi, I am Sandra</span>{' '}<br />
                                <span className="text-brand-pink font-serif italic font-normal">
                                    I build, learn, and create with technology.
                                </span>
                            </h1>
                            <p className="text-lg text-text-muted max-w-lg pt-6 animate-fade-in animation-delay-200">
                                I&apos;m an Artificial Intelligence student passionate about software development and AI. I enjoy turning ideas into practical projects, exploring new technologies, and continuously learning to become a better developer.
                            </p>
                        </div>
                        <div className="animate-fade-in animation-delay-300">
                            <Button size="lg" className="px-10 sm:px-12">
                                Contact Me
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {[
                                { icon: FaGithub, href: '#', label: 'GitHub' },
                                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-300">
                        <div className="w-full max-w-[18rem] sm:max-w-sm lg:max-w-md">
                            <img
                                src="/heropic.png"
                                alt="Sandra"
                                className="hero-character w-full aspect-4/5 object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>

                {/*Skills section */}
                <div className='mt-20 animate-fade-in animation-delay-600'>
                    <p className='text-sm text-text-muted mb-6 text-center'>Technologies I work with</p>

                    <div className='relative overflow-hidden  '>
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill, idx) => (

                                <div key={idx} className=' px-4 py-4 shrink-0 '><span className='text-xl font-semibold text-text-muted/50 hover:text-text-muted transition-colors '>{skill}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800" >
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>






        </section>
    );
};