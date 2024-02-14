import React from 'react'
import certificate from '../../../assets/images/trade-mark/trademark_certificate.webp';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Trademark refers to a recognizable phrase, word, symbol, name, design, image, or combination of these that denotes a particular product & legally differentiates it from all other products. In simple terms, a Trademark identifies a product as belonging to a particular company & recognizes the Company’s ownership of the brand. Trademarks are usually considered a type of IP (Intellectual Property) & may/may not be registered. Trademarks & its rights are safeguarded by the <strong>Trademark Act, 1999.</strong> To get the protection of Trademark Rights one has to register the Trademark. It’s vital to get Trademark Registration Online done because it prevents others from copying your Trademark & misrepresenting other products with your mark.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#ListOfDiff" className="scrollTo">
                                <li>List of Different Trademark Classes in India</li>
                            </a>
                            <a href="#RoleOfTrad" className="scrollTo">
                                <li>What is the Role of Trademark Registry?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Trademark Registration Online in India</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Who can apply for Trademark Registration Online in India?</li>
                            </a>
                            <a href="#DocRequirement" className="scrollTo">
                                <li>Documents required for Trademark Registration Online in India</li>
                            </a>
                            <a href="#Compilance" className="scrollTo">
                                <li>Apply for Trademark Registration Online with RegisterKaro</li>
                            </a>
                            <a href="#ValidityOfTrad" className="scrollTo">
                                <li>Validity of Trademark Registration Online in India</li>
                            </a>
                            <a href="#WhyRegist" className="scrollTo">
                                <li>Why RegisterKaro for Trademark Registration</li>
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
                <p className="small-heading text-center">Trademark Simple Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-60 " loading="lazy"  src={certificate} />
                </div>
            </div>
        </div>
    )
}