'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Package,
    BarChart3,
    ScanBarcode,
    FileText,
    Users,
    Zap,
    ArrowRight,
    CheckCircle2,
    ExternalLink,
    ShieldCheck,
    Globe,
    Layers,
    Receipt,
    TrendingUp,
    Clock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const highlights = [
    {
        icon: <ScanBarcode className="w-5 h-5" />,
        label: 'Fast Scanning',
        color: 'text-primary',
        bg: 'bg-primary/5',
    },
    {
        icon: <FileText className="w-5 h-5" />,
        label: 'Easy Bills',
        color: 'text-primary',
        bg: 'bg-primary/5',
    },
    {
        icon: <Users className="w-5 h-5" />,
        label: 'Staff Accounts',
        color: 'text-primary',
        bg: 'bg-primary/5',
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        label: 'Profit Reports',
        color: 'text-primary',
        bg: 'bg-primary/5',
    },
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        label: 'Safe Storage',
        color: 'text-primary',
        bg: 'bg-primary/5',
    },
    {
        icon: <Globe className="w-5 h-5" />,
        label: 'Works Everywhere',
        color: 'text-primary',
        bg: 'bg-primary/5',
    },
];

const features = [
    'Track your items across all your shops easily',
    'Create simple GST bills in just a few clicks',
    'Scan barcodes to find products instantly',
    'See how much profit you make every day',
    'Keep track of your customers and payments',
    'Add as many products as you want without worry',
];

const stats = [
    { value: '1M+', label: 'Bills Made', icon: <Receipt className="w-5 h-5 text-primary" /> },
    { value: '99.9%', label: 'Always Online', icon: <TrendingUp className="w-5 h-5 text-primary" /> },
    { value: 'Fast', label: 'Processing Speed', icon: <Clock className="w-5 h-5 text-primary" /> },
    { value: 'Elite', label: 'Best Systems', icon: <Zap className="w-5 h-5 text-primary" /> },
];

const ProductsSection = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            id="products"
            className="w-full relative py-32 overflow-hidden bg-primary text-white"
        >
            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/[0.05] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <Badge
                        variant="outline"
                        className="mb-5 border-white/20 py-1.5 px-5 text-[10px] font-black tracking-[0.3em] uppercase text-white/60"
                    >
                        <Layers className="w-3 h-3 mr-2" />
                        Proprietary Platforms
                    </Badge>
                    <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tight mb-8">
                        We Build{' '}
                        <span className="text-white/40 font-light italic">
                            Tools for You.
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed font-medium">
                        We don't just provide services—we build tools that help you run your business better. Meet{' '}
                        <span className="text-white font-bold border-b-2 border-white/20 pb-0.5">ECBills.in</span>,
                        the easiest way to manage your shop's billing and items.
                    </p>
                </div>

                {/* Main Product Showcase */}
                <div
                    className={cn(
                        'relative max-w-6xl mx-auto rounded-[3rem] overflow-hidden border border-border transition-all duration-700 animate-fade-in-up bg-white',
                        hovered
                            ? 'shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] -translate-y-1'
                            : 'shadow-2xl'
                    )}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left panel: Narrative */}
                        <div className="p-10 md:p-16 flex flex-col justify-between gap-12 bg-[#fafafa]">
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-primary/10 flex items-center justify-center shadow-xl">
                                        <Package className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">
                                            Flagship Engine
                                        </p>
                                        <h3 className="text-4xl font-black tracking-tighter leading-none text-brand-dark">
                                            ECBills.in
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-medium italic">
                                    "Consolidate your retail strategy with a platform designed for infinite scale and absolute precision."
                                </p>

                                {/* Feature Set */}
                                <ul className="grid grid-cols-1 gap-4">
                                    {features.map((feat, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-[15px] text-muted-foreground font-semibold"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Execution CTAs */}
                            <div className="flex flex-wrap gap-5">
                                <a
                                    href="https://ecbills.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn"
                                >
                                    <Button
                                        size="xl"
                                        className="h-16 bg-primary hover:bg-primary/90 text-white rounded-xl px-10 gap-3 font-bold shadow-xl transition-all duration-300"
                                    >
                                        Explore ECBills
                                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                    </Button>
                                </a>
                                <Button
                                    variant="outline"
                                    size="xl"
                                    className="h-16 rounded-xl px-10 gap-3 border-border hover:bg-secondary text-foreground font-bold transition-all duration-300"
                                    onClick={() => {
                                        window.dispatchEvent(
                                            new CustomEvent('delvare:autofill', {
                                                detail: {
                                                    message:
                                                        'Requesting a startup demo of the ECBills.in platform.',
                                                },
                                            })
                                        );
                                    }}
                                >
                                    Request Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Right panel: Technical proof */}
                        <div className="relative p-10 md:p-16 flex flex-col gap-10 bg-white">
                            {/* Performance Metrics */}
                            <div className="grid grid-cols-2 gap-5">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="bg-secondary/30 border border-border/50 rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/20 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-3xl font-black text-foreground tracking-tighter">
                                                {stat.value}
                                            </p>
                                            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Logic Highlights */}
                            <div className="space-y-6">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
                                    Startup Engine Architecture
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {highlights.map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                                        >
                                            <div
                                                className={cn(
                                                    'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300'
                                                )}
                                            >
                                                {h.icon}
                                            </div>
                                            <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                                                {h.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-auto flex items-center gap-4 px-6 py-5 rounded-2xl bg-primary/[0.03] border border-primary/10">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 font-black text-[10px] text-primary">
                                    AB
                                </div>
                                <p className="text-sm text-muted-foreground font-medium italic">
                                    Architected by <Link href="/portfolio/founder" className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">Alfas B.</Link> — high-availability systems for fast-growing startups.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Tagline */}
                <div className="mt-16 text-center animate-fade-in-up [animation-delay:400ms]">
                    <p className="text-sm text-muted-foreground font-medium mb-2">Portfolio in expansion.</p>
                    <button
                        className="text-primary font-black uppercase tracking-[0.2em] text-[10px] hover:tracking-[0.3em] transition-all"
                        onClick={() => {
                            window.dispatchEvent(
                                new CustomEvent('delvare:autofill', {
                                    detail: {
                                        message:
                                            'Notify me of upcoming product releases across the Delvare ecosystem.',
                                    },
                                })
                            );
                        }}
                    >
                        Join Deployment Waitlist →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
