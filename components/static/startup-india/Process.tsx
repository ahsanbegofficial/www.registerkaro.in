import React from 'react'
import certificate from '../../../assets/images/static/startup_india_registration/a_complete_analysis_of_startup_indian_registration_certifiacte.svg'
import Image from 'next/image';
interface HeroProps {cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>{cityName}’s startup scene is thriving, witnessing a surge in young entrepreneurs each year. With a supportive government backing, startups contribute significantly to the nation’s economic growth. These ventures, offering innovative solutions to societal challenges, redefine existing products or services. The Startup {cityName} Initiative, championed by the Indian government, aims to nurture aspiring entrepreneurs. The accompanying Startup {cityName} Scheme provides crucial financial and mentoring support for the growth and expansion of startup companies. This initiative not only promotes startups but also focuses on creating employment opportunities and fostering wealth generation. At RegisterKaro, we have a team of professionals who will help you in getting Startup {cityName} Registration without any hassle and at a very low cost.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Startup" className="scrollTo">
                                <li>What is a Startup?</li>
                            </a>
                            <a href="#Objectives" className="scrollTo">
                                <li>Objectives of Startup {cityName} Movement</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Startup {cityName} Registration</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria for the Registration</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Who is not eligible for Startup {cityName} Registration or Startup {cityName} Recognition?</li>
                            </a>
                            <a href="#DocRequired" className="scrollTo">
                                <li>Documents required for Startup {cityName} Company Registration</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for obtaining Startup {cityName} Registration Certificate</li>
                            </a>
                            <a href="#HowToRegister" className="scrollTo">
                                <li>How can RegisterKaro help you?</li>
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
                <p className="small-heading text-center">Startup {cityName} Registration Certificate [Sample]</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="A Complete Analysis of Startup India Registration, Startup India Registration Certificate" className="certificate" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}