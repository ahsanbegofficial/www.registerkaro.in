import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/bis-crs-certifiaction/denoting.svg'
interface HeroProps {  cityName: string;}
export const Decoding = ({ cityName }: HeroProps)  => {
  return (
    <div id='Decoding'>
      <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
      
      <div className='flex-7 pt-5'>
      <p className='main-para my-2'>CRS, denoting Compulsory Registration Scheme, originated in 2012 under the Ministry of Electronics and Information Technology, currently spanning 76 products. Entities involved in storing, selling, manufacturing, importing, or distributing these electronic products are mandated to obtain BIS CRS Certification. Manufacturers must apply after BIS-recognized lab testing, leading to registration and the coveted Standard Mark usage.</p>

      </div>
      <div className='flex-4 mt-2'>
          <Image alt="CRS, denoting Compulsory Registration Scheme" className="Decoding-img w-100" height={250} loading="lazy" src={bft} />
      </div>
     
       </div>
    </div>
  )
}