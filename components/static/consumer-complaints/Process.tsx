import React from 'react'
import certificate from '../../../assets/images/static/consumer-complaints/certificate.svg';
import Image from 'next/image';
interface HeroProps { cityName: string; }
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>If customers pay for a certain commodity or service and receive inferior goods or services, they are entitled to legal action. Consumers are granted a number of legal rights and safeguards under the Consumer Protection Act, 1986. This Act allows a customer to file a formal Consumer complaint and bring a business or service provider to court. This particular concern is referred to as an online consumer complaint. A Consumer complaint is usually filed if the company disregards a court order to fix the issue. When filing a Consumer complaint, all required details and supporting documentation must be sent in. {cityName}’s consumer courts provide customers with timely legal advice and rulings.</p>
               
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility to file a complaint</li>
                            </a>
                            <a href="#Challenges" className="scrollTo">
                                <li>Challenges you might face in filing a Consumer complaint</li>
                            </a>
                            <a href="#StepsForFilling" className="scrollTo">
                                <li>Steps for filing a Consumer Complaint</li>
                            </a>
                            <a href="#HowCanRegisterKaro" className="scrollTo">
                                <li>How can RegisterKaro assist you?</li>
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
                <p className="small-heading text-center">Consumer Complaints</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="A certificate of Consumer complaints,If customers pay for a certain commodity or service and receive inferior goods or services, they are entitled to legal action. Consumers are granted a number of legal rights and safeguards under the Consumer Protection Act, 1986." className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
