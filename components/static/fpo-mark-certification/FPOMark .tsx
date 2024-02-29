import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/fpo-mark-certification/fpo-mark-certification-application.svg'

interface HeroProps {
  cityName: string;
}
export const FPOMark  = ({ cityName }: HeroProps) => {
  return (
    <div id='FPOMark'>
       <p className='main-para mb-2'>Every food processing manufacturer should submit <strong>Form A (Application for License)</strong> as provided under the first schedule of the Food Products Order, 1955, to the ministry of food processing industries. The manufacturer must fill in the below details in the application:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
    <div className='flex-7 pt-5'>
      <p><strong>1:</strong>Name and address of the applicant</p>
      <p><strong>2:</strong>Address of the factory/firm</p>
      <p><strong>3:</strong>Description of the fruit products</p>
      <p><strong>4:</strong>Period for which the licence is required</p>
      <p><strong>5:</strong>Olan of the factory and list of equipment</p>
      <p><strong>6:</strong>Horsepower used to manufacture products, if any</p>
      <p><strong>7:</strong>Installed capacity of the equipment</p>
      <p><strong>8:</strong>Licence fee paid during the previous year, if any</p>
      <p><strong>9:</strong>The total value of the fruit products manufactured</p>
      <p><strong>10:</strong>Declaration of compliance with the food products Order, 1955 and payment of a fee</p>
      <p><strong>11:</strong>Signature of the applicant</p>
      </div>
       <div className='flex-3 mt-3'>
          <Image alt="FPO Mark Certification Application,Description of the fruit products,Period for which the licence is required ,Olan of the factory and list of equipment" className="FPOMark-img w-100" height={580} loading="lazy" src={bft} />
      </div>
     
     </div>
      </div>
  )
}
