import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/eligibility_criteria_for_the_registration.svg'

interface HeroProps {  cityName: string;}
export const Eligibility = ({ cityName }: HeroProps)   => {
  return (
    <div id='Eligibility'>
      <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      <div className='flex-6 pt-5'>
       <p className='main-para my-2'>Manufacturers producing items encompassed by the Compulsory Registration Order must seek BIS CRS Certification. Various forms, including Application, Undertaking, Affidavit, and others, are imperative for this process.</p>
       </div>
       <div className='flex-4 mt-2'>
          <Image alt="Eligibility for BIS CRS Certification: Unveiling the Criteria" className="Eligibility-img w-100" height={250} loading="lazy" src={bft} />
      </div>
    
    </div>
    </div>
  )
}