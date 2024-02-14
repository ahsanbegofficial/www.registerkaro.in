import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/pvt-reg/documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const Eligibility = () => {
  return (
    <div className='DocumentRequired flex w-80 m-auto mobile-flex-column' id='Eligibility'>
      <div className='flex-3'>
        <Image alt="documents" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={430} />
      </div>
      <div className='flex-7'>
        <p>Following is the eligibility criteria for Section 8 Company Registration in India:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> At least 1 Director is required and he or she should be a resident of India</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> HUF, an individual is eligible to commence a Section 8 Company in India</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The objective of the Company should be one or more of the following – the advancement of science & art, social welfare, promotion of sports/arts, and financial support to lower-income groups</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> 2 or more individuals who will act as Directors/Shareholders should fulfill all the compliance & requirements of the Section 8 Company Registration under the Companies Act</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Directors, founders, and Members Directors of the Company cannot draw any remuneration in any form of cash or kind</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> No profit should be shared or distributed among the Directors & members of the Company indirectly/directly</li>
        </ul>
      </div>
    </div>
  )
}