'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ArrowLeft, CheckCircle2, Zap, Cloud, Code2, ShieldCheck, LifeBuoy, GitBranch, Cpu, Brain, MessageSquare, Layout, Database, Search, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const iconMap: Record<string, any> = {
    Cloud, Brain, Code2, ShieldCheck, LifeBuoy, GitBranch, Zap, MessageSquare, Cpu, Layout, Database, Search, TrendingUp
};

interface SpecialtyDetailContentProps {
    data: any;
}

export default function SpecialtyDetailContent({ data }: SpecialtyDetailContentProps) {
    const router = useRouter();
    const Icon = iconMap[data.icon] || Zap;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data.slug]);

    if (!data) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="flex flex-col min-h-screen bg-white text-foreground">
            <Header />

            <main className="flex-grow">
                {/* Immersion Section */}
                <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
                    {/* Background Visuals */}
                    <div className="absolute inset-0 z-0">
                        <div className={cn("absolute top-0 right-0 w-[80%] h-[80%] blur-[150px] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2", data.accent)} />
                        <div className={cn("absolute bottom-0 left-0 w-[60%] h-[60%] blur-[150px] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2", data.accent)} />

                        {/* Mesh Grid */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `linear-gradient(#10b981 0.5px, transparent 0.5px), linear-gradient(90deg, #10b981 0.5px, transparent 0.5px)`,
                                backgroundSize: '60px 60px'
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            {/* Navigation */}
                            <div className="flex items-center justify-between mb-16 animate-fade-in-up">
                                <button
                                    onClick={() => router.back()}
                                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-all group"
                                >
                                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <ArrowLeft className="w-4 h-4" />
                                    </div>
                                    Go Back
                                </button>

                                <Badge variant="outline" className="border-primary/20 text-primary px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase bg-primary/5">
                                    Service Details
                                </Badge>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
                                {/* Left Content */}
                                <div className="lg:col-span-12 xl:col-span-7 space-y-10">
                                    <div className="space-y-6">
                                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-foreground animate-fade-in-up">
                                            {data.title.split(' ')[0]} <br />
                                            <span className="text-primary italic font-light tracking-tight">{data.title.split(' ').slice(1).join(' ')}</span>
                                        </h1>
                                        <p className="text-xl md:text-3xl text-muted-foreground font-medium leading-tight max-w-2xl italic tracking-tight animate-fade-in-up [animation-delay:100ms]">
                                            "{data.detailedDescription || data.description}"
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8 pt-6 animate-fade-in-up [animation-delay:200ms]">
                                        {data.features.map((feat: string, i: number) => (
                                            <div key={i} className="flex gap-4 items-start group">
                                                <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-secondary border border-border group-hover:border-primary/30 transition-all">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="font-black text-[11px] uppercase tracking-widest text-foreground">{feat}</p>
                                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest opacity-40">Elite Protocol</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-5 pt-10 animate-fade-in-up [animation-delay:300ms]">
                                        <Button
                                            size="xl"
                                            className="h-20 px-16 bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-2xl hover:-translate-y-1 transition-all font-black uppercase tracking-[0.2em] text-[12px]"
                                            onClick={() => window.open(`https://wa.me/918606821125?text=I am interested in ${data.title}`)}
                                        >
                                            Get Started <Zap className="ml-3 w-5 h-5 fill-current" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="xl"
                                            className="h-20 px-12 border-border border-2 hover:bg-secondary rounded-2xl transition-all font-black uppercase tracking-[0.2em] text-[12px]"
                                            onClick={() => router.push('/#services')}
                                        >
                                            See All Services <ArrowRight className="ml-3 w-5 h-5" />
                                        </Button>
                                    </div>

                                    {/* Author Info */}
                                    <div className="pt-12 flex items-center gap-4 animate-fade-in-up [animation-delay:400ms]">
                                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center font-black text-primary text-xl border border-border">
                                            AB
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Expert Lead</p>
                                            <Link href="/portfolio/founder" className="text-xl font-black text-foreground hover:text-primary transition-colors">Alfas B.</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Visualization */}
                                <div className="lg:col-span-12 xl:col-span-5 relative animate-fade-in-up [animation-delay:500ms] print:hidden">
                                    <div className="relative z-10 bg-white p-4 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-border overflow-hidden">
                                        <div className={cn("w-full aspect-square rounded-[3.5rem] flex flex-col items-center justify-center text-white relative overflow-hidden", data.accent)}>
                                            {/* Service Image */}
                                            <img
                                                src={data.portfolioImages ? data.portfolioImages[0] : data.image}
                                                alt={data.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                                            />

                                            <Icon className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl z-10" />

                                            {/* Data Lines Overlay */}
                                            <div className="absolute inset-0 opacity-20 z-0"
                                                style={{
                                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, white 1px, white 2px)',
                                                    backgroundSize: '100% 4px'
                                                }}
                                            />

                                            {/* Rotating Ring */}
                                            <div className="absolute inset-[-10%] border-[20px] border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                                        </div>

                                        <div className="p-8 pt-10 space-y-6">
                                            <div className="flex justify-between items-end">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Node Integrity</p>
                                                    <p className="text-3xl font-black tracking-tighter text-foreground">Optimal</p>
                                                </div>
                                                <div className="text-right space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Startup Deployment</p>
                                                    <p className="text-3xl font-black tracking-tighter text-primary">Active</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                {data.stats.map((stat: any, i: number) => (
                                                    <div key={i} className="flex items-center justify-between group">
                                                        <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{stat.label}</span>
                                                        <span className="text-lg font-black tracking-tight text-foreground">{stat.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Glow */}
                                    <div className={cn("absolute -inset-10 blur-[100px] opacity-10 rounded-full", data.accent)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Flyer Section: Success Stories & Audit Log */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        {/* Slide Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 animate-fade-in-up">
                            <div className="space-y-6">
                                <Badge variant="outline" className="border-primary/20 text-primary px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase bg-primary/5">
                                    Strategic Deployments
                                </Badge>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9]">
                                    Our <span className="text-primary italic font-light">Startup</span> Success.
                                </h2>
                                <p className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                                    Elite solutions engineered for high-growth startup ecosystems.
                                </p>
                            </div>
                            <Button 
                                variant="outline" 
                                size="xl"
                                className="h-20 px-12 border-border border-2 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-primary hover:text-white hover:border-primary transition-all shadow-xl group print:hidden"
                                onClick={() => window.print()}
                            >
                                Download as Flyer <Zap className="ml-3 w-5 h-5 group-hover:animate-pulse" />
                            </Button>
                        </div>

                        {/* Portfolio Cards (Flyer Slide 1) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group relative aspect-[3/4] rounded-[3.5rem] overflow-hidden border border-border bg-secondary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 break-inside-avoid">
                                    <img
                                        src={data.portfolioImages ? data.portfolioImages[i-1] : data.image}
                                        alt="Project"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                                    
                                    <div className="absolute bottom-12 left-12 right-12 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-1 border-t-2 border-primary" />
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Deployment 0{i}</p>
                                        </div>
                                        <h3 className="text-3xl font-black text-white tracking-tight leading-none">
                                            {i === 1 ? 'Market Dominance' : i === 2 ? 'Hyper Scale' : 'Perfect Launch'}
                                        </h3>
                                        <p className="text-sm font-medium text-white/60 leading-relaxed">
                                            Custom {data.title} protocol delivered for a Series A fintech startup.
                                        </p>
                                        <Button className="w-full bg-white text-black hover:bg-primary hover:text-white rounded-2xl font-black uppercase text-[10px] tracking-widest h-14 shadow-lg">
                                            Case Details
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Slide 2: Security Audit Log (Terminal Flyer) */}
                        <div className="pt-32 border-t-2 border-border break-before-page">
                            <div className="grid lg:grid-cols-12 gap-16 items-start">
                                <div className="lg:col-span-4 space-y-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                                        <ShieldCheck className="w-3 h-3 text-red-500" />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-red-500">Live Audit Log</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-tight">
                                        Security <br/>
                                        <span className="text-red-500 italic">Findings.</span>
                                    </h3>
                                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                        Simulated vulnerability scan of local infrastructure by our expert security team.
                                    </p>
                                    <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Audit Expert</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-black text-white text-xs">AB</div>
                                            <Link href="/portfolio/founder" className="font-black text-foreground hover:text-primary transition-colors">Alfas B.</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-8 bg-[#0a0a0b] rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden">
                                    <div className="p-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                                        </div>
                                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">delvare-security-audit v2.4</span>
                                    </div>
                                    <div className="p-10 md:p-16 space-y-12 font-mono">
                                        <div className="space-y-4">
                                            <div className="flex gap-6 items-start">
                                                <Badge className="bg-red-500/20 text-red-500 border-red-500/20 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0">CRITICAL</Badge>
                                                <div className="space-y-2">
                                                    <p className="text-white font-bold">SQL Injection Vulnerability [ID: SEC-882]</p>
                                                    <p className="text-white/40 text-[11px] leading-relaxed">Detected in /api/v1/auth endpoint. Unsanitized input allows bypass of startup authentication protocols.</p>
                                                    <p className="text-emerald-400 text-[11px] font-bold">STatus: REMEDIATED (Zero-Trust filter applied)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex gap-6 items-start">
                                                <Badge className="bg-amber-500/20 text-amber-500 border-amber-500/20 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0">HIGH</Badge>
                                                <div className="space-y-2">
                                                    <p className="text-white font-bold">Broken Access Control [ID: SEC-104]</p>
                                                    <p className="text-white/40 text-[11px] leading-relaxed">Sub-domain leakage found in startup staging environment. Potential access to internal node architecture.</p>
                                                    <p className="text-emerald-400 text-[11px] font-bold">Status: PATCHED (Network isolation verified)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex gap-6 items-start">
                                                <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/20 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm shrink-0">MEDIUM</Badge>
                                                <div className="space-y-2">
                                                    <p className="text-white font-bold">Insecure Header Config [ID: SEC-051]</p>
                                                    <p className="text-white/40 text-[11px] leading-relaxed">Missing Content-Security-Policy (CSP) headers in core dashboard. Risk of minor XSS injection.</p>
                                                    <p className="text-amber-400 text-[11px] font-bold">Status: PENDING (Scheduled for Next-SLA update)</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-10 mt-10 border-t border-white/5 text-[10px] text-white/20 uppercase tracking-[0.4em] flex justify-between">
                                            <span>Scan ID: 9x-772-L1</span>
                                            <span>Log: {new Date().toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Insight Section */}
                <section className="py-20 bg-[#fafafa] border-t border-border">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
                            <div className="flex items-center gap-6">
                                <div className="h-16 w-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center font-black text-primary italic text-2xl">
                                    D
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Made by Delvare</p>
                                    <p className="text-sm font-medium text-muted-foreground italic">"Elite solutions for elite businesses."</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-1.5 w-8 rounded-full bg-border" />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
