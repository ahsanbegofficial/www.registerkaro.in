import React from 'react'
import certificate from '../../../assets/images/static/society/society_registration_certificate.png';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>A society is an association of several individuals combined using a mutual accord to deliberate, govern and act cooperatively for some communal purpose. Societies are usually registered for the advancement of charitable activities like sports, music, culture, religion, art, education, etc. Society Registration, under, The Society Registration Act, in India, lays down certain procedures for the sake of society registration & operation. This act was implemented with the purpose of augmenting the legal stipulations of society registration for the advancement of literature, fine arts, science or distribution of awareness for bountiful purposes. The Society Registration Act, 1860 has been accepted by several state governments without or with further amendments.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Purpose" className="scrollTo">
                                <li>Purpose of Society Registration</li>
                            </a>
                            <a href="#Registration" className="scrollTo">
                                <li>Registration of a Society In India</li>
                            </a>
                            <a href="#SelectionHead" className="scrollTo">
                                <li>Selection of a Name and Memorandum of Association</li>
                            </a>
                            <a href="#WhySocietyRegi" className="scrollTo">
                                <li>Why to go for Society Registration?</li>
                            </a>
                            <a href="#Documents" className="scrollTo">
                                <li>Documents you will need for Society Registration</li>
                            </a>
                            <a href="#UnderstandProcess" className="scrollTo">
                                <li>Understand the Process for Society Registration</li>
                            </a>
                            <a href="#Dissolution" className="scrollTo">
                                <li>Dissolution of a registered Society</li>
                            </a>
                            <a href="#RenewSociety" className="scrollTo">
                                <li>When to Renew Society Registration Certificate in India?</li>
                            </a>
                            <a href="#Renewal" className="scrollTo">
                                <li>Renewal Process for Society Registration Certificate</li>
                            </a>
                            <a href="#HowToRegister" className="scrollTo">
                                <li>How RegisterKaro assist you with Society Registration?</li>
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
                <p className="small-heading text-center w-80 ">Society Registration [Sample]</p>
                <div>
                    <Image alt="A society is an association of several individuals combined using a mutual accord to deliberate, govern and act cooperatively for some communal purpose. Societies are usually registered for the advancement of charitable activities like sports" className="certificate h-100 w-80 " loading="lazy" src={certificate}/>
                </div>
            </div>
        </div>
    )
}
