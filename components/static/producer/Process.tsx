import React from 'react'
import certificate from '../../../assets/images/static/producer/certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In { cityName }, a Producer Company is a recognized group of farmers working together to enhance their living standards and ensure better support, income, and profitability. According to the Companies Act, 2013, this type of company can be formed by 10 people or more, two institutions or more, or a combination of both, all sharing a common business objective. Producer Company Registration in { cityName } is a straightforward process, but seeking expert assistance from services like RegisterKaro can simplify the entire registration procedure for you. The primary goal of a Producer Company is to collectively handle activities like procurement, pooling, production, marketing, harvesting, and selling of products and services for the benefit of its members. It serves as a bridge for transforming cooperatives into corporations, promoting cooperative development. The essence of a Farmer Producer Company in { cityName } is to uplift financially struggling farmers through collaboration and joint efforts.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#What" className="scrollTo">
                                <li>What is a Farmer Producer Company?</li>
                            </a>
                            <a href="#ActivityPerform" className="scrollTo">
                                <li>Activities Performed by a Producer Company in { cityName }</li>
                            </a>
                            <a href="#Differnt" className="scrollTo">
                                <li>Different Types of Producer Companies in { cityName }</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Advantages of Producer Company Registration in { cityName }</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for the Registration of Producer Company</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for the Registration of Producer Company</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Producer Company Registration</li>
                            </a>
                            <a href="#WhatDocuments" className="scrollTo">
                                <li>Post-Incorporation Compliance for Producer Company</li>
                            </a>
                            <a href="#LoanAndInvestment" className="scrollTo">
                                <li>Loans & Investments under Producer Company</li>
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
                <p className="small-heading text-center">Producer Company - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="Producer Company - Incorporation Certificate " className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
