import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-black/50">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-[#4992DF]">Simply</span>
                            <span className="text-xl font-bold text-[#87B66D]">Irrigation</span>
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Professional irrigation services in Bradenton, FL. We ensure your lawn stays green and healthy.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-[#4992DF] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[#4992DF] transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#4992DF] transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-[#4992DF] transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/service-area" className="hover:text-[#4992DF] transition-colors">
                                    Service Area
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="hover:text-[#4992DF] transition-colors">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                            Services
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li>
                                <Link href="/services/installation" className="hover:text-[#4992DF] transition-colors">
                                    Installation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/repair" className="hover:text-[#4992DF] transition-colors">
                                    Repair
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/maintenance" className="hover:text-[#4992DF] transition-colors">
                                    Maintenance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-[#4992DF]" />
                                <span>810 56th Ave E, Bradenton, FL 34203</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-[#4992DF]" />
                                <a href="tel:941-538-2593" className="hover:text-[#4992DF] transition-colors">
                                    941-538-2593
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-[#4992DF]" />
                                <a href="mailto:simplyirrigationllc@gmail.com" className="hover:text-[#4992DF] transition-colors">
                                    simplyirrigationllc@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            &copy; Costa Del Sol Digital 2026. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <Link href="/privacy" className="hover:text-[#4992DF] transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-[#4992DF] transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
