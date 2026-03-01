'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle, Loader2, Mail } from 'lucide-react';
import { saveContactInfoAction } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]\d{3}[)])?[\s-]?\d{3}[\s-]?\d{4}$/
);

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(phoneRegex, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  useEffect(() => {
    const handleAutofill = (e: Event) => {
      const message = (e as CustomEvent<{ message?: string }>).detail?.message;
      if (message) {
        form.setValue('message', message);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('delvare:autofill', handleAutofill as EventListener);
    return () => window.removeEventListener('delvare:autofill', handleAutofill as EventListener);
  }, [form]);

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      const result = await saveContactInfoAction(data);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error || "An unknown error occurred.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Could not send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    form.reset();
  }

  return (
    <section id="contact" className="w-full relative py-32 sm:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(var(--primary)/0.08),transparent)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-6">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Have a project in mind? Need <strong className="text-foreground">AI</strong>, <strong className="text-foreground">cloud</strong>, <strong className="text-foreground">automation</strong>, <strong className="text-foreground">software</strong>, or <strong className="text-foreground">consulting</strong>? We'd love to hear from you.
          </p>
        </div>

        <Card className={cn(
          "max-w-2xl mx-auto glass-card transition-all duration-300 p-1",
          "hover:shadow-[0_0_60px_hsl(var(--primary)/0.2)]"
        )}>
          <CardContent className="p-10">
            {isSubmitted ? (
              <div className="text-center py-8 animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-black mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-8 text-lg">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <Button onClick={resetForm} size="lg" className="h-12 px-8">
                  Send another message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Full Name</FormLabel>
                          <FormControl><Input className="bg-transparent h-12" placeholder="John Doe" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Email Address</FormLabel>
                          <FormControl><Input className="bg-transparent h-12" type="email" placeholder="you@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Phone Number</FormLabel>
                        <FormControl><Input className="bg-transparent h-12" type="tel" placeholder="(123) 456-7890" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Your Message</FormLabel>
                        <FormControl><Textarea className="bg-transparent min-h-[120px]" placeholder="Tell us about your project, AI needs, cloud migration, automation, or consulting..." {...field} rows={5} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-14 text-base font-bold" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
                    Send Message
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
