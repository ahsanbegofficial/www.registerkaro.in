import React from 'react';

const Product: React.FC = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Product',
                'name': 'Private Limited Company Registration',
                'image': 'https://registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpvt-desktop.5c88092a.jpg&w=640&q=75',
                'description': 'Register your company in just 14 days',
                'brand': {
                    '@type': 'Brand',
                    'name': 'RegisterKaro'
                },
                'aggregateRating': {
                    '@type': 'AggregateRating',
                    'ratingValue': '4.8',
                    'reviewCount': '9356',
                    'worstRating': '0',
                    'bestRating': '5'
                },
                'offers': {
                    '@type': 'offer',
                    'price': '1999',
                    'priceCurrency': 'INR',
                    'availability': 'http://schema.org/InStock',
                    'url': 'https://registerkaro.in/private-limited-company-registration'
                }
            }),
        }}
    />
);

export default Product;
