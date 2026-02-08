import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Droplets, Hammer, Shovel, Star, Trees } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-900 text-white pb-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Lush green lawn with sprinkler system"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto backdrop-blur-sm bg-black/30 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl drop-shadow-lg">
              Expert Irrigation & <span className="text-[#87B66D]">Landscaping</span> Services
            </h1>
            <p className="text-lg text-gray-100 sm:text-xl drop-shadow-md max-w-2xl mx-auto">
              Keep your lawn green and healthy with Simply Irrigation LLC. We specialize in installation, repair, and maintenance for homes in Bradenton, FL.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <a href="tel:941-538-2593">
                <Button size="lg" className="w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">
                  Call Now: 941-538-2593
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white hover:text-black border-white hover:bg-white shadow-lg backdrop-blur-md bg-white/10 hover:scale-105 transition-transform">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-200">
              <div className="flex items-center bg-black/40 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span>5.0 Rating</span>
              </div>
              <div className="h-4 w-px bg-gray-400"></div>
              <div className="bg-black/40 px-3 py-1 rounded-full">Licensed & Insured</div>
            </div>
          </div>
        </div>

        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-16 sm:h-24 lg:h-32 text-white dark:text-zinc-950 fill-current">
            <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-12 pb-20 bg-white dark:bg-zinc-950 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#4992DF]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-[#87B66D]/5 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Professional Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              From minor repairs to complete system installations, we have the expertise to handle all your irrigation needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900/50 dark:backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4992DF]/10 text-[#4992DF] group-hover:bg-[#4992DF] group-hover:text-white transition-colors duration-300">
                <Droplets className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Irrigation Installation</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Custom-designed sprinkler systems required for your landscape's specific needs, ensuring optimal coverage and water efficiency.
              </p>
              <Link href="/services/installation" className="inline-flex items-center font-medium text-[#4992DF] hover:underline group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900/50 dark:backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4992DF]/10 text-[#4992DF] group-hover:bg-[#4992DF] group-hover:text-white transition-colors duration-300">
                <Hammer className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">System Repair</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Fast and reliable repairs for broken heads, leaks, controller issues, and wiring problems to prevent water waste.
              </p>
              <Link href="/services/repair" className="inline-flex items-center font-medium text-[#4992DF] hover:underline group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-zinc-900/50 dark:backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#87B66D]/10 text-[#87B66D] group-hover:bg-[#87B66D] group-hover:text-white transition-colors duration-300">
                <Trees className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Landscaping</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                Enhance your curb appeal with our professional landscaping services, including planting, sod installation, and mulching.
              </p>
              <Link href="/services/landscaping" className="inline-flex items-center font-medium text-[#87B66D] hover:underline group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
                Why Homeowners Choose Simply Irrigation
              </h2>
              <div className="space-y-6">
                <div className="flex p-4 rounded-xl bg-white dark:bg-zinc-950 shadow-sm border border-gray-100 dark:border-gray-800">
                  <CheckCircle className="h-6 w-6 text-[#87B66D] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Licensed & Experienced</h3>
                    <p className="text-gray-600 dark:text-gray-400">Owned and operated by Fernando Davila, a seasoned irrigation professional.</p>
                  </div>
                </div>
                <div className="flex p-4 rounded-xl bg-white dark:bg-zinc-950 shadow-sm border border-gray-100 dark:border-gray-800">
                  <CheckCircle className="h-6 w-6 text-[#87B66D] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Premium Quality Parts</h3>
                    <p className="text-gray-600 dark:text-gray-400">We use only the best components from trusted brands like Rain Bird and Hunter.</p>
                  </div>
                </div>
                <div className="flex p-4 rounded-xl bg-white dark:bg-zinc-950 shadow-sm border border-gray-100 dark:border-gray-800">
                  <CheckCircle className="h-6 w-6 text-[#87B66D] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Prompt & Reliable</h3>
                    <p className="text-gray-600 dark:text-gray-400">We show up on time and complete the job right the first time.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="secondary" className="shadow-md hover:shadow-lg transition-shadow">Meet the Team</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png" // Reusing hero image for now, can be replaced later
                alt="Irrigation system demonstration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4992DF]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4992DF] text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 drop-shadow-md">
            Ready to Upgrade Your Irrigation System?
          </h2>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto mb-8 drop-shadow-sm">
            Contact us today for a free consultation and estimate. Let us help you maintain a beautiful, healthy lawn.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#4992DF] hover:bg-gray-100 w-full sm:w-auto shadow-lg">
                Contact Us Now
              </Button>
            </Link>
            <a href="tel:941-538-2593">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#4992DF] w-full sm:w-auto shadow-lg backdrop-blur-sm bg-white/10">
                Call 941-538-2593
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
