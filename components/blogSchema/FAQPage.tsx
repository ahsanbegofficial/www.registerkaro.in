import React from 'react';

const FAQPage: React.FC = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                'mainEntity': [
                    {
                        '@type': 'Question',
                        'name': 'Is it mandatory for apparel and clothing items to be classified under Class 25?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'While not legally mandatory, it is strongly recommended that apparel and clothing items fall under Class 25 for trademark protection in India. This ensures your application aligns with the Nice Classification system and optimizes the review process.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Can accessories such as hats, belts, and gloves be registered under Class 25?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Absolutely! Hats, belts, and gloves specifically worn with clothing are included in Class 25. However, specialized protective gloves or sports-specific belts might fall under different classes based on their intended use.'
                        }
                    }
                ]
            }),
        }}
    />
);

export default FAQPage;
