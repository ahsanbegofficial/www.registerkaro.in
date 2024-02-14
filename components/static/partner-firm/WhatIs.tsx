import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'

export const WhatIs = () => {
  return (
    <div className='checklist' id='WhatIs'>
      <p className='main-para'>It’s a relationship between two people who have agreed to share the business profits carried on by all/any one of them acting for all as mentioned in Section 4 of the Indian Partnership Act. Hence, a Partnership includes 3 main elements:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 10 members are required for the Registration in India"/>
          </div>
          <p>A Partnership must be an outcome of an agreement between 2 or more individuals</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="A minimum capital of Rs. 5 lakhs required"/>
          </div>
          <p>The business or a company must be run by all or any of them representing the rest</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Out of 10 members, at least 5 Directors are required"/>
          </div>
          <p>The agreement must be drafted to share the business profits.</p>
        </div>
      </div>
     
    </div>
  )
}
