import React from 'react'
import certificate from '../../../assets/images/static/firm-registration/understainding_registration_of_business.svg';
import Image from 'next/image';

interface HeroProps { cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Registration of a business as a firm requires a different set of compliances and processes, we will be discussing in detail how a firm is registered. For registration as a firm, there can be two business structures that are- a Limited Liability Partnership( LLP) and a Partnership. We will be further discussing in detail about these structures, documents required to register the firm, steps for registration as well as the benefits of registering a firm.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Structure" className="scrollTo">
                                <li>Structure of Business</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents needed for Registering a firm</li>
                            </a>
                            <a href="#StepsForRegistering" className="scrollTo">
                                <li>Steps for Registering a Firm:</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Registering a Firm</li>
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
                <p className="small-heading text-center">Firm Registration Certificate [Sample]</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="An Overview of Firm Registration" className="certificate h-50 w-50" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
