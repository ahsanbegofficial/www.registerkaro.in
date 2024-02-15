import React from 'react'
import certificate from '../../../assets/images/static/llp-reg/llp-certificate-sample.png';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, the concept of Limited Liability Partnership was introduced in 2008 by the LLP Act, 2008. In India, LLP has become the most preferred form of business among entrepreneurs. Registering an LLP in India has both the limited liability features of a Private Company and the flexibility of a Partnership Firm. No partner is answerable on account of unauthorized or illegal actions of other partners, thus individual partners are protected from joint liability created by another partner’s wrongdoing. LLP is generally preferred by professionals, Micro & Small businesses that are family owned or closely held. In 2022, the MCA (Ministry of Corporate Affairs) introduced LLP (Second Amendment) Rules, 2022 and it has made the procedure of LLP Registration even easier & transparent as now all the LLP Forms will be digital-based forms. Also, with the LLP (Second Amendment) Rules, 2022, Limited Liability Partnerships shall be allotted their TAN & PAN along with the Certificate of Incorporation itself.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#What" className="scrollTo">
                                <li>What is a “Limited Liability Partnership” or “LLP”?</li>
                            </a>
                            <a href="#Different" className="scrollTo">
                                <li>What are the characteristics of an LLP in India?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of LLP Registration in India</li>
                            </a>
                            <a href="#DifferentTypes" className="scrollTo">
                                <li>What are the Different Types of LLP Forms in India?</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for the Registration of LLP</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>What are the vital documents required for LLP Registration in India?</li>
                            </a>
                            <a href="#How" className="scrollTo">
                                <li>Procedure for LLP Registration in India</li>
                            </a>
                            <a href="#HowTo" className="scrollTo">
                                <li>LLP Compliance</li>
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
                <p className="small-heading text-center">LLP Registration Certificate [Sample]</p>
                <div>
                    <Image alt="Private Limited Company sample" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
