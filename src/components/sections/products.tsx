'use client';

import { useState } from 'react';
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
        label: 'Barcode Scanning',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
    },
    {
        icon: <FileText className="w-5 h-5" />,
        label: 'GST Billing',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
    },
    {
        icon: <Users className="w-5 h-5" />,
        label: 'Multi-User',
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
    },
    {
        icon: <BarChart3 className="w-5 h-5" />,
        label: 'Live Analytics',
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
    },
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        label: 'Secure Cloud',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
    },
    {
        icon: <Globe className="w-5 h-5" />,
        label: 'Works Anywhere',
        color: 'text-rose-400',
        bg: 'bg-rose-500/10',
    },
];

const features = [
    'Real-time inventory tracking across multiple stores',
    'GST-compliant invoicing & billing in seconds',
    'Barcode / QR scan for lightning-fast product lookup',
    'Profit & loss reports with one-click export',
    'Customer ledger & purchase history management',
    'Unlimited products, variants & categories',
];

const stats = [
    { value: '10K+', label: 'Bills Generated', icon: <Receipt className="w-5 h-5 text-emerald-400" /> },
    { value: '99.9%', label: 'Uptime SLA', icon: <TrendingUp className="w-5 h-5 text-blue-400" /> },
    { value: '<1s', label: 'Bill Print Speed', icon: <Clock className="w-5 h-5 text-purple-400" /> },
    { value: 'Free', label: 'To Get Started', icon: <Zap className="w-5 h-5 text-orange-400" /> },
];

const ProductsSection = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            id="products"
            className="w-full relative py-32 overflow-hidden bg-background text-foreground"
        >
            {/* Background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/8 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/8 blur-[140px] rounded-full pointer-events-none translate-x-1/3" />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <Badge
                        variant="outline"
                        className="mb-5 border-emerald-500/30 text-emerald-500 px-4 py-1.5 text-xs font-mono tracking-widest uppercase"
                    >
                        <Layers className="w-3 h-3 mr-2 inline-block" />
                        Delvare Products
                    </Badge>
                    <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tight mb-6">
                        Software Built{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                            for Business.
                        </span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                        We don't just build for clients — we ship our own products. Meet{' '}
                        <span className="text-emerald-400 font-semibold">ECBills.in</span>, our flagship
                        inventory &amp; billing platform trusted by retailers across India.
                    </p>
                </div>

                {/* Main Product Card */}
                <div
                    className={cn(
                        'relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border transition-all duration-700 animate-fade-in-up',
                        hovered
                            ? 'border-emerald-500/40 shadow-[0_0_120px_rgba(16,185,129,0.15)]'
                            : 'border-foreground/10 dark:border-white/10 shadow-2xl'
                    )}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {/* Card background */}
                    <div className="absolute inset-0 bg-card/60 backdrop-blur-2xl" />
                    <div
                        className={cn(
                            'absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 transition-opacity duration-700',
                            hovered ? 'opacity-100' : 'opacity-0'
                        )}
                    />

                    {/* Glowing top border line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left panel */}
                        <div className="p-10 md:p-14 flex flex-col justify-between gap-10">
                            {/* Brand */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                        <Package className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-500 font-bold">
                                            Inventory System
                                        </p>
                                        <h3 className="text-3xl font-black tracking-tight leading-none text-foreground">
                                            ECBills.in
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                    A complete inventory, billing, and retail management platform designed for
                                    modern Indian businesses. From a corner shop to a multi-store chain — ECBills
                                    grows with you.
                                </p>

                                {/* Feature List */}
                                <ul className="space-y-3">
                                    {features.map((feat, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm text-muted-foreground font-medium"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://ecbills.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="products-ecbills-cta"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-full px-8 gap-2 font-bold shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-emerald-400/40"
                                    >
                                        Visit ECBills.in
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </a>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 gap-2 border-foreground/10 dark:border-white/10 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300"
                                    onClick={() => {
                                        window.dispatchEvent(
                                            new CustomEvent('delvare:autofill', {
                                                detail: {
                                                    message:
                                                        'I am interested in ECBills.in — your inventory management system. Can you share more details about onboarding and pricing?',
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

                        {/* Right panel — visual showcase */}
                        <div className="relative p-10 md:p-14 flex flex-col gap-8 lg:border-l border-foreground/5 dark:border-white/5">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="bg-foreground/5 dark:bg-white/5 border border-foreground/5 dark:border-white/5 rounded-2xl p-5 flex flex-col gap-2 hover:border-emerald-500/20 hover:bg-foreground/8 dark:hover:bg-white/8 transition-all duration-300 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            {stat.icon}
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        </div>
                                        <p className="text-3xl font-black text-foreground group-hover:text-emerald-400 transition-colors duration-300">
                                            {stat.value}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights grid */}
                            <div>
                                <p className="text-xs font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4 font-bold">
                                    Core Capabilities
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {highlights.map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-foreground/5 dark:bg-white/5 border border-foreground/5 dark:border-white/5 hover:border-emerald-500/20 transition-all duration-300 group"
                                        >
                                            <div
                                                className={cn(
                                                    'w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110',
                                                    h.bg
                                                )}
                                            >
                                                <span className={h.color}>{h.icon}</span>
                                            </div>
                                            <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                                                {h.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Powered by badge */}
                            <div className="mt-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-emerald-400" />
                                </div>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Powered by{' '}
                                    <span className="text-emerald-400 font-bold">Delvare XAAS Infrastructure</span>{' '}
                                    — enterprise-grade cloud, built to scale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <p className="text-center text-sm text-muted-foreground mt-10 animate-fade-in-up [animation-delay:400ms]">
                    More products in development.{' '}
                    <button
                        className="text-emerald-400 hover:underline hover:text-emerald-300 transition-colors font-semibold"
                        onClick={() => {
                            window.dispatchEvent(
                                new CustomEvent('delvare:autofill', {
                                    detail: {
                                        message:
                                            'I wanted to know more about upcoming Delvare products. Can you share what is being built?',
                                    },
                                })
                            );
                        }}
                    >
                        Stay in the loop →
                    </button>
                </p>
            </div>
        </section>
    );
};

export default ProductsSection;
