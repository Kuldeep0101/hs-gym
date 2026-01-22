import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    name?: string;
}

const SEO = ({
    title = "He and She Gym — Aligarh's Elite Fitness Destination",
    description = "Join He and She Gym in Aligarh for premium fitness, personal training, and a welcoming environment for everyone. Book your free trial today!",
    type = "website",
    name = "He and She Gym"
}: SEOProps) => {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Gym",
        "name": "He and She Gym",
        "image": "https://heandshegym.com/logo.png",
        "@id": "https://heandshegym.com",
        "url": "https://heandshegym.com",
        "telephone": "+91 90545 89819",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gulzar Nagar",
            "addressLocality": "Aligarh",
            "postalCode": "202001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.8974,
            "longitude": 78.0880
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ],
                "opens": "06:00",
                "closes": "21:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/fitness_yard_gym/?hl=en"
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
