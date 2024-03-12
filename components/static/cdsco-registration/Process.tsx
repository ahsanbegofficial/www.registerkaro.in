import React from 'react'
import certificate from '../../../assets/images/static/cdsco-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The Central Drugs Standard Control Organization (CDSCO) in {cityName} oversees the regulation and registration of pharmaceuticals, medical devices, cosmetics, and diagnostics under the Drugs and Cosmetics Act, of 1940. The CDSCO laid down the standards for Drugs, control over the imported Drugs’ quality, coordination of the activities of SDCO (State Drug Control Organisation) and facilitating expert advice with an outlook of the regularity in the enforcement of the Drugs & Cosmetics Act. Any organisation that manufacturers or imports or exports drugs & cosmetics conducts Research & Development activities regarding drugs, imports drugs for the purpose of examining conducts BA (Bioavailability) & BE (Bioequivalence) studies in drugs for export purposes need to obtain CDSCO Registration through its online registration portal.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>Types of CDSCO Registration</li>
                            </a>
                            <a href="#Rules" className="scrollTo">
                                <li>Applicable Rules/Acts/ Regulations</li>
                            </a>
                            <a href="#AdvantagesBIS" className="scrollTo">
                                <li>What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>A description of products/services Involved</li>
                            </a>
                            <a href="#Services" className="scrollTo">
                                <li>Types and Distinctions of Licenses/Services Involved</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>Who can apply for CDSCO Registration in {cityName}?</li>
                            </a>
                            <a href="#Paperwork" className="scrollTo">
                                <li>Documents Required/Paperwork from the Client for CDSCO Registration</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>CDSCO Registration Process</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>What is the procedural timeline of the service involved?</li>
                            </a>
                            <a href="#Renewal" className="scrollTo">
                                <li>Cancellation/Validity/Renewal of Service</li>
                            </a>
                            <a href="#Revocation" className="scrollTo">
                                <li>Cancellation/Suspension/Revocation of Service</li>
                            </a>
                            <a href="#Mandatory" className="scrollTo">
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
                <p className="small-heading text-center">CDSCO Registration Certificate [Sample]</p>
                <div>
                    <Image alt="An Overview of CDSCO Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
