import React, { FC } from 'react';
interface WebPageProops {
    hf: string;
    tl: string;
    date: string;
    modified: string
    description: string
}

const WebPage: FC<WebPageProops> = ({ hf, tl, date, modified, description }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                '@id': hf,
                'url': hf,
                'name': tl,
                'thumbnailUrl': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                'datePublished': date,
                'dateModified': modified,
                'description': description,
                'inLanguage': 'en-US',
                "isPartOf": {
                    "@type": "WebSite",
                    '@id': hf,
                    "url": "https://www.registerkaro.in/blog/",
                    'name': tl,
                    'description': description,
                    "inLanguage": "en-US",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `${hf}?search_term_string={actual_search_term}`
                        },
                        "query-input": {
                            "@type": "PropertyValueSpecification",
                            "valueRequired": true,
                            "valueName": "actual_search_term"
                        }
                    }
                },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "@id": hf,
                    "inLanguage": "en-US",
                    'url': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                    "contentUrl": "https://d3l793awsc655b.cloudfront.net/blog/wp-content/uploads/2024/01/Trademark-Class-25.png",
                    "width": 1025,
                    "height": 536,
                    "caption": tl
                },
                "image": {
                    "@type": "ImageObject",
                    "@id": hf,
                    "inLanguage": "en-US",
                    'url': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                    'contentUrl': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                    "width": 1025,
                    "height": 536,
                    "caption": tl
                },
                "author": {
                    "@type": "Person",
                    "@id": hf,
                    "name": "Santanu Ghosh",
                    "description": tl,
                    'url': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                    "image": {
                        "@type": "ImageObject",
                        "@id": hf,
                        "inLanguage": "en-US",
                        'url': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                        'contentUrl': 'https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfullLogo.fff9f5f2.jpg&w=1080&q=75',
                        "caption": "Santanu Ghosh"
                    }
                },
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "@id": hf,
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": {
                                "@type": "Thing",
                                "@id": "https://www.registerkaro.in/post/"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": tl
                        }
                    ]
                },
                "potentialAction": {
                    "@type": "ReadAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": hf
                    }
                }
            }),
        }}
    />
);

export default WebPage;
