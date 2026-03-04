import { blogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogs.find(b => b.slug === slug);
    if (!post) return {};
    return {
        title: `${post.title} | Delvare Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        }
    };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find(b => b.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Back Button */}
                    <Link href="/#blog" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4" /> Back to Articles
                    </Link>

                    {/* Header */}
                    <div className="space-y-8 mb-16 text-center md:text-left">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="outline" className="border-primary text-primary px-4 py-1">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1]">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
                            <span className="flex items-center gap-3"><User className="w-4 h-4 text-primary" /> {post.author}</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:text-muted-foreground prose-p:font-medium prose-p:leading-relaxed prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:bg-secondary/30 prose-blockquote:p-10 prose-blockquote:rounded-3xl prose-blockquote:font-black prose-blockquote:italic">
                        {/* Note: In a real app, use a markdown library like react-markdown. For here, I'll structure it manually or use simple HTML */}
                        <div className="space-y-10 whitespace-pre-line text-lg font-medium text-muted-foreground leading-relaxed">
                            {post.content.replace(/#+.*\n/g, '').trim()}
                        </div>
                    </article>

                    {/* Footer of article */}
                    <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-3xl bg-primary text-white flex items-center justify-center font-black text-2xl italic">D</div>
                            <div>
                                <p className="font-black text-sm uppercase tracking-widest">Delvare Editorial</p>
                                <p className="text-xs text-muted-foreground">Insights from our leading engineers.</p>
                            </div>
                        </div>
                        <Link href="/#contact">
                            <button className="h-16 px-10 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                Start a Conversation
                            </button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
