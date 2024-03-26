import React from 'react'
import certificate from '../../../assets/images/static/pro-authorization/Online_PRO_Authorization_certifiacte.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>PRO authorization is a process of obtaining the approval of the Central Pollution Control Board (CPCB) for the registration of a Producer Responsibility Organization (PRO), which is an entity that takes the responsibility of collecting and channelizing the e-waste generated from the end-of-life of the electrical and electronic equipment (EEE) on behalf of the producers. It is required to ensure that the e-waste is managed in an environmentally sound manner, and that the producers comply with the extended producer responsibility (EPR) obligations under the E-Waste (Management) Rules, 2016. PRO authorization is also a legal requirement under the Environment (Protection) Act, 1986 and the E-Waste (Management) Rules, 2016.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#LegalFramework" className="scrollTo">
                                <li>Legal Framework for PRO Authorization </li>
                            </a>
                          
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility/ Pre-Licensing/ Mandatory Prerequisites</li>
                            </a>
                          
                            <a href="#ProcedureObtaining" className="scrollTo">
                                <li>Procedure for Obtaining PRO Authorization</li>
                            </a>
                          
                            <a href="#CancellationValid" className="scrollTo">
                                <li>Cancellation/Validity/Renewal of the PRO Authorization</li>
                            </a>
                          
                            <a href="#MandatoryCompliance" className="scrollTo">
                                <li>Mandatory Compliance after getting PRO Authorization</li>
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
                <p className="small-heading text-center">Get Online PRO Authorization Certificate </p>
                <div>
                    <Image alt="Get Online PRO Authorization in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
