import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceData {
    title: string;
    description: string;
    hero: string;
    process: { step: string; detail: string }[];
    benefits: string[];
    faqs: { q: string; a: string }[];
}

const services: Record<string, ServiceData> = {
    installation: {
        title: 'Irrigation Installation',
        hero: 'Custom Sprinkler System Installation in Bradenton, FL',
        description:
            'A properly designed irrigation system keeps your lawn healthy while saving water and money. At Simply Irrigation, we design and install custom sprinkler systems tailored to your property — whether you have a small residential yard or a large commercial landscape. We use top-quality Rain Bird and Hunter components built to handle Florida\'s climate.',
        process: [
            { step: 'Free On-Site Consultation', detail: 'We walk your property, assess soil type, sun exposure, plant types, and water pressure to design the ideal system layout.' },
            { step: 'Custom System Design', detail: 'We create a zone-by-zone plan that ensures every area of your lawn gets the right amount of water — no dry spots, no waste.' },
            { step: 'Professional Installation', detail: 'Our crew installs your system with minimal disruption to your yard. We use commercial-grade pipes, heads, and controllers.' },
            { step: 'Testing & Walkthrough', detail: 'We test every zone, adjust heads for perfect coverage, and walk you through your new controller so you know exactly how it works.' },
        ],
        benefits: [
            'Even water coverage across your entire lawn',
            'Lower water bills with efficient zone design',
            'Smart controller options for weather-based scheduling',
            'Commercial-grade components that last years',
            'Increased property value',
        ],
        faqs: [
            { q: 'How long does irrigation installation take?', a: 'Most residential installations take 1–2 days depending on the size of the property and number of zones required.' },
            { q: 'What brands do you use?', a: 'We primarily install Rain Bird and Hunter products — the two most trusted names in irrigation. Both offer excellent warranties and long-term reliability.' },
            { q: 'Do I need a permit for a sprinkler system?', a: 'In most Manatee County areas, yes. We handle all permitting as part of our installation service so you don\'t have to worry about it.' },
            { q: 'How much does a new sprinkler system cost?', a: 'Pricing depends on your property size, number of zones, and controller type. We provide free estimates — call us at 941-538-2593 for a quote.' },
        ],
    },
    repair: {
        title: 'Irrigation System Repair',
        hero: 'Fast, Reliable Sprinkler Repair in Bradenton & Sarasota',
        description:
            'Broken sprinkler heads, leaking pipes, faulty valves, and controller malfunctions waste water and damage your lawn. Simply Irrigation provides fast, same-week repair service for all irrigation system brands. We diagnose the problem quickly and fix it right the first time — so you\'re not paying for repeat visits.',
        process: [
            { step: 'Diagnosis', detail: 'We run each zone and inspect your system to find exactly what\'s wrong — whether it\'s a broken head, cracked pipe, bad solenoid, or wiring issue.' },
            { step: 'Upfront Pricing', detail: 'Before we start any work, we explain the problem and give you a clear price. No surprises.' },
            { step: 'Expert Repair', detail: 'We carry common parts on our truck so most repairs are completed in a single visit. We use the same commercial-grade parts as our new installations.' },
            { step: 'System Check', detail: 'After the repair, we test the entire system to make sure everything is running properly.' },
        ],
        benefits: [
            'Same-week service availability',
            'Most repairs completed in one visit',
            'All brands serviced — Rain Bird, Hunter, Toro, and more',
            'Honest diagnosis with no unnecessary upsells',
            'Stop wasting water and money on leaks',
        ],
        faqs: [
            { q: 'How do I know if my sprinkler system needs repair?', a: 'Common signs include: dry patches on your lawn, water pooling in one area, sprinkler heads that don\'t pop up, high water bills, or your controller showing errors.' },
            { q: 'Can you repair any brand of irrigation system?', a: 'Yes. We service all major brands including Rain Bird, Hunter, Toro, Irritrol, and Weathermatic.' },
            { q: 'How quickly can you come out for a repair?', a: 'We typically schedule repairs within the same week. For emergencies like a major leak, we do our best to come out sooner.' },
            { q: 'Is it better to repair or replace my old system?', a: 'It depends on the age and condition. If your system is over 15 years old and requires frequent repairs, replacement may be more cost-effective. We\'ll give you an honest assessment.' },
        ],
    },
    maintenance: {
        title: 'Irrigation Maintenance',
        hero: 'Keep Your Sprinkler System Running Efficiently Year-Round',
        description:
            'Regular maintenance prevents costly repairs and keeps your lawn looking its best. Florida\'s heat, soil conditions, and hard water can take a toll on irrigation systems. Our maintenance service catches small problems before they become expensive ones — saving you money and keeping your landscape green.',
        process: [
            { step: 'Full System Inspection', detail: 'We check every zone, head, valve, and pipe for leaks, clogs, misalignment, and wear.' },
            { step: 'Head Adjustment & Cleaning', detail: 'We clean clogged nozzles, adjust spray patterns, and replace any worn heads to ensure even coverage.' },
            { step: 'Controller Check', detail: 'We verify your watering schedule matches current seasonal needs and adjust run times for optimal efficiency.' },
            { step: 'Written Report', detail: 'You get a report of what we found, what we fixed, and any recommendations for future attention.' },
        ],
        benefits: [
            'Prevent expensive emergency repairs',
            'Reduce water waste and lower bills',
            'Keep your lawn evenly green year-round',
            'Extend the life of your irrigation system',
            'Stay compliant with local watering restrictions',
        ],
        faqs: [
            { q: 'How often should I have my sprinkler system serviced?', a: 'We recommend a full inspection at least twice a year — once in spring before heavy use and once in fall. Quarterly service is ideal for Florida properties.' },
            { q: 'What does a maintenance visit include?', a: 'We inspect all zones, clean and adjust heads, check for leaks, test the controller, and verify proper coverage across your entire lawn.' },
            { q: 'Do you offer maintenance plans?', a: 'Yes. We offer seasonal and quarterly maintenance packages. Call us at 941-538-2593 to discuss the best plan for your property.' },
            { q: 'Can maintenance really save me money?', a: 'Absolutely. A small leak can waste thousands of gallons per month. Catching issues early prevents both water waste and costly emergency repairs.' },
        ],
    },
    landscaping: {
        title: 'Landscaping Services',
        hero: 'Professional Landscaping in Bradenton & Surrounding Areas',
        description:
            'A great irrigation system deserves a great landscape. Simply Irrigation offers professional landscaping services including sod installation, mulching, planting, bed design, and yard cleanups. We work with Florida-friendly plants that thrive in our climate — so your yard looks beautiful without requiring excessive water or maintenance.',
        process: [
            { step: 'Consultation & Design', detail: 'We discuss your goals, budget, and preferences, then create a plan that works with your property\'s sun, shade, and irrigation setup.' },
            { step: 'Site Preparation', detail: 'We clear and grade the area, prepare the soil, and ensure proper drainage before any planting or sod work begins.' },
            { step: 'Installation', detail: 'Whether it\'s sod, plants, mulch, or stone, our crew installs everything with attention to detail and long-term growth.' },
            { step: 'Final Walkthrough', detail: 'We review the finished work with you and provide care instructions so your new landscape thrives.' },
        ],
        benefits: [
            'Boost your home\'s curb appeal and value',
            'Florida-friendly plants that thrive in our climate',
            'Coordinated with your irrigation system for optimal watering',
            'Professional sod installation for instant results',
            'Seasonal color and low-maintenance options',
        ],
        faqs: [
            { q: 'What landscaping services do you offer?', a: 'We offer sod installation, mulching, planting, flower bed design, yard cleanups, and basic hardscape work like edging and borders.' },
            { q: 'Do you use Florida-native plants?', a: 'Yes. We prioritize Florida-friendly and native plants that are drought-tolerant and well-suited to our soil and climate conditions.' },
            { q: 'Can you coordinate landscaping with a new irrigation installation?', a: 'Absolutely — that\'s one of our specialties. We can design your irrigation zones around your new landscape plan for maximum efficiency.' },
            { q: 'How much does landscaping cost?', a: 'Costs vary based on the scope of work. We provide free estimates — call 941-538-2593 or fill out our contact form to get started.' },
        ],
    },
    'tree-removal': {
        title: 'Tree Removal',
        hero: 'Safe, Professional Tree Removal in Bradenton, FL',
        description:
            'Dead, damaged, or overgrown trees can pose a safety hazard and block sunlight from your lawn. Simply Irrigation provides safe, efficient tree removal for residential properties. Whether you need a single tree taken down or a full yard clearing, we handle it with the right equipment and attention to your property.',
        process: [
            { step: 'Assessment', detail: 'We evaluate the tree\'s size, condition, location, and any obstacles like power lines, fences, or structures nearby.' },
            { step: 'Plan & Quote', detail: 'We provide a clear quote and explain our approach — including how we\'ll protect your property during removal.' },
            { step: 'Safe Removal', detail: 'Our crew removes the tree in sections as needed, ensuring safety for your home, landscaping, and irrigation system.' },
            { step: 'Cleanup', detail: 'We haul away all debris and leave your yard clean. Stump grinding is available as an add-on service.' },
        ],
        benefits: [
            'Eliminate safety hazards from dead or leaning trees',
            'Improve sunlight for your lawn and landscape',
            'Protect your irrigation system from root damage',
            'Clean removal with full debris hauling',
            'Stump grinding available',
        ],
        faqs: [
            { q: 'Do I need a permit to remove a tree?', a: 'In some cases, yes. Manatee County requires permits for certain tree sizes and species. We can help you determine if a permit is needed.' },
            { q: 'How much does tree removal cost?', a: 'Pricing depends on the tree\'s size, location, and complexity. We provide free on-site estimates.' },
            { q: 'Do you offer stump grinding?', a: 'Yes. Stump grinding is available as an add-on service after tree removal.' },
            { q: 'Can tree roots damage my irrigation system?', a: 'Yes — invasive roots are one of the most common causes of irrigation pipe damage. Removing problem trees can actually protect your system long-term.' },
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    // Need to handle this synchronously for static generation
    return params.then(({ slug }) => {
        const service = services[slug];
        if (!service) return {};
        return {
            title: `${service.title} | Simply Irrigation LLC`,
            description: service.description.slice(0, 160),
        };
    });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug];
    if (!service) notFound();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        {service.hero}
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                        {service.description}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:941-538-2593">
                            <Button size="lg">Call 941-538-2593</Button>
                        </a>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black">
                                Get a Free Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
                        What to Expect
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {service.process.map((item, i) => (
                            <div key={i} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-zinc-900">
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4992DF] text-white font-bold text-lg">
                                    {i + 1}
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{item.step}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
                        Why Choose Simply Irrigation
                    </h2>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-zinc-950 shadow-sm border border-gray-100 dark:border-gray-800">
                                <CheckCircle className="h-6 w-6 text-[#87B66D] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900 dark:text-white font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {service.faqs.map((faq, i) => (
                            <details key={i} className="group rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-zinc-900">
                                <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden">
                                    {faq.q}
                                    <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#4992DF] text-white">
                <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-blue-50 max-w-2xl mx-auto mb-8">
                        Contact us today for a free consultation and estimate. We serve Bradenton, Sarasota, Lakewood Ranch, Palmetto, and surrounding areas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="bg-white text-[#4992DF] hover:bg-gray-100">
                                Contact Us Now
                            </Button>
                        </Link>
                        <a href="tel:941-538-2593">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#4992DF]">
                                Call 941-538-2593
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
