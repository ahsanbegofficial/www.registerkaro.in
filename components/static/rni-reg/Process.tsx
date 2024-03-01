import React from 'react'
import certificate from '../../../assets/images/static/rni-registration/rni_registration_certificate.svg';
import Image from 'next/image';

interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The regulation of any Newspaper, magazines, or editorial is maintained under the law which demands an authentication of such publication. The body regulating the publications in { cityName } is called Registrar of the Newspaper for { cityName }. The Registrar of the Newspapers must provide the owners of any new newspapers, periodicals, or printed publications in { cityName } an RNI registration. Under the <strong>Press and Registration of Books Act, 1867 (PRB)</strong>, our Ministry of Information and Broadcasting oversees and establishes guidelines for the Registrar of Newspapers for { cityName } (RNI). Starting a business that sells newspapers, magazines, journals, etc. requires RNI approval.  The RNI’s duties include maintaining and compiling the Register of published newspapers, giving the newspapers the RNI certificate so they can print them, checking the published contents and confirming the circulation claims. Although the need was limited to newspapers, things have altered as a result of digitization and the availability of news on digital media. Online news portals are exempt from RNI Registration under the new regulations.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyNeed" className="scrollTo">
                                <li>Why do you need RNI Registration?</li>
                            </a>
                            <a href="#NeedRNI" className="scrollTo">
                                <li>When do you need RNI Registration?</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents you might need for RNI Registration</li>
                            </a>
                            <a href="#ProcessRNI" className="scrollTo">
                                <li>Process of RNI Registration</li>
                            </a>
                            <a href="#ChooseRegisterKaro" className="scrollTo">
                                <li>Why Choose RegisterKaro for your RNI Registration?</li>
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
                <p className="small-heading text-center">RNI Registration Certificate [Sample]</p>
                <div>
                    <Image alt="RNI Registration Certificate,The regulation of any Newspaper, magazines, or editorial is maintained under the law which demands an authentication of such publication. The body regulating the publications in India is called Registrar of the Newspaper for India. The Registrar of the Newspapers must provide the owners of any new newspapers, periodicals, or printed publications in India an RNI registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
