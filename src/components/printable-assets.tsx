'use client';

import { Badge } from '@/components/ui/badge';
import { Bot, Cpu, Globe, Zap, Shield, Rocket, Smartphone, Code, Brain, Cloud, Hammer, RefreshCcw } from 'lucide-react';

export const QuotationPDFTemplate = ({ data }: { data: any }) => {
    if (!data) return null;

    return (
        <div id="quotation-pdf-template" className="absolute -left-[9999px] top-0 w-[210mm] bg-white text-black p-[20mm] font-serif leading-relaxed">
            {/* Header - LaTeX Style */}
            <div className="border-b-2 border-black pb-8 mb-12 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">Delvare Solutions</h1>
                    <p className="text-sm font-mono tracking-widest text-gray-500">DIGITAL ARCHITECTURE ARCHIVE // 2026</p>
                </div>
                <div className="text-right">
                    <p className="font-bold">QUOTATION: #DEL-{Math.floor(Math.random() * 9000) + 1000}</p>
                    <p className="text-sm">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>

            <div className="space-y-12">
                <section className="grid grid-cols-2 gap-8 mb-8 border-b border-gray-100 pb-8">
                    <div>
                        <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-mono">Prepared For</h3>
                        <p className="font-bold text-xl">{data.clientName}</p>
                        <p className="text-sm text-gray-600">{data.clientEmail}</p>
                        <p className="text-sm text-gray-600">{data.clientPhone}</p>
                    </div>
                    <div className="text-right">
                        <h3 className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-mono">Project Specification</h3>
                        <p className="font-bold text-xl">{data.label}</p>
                        <p className="text-sm text-emerald-600 font-mono italic uppercase">Architectural Blueprint v4.A</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold border-l-4 border-black pl-4 mb-6 uppercase tracking-widest bg-gray-50 py-2 font-sans">Abstract</h2>
                    <p className="text-lg italic text-gray-700 leading-relaxed font-serif">
                        This document outlines the projected architectural investment for <strong>{data.clientName}</strong> regarding the development of the <strong>{data.label}</strong>.
                        Synthesized via the Delvare AI Nexus, this proposal prioritizes performance-first architecture and high-visibility deployment.
                    </p>
                </section>

                <section className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase text-xs tracking-widest text-gray-400 font-sans">Technical Protocol</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-[10px] underline">DOMAIN</span>
                                <span className="font-bold text-xs">{data.label}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-[10px] underline">COMPLEXITY</span>
                                <span className="font-bold text-xs uppercase">{data.complexity}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-[10px] underline">PACE</span>
                                <span className="font-bold text-xs uppercase">{data.speed}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-[10px] underline">SCALE</span>
                                <span className="font-bold text-xs uppercase">{data.scale}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 rounded-tr-[40px] flex flex-col justify-center shadow-xl">
                        <h3 className="text-[10px] tracking-[0.3em] uppercase mb-4 opacity-50 font-sans">Estimated Total</h3>
                        <p className="text-5xl font-black">{data.amount}</p>
                        <p className="text-[10px] mt-4 opacity-40 uppercase tracking-widest font-mono">Verified by Delvare Nexus 2026</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold border-l-4 border-black pl-4 mb-6 uppercase tracking-widest bg-gray-50 py-2 font-sans">Development Roadmap</h2>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
                        <div className="flex gap-4">
                            <span className="font-black text-gray-200 text-3xl">01</span>
                            <div>
                                <p className="font-bold uppercase text-xs">Architectural Synthesis</p>
                                <p className="text-gray-500 text-[11px]">Neural mapping and core API skeleton development using high-performance stacks.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="font-black text-gray-200 text-3xl">02</span>
                            <div>
                                <p className="font-bold uppercase text-xs">Ecosystem Deployment</p>
                                <p className="text-gray-500 text-[11px]">Integration across Web (Next/Gatsby), Android, and iOS using unified core logic.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-8 mt-12 border-t border-gray-200">
                    <div className="flex justify-between items-center opacity-30 italic font-mono text-[9px]">
                        <p>DELVARE SOLUTIONS // CONFIDENTIAL PROPOSAL</p>
                        <p>INTELLECTUAL PROPERTY OF DELVARE PVT LTD</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export const CatalogPDFTemplate = () => {
    const services = [
        {
            title: 'AI Architect',
            tag: 'Neural Training & Deployment',
            desc: 'We specialize in the training, fine-tuning, and deployment of proprietary AI models. Whether it is on-premise security or hyperscale cloud, our neural systems are tuned for perfection.',
            features: ['Custom LLM Fine-tuning', 'On-Premise Deployment', 'Neural Performance Audits', 'Predictive Analytics']
        },
        {
            title: 'Cloud Voyager',
            tag: 'Enterprise Automation',
            desc: 'Seamless cloud infrastructure automation. We implement self-healing, auto-scaling architectures that remove the human-error bottleneck from your operations.',
            features: ['Infrastructure as Code', 'Serverless Workflows', 'Zero-Downtime Migration', 'Quantum Encryption']
        },
        {
            title: 'Software Nexus',
            tag: 'Next.js // Gatsby // Vite',
            desc: 'Delivering digital tools across Web, Android, and iOS. We choose stacks specifically for performance, SEO visibility, and architectural perfection.',
            features: ['Native Performance UI', 'Cross-Platform Sync', 'SEO-First Engineering', 'Vite-Speed Runtimes']
        },
        {
            title: 'Solution Guardian',
            tag: 'Handover & Maintenance',
            desc: 'Hand over your existing solutions to our expertise. We manage, monitor, and optimize your systems so you can focus on growth while we handle the technical overhead.',
            features: ['24/7 Expert Monitoring', 'Technical Handover Support', 'Performance Optimization', 'Security Patches']
        },
        {
            title: 'Legacy Renewal',
            tag: 'Modern Migration',
            desc: 'Redeveloping the old into the new. We migrate legacy websites and applications to modern tech stacks without losing a single bit of data or SEO authority.',
            features: ['Legacy Code Audit', 'Gatsby/Next Migration', 'SEO Stability Guarantee', 'Database Modernization']
        }
    ];

    return (
        <div id="catalog-pdf-template" className="absolute -left-[9999px] top-0 w-[210mm] bg-black text-white p-0 font-sans">
            {/* Cover Page */}
            <div className="h-[297mm] flex flex-col relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] -mr-64 -mt-64" />
                <div className="relative z-10 flex-1 flex flex-col justify-center items-center p-20 text-center">
                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 mb-8 py-2 px-6 text-xl uppercase tracking-[0.4em] font-black">
                        2026 Master Portfolio
                    </Badge>
                    <h1 className="text-9xl font-black italic tracking-tighter leading-[0.8] mb-12">
                        DELVARE<br />
                        <span className="text-emerald-500">SOLUTIONS</span>
                    </h1>
                    <p className="text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed italic border-l-2 border-emerald-500 pl-8 text-left">
                        "Engineering perfection across AI training, Cloud automation, and high-visibility Software development."
                    </p>
                </div>
                <div className="p-12 border-t border-white/10 flex justify-between items-end bg-black/50 backdrop-blur-xl">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black mb-1">Edition</p>
                        <p className="text-3xl font-bold italic">NEXUS_ALPHA</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black mb-1">Global Presence</p>
                        <p className="text-sm font-mono opacity-50">USA // INDIA // DUBAI</p>
                    </div>
                </div>
            </div>

            {/* Services Loop - One Page Each */}
            {services.map((service, index) => (
                <div key={index} className="h-[297mm] p-24 bg-white text-black flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-50 rounded-full -mr-32 -mt-32" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-24">
                            <div>
                                <Badge className="bg-black text-white mb-4 rounded-none px-4">SERVICE_MAPPING_0{index + 1}</Badge>
                                <h2 className="text-7xl font-black tracking-tighter italic uppercase underline decoration-emerald-500 decoration-8 underline-offset-[12px]">{service.title}</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-16">
                            <div className="col-span-8">
                                <h3 className="text-2xl font-bold text-gray-400 mb-6 uppercase tracking-[0.2em] font-mono">{service.tag}</h3>
                                <p className="text-3xl leading-relaxed font-serif italic text-zinc-700 mb-12">
                                    {service.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-8">
                                    {service.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-2 h-2 bg-emerald-500" />
                                            <span className="font-bold uppercase text-sm tracking-widest">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-span-4 flex flex-col justify-end border-l-2 border-zinc-100 pl-16">
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="font-black text-xs uppercase text-zinc-400 mb-2">Primary Stacks</h4>
                                        <p className="font-mono text-sm">PyTorch, Terraform, Next.js, Flutter</p>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xs uppercase text-zinc-400 mb-2">Delivery Speed</h4>
                                        <p className="font-mono text-sm">4-12 Week Protocol</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-12 border-t border-zinc-100 flex justify-between opacity-30 items-center font-mono text-[10px]">
                        <p>DELVARE SOLUTIONS PVT LTD</p>
                        <div className="w-12 h-1 bg-black" />
                        <p>SERVICE CORE // PAGE 0{index + 2}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
