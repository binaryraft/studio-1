'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';

const CatalogSection = () => {
    return (
        <section id="catalog" className="w-full py-32 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8">
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 py-1.5 px-4">
                            Resources & Assets
                        </Badge>
                        <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tight leading-none">
                            Download Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-primary">
                                Digital Blueprint
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                            Experience the Delvare ecosystem in detail. Access our comprehensive catalog, service list, and architectural philosophies in one high-precision PDF.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="h-16 px-8 text-lg font-bold premium-gradient shadow-xl shadow-primary/20 group">
                                <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                                Download Catalog 2026
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-8 text-lg font-bold border-primary/20 hover:bg-primary/5">
                                <FileText className="mr-3 w-6 h-6" />
                                Service Portfolio
                            </Button>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <Card className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500 border-foreground/5 dark:border-white/5 bg-gradient-to-br from-card to-card/50">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                <BookOpen className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Service Catalog</h3>
                            <p className="text-muted-foreground mb-6">
                                A detailed breakdown of all our AI, Cloud, and Software solutions.
                            </p>
                            <Button variant="link" className="p-0 h-auto font-bold text-primary group-hover:translate-x-2 transition-transform">
                                Read Abstract <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Card>

                        <Card className="glass-card p-8 group hover:-translate-y-2 transition-all duration-500 border-foreground/5 dark:border-white/5 bg-gradient-to-br from-card to-card/50">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <Layers className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Tech Stack</h3>
                            <p className="text-muted-foreground mb-6">
                                The frameworks and tools we use to build the future.
                            </p>
                            <Button variant="link" className="p-0 h-auto font-bold text-primary group-hover:translate-x-2 transition-transform">
                                Read Abstract <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Card>

                        <Card className="md:col-span-2 glass-card p-8 group hover:-translate-y-2 transition-all duration-500 border-foreground/5 dark:border-white/5 bg-gradient-to-br from-primary/5 to-emerald-500/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-32 h-32 text-primary" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Ready for a custom quote?</h3>
                                    <p className="text-muted-foreground max-w-md">
                                        Our AI estimator can generate a precision quotation based on your unique needs.
                                    </p>
                                </div>
                                <Button
                                    size="lg"
                                    className="h-14 px-8 font-bold border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10"
                                    variant="outline"
                                    onClick={() => document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Head to Nexus <ArrowRight className="ml-2 w-5 h-5" />
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
