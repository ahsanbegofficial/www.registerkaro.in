import Image from 'next/image';
import { useState } from 'react';
import Section_8_Incorporation_Certificate_Sample from '../../../assets/images/static/ngo/Section-8-Incorporation-Certificate-Sample.webp';
import ngo_society_registration_certificate_sample from '../../../assets/images/static/ngo/ngo_society_registration_certificate_sample.webp';
import ngo_trust_certificate_sample from '../../../assets/images/static/ngo/ngo_trust_certificate_sample.webp';
interface HeroProps {cityName: string;}
export const Process = ({ cityName }: HeroProps)  => {
    const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Non-Governmental Organizations (NGOs) play a pivotal role in addressing societal issues, driving positive change, and advocating for the underprivileged. The foundation of every impactful NGO lies in its legal establishment – a process known as NGO registration. This article serves as a comprehensive guide to navigating the intricacies of NGO registration in {cityName}, empowering aspiring changemakers to embark on their journey of social impact.</p>
                <p className='text-justify'>NGO registration is a legal process that endows organizations with the official status required to carry out philanthropic activities. It serves as a gateway to credibility, transparency, and various benefits, including tax exemptions. In {cityName}, NGOs can be registered under different legal structures, such as Trusts, Societies, or Section 8 Companies.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#TypeOfNgo" className="scrollTo">
                                <li>Types of NGO Registration in {cityName}</li>
                            </a>
                            <a href="#TableCom" className="scrollTo">
                                <li>Difference Between Trust, Society, and Section 8 Company</li>
                            </a>
                            <a href="#Classification" className="scrollTo">
                                <li>Classification of NGOs in {cityName}</li>
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
           </div>
           <div className='flex-5'>
                <div className='DocumentButtonWise w-100 m-auto mt-4' >
                    <div className="main flex justify-content-between align-center m-auto flex-column">
                        <div className='d-flex justify-content-around w-100'>
                        <button onClick={() => handleActive('1')} className={`flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
                            <div className='p-1'>Section 8 Company</div> 
                        </button>
                        <button onClick={() => handleActive('2')} className={`flex px-5 ${active === '2' ? 'active-btn' : 'none-btn'} `}> 
                           <div className='p-1'>Trust</div> 
                        </button>
                        <button onClick={() => handleActive('3')} className={`flex px-5 ${active === '3' ? 'active-btn' : 'none-btn'} `}> 
                            <div className='p-1'>Society</div> 
                        </button>
                        </div>
                        <div className='flex-5 text-justify fs-20'>
                        <div className={`${active === '1' ? 'active' : 'none'}`}>
                        <p className="small-heading text-center w-100">Section 8 Company Certificate [Sample]</p>
                            <div > 
                                <Image    alt="A certificate Section 8 Incorporation Certificate Sample" className="certificate " loading="lazy" src={Section_8_Incorporation_Certificate_Sample}/>
                            </div>
                        </div>
                        <div className={`${active === '2' ? 'active' : 'none'}`}>
                           <p className="small-heading text-center w-100"> Trust   Certificate  [Sample]</p>
                            <div >
                                
                                <Image alt="A certificate of ngo trust certificate sample" className="certificate " loading="lazy" src={ngo_trust_certificate_sample} />
                            </div>
                        </div>
                        <div className={`${active === '3' ? 'active' : 'none'}`}>
                        <p className="small-heading text-center w-100"> Society License [Sample]</p>
                            <div>
                                <Image alt="ngo society registration certificate sample" className="certificate w-100" loading="lazy" src={ngo_society_registration_certificate_sample}/>
                            </div>
                        </div> 
                      
                        </div>
                    </div>
                 
                    </div>

              
               </div>
        </div>
    )
}