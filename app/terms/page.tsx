import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service for Simply Irrigation LLC. Read our terms and conditions for using our website and services.',
};

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
                    <p className="mt-4 text-gray-300">Last updated: February 2026</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose dark:prose-invert">
                    <h2>Acceptance of Terms</h2>
                    <p>
                        By accessing and using the Simply Irrigation LLC website and services, you agree to be bound by
                        these Terms of Service. If you do not agree with any part of these terms, please do not use our
                        website or services.
                    </p>

                    <h2>Services</h2>
                    <p>
                        Simply Irrigation LLC provides irrigation installation, repair, maintenance, landscaping, and tree
                        removal services in the Bradenton, Sarasota, and surrounding areas of Florida. All services are
                        subject to availability and scheduling.
                    </p>

                    <h2>Estimates and Pricing</h2>
                    <ul>
                        <li>All estimates are provided free of charge and are valid for 30 days unless otherwise stated.</li>
                        <li>Final pricing may vary from estimates if additional work is required beyond the original scope. We will communicate any changes before proceeding.</li>
                        <li>Payment is due upon completion of work unless other arrangements have been made in writing.</li>
                    </ul>

                    <h2>Warranties</h2>
                    <p>
                        We stand behind our work. Specific warranty terms are provided at the time of service and may vary
                        by project type. Manufacturer warranties on parts and equipment are passed through to the customer.
                    </p>

                    <h2>Limitation of Liability</h2>
                    <p>
                        Simply Irrigation LLC shall not be liable for any indirect, incidental, or consequential damages
                        arising from the use of our services or website. Our liability is limited to the amount paid for
                        the specific service in question.
                    </p>

                    <h2>Website Use</h2>
                    <ul>
                        <li>The content on this website is for general informational purposes only.</li>
                        <li>We make reasonable efforts to ensure accuracy but do not guarantee that all information is current or error-free.</li>
                        <li>You may not use this website for any unlawful purpose or in a way that could damage or impair the site.</li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>
                        All content on this website, including text, images, logos, and design elements, is the property
                        of Simply Irrigation LLC and is protected by copyright law. You may not reproduce or distribute
                        any content without our written permission.
                    </p>

                    <h2>Governing Law</h2>
                    <p>
                        These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in
                        the courts of Manatee County, Florida.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions about these Terms of Service, please contact us:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:simplyirrigationllc@gmail.com">simplyirrigationllc@gmail.com</a></li>
                        <li>Phone: <a href="tel:941-538-2593">941-538-2593</a></li>
                        <li>Address: 810 56th Ave E, Bradenton, FL 34203</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
