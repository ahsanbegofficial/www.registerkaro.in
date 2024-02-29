
import React from 'react'

interface HeroProps {
  cityName: string;
}

export const PartnershipDeed = ({ cityName }: HeroProps) => {
  return (
    <div id='PartnershipDeed'>
        <p className='main-para my-2'id='PartnershipDeed'>The ISI certificate holds a validity of one year and can be renewed by submitting a renewal application along with the prescribed fees. The renewal application undergoes scrutiny by a Practicing Chartered Accountant (CA).</p>        
    </div>
  )
}