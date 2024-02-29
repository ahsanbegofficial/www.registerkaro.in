
import React from 'react'
import Image from 'next/image'
import dft from '../../../assets/images/static/fpo-mark-certification/how-much-time-does-it-takes-to-obtain-the-fpo-mark.svg'

interface HeroProps {
  cityName: string;
}

export const HowMuchTime = ({ cityName }: HeroProps) => {
  return (
    <div >
       
       <div className='flex justify-content-center' id='DocumentsRequired'>
        <Image alt="How much time does it takes to obtain the FPO mark,The time will depend on the accuracy and completeness of the application. If all the details and documents will found correct then the authority will issue the certificate within 30 to 45 days." className="HowMuchTime-img w-100" height={282} loading="lazy" src={dft} />
      </div>
        <p className='main-para my-2'id='HowMuchTime'>The time will depend on the accuracy and completeness of the application. If all the details and documents will found correct then the authority will issue the certificate within 30 to 45 days.</p>
        
    </div>
  )
}