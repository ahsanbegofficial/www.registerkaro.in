import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/iec-registration/Document_ Required.svg'
interface HeroProps {
    cityName: string;
}
export const DocsReq = ({ cityName }: HeroProps) => {
  return (
    <div id='DocsReq'>
    <p className='main-para'>The following are the documents required for IEC Registration in {cityName}:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
      <div className='flex-4 '>
          <Image alt="Documents Required for IEC Registration" className="Documents-img w-100" height={350} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 pt-5'>
      <p>Copy of PAN Card of an individual, firm, or Company;</p>
      <p>Cancel cheque copies of current bank accounts of an individual, firm, or Company;</p>
      <p>Copy of rent or lease agreement or electricity bill copy of the premise;</p>
      <p>Aadhar Card, Voter id, or passport copy of an individual;</p>
      <p>A self-addressed envelope for delivery of IEC Certificate by registered post.</p>
      </div>
    
     </div>
      </div>
  )
}
