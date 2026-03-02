'use client';

import { Badge } from '@/components/ui/badge';
import { Bot, Cpu, Globe, Zap, Shield, Rocket, Smartphone, Code, Brain, Cloud } from 'lucide-react';

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
                <section>
                    <h2 className="text-xl font-bold border-l-4 border-black pl-4 mb-6 uppercase tracking-widest bg-gray-50 py-2">Abstract</h2>
                    <p className="text-lg italic text-gray-700 leading-relaxed">
                        This document outlines the projected architectural investment for the development of the <strong>{data.label}</strong>.
                        Analyzed via the Nexus AI Engine, the following configuration balances high-performance throughput with scalable infrastructure.
                    </p>
                </section>

                <section className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold uppercase text-xs tracking-widest text-gray-400">Technical Specifications</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-sm underline">DOMAIN</span>
                                <span className="font-bold">{data.label}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-sm underline">COMPLEXITY</span>
                                <span className="font-bold uppercase">{data.complexity}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-sm underline">DEPLOYMENT PACE</span>
                                <span className="font-bold uppercase">{data.speed}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-100 pb-1">
                                <span className="font-mono text-sm underline">TARGET SCALE</span>
                                <span className="font-bold uppercase">{data.scale}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 rounded-tr-[40px] flex flex-col justify-center">
                        <h3 className="text-xs tracking-[0.3em] uppercase mb-4 opacity-50">Estimated Total</h3>
                        <p className="text-5xl font-black">{data.amount}</p>
                        <p className="text-[10px] mt-4 opacity-40 uppercase tracking-widest">Calculated by Delvare AI Nexus v4.2.0</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold border-l-4 border-black pl-4 mb-6 uppercase tracking-widest bg-gray-50 py-2">Implementation Protocol</h2>
                    <ul className="grid grid-cols-2 gap-x-12 gap-y-4 list-decimal list-inside text-sm text-gray-600">
                        <li>Neural Interface Mapping & UX Prototyping</li>
                        <li>Core Engine Development & API Synthesis</li>
                        <li>Cloud Architecture & Database Sharding</li>
                        <li>Quantum-Ready Encryption Integration</li>
                        <li>Load Testing & Performance Calibration</li>
                        <li>Global CDN Deployment & Monitoring</li>
                    </ul>
                </section>

                <section className="pt-12 mt-12 border-t border-gray-200">
                    <div className="flex justify-between items-center opacity-30">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-black" />
                            <span className="text-xs font-black tracking-tighter">DELVARE SOLUTIONS</span>
                        </div>
                        <p className="text-[12px] font-mono">CONFIDENTIAL // INTERNAL BLUEPRINT // PAGE 1/1</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export const CatalogPDFTemplate = () => {
    return (
        <div id="catalog-pdf-template" className="absolute -left-[9999px] top-0 w-[210mm] bg-black text-white p-0 font-sans">
            {/* Cover Page */}
            <div className="h-[297mm] flex flex-col relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">
                {/* Abstract Background Design */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -ml-80 -mb-80" />

                <div className="relative z-10 flex-1 flex flex-col justify-center items-center p-20 text-center">
                    <div className="w-24 h-24 bg-white rounded-3xl mb-12 flex items-center justify-center p-4">
                        <div className="w-full h-full bg-black rounded-xl" />
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 mb-8 py-2 px-6 text-lg uppercase tracking-[0.2em] font-black">
                        Master Portfolio
                    </Badge>
                    <h1 className="text-8xl font-black italic tracking-tighter leading-[0.85] mb-8">
                        DELVARE<br />
                        <span className="text-emerald-500">SOLUTIONS</span>
                    </h1>
                    <p className="text-2xl text-zinc-400 font-light max-w-xl leading-relaxed">
                        Engineering the digital horizon through AI, Cloud, and Software excellence.
                    </p>
                </div>

                <div className="p-12 border-t border-white/10 flex justify-between items-end backdrop-blur-xl">
                    <div>
                        <p className="text-sm uppercase tracking-widest text-zinc-500 font-black">Edition</p>
                        <p className="text-2xl font-bold">ALPHA // 2026</p>
                    </div>
                    <p className="text-sm font-mono opacity-30">DEL-CAT-PRO-001</p>
                </div>
            </div>

            {/* Services Page */}
            <div className="h-[297mm] p-20 bg-white text-black flex flex-col">
                <div className="flex justify-between items-start mb-20 border-b-4 border-black pb-8">
                    <h2 className="text-6xl font-black italic">SERVICES</h2>
                    <div className="text-right">
                        <p className="font-mono text-sm">ARCHITECTURAL MAPPING</p>
                        <p className="font-bold">VOL. 02</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 flex-1">
                    {[
                        { title: 'AI NEXUS', icon: Brain, desc: 'Neural network training, LLM integration, and predictive analytics suites.' },
                        { title: 'CLOUD VOYAGER', icon: Cloud, desc: 'Hyperscale infrastructure, serverless deployments, and multi-cloud sync.' },
                        { title: 'MOBILE CORE', icon: Smartphone, desc: 'High-performance Flutter and React Native applications with native speed.' },
                        { title: 'SYSTEM SYNTHESIS', icon: Code, desc: 'Enterprise software architecture, legacy migration, and custom ERP/CRM.' },
                        { title: 'GLOBAL WEB', icon: Globe, desc: 'Next.js and Gatsby powered high-conversion digital experiences.' },
                        { title: 'CYBER SHIELD', icon: Shield, desc: 'End-to-end security audits, data encryption, and vulnerability mitigation.' }
                    ].map((s, i) => (
                        <div key={i} className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-black italic">{s.title}</h3>
                            </div>
                            <p className="text-zinc-600 leading-relaxed font-serif">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-12 border-t border-zinc-100 flex justify-between opacity-30 items-center">
                    <p className="text-xs font-mono">DELVARE SOLUTIONS PVT LTD</p>
                    <p className="text-xs font-mono">PAGE 02 // 08</p>
                </div>
            </div>
        </div>
    );
};
