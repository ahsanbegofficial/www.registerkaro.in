import React from 'react'
import certificate from '../../../assets/images/static/bis-fmcs-certification/bis-fmcs-certification.svg';
import Image from 'next/image';
interface HeroProps { cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>

                <p className='text-justify'>The Foreign Manufacturers Certification Scheme (FMCS) is overseen by the Bureau of Indian Standards (BIS) as part of Scheme-I within Schedule-II of the Conformity (Assessment) Regulations, 2018, and the BIS Act, 2016. This scheme is designed for foreign manufacturers seeking certification for the use of the Standard Mark (ISI Mark) on products conforming to Indian Standards. The BIS FMCS Certification is a mandatory requirement for foreign manufacturers looking to import their products into {cityName}. This certification process underscores the commitment to quality, safety, and reliability, aligning with the standards set by the Bureau of Indian Standards for the benefit of the Indian consumer market. BIS FMCS Certification is an indispensable requirement for foreign manufacturers seeking to enter the Indian market. Beyond regulatory compliance, it signifies a commitment to quality and safety. As international trade continues to evolve, the BIS FMCS Certification remains a cornerstone for building trust, ensuring product reliability, and fostering seamless global commerce.</p>
                <p className='text-justify'>Under the Foreign Manufacturers Certification Scheme, the BIS grants a license to foreign manufacturers, allowing them to affix the ISI Mark to products meeting Indian Standard specifications. The scope of this scheme covers all products except Electronics and IT Goods, which are subject to notification by the Department of Electronics and Information Technology (Deity).</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>What is BIS Standard Mark?</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>Importance of BIS FMCS Certification in {cityName}</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>List of Products Which Require BIS FMCS CertificationList of Products Which Require BIS FMCS Certification</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Requirements for BIS FMCS Certification</li>
                            </a>
                            <a href="#DocRequiredBIS" className="scrollTo">
                                <li>Required Documents for BIS FMCS Certification</li>
                            </a>
                            <a href="#ProcedureObtaining" className="scrollTo">
                                <li>Procedure for Obtaining BIS FMCS Certification</li>
                            </a>
                            <a href="#AdvantagesBIS" className="scrollTo">
                                <li>Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers</li>
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
                <p className="small-heading text-center">BIS FMCS Certificate [Sample]</p>
                <div>
                    <Image alt="An Overview of BIS FMCS Certification
                    The Foreign Manufacturers Certification Scheme (FMCS) is overseen by the Bureau of Indian Standards (BIS) as part of Scheme-I within Schedule-II of the Conformity (Assessme" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
