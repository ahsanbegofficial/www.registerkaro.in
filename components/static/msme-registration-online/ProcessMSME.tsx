import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/msme-registration-online/process_for_msme_regis.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps { cityName: string; }
export const ProcessMSME = ({ cityName }: HeroProps) => {
  return (      
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='ProcessMSME'>
       <div className='flex-3 justify-content-center' >
        <Image alt="Process for MSME Registration Online" className="ProcessMSME-img w-100" height={482} loading="lazy" src={dft} />
      </div>
      <div className='flex-7'>
        <p>Due to online platforms, applying for MSME registration online in { cityName } has become a simple process. Here’s a step-by-step procedure:</p>
        <h3>a. Proceed to the Udyam Registration Portal:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The ‘Udyam Registration portal (https://udyamregistration.gov.in) is the official gateway for MSME registration Online.</li>
        </ul>
        <h3>b. Input Aadhaar Number:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />To begin, input your 12-digit Aadhaar number. Check that your Aadhaar information is up to date.</li>
        </ul>
        <h3>c. Business details:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Enter your company’s details, such as name, kind, and location.</li>
        </ul>
        <h3>d. Investment and Turnover:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Enter information about your company’s investment in plant and machinery or equipment (if manufacturing) or turnover (if providing services).</li>
        </ul>
        <h3>e. Verification:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Once all information has been provided, double-check it for accuracy.</li>
        </ul>
        <h3>f. Generation of Udyam Registration Number:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />After verification, the portal will generate a Udyam Registration Number, which will be used to register your MSME.</li>
        </ul>
        <h3>g. MSME Certificate:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />You can print your MSME certificate, which serves as proof of registration. When working with banks or government institutions, this certificate comes in handy.</li>
        </ul>
      </div>
     
      </div>
 
  )
}