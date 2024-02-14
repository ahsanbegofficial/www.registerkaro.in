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
                        'name': 'Does a Private Limited Company in India require physical address or premise?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes, a Private Limited Company in India needs a physical location as all communication with the Company by various Government Authorities will be done to such physical location only.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Can a salaried person become the Company’s Director?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes, a salaried person can become the Company’s Director, but you need to go through the employment rules & ensure they allow you to do so'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'How many Directors are required for Private Limited Company Registration?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'At least 2 Directors are required for a Private Limited Company Registration.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What happens if you fail to fulfill the annual requirements of a Private Limited Company?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Non-compliance with annual requirements can lead to penalties comprising fines & potential disqualification of Directors.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Is it possible to convert Private Limited to an LLP?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes, a Private Limited Company in India can be converted into an LLP following the conditions & procedures outlined in the LLP Act, 2008 & Companies Act, 2013.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Is GST required for Private Limited Company in India?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'GST Registration is compulsory if an annual turnover of a Company exceeds Rs. 40 lakhs (for goods) & Rs. 20 lakhs (for services).'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What is the difference between Director and Shareholder?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'A Director is elected by Shareholders to manage the Company’s affairs whereas a Shareholder owns part of the Company via share ownership.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What is SPICe+ Form?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'SPICe+ or Simplified Proforma for Incorporating Company Electronically Plus is an integrated for Company Incorporation in India which simplifies the registration process.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What is DSC?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'DSC or Digital Signature Certificate is an established digital instrument for digital document signing & data storage.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'What is DIN?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'DIN or Director Identification Number is a unique identification number allotted by the Government to any individual intending to be a Director or an existing Company’s Director.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Can NRIs or Foreign Nationals become Directors in a Private Limited Company?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes, Foreign Nations or NRIs can become Directors of a Private Limited Company in India, but at least one Director should be an Indian Resident.'
                        }
                    },
                    {
                        '@type': 'Question',
                        'name': 'Can a Private Limited Company in India hold multiple businesses?',
                        'acceptedAnswer': {
                            '@type': 'Answer',
                            'text': 'Yes, a Private Limited Company can hold multiple businesses, but it should be mentioned in the MOA of the Company & approved by a Registrar.'
                        }
                    }
                ]
            }),
        }}
    />
);

export default FAQPage;
