import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-certification/types_of_bis_certification.svg'

interface HeroProps {
  cityName: string;
}

export const EventBased = ({ cityName }: HeroProps) => {
  return (
    <div id='EventBased'>
     <p className='main-para mb-2'>Throughout the BIS Certification process, we meticulously handle all BIS Schemes and standards. Our comprehensive assistance spans from filing the application form, overseeing testing procedures, to coordinating with BIS Officers until the successful acquisition of the Certificate. We specialize in aiding with product testing and obtaining various licenses falling under BIS. These licenses encompass:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="Types of BIS Certification,Throughout the BIS Certification process, we meticulously handle all BIS Schemes and standards." className="TypesBIS-img w-100" height={620} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 pt-5'>
      <p><strong>1: BIS CRS Certification (Compulsory Registration Scheme): </strong>Ensures mandatory registration for electronic products.</p>
      <p><strong>2: FMCS Certification (Foreign Manufacturers Certification Scheme): </strong>Facilitates certification for foreign manufacturers, ensuring adherence to Indian standards.</p>
      <p><strong>3: ISI Mark Certification: </strong>Signifies adherence to Indian Standards, providing assurance of product quality.</p>
      <p><strong>4: Hallmark: </strong>Ensures the quality and purity of precious metals, particularly relevant for jewelry.</p>
      <p><strong>5: Recognition of Assaying and Hallmarking Centre: </strong>Acknowledges and certifies entities engaged in assaying and hallmarking processes.</p>
      <p><strong>6: BIS Laboratory Recognition Scheme: </strong>Recognizes laboratories that meet stringent testing and certification standards.</p>
      <p><strong>7: Management System Certification: </strong>Certifies the implementation of effective management systems in businesses.</p>
      <p><strong>8: ECO Mark Certification: </strong>Recognizes products that adhere to environmental standards and sustainable practices.</p>
      </div>
     </div>
      </div>
  )
}
