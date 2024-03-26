import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/shop-and-establishment-act-registration/What_are_the_various_regulations.svg'
interface HeroProps {
    cityName: string;
}
export const WhatRegulations = ({ cityName }: HeroProps) => {
  return (
    <div id='WhatRegulations'>
       <p className='main-para'>Following are the regulations under the Shop and Establishment Act:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-5 '>
          <Image alt="What are the various regulations under the Shop and Establishment Act?" className="WhatRegulations-img w-100" height={590} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
      <p className='pt-3'>1: Inspection & Enforcement;</p>
      <p className='pt-3'>2: Record keeping by the employers;</p>
      <p className='pt-3'>3: Prohibition of employment of children;</p>
      <p className='pt-3'>4: Dismissal Provisions;</p>
      <p className='pt-3'>5: Working hours, annual leave, weekly holidays;</p>
      <p className='pt-3'>6: Interval for rest;</p>
      <p className='pt-3'>7: Prohibition of employing women & young individuals in the night shift;</p>
      <p className='pt-3'>8: Payment of wages & compensation;</p>
      <p className='pt-3'>9: Opening & closing hours.</p>
      </div>
     </div>
     </div>

  )
}
