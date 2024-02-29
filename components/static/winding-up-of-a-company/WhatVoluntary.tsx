import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/winding-up-of-a-company/what-voluntary.svg'

interface HeroProps {
  cityName: string;
}

export const WhatVoluntary  = ({ cityName }: HeroProps) => {
  return (
    <div id='WhatVoluntary'>
       <div className='flex-5'>
          
            <Image alt="What is voluntary winding up of a company, The voluntary winding up of a company is the second way to achieve closure. The procedure is often started by the company’s partners or shareholders, who do this by passing a special resolution. When the shareholders believe that the company will become bankrupt and unable to pay its debts, they decide to wind it up voluntarily. By disposing off its assets and paying off any remaining debts, the winding up procedure puts an end to the corporation’s existence." className="WhatVoluntary-img w-100" height={520} loading="lazy" src={bft} />
          </div>
      <p className='main-para mb-2'> The voluntary winding up of a company is the second way to achieve closure. The procedure is often started by the company’s partners or shareholders, who do this by passing a special resolution. When the shareholders believe that the company will become bankrupt and unable to pay its debts, they decide to wind it up voluntarily. By disposing off its assets and paying off any remaining debts, the winding up procedure puts an end to the corporation’s existence.</p>
      <p className='main-para mb-2'>The main objective of the wind-up is to make a profit from the company, which has neither a promising future nor a remaining mission. The court does not require this kind of winding up or liquidation. It is only authorized by the company’s board of directors and shareholders, even under unfavorable market conditions where stakeholders believe the business is having difficulties as a result. They can then enact a resolution to dissolve the business.</p>
    
      </div>
  )
}
