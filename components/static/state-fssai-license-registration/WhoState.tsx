import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/state-fssai-license-registration/who_needs.svg'

export const WhoState = () => {
  return (
    <div id='WhoState'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4'>
          <Image alt="Who needs a State FSSAI License?" className="needs-img w-100" height={550} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1: </strong>Companies with a yearly revenue of less than Rs 20 crores but more than Rs 12 lacs that operate in a single state.</p>
      <p><strong>2: </strong>Establishment handling proprietary food products.</p>
      <p><strong>3: </strong>A facility for producing and processing vegetable oil that meets the above turnover criteria through the use of solvent extraction. </p>
      <p><strong>4: </strong>Accommodations rated four stars or lower.</p>
      <p><strong>5: </strong>Dairy product handling facilities, such as Milk Chilling Units with 500–50,000 liters of production capacity.</p>
      <p><strong>6: </strong>Storages with an annual capacity of less than 50,000 metric tons.</p>
      <p><strong>7: </strong>An abattoir with a capacity of more than two and up to fifty huge animals. Or the ability to handle more than ten and up to 150 small animals. Or a daily capacity ranging from more than 50 to up to 1000 poultry birds.</p>
      <p><strong>8: </strong> All food processing facilities, including re-packing equipment, with a per-day capacity of 100kg/L to 2 metric tons.</p>
     
      </div>
     </div>
    </div>
  )
}
