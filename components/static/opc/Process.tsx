import React from 'react'
import certificate from '../../../assets/images/opc-reg/OPC-registration-sample-certificate.jpg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Before the enactment of the Companies Act of 2013, the formation of a company in India necessitated at least two individuals. However, with the advent of this legislation, there’s a notable shift towards promoting One Person Companies (OPCs). The Companies Act of 2013 specifically facilitates the creation and operation of OPCs in India, allowing a single individual to spearhead such entities. While traditional private companies mandate a minimum of two directors and two members, a One Person Company is a departure from this norm, as it can be formed by a single person. The legal framework supporting OPCs in India is outlined in Section 262 of the Companies Act of 2013. The OPC Registration process requires the representation of the entire company by a lone director and a single member. Noteworthy is the streamlined compliance structure associated with OPCs, which imposes fewer responsibilities compared to traditional private companies. This legal provision offers a simplified avenue for individuals looking to establish and operate companies independently in India.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Features" className="scrollTo">
                                <li>Features of One Person Company in India</li>
                            </a>
                            <a href="#Checklist" className="scrollTo">
                                <li>Checklist for One Person Company Registration in India</li>
                            </a>
                            <a href="#Required" className="scrollTo">
                                <li>Documents Required for OPC Registration in India</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>Procedure for One Person Company Registration</li>
                            </a>
                            <a href="#Restrictions" className="scrollTo">
                                <li>Restrictions on One Person Company</li>
                            </a>
                            <a href="#LLP" className="scrollTo">
                                <li>Compliances for One Person Company in India</li>
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
                <p className="small-heading text-center">One Person Company - Incorporation Certificate [Sample]</p>
                <div>
                    <Image alt="A certificate of incorporation for an OPC" className="certificate h-100 w-100" loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
