import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/ui/Button';

export function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            url: `https://simplyirrigationllc.com/blog/${post.slug}`,
            images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: ['/hero.jpg'],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
            '@type': 'Organization',
            name: 'Simply Irrigation LLC',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Simply Irrigation LLC',
            logo: { '@type': 'ImageObject', url: 'https://simplyirrigationllc.com/logo.svg' },
        },
    };

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={articleSchema} />

            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Blog
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-6 text-gray-400">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <div
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-zinc-900 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Need Help With Your Irrigation System?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Simply Irrigation provides expert service throughout Bradenton and the surrounding areas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:941-538-2593">
                                <Button size="lg">Call 941-538-2593</Button>
                            </a>
                            <Link href="/contact">
                                <Button variant="secondary" size="lg">Get a Free Quote</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
