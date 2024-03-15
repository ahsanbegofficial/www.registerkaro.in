import React from 'react'
import certificate from '../../../assets/images/static/esi-registration/Get_Online_ESI_Registration_Now_certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>ESI or Employees State Insurance Scheme is a social security scheme offered by the Indian Government as per the ESI Act, 1948 and ESI is managed by <strong> ESIC or Employees State Insurance Corporation</strong>, it’s an autonomous body created by the law under the Ministry of Labour and Employment, Government of {cityName}. The ESI Scheme provides protection to employees against death or disablement due to employment sickness, maternity & injury. Employees must be registered for the Scheme to get all the medical care & other benefits. This is a self-financing scheme where the employers & employees make regular monthly contributions to the ESI Scheme at a certain % of their wages. Contact Us! Our Professionals can help you get ESI Registration while you stay tension-free & relax and concentrate on the primary roles of the business</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#EventBased" className="scrollTo">
                                <li>Benefits of ESI Registration in {cityName}</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>Various Entities covered under ESIC</li>
                            </a>
                            <a href="#OtherAnnual" className="scrollTo">
                                <li>What is the Eligibility for ESI Registration in {cityName}?</li>
                            </a>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>What are the vital documents required for online ESI Registration in {cityName}?</li>
                            </a>
                            <a href="#AdvantagesBIS" className="scrollTo">
                                <li>Procedure for Online ESI Registration</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>Compliance and Returns after ESI Registration in {cityName}</li>
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
                <p className="small-heading text-center">ESI Registration Certificate [Sample]</p>
                <div>
                    <Image alt="Get Online ESI Registration Now! ESI or Employees State Insurance Scheme is a social security scheme offered by the Indian Government as per the ESI Act, 1948 and ESI is managed" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
