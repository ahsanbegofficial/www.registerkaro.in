import React from 'react'
import certificate from '../../../assets/images/static/hong-kong-company-registration/hong_kong_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The choice of jurisdiction for the incorporation of a business is a very important decision that business owners have to consider making. Because incorporation, in a particular jurisdiction, makes the company bound to follow the laws of that jurisdiction, similarly it happens in the case of taxation. Multiple business owners choose Hong Kong as their place of incorporating their business. </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Features" className="scrollTo">
                                <li>Features</li>
                            </a>
                            <a href="#Governing" className="scrollTo">
                                <li>Governing Body in Hong Kong</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of companies incorporated in Hong Kong</li>
                            </a>
                            <a href="#Incorporation" className="scrollTo">
                                <li>Process of incorporation in Hong Kong</li>
                            </a>
                            <a href="#How" className="scrollTo">
                                <li>How does Register Karo help?</li>
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
            <div className='flex-5 align-center'>
                <p className="small-heading text-center">Hong Kong for incorporation</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="The choice of jurisdiction for the incorporation of a business is a very important decision that business owners have to consider making. Because incorporation, in a particular jurisdiction, makes the company bound to follow the laws " className="certificate h-50 w-80" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
