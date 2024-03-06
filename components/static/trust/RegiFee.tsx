import Image from 'next/image'
import React from 'react'
import categories_of_trusts_in_india from '../../../assets/images/static/trust-registration/help_register.svg'
interface HeroProps { cityName: string;}
export const RegiFee = ({ cityName }: HeroProps) => {
  return (
    <div id='RegiFee'> 
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' >
     
      <div className='flex-7'>
       <p className='main-para mt-4'>At RegisterKaro, our team of experts is dedicated to offering the essential assistance needed for Trust Registration and ensuring compliance. Trust registration in {cityName} involves complex legal implications that demand meticulous attention. Our professionals ensure that you acquire a comprehensive understanding of the governing provisions of Trust in {cityName}, empowering you to engage in Trust-related activities with minimal legal complications.</p>
       </div>
       <div className='flex-3'>
      <Image alt="At RegisterKaro, our team of experts is dedicated to offering the essential assistance needed for Trust Registration and ensuring compliance. Trust registration in India involves complex legal implications that demand meticulous attention" className="RegiFee-img w-100" loading="lazy" src={categories_of_trusts_in_india} height={300} />
      
      </div>
    </div>
    </div>
  )
}