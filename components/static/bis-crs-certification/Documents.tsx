import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/document_required.svg'

interface HeroProps {  cityName: string;}
export const Documents = ({ cityName }: HeroProps)  => {
  return (
    <div id='Documents'>
      <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-0'>
          <Image alt="Documents Crucial for BIS CRS Certification" className="Documents-img w-100" height={250} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
       <p className='main-para my-2'>Vital documents such as business licenses, ISO certificates, application forms, testing documents, and product manuals form the bedrock of BIS CRS Certification. Foreign manufacturers must furnish an Authorized Indian Representative and Affidavit.</p>
       </div>
       </div>
    </div>
  )
}