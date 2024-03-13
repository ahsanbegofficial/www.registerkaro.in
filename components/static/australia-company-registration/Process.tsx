import React from 'react'
import certificate from '../../../assets/images/static/australia-company-registration/COMPANY_REGISTRATION _AUSTRALIA_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>If you are seeking the ideal location to establish and develop your business, consider registering a company in Australia. With a population of approximately 2.6 million people, Australia boasts a highly skilled workforce. Australia is a member of the Regional Comprehensive Economic Partnership (RCEP), the largest free trade agreement globally. Australia ranks 14th on the Ease of Doing Business Index, making it an attractive location for business growth. This article will detail the process of company registration in Australia, eligibility requirements, benefits, and taxation structure.</p>
                <p className='text-justify'>Before beginning the process of registering a company in Australia or venturing into the Australian market, investors need to consider several crucial factors. The owner must decide between forming a new company, bringing in a foreign company, or purchasing an established one. Various business structures are accessible, each with its own set of regulations.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                               <li>Types of Company in Australia</li>
                            </a>
                           
                            <a href="#Establish" className="scrollTo">
                               <li>why to establish a business in australia?</li>
                            </a>
                           
                            <a href="#DocumentReq" className="scrollTo">
                               <li>Document Required</li>
                            </a>
                           
                            <a href="#ProcessStep" className="scrollTo">
                               <li>Process of Registering Your Company in Australia </li>
                            </a>
                           
                            <a href="#Facts" className="scrollTo">
                               <li>Facts to Know </li>
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
                <p className="small-heading text-center">Australia Company Registration</p>
                <div>
                    <Image alt="An overview of Company Registration in Australia If you are seeking the ideal location to establish and develop your business, consider registering a company in Australia." className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
