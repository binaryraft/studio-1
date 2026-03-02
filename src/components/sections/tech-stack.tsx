'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const technologies = [
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000', darkIcon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
    { name: 'Gatsby', icon: 'https://cdn.simpleicons.org/gatsby/663399' },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/007396' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
    { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E', darkIcon: 'https://cdn.simpleicons.org/amazonaws/ffffff' },
    { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
    { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai/412991', darkIcon: 'https://cdn.simpleicons.org/openai/ffffff' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
];

const TechStackSection = () => {
    return (
        <section className="w-full py-24 bg-background border-y border-border overflow-hidden">
            <div className="container mx-auto px-4 mb-20 text-center">
                <Badge variant="outline" className="mb-6 border-primary/30 text-primary px-4 py-1">
                    Mastering the Future
                </Badge>
                <h2 className="font-headline text-4xl md:text-6xl font-black mb-6 tracking-tight">
                    Technologies We Master
                </h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
                    We leverage the most advanced frameworks and tools to build robust, scalable, and futuristic solutions for our clients.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center py-6">
                    {[...technologies, ...technologies].map((tech, idx) => (
                        <div
                            key={`${tech.name}-${idx}`}
                            className="flex flex-col items-center gap-4 px-12 group/item transition-all duration-500"
                        >
                            <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-card border border-border shadow-sm group-hover/item:border-primary/50 group-hover/item:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group-hover/item:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className={cn("w-10 h-10 object-contain transition-all duration-300", tech.darkIcon && "dark:hidden")}
                                />
                                {tech.darkIcon && (
                                    <img
                                        src={tech.darkIcon}
                                        alt={tech.name}
                                        className="w-10 h-10 object-contain hidden dark:block transition-all duration-300"
                                    />
                                )}
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover/item:text-foreground transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex overflow-x-hidden mt-12 group">
                <div className="animate-marquee-reverse whitespace-nowrap flex items-center py-6">
                    {[...[...technologies].reverse(), ...[...technologies].reverse()].map((tech, idx) => (
                        <div
                            key={`rev-${tech.name}-${idx}`}
                            className="flex flex-col items-center gap-4 px-12 group/item transition-all duration-500"
                        >
                            <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-card border border-border shadow-sm group-hover/item:border-emerald-500/50 group-hover/item:shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover/item:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className={cn("w-10 h-10 object-contain transition-all duration-300", tech.darkIcon && "dark:hidden")}
                                />
                                {tech.darkIcon && (
                                    <img
                                        src={tech.darkIcon}
                                        alt={tech.name}
                                        className="w-10 h-10 object-contain hidden dark:block transition-all duration-300"
                                    />
                                )}
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-hover/item:text-foreground transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
