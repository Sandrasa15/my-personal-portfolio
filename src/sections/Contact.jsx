import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    AlertCircle,
    CheckCircle,
    Mail,
    MapPin,
    Send,
} from 'lucide-react';
import { Button } from '@/components/Button';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'drasaa12@gmail.com',
        href: 'mailto:drasaa12@gmail.com',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Algeria',
        href: '#',
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.VITE_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.VITE_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_PUBLIC_KEY;

            const missingConfig = [
                !serviceId && 'VITE_EMAILJS_SERVICE_ID',
                !templateId && 'VITE_EMAILJS_TEMPLATE_ID',
                !publicKey && 'VITE_EMAILJS_PUBLIC_KEY',
            ].filter(Boolean);

            if (missingConfig.length > 0) {
                throw new Error(`EmailJS is missing: ${missingConfig.join(', ')}. Add them to .env and restart Vite.`);
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    ...formData,
                    from_name: formData.name,
                    from_email: formData.email,
                    user_name: formData.name,
                    user_email: formData.email,
                    reply_to: formData.email,
                },
                publicKey
            );
            setSubmitStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus({ type: 'error', message: error?.text || error?.message || 'Failed to send message. Please try again later.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden py-16 md:py-20">
            <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-brand-pink animate-fade-in">Get In Touch</span>
                    <h2 className="mt-3 mb-5 text-3xl font-bold text-foreground animate-fade-in animation-delay-100 sm:text-4xl lg:text-5xl">
                        Let&apos;s build <span className="font-serif font-normal italic text-brand-pink">something great.</span>
                    </h2>
                    <p className="text-text-muted animate-fade-in animation-delay-200">
                        Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s discuss how we can work together.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl items-start gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-12">
                    <div className="rounded-3xl border border-brand-pink/30 bg-background p-4 animate-fade-in animation-delay-300 sm:p-6 lg:p-8">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
                                <input id="name" type="text" autoComplete="name" required placeholder="Your name..." className="contact-field w-full rounded-xl border border-border px-4 py-3 outline-none transition-all focus:border-brand-pink focus:ring-1 focus:ring-brand-pink" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
                                <input id="email" type="email" autoComplete="email" required placeholder="Your@email.com" className="contact-field w-full rounded-xl border border-border px-4 py-3 outline-none transition-all focus:border-brand-pink focus:ring-1 focus:ring-brand-pink" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
                                <textarea id="message" rows={5} required placeholder="Your message..." className="contact-field w-full resize-none rounded-xl border border-border px-4 py-3 outline-none transition-all focus:border-brand-pink focus:ring-1 focus:ring-brand-pink" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} />
                            </div>
                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? 'Sending...' : <>Send Message <Send className="h-5 w-5" /></>}
                            </Button>
                            {submitStatus.type && (
                                <div className={`flex items-center gap-3 rounded-xl p-4 ${submitStatus.type === 'success' ? 'border border-green-500/20 bg-green-500/10 text-green-400' : 'border border-red-500/20 bg-red-500/10 text-red-400'}`}>
                                    {submitStatus.type === 'success' ? <CheckCircle className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="flex items-center justify-center animate-fade-in animation-delay-400">
                        <img src="/sakuras.webp" alt="" aria-hidden="true" width="448" height="781" loading="lazy" decoding="async" className="contact-sakura w-full max-w-40 object-contain sm:max-w-48 lg:max-w-56" />
                    </div>

                    <div className="col-span-full mx-auto w-full max-w-4xl rounded-3xl border border-brand-pink/20 bg-surface/80 p-5 shadow-lg shadow-brand-magenta/10 backdrop-blur-md animate-fade-in animation-delay-500 sm:p-8">
                        <h3 className="mb-5 text-center text-xl font-semibold text-brand-pink">Contact Information</h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                <a key={label} href={href} className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-background">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-pink/10 text-brand-pink transition-colors group-hover:bg-brand-pink/20"><Icon className="h-5 w-5" /></span>
                                    <span><span className="block text-sm text-text-muted">{label}</span><span className="font-medium">{value}</span></span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};