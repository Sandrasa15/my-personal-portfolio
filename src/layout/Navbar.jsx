import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 py-5 sm:px-6 lg:py-7">
            <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-brand-blush px-5 py-2 text-background shadow-lg shadow-brand-pink/10 md:px-6">
                <a
                    href="#"
                    className="text-lg font-black uppercase tracking-[0.18em] text-brand-magenta transition-colors hover:text-brand-pink sm:text-xl"
                    aria-label="Sandra home"
                >
                    <span className="text-brand-pink">San</span>
                    <span className="text-background">dra</span>
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            className="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-brand-pink hover:text-foreground lg:px-4"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    className="rounded-full p-2 text-background transition-colors hover:bg-brand-pink hover:text-foreground md:hidden"
                    onClick={() => setIsMobileMenuOpen((previous) => !previous)}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="mx-4 mt-2 rounded-3xl bg-surface-raised/95 p-5 shadow-xl shadow-background/30 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                
                                className="rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-brand-pink hover:text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};