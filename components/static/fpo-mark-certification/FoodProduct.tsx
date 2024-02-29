import Image from 'next/image'
import React from 'react'
import food_product from '../../../assets/images/static/fpo-mark-certification/food-products-requiring-fpo-mark.svg'

interface HeroProps {
  cityName: string;
}
export const FoodProduct = ({ cityName }: HeroProps) => {
  return (
    <div id='FoodProduct'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-1'>
          <Image alt="Food Products Requiring FPO Mark,Syrups, synthetic beverages and sharbat," height={660} loading="lazy" className='FoodProduct-img w-100' src={food_product} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1:</strong>Syrups, synthetic beverages and sharbat</p>
      <p><strong>2:</strong>Vinegar</p>
      <p><strong>3:</strong>Pickles</p>
      <p><strong>4:</strong>Dehydrated vegetables and fruits.</p>
      <p><strong>5:</strong>Crushes, squashes, barley water, barrelled juice, cordials and other beverages containing fruit pulp, juice or nectar</p>
      <p><strong>6:</strong>Jellies, jams and marmalades</p>
      <p><strong>7:</strong>Tomato products, such as sauces and ketchup</p>
      <p><strong>8:</strong>Candied, preserved and crystallised peels and fruits</p>
      <p><strong>9:</strong>Chutneys</p>
      <p><strong>10:</strong>Bottled and canned fruits, pulps, juices and vegetables</p>
      <p><strong>11:</strong>Frozen vegetables and fruits</p>
      <p><strong>12:</strong>Sweetened aerated water without or with fruit pulps and juices</p>
      <p><strong>13:</strong>Any other item of vegetable or fruit not specified.</p>
      
      </div>
     </div>
      </div>
  )
}
