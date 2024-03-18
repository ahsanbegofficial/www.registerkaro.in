import React from 'react'
import certificate from '../../../assets/images/static/epf-registration/Get_Online_EPF_Registration_in_India_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In India, EPF or Employees Provident Fund is a scheme under the <strong>Employees’ Provident Funds & Miscellaneous Provisions Act, 1952</strong> and it is regulated under the <strong>EPFO (Employees’ Provident Fund Organisation)</strong>. All the establishments in India that have employed 20 or more than 20 employees can apply for PF Registration in India. In some instances subject to the conditions & the exemption establishments employing less than 20 are still eligible for EPF Registration in India. The employee gets an amount that includes the employer and the employee’s contribution with interest on resignation or retirement.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#EventBased" className="scrollTo">
                                <li>What is EPFO and its objectives?</li>
                            </a>
                            <a href="#Applicability" className="scrollTo">
                                <li>Applicability of EPF Registration </li>
                            </a>
                            <a href="#KeyInitiatives" className="scrollTo">
                                <li>What are the Benefits of EPF in India?</li>
                            </a>
                            <a href="#EligibilityCriteria" className="scrollTo">
                                <li>Eligibility Criteria for EPF Registration in India</li>
                            </a>
                            <a href="#DifferentTypes" className="scrollTo">
                                <li>What are the Different Types of EPF Forms?</li>
                            </a>
                            <a href="#ObjectivesChecklist" className="scrollTo">
                                <li>Important details need to provide for the Registration under EPFO</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents Required for EPF Registration</li>
                            </a>
                            <a href="#OurProcedure" className="scrollTo">
                                <li>Our Procedure for Online EPF Registration in India</li>
                            </a>
                            <a href="#WithdrawlPF" className="scrollTo">
                                <li>What are the PF Withdrawal Rules after the Registration under EPFO?</li>
                            </a>
                            <a href="#WhoExemptedRegi" className="scrollTo">
                                <li>Who is exempted from EPF Registration in India?</li>
                            </a>
                            <a href="#MandatoryCompliance" className="scrollTo">
                                <li>Mandatory Compliance</li>
                            </a>
                            <a href="#PartnershipDeed" className="scrollTo">
                                <li>What is the Due Date for PF Filing?</li>
                            </a>
                            <a href="#TableCom" className="scrollTo">
                                <li>Penalty Prescribed for the Employer’s Delay</li>
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
                <p className="small-heading text-center">EPF Registration certificate [Sample]</p>
                <div>
                    <Image alt="Get Online EPF Registration in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
