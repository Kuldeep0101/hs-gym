import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-black border-t border-brand-accent/10 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand & Mission */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="He and She Gym" className="h-20 w-auto" />
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                        Your fitness journey starts here. He and She Gym offers a welcoming and inclusive environment for everyone in Aligarh.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/fitness_yard_gym/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-accent/10 text-brand-accent rounded-full hover:bg-brand-accent hover:text-brand-black transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-brand-accent/10 text-brand-accent rounded-full hover:bg-brand-accent hover:text-brand-black transition-all">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="p-2 bg-brand-accent/10 text-brand-accent rounded-full hover:bg-brand-accent hover:text-brand-black transition-all">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Project Navigation</h4>
                    <ul className="space-y-4">
                        <li><Link to="/about" className="text-muted-foreground hover:text-brand-accent transition-colors">Our Story</Link></li>
                        <li><Link to="/memberships" className="text-muted-foreground hover:text-brand-accent transition-colors">Memberships</Link></li>
                        <li><Link to="/classes" className="text-muted-foreground hover:text-brand-accent transition-colors">Class Schedule</Link></li>
                        <li><Link to="/trainers" className="text-muted-foreground hover:text-brand-accent transition-colors">Elite Trainers</Link></li>
                        <li><Link to="/contact" className="text-muted-foreground hover:text-brand-accent transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Gym Hours</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex justify-between border-b border-brand-accent/5 pb-2">
                            <span>Mon - Sat</span>
                            <span className="text-brand-accent font-bold">6:00 AM - 9:00 PM</span>
                        </li>
                        <li className="flex justify-between border-b border-brand-accent/5 pb-2">
                            <span>Sunday</span>
                            <span className="text-brand-accent font-bold">Closed</span>
                        </li>
                        <li className="pt-2 text-sm italic">Note: Hours may vary on public holidays.</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider">Visit Us</h4>
                    <ul className="space-y-4">
                        <li className="flex gap-3">
                            <MapPin className="text-brand-accent shrink-0" size={20} />
                            <span className="text-muted-foreground">
                                G/111, Ramghat Rd, Gulzar Nagar, Hem Chand Compound, Aligarh, UP 202001
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="text-brand-accent shrink-0" size={20} />
                            <a href="tel:++919837174406589819" className="text-muted-foreground hover:text-brand-accent">+91 90545 89819</a>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="text-brand-accent shrink-0" size={20} />
                            <a href="mailto:info@heandshegym.com" className="text-muted-foreground hover:text-brand-accent">info@heandshegym.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-brand-accent/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground text-center">
                <p>© {currentYear} He and She Gym. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link to="/privacy" className="hover:text-brand-accent">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-brand-accent">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
