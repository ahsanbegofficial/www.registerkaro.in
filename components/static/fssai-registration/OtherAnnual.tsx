import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/fssai/who.svg'

export const OtherAnnual = () => {
  return (
    <div id='OtherAnnual'>
      <p className='main-para mb-2'> FBOs or Food Business Operators are those involved in the processing, storing, manufacturing, selling, packaging, distributing, or retailing of food in India. In India, Food Businesses are regulated & managed by FSSAI.:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={450} loading="lazy" src={bft} />
      </div>
     
      <div className='flex-7 pt-5'>
      <p><strong>Following are some duties & responsibilities of Food Business Operators in India:</strong></p>
     <p><strong>1: </strong>Every FBO in India must obtain a Licence from the food safety authority in their State/UT and they must also follow all the food Safety & hygiene standards laid out by the Authority.</p>
     <p><strong>2: </strong>Food Business Operators must ensure that the food they serve is safe for human consumption & doesn’t risk customers’ health. They must also take all important measures to prevent the spread of any disease.</p>
     <p><strong>3: </strong>Food Business Operators in India must keep their premises clean & free from dust, dirt & other contaminants. They must also maintain proper sanitation facilities.</p>
     <p><strong>4: </strong>Food Business Operators must label all their food products properly. The label should contain all the vital details regarding the product, including the list of ingredients, the manufacture date, the shelf life & storage instructions.</p>
     <p><strong>5: </strong>Food Business Operators must keep all records of all food items they process, sell, or manufacture. These records must be made available to the Authority upon request.</p>
     <p><strong>6: </strong>Food Business Operators must allow the Food Safety Authority to inspect their facilities at any time and they must also cooperate with the Authority in investigating food-related incidents/complaints.</p>
    
      </div>
      </div>
      </div>
  )
}
