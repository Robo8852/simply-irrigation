import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Contact Simply Irrigation LLC for a free estimate on sprinkler repair, irrigation installation, and maintenance in Bradenton, Sarasota, and Lakewood Ranch, FL. Call 941-538-2593.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
