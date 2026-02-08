import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions',
    description: 'Answers to common questions about irrigation installation, sprinkler repair, and lawn maintenance in Bradenton, FL. Simply Irrigation LLC.',
};

const faqs = [
    {
        category: 'General',
        items: [
            { q: 'What areas do you serve?', a: 'We serve Bradenton, Sarasota, Lakewood Ranch, Palmetto, Parrish, and surrounding communities in Manatee and Sarasota counties.' },
            { q: 'Are you licensed and insured?', a: 'Yes. Simply Irrigation LLC is fully licensed and insured to perform irrigation work in the state of Florida.' },
            { q: 'Do you offer free estimates?', a: 'Yes. We provide free on-site estimates for all irrigation and landscaping projects. Call us at 941-538-2593 or fill out our contact form to schedule.' },
            { q: 'Do you work on commercial properties?', a: 'Our primary focus is residential properties, but we do take on select commercial projects. Contact us to discuss your needs.' },
        ],
    },
    {
        category: 'Irrigation Systems',
        items: [
            { q: 'How often should I water my lawn in Florida?', a: 'Most Florida lawns need about ¾ inch of water twice per week during the growing season. Your irrigation controller should be adjusted seasonally — more in summer, less in winter. We can set up a smart controller that adjusts automatically based on weather.' },
            { q: 'Why are there dry spots even though my sprinklers are running?', a: 'Dry spots usually indicate a coverage gap, a clogged nozzle, or a misaligned head. A maintenance visit can identify and fix these issues quickly.' },
            { q: 'How long does a sprinkler system last?', a: 'A well-maintained system can last 15–20 years or more. Individual components like heads and valves may need replacement sooner, which is why regular maintenance is important.' },
            { q: 'What is a rain sensor and do I need one?', a: 'A rain sensor shuts off your irrigation system when it detects rainfall, preventing water waste. Florida law requires rain sensors on all automatic irrigation systems.' },
            { q: 'Can I add zones to my existing system?', a: 'In most cases, yes. We can assess your current system\'s capacity and add zones to cover new landscaping or previously unirrigated areas.' },
        ],
    },
    {
        category: 'Pricing & Scheduling',
        items: [
            { q: 'How much does sprinkler repair cost?', a: 'Repair costs vary depending on the issue. Simple head replacements are affordable, while valve or pipe repairs may cost more. We always provide upfront pricing before starting work.' },
            { q: 'How quickly can you schedule a service call?', a: 'We typically schedule service calls within the same week. For urgent issues like major leaks, we do our best to accommodate same-day or next-day visits.' },
            { q: 'Do you offer maintenance plans?', a: 'Yes. We offer seasonal and quarterly maintenance packages to keep your system running efficiently year-round. Call us for details and pricing.' },
        ],
    },
];

const faqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((cat) =>
        cat.items.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
        }))
    ),
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd data={faqSchemaData} />

            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Find answers to common questions about irrigation and our services.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    {faqs.map((category) => (
                        <div key={category.category} className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.items.map((faq, i) => (
                                    <details key={i} className="group rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-900">
                                        <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden">
                                            {faq.q}
                                            <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                                            {faq.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="mt-12 text-center p-8 rounded-2xl bg-gray-50 dark:bg-zinc-900">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            We&apos;re happy to help. Give us a call or send us a message.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:941-538-2593">
                                <Button size="lg">Call 941-538-2593</Button>
                            </a>
                            <Link href="/contact">
                                <Button variant="secondary" size="lg">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
