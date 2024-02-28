import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>One of the most essential types of company organisation is a partnership firm. It is a common company structure in India. A partnership firm must be formed by at least two people. A partnership firm is formed when two or more people join forces to start a business and divide the profits in an agreed-upon ratio. Any type of trade, occupation, or profession is included in the partnership business. Partnership Firm Registration refers to the registration of the partnership firm with the Registrar of Firms by its partners. The partners must register their firm with the Registrar of Firms in the state in which it is based. Because partnership firm registration is not required, the partners can apply for registration of the partnership firm either when the firm is formed or afterward at any point during its operation.<br/><br/>To register a partnership, two or more people must come together as partners, agree on a firm name, and sign a partnership deed. Partners, on the other hand, cannot be members of a Hindu Undivided Family or husband and wife. <br/><br/>In India, partnership firms are governed and regulated under the Indian Partnership Act, 1932. Partners are the people who work together to form a partnership firm. A contract between the partners establishes the partnership firm. A partnership deed is a contract between the partners that governs the relationship between the partners as well as the partnership firm</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            
                            <a href="#WhatIs" className="scrollTo">
                                <li>What is a Partnership?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Importance of Registering a Partnership Firm in India</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Advantages of Partnership Firm Registration</li>
                            </a>
                            <a href="#Disdvantages" className="scrollTo">
                                <li>Disadvantages of Partnership Firm Registration</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for Partnership Firm Registration in India</li>
                            </a>
                            <a href="#DocumentsForPartnership" className="scrollTo">
                                <li>Documents for Partnership Firm Registration in India</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>What is a Partnership Deed?</li>
                            </a>
                            <a href="#ProcedureForPartnership" className="scrollTo">
                                <li>Procedure for Partnership Firm Registration in India</li>
                            </a>
                            <a href="#Timeline" className="scrollTo">
                                <li>Timeline for Partnership Firm Registration</li>
                            </a>
                            <a href="#Compilance" className="scrollTo">
                                <li>Compliance after getting Partnership Firm Registration Online</li>
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
                <p className="small-heading text-center">Partnership Firm Certificate [Sample]</p>
                <div>
                    <Image alt="One of the most essential types of company organisation is a partnership firm. It is a common company structure in India. A partnership firm must be formed by at least two people. A partnership firm is formed when two or more people join forces to start a business and divide the profits in an agreed-upon ratio" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
