import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/iec-registration/Prerequisites_for_applying.svg'
interface HeroProps {
    cityName: string;
}
export const EventBased = ({ cityName }: HeroProps) => {
  return (
    <div id='EventBased'>
    <p className='main-para'>To apply for IEC Registration online, the following prerequisites are required:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      <div className='flex-7 pt-5'>
        <p>A valid PAN Card issued by the Income Tax Department of {cityName} is compulsory;</p>
        <p>The applicant must have a bank account in the firm’s name or individual, as IEC Certificate is issued in the applicant’s name;</p>
        <p>The business entity must be registered under the ROCs;</p>
        <p>The applicant needs to submit the vital documents to the DGFT office.</p>
        </div>
       <div className='flex-5'>
          <Image alt="Prerequisites for applying IEC Code in India" className="Prerequisites-img w-100" height={350} loading="lazy" src={bft} />
      </div>
    
     </div>
      </div>
  )
}
