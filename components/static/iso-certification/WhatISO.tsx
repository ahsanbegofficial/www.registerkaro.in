import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}
export const WhatISO = ({ cityName }: HeroProps) => {
  return (
    <div  id='WhatISO'>
      <p className='main-para'>It’s an activity that companies or businesses conduct to confirm, evaluate & verify processes regarding the quality, safety, & quality of goods and services so that companies are able to confirm the Management System has been implemented. Following are the objectives of conducting an ISO Audit:</p>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />To check the suitability of standards, procedures, regulations & conditions of implementation in your company or organization;
          </li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />To fulfill all the customer requirements or market demands;
          </li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />To make sure consistency in the implementation of processes;
          </li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />To follow all the statutory & regulatory requirements;
          </li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />To look for areas for improvement & to develop key processes & working conditions in your company or organization.
          </li>
          </ul>
          <h3 className='pt-5'>There are 3 different types of audits that you must know to maintain your ISO Certification & check the effectiveness of your Company’s operations & processes.</h3>

          <div className=' pt-5'>
            <p><strong>1st-Party Audit:</strong> It’s an audit carried out within your Company and it is also known as internal audit. Your company must plant the internal audit programme & schedule its implementation date. This audit is generally carried out as an evaluation of compliance with ISO Standards like ISO 14001:2015, ISO 9001:2015, or ISO 45001 and other standards as per Company’s needs.</p>
            <p><strong>2nd Party Audit:</strong> It is also known as Supplier Audit and it is conducted by the customer/purchaser on a supplier or company providing products/services to the purchaser. In this instance, as long as your company have a purchasing process, a 2nd party audit is generally inevitable for vital goods or services.</p>
            <p><strong>3rd Party Audit:</strong> It’s also known as a Certification audit and this audit is always carried out by the Auditors of a Certification Body. This aims to help your Company in getting ISO Certification to the relevant ISO Standard by a certified Certification Body and this body must be accredited by a certified accreditation body as well.</p>
          </div>
      </div>
    
      </div>
    </div>
  )
}