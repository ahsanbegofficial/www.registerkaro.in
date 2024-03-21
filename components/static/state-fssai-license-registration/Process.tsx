import React from 'react'
import certificate from '../../../assets/images/static/state-fssai-license-registration/FSSAI_Registration_certifiacte.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The Food Safety and Standards Authority of India, or FSSAI for brief, is an agency of the government that patrols India’s huge and varied territory to ensure food safety and quality. Setting standards, regulating the sector, and increasing consumer knowledge are just a few of the many functions that make it an essential organization for the nation’s food ecology. In addition to ensuring food safety, FSSAI’s work promotes economic growth, innovation, and trust in the Indian food industry. FBOs are subject to penalties for operating without a valid food license, as stipulated by the FSS Act of 2006. In addition to operating under the guidance of the Ministry of Health and Family Welfare, FSSAI bases all of its decisions on the aforementioned Act. Scroll down to check more about State FSSAI License Registration.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#EventBased" className="scrollTo">
                                <li>Role of Food Safety Standard Authority of India</li>
                            </a>
                            <a href="#BenefitsOfState" className="scrollTo">
                                <li>Benefits of State FSSAI License Registration</li>
                            </a>
                            <a href="#WhoState" className="scrollTo">
                                <li>Who needs a State FSSAI License?</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>Documents required for State FSSAI License Registration</li>
                            </a>
                            <a href="#StateFSSAILicense" className="scrollTo">
                                <li>Process for State FSSAI License Registration</li>
                            </a>
                            <a href="#PenaltiesUnder" className="scrollTo">
                                <li>Penalties Under the FSSAI Act </li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">State FSSAI License Registration Certificate</p>
                <div className='d-flex justify-content-center'>
                    <Image alt="Get Online State FSSAI License Registration in India" className="certificate h-50 w-70" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
