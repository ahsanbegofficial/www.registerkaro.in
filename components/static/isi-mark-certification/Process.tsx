import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>ISI Mark Certification, issued by the {cityName}n Standards Institute (ISI), is a vital certification under the Bureau of {cityName}n Standards (BIS). It guarantees that a product meets the prescribed BIS Standards and safety requirements. This certification is a prerequisite for the manufacturing and sale of products in {cityName}.</p>
                <p className='text-justify'>The ISI Mark, granted through ISI Certification, is applicable to 346+ products, making it mandatory for manufacturers to obtain certification for these items. Failure to do so prohibits manufacturers from selling or producing these products in {cityName}.</p>
                <p className='text-justify'>Recognized as the most esteemed product quality certification mark by BIS, ISI Certification assures customers of the safety and quality standards adhered to in the manufacturing process. The voluntary process involves rigorous testing, application filing, inspection, and application scrutiny, ensuring that electrical items and appliances meet safety criteria.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#EventBased" className="scrollTo">
                                <li>Primary Objectives of ISI Certification</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Key Points to Consider for ISI Mark Certification</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Obtaining ISI Mark Certification</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>List of Products under ISI Certification</li>
                            </a>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>Documents Required for ISI Mark Certification</li>
                            </a>
                            <a href="#AdvantagesBIS" className="scrollTo">
                                <li>Procedure for ISI Mark Certification in {cityName}</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>Validity and Renewal of ISI Certificate</li>
                            </a>
                            <a href="#OtherAnnual" className="scrollTo">
                                <li>Reasons for ISI Application Rejection</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">ISI Mark Certification Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an {cityName}n company" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
