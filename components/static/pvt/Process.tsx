import React from 'react'
import certificate from '../../../assets/images/static/private-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Starting a business is not always a cakewalk, but becomes a series of sleepless nights, and stressful days. The struggle becomes real if the research department has not received its call of time. The research to understand the kind of company one should choose for company registration and the prerequisites that come along with that is an extensive process to be taken care of. If the private limited Company is what suits your business model, then let RegisterKaro help you ease down the process by understanding the benefits, mapping the challenges, and satisfying the prerequisites for the private limited company registration.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#What" className="scrollTo">
                                <li>What is a Private Limited Company?</li>
                            </a>
                            <a href="#Different" className="scrollTo">
                                <li>Different types of Business Structures in {cityName}</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Private Limited Company Registration in {cityName}</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for Private Limited Company Registration in {cityName}</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for Company Registration in {cityName}</li>
                            </a>
                            <a href="#How" className="scrollTo">
                                <li>How to register a private limited company?</li>
                            </a>
                            <a href="#Time" className="scrollTo">
                                <li>Time Required for Registering a Company Online in {cityName}</li>
                            </a>
                            <a href="#HowTo" className="scrollTo">
                                <li>How to Register Your Private Limited Company in {cityName}with RegisterKaro?</li>
                            </a>
                            <a href="#WhatDocuments" className="scrollTo">
                                <li>What Documents will you get after Online Company Registration in {cityName}?</li>
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
                <p className="small-heading text-center">Pvt. Ltd. Company - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}