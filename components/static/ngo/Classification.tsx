import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/ngo/classification_of_ngos_new.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {cityName: string;}
export const Classification = ({ cityName }: HeroProps)  => {
  return (
    <div className='Classification flex w-80 m-auto mobile-flex-column-reverse' id='Classification'>
      <div className='flex-6'>
       
        <p>NGOs in {cityName} can be classified based on their orientation and level of operation:</p>
      
        <h3>1. By the Level of Orientation:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Charitable Orientation</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Service Orientation</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Participatory Orientation</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Empowering Orientation</li>
        </ul>
        
        <h3>2. By the Level of Operation:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Community-Based Organization</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />City-Wide Organization</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />National NGOs</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />International NGOs</li>
        </ul>
    </div>
        <div className='flex-4'>
        <Image alt="Classification of NGOs in IndiaNGOs in India can be classified based on their orientation and level of operation:,By the Level of Orientation" className="Classification-img w-100" loading="lazy" src={documents} height={530} />
        </div>
    </div>
  )
}