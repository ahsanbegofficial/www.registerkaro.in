import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/society-registration/registration_of_a_society_in_india.svg'
interface HeroProps { cityName: string;}
export const Registration = ({ cityName }: HeroProps) => {
  return (

  <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Registration'>
   
    <div className='flex-5'>
        <p>Following are some checklist for Society Registration in {cityName}:</p>
        <p><strong>1: </strong>A Society can be created by a minimum of 7 or more persons. Apart from persons from {cityName}, companies, foreigners, as well as other registered societies can also register for the Memorandum of association of the society.</p>
        <p><strong>2: </strong>Similar to Partnership firms, society can also be either unregistered or registered. But, only the registered societies will be able to withstand consigned properties and/or have an ensemble filed against or by the society.</p>
        <p><strong>3: </strong>Society registration is maintained by state governments. Thus, the application for society registration must be created to the specific authority of the state, where the registered office of the society is situated.</p>
        <p><strong>4: </strong>For Society registration, the establishing members must agree with the name of society first and then prepare for the Memorandum, followed by Rules & Regulations of the society.</p>
      
      </div>
      <div className='flex-5'>
      <Image alt="Registration of a Society In IndiaRegistration of a Society In India" className="Registration-img w-100" height={570} loading="lazy" src={bft} />
    </div>
    </div>
  )
}
