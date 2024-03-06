import React from 'react'
import certificate from '../../../assets/images/static/nbfc-registration/NBFC_Registration_certificat.svg'
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Although it offers financial services and products, a non-banking financial company, sometimes referred to as a non-banking financial institution, is not recognized as a bank with an official banking license. Although they do not function as banks, NBFCs do engage in lending as well as other operations including advances and loans, credit facilities, savings and investment products, money market trading, stock portfolio management, money transfers, and so forth. The NBFC has taken the road of mainstream institutions when it comes to availing the financial services in { cityName }.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#BusinessModel" className="scrollTo">
                                <li>Right Business Model to choose for NBFC Registration</li>
                            </a>
                            <a href="#NBFCbased" className="scrollTo">
                                <li>NBFCs based on Liabilities</li>
                            </a>
                            <a href="#NBFCsBasedAsset" className="scrollTo">
                                <li>NBFCs based on Asset Size</li>
                            </a>
                            <a href="#Activities" className="scrollTo">
                                <li>NBFCs based on Activities</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of NBFCs</li>
                            </a>
                            <a href="#Challenges" className="scrollTo">
                                <li>Challenges faced in NBFC Registration</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                                <li>Prerequisites for NBFC Registration</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents required for NBFC Registration</li>
                            </a>
                            <a href="#ProcessNbfc" className="scrollTo">
                                <li>Process for NBFC Registration</li>
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
                <p className="small-heading text-center">NBFC Registration Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Understanding the NBFCs
                        Although it offers financial services and products, a non-banking financial company, sometimes referred to as a non-banking financial institution, is not recognized as a bank with an official " className="certificate h-100 w-100 " loading="lazy"  src={certificate} />
                </div>
            </div>
        </div>
    )
}