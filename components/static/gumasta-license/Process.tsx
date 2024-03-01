import React from 'react'
import certificate from '../../../assets/images/static/gumasta-license/under_stand_gumasta_license_certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In order to legally operate a business anywhere in the nation, one must first obtain a registration under the Shops and Establishment Act. In addition to having unique problems of their own, all of { cityName }’s states have also passed state-specific laws pertaining to stores and establishments. The local government, which is essentially the Municipal Corporation, provides registration in accordance with the rules of this state-specific statute for any kind of business to have a physical presence in { cityName }. Maharashtra is one of the states that oversees these registrations. One such registration certificate that the Bombay Shops and Establishment Act in Mumbai issues is the Gumasta license. The Municipal Corporation of Greater Mumbai oversees the application procedure.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents required for Gumasta License</li>
                            </a>
                            <a href="#ProcessForObtaining" className="scrollTo">
                                <li>Process for obtaining Gumasta License</li>
                            </a>
                            <a href="#RenewalGumasta" className="scrollTo">
                                <li>Renewal of Gumasta License</li>
                            </a>
                            <a href="#HowRegisterKaro" className="scrollTo">
                                <li>How does RegisterKaro help in the process?</li>
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
                <p className="small-heading text-center">Gumasta License Certificate [Sample]</p>
                <div>
                    <Image alt="Understand Gumasta License Certificate" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
