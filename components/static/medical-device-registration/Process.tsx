import React from 'react'
import certificate from '../../../assets/images/static/medical-device-registration/medical-device-certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Medical Device Registration in {cityName} involves a structured process to ensure the safety, process, and efficiency of medical devices in the market. The regulatory framework governing this process primarily falls under the preview of the Central Drugs Standard Control Organization (CDSCO) and the Medical Device Rules, 2017.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ApplicableRegulations" className="scrollTo">
                                <li>Applicable Rules/Acts/ Regulations</li>
                            </a>
                            <a href="#EligibilyMandatory" className="scrollTo">
                                <li>What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites for Medical Device Registration?</li>
                            </a>
                            <a href="#DescriptionServices" className="scrollTo">
                                <li>A description of products/services involved</li>
                            </a>
                            <a href="#WhatDocument" className="scrollTo">
                                <li>What are the Documents or Paperwork required for Medical Device Registration?</li>
                            </a>
                            <a href="#MedicalDevice" className="scrollTo">
                                <li>Medical Device Registration Process in {cityName}</li>
                            </a>
                            <a href="#MedicalDeviceRegistration" className="scrollTo">
                                <li>What is the Medical Device Registration procedural timeline of the service involved?</li>
                            </a>
                            <a href="#RenewalService" className="scrollTo">
                                <li>Validity/Renewal of Service</li>
                            </a>
                            <a href="#Cancellation" className="scrollTo">
                                <li>Cancellation/Suspension/Revocation of Service</li>
                            </a>
                            <a href="#MandatoryCom" className="scrollTo">
                                <li>Mandatory Compliance Attached with Service</li>
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
                <p className="small-heading text-center">Medical Device Registration</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
