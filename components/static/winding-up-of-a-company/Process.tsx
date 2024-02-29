import React from 'react'
import certificate from '../../../assets/images/static/private-reg/pvt_ltd_company_certificate_sample.webp';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}

export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In the corporate world, winding up of a company is an important procedure. It denotes the end of a business’s activities and the beginning of its dissolution. A company’s dissolution is a crucial event in the life cycle of any business. Whether voluntary or mandatory, it requires a number of legal, financial, and administrative measures that must be carefully considered and followed. Understanding the reasons for dissolution, the procedures involved, and the legal requirements is critical for business owners, creditors, and stakeholders. This understanding enables them to manage the process efficiently and make educated judgments about the company’s future.  This page will offer a thorough examination of the many facets of winding up of a company, illuminating the reasons, strategies, and legal processes involved in this momentous undertaking. </p>

                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#DiffrentWays" className="scrollTo">
                                <li>What are the different ways of winding up of a company?</li>
                            </a>
                            <a href="#WhatIsComp" className="scrollTo">
                                <li>What is compulsory winding up of a company?</li>
                            </a>
                            <a href="#WindingUp" className="scrollTo">
                                <li>Winding up of a Company by the order of the tribunal</li>
                            </a>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who can all file the petition for winding up of a Company by tribunal?</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Stages involved in the process of winding up of a company by tribunal</li>
                            </a>
                            <a href="#WhatVoluntary" className="scrollTo">
                                <li>What is voluntary winding up of a company?</li>
                            </a>
                            <a href="#VoluntaryWinding" className="scrollTo">
                                <li>Voluntary winding up a company</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>What is a Fast-Track Exit Scheme (FTE)?</li>
                            </a>
                            <a href="#WindingUpThrough" className="scrollTo">
                                <li>Winding up of a company through FTE</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Winding Up of a Company Certificate [Sample]</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="In the corporate world, winding up of a company is an important procedure. It denotes the end of a business’s activities and the beginning of its dissolution. A company’s dissolution is a crucial event in the life cycle of any business" className="certificate h-50 w-60" loading="lazy" src={certificate} />
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
