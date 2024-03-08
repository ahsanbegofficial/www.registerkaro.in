import React from 'react'
import certificate from '../../../assets/images/static/usa-company-registration/USA_Company_Registration_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Expansion to the United States may be revolutionary, opening up a universe of prospects and a large consumer base. However, entrepreneurs may find it difficult to navigate the complications of USA Company Registration. Company registration in the United States can be a complicated procedure, owing to the fact that the United States has a federal system, which means that both the federal and state governments have their own sets of requirements. To start a business, you must follow particular steps and observe federal, state, and local laws. We will go over the process of USA Company Registration in detail below.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of USA Company Registration</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types for USA Company Registration</li>
                            </a>
                            <a href="#LLC" className="scrollTo">
                                <li>LLC or C-Corporation: Choosing the Right Entity for Your Business</li>
                            </a>
                            <a href="#InfoAndDoc" className="scrollTo">
                                <li>Information and Documents Required for USA Company Registration</li>
                            </a>
                            <a href="#InformationRequired" className="scrollTo">
                                <li>Information Required</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                            <a href="#Business" className="scrollTo">
                                <li>Related Business Registrations</li>
                            </a>
                          
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>
                           
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">USA Company Registration</p>
                <div>
                    <Image alt="Get Online USA Company RegistrationExpansion to the United States may be revolutionary, opening up a universe of prospects and a large consumer base" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
