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
        <section className="py-32 relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/*Left Column -text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="font-medium text-brand-pink tracking-wider uppercase">About Me</span>
                            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Always curious. Always building.</h2>
                            <p className="mt-6 text-lg leading-relaxed text-text-muted max-w-xl">
                               My journey in programming has taken me from learning the fundamentals of computer science to building interactive web applications. Along the way, I've developed an interest in both artificial intelligence and software development.
                                I'm still learning and experimenting, but every project gives me an opportunity to understand something new and become a better develope 
                            </p>
                        </div>
                    </div>
                    {/*Right column the highlights  */}
                    <div className="grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-200">
                        {highlights.map(({ icon: Icon, title, description }) => (
                            <article key={title} className="glass-strong rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                                <Icon className="w-7 h-7 text-brand-pink" aria-hidden="true" />
                                <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );


}