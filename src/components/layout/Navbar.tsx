import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

import { cn } from '../../utils/cn';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Memberships', path: '/memberships' },
        { name: 'Classes', path: '/classes' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav
                className={cn(
                    'fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-[1400px] rounded-full',
                    scrolled ? 'glass-dark py-2 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/10' : 'bg-transparent py-4 px-4'
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo & Branding */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative h-10 md:h-12 w-auto overflow-hidden rounded-xl bg-brand-black/40 p-1 border border-brand-accent/10">
                            <img src="/logo.png" alt="He and She Gym" className="h-full w-auto transition-transform group-hover:scale-105 object-contain" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] text-brand-accent font-black tracking-[0.3em] uppercase opacity-80 leading-tight">
                                Aligarh
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'font-bold uppercase tracking-widest text-xs transition-all hover:text-brand-accent relative group',
                                    location.pathname === link.path ? 'text-brand-accent' : 'text-brand-white/80'
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full",
                                    location.pathname === link.path ? "w-full" : ""
                                )} />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a
                            href="tel:++919837174406589819"
                            className="flex items-center gap-3 text-brand-white/90 hover:text-brand-accent transition-all"
                        >
                            <div className="p-2 bg-brand-white/10 rounded-full border border-brand-white/5">
                                <Phone size={16} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase font-black tracking-widest opacity-60">Call Us</span>
                                <span className="font-black text-sm tracking-tight">+91 90545 89819</span>
                            </div>
                        </a>
                        <Link
                            to="/booking"
                            className="bg-brand-accent text-brand-black px-8 py-3 rounded-full font-black text-sm tracking-widest hover:bg-brand-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,212,0,0.2)]"
                        >
                            BOOK FREE TRIAL
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-3 bg-brand-white/5 rounded-2xl border border-brand-white/10 text-brand-white hover:bg-brand-accent hover:text-brand-black transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Outside nav to avoid clipping and transform issues */}
            <div
                className={cn(
                    'lg:hidden fixed left-0 right-0 top-[100px] z-40 transition-all duration-500 transform mx-4 overflow-hidden',
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
                )}
            >
                <div className="bg-brand-black/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 flex flex-col gap-6 text-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                'font-bold transition-colors border-b border-brand-accent/10 pb-4 flex items-center justify-between group',
                                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-white'
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            <span>{link.name}</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </Link>
                    ))}
                    <Link
                        to="/booking"
                        className="bg-brand-accent text-brand-black px-6 py-4 rounded-xl font-bold text-center mt-4 active:scale-95 transition-transform"
                        onClick={() => setIsOpen(false)}
                    >
                        BOOK FREE TRIAL
                    </Link>
                    <a
                        href="tel:++919837174406589819"
                        className="flex items-center justify-center gap-2 text-brand-white font-bold py-4 hover:text-brand-accent transition-colors"
                    >
                        <div className="p-2 bg-brand-white/10 rounded-full">
                            <Phone size={20} />
                        </div>
                        <span>CALL NOW</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;

