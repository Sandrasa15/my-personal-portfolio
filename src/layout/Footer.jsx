import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-brand-pink/20 py-8">
            <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-6 text-center">
                <img
                    src="/sakura.webp"
                    alt=""
                    aria-hidden="true"
                    width="192"
                    height="192"
                    loading="lazy"
                    decoding="async"
                    className="footer-sakura h-8 w-8 object-contain opacity-90"
                />
                <a
                    href="https://github.com/Sandrasa15"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Sandra's GitHub profile"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-brand-pink"
                >
                    <FaGithub className="h-5 w-5 text-white" />
                    GitHub
                </a>
                <p className="text-xs text-text-muted">
                    © {currentYear} Sandra. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
