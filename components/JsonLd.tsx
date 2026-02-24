export function JsonLd({ data }: { data: Record<string, unknown> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://simplyirrigationllc.com',
    name: 'Simply Irrigation LLC',
    image: 'https://simplyirrigationllc.com/logo.svg',
    telephone: '941-538-2593',
    email: 'simplyirrigationllc@gmail.com',
    url: 'https://simplyirrigationllc.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '810 56th Ave E',
        addressLocality: 'Bradenton',
        addressRegion: 'FL',
        postalCode: '34203',
        addressCountry: 'US',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.4799,
        longitude: -82.5379,
    },
    areaServed: [
        { '@type': 'City', name: 'Bradenton' },
        { '@type': 'City', name: 'Sarasota' },
        { '@type': 'City', name: 'Lakewood Ranch' },
        { '@type': 'City', name: 'Palmetto' },
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '14:00',
        },
    ],
    priceRange: '$$',
    sameAs: [

        'https://www.facebook.com/simplyirrigationllc',
        'https://www.instagram.com/simplyirrigationllc/',
    ],
};

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Simply Irrigation LLC',
    url: 'https://simplyirrigationllc.com',
    logo: 'https://simplyirrigationllc.com/logo.svg',
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '941-538-2593',
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: ['English', 'Spanish'],
    },
    sameAs: [

        'https://www.facebook.com/simplyirrigationllc',
        'https://www.instagram.com/simplyirrigationllc/',
    ],
};
