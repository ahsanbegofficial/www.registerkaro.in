import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/msme-registration-online/benefits_of_msme_registration.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps { cityName: string; }
export const BenefitsMSME = ({ cityName }: HeroProps) => {
  return ( 
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='BenefitsMSME'>
        <div className='flex-4 justify-content-center' >
            <Image alt="Benefits of MSME Registration Online" className="BenefitsMSME-img w-100" height={682} loading="lazy" src={dft} />
          </div>
      <div className='flex-7'>
        <p>Before beginning the registration procedure, it is critical to understand why MSME registration online is advantageous:</p>
        <h3>a. Credit:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />MSMEs with a valid registration can obtain lower-interest loans from a variety of financial institutions.</li>
        </ul>
        <h3>b. Government Schemes:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Registered MSMEs can take advantage of government schemes and subsidies that help lower operational expenses and encourage growth.</li>
        </ul>
        <h3>c. Priority financing:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Banks are required to lend a specific amount of their overall credit to MSMEs, and registration makes such priority financing more accessible.</li>
        </ul>
        <h3>d. Technology Upgrade Subsidies:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />MSMEs can receive subsidies to upgrade their technology and improve their competitiveness.</li>
        </ul>
        <h3>e. Market Preference:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Many government tenders and procurement opportunities are frequently designated for MSMEs, providing them with a competitive advantage.</li>
        </ul>
        <h3>f. Ease of Obtaining Licences:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />MSME registration Online makes it easier to obtain licenses and permits.</li>
        </ul>
      </div>
      
    </div>
  )
}