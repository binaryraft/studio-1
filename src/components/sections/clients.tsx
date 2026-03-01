'use client';

import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const clients = [
  { name: 'Laynered', url: 'https://laynered.com' },
  { name: 'EC Bills', url: 'https://ecbills.in' },
  { name: 'Alien Hill', url: 'https://alienhill.shop' },
  { name: 'Spectra School', url: 'https://spectraschool.in' },
  { name: 'Nature of the Divine', url: 'https://natureofthedivine.com' },
];

const getFaviconUrl = (domain: string) => {
  try {
    const url = new URL(domain.startsWith('http') ? domain : `https://${domain}`);
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`;
  } catch {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  }
};

const ClientsSection = () => {
  return (
    <section id="clients" className="w-full py-24 sm:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-emerald-500/30 text-emerald-500">
            Trusted by
          </Badge>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Clients We Build For
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            From startups to enterprises, we deliver solutions that scale.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => {
            const faviconUrl = getFaviconUrl(client.url);
            return (
              <a
                key={client.url}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-foreground/5 dark:border-white/5 hover:border-emerald-500/30 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] transition-all duration-300 min-w-[140px]"
              >
                <div className="w-16 h-16 rounded-xl bg-background/80 dark:bg-background/50 flex items-center justify-center overflow-hidden border border-foreground/5 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={faviconUrl}
                    alt={`${client.name} favicon`}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('items-center', 'justify-center');
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors truncate max-w-[120px]">
                  {client.name}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
