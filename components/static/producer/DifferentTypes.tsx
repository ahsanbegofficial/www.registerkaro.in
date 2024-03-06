import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/producer/typeofProducer.svg'

interface HeroProps {
  cityName: string;
}
export const DifferentTypes = ({ cityName }: HeroProps) => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Differnt'>
      <div className='flex-5'>
          <p>Following are the different types of Producer Companies in { cityName }:</p>
          <p><strong>Agricultural Producer Company:</strong> This type of Producer Company is set up by agriculturalists, farmers, or producers who are involved in the crop’s cultivation, poultry or dairy farming. The primary objective of an agricultural company is to increase the income of its members & improve their agricultural practices.</p>
          <p><strong>Sericulture Producer Company:</strong> It is set up by various individuals who are involved in the production of silk like silk reelers, weavers, or farmers. The primary objective of this Company is to improve the quality of silk produced, increase its availability & provide better marketing opportunities.</p>
          <p><strong>Horticultural Producer Company:</strong> It is established by individuals who are involved in horticulture like flowers, plants, growing fruits, or vegetables. The primary objective of this type of Company is to improve the quality of its products.</p>
          <p><strong>Handloom Producer Company:</strong> This type of Producer Company is set up by individuals who are involved in handloom weaving/handloom fabric production. The primary objective of a handloom company is to improve their products’ quality.</p>
        </div>
      <div className='flex-5'>
        <Image alt="the different types of Producer Companies in India" className="DifferentTypes-img w-100" height={600} loading="lazy" src={bft} />
      </div>
    </div>
  )
}
