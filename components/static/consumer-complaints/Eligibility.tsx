import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/consumer-complaints/eligitbility-to-file.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps { cityName: string; }


export const Eligibility  = ({ cityName }: HeroProps) => {
  return (
    <div id='Eligibility' >
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column'>
     <div className='flex-4 justify-content-center'>
        <Image alt="Eligibility to file a complaint,Consumer associations,Legal heirs" className="Eligibility-img w-100" height={682} loading="lazy" src={dft} />
      </div>
      <div className='flex-7'>
        <p>If you are the expected applicant, then you need to fall in one of the following categories, in order to be eligible for filing a consumer complaint:</p>
        <h3>Consumers :</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Any individual who buys products or services for domestic, business, or personal use is considered a consumer. If customers feel they have been taken advantage of, defrauded, or experienced any other type of loss as a result of the goods or services they have acquired, they have the option to submit complaints in consumer court.</li>
        </ul>
        <h3>Consumer associations:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />On behalf of their members, registered consumer associations may bring complaints in consumer court. The association needs to have at least 100 members and be registered for at least five years in order to be qualified to make a complaint.</li>
        </ul>
        <h3>Legal heirs:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />If the applicant is the legal heir or representative of the deceased who was the victim of the product or service availed, can file the application on behalf of the deceased</li>
        </ul>
        <h3>Power of attorney:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A consumer may grant a power of attorney to someone to act on their behalf if they are unable to appear in person before the consumer court.</li>
        </ul>
        <h3>Eligible Authority:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> If a company violates consumer protection laws, certain government authorities and regulatory bodies, like the Securities and Exchange Board of { cityName }:, the Food Safety and Standards Authority of { cityName }:, and the Telecom Regulatory Authority of { cityName }:, may file a complaint in the consumer court.</li>
        </ul>
      </div>
     
      </div>
    </div>
  )
}