import React from 'react'
import certificate from '../../../assets/images/pvt-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Nidhi Companies are a type of NBFC that is founded, governed, and regulated by Section 406 of the revised Indian Companies Act of 2013, as well as the Companies (Nidhi Companies) Rules of 2014. The goal of forming a Nidhi Company is to encourage savings and frugality among its members and it tries to achieve this goal by instilling in its members the habit of saving and thrift. They are only permitted to accept deposits from and lend to members, implying that cash given to a Nidhi company comes from its members (shareholders) and is only to be used by the shareholders of the Nidhi Company. The RBI oversees all of its financial transactions, and it is governed by the Ministry of Corporate Affairs. Get your Nidhi Company registered in India quickly and effortlessly by partnering with India’s leading Nidhi Company Registration service provider. Our team of experts will assist you every step of the way.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Nidhi Company Registration</li>
                            </a>
                            <a href="#Requirement" className="scrollTo">
                                <li>Requirements for Nidhi Company Registration in India</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for the Registration of Nidhi Company in India</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Nidhi Company Registration in India</li>
                            </a>
                            <a href="#WhatDocument" className="scrollTo">
                                <li>Annual Compliance of a Nidhi Company</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Event-Based Compliances of a Nidhi Company in India</li>
                            </a>
                            <a href="#Penalties" className="scrollTo">
                                <li>What are the Penalties for Non-Compliance?</li>
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
                <p className="small-heading text-center">Nidhi - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="Private Limited Company sample" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
