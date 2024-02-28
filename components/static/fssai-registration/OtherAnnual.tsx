import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/fssai/who.svg'

interface HeroProps {
  cityName: string;
}

export const OtherAnnual = ({ cityName }: HeroProps) => {
  return (
    <div id='OtherAnnual'>
      <p className='main-para mb-2'> FBOs or Food Business Operators are those involved in the processing, storing, manufacturing, selling, packaging, distributing, or retailing of food in {cityName}. In {cityName}, Food Businesses are regulated & managed by FSSAI.:</p>
      <div className='benefits flex w-80 m-auto mobile-flex-column mt-5' >
        <div className='flex-4'>
          <Image alt="Food Business Operators in {cityName}" className="OtherAnnual-img w-100" height={650} loading="lazy" src={bft} />
        </div>
        <div className='flex-6'>
          <p><strong>Following are some duties & responsibilities of Food Business Operators in {cityName}:</strong></p>
          <p><strong>1: </strong>Every FBO in {cityName} must obtain a Licence from the food safety authority in their State/UT and they must also follow all the food Safety & hygiene standards laid out by the Authority.</p>
          <p><strong>2: </strong>Food Business Operators must ensure that the food they serve is safe for human consumption & doesn’t risk customers’ health. They must also take all important measures to prevent the spread of any disease.</p>
          <p><strong>3: </strong>Food Business Operators in {cityName} must keep their premises clean & free from dust, dirt & other contaminants. They must also maintain proper sanitation facilities.</p>
          <p><strong>4: </strong>Food Business Operators must label all their food products properly. The label should contain all the vital details regarding the product, including the list of ingredients, the manufacture date, the shelf life & storage instructions.</p>
          <p><strong>5: </strong>Food Business Operators must keep all records of all food items they process, sell, or manufacture. These records must be made available to the Authority upon request.</p>
          <p><strong>6: </strong>Food Business Operators must allow the Food Safety Authority to inspect their facilities at any time and they must also cooperate with the Authority in investigating food-related incidents/complaints.</p>
        </div>
      </div>
    </div>
  )
}
