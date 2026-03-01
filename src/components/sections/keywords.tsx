'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Cpu, Cloud, Code2, Globe, HardDrive, ShieldCheck, LifeBuoy, Bot, Zap, Database, GitBranch, MessageSquare } from 'lucide-react';

const keywordItems = [
  { text: "AI", icon: <Bot className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Cloud", icon: <Cloud className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Automations", icon: <Zap className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Softwares", icon: <Code2 className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Websites", icon: <Globe className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Applications", icon: <MessageSquare className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Maintenance", icon: <GitBranch className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Migration", icon: <Database className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Consulting", icon: <LifeBuoy className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Security", icon: <ShieldCheck className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Hardware", icon: <HardDrive className="w-8 h-8 md:w-12 md:h-12" /> },
  { text: "Engineering", icon: <Cpu className="w-8 h-8 md:w-12 md:h-12" /> },
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  const content = (
    <div className="flex shrink-0 gap-12 md:gap-20 items-center px-8">
      {keywordItems.map((item, idx) => (
        <div key={idx} className="flex items-center gap-4 text-foreground/15 dark:text-white/25 hover:text-emerald-500/50 transition-colors duration-500 cursor-default">
          <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter whitespace-nowrap">
            {item.text}
          </span>
          <div className="text-emerald-500/40 shrink-0">{item.icon}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn(
      "flex w-max",
      reverse ? "animate-marquee-scroll-reverse" : "animate-marquee-scroll"
    )}>
      {content}
      {content}
    </div>
  );
};

const KeywordMarquee = () => {
  return (
    <section className="w-full py-20 overflow-hidden bg-background relative border-y border-foreground/5 dark:border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-12 relative z-10">
        <div className="relative rotate-[-2deg] scale-105 overflow-hidden">
          <MarqueeRow />
        </div>

        <div className="relative rotate-[2deg] scale-105 -mt-4 overflow-hidden">
          <MarqueeRow reverse />
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none flex justify-center">
          <div className="flex gap-4 opacity-50">
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" style={{ animationDelay: '300ms' }} />
            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" style={{ animationDelay: '700ms' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordMarquee;
