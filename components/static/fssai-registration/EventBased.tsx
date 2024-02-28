import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/fssai/benefits.svg'


interface HeroProps {
  cityName: string;
}

export const EventBased = ({ cityName }: HeroProps) => {
  return (
    <div id='EventBased'>
      <p className='main-para mb-1'>Following are some crucial benefits of FSSAI Registration/License in {cityName}:</p>
      <div className='benefits flex w-80 m-auto mobile-flex-column-reverse mt-5' >
        <div className='flex-5'>
          <p><strong>1: </strong>FSSAI License ensures increased customer loyalty and it establishes trust with the targeted customers.</p>
          <p><strong>2: </strong>It ensures no legal issues arise so the business can grow.</p>
          <p><strong>3: </strong>It also ensures business growth & increased revenue.</p>
          <p><strong>4: </strong>Having an FSSAI License can benefit the food industry legally, increase reputation, ensure food safety, increase awareness & help with business growth.</p>
          <p><strong>5: </strong>It helps in the regulation of import food manufacturing, distribution, sales & storage.</p>
        </div>
        <div className='flex-5'>
          <Image alt="Benefits of FSSAI Registration" className="EventBased-img w-100" height={400} loading="lazy" src={bft} />
        </div>
      </div>
    </div>
  )
}
