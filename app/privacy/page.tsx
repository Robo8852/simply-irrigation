import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for Simply Irrigation LLC. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
                    <p className="mt-4 text-gray-300">Last updated: February 2026</p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose dark:prose-invert">
                    <h2>Introduction</h2>
                    <p>
                        Simply Irrigation LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
                        protecting the personal information you share with us. This Privacy Policy explains how we collect,
                        use, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you fill out our contact form or request a quote.</li>
                        <li><strong>Service Information:</strong> Details about your property and irrigation needs that you provide during consultations.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs, collected through analytics tools.</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Respond to your inquiries and provide quotes</li>
                        <li>Schedule and deliver our services</li>
                        <li>Communicate with you about your service appointments</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2>Information Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your
                        information with trusted service providers who assist us in operating our website and delivering our
                        services, provided they agree to keep your information confidential.
                    </p>

                    <h2>Data Security</h2>
                    <p>
                        We implement reasonable security measures to protect your personal information from unauthorized
                        access, alteration, or disclosure. However, no method of transmission over the Internet is 100%
                        secure.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Our website may use cookies and similar tracking technologies to improve your browsing experience
                        and analyze website traffic. You can control cookie settings through your browser preferences.
                    </p>

                    <h2>Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Request access to the personal information we hold about you</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt out of marketing communications</li>
                    </ul>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy, please contact us at:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:simplyirrigationllc@gmail.com">simplyirrigationllc@gmail.com</a></li>
                        <li>Phone: <a href="tel:941-538-2593">941-538-2593</a></li>
                        <li>Address: 810 56th Ave E, Bradenton, FL 34203</li>
                    </ul>

                    <h2>Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with
                        an updated effective date.
                    </p>
                </div>
            </section>
        </div>
    );
}
