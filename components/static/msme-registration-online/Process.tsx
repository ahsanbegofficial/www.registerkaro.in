import React from 'react'
import certificate from '../../../assets/images/static/msme-registration-online/get_msme_regi_certificate.svg';
import Image from 'next/image';
interface HeroProps { cityName: string; }
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the Indian economy, significantly contributing to employment and economic growth. The Indian government has developed the MSME Registration process to give small enterprises several benefits, including easier access to loans, subsidies, and other incentives. It is critical to emphasize the importance of keeping your registration under MSME information up to date. To maintain the validity of your registration, any changes in business activity, investment, or turnover should be quickly notified on the Udyam Registration portal. We will walk you through the process of applying for the MSME Registration online in { cityName } in this page.</p>
                <p className='text-justify'>
                Registering your company as an MSME in { cityName } is a vital step towards gaining access to the government’s various perks and prospects. The online registration process via the Udyam Registration portal is user-friendly and fast, making it easier for entrepreneurs and business owners to take advantage of these benefits. By acquiring the registration online, you not only open the door to financial assistance and incentives, but you also help to build your firm and the Indian economy. Don’t miss out on the benefits—begin the process of MSME registration online today!</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatMSME" className="scrollTo">
                                <li>What are MSMEs?</li>
                            </a>
                            <a href="#TypeBusiness" className="scrollTo">
                                <li>What type of business comes under MSM</li>
                            </a>
                            <a href="#TableCom" className="scrollTo">
                                <li>MSME Classification</li>
                            </a>
                            <a href="#BenefitsMSME" className="scrollTo">
                                <li>Benefits of MSME Registration Online</li>
                            </a>
                            <a href="#UdyamRegistration" className="scrollTo">
                                <li>What is Udyam Registration?</li>
                            </a>
                            <a href="#UdyamDiffrence" className="scrollTo">
                                <li>What is the difference between MSME</li>
                            </a>
                            <a href="#WhichEntities" className="scrollTo">
                                <li>Which Entities are eligible for </li>
                            </a>
                            <a href="#SupportingDocuments" className="scrollTo">
                                <li>Supporting Documents Required for </li>
                            </a>
                            <a href="#ProcessMSME" className="scrollTo">
                                <li>Process for MSME Registration Online</li>
                            </a>
                            <a href="#NoFee" className="scrollTo">
                                <li>No Fee for Registration</li>
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
                <p className="small-heading text-center">MSME Registration certificate [Sample]</p>
                <div>
                    <Image alt="Get MSME Registration Online in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
