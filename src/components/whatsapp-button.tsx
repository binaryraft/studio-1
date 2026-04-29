'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group",
                scrolled ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
            )}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-8 h-8 fill-current" />
            
            {/* Tooltip */}
            <span className="absolute right-20 bg-white text-brand-dark text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-xl border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Chat with us
            </span>

            {/* Pulsing indicator */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
        </a>
    );
};

export default WhatsAppButton;
