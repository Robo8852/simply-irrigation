import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "About Us",
    description: "Meet Fernando Davila, owner of Simply Irrigation LLC. Licensed & insured irrigation professionals serving Bradenton, Sarasota, and Lakewood Ranch, FL.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        About Simply Irrigation LLC
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Dedicated to providing top-quality irrigation and landscaping solutions for homeowners in Bradenton, Sarasota, and surrounding areas.
                    </p>
                </div>
            </section>

            {/* Owner & Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative h-[400px] w-full rounded-2xl bg-gray-200 overflow-hidden shadow-xl">
                            {/* Placeholder for Fernando's photo */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100 dark:bg-zinc-800">
                                <span className="text-lg font-medium">Fernando Davila - Owner</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Meet Fernando Davila
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                With years of hands-on experience in the irrigation industry, Fernando founded Simply Irrigation LLC with a simple mission: to provide honest, reliable, and high-quality service to his community.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                We understand that a well-maintained irrigation system is crucial for a healthy landscape and water conservation. That's why we treat every property as if it were our own, ensuring every sprinkler head is adjusted perfectly and every pipe is leak-free.
                            </p>
                            <div className="pt-4">
                                <a href="tel:941-538-2593">
                                    <Button size="lg">Contact Fernando</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 dark:bg-zinc-900 py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Our Core Values
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            We build long-lasting relationships with our clients through trust and excellence.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="w-12 h-12 bg-[#4992DF]/10 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-[#4992DF]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Integrity</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We are honest about what your system needs and never upsell unnecessary repairs.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="w-12 h-12 bg-[#87B66D]/10 rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle className="h-6 w-6 text-[#87B66D]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Quality</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We use commercial-grade parts and industry-best practices for lasting results.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="w-12 h-12 bg-[#4992DF]/10 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-[#4992DF]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Reliability</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We respect your time. When we say we'll be there, we'll be there.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="w-12 h-12 bg-[#87B66D]/10 rounded-lg flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6 text-[#87B66D]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Local</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Proudly serving our neighbors in Bradenton and the surrounding communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
