'use client';

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    function validate() {
        const errs: Record<string, string> = {};
        if (!formData.firstName.trim()) errs.firstName = 'First name is required';
        if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errs.email = 'Enter a valid email';
        }
        if (formData.phone && !/^[\d\s\-().+]+$/.test(formData.phone)) {
            errs.phone = 'Enter a valid phone number';
        }
        if (!formData.message.trim()) errs.message = 'Message is required';
        return errs;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong.');
                return;
            }
            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        } catch {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    }

    const inputClass = (field: string) =>
        `mt-1 block w-full rounded-md shadow-sm focus:border-[#4992DF] focus:ring-[#4992DF] dark:bg-zinc-800 dark:border-gray-700 dark:text-white sm:text-sm p-3 border ${
            errors[field] ? 'border-red-500' : 'border-gray-300'
        }`;

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-zinc-900 py-16 text-white md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Get in touch for a free estimate or to schedule a service.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Get a Free Quote
                            </h2>

                            {status === 'success' && (
                                <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                    <p>Thank you! We&apos;ll get back to you within 24 hours.</p>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mb-6 flex items-center gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300">
                                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                    <p>{errorMessage}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="first-name"
                                            className={inputClass('firstName')}
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        />
                                        {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="last-name"
                                            className={inputClass('lastName')}
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        />
                                        {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={inputClass('email')}
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className={inputClass('phone')}
                                        placeholder="(941) 555-5555"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className={inputClass('message')}
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>
                                <div>
                                    <Button type="submit" size="lg" className="w-full" isLoading={status === 'loading'}>
                                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Contact Information
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <MapPin className="h-6 w-6 text-[#4992DF] mr-4 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                810 56th Ave E<br />
                                                Bradenton, FL 34203
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Phone className="h-6 w-6 text-[#4992DF] mr-4 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                            <a href="tel:941-538-2593" className="text-gray-600 dark:text-gray-400 hover:text-[#4992DF]">
                                                941-538-2593
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <Mail className="h-6 w-6 text-[#4992DF] mr-4 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                            <a href="mailto:simplyirrigationllc@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#4992DF]">
                                                simplyirrigationllc@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5!2d-82.538!3d27.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z810+56th+Ave+E+Bradenton+FL+34203!5e0!3m2!1sen!2sus!4v1700000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Simply Irrigation LLC location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
