import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/epf-registration/Eligibility_crieteria.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const EligibilityCriteria = () => {
  return (
    <div id='EligibilityCriteria' >
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
     <div className='flex justify-content-center' >
        <Image alt="Eligibility Criteria for EPF Registration in India" className="Eligibility-img w-100" height={382} loading="lazy" src={dft} />
      </div>
      <div className='flex-7'>
        <p>EPF in India is the primary way for employees to save for retirement and it’s managed by EPFO. The Employees’ Provident Fund & Miscellaneous Provisions Act, 1952 sets out who can join</p>
        <h3>For Employees:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Employees who earn less than Rs. 15,000/month must join the EPF & make regular contributions;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Employees whose salary is more than Rs. 15,000/month at the joining time aren’t required to make PF contributions. Yet, they can still opt to join the Employee Provident Fund & make contributions with the employer agreement & the Assistant PF Commissioner.</li>
          </ul>
        <h3>For Employers:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />EPF Registration is compulsory for all businesses or organisations that employ 20 or more people;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> If a business or organisation employs at most 20 people, it may still require EPF Registration if specified by the Central Government notification.</li>
          </ul>
      </div>
      
      </div>
    </div>
  )
}