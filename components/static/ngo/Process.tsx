import React, { useState } from 'react'
import Section_8_Incorporation_Certificate_Sample from '../../../assets/images/ngo/Section-8-Incorporation-Certificate-Sample.webp';
import ngo_society_registration_certificate_sample from '../../../assets/images/ngo/ngo_society_registration_certificate_sample.webp';
import ngo_trust_certificate_sample from '../../../assets/images/ngo/ngo_trust_certificate_sample.webp';
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import Image from 'next/image';

export const Process = () => {
    const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Non-Governmental Organizations (NGOs) play a pivotal role in addressing societal issues, driving positive change, and advocating for the underprivileged. The foundation of every impactful NGO lies in its legal establishment – a process known as NGO registration. This article serves as a comprehensive guide to navigating the intricacies of NGO registration in India, empowering aspiring changemakers to embark on their journey of social impact.</p>
                <p className='text-justify'>NGO registration is a legal process that endows organizations with the official status required to carry out philanthropic activities. It serves as a gateway to credibility, transparency, and various benefits, including tax exemptions. In India, NGOs can be registered under different legal structures, such as Trusts, Societies, or Section 8 Companies.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TypeOfNgo" className="scrollTo">
                                <li>Types of NGO Registration in India</li>
                            </a>
                            <a href="#TableCom" className="scrollTo">
                                <li>Difference Between Trust, Society, and Section 8 Company</li>
                            </a>
                            <a href="#Classification" className="scrollTo">
                                <li>Classification of NGOs in India</li>
                            </a>
                            <a href="#WhyNGO" className="scrollTo">
                                <li>Why Is NGO Registration Required?</li>
                            </a>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of NGO Registration</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Eligibility to Start an NGO</li>
                            </a>
                            <a href="#HowToRegister" className="scrollTo">
                                <li>NGO Registration Process</li>
                            </a>
                            <a href="#RegiFee" className="scrollTo">
                                <li>Registration Fees</li>
                            </a>
                            <a href="#HowToRaise" className="scrollTo">
                                <li>How to Raise Funds for NGOs?</li>
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
          
                <div className='DocumentButtonWise w-80 m-auto mt-4' >
              {/* <p className='main-para'>NGO Registration [Sample]</p> */}
                    <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
                        <div className='flex-5'>
                        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                            <Image src={one} alt="one" loading="lazy" width={30} height={30} /> <div className='pe-4'>Section 8 Company</div> 
                            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                            </div>
                        </button>
                        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                            <Image src={two} alt="two" loading="lazy" width={30} height={30} /> <div className='pe-4'>Trust  </div> 
                            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                            </div>
                        </button>
                        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
                            <div className='d-flex justify-content-between align-items-center gap-2'>
                            <Image src={three} alt="three" loading="lazy" width={30} height={30} /> <div className='pe-4'>Society</div> 
                            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
                            </div>
                        </button>
                        </div>
                        <div className='flex-5 text-justify fs-20'>
                       
                        <div className={`${active === '1' ? 'active' : 'none'}`}>
                            <div>
                                <Image    alt="A certificate of incorporation for an indian company" className="certificate h-100 w-80" loading="lazy" src={Section_8_Incorporation_Certificate_Sample}/>
                            </div>
                        </div>
                        <div className={`${active === '2' ? 'active' : 'none'}`}>
                         
                            <div >
                                <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-80" loading="lazy" src={ngo_trust_certificate_sample}/>
                            </div>
                        </div>
                        <div className={`${active === '3' ? 'active' : 'none'}`}>
                       
                            <div>
                                <Image alt="A certificate of incorporation for an indian company" className="certificate h-100 w-80" loading="lazy" src={ngo_society_registration_certificate_sample}/>
                            </div>
                        </div> 
                      
                        </div>
                    </div>
                 
                 </div>
           </div>
        </div>
    )
}