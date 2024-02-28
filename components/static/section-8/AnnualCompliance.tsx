import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/static/section-8-reg/Annual.svg'

interface HeroProps {
  cityName: string;
}

export const AnnualCompliance = ({ cityName }: HeroProps) => {
  return (
    <div className='pvtReg flex w-80 m-auto mobile-flex-column' id='AnnualCompliance'>
      <div className='flex-4'>
        <Image alt="Annual Compliances for Section 8 Companies" className="AnnualCompliance-img w-100" height={400} loading="lazy" src={pvtReg} />
      </div>
      <div className='flex-6'>
        <p>Following are the annual compliances for Section 8 Company:</p>
        <ol>
          <li>Mandatory Audit Report</li>
          <li>Maintenance of Books of Accounts</li>
          <li>ITR filing</li>
          <li>Conduct a minimum of 2 board meetings in a year</li>
          <li>Preparation of Financial Statements</li>
          <li>Filing of financial statements in Form AOC-4</li>
          <li>An Annual Return is to be filed every year with other e-filing forms like MGT-7</li>
          <li>Additional compliance to fulfil the Registration like 12AA, 80G, etc</li>
        </ol>
      </div>
    </div>
  )
}