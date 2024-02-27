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


export const Process = () => {
    const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A Sole Proprietorship is a type of business that is owned and managed by only one person and the owner of the business is called a Proprietor. This type of business is the most common form of business that is used in India. In India, you can commence this business with minimum regulatory compliance. However, there is no full-fledged way available to get Sole Proprietorship Registration by the Government of India. Tax Registration & other Business Registration is the correct way to show the legal existence of your proprietary business. Moreover, the business structure as a sole proprietorship company includes individual freelancers, growing start-ups, and settled & creative businesses comprising physical workplaces.<br/><br/>
                A Sole Proprietorship is a business owned and run by one person, known as the Proprietor. It’s the most common type of business in India, offering a straightforward way to start with minimal regulatory requirements. While the government doesn’t have a dedicated registration process for sole proprietorships, showcasing the legal existence involves obtaining tax registration and other necessary business registrations. <br/><br/>
                For a sole proprietorship company, individuals like freelancers, budding startups, and established creative businesses with physical offices can easily adopt this business structure. If you’re looking to formalize your sole proprietorship, consider opting for tax and business registrations to establish its legal presence.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatBusinessPro" className="scrollTo">
                                <li>What types of businesses in India can be Sole Proprietorships?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Sole Proprietorship in India</li>
                            </a>
                            <a href="#Eligibility" className="scrollTo">
                                <li>Eligibility Criteria for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents Required for Sole Proprietorship Registration in India</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for Sole Proprietorship Registration in India</li>
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
                                <li>Compliances for Sole Proprietorship in India</li>
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
                {/* for certification new code is written here  */}

                <div className='DocumentButtonWise w-80 m-auto mt-4' >
                    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
                        <div className='flex-5'>
                        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                            <Image src={one} alt="one" loading="lazy" width={30} height={30} /> <div className='pe-4'>MSME Certificate</div> 
                            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                            </div>
                        </button>
                        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                            <Image src={two} alt="two" loading="lazy" width={30} height={30} /> <div className='pe-4'>GST Certificate  </div> 
                            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                            </div>
                        </button>
                        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                            <Image src={three} alt="three" loading="lazy" width={30} height={30} /> <div className='pe-4'>Shop License</div> 
                            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                            </div>
                        </button>
                        </div>
                        <div className='flex-5 text-justify fs-20'>
                        <div className={`${active === '1' ? 'active' : 'none'}`}>
                        <p className="small-heading text-center w-80">MSME Certificate [Sample]</p>
                            <div > 
                                <Image    alt="MSME Certificate Sample" className="certificate h-100 w-80" loading="lazy" src={msme_certificate}/>
                            </div>
                        </div>
                        <div className={`${active === '2' ? 'active' : 'none'}`}>
                           <p className="small-heading text-center w-80"> GST Certificate  [Sample]</p>
                            <div >
                                <Image alt="GST Certificate" className="certificate h-100 w-80" loading="lazy" src={gst_certificate}/>
                            </div>
                        </div>
                        <div className={`${active === '3' ? 'active' : 'none'}`}>
                        <p className="small-heading text-center w-80"> Shop License [Sample]</p>
                            <div>
                                <Image alt="Shop License Sample" className="certificate h-100 w-80" loading="lazy" src={shop_certificate}/>
                            </div>
                        </div> 
                      
                        </div>
                    </div>
                 
                    </div>
              
          </div>
           
        </div>
    )
}
