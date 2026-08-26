import {
    Lightbulb,
    Code2,
    Brain,
    BookOpen
} from "lucide-react";

const highlights = [
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "Building efficient solutions through algorithms, data structures, and logical thinking."
    },
    {
        icon: Code2,
        title: "Web Development",
        description: "Building responsive and interactive web experiences with modern frontend technologies."
    },
    {
        icon: Brain,
        title: "AI & Technology",
        description: "Exploring artificial intelligence and applying computational concepts to real-world problems."
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Constantly learning new technologies and improving my programming and development skills."
    }
];



export const About = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24" id="about">
            <div className="container relative z-10 mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,1.25fr)_minmax(0,0.85fr)] lg:gap-8">
                    {/* About copy */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <img src="/sakura.png" alt="" aria-hidden="true" className="about-sakura h-14 w-14 shrink-0 object-contain object-right sm:h-16 sm:w-16" />
                            <span className="text-2xl font-bold uppercase tracking-[0.12em] text-brand-pink sm:text-3xl lg:text-4xl">About Me</span>
                            <img src="/sakura.png" alt="" aria-hidden="true" className="about-sakura about-sakura-right h-14 w-14 shrink-0 object-contain object-left sm:h-16 sm:w-16" />
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">Always curious. Always building.</h2>
                        <p className="max-w-xl text-lg leading-relaxed text-text-muted">
                            My journey in programming has taken me from learning the fundamentals of computer science to building interactive web applications. Along the way, I&apos;ve developed an interest in both artificial intelligence and software development.
                            I&apos;m still learning and experimenting, but every project gives me an opportunity to understand something new and become a better developer.
                        </p>
                    </div>

                    {/* Transparent decoration with a silhouette-following glow */}
                    <div className="flex justify-center animate-fade-in animation-delay-200">
                        <img src="/chinesedeco.png" alt="" aria-hidden="true" className="about-decoration w-full max-w-[25rem] object-contain" />
                    </div>

                    {/* Highlights */}
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 animate-fade-in animation-delay-300">
                        {highlights.map(({ icon: Icon, title, description }) => (
                            <article key={title} className="glass-strong rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1">
                                <Icon className="h-5 w-5 text-brand-pink" aria-hidden="true" />
                                <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-text-muted">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );


}