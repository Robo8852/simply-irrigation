import type { Metadata } from 'next';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Testimonials',
    description: 'See what homeowners in Bradenton and Sarasota say about Simply Irrigation LLC. 5-star rated irrigation and landscaping services.',
};

const testimonials = [
    {
        name: 'Maria S.',
        location: 'Bradenton, FL',
        text: 'Fernando was prompt, professional, and honest. He fixed our sprinkler system in one visit and didn\'t try to sell us anything we didn\'t need. Highly recommend!',
        rating: 5,
    },
    {
        name: 'James R.',
        location: 'Lakewood Ranch, FL',
        text: 'We had a new irrigation system installed and the quality of work was excellent. The team was respectful of our property and cleaned up everything when they were done.',
        rating: 5,
    },
    {
        name: 'Linda P.',
        location: 'Sarasota, FL',
        text: 'Great communication from start to finish. They showed up when they said they would and the price was exactly what they quoted. Our lawn has never looked better.',
        rating: 5,
    },
    {
        name: 'Robert K.',
        location: 'Palmetto, FL',
        text: 'Had a major leak that was running up our water bill. Simply Irrigation found it quickly and repaired it the same day. Very professional service.',
        rating: 5,
    },
    {
        name: 'Sarah M.',
        location: 'Bradenton, FL',
        text: 'Fernando designed a custom irrigation plan for our new landscaping project. Everything works perfectly and our water bills actually went down. Can\'t ask for more than that!',
        rating: 5,
    },
    {
        name: 'David T.',
        location: 'Lakewood Ranch, FL',
        text: 'We\'ve been using Simply Irrigation for quarterly maintenance and haven\'t had a single issue since. They catch small problems before they become big ones.',
        rating: 5,
    },
];

const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Simply Irrigation LLC',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: String(testimonials.length),
        bestRating: '5',
        worstRating: '1',
    },
    review: testimonials.map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5' },
        reviewBody: t.text,
    })),
};

export default function TestimonialsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={aggregateRating} />

            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        What Our Customers Say
                    </h1>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                        ))}
                        <span className="ml-2 text-xl text-gray-300">5.0 Rating</span>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join our growing list of satisfied customers. Contact us today for a free estimate.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get a Free Quote</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
