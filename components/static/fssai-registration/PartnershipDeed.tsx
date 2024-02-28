import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/fssai/eligibity.svg'
import ulArrow from '../../../assets/images/static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const PartnershipDeed = ({ cityName }: HeroProps) => {
  return (
    <div >
      <p className='main-para mb-0' id='PartnershipDeed'>The following are the eligibility criteria for FSSAI Registration:</p>
      <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
        <div className='flex-6'>
          <h3>1. Criteria for FSSAI Basic Registration:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="This Licence is only for small manufacturers" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This Licence is only for small manufacturers, marketers, storage units, cake shops, distributors, retail shops, transporters, restaurants, etc., basically, any small business having an annual turnover of Rs. 12 lakhs or less than Rs. 12 lakhs.</li>
            <li><Image alt="This Licence is valid for a maximum of 5 years and a minimum of 1 year" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This Licence is valid for a maximum of 5 years and a minimum of 1 year.</li>
          </ul>
          <h3>2. Criteria for FSSAI State License:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="SSAI State License is for SMEs" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />FSSAI State License is for SMEs (Small-Medium Enterprises) such as storage houses, marketers, distributors, transporters, etc.;</li>
            <li><Image alt="he Company must have its operation in only one state" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Company must have its operation in only one state;</li>
            <li><Image alt="he business must have an annual turnover of more than  Rs. 12 lakhs and less than Rs. 20 crores" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The business must have an annual turnover of more than  Rs. 12 lakhs and less than Rs. 20 crores;</li>
            <li><Image alt="FSSAI State License is issued for 5 years & a minimum of 1 year" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />FSSAI State License is issued for 5 years & a minimum of 1 year.</li>
          </ul>
          <h3>3. Criteria for FSSAI Central License:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="Companies operating as importers in the food business" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Companies operating as importers in the food business or export-oriented business, large manufacturers, and operators in the Central Government Agencies, ports, or airports must have FSSAI Central License;</li>
            <li><Image alt="A Company must have a Licence for the Head Office" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A Company must have a Licence for the Head Office in case it is operational in different states or cities;</li>
            <li><Image alt="FSSAI Central License is for all Food Business Operators" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />FSSAI Central License is for all Food Business Operators having an annual turnover of Rs. 20 crores or more;</li>
            <li><Image alt="This license is issued for 5 years and a minimum of 1 year" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This license is issued for 5 years and a minimum of 1 year.</li>
          </ul>
        </div>
        <div className='flex-4 justify-content-center'>
          <Image alt="Eligibility Criteria for FSSAI Registration" className="PartnershipDeed-img w-100" height={750} loading="lazy" src={dft} />
        </div>
      </div>
    </div>
  )
}