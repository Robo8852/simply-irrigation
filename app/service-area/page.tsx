import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Service Area',
    description: 'Simply Irrigation LLC serves Bradenton, Sarasota, Lakewood Ranch, Palmetto, Parrish, and surrounding areas in Manatee and Sarasota counties, FL.',
};

const areas = [
    {
        name: 'Bradenton',
        description: 'Our home base. We serve all neighborhoods in Bradenton including West Bradenton, East Bradenton, Bayshore Gardens, and Trailer Estates.',
        zip: '34203, 34205, 34207, 34208, 34209, 34210, 34211, 34212',
    },
    {
        name: 'Sarasota',
        description: 'We serve Sarasota homeowners including Gulf Gate, Bee Ridge, Fruitville, and north Sarasota neighborhoods.',
        zip: '34231, 34232, 34233, 34234, 34235, 34236, 34237, 34238, 34239, 34240, 34241, 34242, 34243',
    },
    {
        name: 'Lakewood Ranch',
        description: 'Florida\'s top-selling master-planned community. We provide irrigation services throughout all Lakewood Ranch villages.',
        zip: '34202, 34211, 34212',
    },
    {
        name: 'Palmetto',
        description: 'Just across the Manatee River from Bradenton. We serve all of Palmetto including Terra Ceia and Snead Island.',
        zip: '34220, 34221',
    },
    {
        name: 'Parrish',
        description: 'One of the fastest-growing areas in Manatee County. We serve new construction and established homes alike.',
        zip: '34219',
    },
    {
        name: 'Ellenton',
        description: 'Conveniently located near I-75. We serve residential properties throughout the Ellenton area.',
        zip: '34222',
    },
];

export default function ServiceAreaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Service Area
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Proudly serving homeowners across Manatee and Sarasota counties.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {areas.map((area) => (
                            <div key={area.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="h-6 w-6 text-[#4992DF]" />
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{area.name}</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">{area.description}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">ZIP codes: {area.zip}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center p-8 rounded-2xl bg-[#4992DF] text-white">
                        <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Area?</h2>
                        <p className="text-lg text-blue-50 mb-6 max-w-2xl mx-auto">
                            We may still be able to help. Give us a call and we&apos;ll let you know if we can service your location.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:941-538-2593">
                                <Button size="lg" className="bg-white text-[#4992DF] hover:bg-gray-100">
                                    Call 941-538-2593
                                </Button>
                            </a>
                            <Link href="/contact">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#4992DF]">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
