import { Mail, Phone } from 'lucide-react';

export default function BusinessCard() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl bg-[#212128] p-8 shadow-2xl sm:p-12">
                {/* Dynamic Background Glow */}
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#4992DF]/20 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#87B66D]/20 blur-3xl"></div>

                {/* Logo Section */}
                <div className="relative z-10 mb-12 flex flex-col items-center">
                    {/* Blue Swoosh (simulated with CSS for now, can be SVG later) */}
                    <div className="absolute -top-6 left-1/2 h-32 w-full -translate-x-1/2 rounded-[100%] border-t-4 border-[#4992DF] opacity-80 blur-[1px]"></div>

                    <div className="relative z-20 text-center">
                        <h1 className="font-sans text-6xl font-bold tracking-tight text-[#4992DF] sm:text-7xl">
                            Simply
                        </h1>
                        <div className="flex items-baseline justify-center">
                            <h1 className="font-sans text-6xl font-bold tracking-tight text-[#87B66D] sm:text-7xl">
                                Irrigation
                            </h1>
                            <span className="ml-1 text-2xl font-bold text-[#87B66D] sm:text-4xl">.LLC</span>
                        </div>
                        {/* Bottom Swoosh */}
                        <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-[100%] border-b-4 border-[#4992DF] opacity-80 blur-[1px]"></div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="relative z-10 flex flex-col space-y-4 text-white">
                    <h2 className="text-3xl font-bold tracking-wide">Fernando Davila</h2>

                    <div className="flex flex-col space-y-2 text-lg sm:text-xl">
                        <a
                            href="tel:941-538-2593"
                            className="flex items-center space-x-3 transition-colors hover:text-[#4992DF]"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                                <Phone size={18} />
                            </div>
                            <span className="tracking-wider">941-538-2593</span>
                        </a>

                        <a
                            href="mailto:simplyirrigationllc@gmail.com"
                            className="flex items-center space-x-3 transition-colors hover:text-[#87B66D]"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10">
                                <Mail size={18} />
                            </div>
                            <span className="tracking-wider">simplyirrigationllc@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
