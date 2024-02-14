import React from 'react'
import certificate from '../../../assets/images/fssai/fssaiRegistration.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>FSSAI or Food Safety & Standards Authority of India is a statutory body established under the Ministry of Health and Family Welfare, Government of India. The FSSAI has been founded under the <strong>Food Safety & Standards Act, 2006</strong> which is a consolidating statute related to Food Safety & Regulation in India. Food Safety & Standards Authority of India is totally responsible for protecting & promoting public health through the supervision & regulation of food safety. FSSAI Registration also known as the Food License is a mandatory Licence required by all entities involved in food businesses in a particular state.</p>
                <p className='text-justify'>FSSAI is needed for any food business in India that stores, transports, manufactures, or distributes food. Based on the nature & size of the business, FSSAI Registration may be required. In the process of FSSAI Registration in India, the Food Business Operator or FBO will get a 14-digit unique number that should be printed on food packages. Getting an FSSAI License in India can provide the food business with legal benefits, build goodwill, create consumer awareness, & help in business expansion. RegisterKaro can help you get an FSSAI License across India very quickly. Our experts also help to get FSSAI Registration and will guide you in selecting the correct food category and license.</p>
               
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#OtherAnnual" className="scrollTo">
                                <li>Who are Food Business Operators in India?</li>
                            </a>
                            <a href="#EventBased" className="scrollTo">
                                <li>Benefits of FSSAI Registration in India</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>What are the Different Types of FSSAI Licenses in India?</li>
                            </a>
                            <a href="#WhoReq" className="scrollTo">
                                <li>Who Requires FSSAI Registration/License in India?</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>Eligibility Criteria for FSSAI Registration</li>
                            </a>
                            <a href="#DocsREquired" className="scrollTo">
                                <li>Documents Required for FSSAI Registration in India</li>
                            </a>
                            <a href="#MandatoryCompilance" className="scrollTo">
                                <li>Step-by-Step Procedure for FSSAI Registration in India</li>
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
                <p className="small-heading text-center">FSSAI Registration Online in India Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                    {/* <p>pending pdf render file</p> */}
                </div>
            </div>
        </div>
    )
}
