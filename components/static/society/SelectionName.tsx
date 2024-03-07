import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/society-registration/slection_name.svg'
interface HeroProps { cityName: string;}
export const SelectionName = ({ cityName }: HeroProps) => {
  return (
    <div  id='SelectionName'>
        <div className='benefits flex w-80 m-auto mobile-flex-column' id='Registration'>
    <div className='flex-4'>
      <Image alt="When selecting a name for society registration, it is vital to understand that according to Society Act, 1860" className="SelectionName-img w-100" height={330} loading="lazy" src={bft} />
    </div>
    <div className='flex-5 pt-5'>
      <p className='main-para'>When selecting a name for society registration, it is vital to understand that according to Society Act, 1860, an identical or similar name of a currently registered society will not be allowed. Moreover, the proposed name shall not suggest for any patronage of the state government or the government of {cityName} or fascinate the provisions of the Emblem & Names Act, 1950.</p>
      </div>
     
    </div>
    </div>


  )
}
