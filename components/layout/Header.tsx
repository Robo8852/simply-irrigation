'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname.startsWith(href);

    return (
        <>
            <header
                className={cn(
                    'sticky top-0 z-50 w-full border-b border-gray-800 text-white transition-all duration-300',
                    scrolled
                        ? 'bg-black/95 backdrop-blur-md shadow-lg'
                        : 'bg-black'
                )}
            >
                <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.svg" alt="Simply Irrigation LLC" width={180} height={67} priority />
                    </Link>

                    <div className="flex items-center gap-6">
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'text-sm font-semibold uppercase tracking-wide transition-colors relative py-1',
                                        isActive(link.href)
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                    )}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4992DF] rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        <div className="hidden md:block h-6 w-px bg-gray-700" />

                        <a href="tel:941-538-2593" className="hidden sm:block">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Phone size={16} />
                                <span className="hidden lg:inline">941-538-2593</span>
                            </Button>
                        </a>
                        <Link href="/contact" className="hidden sm:block">
                            <Button size="sm">Get Quote</Button>
                        </Link>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="relative md:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileOpen}
                        >
                            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
                            <div className="relative w-6 h-5">
                                <span
                                    className={cn(
                                        'absolute left-0 h-0.5 w-6 bg-white transition-all duration-300',
                                        mobileOpen ? 'top-2.5 rotate-45' : 'top-0'
                                    )}
                                />
                                <span
                                    className={cn(
                                        'absolute left-0 top-2.5 h-0.5 w-6 bg-white transition-all duration-300',
                                        mobileOpen ? 'opacity-0' : 'opacity-100'
                                    )}
                                />
                                <span
                                    className={cn(
                                        'absolute left-0 h-0.5 w-6 bg-white transition-all duration-300',
                                        mobileOpen ? 'top-2.5 -rotate-45' : 'top-5'
                                    )}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden',
                    mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={cn(
                    'fixed top-0 right-0 z-50 h-full w-72 bg-zinc-900 shadow-2xl transition-transform duration-300 ease-in-out md:hidden',
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                    <span className="text-lg font-bold text-white">Menu</span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="text-gray-400 hover:text-white"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex flex-col p-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                                'text-lg font-medium py-3 px-4 rounded-lg transition-colors',
                                isActive(link.href)
                                    ? 'text-[#4992DF] bg-[#4992DF]/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-6 space-y-4 border-t border-gray-800">
                    <a href="tel:941-538-2593" className="flex items-center gap-3 text-gray-300 hover:text-[#4992DF] transition-colors">
                        <Phone size={20} />
                        <span className="text-lg font-medium">941-538-2593</span>
                    </a>
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full" size="lg">Get a Free Quote</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
