import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Users, Trophy, Target, Dumbbell, UserCheck, Activity, Utensils, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, classes, testimonials } from '../data/mockData';
import SEO from '../components/shared/SEO';

const Home = () => {
    const iconMap: { [key: string]: any } = {
        Dumbbell: Dumbbell,
        UserCheck: UserCheck,
        Activity: Activity,
        Utensils: Utensils,
    };

    return (
        <div className="flex flex-col w-full">
            <SEO
                title="He and She Gym Aligarh — Fitness for Everyone"
                description="He and She Gym in Aligarh. Premium fitness center for men and women. Personal training, group classes, and elite equipment in Gulzar Nagar, Aligarh."
            />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-24 md:pt-28 pb-12 md:pb-16">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent opacity-80" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-accent/20 text-brand-accent font-bold text-xs mb-6 tracking-widest uppercase">
                                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                                Aligarh's #1 Fitness Destination
                            </span>
                            <h1 className="text-5xl md:text-9xl font-black leading-[0.9] mb-6 uppercase">
                                He & <span className="text-gradient">She</span> <br />
                                <span className="italic">Fitness.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 font-medium leading-relaxed">
                                Unlock your elite potential in Aligarh's most inclusive training environment. Designed for results, built for everyone.
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-6">
                                <Link
                                    to="/booking"
                                    className="bg-brand-accent text-brand-black px-10 py-5 rounded-full font-black text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(0,242,255,0.3)] flex items-center gap-3"
                                >
                                    START FREE TRIAL <ArrowRight size={20} />
                                </Link>
                                <a
                                    href="https://wa.me/+919837174406"
                                    className="glass px-10 py-5 rounded-full font-black text-lg text-white hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10"
                                >
                                    CHAT ON WHATSAPP
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    </div>
                </div>
            </section>

            {/* Benefits Strip */}
            <div className="bg-brand-gray/50 border-y border-white/5 py-6">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex flex-wrap justify-center md:justify-between gap-6"
                    >
                        {["Certified Trainers", "Advanced Equipment", "Personalized nutrition", "Inclusive Environment"].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="text-brand-accent" size={18} />
                                <span className="font-bold text-xs tracking-[0.2em] uppercase opacity-60 italic">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Stats */}
            <section className="py-16 bg-brand-black relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
                        {[
                            { icon: <Users size={32} />, value: "500+", label: "Active Members" },
                            { icon: <Target size={32} />, value: "10+", label: "Expert Trainers" },
                            { icon: <Trophy size={32} />, value: "5+", label: "Years Excellence" },
                            { icon: <Play size={32} />, value: "15+", label: "Weekly Classes" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="p-4 bg-brand-accent/5 text-brand-accent rounded-2xl mb-2 transition-colors group-hover:bg-brand-accent group-hover:text-brand-black">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-brand-white">{stat.value}</h3>
                                <p className="text-brand-accent/60 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Our Services</span>
                            <h2 className="text-4xl md:text-7xl font-black mt-4 uppercase italic leading-[0.9]">Transform your <br /><span className="text-white/20">Reality.</span></h2>
                        </div>
                        <Link to="/about" className="glass px-8 py-4 rounded-full text-brand-accent font-bold flex items-center gap-2 hover:bg-brand-accent hover:text-brand-black transition-all mb-2">
                            VIEW ALL FACILITIES <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative overflow-hidden rounded-[40px] bg-brand-black border border-white/5 hover:border-brand-accent/30 transition-all aspect-[4/5]"
                            >
                                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent p-10 flex flex-col justify-end">
                                    <div className="p-4 bg-brand-accent text-brand-black rounded-2xl w-fit mb-6 shadow-[0_5px_15px_rgba(0,242,255,0.3)]">
                                        {iconMap[service.icon] ? <Dumbbell size={24} /> : <Activity size={24} />}
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">{service.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="bg-brand-accent py-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                    <h2 className="text-brand-black text-2xl md:text-4xl font-black uppercase italic text-center lg:text-left leading-none tracking-tighter">
                        Ready to smash your goals? <br />
                        <span className="text-brand-black/50">Start your journey today.</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+919837174406" className="bg-brand-black text-brand-white px-10 py-5 rounded-full font-black text-sm flex items-center gap-3 hover:bg-white hover:text-black transition-all shadow-xl">
                            <Phone size={20} /> CALL NOW
                        </a>
                        <a href="https://wa.me/+919837174406" className="bg-white/20 backdrop-blur-md text-brand-black px-10 py-5 rounded-full font-black text-sm flex items-center gap-3 hover:bg-white transition-all shadow-xl border border-black/5">
                            <MessageCircle size={20} /> WHATSAPP US
                        </a>
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section className="py-16 bg-brand-black">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Class Schedule</span>
                        <h2 className="text-4xl md:text-7xl font-black mt-4 uppercase italic leading-[0.9]">Today's <br /><span className="text-white/20">Sessions.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {classes.filter((_, idx) => idx < 4).map((cls, i) => (
                            <motion.div
                                key={cls.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col sm:flex-row items-center justify-between p-8 bg-brand-gray/30 rounded-[32px] border border-white/5 hover:bg-brand-gray/50 transition-all group gap-6"
                            >
                                <div className="flex flex-col gap-2 text-center sm:text-left">
                                    <span className="text-brand-accent font-black text-xs uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-full w-fit mx-auto sm:mx-0">{cls.time}</span>
                                    <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">{cls.name}</h4>
                                    <p className="text-white/40 font-medium text-sm">Coached by <span className="text-white/70">{cls.trainer}</span></p>
                                </div>
                                <div className="flex flex-col items-center sm:items-end gap-5">
                                    <span className="px-4 py-2 rounded-full glass text-[10px] font-black uppercase tracking-widest text-brand-accent">
                                        {cls.availableSpots} SPOTS LEFT
                                    </span>
                                    <Link to="/booking" className="bg-brand-accent text-brand-black px-8 py-3 rounded-full font-black text-xs shadow-[0_5px_15px_rgba(0,242,255,0.2)] hover:bg-white transition-all transform active:scale-95">
                                        RESERVE SPOT
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-[#080808] border-t border-white/5">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Testimonials</span>
                        <h2 className="text-4xl md:text-7xl font-black mt-4 uppercase italic leading-[0.9]">Member <br /><span className="text-white/20">Stories.</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[40px] glass border-white/5 flex flex-col gap-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center font-black text-brand-accent">{t.name[0]}</div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-tighter">{t.name}</h4>
                                        <p className="text-brand-accent/60 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-white/70 italic leading-relaxed text-sm">"{t.content}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
