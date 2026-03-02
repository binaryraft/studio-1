'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, User, Send, Sparkles, Tag, Download, Printer, Share2, Rocket, Cloud, Brain, Globe, Smartphone, Code, Hammer, RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { generatePDF } from '@/lib/pdf-generator';

type Message = {
  id: string;
  sender: 'ai' | 'user';
  text: string | React.ReactNode;
  options?: { label: string; value: string; icon?: any }[];
  type?: 'text' | 'options' | 'input' | 'result';
};

const pricingBase = {
  ai: { base: 25000, label: 'AI/ML Training & Tuning', icon: Brain, desc: 'Custom model training, fine-tuning, and on-premise/hybrid deployment' },
  cloud: { base: 12000, label: 'Cloud Automation Architect', icon: Cloud, desc: 'Enterprise-scale workflow automation and managed cloud infrastructure' },
  software: { base: 15000, label: 'Full-Stack Ecosystem', icon: Code, desc: 'High-performance Next.js, Gatsby, or Vite solutions for Web, iOS, and Android' },
  maintenance: { base: 5000, label: 'Expert Solution Maintenance', icon: Hammer, desc: 'Handover your existing software for 24/7 expert monitoring and optimization' },
  migration: { base: 8000, label: 'Legacy-to-Nexus Migration', icon: RefreshCcw, desc: 'Redeveloping old architectures into modern, lightning-fast digital assets' },
};

const complexityMultipliers = {
  basic: 1,
  advanced: 1.6,
  complex: 2.8,
};

const urgencyMultipliers = {
  standard: 1,
  express: 1.4,
};

const regionMultipliers = {
  global: 1.2,
  regional: 1,
  local: 0.8,
};

const CostEstimatorSection = ({ onQuoteGenerated }: { onQuoteGenerated?: (data: any) => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Welcome to Delvare's Nexus. I am your AI Architect. I'll help you blueprint, estimate, and initiate your next breakthrough project.",
    },
    {
      id: '2',
      sender: 'ai',
      text: "Select the domain where you want to achieve perfection:",
      type: 'options',
      options: [
        { label: "AI Training & Deploy", value: "ai", icon: Brain },
        { label: "Cloud Automation", value: "cloud", icon: Cloud },
        { label: "Software Development", value: "software", icon: Code },
        { label: "Expert Maintenance", value: "maintenance", icon: Hammer },
        { label: "Legacy Migration", value: "migration", icon: RefreshCcw },
      ],
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<any>({});
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollChatToBottom();
  }, [messages, isTyping]);

  const handleOptionClick = (value: string, label: string) => {
    const newMessages = [
      ...messages,
      { id: Date.now().toString(), sender: 'user' as const, text: label },
    ];
    setMessages(newMessages);
    setSelections({ ...selections, [getStepKey(currentStep)]: value });
    processNextStep(currentStep + 1, value, newMessages);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessages = [
      ...messages,
      { id: Date.now().toString(), sender: 'user' as const, text: inputValue },
    ];
    setMessages(newMessages);
    const stepKey = getStepKey(currentStep);
    setSelections({ ...selections, [stepKey]: inputValue });
    setInputValue("");
    processNextStep(currentStep + 1, inputValue, newMessages);
  };

  const getStepKey = (step: number) => {
    switch (step) {
      case 0: return 'domain';
      case 1: return 'complexity';
      case 2: return 'speed';
      case 3: return 'scale';
      case 4: return 'clientName';
      case 5: return 'clientEmail';
      case 6: return 'clientPhone';
      default: return 'unknown';
    }
  };

  const processNextStep = (nextStep: number, lastValue: string, currentMessages: Message[]) => {
    setCurrentStep(nextStep);
    setIsTyping(true);

    setTimeout(() => {
      let aiResponse: Message | null = null;

      switch (nextStep) {
        case 1:
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: "Exquisite choice. What level of complexity are we looking at for this system?",
            type: 'options',
            options: [
              { label: "Standard (Essential Scale)", value: "basic" },
              { label: "High Performance (Custom Logic)", value: "advanced" },
              { label: "Omni-Scale (Full Enterprise)", value: "complex" },
            ],
          };
          break;
        case 2:
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: "Understood. How fast do you need to reach the market?",
            type: 'options',
            options: [
              { label: "Standard Protocol (8-16 weeks)", value: "standard" },
              { label: "Accelerated Protocol (4-6 weeks)", value: "express" },
            ],
          };
          break;
        case 3:
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: "Final architectural detail: What is the intended scale of this deployment?",
            type: 'options',
            options: [
              { label: "Local / Niche Integration", value: "local" },
              { label: "Regional / Multi-State", value: "regional" },
              { label: "Global / Cross-Continent", value: "global" },
            ],
          };
          break;
        case 4:
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: "To generate your precision quotation, may I have your full name?",
            type: 'input',
          };
          break;
        case 5:
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: `Pleasure, ${lastValue}. And what is your official email address for the blueprint delivery?`,
            type: 'input',
          };
          break;
        case 6:
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: "Almost there. Please provide your contact number (with country code) for a direct consultation link.",
            type: 'input',
          };
          break;
        case 7:
          const finalSelections = { ...selections, clientPhone: lastValue };
          const result = calculateCost(finalSelections);
          aiResponse = {
            id: Date.now().toString(),
            sender: 'ai',
            text: result,
            type: 'result',
          };
          break;
      }

      setIsTyping(false);
      if (aiResponse) {
        setMessages([...currentMessages, aiResponse]);
      }
    }, 1000);
  };

  const calculateCost = (finalSelections: any) => {
    const domain = finalSelections.domain as keyof typeof pricingBase;
    const complexity = finalSelections.complexity as keyof typeof complexityMultipliers;
    const speed = finalSelections.speed as keyof typeof urgencyMultipliers;
    const scale = finalSelections.scale as keyof typeof regionMultipliers;

    const baseCost = pricingBase[domain].base;
    const multiplier = complexityMultipliers[complexity] * urgencyMultipliers[speed] * regionMultipliers[scale];

    const total = baseCost * multiplier;
    const finalAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(total);

    const Icon = pricingBase[domain].icon;

    const quotePayload = {
      label: pricingBase[domain].label,
      complexity,
      speed,
      scale,
      amount: finalAmount,
      clientName: finalSelections.clientName,
      clientEmail: finalSelections.clientEmail,
      clientPhone: finalSelections.clientPhone
    };

    return (
      <Card className="w-full max-w-lg mx-auto overflow-hidden mt-6 bg-gradient-to-br from-card to-card/50 border-primary/20 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="p-1 bg-gradient-to-r from-emerald-500 via-primary to-cyan-500" />
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5">
                Nexus Verified Estimate
              </Badge>
              <h3 className="text-2xl font-black mt-2">Personalized Quotation</h3>
              <p className="text-xs text-muted-foreground uppercase">Prepared for: <span className="text-foreground font-bold">{finalSelections.clientName}</span></p>
            </div>
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Icon className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Domain</span>
              <p className="font-bold text-sm leading-tight">{pricingBase[domain].label}</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scale</span>
              <p className="font-bold capitalize">{scale}</p>
            </div>
          </div>

          <div className="py-6 border-y border-border/50">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-muted-foreground">Investment Approximation</p>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-black text-foreground">{finalAmount}</span>
                  <Badge className="bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30 border-none">USD</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="gap-2 border-primary/20 hover:bg-primary/5 h-12"
              onClick={async () => {
                onQuoteGenerated?.(quotePayload);
                setTimeout(() => generatePDF('quotation-pdf-template', `Delvare_Quote_${finalSelections.clientName.replace(/\s+/g, '_')}`), 150);
              }}
            >
              <Download className="w-4 h-4" /> Download Quote
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-primary/20 hover:bg-primary/5 h-12"
              onClick={() => generatePDF('catalog-pdf-template', 'Delvare_Master_Catalog')}
            >
              <Download className="w-4 h-4" /> Full Catalog
            </Button>
          </div>

          <Button
            className="w-full font-bold h-14 text-lg premium-gradient shadow-lg shadow-primary/20"
            onClick={() => {
              const message = `High Attention: ${finalSelections.clientName} generated a ${pricingBase[domain].label} quote.\n\nDetails:\n- Estimate: ${finalAmount}\n- Email: ${finalSelections.clientEmail}\n- Phone: ${finalSelections.clientPhone}\n\nPlease initiate standard onboarding protocol.`;
              window.dispatchEvent(new CustomEvent('delvare:autofill', { detail: { message } }));
              window.open(`https://wa.me/919426372026?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Initiate Project Protocol
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <section id="estimator" className="w-full py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <Badge variant="outline" className="border-primary/30 text-primary py-1.5 px-4 mb-4">
            Digital Architecture Nexus
          </Badge>
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tight">
            AI Architect <span className="text-primary italic">Engine</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Our neural engine synchronizes with your business vision to output perfection in architecture, pricing, and scaling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="flex flex-col glass-card border-foreground/5 dark:border-white/5 shadow-2xl overflow-hidden min-h-[700px]">
            <div className="flex items-center justify-between px-6 py-4 bg-background/50 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                AI Instance: ALPHA-4.2
              </div>
              <Share2 className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
            </div>

            <div ref={chatContainerRef} className="flex-grow p-8 space-y-8 overflow-y-auto h-[500px] scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex gap-5 animate-in fade-in slide-in-from-bottom-4 duration-500", msg.sender === 'user' ? "justify-end" : "justify-start")}>
                  {msg.sender === 'ai' && (
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                      <Bot className="w-7 h-7 text-white" />
                    </div>
                  )}
                  <div className={cn(
                    "max-w-[85%] p-6 rounded-3xl text-lg shadow-sm leading-relaxed",
                    msg.sender === 'ai'
                      ? "bg-muted/80 backdrop-blur-sm text-foreground rounded-tl-none border border-border/50"
                      : "premium-gradient text-white rounded-tr-none shadow-xl shadow-primary/20"
                  )}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0 border border-border">
                      <User className="w-7 h-7 text-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-5 justify-start">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-primary flex items-center justify-center shrink-0">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div className="bg-muted/80 p-6 rounded-3xl rounded-tl-none flex items-center gap-3 h-16 border border-border/50">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                    <div className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 border-t border-border bg-background/80 backdrop-blur-xl">
              {messages[messages.length - 1]?.type === 'options' && !isTyping ? (
                <div className="flex flex-wrap gap-4 justify-center">
                  {messages[messages.length - 1].options?.map((opt) => (
                    <Button
                      key={opt.value}
                      variant="outline"
                      size="lg"
                      className="rounded-2xl border-primary/20 hover:bg-primary/10 hover:border-primary px-8 h-14 text-base font-bold transition-all hover:-translate-y-1"
                      onClick={() => handleOptionClick(opt.value, opt.label)}
                    >
                      {opt.icon && <opt.icon className="w-5 h-5 mr-3 text-primary" />}
                      {opt.label}
                    </Button>
                  ))}
                </div>
              ) : messages[messages.length - 1]?.type === 'input' && !isTyping ? (
                <form onSubmit={handleInputSubmit} className="flex gap-4">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nexus awaiting input..."
                    className="bg-muted/50 border-primary/20 focus-visible:ring-primary h-14 flex-1 text-lg rounded-2xl"
                  />
                  <Button type="submit" size="icon" className="shrink-0 h-14 w-14 rounded-2xl premium-gradient">
                    <Send className="w-6 h-6" />
                  </Button>
                </form>
              ) : null}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CostEstimatorSection;
