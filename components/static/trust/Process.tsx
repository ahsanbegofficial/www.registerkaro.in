import React from 'react'
import get_online_trust_registration_in_india_certificate from '../../../assets/images/static/trust-registration/get_online_trust_registration_in_india_certificate.svg';
import Image from 'next/image';
interface HeroProps { cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
            <p className='text-justify'>Trusts, conceived with noble intentions to foster advancements in sciences, literature, and other commendable causes, serve various purposes such as mitigating scarcity, facilitating education for the underprivileged, and extending medical support. The formal process of Trust Registration involves officially enrolling a trust under the Trusts Act of 1882. This crucial legal step ensures the trust’s acknowledgment and adherence to legal parameters, providing it with legal validity and establishing its identity as an independent entity.</p>
                <p className='text-justify'>For those contemplating the establishment of a trust for non-profit or charitable objectives, trust registration is indispensable for ensuring smooth operations and compliance with legal obligations. At Registerkaro, our dedicated team of professionals is prepared to assist you at every stage of the trust registration process, aiming to deliver a seamless and efficient experience. Feel free to reach out to us today to discuss your trust registration requirements and leverage our expertise in establishing legally compliant and efficacious trusts.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TrustsComp" className="scrollTo">
                                <li>Trusts – A Comprehensive Overview</li>
                            </a>
                            <a href="#PartiesInvolved" className="scrollTo">
                                <li>Parties Involved in the Trust Registration Process</li>
                            </a>
                            <a href="#Categories" className="scrollTo">
                                <li>Categories of Trusts in {cityName}</li>
                            </a>
                            <a href="#Regularity" className="scrollTo">
                                <li>Regulatory Oversight and Legislation for Trust Registration</li>
                            </a>
                            <a href="#ImportanceTrust" className="scrollTo">
                                <li>Importance of Trust Registration</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Advantages of Trust Registration</li>
                            </a>
                            <a href="#Prerequisite" className="scrollTo">
                                <li>Prerequisites for Trust Registration</li>
                            </a>
                            <a href="#Components" className="scrollTo">
                                <li>Components of a Trust Deed</li>
                            </a>
                            <a href="#Documentation" className="scrollTo">
                                <li>Documentation for Trust Registration</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Trust Registration</li>
                            </a>
                            <a href="#Dissolution" className="scrollTo">
                                <li>Dissolution of a Trust</li>
                            </a>
                            <a href="#RegiFee" className="scrollTo">
                                <li>How RegisterKaro Can Assist in Securing Trust Registration?</li>
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
                <p className="small-heading text-center">Trust Registration Certificate [Sample]</p>
                <div>
                    <Image alt="Trust Registration Certificate ,Get Online Trust Registration in India,Trusts, conceived with noble intentions to foster advancements in sciences, literature, and other commendable causes, serve various purposes such as mitigating scarcity, facilitating education for the underprivileged, and extending medical support. The formal process of Trust Registration involves officially enrolling a trust under the Trusts Act of 1882." className="certificate h-100 w-100" loading="lazy" src={get_online_trust_registration_in_india_certificate} />
                </div>
            </div>
        </div>
    )
}