import React from 'react'
import certificate from '../../../assets/images/static/private-limited-company-compliance/Annual_Compliance_for_Private_Limited_Company.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>With the introduction of the Companies Act, 2013 in {cityName}, the compliance burden of every Company has increased substantially irrespective of the Company’s nature like Public Limited Company, Private Company, LLP, OPC, etc. To increase transparency in reporting, the SEBI & MCA frequently come out with some new amendments by way of notifications & circulars. Companies must adhere to all the compliances within the specified due dates, any non-compliance often results in heavy penalties. So, it’s a good practice to keep track of the relevant compliances as per the applicable provisions of the Companies Act or SEBI as the case may be. Practically, it is very tough to maintain all the Private Limited Company Compliance, That’s why RegisterKaro is here to help you with all the annual filings of Companies & provide details regarding Company Compliances.</p>
                <p className='text-justify'>In {cityName}, compliance is a vital aspect that has to be taken into account while running a business or a company. It is compulsory to follow all the ROC Compliance to avoid any penalties. All Private Limited Companies in {cityName} must maintain annual compliance as per the Companies Act, 2013. Annual Compliance of a Private Limited Company in {cityName} is generally independent of the total turnover or the capital amount involved. The ROC compliance for registered Private Limited Companies is compulsory and not being able to follow the Private Limited Company Compliance may result in some serious action on the Company.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>What are the Benefits of Private Limited Company Compliance in {cityName}?</li>
                            </a>
                            <a href="#TypeOfComp" className="scrollTo">
                                <li>Types of Compliance for a Company Registered in {cityName}</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>External Compliance</li>
                            </a>
                            <a href="#Compilance" className="scrollTo">
                                <li>Internal Compliance</li>
                            </a>
                            <a href="#MandatoryCompilance" className="scrollTo">
                                <li>Mandatory Private Limited Company Compliance</li>
                            </a>
                            <a href="#OtherAnnual" className="scrollTo">
                                <li>Other Annual Compliance for Private Limited Company in {cityName}</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Event-Based Compliance for Private Limited Company</li>
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
                <p className="small-heading text-center">Annual Private Limited Company Compliance </p>
                <div>
                    <Image alt="An Overview of Annual Private Limited Company Compliance" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
