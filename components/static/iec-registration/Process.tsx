import React from 'react'
import certificate from '../../../assets/images/static/iec-registration/Online_IEC_Registration_in_India_certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Nowadays, doing business worldwide is so easy because of advanced technology and the internet. However, before starting any business worldwide, you must follow several procedures & laws and get different Registrations and Licenses. <strong>IEC or Import Export Code</strong> is one of such requirements when you are thinking of importing/exporting from {cityName} and it is also known as Importer Exporter Code. IEC is a 10-digit unique identification number that is compulsory for import to {cityName} or export from {cityName}. Unless specifically exempted, any individual shall make no import/export without getting IEC Registration. Hence, IEC Registration Certificate is compulsory for any business involved in the export & import of goods. Therefore, before starting an import of products into {cityName}, an importer makes sure that the importing company has GST Registration and IEC Registration Certificates both, of which are required to clear customs.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>When is Import Export Code Required?</li>
                            </a> 
                             <a href="#AdvantagesBIS" className="scrollTo">
                                <li>Benefits of IEC Registration in {cityName}</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>What is the eligibility to get the Import Export Code in {cityName}?</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Prerequisites for applying IEC Code in {cityName}</li>
                            </a>
                            <a href="#DocsReq" className="scrollTo">
                                <li>Documents Required for IEC Registration </li>
                            </a>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>Procedure for IEC Registration Online</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>When is IEC not Mandatory?</li>
                            </a>
                            <a href="#Exemption" className="scrollTo">
                                <li>Exemption of Import Export Code (IEC)</li>
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
                <p className="small-heading text-center">IEC Registration Certificate [Sample]</p>
                <div>
                    <Image alt="Online IEC Registration in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
