import React from 'react';

const Organization: React.FC = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'legalName': 'RegisterKaro',
                'url': 'https://registerkaro.in',
                'logo': 'https://www.registerkaro.in/_next/static/media/Logo.77348f99.png',
                'description': 'The Official RegisterKaro',
                'contactPoint': {
                    '@type': 'ContactPoint',
                    'telephone': '+918447746183',
                    'contactType': 'customer service'
                }
            }),
        }}
    />
);

export default Organization;
