import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/private-reg/documents.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentRequired flex w-80 m-auto mobile-flex-column' id='Eligibility'>
      <div className='flex-4s'>
        <Image alt="Eligibility Criteria for Section 8 Company Registration" className="Eligibility-img w-100" loading="lazy" src={documents} height={470} />
      </div>
      <div className='flex-6'>
        <p>Following is the eligibility criteria for Section 8 Company Registration in {cityName}:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="At least 1 Director is required and he or she should be a resident of {cityName}" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> At least 1 Director is required and he or she should be a resident of {cityName}</li>
          <li><Image alt="HUF, an individual is eligible to commence a Section 8 Company in {cityName}" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> HUF, an individual is eligible to commence a Section 8 Company in {cityName}</li>
          <li><Image alt="The objective of the Company should be one or more of the following – the advancement of science & art, social welfare, promotion of sports/arts, and financial support to lower-income groups" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The objective of the Company should be one or more of the following – the advancement of science & art, social welfare, promotion of sports/arts, and financial support to lower-income groups</li>
          <li><Image alt="2 or more individuals who will act as Directors/Shareholders should fulfill all the compliance & requirements of the Section 8 Company Registration under the Companies Act" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> 2 or more individuals who will act as Directors/Shareholders should fulfill all the compliance & requirements of the Section 8 Company Registration under the Companies Act</li>
          <li><Image alt="Directors, founders, and Members Directors of the Company cannot draw any remuneration in any form of cash or kind" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Directors, founders, and Members Directors of the Company cannot draw any remuneration in any form of cash or kind</li>
          <li><Image alt="No profit should be shared or distributed among the Directors & members of the Company indirectly/directly" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> No profit should be shared or distributed among the Directors & members of the Company indirectly/directly</li>
        </ul>
      </div>
    </div>
  )
}