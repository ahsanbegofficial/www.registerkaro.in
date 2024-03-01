import React from 'react'
import certificate from '../../../assets/images/static/iso-certification/online_iso_certification_in_india.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In 1947, the International Organisation for Standardisation (ISO) came into being to establish global quality standards for businesses. With members from 164 countries, ISO has crafted specifications, guidelines, and requirements governing Quality Assurance (QA) across diverse industries and technologies. ISO Certification serves as a stamp of approval, affirming that a management system, service, documentation procedure, or manufacturing process meets essential standards for standardization and quality assurance. ISO, an independent international organization, focuses on developing standards to ensure the safety, efficiency, and quality of products, services, and systems.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ISOFramework" className="scrollTo">
                                <li>ISO Framework & Controls</li>
                            </a>
                            <a href="#DifferentTypes" className="scrollTo">
                                <li>What are the Different Types of ISO Standards in { cityName }?</li>
                            </a>
                            <a href="#BenefitsISO" className="scrollTo">
                                <li>Benefits of ISO Certification In { cityName }</li>
                            </a>
                            <a href="#WhichISO" className="scrollTo">
                                <li>Which ISO Certification is good for any business?</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for ISO Certification in { cityName }</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Obtaining ISO Certification in { cityName }</li>
                            </a>
                            <a href="#WhatISO" className="scrollTo">
                                <li>What is an ISO Audit and its types?</li>
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
                <p className="small-heading text-center">ISO Certification Certificate [Sample]</p>
                <div>
                    <Image alt="ISO Certification Certificate,In 1947, the International Organisation for Standardisation (ISO) came into being to establish global quality standards for businesses. With members from 164 countries" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
