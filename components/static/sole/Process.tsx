import React, { useState } from 'react'
import msme_certificate from '../../../assets/images/static/sole-proprietorship/MSME-Certificate-Sample.webp';
import gst_certificate from '../../../assets/images/static/sole-proprietorship/Gst-Registration-Sample.png';
import shop_certificate from '../../../assets/images/static/sole-proprietorship/shop_and_establishment_sample.webp';
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import Image from 'next/image';

<style jsx>{`
  .certificate {
    width: 30%;
    height: auto; /* Maintain aspect ratio */
  }
`}</style>

interface HeroProps { cityName: string; }
export const Process = ({ cityName }: HeroProps) => {
    const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Sole Proprietorship is a type of business that is owned and managed by only one person and the owner of the business is called a Proprietor. This type of business is the most common form of business that is used in { cityName }. In { cityName }, you can commence this business with minimum regulatory compliance. However, there is no full-fledged way available to get Sole Proprietorship Registration by the Government of { cityName }. Tax Registration & other Business Registration is the correct way to show the legal existence of your proprietary business. Moreover, the business structure as a sole proprietorship company includes individual freelancers, growing start-ups, and settled & creative businesses comprising physical workplaces.<br/><br/>
                A Sole Proprietorship is a business owned and run by one person, known as the Proprietor. It’s the most common type of business in { cityName }, offering a straightforward way to start with minimal regulatory requirements. While the government doesn’t have a dedicated registration process for sole proprietorships, showcasing the legal existence involves obtaining tax registration and other necessary business registrations. <br/><br/>
                For a sole proprietorship company, individuals like freelancers, budding startups, and established creative businesses with physical offices can easily adopt this business structure. If you’re looking to formalize your sole proprietorship, consider opting for tax and business registrations to establish its legal presence.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatBusinessPro" className="scrollTo">
                                <li>What types of businesses in { cityName } can be Sole Proprietorships?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Sole Proprietorship in { cityName }</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria for Sole Proprietorship Registration in { cityName }</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for Sole Proprietorship Registration in { cityName }</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for Sole Proprietorship Registration in { cityName }</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Sole Proprietorship Registration in { cityName }</li>
                            </a>
                            <a href="#RegisterUnderEstablishment" className="scrollTo">
                                <li>Registering under the Shops & Establishments Act</li>
                            </a>
                            <a href="#RegisterGst" className="scrollTo">
                                <li>Registering through GST Registration</li>
                            </a>
                            <a href="#RegisterUdyog" className="scrollTo">
                                <li>Registration through Udyog or Udyam Aadhar Registration under MSME</li>
                            </a>
                            <a href="#Compliances" className="scrollTo">
                                <li>Compliances for Sole Proprietorship in { cityName }</li>
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
                {/* for certification new code is written here  */}
            <div className='flex-5'>
                <div className='DocumentButtonWise w-100 m-auto mt-4' >
                    <div className="main flex justify-content-between align-center m-auto flex-column">
                        <div className='flex'>
                        <button onClick={() => handleActive('1')} className={`flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
                            <div className='p-1'>MSME Certificate</div> 
                        </button>
                        <button onClick={() => handleActive('2')} className={`flex ${active === '2' ? 'active-btn' : 'none-btn'} `}> 
                           <div className='p-1'>GST Certificate  </div> 
                        </button>
                        <button onClick={() => handleActive('3')} className={`flex ${active === '3' ? 'active-btn' : 'none-btn'} `}> 
                            <div className='p-1'>Shop License</div> 
                        </button>
                        </div>
                        <div className='flex-5 text-justify fs-20'>
                        <div className={`${active === '1' ? 'active' : 'none'}`}>
                        <p className="small-heading text-center w-100">MSME Certificate [Sample]</p>
                            <div > 
                                <Image    alt="MSME Certificate Sample" className="certificate h-100 w-100" loading="lazy" src={msme_certificate}/>
                            </div>
                        </div>
                        <div className={`${active === '2' ? 'active' : 'none'}`}>
                           <p className="small-heading text-center w-100"> GST Certificate  [Sample]</p>
                            <div >
                                <Image alt="GST Certificate" className="certificate h-100 w-100" loading="lazy" src={gst_certificate}/>
                            </div>
                        </div>
                        <div className={`${active === '3' ? 'active' : 'none'}`}>
                        <p className="small-heading text-center w-100"> Shop License [Sample]</p>
                            <div>
                                <Image alt="Shop License Sample" className="certificate h-100 w-100" loading="lazy" src={shop_certificate}/>
                            </div>
                        </div> 
                      
                        </div>
                    </div>
                 
                    </div>

              
          </div>
           
        </div>
    )
}
