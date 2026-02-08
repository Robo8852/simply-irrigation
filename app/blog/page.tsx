import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Irrigation tips, maintenance guides, and expert advice from Simply Irrigation LLC in Bradenton, FL.',
};

export default function BlogPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Irrigation Tips & Resources
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Expert advice to help you maintain a healthy lawn and efficient irrigation system.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {post.description}
                                </p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center font-medium text-[#4992DF] hover:underline group-hover:translate-x-1 transition-transform"
                                >
                                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
