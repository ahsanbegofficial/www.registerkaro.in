import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'

interface HeroProps {
  cityName: string;
}

export const Checklist = ({ cityName }: HeroProps) => {
  return (
    <div id='Checklist'>
     
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
          </div>
          <p>Complaints regarding product quality can be filed with BIS.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Unique business name" />
          </div>
          <p>BIS Officers take three months to examine filed complaints.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="At least one director should be the resident of {cityName}" />
          </div>
          <p>The ISI Mark Certification details must be specified on every invoice.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Registered office address" />
          </div>
          <p>BIS regularly monitors all manufacturers.</p>
        </div>
      </div>
    </div>
  )
}
