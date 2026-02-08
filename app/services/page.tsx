import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Axe, Droplets, Hammer, Shovel, Trees } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Irrigation installation, repair, maintenance, landscaping, and tree removal in Bradenton, FL. Expert service from Simply Irrigation LLC. Call 941-538-2593.",
};

const services = [
    {
        icon: Droplets,
        title: "Irrigation Installation",
        description: "Custom-designed sprinkler systems required for your landscape's specific needs.",
        href: "/services/installation",
        color: "#4992DF",
    },
    {
        icon: Hammer,
        title: "System Repair",
        description: "Fast and reliable repairs for broken heads, leaks, controller issues, and wiring problems.",
        href: "/services/repair",
        color: "#4992DF",
    },
    {
        icon: Trees,
        title: "Landscaping",
        description: "Enhance your curb appeal with our professional landscaping services.",
        href: "/services/landscaping",
        color: "#87B66D",
    },
    {
        icon: Shovel,
        title: "Irrigation Maintenance",
        description: "Regular check-ups to ensure your system is running efficiently and effectively.",
        href: "/services/maintenance",
        color: "#87B66D",
    },
    {
        icon: Axe,
        title: "Tree Removal",
        description: "Safe, professional tree removal to protect your property and landscape.",
        href: "/services/tree-removal",
        color: "#87B66D",
    },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Our Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive irrigation and landscaping solutions tailored to your property's needs.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-zinc-900">
                                <div
                                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                                    style={{ backgroundColor: `${service.color}20`, color: service.color }}
                                >
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                                <p className="mb-6 flex-grow text-gray-600 dark:text-gray-400">
                                    {service.description}
                                </p>
                                <Link href={service.href} className="inline-flex items-center font-medium hover:underline" style={{ color: service.color }}>
                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-zinc-900 py-16 md:py-24 text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        We understand that every property is unique. Contact us today to discuss your specific requirements.
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Get a Free Quote</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
