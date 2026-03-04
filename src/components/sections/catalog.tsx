'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { generatePDF } from '@/lib/pdf-generator';

const CatalogSection = () => {
    return (
        <section id="catalog" className="w-full py-32 sm:py-48 relative overflow-hidden bg-primary text-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.05] rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-5/12 space-y-10">
                        <Badge variant="outline" className="border-white/20 py-1.5 px-5 text-[10px] font-black tracking-[0.3em] uppercase text-white/60">
                            Resources
                        </Badge>
                        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
                            Digital <br />
                            <span className="text-white/40 font-light italic tracking-tight">Systematic.</span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-xl leading-relaxed font-medium">
                            "Access the complete Delvare manifesto. A comprehensive digital exposition of our services, architectural methodology, and proprietary technology nodes."
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-4">
                            <Button
                                size="xl"
                                className="h-16 px-10 text-[10px] uppercase tracking-[0.2em] font-black bg-white text-primary shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all group rounded-xl"
                                onClick={() => generatePDF('catalog-pdf-template', 'Delvare_Manifesto_2026')}
                            >
                                <Download className="mr-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                Download Manifesto
                            </Button>
                            <Button
                                size="xl"
                                variant="outline"
                                className="h-16 px-10 text-[10px] uppercase tracking-[0.2em] font-black border-white/20 text-white hover:bg-white hover:text-primary rounded-xl transition-all"
                                onClick={() => generatePDF('catalog-pdf-template', 'Delvare_Portfolio')}
                            >
                                <FileText className="mr-3 w-5 h-5" />
                                View Portfolio
                            </Button>
                        </div>
                    </div>

                    <div className="lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        <Card className="p-10 group hover:-translate-y-2 transition-all duration-700 border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl rounded-[2.5rem] text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight mb-4 text-white">Service Index</h3>
                            <p className="text-white/60 mb-8 font-medium italic">
                                "A granular decomposition of our deployment capabilities across AI and Cloud."
                            </p>
                            <Button variant="link" className="p-0 h-auto font-black text-[10px] uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                                READ ABSTRACT <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Card>

                        <Card className="p-10 group hover:-translate-y-2 transition-all duration-700 border-white/10 bg-white/5 backdrop-blur-md shadow-xl hover:shadow-2xl rounded-[2.5rem] text-white">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                                <Layers className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black tracking-tight mb-4 text-white">Tech Topology</h3>
                            <p className="text-white/60 mb-8 font-medium italic">
                                "Exploration of the frameworks and languages utilized in our primary development cycle."
                            </p>
                            <Button variant="link" className="p-0 h-auto font-black text-[10px] uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                                READ ABSTRACT <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Card>

                        <Card className="md:col-span-2 p-12 group hover:-translate-y-2 transition-all duration-700 border-white/10 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden rounded-[3rem]">
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black tracking-tight text-brand-dark">Custom Projections?</h3>
                                    <p className="text-muted-foreground max-w-md font-medium">
                                        Our algorithmic estimator can provide a high-fidelity quotation based on your unique deployment requirements.
                                    </p>
                                </div>
                                <Button
                                    size="lg"
                                    className="h-16 px-10 font-bold bg-primary text-white rounded-xl shadow-xl hover:shadow-2xl transition-all"
                                    onClick={() => document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Access Estimator <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogSection;
