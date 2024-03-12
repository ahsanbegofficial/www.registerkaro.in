import React from 'react'
import certificate from '../../../assets/images/static/virtual-office/certificate.svg';
import Image from 'next/image';
interface HeroProps { cityName: string;}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In the wake of technological advancements and shifting work paradigms, the concept of a traditional office space has undergone a significant transformation, giving rise to the emergence of virtual offices. This evolution has reshaped the way businesses operate by providing a flexible and efficient alternative to conventional brick-and-mortar setups. A virtual office represents a comprehensive solution that enables individuals or organizations to conduct business operations remotely while maintaining a professional image and fostering seamless collaboration among teams spread across different locations.</p>
                <p className='text-justify'>A virtual office is a dynamic workspace that leverages technology to enable remote work. It comprises various essential components, including but not limited to a virtual business address for mail and registration purposes, remote receptionist services, access to meeting and conference facilities on-demand, and comprehensive administrative support functions. The primary aim of a virtual office is to create an environment where employees can work remotely yet remain interconnected and productive.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Technology" className="scrollTo">
                                <li>Technology and Tools Driving Virtual Offices</li>
                            </a>
                            <a href="#Features" className="scrollTo">
                                <li>Key Features of Virtual Office</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Virtual Office</li>
                            </a>
                            <a href="#Drawbacks" className="scrollTo">
                                <li>Drawbacks of Virtual Office</li>
                            </a>
                            <a href="#Impact" className="scrollTo">
                                <li>Impact of Virtual Offices on Company Culture</li>
                            </a>
                            <a href="#Future" className="scrollTo">
                                <li>Future Trends and Adaptation of Virtual Offices</li>
                            </a>
                            <a href="#Cost" className="scrollTo">
                                <li>Costs of Virtual Offices</li>
                            </a>
                            <a href="#Laws" className="scrollTo">
                                <li>Laws/Acts relating to Virtual Offices</li>
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
                <p className="small-heading text-center">An Overview of Virtual Office in {cityName}</p>
                <div>
                    <Image alt="An Overview of Virtual Office in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
