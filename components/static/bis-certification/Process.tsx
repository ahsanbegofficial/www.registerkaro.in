import React from 'react'
import certificate from '../../../assets/images/static/bis-certification/get_online_bis_certification_in_india.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>BIS, an acronym for the Bureau of Indian Standards, stands as the National Standard Body of { cityName }, established under the BIS Act 2016. Its core mission revolves around fostering the harmonious development of standardization, marking, and quality certification of goods, as well as addressing related matters. BIS plays a pivotal role in contributing traceable and tangible benefits to the national economy by ensuring the provision of safe and reliable quality goods, mitigating health hazards, promoting import and export substitutes, and controlling the proliferation of varieties through standardization, certification, and testing. In { cityName }, BIS Certification is issued to offer customers a third-party guarantee of the safety, quality, and reliability of goods. The Government has mandated BIS Certification for specific products to prioritize public health. This certification aims to enhance customer confidence, provide quality assurance, protect customers from hazardous products, and uphold public health standards.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>Key Initiatives by BIS</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>Objectives of BIS</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>Quality Control Orders</li>
                            </a>
                            <a href="#AdvantagesBIS" className="scrollTo">
                                <li>Advantages of Obtaining BIS Certification</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Types of BIS Certification</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>Products Covered Under BIS Certification</li>
                            </a>
                            <a href="#OtherAnnual" className="scrollTo">
                                <li>Documentation Required for BIS Certification</li>
                            </a>
                            <a href="#MandatoryCompilance" className="scrollTo">
                                <li>Procedure for BIS Certification</li>
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
                <p className="small-heading text-center">BIS Certification Certificate [Sample]</p>
                <div>
                    <Image alt="Get Online BIS Certification in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
