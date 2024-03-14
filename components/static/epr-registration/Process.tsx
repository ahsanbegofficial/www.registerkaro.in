import React from 'react'
import certificate from '../../../assets/images/static/epr-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {cityName: string;}
export const Process = ({ cityName }: HeroProps)  => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>EPR registration is a process of obtaining the approval of the Central Pollution Control Board (CPCB) or the State Pollution Control Boards (SPCBs) for the implementation of the extended producer responsibility (EPR) obligations under the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016. EPR is a policy approach that makes the producers, importers and brand owners (PIBOs) responsible for the collection and management of the waste generated from their products, such as electrical and electronic equipment (EEE) or plastic packaging. EPR registration is required to ensure that the waste is managed in an environmentally sound manner, and that the PIBOs comply with the EPR targets, standards and guidelines set by the CPCB or the SPCBs. EPR registration is also a legal requirement under the Environment (Protection) Act, 1986 and the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ApplicableRules" className="scrollTo">
                                <li>Applicable Rules/ Acts/ Regulations for EPR </li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility/ Pre-Licensing/ Mandatory Prerequisites</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents Required for EPR Registration</li>
                            </a>
                            <a href="#HowEPRRegistration" className="scrollTo">
                                <li>How to apply for EPR Registration online in {cityName}?</li>
                            </a>
                            <a href="#CancellationValid" className="scrollTo">
                                <li>Cancellation/Validity/ Renewal of EPR</li>
                            </a>
                            <a href="#MandatoryCompliance" className="scrollTo">
                                <li>Mandatory Compliance</li>
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
                <p className="small-heading text-center">Get Online EPR Registration [Sample]</p>
                <div>
                    <Image alt="EPR registration is a process of obtaining the approval of the Central Pollution Control Board (CPCB) or the State Pollution Control Boards (SPCBs) for the implementation of the extended producer responsibility (EPR) obligations under the E-Waste (Management) Rules" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
