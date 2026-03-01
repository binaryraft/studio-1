'use client';

import { useState } from 'react';
import { Phone, Mail, Copyright, Package, ExternalLink } from 'lucide-react';
import Logo from '@/components/logo';
import { LegalModals, type PolicyType } from '@/components/legal-modals';
import { siteConfig } from '@/lib/site-config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPolicy = (type: PolicyType) => {
    setActivePolicy(type);
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-background relative border-t border-foreground/5 dark:border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo simple color="white" className="!items-start" />
            <p className="text-muted-foreground text-sm max-w-xs transition-colors duration-500 hover:text-white">
              Advancing the world through Anything-as-a-Service. We build, maintain, and secure the digital core of modern enterprises.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-emerald-500 transition-colors">Products</a></li>
              <li><a href="#clients" className="hover:text-emerald-500 transition-colors">Clients</a></li>
              <li><a href="#careers" className="hover:text-emerald-500 transition-colors">Careers &amp; Academy</a></li>
              <li><a href="#estimator" className="hover:text-emerald-500 transition-colors">Cost Estimator</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-xl font-bold">Our Products</h3>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li>
                <a
                  href="https://ecbills.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 group hover:text-emerald-500 transition-colors"
                >
                  <div className="h-7 w-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <Package className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <span>ECBills.in</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <p className="text-xs text-muted-foreground/60 mt-1.5 ml-9">Inventory &amp; Billing System</p>
              </li>
              <li className="text-sm text-muted-foreground/50 italic">More coming soon...</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-xl font-bold">Contact</h3>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-emerald-500" />
                </div>
                <a href={siteConfig.contact.emailHref} className="hover:text-emerald-500 transition-colors">{siteConfig.contact.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-emerald-500" />
                </div>
                <a href={siteConfig.contact.phoneHref} className="hover:text-emerald-500 transition-colors">{siteConfig.contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-medium flex items-center gap-2">
            <Copyright className="w-4 h-4 shrink-0" /> {currentYear} XAAS by Delvare MNC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-muted-foreground uppercase tracking-widest">
            <button onClick={() => openPolicy('privacy')} className="hover:text-emerald-500 transition-colors" aria-label="Open Privacy Policy">Privacy</button>
            <button onClick={() => openPolicy('terms')} className="hover:text-emerald-500 transition-colors" aria-label="Open Terms of Service">Terms</button>
            <button onClick={() => openPolicy('security')} className="hover:text-emerald-500 transition-colors" aria-label="Open Security Policy">Security</button>
          </div>
        </div>
      </div>

      <LegalModals
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        type={activePolicy}
      />
    </footer>
  );
};

export default Footer;
