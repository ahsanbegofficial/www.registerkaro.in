import React from 'react'
import certificate from '../../../assets/images/static/llp-compliance/LLP_Compliance_in_India_certificate.svg';
import Image from 'next/image';
interface HeroProps {
   cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, LLP or Limited Liability Partnership enjoys a separate status and an organization needs to maintain its active status by regularly filing with MCA (Ministry of Corporate Affairs). Annual Compliance filing is compulsory for any LLP, whether having a business or not. LLP Compliance in {cityName} requires filing 2 separate forms. One form is for <strong>Annual Return</strong> and another one is for <strong>Statement of Accounts & Solvency</strong>. The forms are filed for reporting the activities & financial data for each Financial Year in the future. The failure to fulfill all the requirements for LLP Compliance levies an additional fee of Rs. 100 each day of a delay till the actual filing date. Hence, apart from the mandate, the heavy penalty compels the Partners to fulfill the requirements.</p>
                <p className='text-justify'>For LLP, the returns should be filed periodically to maintain compliance & avoid heavy penalties for non-compliance. An LLP has only a few compliances to be followed every year which is amazingly low as compared to the compliance requirements placed on the Private Limited Companies. Whilst non-compliance might only charge a Private Limited Company Rs. 1 lakh in terms of penalties and it might charge an LLP up to Rs. 5 lakhs.

</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Compilance" className="scrollTo">
                                <li>What are LLP (Second Amendment) Rules, 2022?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of LLP Compliance in {cityName}</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>Mandatory Compliance for LLP in {cityName}</li>
                            </a>
                            <a href="#WhatConseq" className="scrollTo">
                                <li>What are the Consequences of Non-Compliance for LLPs?</li>
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
                <p className="small-heading text-center">LLP Compliance Certificate [Sample]</p>
                <div>
                    <Image alt="LLP Compliance in India In India, LLP or Limited Liability Partnership enjoys a separate status and an organization needs to maintain its active status by regularly filing with MCA" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
