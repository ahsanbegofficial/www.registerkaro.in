import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/gumasta-license/documents_required_for_gumasta.svg'
interface HeroProps {
  cityName: string;
}

export const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div id='DocumentsRequired'>
    
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-1'>
          <Image alt="Documents required for Gumasta License" className="DocumentsRequired-img w-100" height={520} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-1'>
      <p><strong>1:</strong>Annexure [premises of Establishment]</p>
      <p><strong>2:</strong>Annexure A [self-declaration]</p>
      <p><strong>3:</strong>Annexure B [self-declaration for attestation]</p>
      <p><strong>4:</strong>Annexure C [undertaking]</p>
      <p><strong>5:</strong>Photo of the applicant</p>
      <p><strong>6:</strong>Signature of the applicant</p>
      <p><strong>7:</strong>Proof of Identity of Applicant [Driving License, Passport, Aadhar Card, PAN Card]</p>
      <p><strong>8:</strong>Fee receipt [in case of old user]</p>
      <p><strong>9:</strong>Management staff details</p>
      </div>
     </div>
      </div>
  )
}
