import React from 'react'
import certificate from '../../../assets/images/static/ca-services/Understanding_CA_certificate.svg'
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A chartered accountant can help the nation's economy grow. Each chartered accountant possesses unique understanding in the areas of finance, taxation, foreign exchange, and the stock market. They help everyone comprehend the regulations and policies. Technically speaking, Indian CPAs are significantly better than others, but modern accounting goes beyond technicalities. It also involves problem-solving and problem-identification. Customers seek out and appreciate CPAs who are reliable consultants and who comprehend business dynamics. </p>
                <p className='text-justify'>A chartered accountant with expertise in equities, initial public offerings, bankruptcy, mergers and acquisitions is needed in the market. It entails strategy development, business auditing, report comprehension for the CA, and altering business conditions. Data protection from cyber fraud is a concern for accounting and auditing. The main driver for CA's need for businesses is globalization.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Challenges" className="scrollTo">
                               <li>Challenges faced by Business without CA services</li>
                            </a>
                            <a href="#Included" className="scrollTo">
                               <li>What all is included in CA Services?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                               <li>Benefits of availing CA Services</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                               <li>Why Choose RegisterKaro for CA Services?</li>
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
                <p className="small-heading text-center">Understanding CA Services</p>
                <div>
                    <Image alt="A chartered accountant can help the nation's economy grow. Each chartered accountant possesses unique understanding in the areas of finance," className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
