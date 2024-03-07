import React from 'react'
import certificate from '../../../assets/images/static/Indian_subsidiary_registration/indian_susbsidiary_registration_certificate.svg';
import Image from 'next/image';
interface HeroProps {cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A sister company, also known as a subsidiary, is under the control of a parent company or holding company. The parent company possesses the authority to govern the subsidiary, whether partially or wholly. In {cityName}, the procedure for Indian Subsidiary Registration follows the guidelines of the Companies Act of 2013. As per this act, a subsidiary is characterized by a foreign corporate body or parent entity holding at least 50% of the total share capital. Essentially, the parent company wields substantial influence and control over the subsidiary.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TypeOfSubs" className="scrollTo">
                                <li>Types of Subsidiaries in {cityName}</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Advantages of Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Classification" className="scrollTo">
                                <li>Regulatory Authorities for Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Requirement" className="scrollTo">
                                <li>Requirements and Key Facts about Company Registration in {cityName}</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Compilance" className="scrollTo">
                                <li>Compliance Requirements for Indian Subsidiary Registration</li>
                            </a>
                            <a href="#Taxation" className="scrollTo">
                                <li>Taxation of Indian Subsidiary Companies</li>
                            </a>
                            <a href="#HowToRegister" className="scrollTo">
                                <li>How Registerkaro Can Assist with Indian Subsidiary Registration?</li>
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
                <p className="small-heading text-center">Indian Subsidiary Registration Certificate [Sample]</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Get Online Indian Subsidiary Registration Now! ,Indian Subsidiary Registration Certificate" className="certificate-img h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}