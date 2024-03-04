import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/msme-registration-online/which_entities_are_eligible_for_msme.svg'
interface HeroProps { cityName: string; }
export const WhichEntities = ({ cityName }: HeroProps) => {
  return (

    <div className='benefits flex w-80 m-auto mobile-flex-column' id='WhichEntities'>
       <div className='flex-4 mt-1'>
          <Image alt="Which Entities are eligible for MSME Online?" className="WhichEntities-img w-100" height={450} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p>The following entities are eligible for MSME Registration Online:</p>
      <p>1: Individuals, startups, business owners, and entrepreneurs</p>
      <p>2: Private and public limited companies</p>
      <p>3: Sole proprietorship</p>
      <p>4: Partnership firm</p>
      <p>5: Limited Liability Partnerships (LLPs)</p>
      <p>6: Self Help Groups (SHGs)</p>
      <p>7: Co-operative societies</p>
      <p>8: Trusts</p>
      </div>
     </div>

  )
}
