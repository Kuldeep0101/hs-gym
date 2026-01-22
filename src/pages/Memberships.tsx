import { motion } from 'framer-motion';
import { Check, Info, ShieldCheck, Zap, Crown, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { membershipPlans } from '../data/mockData';
import SEO from '../components/shared/SEO';
import { cn } from '../utils/cn';

const Memberships = () => {
    return (
        <div className="pt-32 lg:pt-40">
            <SEO title="Membership Plans & Pricing | He and She Gym Aligarh" description="Choose the perfect gym membership plan for your goals. Day Pass, Monthly, Quarterly, and Yearly plans available with elite perks in Aligarh." />
            {/* Page Header */}
            <section className="bg-brand-black py-20 border-b border-brand-accent/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm">Choose Your Plan</span>
                        <h1 className="text-5xl md:text-7xl font-black mt-4 uppercase italic leading-none">
                            Commit to <span className="text-transparent border-t-brand-accent bg-clip-text bg-gradient-to-r from-brand-accent to-white">Greatness.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
                            Transparent pricing. No hidden fees. Just world-class training and results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="py-20 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {membershipPlans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "relative p-10 rounded-[48px] flex flex-col transition-all duration-500 group shadow-2xl overflow-hidden",
                                    plan.highlight
                                        ? "bg-brand-accent border-brand-accent shadow-[0_20px_60px_rgba(255,212,0,0.2)]"
                                        : "glass border-white/5 hover:border-brand-accent/30"
                                )}
                            >
                                {/* Decorative Gradient for highlight */}
                                {plan.highlight && (
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                                )}

                                {plan.badge && (
                                    <div className="absolute top-6 right-10 bg-brand-black text-brand-accent font-black uppercase text-[10px] px-4 py-1.5 rounded-full shadow-xl tracking-widest border border-brand-accent/30">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className={cn(
                                        "text-3xl font-black uppercase tracking-tighter mb-1",
                                        plan.highlight ? "text-brand-black" : "text-brand-white"
                                    )}>
                                        {plan.name}
                                    </h3>
                                    <p className={cn(
                                        "text-xs font-black uppercase tracking-[0.2em]",
                                        plan.highlight ? "text-brand-black/40" : "text-brand-accent/60"
                                    )}>
                                        {plan.duration}
                                    </p>
                                </div>

                                <div className="mb-12 flex items-baseline gap-1">
                                    <span className={cn(
                                        "text-xs font-black",
                                        plan.highlight ? "text-brand-black" : "text-brand-accent"
                                    )}>₹</span>
                                    <span className={cn(
                                        "text-6xl font-black tracking-tighter",
                                        plan.highlight ? "text-brand-black" : "text-brand-white"
                                    )}>
                                        {plan.price}
                                    </span>
                                </div>

                                <div className="space-y-4 mb-12 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className={cn(
                                                "mt-1 p-0.5 rounded-full",
                                                plan.highlight ? "bg-brand-black/10 text-brand-black" : "bg-brand-accent/10 text-brand-accent"
                                            )}>
                                                <Check size={14} strokeWidth={4} />
                                            </div>
                                            <span className={cn(
                                                "text-sm font-medium leading-tight",
                                                plan.highlight ? "text-brand-black/70" : "text-white/60"
                                            )}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={plan.name === "Trial Pass" ? "/booking" : "/contact"}
                                    className={cn(
                                        "w-full py-5 rounded-3xl font-black text-center transition-all transform active:scale-95 shadow-lg",
                                        plan.highlight
                                            ? "bg-brand-black text-brand-white hover:bg-white hover:text-brand-black"
                                            : "bg-brand-accent text-brand-black hover:bg-white"
                                    )}
                                >
                                    {plan.cta}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Matrix / Comparison */}
            <section className="py-20 bg-brand-black border-y border-brand-accent/10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic">Membership Perks</h2>
                            <p className="text-muted-foreground mt-4 italic font-bold">What's included in every plan</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {[
                                { icon: <ShieldCheck size={32} />, title: "Secure Access", desc: "Digital check-ins and high-end locker security." },
                                { icon: <Zap size={32} />, title: "Unlimited HIIT", desc: "Attend any group session throughout the week." },
                                { icon: <Crown size={32} />, title: "Elite Gear", desc: "Access to the highest-grade equipment in Aligarh." },
                                { icon: <UserPlus size={32} />, title: "Guest Passes", desc: "Bring a friend for free once every month." },
                            ].map((perk, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="p-4 bg-brand-accent/10 text-brand-accent rounded-2xl shrink-0">
                                        {perk.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black uppercase mb-2">{perk.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{perk.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Blurb */}
            <section className="py-20 bg-[#080808]">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <div className="p-10 rounded-[32px] bg-brand-white/5 border border-dashed border-brand-accent/30">
                        <div className="flex items-center gap-3 mb-6">
                            <Info className="text-brand-accent" size={24} />
                            <h4 className="font-heading font-black uppercase tracking-widest text-lg">Billing & Refund Policy</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed space-y-4">
                            All memberships are non-refundable and non-transferable.
                            <br /><br />
                            Monthly auto-renewal is available for your convenience. Quarterly and Yearly plans can be paused for up to 15 and 30 days respectively for medical reasons (certificate required). Prices are inclusive of all taxes.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Memberships;
