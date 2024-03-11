import React from 'react'
import certificate from '../../../assets/images/static/bis-crs-certifiaction/Get_BIS_CRS_Certification_India.svg';
import Image from 'next/image';
interface HeroProps {  cityName: string;}
export const Process = ({ cityName }: HeroProps)  => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The BIS CRS Certification, falling under Scheme – II of BIS (Conformity Assessment) Regulations, 2018, is a pivotal regulatory framework established by the Ministry of Electronics & Information Technology. Instituted in 2012, this scheme mandates manufacturers to secure a BIS CRS Certification Certificate for electronic products before market introduction. Emphasizing self-declaration of conformity, it has witnessed a substantial surge in licenses over the years.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Evaolution" className="scrollTo">
                                <li>Evolution of CRS and Product Expansion: A Regulatory Timeline</li>
                            </a>
                            <a href="#Decoding" className="scrollTo">
                                <li>Decoding CRS: Compulsory Registration Scheme Unveiled</li>
                            </a>
                            <a href="#Product" className="scrollTo">
                                <li>Product Catalog under Compulsory Registration Scheme</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility for BIS CRS Certification: Unveiling the Criteria</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Crucial for BIS CRS Certification</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>BIS CRS Certification Process: A Step-by-Step Guide</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>Guidelines for Electronic Labeling within the BIS CRS Certification Scheme</li>
                            </a>
                            <a href="#MandatoryCompilance" className="scrollTo">
                                <li>Market Surveillance within the BIS CRS Certification Scheme: Ensuring Quality Compliance</li>
                            </a>
                            <a href="#OtherAnnual" className="scrollTo">
                                <li>Implementation Steps for Surveillance Process</li>
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
                <p className="small-heading text-center">BIS CRS Certification [Sample]</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="The BIS CRS Certification, falling under Scheme – II of BIS (Conformity Assessment) Regulations, 2018, is a pivotal regulatory framework established by the Ministry of Electronics & Information Technology. Instituted in 2012, this scheme mandates manufacturers to secure a BIS CRS Certification Certificate" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
